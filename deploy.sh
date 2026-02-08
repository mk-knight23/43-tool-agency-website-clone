#!/bin/bash

# =============================================================================
# BlueLupin Agency Website - Deployment Script
# =============================================================================
# Deploys the Vue 3 + Tailwind agency website to Vercel
# =============================================================================

set -e

REPO_NAME="43-tool-agency-website-clone"

echo "🚀 Deploying $REPO_NAME to Vercel..."

# Check if vercel-cli is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing vercel-cli..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "🔗 Deploying to Vercel..."

if [ -n "$VERCEL_TOKEN" ]; then
    vercel --token="$VERCEL_TOKEN" --prod
else
    vercel --prod
fi

echo "✅ Deployment complete!"
echo "🌐 Live URL: Check Vercel dashboard for your production URL"
