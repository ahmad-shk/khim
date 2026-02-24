"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    name: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    person: string;
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
        person: '',
        remarks: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});

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
        let tempErrors: FormErrors = {};
        if (!formData.name) tempErrors.name = "Name ist erforderlich";
        if (!formData.email) {
            tempErrors.email = "E-Mail ist erforderlich";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "E-Mail ist ungültig";
        }
        if (!formData.date) tempErrors.date = "Datum ist erforderlich";
        if (!formData.time) tempErrors.time = "Uhrzeit ist erforderlich";
        if (!formData.person || parseInt(formData.person) < 1) {
            tempErrors.person = "Mindestens 1 Person erforderlich";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
        try {
            const response = await fetch('/api/reservation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Vielen Dank! Die Bestätigung wurde an Ihre E-Mail gesendet.");
                setFormData({
                    name: '', phone: '', email: '', date: '', 
                    time: '', person: '', remarks: ''
                });
            } else {
                alert("Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Verbindung zum Server fehlgeschlagen.");
        }
    }
};

    // Common input class for reusability and black text
    const inputClass = "form-control text-black font-medium";

    return (
        <div className="form-box bg-white/30 backdrop-blur-xs rounded-[30px] p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                
                <div className="md:col-span-2">
                    <label className='fontrol-label' htmlFor="name">Name *</label>
                    <input 
                        type="text" id="name" placeholder="Name" 
                        className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`}
                        value={formData.name} onChange={handleChange}
                    />
                    {errors.name && <span className="text-red-500 text-sm mt-1 block font-semibold">{errors.name}</span>}
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="phone">Telefon (optional)</label>
                    <input 
                        type="tel" id="phone" placeholder="Telefon" 
                        className={inputClass}
                        value={formData.phone} onChange={handleChange}
                    />
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="email">E-Mail *</label>
                    <input 
                        type="email" id="email" placeholder="E-Mail" 
                        className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`}
                        value={formData.email} onChange={handleChange}
                    />
                    {errors.email && <span className="text-red-500 text-sm mt-1 block font-semibold">{errors.email}</span>}
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="date">Datum *</label>
                    <input 
                        type="date" id="date" 
                        className={`${inputClass} ${errors.date ? 'border-red-500' : ''}`}
                        value={formData.date} onChange={handleChange}
                    />
                    {errors.date && <span className="text-red-500 text-sm mt-1 block font-semibold">{errors.date}</span>}
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="time">Uhrzeit *</label>
                    <input 
                        type="time" id="time" 
                        className={`${inputClass} ${errors.time ? 'border-red-500' : ''}`}
                        value={formData.time} onChange={handleChange}
                    />
                    {errors.time && <span className="text-red-500 text-sm mt-1 block font-semibold">{errors.time}</span>}
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="person">Anzahl der Personen *</label>
                    <input 
                        type="number" id="person" placeholder="Personen" 
                        className={`${inputClass} ${errors.person ? 'border-red-500' : ''}`}
                        value={formData.person} onChange={handleChange}
                    />
                    {errors.person && <span className="text-red-500 text-sm mt-1 block font-semibold">{errors.person}</span>}
                </div>

                <div>
                    <label className='fontrol-label' htmlFor="remarks">Anmerkungen (optional)</label>
                    <input 
                        type="text" id="remarks" placeholder="Anmerkungen" 
                        className={inputClass}
                        value={formData.remarks} onChange={handleChange}
                    />
                </div>

                <div className="md:col-span-2 mt-6 text-center">
                    <button type="submit" className="btn btn-primary lg">
                        Tisch reservieren 
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReservationForm;