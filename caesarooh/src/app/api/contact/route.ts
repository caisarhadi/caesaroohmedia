import { NextResponse } from 'next/server';
import { ContactFormData } from '@/services/formService';
import { sendContactFormEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email
    await sendContactFormEmail(data);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
} 