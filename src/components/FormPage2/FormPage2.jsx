import { useState } from "react";

const FormPage2 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleName = e => {
        setName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handleForm = e => {
        e.preventDefault();
        console.log(name, email)
    }

    return (
        <form>
            <input onChange={handleName} type="text" name="name" />
            <input onChange={handleEmail} type="email" name="email" />
            <input onClick={handleForm} type="submit" value="Submit" />
        </form>
    );
};

export default FormPage2;