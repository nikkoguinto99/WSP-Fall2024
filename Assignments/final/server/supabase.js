require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");

/**
 * @typedef {import('../client/src/models/supabase').Database } ProductDatabase
 * @typedef {import('@supabase/supabase-js').SupabaseClient<ProductDatabase>} ProductClient
 */

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
    supabase,
};