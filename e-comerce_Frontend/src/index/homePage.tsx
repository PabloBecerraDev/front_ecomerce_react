import Navbar from "@/navbar/navbar"
import Home from "@/homeProducts/Home";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
type Props = {}

const HomePage = (props: Props) => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
      );
      const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setIsTopOfPage(true);
            setSelectedPage(SelectedPage.Home);
          }
          if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      
  return (
    <div className="app gap-y-8">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home/>
    </div>
  );
}

export default HomePage