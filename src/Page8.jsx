import React from "react";
import author1 from "./svg/author1.png";
import author2 from "./svg/author2.png";
import author3 from "./svg/author3.png";
import dot1 from "./svg/dot1.png";
import dot from "./svg/dot.png";
const Page8 = () => {
  return (
    <div className="page8 main">
      <div className="testimonials">
        <div className="test-heading">
          <span>Loved by the world's best</span>
        </div>
        <div className="tests">
          <div className="test-cols">
            <div className="test-text">
              Really good software that works amazingly well. The videos are
              helpful. I think it takes a little getting used to but works
              really well and I'm growing my connections on LinkedIn in a very
              targeted way day by day. Thanks for this!
            </div>
            <div className="author">
              <img src={author1} alt="author1" />
              <div className="author-desc">
                <span>Ana</span>
                <span>Design Team Lead at xyz</span>
              </div>
            </div>
          </div>
          <div className="test-cols">
            <div className="test-text">
              An essential tool for anyone with a LinkedIn Premium account who
              is serious about building their business. I would thoroughly
              recommend it. The cost is minimal to the level of business it can
              generate or provide.
            </div>
            <div className="author">
              <img src={author2} alt="author1" />
              <div className="author-desc">
                <span>Lauria</span>
                <span>Head of Design at xyz</span>
              </div>
            </div>
          </div>
          <div className="test-cols">
            <div className="test-text">
              Fantastic tool for LinkedIn! Makes messaging and new connections
              so much faster and easier, plus it's simple to use. Still getting
              my head around setting up the funnels but the videos are very
              helpful. Highly recommend.
            </div>
            <div className="author">
              <img src={author3} alt="author1" />
              <div className="author-desc">
                <span>Licia</span>
                <span>Head of Design at xyz</span>
              </div>
            </div>
          </div>
        </div>
        <div className="next-buttons">
          <a href="">
            <img src={dot} />
          </a>
          <a href="">
            <img src={dot1} />
          </a>
          <a href="">
            <img src={dot} />
          </a>
          <a href="">
            <img src={dot} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page8;
