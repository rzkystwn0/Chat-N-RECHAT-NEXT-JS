import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
    <Head>
    <title>Chat N' RECHAT</title>
    </Head>
    <div className="bg-background">
        <NavBar />
        <Hero />
        <Main />
        <Footer />
    </div>
    </>
  );
}
