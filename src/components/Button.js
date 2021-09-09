  // ------------------------- Imports -------------------------- //

import React from "react";
import classNames from "classnames";
import "components/Button.scss";


// -------------------------------- Component function: Button ---------------------------- //

export default function Button(props) {

   // apply CSS styles
   const buttonClass = classNames("button", {
      "button--confirm": props.confirm, 
      "button--danger": props.danger
   });

// -------------------------------- Button component ---------------------------- //

   return (

         <button 
            className={buttonClass}
            onClick={props.onClick}
            disabled={props.disabled}
         > {props.children}
         </button>

   );
  
}
