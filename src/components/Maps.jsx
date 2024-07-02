import React from "react";

export default function Maps() {
  return (
    <section id="google-map">
      {/* <!-- How to change your own map point
           1. Go to Google Maps
           2. Click on your location point
           3. Click "Share" and choose "Embed map" tab
           4. Copy only URL and paste it within the src="" field below
        --> */}
      {/* <iframe
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13754.761818764233!2d31.182481250000002!3d30.4732046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7df5a8f1433c5%3A0x2facb66afd26aef3!2z2YXZitin2LMg2YTZhNmF2KPZg9mI2YTYp9iqINin2YTYqNit2LHZitip!5e0!3m2!1sar!2seg!4v1719958414096!5m2!1sar!2seg"
        width="100%"
        height="350"
        frameborder="0"
        style={{
          border: "0",
        }}
        allowfullscreen
      ></iframe>
    </section>
  );
}
