import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wgsfgkwykmdeqhtplfkn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indnc2Zna3d5a21kZXFodHBsZmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2ODgxNzMsImV4cCI6MjA0NTI2NDE3M30.lRKa2jMZm5Y9HYB_2z_7LQa3OnerbolG4GNnBBfsV-E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
