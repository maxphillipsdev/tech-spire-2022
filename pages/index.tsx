import type { NextPage } from "next";
import Head from "next/head";
import Countdown from "../components/Countdown";

const Home: NextPage = () => {
  const EVENT_DATE = new Date(2022, 9, 28, 15);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid h-full grid-cols-7 place-content-center bg-green-100">
        <div className="col-span-5 grid grid-rows-3 items-center justify-center bg-orange-800 text-center">
          <div className="row-span-1 bg-orange-100"></div>
          <div className="row-span-1 flex bg-orange-200">
            <Countdown targetDate={EVENT_DATE} />
          </div>
          <div className="row-span-1 bg-orange-300"></div>
        </div>
        <div className="col-span-2 grid grid-rows-3 bg-red-100">
          <div className="row-span-1"></div>
          <div className="row-span-1"></div>
        </div>
      </main>
    </>
  );
};

export default Home;
