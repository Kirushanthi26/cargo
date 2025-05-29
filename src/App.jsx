import { ClientLogo } from "./components/clientLogos/ClientLogo";
import Footer from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Intro } from "./components/intro/Intro";
import LatestNews from "./components/news/LatestNews";
import { ServiceSession } from "./components/services/ServiceSession";
import { Stats } from "./components/stats/Stats";
import TrustedClients  from "./components/testimonials/TrustedClients";
import { Layout } from "./UI/layout/Layout";
import { Nav } from "./UI/nav/Nav";

export const App = () => {
  return (
    <Layout>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <ServiceSession />
        <Stats />
        <TrustedClients />
        <ClientLogo />
        <LatestNews />
        <Footer />
      </main>
    </Layout>
  );
};
