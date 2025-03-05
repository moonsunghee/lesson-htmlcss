"use client";
import React from "react";
import { useState } from "react";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
interface myProps {
  title: string;
  iconType: number;
}
export default function PageHeader(props: myProps) {
  const iconType = props.iconType;
  const [icons, setIcons] = useState(iconType);

  return (
    <div className="pageHeader">
      <header>
        <h1>
        {icons == 0 && (
          ""
        )}
        {icons == 1 && (
          <span style={{ color: "#06F" }}>
            <VscVscode />
          </span>
        )}
        {icons == 2 && (
          <span style={{ color: "#F90" }}>
            <FaHtml5 />
          </span>
        )}
        {icons == 3 && (
          <span style={{ color: "#06F" }}>
            <FaCss3Alt />
          </span>
        )}
          {props.title}
        </h1>
        {false && (
          <div className="btn"><a href="/">이전으로</a></div>
        )}
        
      </header>
    </div>
  );
}