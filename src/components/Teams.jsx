import React from "react";

export default function Teams() {
  return (
    <section id="team" data-stellar-background-ratio="1">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="about-info">
              <h2 class="wow fadeInUp red-border" data-wow-delay="0.1s">
                Doctor Cirtificates
              </h2>
            </div>
          </div>

          <div class="clearfix"></div>

          <div style={{ width: "100%", height: "100%" }}>
            <div class="col-md-4 col-sm-6 red-border">
              <div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                <img
                  src="images/team-image1.jpg"
                  class="img-responsive"
                  alt=""
                />

                <div class="team-info red-border">
                  <h3>Nate Baston</h3>
                  <p>General Principal</p>
                  <div class="team-contact-info">
                    <p>
                      <i class="fa fa-phone"></i> 010-020-0120
                    </p>
                    <p>
                      <i class="fa fa-envelope-o"></i>{" "}
                      <a href="#">general@company.com</a>
                    </p>
                  </div>
                  <ul class="social-icon">
                    <li>
                      <a href="#" class="fa fa-linkedin-square"></a>
                    </li>
                    <li>
                      <a href="#" class="fa fa-envelope-o"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              class="col-md-4 col-sm-6 red-border"
              style={{ width: "70%", height: "100%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
