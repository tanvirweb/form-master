import useStateForm from "../../hooks/useStateForm";

const FormPage4 = () => {

    const nameState = useStateForm("");
    const emailState = useStateForm("");

    const handleForm = e => {
        e.preventDefault();
        console.log(nameState.value, emailState.value);
    }

    return (
        <form onSubmit={handleForm}>
            <input {...nameState} type="text" name="name" />
            <input {...emailState} type="email" name="email" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default FormPage4;