import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()
  
  // TODO: Add actual email submission logic
  console.log(`New waitlist signup: ${email}`)
  
  return NextResponse.json({ success: true })
}
