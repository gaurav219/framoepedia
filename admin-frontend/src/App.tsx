import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import imageQuery from "./queries/image";
import { Images } from "./interfaces/Image";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { loading, error, data } = useQuery<Images>(imageQuery);
  console.log(error, "er");
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
}

export default App;
