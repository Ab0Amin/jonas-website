import React from "react";

export default function About() {
  return (
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="about-info">
              <h2 class="wow fadeInUp red-border" data-wow-delay="0.6s">
                Welcome to Your <i class="fa fa-h-square"></i>ealth Center
              </h2>
              <div class="wow fadeInUp" data-wow-delay="0.8s">
                <p className="red-border">
                  change Aenean luctus lobortis tellus, vel ornare enim molestie
                  condimentum. Curabitur lacinia nisi vitae velit volutpat
                  venenatis.
                </p>
                <p className="red-border">
                  Sed a dignissim lacus. Quisque fermentum est non orci commodo,
                  a luctus urna mattis. Ut placerat, diam a tempus vehicula.
                </p>
              </div>
              <figure
                class="profile wow fadeInUp red-border"
                data-wow-delay="1s"
              >
                <img
                  src="images/author-image.jpg"
                  class="img-responsive red-border"
                  alt=""
                />
                <figcaption>
                  <h3>Dr. Neil Jackson</h3>
                  <p>General Principal</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
