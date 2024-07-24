"use client";
import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/CustomQuillEditor.css";

const CustomQuillEditor = () => {
  const [value, setValue] = useState("");
  const quillRef = useRef<any>(null);

  const postSubmit = () => {
    const quill = quillRef.current?.getEditor();
    const delta = quill.getContents();

    console.log(JSON.stringify(delta));
    // quill.setContents({ ops: [{ insert: "asdasd\nas\nda\nsd\nas\n" }] });
  };

  return (
    <div className="w-screen flex justify-center">
      <div className="quill-wrapper w-[90vw]">
        <ReactQuill ref={quillRef} value={value} onChange={setValue} />
      </div>
      <button onClick={postSubmit}>Submit</button>
    </div>
  );
};

export default CustomQuillEditor;
