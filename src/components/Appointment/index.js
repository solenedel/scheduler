import React, { useState } from "react";
import "./styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";

export default function Appointment(props) {
  return (

    <article className="appointment">
      <Header time={props.time} />
      {/* if props.interview is truthy, render ths Show component. Else, render Empty */}
      {props.interview ? <Show /> : <Empty />}
    </article>

  );
}
