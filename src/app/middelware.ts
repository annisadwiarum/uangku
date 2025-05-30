import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const supabase = createMiddlewareClient({
        
    })
}