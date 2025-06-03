import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



class Fincareer extends Component {
    render() {
        return (
            <div className=""><br></br>
                <div className="section-title Boxash" style={{ borderRadius:"8px", textAlign: 'center', paddingTop:'30px'}}>
                    <h3 style={{fontWeight:"bold" ,color:"rgb(149, 5, 5)"}} className="title">Astrological services for accurate answers and better future</h3>
                </div>

                <div style={containerStyle}>
                    {/* Kundli / Birth Chart */}
                    <div style={cardStyle}>
                        <h6 style={{ marginBottom: '20px', fontWeight:"bold", color:"rgb(149,5,5)"}}>Finance</h6>
						<p>Are money matters a reason for the dark-circles under your eyes?</p>
                        <input type="text" placeholder="Name" style={inputStyle} />
                        {/* <select style={inputStyle}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select> */}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <input type="text" placeholder="23" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="1" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="2025" style={{ ...inputStyle, width: '30%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <input type="text" placeholder="12" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="13" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="55" style={{ ...inputStyle, width: '30%' }} />
                        </div>
                        <input type="text" placeholder="Birth place" style={{ ...inputStyle, marginTop: '10px' }} />
                        <button className='btn btn-blue'>CHECK NOW</button>
                    </div>

                    {/* Kundli Matching */}
                    <div style={cardStyle}>
                        <h6 style={{ marginBottom: '20px', fontWeight:"bold", color:"rgb(149,5,5)" }}>Career/Job</h6>
						<p>Worried about your Career? Don't know what is ?</p>
                        <input type="text" placeholder="Name" style={inputStyle} />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <input type="text" placeholder="23" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="1" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="2025" style={{ ...inputStyle, width: '30%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <input type="text" placeholder="12" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="13" style={{ ...inputStyle, width: '30%' }} />
                            <input type="text" placeholder="55" style={{ ...inputStyle, width: '30%' }} />
                        </div>
                        <input type="text" placeholder="Birth place" style={{ ...inputStyle, marginTop: '10px' }} />
                        
                        <button className='btn btn-blue'>CHECK NOW</button>
                    </div>
                </div>
				<br></br><br></br>

                <style>
                    {`
                        @media (max-width: 768px) {
                            .container {
                                flex-direction: column;
                                gap: 10px;
                            }
                            .card {
                                width: 100%;
                            }
                        }
                    `}
                </style>
            </div>
        );
    }
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
    flexWrap: 'wrap',
	
};

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '400px',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
};

const buttonStyle = {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#f67c22',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
};

export default Fincareer;
