import React from 'react';
import Banner from '../components/Banner.js';

function Home(props) {
  return (
    <div>
      <Banner 
        backgroundImage="url(assets/img/bg-gift.jpg)"
        title="Ciro papel"
        subtitle="Bienes y servicios"
      />

      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            Cirocorp
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;