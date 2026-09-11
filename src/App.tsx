import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Banner from "./components/common/Banner";
import Footer from "./components/common/Footer";
import Technologies from "./components/techs/Technologies";
import type { ITechnology } from "./types/technology";


const technologiesPromise = async (): Promise<ITechnology[]> => {
  const res = await fetch("./data.json")
  const data = await res.json()
  return data
}
// console.log(dataPromise);

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <Technologies technologiesPromise={technologiesPromise()}></Technologies>
      </Suspense>

      {/* <div className="divider"> </div>

      <button
        type="button"
        className="counter btn btn-outline"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button> */}

      <Footer></Footer>
    </>
  );
}

export default App;
