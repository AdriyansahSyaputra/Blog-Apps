import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import { useTheme } from "../../context/ThemeContext";
import HeroSection from "../../components/Layouts/client/Contact/HeroSection";
import ContactFormSection from "../../components/Layouts/client/Contact/ContactFormSection";
import TeamSection from "../../components/Layouts/client/Contact/TeamSection";
import SocialMediaSection from "../../components/Layouts/client/Contact/SocialMediaSection";
import FaqSection from "../../components/Layouts/client/Contact/FaqSection";
import CtaSection from "../../components/Layouts/client/Contact/CtaSection";
import { AtSign, Compass, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const { darkMode } = useTheme();

  const teamContacts = [
    {
      name: "Sarah Johnson",
      role: "Customer Support",
      email: "sarah@blogzen.com",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri, 9AM-5PM EST",
      avatar: "/avatars/sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Technical Inquiries",
      email: "michael@blogzen.com",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Fri, 10AM-6PM EST",
      avatar: "/avatars/michael.jpg",
    },
  ];

  const socialMedia = [
    {
      name: "Twitter",
      handle: "@blogzen",
      icon: <AtSign className="h-5 w-5" />,
      url: "#",
    },
    {
      name: "Instagram",
      handle: "@blogzen.official",
      icon: <Compass className="h-5 w-5" />,
      url: "#",
    },
    {
      name: "LinkedIn",
      handle: "BlogZen Inc.",
      icon: <MessageSquare className="h-5 w-5" />,
      url: "#",
    },
  ];
  return (
    <>
      <Helmet title="Blog | Contact" />

      <Navbar />
      <main
        className={`pb-12 min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <HeroSection darkMode={darkMode} />
        <ContactFormSection darkMode={darkMode} />
        <TeamSection darkMode={darkMode} teamContacts={teamContacts} />
        <SocialMediaSection darkMode={darkMode} socialMedia={socialMedia} />
        <FaqSection darkMode={darkMode} />
        <CtaSection darkMode={darkMode} />
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
