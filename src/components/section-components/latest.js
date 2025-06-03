import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "./Latest2.css"

class Latest extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div style={{ borderRadius:"10px", boxShadow:"3px 5px rgb(149,5,5)"}} className="post-area bg-sky pd-top-50 pd-bottom-50">
        <div  className="container">
          <div className="section-title" style={{ textAlign: "center" }}>
            <h6 style={{fontWeight:"bold" ,color:"rgb(149, 5, 5)"}} className="title">Our Latest Events and Pictures</h6>
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
                <img style={{height:"250px", width:"300px", objectFit:"cover", borderRadius:"10px"}} src={publicUrl + "assets/img/post/list/baba1.jpg"} alt="img" />
                <img style={{height:"250px", width:"300px", objectFit:"cover", borderRadius:"10px"}} src={publicUrl + "assets/img/post/list/baba2.jpg"} alt="img" />
                <img style={{height:"250px", width:"300px", objectFit:"cover", borderRadius:"10px"}} src={publicUrl + "assets/img/post/list/baba3.jpg"} alt="img" />
              </div>
            </div>

            <div
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
                <img style={{height:"250px", width:"300px", objectFit:"cover", borderRadius:"10px"}} src={publicUrl + "assets/img/post/list/baba4.jpg"} alt="img" />
                <img style={{height:"250px", width:"300px", objectFit:"cover", borderRadius:"10px"}} src={publicUrl + "assets/img/post/list/baba1.jpg"} alt="img" />
                <img style={{height:"250px", width:"300px", objectFit:"cover", borderRadius:"10px"}} src={publicUrl + "assets/img/post/list/baba2.jpg"} alt="img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Latest;
