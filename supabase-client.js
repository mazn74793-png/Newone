import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://anlstahxxpbbfnwrwulu.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFubHN0YWh4eHBiYmZud3J3dWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1NDQzMTIsImV4cCI6MjA4ODEyMDMxMn0.4RQxQ4AZZCVCswTRdJoZ7Jz9qNwQq0fPs7vitnMJ3A4";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
