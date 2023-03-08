import { useData } from "../context/DataProvider";
import styles from "./sidebarItem.module.css";
import editImage from "../images/editIcon.png";
import deleteImage from "../images/deleteIcon.png";
import { useEffect, useRef, useState } from "react";
export const SidebarItem = ({ item, id }) => {
  const { dispatch } = useData();
  const [readOnly, setReadOnly] = useState(true);
  const inputref = useRef([]);
  useEffect(() => {
    if (!readOnly) {
      inputref.current[id].focus();
    }
  }, [readOnly, id]);

  const changeItem = (e) => {
    dispatch({
      type: "CHANGE_SIDEBAR_ITEM",
      payload: { id, name: e.target.value },
    });
  };
  const deleteItem = () => {
    dispatch({
      type: "DELETE_SIDEBAR_ITEM",
      payload: { id },
    });
  };

  return (
    <div key={id} className={styles.sidebarItem}>
      <input
        onBlur={() => setReadOnly(true)}
        onChange={changeItem}
        ref={(ref) => (inputref.current[id] = ref)}
        className={styles.sidebarButton}
        value={item.name}
        readOnly={readOnly}
      ></input>

      <img
        onClick={() => setReadOnly(false)}
        className={styles.editIcon}
        src={editImage}
        alt="edit-button"
      />
      <img
        onClick={deleteItem}
        className={styles.deleteIcon}
        src={deleteImage}
        alt="edit-button"
      />
    </div>
  );
};
