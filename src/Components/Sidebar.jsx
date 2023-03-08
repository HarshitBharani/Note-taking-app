import { useState } from "react";
import { useData } from "../context/DataProvider";
import styles from "./sidebar.module.css";
import { SidebarItem } from "./SidebarItem";
export const Sidebar = () => {
  const { state, dispatch } = useData();

  const addPage = (e) => {
    dispatch({
      type: "ADD_PAGE",
      payload: {
        name: "Untitled",
        data: [],
      },
    });
  };
  return (
    <div className={styles.sidebarContainer}>
      <button onClick={addPage} className={styles.sidebarButton}>
        Add page
      </button>
      {state.map((item, id) => (
        <SidebarItem key={id} item={item} id={id} />
      ))}
    </div>
  );
};
