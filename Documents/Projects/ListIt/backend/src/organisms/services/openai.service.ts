import { openai, OPENAI_MODELS } from '../../config/openai';
import { ProductIdentification, GeneratedContent } from '../../types/openai.types';
import { Platform } from '../../constants/platforms';

/**
 * Identify product from image using GPT-4 Vision
 */
export async function identifyProductFromImage(
  imageBase64: string
): Promise<ProductIdentification> {
  try {
    const response = await openai.chat.completions.create({
      model: OPENAI_MODELS.VISION,
      messages: [
        {
          role: 'system',
          content: `You are an expert at identifying products from images. Analyze the product image and provide detailed information about it.`,
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `Analyze this product image and provide:
1. Category: The main product category (e.g., "Electronics", "Clothing", "Furniture", "Books", etc.)
2. Condition: The condition of the item (e.g., "New", "Like New", "Very Good", "Good", "Fair", "Poor")
3. Brand: The brand name if visible, otherwise null
4. Features: An array of 5-10 key features or characteristics of the product
5. Suggested Keywords: An array of 10-15 relevant search keywords for this product

Return your response as a JSON object with this exact structure:
{
  "category": "string",
  "condition": "string",
  "brand": "string or null",
  "features": ["string", "string", ...],
  "suggestedKeywords": ["string", "string", ...]
}`,
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${imageBase64}`,
              },
            },
          ],
        },
      ],
      max_tokens: 1000,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    // Parse JSON response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid JSON response from OpenAI');
    }

    const identification = JSON.parse(jsonMatch[0]) as ProductIdentification;

    // Validate required fields
    if (!identification.category || !identification.condition) {
      throw new Error('Missing required identification fields');
    }

    // Ensure arrays exist
    identification.features = identification.features || [];
    identification.suggestedKeywords = identification.suggestedKeywords || [];

    return identification;
  } catch (error) {
    console.error('Error identifying product:', error);
    throw new Error(`Failed to identify product: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Generate listing content optimized for a specific platform
 */
export async function generateListingContent(
  identification: ProductIdentification,
  platform: Platform,
  imageBase64?: string
): Promise<GeneratedContent> {
  try {
    const platformGuidelines = getPlatformGuidelines(platform);

    const messages: any[] = [
      {
        role: 'system',
        content: `You are an expert at creating compelling product listings for online marketplaces. Generate optimized titles, descriptions, and tags based on the product information provided.`,
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Generate a product listing for ${platform} with the following product information:
- Category: ${identification.category}
- Condition: ${identification.condition}
- Brand: ${identification.brand || 'Not specified'}
- Features: ${identification.features.join(', ')}

${platformGuidelines}

Return your response as a JSON object with this exact structure:
{
  "title": "string (optimized for ${platform}, max 80 characters)",
  "description": "string (compelling product description, 2-4 paragraphs)",
  "tags": ["string", "string", ...] (5-10 relevant tags)
}`,
          },
        ],
      },
    ];

    // Optionally include image for better context
    if (imageBase64) {
      messages[1].content.push({
        type: 'image_url',
        image_url: {
          url: `data:image/jpeg;base64,${imageBase64}`,
        },
      });
    }

    const response = await openai.chat.completions.create({
      model: OPENAI_MODELS.CHAT,
      messages,
      max_tokens: 800,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    // Parse JSON response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid JSON response from OpenAI');
    }

    const generatedContent = JSON.parse(jsonMatch[0]) as GeneratedContent;

    // Validate required fields
    if (!generatedContent.title || !generatedContent.description) {
      throw new Error('Missing required content fields');
    }

    // Ensure tags array exists
    generatedContent.tags = generatedContent.tags || [];

    return generatedContent;
  } catch (error) {
    console.error('Error generating content:', error);
    throw new Error(`Failed to generate content: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Complete pipeline: identify product and generate content
 */
export async function processComplete(
  imageBase64: string,
  platform: Platform
): Promise<{
  identification: ProductIdentification;
  content: GeneratedContent;
}> {
  try {
    // Step 1: Identify product
    const identification = await identifyProductFromImage(imageBase64);

    // Step 2: Generate content
    const content = await generateListingContent(identification, platform, imageBase64);

    return {
      identification,
      content,
    };
  } catch (error) {
    console.error('Error in complete pipeline:', error);
    throw error;
  }
}

/**
 * Get platform-specific guidelines for content generation
 */
function getPlatformGuidelines(platform: Platform): string {
  const guidelines: Record<Platform, string> = {
    ebay: `eBay Guidelines:
- Title: Use all 80 characters, include brand, model, key features, condition
- Description: Be detailed and honest, include measurements, specifications, any flaws
- Tags: Include brand, category, condition, style keywords`,

    facebook: `Facebook Marketplace Guidelines:
- Title: Clear and concise, include brand and main feature
- Description: Friendly and conversational, mention condition clearly, include location if relevant
- Tags: Focus on local search terms, category, brand`,

    vinted: `Vinted Guidelines:
- Title: Include brand, item type, size, condition
- Description: Fashion-focused, mention material, care instructions, why you're selling
- Tags: Brand, style, color, size, condition keywords`,

    depop: `Depop Guidelines:
- Title: Trendy and searchable, include brand, style, era/vintage if applicable
- Description: Aesthetic and engaging, mention unique features, styling tips
- Tags: Include aesthetic keywords, brand, style, era, color`,
  };

  return guidelines[platform] || guidelines.ebay;
}

