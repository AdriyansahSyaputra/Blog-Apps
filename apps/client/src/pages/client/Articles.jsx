import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";

const Articles = () => {
    return (
        <>
            <Helmet title="Articles | Client" />

            <Navbar />
            <Footer />
        </>
    );
};

export default Articles;