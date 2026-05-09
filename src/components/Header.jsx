import { useLocation } from "react-router";
import { brainwave } from "../../public/assets";
import { navigation } from "./constants";
import Button from './Button';
import MenuSvg from './../../public/assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false)
   
  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev)
    if(openNavigation === false){
      enablePageScroll()
    } else {
      disablePageScroll()
    }
  }
  const handleCLick = () => {
      if(openNavigation === false) return
      enablePageScroll()
    setOpenNavigation(false)
  }

  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8 ' : 'bg-n-8/90 backdrop-blur-sm'  }`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-xl:py-4">
        <a href="#hero" className="block w-48 xl:mr-8">
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>
        <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-20 left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative x-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
                onClick={handleCLick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md;py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${pathName.hash === item.url ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12 `}
              >
                {item.title}
              </a>
            ))}
            
          </div>
          <HamburgerMenu/>
        </nav>
        <a
          href="#signup"
          className="button text-n-1/50 mr-8 hidden transition-colors hover:text-n-1 lg:block"
        >
          new account
        </a>
        <Button className={"hidden! lg:flex!"} href={"#login"} >
          sign in
        </Button>

        <Button className={'ml-auto lg:hidden'} onClick={toggleNavigation} px='px-3'>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
