const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
        <footer className="w-full h-14 bg-slate-200 m-auto text-center">
            <p className="text-xl">
                Copyright &copy; {currYear}, Made with 💗 by{" "}
                <strong>PAWXNSINGH</strong>
            </p>
        </footer>
    );
};

export default Footer;
