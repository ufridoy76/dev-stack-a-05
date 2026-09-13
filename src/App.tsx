import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Banner from "./components/common/Banner";
import Footer from "./components/common/Footer";
import type { ITechnology } from "./types/technology";
import Technologies from "./components/techs/Technologies";
import { ToastContainer } from "react-toastify";

const technologiesPromise = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};


function App() {
  const [stackCount, setStackCount] = useState<number>(0);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense
        fallback={<span className="loading loading-spinner loading-md"></span>}
      >
        <Technologies
          technologiesPromise={technologiesPromise()}
          stackCount={stackCount}
          setStackCount={setStackCount}
        ></Technologies>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
