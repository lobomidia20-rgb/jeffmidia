import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Numbers from "@/components/Numbers";
import Shows from "@/components/Shows";
import Videos from "@/components/Videos";
import Press from "@/components/Press";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="futuristic-scanlines" />
      <Header />
      <main>
        <Hero />
        <About />
        <Numbers />
        <Shows />
        <Press />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
