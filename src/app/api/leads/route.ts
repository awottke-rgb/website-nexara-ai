import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'E-Mail ist erforderlich' }, { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();
    
    // Basic regex check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
    }

    // Since we don't have Supabase configured yet (no env variables),
    // we'll simulate a successful DB operation if the client isn't fully setup.
    // This allows the UI to work before the backend is fully wired up.
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.log('Mock saving lead (Supabase not configured):', { email: trimmedEmail, source });
      // Simulate network latency
      await new Promise(resolve => setTimeout(resolve, 800));
      return NextResponse.json({ success: true, mocked: true });
    }

    const { error } = await supabase
      .from('leads')
      .insert([{ email: trimmedEmail, source: source || 'unknown' }]);

    if (error) {
      if (error.code === '23505') { // unique constraint violation
        return NextResponse.json({ success: true, message: 'Already registered' }, { status: 409 });
      }
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Datenbankfehler' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 });
  }
}
