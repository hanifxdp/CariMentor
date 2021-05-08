import Head from "next/head";
import Header from "../app/components/Header";
import Home from "./home";

export default function App() {
  return (
    <div>
      <Head>
        <title>Cari Mentor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
