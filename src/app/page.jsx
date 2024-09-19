
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MyNavbar from "@/components/navbar";

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
