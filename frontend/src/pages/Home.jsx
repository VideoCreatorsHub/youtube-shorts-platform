import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import DashboardPreview from "../components/DashboardPreview";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <DashboardPreview />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}