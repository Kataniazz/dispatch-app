import { useState } from "react"

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    company?: string // honeypot
}


type Errors = Partial<FormState>;

export function useContactForm() {
    const [form, setForm] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        company: "", // honeypot
    })

    const [errors, setErrors] = useState<Errors>({});

     const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const validate = (): boolean => {
        const newErrors: Errors = {};

        if (!form.firstName.trim()) {
            newErrors.firstName = 'firstNameRequired';
        }

        if (!form.lastName.trim()) {
            newErrors.lastName = 'lastNameRequired';
        }

        if (!form.email.includes("@")) {
            newErrors.email = 'validEmailRequired';
        }

        if (!form.phone.match(/^[0-9+\-\s()]{7,}$/)) {
            newErrors.phone = 'validPhoneRequired';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!validate()) return;

        setStatus("loading");

        try {
            const res = await fetch("/.netlify/functions/contact", {
                method: "POST",
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error();

            setStatus("success");
            setForm({ 
                firstName: "", 
                lastName: "", 
                email: "", 
                phone: "" ,
                message: ""
            });
        } catch {
            setStatus("error");
        }
    };

    return {
        form,
        errors,
        status,
        handleChange,
        handleSubmit,
    };
}