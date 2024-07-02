import React from "react";

export default function Appointment() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("done");
      })
      .catch((error) => alert(error));
  };
  return (
    <section id="appointment" data-stellar-background-ratio="3">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <img
              src="images/appointment-image.jpg"
              class="img-responsive"
              alt=""
            />
          </div>

          <div class="col-md-6 col-sm-6">
            {/* <!-- CONTACT FORM HERE --> */}
            <form
              id="appointment-form"
              name="appointment-form"
              role="form"
              method="post"
              action="#"
              onSubmit={handleSubmit}
              netlify
            >
              {/* <!-- SECTION TITLE --> */}
              <div class="section-title wow fadeInUp" data-wow-delay="0.4s">
                <h2>Make an appointment</h2>
              </div>

              <div class="wow fadeInUp" data-wow-delay="0.8s">
                <div class="col-md-6 col-sm-6">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>

                <div class="col-md-6 col-sm-6">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>

                <div class="col-md-6 col-sm-6">
                  <label for="date">Select Date</label>
                  <input
                    type="date"
                    name="date"
                    value=""
                    class="form-control"
                  />
                </div>

                <div class="col-md-6 col-sm-6">
                  <label for="select">Select Department</label>
                  <select class="form-control">
                    <option>General Health</option>
                    <option>Cardiology</option>
                    <option>Dental</option>
                    <option>Medical Research</option>
                  </select>
                </div>

                <div class="col-md-12 col-sm-12">
                  <label for="telephone">Phone Number</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                  />
                  <label for="Message">Additional Message</label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <button
                    type="submit"
                    class="form-control"
                    id="cf-submit"
                    name="submit"
                  >
                    Submit Button
                  </button>
                </div>
              </div>
              <input
                type="hidden"
                name="appointment-form-input"
                value="appointment-form"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
