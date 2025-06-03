import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import Index from "../../components/Layouts/client/Contact/Index";

const Contact = () => {
  return (
    <>
      <Helmet title="Blog | Contact" />

      <Navbar />
      <Index />
      <Footer />
    </>
  );
};

export default Contact;
