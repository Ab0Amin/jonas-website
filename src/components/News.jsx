import React from "react";

export default function News() {
  return (
    <section id="news" data-stellar-background-ratio="2.5">
      <div class="container">
        <div class="row ">
          <div class="col-md-12 col-sm-12 ">
            {/* <!-- SECTION TITLE --> */}
            <div class="section-title wow fadeInUp " data-wow-delay="0.1s">
              <h2 className="red-border">Services</h2>
            </div>
          </div>

          <div class="col-md-4 col-sm-6 ">
            {/* <!-- NEWS THUMB --> */}
            <div
              class="news-thumb wow fadeInUp red-border"
              data-wow-delay="0.4s"
            >
              <a href="news-detail.html">
                <img
                  src="images/news-image1.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                <span>March 08, 2018</span>
                <h3>
                  <a href="news-detail.html">About Amazing Technology</a>
                </h3>
                <p>
                  Maecenas risus neque, placerat volutpat tempor ut, vehicula et
                  felis.
                </p>
                <div class="author">
                  <img
                    src="images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Jeremie Carlson</h5>
                    <p>CEO / Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
