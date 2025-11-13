import { Request, Response } from 'express';
import { ERROR_MESSAGES, ERROR_CODES } from '../../constants/errors';

/**
 * Handle image upload
 * Expects multipart/form-data with 'image' field
 */
export async function uploadImage(req: Request, res: Response): Promise<void> {
  try {
    if (!req.file) {
      res.status(ERROR_CODES.BAD_REQUEST).json({
        error: ERROR_MESSAGES.MISSING_REQUIRED_FIELD,
        message: 'No image file provided',
      });
      return;
    }

    // Convert buffer to base64
    const imageBase64 = req.file.buffer.toString('base64');
    const mimeType = req.file.mimetype;

    // Return the base64 encoded image
    res.json({
      success: true,
      imageBase64,
      mimeType,
      filename: req.file.originalname,
      size: req.file.size,
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(ERROR_CODES.INTERNAL_SERVER).json({
      error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

