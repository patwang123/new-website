import React from "react";

const Schools = () => (
  <>
    <div style={{padding: "1rem 0"}}>
      <div style={{ display: "inline-block", width: "100%" }}>
        <div style={{ float: "left" }}>
          <h4 style={{ margin: 0, padding: 0 }}>
            University of California, Berkeley
          </h4>
          <div>B.S. Electrical Engineering and Computer Science</div>
        </div>
        <div style={{ float: "right" }}>August 2020 ⁠— Present</div>
      </div>
      <div>
        GPA: 4.0
      </div>
    </div>
    <div style={{padding: "1rem 0"}}>
      <div style={{ display: "inline-block", width: "100%" }}>
        <div style={{ float: "left" }}>
          <h4 style={{ margin: 0, padding: 0 }}>
            Montgomery Blair High School
          </h4>
          <div>STEM Magnet Program</div>
        </div>
        <div style={{ float: "right" }}>August 2016 ⁠— June 2020</div>
      </div>
      <div>
        USACO Gold Medalist, AIME qualifier, Varsity swimming
      </div>
    </div>
  </>
);

export default Schools;
