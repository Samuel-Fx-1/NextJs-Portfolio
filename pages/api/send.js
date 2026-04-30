export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, subject, message } = req.body;

    // Validate inputs
    if (!email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log the message (for now)
    console.log('📧 New message received:');
    console.log('From:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // TODO: Add email sending logic here
    // For now, just simulate success
    // You can add Resend, Nodemailer, or EmailJS later

    return res.status(200).json({ 
      success: true, 
      message: 'Message received successfully!' 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Failed to send message' 
    });
  }
}