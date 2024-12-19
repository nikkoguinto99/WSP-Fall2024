import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dkpsnzscauiayjdsgilq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrcHNuenNjYXVpYXlqZHNnaWxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMTgxMDYsImV4cCI6MjA0Nzc5NDEwNn0.YgpipkCzKCjrlbCDAFnAk-znOd06HFJSrh622U8_1YE";
const supabase = createClient(supabaseUrl, supabaseKey);

function getConnection() {
    return supabase;
}

module.exports = { getConnection };

export default supabase;