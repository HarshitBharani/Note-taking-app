import { useState } from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataProvider";
import { InputContainer } from "./InputContainer";
import styles from "./main.module.css";
import { Notes } from "./Notes";
export const Main = () => {
  const { state } = useData();
  const { pageid } = useParams();
  if (pageid === undefined) {
    throw Error("mdffd");
  }
  const [notesData, setNotesData] = useState(state[+pageid].data);
  console.log(notesData);
  const setFilter = (filter: string) => {
    console.log(filter);
    setNotesData(
      filter === ""
        ? state[+pageid].data
        : state[+pageid].data.filter((item) => item.tag === filter)
    );
  };

  return (
    <div className={styles.mainContainer}>
      <InputContainer id={pageid} />
      <h3>Notes</h3>
      <ul className={styles.tagContainer}>
        <li>
          <button onClick={() => setFilter("work")}>work</button>
        </li>
        <li>
          <button onClick={() => setFilter("school")}>school</button>
        </li>
        <li>
          <button onClick={() => setFilter("home")}>home</button>
        </li>
        <li>
          <button onClick={() => setFilter("study")}>study</button>
        </li>
      </ul>
      <div className={styles.notesContainer}>
        {notesData.map((item, id) => (
          <Notes
            key={id}
            pageid={+pageid}
            dataid={id}
            tagValue={item.tag}
            backgroundValue={item.background}
            noteValue={item.note}
          />
        ))}
      </div>
    </div>
  );
};
