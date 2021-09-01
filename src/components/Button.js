import React from "react";

import "components/Button.scss";

import classNames from "classnames";
import { removePropertiesDeep } from "@babel/types";



export default function Button(props) {


   const classnames = require("classnames");

   const buttonClass = classnames("button", {
      "button--confirm": props.confirm, 
      "button--danger": props.danger
   });


   return (
         <button 
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
         >{props.children}
         </button>
   );
  

}
