import { createClient } from '@supabase/supabase-js';

// Cache for form code validation results
// Stores { formCode: { isValid: boolean, timestamp: number } }
const formCodeCache = new Map<string, { isValid: boolean; timestamp: number }>();

// Cache TTL in milliseconds (1 hour by default)
const FORM_CODE_CACHE_TTL = 60 * 60 * 1000;

/**
 * Server-side Supabase client with secret key
 * Used for server-only operations that require elevated permissions
 */
export function getServerSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient(supabaseUrl, supabaseSecretKey);
}

/**
 * Validates if a form_code exists in the forms table with caching
 * @param formCode - The form code to validate
 * @param cacheTTL - Optional cache TTL in milliseconds (default: 1 hour)
 * @returns Object with isValid boolean and optional error message
 */
export async function validateFormCode(
  formCode: string,
  cacheTTL: number = FORM_CODE_CACHE_TTL
): Promise<{ isValid: boolean; error?: string }> {
  if (!formCode || !formCode.trim()) {
    return { isValid: false, error: 'form_code is required' };
  }

  // Check cache first
  const cached = formCodeCache.get(formCode);
  if (cached) {
    const now = Date.now();
    if (now - cached.timestamp < cacheTTL) {
      console.log(`📦 [Form Code] Cache hit for: ${formCode}`);
      return { isValid: cached.isValid };
    } else {
      // Cache expired, remove it
      formCodeCache.delete(formCode);
    }
  }

  try {
    const supabase = getServerSupabaseClient();

    const { data, error } = await supabase
      .from('forms')
      .select('form_code')
      .eq('form_code', formCode)
      .limit(1)
      .single();

    const isValid = !error && !!data;

    // Store in cache
    formCodeCache.set(formCode, {
      isValid,
      timestamp: Date.now()
    });

    if (!isValid) {
      return { isValid: false, error: 'Invalid form_code' };
    }

    return { isValid: true };
  } catch (err) {
    console.error('Error validating form_code:', err);
    return { isValid: false, error: 'Error validating form_code' };
  }
}

/**
 * Clears the form code validation cache
 */
export function clearFormCodeCache(): void {
  formCodeCache.clear();
  console.log('🗑️ [Form Code] Cache cleared');
}
