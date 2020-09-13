import React from 'react';

export default () => (
  <section className="services" id="services">
    <article className="services__heading">
      <h2>Our services</h2>
      <div className="border" />
      <p>
        We provide to you the best choiches for you.
        Adjust it to your health needs and make sure
        your undergo treatment with our highly qualified
        doctors you can consult with us which type of
        service is suitable for your health
      </p>
    </article>
    <div className="services__cards">
      <div className="services__card">
        <img src="./assets/search-doctor.svg" alt="search doctor" />
        <h4>Search doctor</h4>
        <p>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
      </div>
      <div className="services__card">
        <img src="./assets/online-pharmacy.svg" alt="online pharmacy" />
        <h4>Online pharmacy</h4>
        <p>Buy  your medicines with our mobile application with a simple delivery system</p>
      </div>
      <div className="services__card">
        <img src="./assets/consultation.svg" alt="consultation" />
        <h4>Consultation</h4>
        <p>Free consultation with our trusted doctors and get the best recomendations</p>
      </div>
    </div>
    <div className="services__cards">
      <div className="services__card">
        <img src="./assets/details-info.svg" alt="details info" />
        <h4>Details info</h4>
        <p>Free consultation with our trusted doctors and get the best recomendations</p>
      </div>
      <div className="services__card">
        <img src="./assets/emergency-care.svg" alt="emergency care" />
        <h4>Emergency care</h4>
        <p>
          You can get 24/7 urgent care for yourself or your children and your
          lovely family
        </p>
      </div>
      <div className="services__card">
        <img src="./assets/tracking.svg" alt="tracking" />
        <h4>Tracking</h4>
        <p>Track and save your medical history and health data </p>
      </div>
    </div>
  </section>
);
