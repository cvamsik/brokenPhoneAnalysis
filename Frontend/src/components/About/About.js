import React, { Component } from "react";

class About extends Component {
  render() {
    return (
    <div>
      <div className="py-5">
        <div className="about container" id="about">
          <div className="row">
            <div className="px-5 col-md-8 text-center mx-auto">
              <h3 className="text-primary display-4">
                <br></br>
                <b>Phone broken ? No worries we are here</b>
              </h3>
              <h2 className="my-3">
              - Our Mission -
              </h2>
              <h1>To provide the best  and fair prices to customers</h1>
              <p className="mb-3">
                The pain of losing a phone is extreme. Our daily life stops functioning perfectly. We want to 
                provide a clean and fair menthod of phone exchange and recycle for better green.
              </p>{" "}
              <h2 className="text-primary display-6">
                <b> What you can do</b>
              </h2>
              <iframe
                width="650"
                height="372"
                src="https://www.youtube.com/embed/__sidP3SY-0"
              ></iframe>
              <h2 className="text-primary display-6">
                <b> What and How are we gonna do!</b>
              </h2>
              <iframe
                width="650"
                height="372"
                src="https://www.youtube.com/embed/p4LnEafIzsk"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default About;
