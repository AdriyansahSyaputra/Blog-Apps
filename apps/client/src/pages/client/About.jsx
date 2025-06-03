import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import Index from "../../components/Layouts/client/About/Index";

const About = () => {
  return (
    <>
      <Helmet title="Blog | About" />

      <Navbar />
      <Index />
      <Footer />
    </>
  );
};

export default About;
