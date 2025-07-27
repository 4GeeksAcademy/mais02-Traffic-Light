import React, { useState } from "react";

//create your first component
const Layout = () => {
	
	const [selector, setselector] = useState(null);

	const handleClick = (color) => {
    if (selector === color) {
      setselector(null);
    } else {
      setselector(color);
    }
  };
	return (
		<div className="container" style={{ textAlign: "center", marginTop: "130px" }}>
			<div className="trafficTop bg-black" style={{ justifySelf: "center", height: "110px", width: "20px" }}>|</div>
			<div className="bg-black rounded" style={{ display: "inline-grid", height: "200px", width: "100px", padding: "15px" }}>
				<button type="button" className={`btn btn-danger rounded-circle ${selector === "red" ? "luz" : ""}`} onClick={() => handleClick("red")} style={{ marginBottom: "10px" }} ></button>
				<button type="button" className={`btn btn-warning rounded-circle ${selector === "yellow" ? "luz" : ""}`} onClick={() => handleClick("yellow")} style={{ marginBottom: "10px" }}></button>
				<button type="button" className={`btn btn-success rounded-circle ${selector === "green" ? "luz" : ""}`} onClick={() => handleClick("green")} ></button>
			</div>
		</div>
	);
};

export default Layout;

