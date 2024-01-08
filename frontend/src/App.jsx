import { useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";

const apiToken =
  "a54c81d2caefe202207e5e102964571c8dea743b574931da5467c8a46afc31b95efe38ae008646413528f2e9421e85d18cf2efb91702f0699511e7b244345002424279df60d4e4f1bb5f4e3c953a7e2dbd267ff1f6dac36fba81834dffabc88ef5bfada18d4393d67e9edb7d0746b690bb20e24880fc955a381c9eb27d7c6b86";

function App() {
  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/blogs/`,
    apiToken
  );

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error..</p>;

  console.log(data);
  return (
    <>
      <p>Test</p>
    </>
  );
}

export default App;
