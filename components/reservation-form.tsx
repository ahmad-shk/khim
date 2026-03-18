"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ───────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_wpbcu6l';
const EMAILJS_TEMPLATE_ID = 'template_vkbhb5w';      // → email to restaurant
const EMAILJS_CUSTOMER_TEMPLATE = 'template_u29g94f'; // → confirmation to customer
const EMAILJS_PUBLIC_KEY = 'Ln1QPxODiYW2IvUJd';
// ─────────────────────────────────────────────────────────────────────────────

interface FormData {
    name: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    guests: string;
    remarks: string;
}

interface FormErrors {
    [key: string]: string;
}

const ReservationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        remarks: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        if (errors[id]) {
            const newErrors = { ...errors };
            delete newErrors[id];
            setErrors(newErrors);
        }
    };

    const validate = (): boolean => {
        const tempErrors: FormErrors = {};
        if (!formData.name) tempErrors.name = 'Name ist erforderlich';
        if (!formData.email) {
            tempErrors.email = 'E-Mail ist erforderlich';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'E-Mail ist ungültig';
        }
        if (!formData.date) tempErrors.date = 'Datum ist erforderlich';
        if (!formData.time) tempErrors.time = 'Uhrzeit ist erforderlich';
        if (!formData.guests || parseInt(formData.guests) < 1) {
            tempErrors.guests = 'Mindestens 1 Person erforderlich';
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');

        if (!validate()) return;

        // Format date for display: 2025-03-20 → 20.03.2025
        const [y, m, d] = formData.date.split('-');
        const formattedDate = `${d}.${m}.${y}`;

        setLoading(true);
        try {
            const templateData = {
                customer_name: formData.name,
                customer_email: formData.email,
                customer_phone: formData.phone || '—',
                date: formattedDate,
                time: formData.time + ' Uhr',
                guests: formData.guests,
                remarks: formData.remarks || '—',
            };

            // Send both emails in parallel
            await Promise.all([
                // 1. Notify restaurant
                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateData, EMAILJS_PUBLIC_KEY),
                // 2. Confirmation to customer
                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CUSTOMER_TEMPLATE, templateData, EMAILJS_PUBLIC_KEY),
            ]);

            setSuccessMsg('Vielen Dank! Eine Bestätigung wurde an Ihre E-Mail gesendet. Wir melden uns in Kürze.');
            setFormData({ name: '', phone: '', email: '', date: '', time: '', guests: '', remarks: '' });
        } catch (error: any) {
            console.error('EmailJS error:', error);
            setErrorMsg('Etwas ist schiefgelaufen. Bitte rufen Sie uns an: +43 677 6317 8906');
        } finally {
            setLoading(false);
        }
    };

    const inputClass = 'form-control text-black font-medium';

    return (
        <div className="form-box bg-white/30 backdrop-blur-xs rounded-[30px] p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

                <div className="md:col-span-2">
                    <label className='fontrol-label' htmlFor="name">Name *</label>
                    <input
                        type="text" id="name" placeholder="Name"
                        className={`${inputClass} appearance-none ${errors.name ? 'border-red-500' : ''}`}
                        value={formData.name} onChange={handleChange}
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-1 block font-semibold">{errors.name}</span>}
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="phone">Telefon (optional)</label>
                    <input
                        type="tel" id="phone" placeholder="Telefon"
                        className={`${inputClass} appearance-none`}
                        value={formData.phone} onChange={handleChange}
                    />
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="email">E-Mail *</label>
                    <input
                        type="email" id="email" placeholder="E-Mail"
                        className={`${inputClass} appearance-none ${errors.email ? 'border-red-500' : ''}`}
                        value={formData.email} onChange={handleChange}
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1 block font-semibold">{errors.email}</span>}
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="date">Datum *</label>
                    <input
                        type="date" id="date"
                        className={`${inputClass} appearance-none ${errors.date ? 'border-red-500' : ''}`}
                        value={formData.date} onChange={handleChange}
                    />
                    {errors.date && <span className="text-red-500 text-sm mt-1 block font-semibold">{errors.date}</span>}
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="time">Uhrzeit *</label>
                    <input
                        type="time" id="time"
                        className={`${inputClass} appearance-none ${errors.time ? 'border-red-500' : ''}`}
                        value={formData.time} onChange={handleChange}
                    />
                    {errors.time && <span className="text-red-500 text-sm mt-1 block font-semibold">{errors.time}</span>}
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="guests">Anzahl der Personen *</label>
                    <input
                        type="number" id="guests" placeholder="Anzahl der Personen" min="1"
                        className={`${inputClass} appearance-none ${errors.guests ? 'border-red-500' : ''}`}
                        value={formData.guests} onChange={handleChange}
                    />
                    {errors.guests && <span className="text-red-500 text-sm mt-1 block font-semibold">{errors.guests}</span>}
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="remarks">Anmerkungen (optional)</label>
                    <input
                        type="text" id="remarks" placeholder="Anmerkungen"
                        className={`${inputClass} appearance-none`}
                        value={formData.remarks} onChange={handleChange}
                    />
                </div>

                <div className="md:col-span-2 mt-6 text-center">
                    <button type="submit" className="btn btn-primary lg" disabled={loading}>
                        {loading ? 'Wird gesendet...' : 'Tisch reservieren'}
                    </button>
                </div>

                {successMsg && (
                    <div className="md:col-span-2 mt-4 p-4 bg-green-500/20 border border-green-400 rounded-xl text-white text-center font-medium">
                        ✅ {successMsg}
                    </div>
                )}
                {errorMsg && (
                    <div className="md:col-span-2 mt-4 p-4 bg-red-500/20 border border-red-400 rounded-xl text-white text-center font-medium">
                        ⚠️ {errorMsg}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ReservationForm;