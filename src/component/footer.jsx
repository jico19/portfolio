const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="text-center py-6 text-gray-600 bg-gray-50">
            © {year} Jerwin Nico Quijano
        </footer>
    );
};

export default Footer;
