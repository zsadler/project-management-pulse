// Load environment variables
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Log the current directory and .env file path
const envPath = join(__dirname, '.env');
console.log('Current directory:', __dirname);
console.log('.env file path:', envPath);
console.log('.env file exists:', existsSync(envPath));

// Configure dotenv with logging
const result = dotenv.config({ debug: true });

if (result.error) {
    console.log('Error loading .env file:', result.error);
} else {
    console.log('.env file loaded successfully');
}

// Log all environment variables
console.log('\nAll environment variables:');
console.log(process.env);

// Print environment variables
console.log('SUPABASE_PROJECT_ID:', process.env.SUPABASE_PROJECT_ID)
console.log('SERVICE_ROLE_KEY:', process.env.SERVICE_ROLE_KEY)
console.log('VITE_SUPABASE_URL:', process.env.VITE_SUPABASE_URL)

console.log('SUPABASE_URL:', process.env.SUPABASE_URL)