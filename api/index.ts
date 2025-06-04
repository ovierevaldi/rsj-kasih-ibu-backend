import app from '../src/index.js'; // or '../src/index.ts' if you're using TypeScript
import serverless from 'serverless-http';

export const handler = serverless(app);