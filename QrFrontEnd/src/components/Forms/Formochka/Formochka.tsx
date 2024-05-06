import React, { FormEvent } from 'react';

// Define the generic props for the form
interface FormProps<T> {
    onSubmit: (data: T) => void;
}

// Define the generic form component
function Formochka<T>({ onSubmit }: FormProps<T>) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Get the form data here and pass it to the onSubmit callback
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data as T);
    };

    return (
        <form onSubmit={handleSubmit}>

            {/* Render your form fields here */}
        </form>
    );
}

export default Formochka;