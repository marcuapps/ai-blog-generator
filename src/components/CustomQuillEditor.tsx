"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/CustomQuillEditor.css";

const CustomQuillEditor = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-screen flex justify-center">
      <div className="quill-wrapper w-[90vw]">
        <ReactQuill value={value} onChange={setValue} />
      </div>
    </div>
  );
};

export default CustomQuillEditor;
