import { useState, useEffect, useRef } from "react";

const useForm = ({ initialValues, onSubmit }) => {
    const [values, setValues] = useState(initialValues || {});
    // eslint-disable-next-line no-unused-vars
    const [onSubmitting, setOnSubmitting] = useState(false);

    const formRendered = useRef(true);

    useEffect(() => {
        if (formRendered.current) {
            setValues(initialValues);
            setOnSubmitting(false);
        }
        formRendered.current = false;
    }, [initialValues]);

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        event.persist();
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        if (event) 
            event.preventDefault();

        onSubmit({ values });
    };

    return {
        values,
        handleChange,
        handleSubmit
    };
};

export default useForm;