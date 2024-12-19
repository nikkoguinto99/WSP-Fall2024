require("dotenv").config()
const { createClient } = require("@supabase/supabase-js")

/**
 * @typedef {import('../../client/src/models/supabase').Database } ProductDatabase
 * @typedef {import('@supabase/supabase-js').SupabaseClient<ProductDatabase>} ProductClient
 */

module.exports = {
    /**
     * @returns {ProductClient}
     */
    getConnection() {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SECRET_KEY;

        if (!supabaseUrl || !supabaseKey) {
            throw new Error("Missing Supabase URL or Secret Key. Check your .env file.");
        }

        return createClient(supabaseUrl, supabaseKey);
    },
}