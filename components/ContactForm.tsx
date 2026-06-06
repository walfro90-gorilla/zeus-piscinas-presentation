'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      // Simulación de envío
      await new Promise((r) => setTimeout(r, 1500));
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-brand.blue">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          placeholder="¿En qué podemos ayudarte?"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 bg-brand.aqua text-white font-semibold rounded-lg hover:opacity-90 transition"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
        {status === 'success' && <p className="text-green-600 text-center">¡Mensaje enviado con éxito!</p>}
        {status === 'error' && <p className="text-red-600 text-center">Por favor completa todos los campos correctamente.</p>}
      </form>
    </section>
  );
}
