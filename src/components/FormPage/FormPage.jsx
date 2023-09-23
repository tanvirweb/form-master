const FormPage = () => {
    const handleForm = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <form onSubmit={handleForm}>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default FormPage;