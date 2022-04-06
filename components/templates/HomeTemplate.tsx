import { Navigation } from "components/molecules/Navigation";
import { Header } from "components/organisms/Header";
import { Menu } from "components/organisms/Menu";
import { HowItWorks } from "components/organisms/HowItWorks";
import { Testimonials } from "components/organisms/Testimonials";
import { ContactUs } from "components/organisms/ContactUs";
import { Footer } from "components/organisms/Footer";

export const HomeTemplate = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Menu />
      <HowItWorks />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};
