// pages/api/route.ts (without nodemailer)
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  return NextResponse.json({ message: 'Use EmailJS or Resend instead of nodemailer' });
}