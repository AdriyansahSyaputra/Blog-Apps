import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Templates/client/Navbar";
import Footer from "../../components/Templates/client/Footer";
import { useTheme } from "../../context/ThemeContext";
import HeroSection from "../../components/Layouts/client/About/HeroSection";
import MissionSection from "../../components/Layouts/client/About/MissionSection";
import TeamSection from "../../components/Layouts/client/About/TeamSection";
import StatsSection from "../../components/Layouts/client/About/StatsSection";
import TimelineSection from "../../components/Layouts/client/About/TimelineSection";
import ValuesSection from "../../components/Layouts/client/About/ValuesSection";

const AboutPage = () => {
  const { darkMode } = useTheme();

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Full-stack developer with 10+ years experience building web applications.",
      avatar: "/avatars/sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      bio: "UI/UX specialist focused on creating intuitive user experiences.",
      avatar: "/avatars/michael.jpg",
    },
    {
      name: "Emma Wilson",
      role: "Content Director",
      bio: "Technical writer passionate about making complex topics accessible.",
      avatar: "/avatars/emma.jpg",
    },
    {
      name: "David Kim",
      role: "Frontend Engineer",
      bio: "React expert who loves building interactive interfaces.",
      avatar: "/avatars/david.jpg",
    },
  ];

  const milestones = [
    { year: "2018", event: "Founded BlogZen with a small team of 3 people" },
    { year: "2019", event: "Reached 10,000 monthly active readers" },
    { year: "2020", event: "Launched our premium membership program" },
    { year: "2021", event: "Featured as 'Top Tech Blog' by DevMagazine" },
    { year: "2022", event: "Expanded to video content and tutorials" },
    { year: "2023", event: "Reached 1 million monthly page views" },
  ];

  return (
    <>
      <Helmet title="Blog | About" />

      <Navbar />

      <main
        className={`pb-12 min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <HeroSection darkMode={darkMode} />

        <MissionSection darkMode={darkMode} />

        <TeamSection darkMode={darkMode} teamMembers={teamMembers} />

        <StatsSection darkMode={darkMode} />

        <TimelineSection darkMode={darkMode} milestones={milestones} />

        <ValuesSection darkMode={darkMode} />
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
