import { Router } from 'express';
import { upload } from '../../config/multer';
import { uploadImage } from '../../templates/controllers/image.controller';

const router = Router();

/**
 * POST /api/upload/image
 * Upload product image
 * Expects multipart/form-data with 'image' field
 */
router.post('/image', upload.single('image'), uploadImage);

export default router;

