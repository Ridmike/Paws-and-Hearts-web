"use client";

import React, { useState } from 'react';
import Button from '@/components/common/Button';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitting(true);

    // Simulate a submit (replace with real API call later)
    await new Promise((res) => setTimeout(res, 750));

    setIsSubmitting(false);
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-green-50 p-6 border border-green-100">
        <h3 className="text-lg font-semibold text-[#92400E]">Thanks — we received your message!</h3>
        <p className="mt-2 text-sm text-zinc-700">Our team will get back to you within 2 business days.</p>
        <Button className="mt-4" variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-xl">
      <div>
        <label className="text-sm font-medium text-zinc-700">Your name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-lg border border-zinc-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#FFDAB9]"
          placeholder="Jane Doe"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-lg border border-zinc-200 p-3 focus:outline-none focus:ring-2 focus:ring-[#FFDAB9]"
          placeholder="you@domain.com"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-700">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full min-h-[140px] rounded-lg border border-zinc-200 p-3 resize-vertical focus:outline-none focus:ring-2 focus:ring-[#FFDAB9]"
          placeholder="How can we help?"
          required
        />
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" isLoading={isSubmitting} variant="secondary">
          Send message
        </Button>
        <Button type="button" variant="ghost" onClick={() => { setName(''); setEmail(''); setMessage(''); }}>
          Clear
        </Button>
      </div>
    </form>
  );
}
