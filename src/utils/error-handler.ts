import type { App } from 'vue';

/**
 * Global Error Handler for catching and reporting unexpected Vue component issues.
 */
export function setupErrorHandler(app: App): void {
    app.config.errorHandler = (err, instance, info) => {
        // Log to console for development
        console.error('BlueLupin | Uncaught Exception:', {
            error: err,
            instance,
            info
        });

        // In a real app, this would send to an error reporting service like Sentry
        // We'll log it and ensure the application doesn't completely crash
        console.warn('System anomaly detected in component tree. Localized failure captured.');
    };

    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
        console.error('BlueLupin | Unhandled Promise Rejection:', event.reason);
    });
}
