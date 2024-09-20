
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyNavbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <MyNavbar/>
      </header>
      <main>
        <Hero/>
      </main>
      <Footer/>
    </>
  );
}
