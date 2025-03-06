import { React, useState, useEffect } from "react";
import styles from "./NewPost.module.scss";

export default function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    if (nasaData.length > 0) {
      const imagenesSinYoutube = nasaData.filter(
        (item) => !item.url.includes("youtube")
      );
      if (imagenesSinYoutube.length > 0) {
        const indiceAleatorio = Math.floor(
          Math.random() * imagenesSinYoutube.length
        );
        const imagenAleatoria = imagenesSinYoutube[indiceAleatorio].url;

        const postData = {
          body: enteredBody,
          author: enteredAuthor,
          urlImage: imagenAleatoria,
        };

        onAddPost(postData);
        onCancel();
      } else {
        console.error("No se encontraron imágenes sin 'youtube'.");
      }
    }
  }, [nasaData]);

  const addNasaImageHandler = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=6DcJLjJDus9Rm7Q0XtXQV1kMP8RigmCosPP2hVZt&start_date=2017-04-11&end_date=2017-04-20",
        { method: "GET" }
      );
      const data = await response.json();
      setNasaData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const bodyChaneHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChaneHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await addNasaImageHandler();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body"> Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={bodyChaneHandler}
          value={enteredBody}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name"> Your name</label>
        <textarea id="name" required onChange={authorChaneHandler}></textarea>
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
