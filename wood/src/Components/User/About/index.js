import React from 'react';

import {
  Parallax,
  AppContainer,
  TextImageLeft,
  TextImageRight,
} from '../UserComponents';

import infoImg1 from "../../../assets/images/info-img01.jpg";
import infoImg2 from "../../../assets/images/info-img02.jpg";

function About() {
  const blocks = [
    {
      image: infoImg1,
      title: "WHO WE ARE",
      description: "OUR COMPANY CAN BOAST THE REPUTATIONOF THE TRUSTED PARTNER KNOWN WORLDWIDE. WE ARE PROUD OF THE UNCOMPROMISING QUALITY OF SERVICES WE PROVIDE. PLACING CUSTOMERS’ NEEDS FIRST IN EVERYTHING WE DO,WE CONTINUE TO GROW RAPIDLYAS THE INDUSTRY LEADER.",
    },
    {
      image: infoImg2,
      title: "WHAT WE DO",
      description: "ESTABLISHED IN 1982 WE HAVE BEEN RESTORING ANTIQUE FURNITURE TO THE HIGHEST STANDARDS FOR APPRECIATIVE CLIENTS EVER SINCE. WE HAVE A TEAM OF HIGHLY SKILLED AND DEDICATED APPRENTICE TRAINED CRAFTSMEN, WHO HAVE MANY YEARS OF EXPERIENCE THAT ENABLES US TO DEAL WITH THE MOST DIFFICULT PROBLEMS.",
    },
    {
      image: infoImg2,
      title: "WHAT PEOPLE SAY",
      description: "HI, GUYS! YOU’VE SOLVED MY PROBLEM IN NO TIME! YOUR EFFICIENT SERVICES AND CUSTOMER CARE ARE SECOND TO NONE! I AM VERY HAPPY! I WILL SURELY SHARE MY EXPERIENCE WITH MY FRIENDS!",
    },
  ];
  return (
    <AppContainer>
      <TextImageLeft
        image={infoImg1}
        title={blocks[0].title}
        description={blocks[0].description}
      />
      <Parallax />
      <TextImageRight
        image={infoImg2}
        title={blocks[1].title}
        description={blocks[1].description}
      />
      <TextImageLeft
        image={infoImg1}
        title={blocks[2].title}
        description={blocks[2].description}
      />
    </AppContainer>
  );
}

export default About;
