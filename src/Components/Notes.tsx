import { useEffect, useState } from "react";
import { useData } from "../context/DataProvider";

import styles from "./inputContainer.module.css";
type NotesProps = {
  pageid: number;
  dataid: number;
  noteValue: string;
  backgroundValue: string;
  tagValue: string;
};
export const Notes = ({
  pageid,
  dataid,
  noteValue,
  backgroundValue,
  tagValue,
}: NotesProps) => {
  const [note, setNote] = useState(noteValue);
  const [background, setBackground] = useState(backgroundValue);
  const [tag, setTag] = useState(tagValue);
  const { dispatch } = useData();
  useEffect(() => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: {
        pageid,
        dataid,
        data: {
          note,
          background,
          tag,
        },
      },
    });
  }, [background, note, tag]);

  return (
    <div className={`${styles.inputContainer} ${styles[background]}`}>
      <input
        id="input-box"
        className={`${styles.input} `}
        type="textarea"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      ></input>

      <div>
        <span
          className={`${styles.circle} ${styles.red} ${
            background === "red" ? styles.outline : ""
          }`}
          onClick={() => setBackground("red")}
        ></span>
        <span
          className={`${styles.circle} ${styles.green} ${
            background === "green" ? styles.outline : ""
          }`}
          onClick={() => setBackground("green")}
        ></span>
        <span
          className={`${styles.circle} ${styles.blue} ${
            background === "blue" ? styles.outline : ""
          }`}
          onClick={() => setBackground("blue")}
        ></span>
      </div>
      <div className={styles.tagContainer}>
        <span
          className={`${styles.tags} ${tag === "work" ? styles.outline : ""}`}
          onClick={() => setTag("work")}
        >
          Work
        </span>
        <span
          className={`${tag === "school" ? styles.outline : ""} ${styles.tags}`}
          onClick={() => setTag("school")}
        >
          School
        </span>
        <span
          className={`${tag === "home" ? styles.outline : ""} ${styles.tags}`}
          onClick={() => setTag("home")}
        >
          Home
        </span>
        <span
          className={`${tag === "study" ? styles.outline : ""} ${styles.tags}`}
          onClick={() => setTag("study")}
        >
          Study
        </span>
      </div>
    </div>
  );
};
