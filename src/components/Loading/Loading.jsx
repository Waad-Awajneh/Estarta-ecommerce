import React from "react";
import { RingLoader } from "react-spinners";
import style from "./style.module.css";

export default function Loading() {
  return (
    <div className={style.loading}>
      <RingLoader
        color="#9f8e7e"
        cssOverride={{}}
        loading
        size={100}
        speedMultiplier={1}
      />
    </div>
  );
}
