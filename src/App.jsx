
import Button from "./components/Button";
import Header from "./components/Header";
import ButtonGradient from './../public/assets/svg/ButtonGradient';

const App = () => {
  return (
    <>
      <h1 className="text-3xl ">hello</h1>
      <div className="pt-19 lg:pt-21 overflow-hidden ">
      <Header/> 
      </div>
      <ButtonGradient/>
    </>
  );
};

export default App;
