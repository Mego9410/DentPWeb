import { Request, Response } from 'express';
import {
  identifyProductFromImage,
  generateListingContent,
  processComplete,
} from '../../organisms/services/openai.service';
import { ERROR_MESSAGES, ERROR_CODES } from '../../constants/errors';
import { Platform, PLATFORMS } from '../../constants/platforms';

/**
 * Identify product from image
 * POST /api/process/identify
 * Body: { imageBase64: string }
 */
export async function identifyProduct(req: Request, res: Response): Promise<void> {
  try {
    const { imageBase64 } = req.body;

    if (!imageBase64) {
      res.status(ERROR_CODES.BAD_REQUEST).json({
        error: ERROR_MESSAGES.MISSING_REQUIRED_FIELD,
        message: 'imageBase64 is required',
      });
      return;
    }

    const identification = await identifyProductFromImage(imageBase64);

    res.json({
      success: true,
      identification,
    });
  } catch (error) {
    console.error('Error identifying product:', error);
    res.status(ERROR_CODES.INTERNAL_SERVER).json({
      error: ERROR_MESSAGES.OPENAI_ERROR,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * Generate listing content
 * POST /api/process/generate
 * Body: { identification: ProductIdentification, platform: Platform, imageBase64?: string }
 */
export async function generateContent(req: Request, res: Response): Promise<void> {
  try {
    const { identification, platform, imageBase64 } = req.body;

    if (!identification) {
      res.status(ERROR_CODES.BAD_REQUEST).json({
        error: ERROR_MESSAGES.MISSING_REQUIRED_FIELD,
        message: 'identification is required',
      });
      return;
    }

    if (!platform) {
      res.status(ERROR_CODES.BAD_REQUEST).json({
        error: ERROR_MESSAGES.MISSING_REQUIRED_FIELD,
        message: 'platform is required',
      });
      return;
    }

    // Validate platform
    const validPlatforms = Object.values(PLATFORMS);
    if (!validPlatforms.includes(platform as Platform)) {
      res.status(ERROR_CODES.BAD_REQUEST).json({
        error: ERROR_MESSAGES.INVALID_PLATFORM,
        message: `Platform must be one of: ${validPlatforms.join(', ')}`,
      });
      return;
    }

    const content = await generateListingContent(
      identification,
      platform as Platform,
      imageBase64
    );

    res.json({
      success: true,
      content,
    });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(ERROR_CODES.INTERNAL_SERVER).json({
      error: ERROR_MESSAGES.OPENAI_ERROR,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * Complete pipeline: identify + generate
 * POST /api/process/complete
 * Body: { imageBase64: string, platform: Platform }
 */
export async function processCompletePipeline(req: Request, res: Response): Promise<void> {
  try {
    const { imageBase64, platform } = req.body;

    if (!imageBase64) {
      res.status(ERROR_CODES.BAD_REQUEST).json({
        error: ERROR_MESSAGES.MISSING_REQUIRED_FIELD,
        message: 'imageBase64 is required',
      });
      return;
    }

    if (!platform) {
      res.status(ERROR_CODES.BAD_REQUEST).json({
        error: ERROR_MESSAGES.MISSING_REQUIRED_FIELD,
        message: 'platform is required',
      });
      return;
    }

    // Validate platform
    const validPlatforms = Object.values(PLATFORMS);
    if (!validPlatforms.includes(platform as Platform)) {
      res.status(ERROR_CODES.BAD_REQUEST).json({
        error: ERROR_MESSAGES.INVALID_PLATFORM,
        message: `Platform must be one of: ${validPlatforms.join(', ')}`,
      });
      return;
    }

    const result = await processComplete(imageBase64, platform as Platform);

    res.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error('Error in complete pipeline:', error);
    res.status(ERROR_CODES.INTERNAL_SERVER).json({
      error: ERROR_MESSAGES.OPENAI_ERROR,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

