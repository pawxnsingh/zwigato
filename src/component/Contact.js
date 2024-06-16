const Contact = () => {
    return (
        <div className="text-center mx-auto">
            <h1 className="font-bold uppercase text-3xl p-4 m-4">Contact</h1>

            <form>
                <input
                    type="text"
                    className="border border-black p-4 m-4"
                    placeholder="Enter you name"
                />
                <input
                    type="text"
                    className="border border-black p-4 m-4"
                    placeholder="Enter you contact"
                />
                <button className="border uppercase font-bold border-black p-4 m-4">Submit</button>
            </form>
        </div>
    );
};
export default Contact;
