'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState();
  const fileRef = useRef();

  function handleClick() {
    fileRef.current.click();
  }

  function handleOnChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPickImage(reader.result);
    }
    reader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
      {pickImage && <div className={classes.preview}>
      <Image src={pickImage} alt={name} fill /></div>}
        <input type="file"
          name={name}
          id={name}
          className={classes.input}
          accept='image/png, image/jpeg'
          ref={fileRef}
          onChange={handleOnChange}
        />
          <button className={classes.button} onClick={handleClick}>pick an image</button>
        </div>
      </div>
  );
}