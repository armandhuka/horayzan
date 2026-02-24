import { createClient } from '@supabase/supabase-js'

/**
 * Administrative Supabase client for backend operations.
 * This client uses the SERVICE_ROLE_KEY and bypasses Row Level Security (RLS).
 * IT MUST NEVER BE USED ON THE CLIENT SIDE.
 */
export const createAdminClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
        throw new Error('Missing Supabase Admin environment variables')
    }

    return createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })
}
