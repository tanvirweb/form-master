import { useEffect, useRef } from "react";

const FormPage3 = () => {
    const name = useRef();
    const email = useRef();

    const handleForm = e => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(email.current.value);
    }

    useEffect(() => {
        name.current.focus();
    }, [])

    return (
        <form onSubmit={handleForm}>
            <input ref={name} type="text" name="name" />
            <input ref={email} type="email" name="email" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default FormPage3;