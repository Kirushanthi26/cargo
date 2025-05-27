import { Hero } from "./components/hero/Hero";
import { Layout } from "./UI/layout/Layout";
import { Nav } from "./UI/nav/Nav";

export const App = () => {
  return (
    <Layout>
      <Nav />
      <main>
        <Hero />
      </main>
    </Layout>
  );
};
