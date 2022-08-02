import React from "react";
import About_Us_Component from "./About_Us_Component";
import Easy_Exchange from "./Easy_Exchange";
import Follow_Us_On from "./Follow_Us_On";
import Pay_Securely_By from "./Pay_Securely_by";

function TotalFooter() {
  return (
    <div>
        <Pay_Securely_By/>
        <Follow_Us_On/>
        <Easy_Exchange/>
        <About_Us_Component/>
    </div>
  );
}

export default TotalFooter;
                