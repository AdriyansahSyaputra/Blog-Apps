import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import Index from "../../components/Layouts/client/Home";

const Home = () => {
  return (
    <>
      <Helmet title="Home | Client" />

      <Navbar />
      <Index />
      <Footer />
    </>
  );
};

export default Home;
