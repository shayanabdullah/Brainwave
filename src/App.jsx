import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <h1 className="text-3xl ">hello</h1>
      <div className="pt-19 lg:pt-20 ">
        <Button className="mt-10" href="#login">
          something
        </Button>
        <ButtonGradient/>
      </div>
    </>
  );
};

export default App;
