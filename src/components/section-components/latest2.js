import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Latest2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div style={{borderRadius:"8px"}} className="post-area bg-sky pd-top-50 pd-bottom-50">
        <div className="container">
          <div className="section-title" style={{ textAlign: "center" }}>
            <h4 style={{fontWeight:"bold", color:"rgb(149,5,5)"}} className="title">Astrological Remedies to get rid of your Problems</h4>
          </div>
          <div className="post-slider owl-carousel">
            <div className="item">
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <img style={{borderRadius:"8px"}} src={publicUrl + "assets/img/post/list/evil.jpg"} alt={imagealt} />
                  <p style={{paddingTop:"10px", fontWeight:"700", color:"rgb(149,5,5)", paddingBottom:"0px", marginBottom:"0px"}}>Ward of Evil Spirits</p><p style={{paddingTop:"0px"}}>Get rid of any type of Evil Spirits</p>
                  <button  className="btn-custom">
                    Check Now
                  </button>
                </div>

                <div style={{ textAlign: "center" }}>
                  <img style={{borderRadius:"8px"}} src={publicUrl + "assets/img/post/list/root.jpg"} alt={imagealt} />
                   <p style={{paddingTop:"10px", fontWeight:"700", color:"rgb(149,5,5)", paddingBottom:"0px", marginBottom:"0px"}}>Tree Roots</p><p style={{paddingTop:"0px"}}>Keep Your Place Holy with tree roots</p>
                  <button className="btn-custom">
                    Check Now
                  </button>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img style={{borderRadius:"8px"}} src={publicUrl + "assets/img/post/list/GEMSTONE.jpg"} alt={imagealt} />
                   <p style={{paddingTop:"10px", fontWeight:"700", color:"rgb(149,5,5)", paddingBottom:"0px", marginBottom:"0px"}}>Gemstones</p><p style={{paddingTop:"0px"}}>Buy Genuine Gemstones at Best Price</p>

                  <button className="btn-custom">
                    Check Now
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
              <div style={{ textAlign: "center" }}>
                <img style={{borderRadius:"8px"}} src={publicUrl + "assets/img/post/list/rudraksha.jpg"} alt={imagealt} />
                <p style={{paddingTop:"10px", fontWeight:"700", color:"rgb(149,5,5)", paddingBottom:"0px", marginBottom:"0px"}}>Rudraksha</p>
                <p style={{paddingTop:"0px"}}>Original Rudraksha to Bless your way</p>
                <button className="btn-custom">
                  Check Now 
                </button>
              </div>
              <div style={{ textAlign: "center" }}>
                <img style={{borderRadius:"8px"}} src={publicUrl + "assets/img/post/list/yantra.jpg"} alt={imagealt} />
                <p style={{paddingTop:"10px", fontWeight:"700", color:"rgb(149,5,5)", paddingBottom:"0px", marginBottom:"0px"}}>Yantras</p>
                <p style={{paddingTop:"0px"}}>Energised Yantras for you</p>
                <button className="btn-custom">
                  Check Now
                </button>
              </div>
              <div style={{ textAlign: "center" }}>
                <img style={{borderRadius:"8px"}} src={publicUrl + "assets/img/post/list/mala.jpg"} alt={imagealt} />
                <p style={{paddingTop:"10px", fontWeight:"700", color:"rgb(149,5,5)", paddingBottom:"0px", marginBottom:"0px"}}>Mala</p>
                <p style={{paddingTop:"0px"}}>Praise the Lord with Divine Energies of Mala</p>

                <button className="btn-custom">
                  Check Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Latest2;
