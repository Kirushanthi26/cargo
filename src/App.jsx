import { ClientLogo } from "./components/clientLogos/ClientLogo";
import { Hero } from "./components/hero/Hero";
import { Intro } from "./components/intro/Intro";
import { ServiceSession } from "./components/services/ServiceSession";
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
        <ClientLogo />
      </main>
    </Layout>
  );
};
