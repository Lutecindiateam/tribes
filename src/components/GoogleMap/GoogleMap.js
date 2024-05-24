import React from "react";

const GoogleMap = () => {
  return (
    <section className="contact-page-google-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.805841570337!2d76.10806287505464!3d11.637180888568807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60c9fa44a948b%3A0xf33a04503c1ef5fd!2sSwami%20Vivekananda%20Medical%20Mission%20Hospital!5e0!3m2!1sen!2sin!4v1711612554750!5m2!1sen!2sin" className="contact-page-google-map__one"
        allowFullScreen></iframe>
      {/* <iframe
        src="https://maps.app.goo.gl/CLKfnmtvANiHQr7i6"
        className="contact-page-google-map__one"
        allowFullScreen
      ></iframe> */}
    </section>
  );
};

export default GoogleMap;
