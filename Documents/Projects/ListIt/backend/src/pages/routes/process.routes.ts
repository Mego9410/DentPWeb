import { Router } from 'express';
import {
  identifyProduct,
  generateContent,
  processCompletePipeline,
} from '../../templates/controllers/process.controller';

const router = Router();

/**
 * POST /api/process/identify
 * Identify product from image
 * Body: { imageBase64: string }
 */
router.post('/identify', identifyProduct);

/**
 * POST /api/process/generate
 * Generate listing content
 * Body: { identification: ProductIdentification, platform: Platform, imageBase64?: string }
 */
router.post('/generate', generateContent);

/**
 * POST /api/process/complete
 * Complete pipeline: identify + generate
 * Body: { imageBase64: string, platform: Platform }
 */
router.post('/complete', processCompletePipeline);

export default router;

