'use server';

export async function sendContactEmail(formData: FormData) {
    console.log('Form submission received, but logic is disabled.');
    // In a real app, you'd process the form data and send an email.
    return { success: true };
}

