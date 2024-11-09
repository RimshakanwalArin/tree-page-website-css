import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
// import Footer from './footer/page';

function HomePage() {
  return (
    <main className="main">
      <div className="hero">
        <h1 className="heading">Better Solutions For Your Life</h1>
        <Image
          className="image"
          src="/Allah.jpg"
          alt="picture"
          width={600}
          height={600}
        />
      </div>

      <h5 className="subHeading">
        Hamari life ky all issue ka hal sirf Allah kay paas hai, jo bara Rehman aur bohot Maaf karnay wala hai.
      </h5>

      <div className="buttonContainer">
        <button className="button">Get Started</button>
        <button className="button">Read More</button>
      </div>
      {/* <Footer /> */}
    </main>
  );
}

export default HomePage;
