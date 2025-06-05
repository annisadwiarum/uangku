import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data, error } = await supabase.auth.getSession();

  console.log('dataaaaaaaaaaaaaa', data);
  console.log('errorrrrrrrrrrrrr:', error);

  return res;
}

