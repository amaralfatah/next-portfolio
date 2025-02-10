// ContactForm.tsx
'use client';
import {ChangeEvent, FormEvent, useState} from 'react';
import emailjs from '@emailjs/browser';
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {AlertCircle, CheckCircle2} from "lucide-react";
import {Alert, AlertDescription} from "@/components/ui/alert";

// Tambahkan ini sebelum komponen ContactForm
emailjs.init("QdkV99AroXCn9Zeji"); // Gunakan public key Anda

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    error: null,
    success: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({loading: true, error: null, success: false});

    try {
      // Tambahkan validasi email sederhana
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const result = await emailjs.sendForm(
        'service_6sfihlo',
        'template_22525qd',
        e.target as HTMLFormElement, // Gunakan form element langsung
        'QdkV99AroXCn9Zeji'
      );

      if (result.status === 200) {
        setStatus({loading: false, error: null, success: true});
        setFormData({name: '', email: '', message: ''});
      }
    } catch (error: any) {
      setStatus({
        loading: false,
        error: error.message || 'Failed to send message. Please try again.',
        success: false,
      });
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-background"
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-background"
        />

        <Textarea
          name="message"
          placeholder="Share your thoughts, ideas, or opportunities..."
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-background min-h-[120px]"
        />

        <Button
          type="submit"
          variant="default"
          disabled={status.loading}
          className="w-full"
        >
          {status.loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>

      {status.error && (
        <Alert variant="destructive" className="mt-4 flex items-center">
          <div className="h-full me-2"><AlertCircle className="h-4 w-4 "/></div>
          <AlertDescription>{status.error}</AlertDescription>
        </Alert>
      )}

      {status.success && (
        <Alert className="mt-4 flex items-center">
          <div className="h-full me-2"><CheckCircle2 className="h-4 w-4 "/></div>
          <AlertDescription>
            Message sent successfully! I'll get back to you as soon as possible.
          </AlertDescription>
        </Alert>
      )}

    </div>
  );
};

export default ContactForm;
