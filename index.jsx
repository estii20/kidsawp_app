import React from "react";
import frame2 from "./frame-2.svg";
import frame3 from "./frame-3.svg";
import frame4 from "./frame-4.svg";
import frame5 from "./frame-5.svg";
import frame from "./frame.svg";
import image from "./image.svg";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="body">
        <div className="div">
          <div className="overlap">
            <div className="main">
              <div className="section">
                <div className="div-2">
                  <button className="button">
                    <div className="text-wrapper">All Items</div>
                  </button>

                  <button className="div-wrapper">
                    <div className="text-wrapper-2">Girls</div>
                  </button>

                  <button className="button-2">
                    <div className="text-wrapper-3">Boys</div>
                  </button>

                  <button className="button-3">
                    <div className="text-wrapper-4">Babies</div>
                  </button>

                  <button className="button-4">
                    <div className="text-wrapper-5">Accessories</div>
                  </button>
                </div>
              </div>

              <div className="section-2">
                <div className="text-wrapper-6">Featured Items</div>

                <div className="div-3">
                  <div className="div-4">
                    <div className="img-wrapper">
                      <div className="img" />
                    </div>

                    <div className="div-5">
                      <div className="text-wrapper-7">Pink Summer Dress</div>

                      <div className="text-wrapper-8">$24.99</div>

                      <div className="text-wrapper-9">Size: 4-5y</div>
                    </div>
                  </div>

                  <div className="div-6">
                    <div className="img-wrapper">
                      <div className="img-2" />
                    </div>

                    <div className="div-5">
                      <div className="text-wrapper-10">Denim Overalls</div>

                      <div className="text-wrapper-11">$34.99</div>

                      <div className="text-wrapper-9">Size: 3-4y</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-3">
                <div className="div-7">
                  <div className="sell-your-kids">
                    Sell Your Kids&#39; Clothes
                  </div>

                  <p className="p">Turn outgrown clothes into cash!</p>

                  <button className="button-5">
                    <div className="text-wrapper-12">Start Selling</div>
                  </button>
                </div>
              </div>
            </div>

            <header className="header">
              <div className="div-8">
                <div className="div-9">
                  <div className="text-wrapper-13">KidsSwap</div>
                </div>

                <div className="div-10">
                  <div className="frame-wrapper">
                    <div className="frame">
                      <img className="frame-2" alt="Frame" src={frame4} />
                    </div>
                  </div>

                  <button className="overlap-group-wrapper">
                    <div className="overlap-group">
                      <div className="frame-3">
                        <img className="frame-4" alt="Frame" src={frame5} />
                      </div>

                      <div className="span">
                        <div className="text-wrapper-14">3</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </header>
          </div>

          <div className="nav">
            <div className="div-11">
              <button className="button-6">
                <div className="frame-5">
                  <img className="frame-6" alt="Frame" src={frame} />
                </div>

                <div className="text-wrapper-15">Home</div>
              </button>

              <button className="button-7">
                <div className="frame-7">
                  <img className="frame-2" alt="Frame" src={image} />
                </div>

                <div className="text-wrapper-16">Saved</div>
              </button>

              <button className="button-8">
                <div className="frame-8">
                  <img className="frame-2" alt="Frame" src={frame2} />
                </div>

                <div className="text-wrapper-16">Sell</div>
              </button>

              <button className="button-9">
                <div className="frame-9">
                  <img className="frame-4" alt="Frame" src={frame3} />
                </div>

                <div className="text-wrapper-16">Profile</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};