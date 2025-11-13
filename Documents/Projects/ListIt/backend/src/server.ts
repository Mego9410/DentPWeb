import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import imageRoutes from './pages/routes/image.routes';
import processRoutes from './pages/routes/process.routes';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Health check / Hello world endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'ListIt API Server',
    status: 'running',
    version: '1.0.0',
  });
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use('/api/upload', imageRoutes);
app.use('/api/process', processRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: err.message || 'Internal server error',
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Route not found',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;

