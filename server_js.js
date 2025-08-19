const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files from public directory
app.use(express.static('public'));

// Security headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data:; font-src 'self' data:;");
    next();
});

// Route for root - serve the main site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'online', 
        message: 'Hunter-Net is operational',
        timestamp: new Date().toISOString()
    });
});

// Handle all other routes - redirect to main site (SPA behavior)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    res.status(500).send('Hunter-Net is experiencing technical difficulties. Please try again.');
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
    console.log('🔴 SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('🔴 Process terminated');
    });
});

const server = app.listen(PORT, () => {
    console.log(`🌐 Hunter-Net is running on port ${PORT}`);
    console.log(`🔗 Local access: http://localhost:${PORT}`);
    console.log(`🎯 Environment: ${process.env.NODE_ENV || 'development'}`);
});