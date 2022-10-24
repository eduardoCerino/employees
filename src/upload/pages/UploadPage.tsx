import React, { useRef, useState } from "react";
import "./upload.css"
import { Field, Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [picture, setPicture] = useState<any>([]);
  const [active, setActive] = useState<boolean>(false);
  let fileObj: any[] = [];
  let fileArray: any[] = [];

  const onChangePicture = (e: any) => {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setPicture(fileArray);
    setActive(true);
    setValues(fileArray);

  };

  const [values, setValues] = useState<any>();


const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPicture([]);
    setActive(false);

  };
  const inputRef = useRef<HTMLInputElement>(null);

  const resetFileInput = () => {
    inputRef.current!.value = "";
  };
const navigate = useNavigate();


return (
  <div className="center d-flex flex-column align-items-center">
    <form onSubmit={onSubmit}>

        <div className="mb-3 m-5 ">
          <input
            className="form-control new-input "
            type="file"
            accept="image/*"
            multiple
            onChange={onChangePicture}
            ref={inputRef}
          />
        </div>
        

        <div className="form-group multi-preview">
          {(picture).map((url: any) => (
            <img src={url} alt="..." width="300px" className="m-3" key={url} />
          ))}
        </div>
        {active ? (
          <button type="submit" className="btn btn-primary w-25 mb-5" onClick={resetFileInput} >
            Upload
          </button>
        ) : (
          <div></div>
        )}
    </form>
  
  
  </div>
  );
};

export default UploadPage;
