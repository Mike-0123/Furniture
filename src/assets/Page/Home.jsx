import React from "react";
import NavBar from "../Components/NavBar";
import Sliders from "../Components/Sliders";
import Cards from "../Components/Cards1";
import Section from "../Components/Footer";
import SecondComp from "../Components/Second";
import ObjectActive from "../Components/ObjectActive";

import SellItems from "../Components/SellPrice";
import ByoseComp from "../Components/ByoseComp";
import SecondByose from "../Components/SecondByose";
import NewsCombined from "../Components/CombinedInfo";
import ManyDiv from "../Components/ManyDiv";
import NewsUpDate from "../Components/NewsUpDate";

const Home = () => {
    return ( 
        <>
        <NavBar/>
        <Sliders/>
        <Cards/>
        <SecondComp/>
        <ObjectActive/>
        <SellItems/>
        <ByoseComp/>
        <SecondByose/>
        <NewsCombined/>
        <ManyDiv/>
        <NewsUpDate/>
        <Section/>
      
       

      
      
        </>
     );
}
 
export default Home;