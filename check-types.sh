#!/bin/bash

set -e  # Exit on any error

echo "🔍 Running TypeScript type checking..."

echo "📋 Checking backend types..."
cd backend
npm run typecheck
echo "✅ Backend types OK"

echo "📋 Checking frontend types..."
cd ../frontend
npm run typecheck
echo "✅ Frontend types OK"

echo "🎉 All type checks passed!" 