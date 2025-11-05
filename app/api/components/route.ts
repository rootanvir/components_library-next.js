import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "Supabase env vars missing" }, { status: 500 });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data, error } = await supabase.from("components_lib").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const filePath = path.join(process.cwd(), "public/json/comList.json");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json(data || []);
}
