import { useData } from "../context/DataProvider";
import styles from "./sidebarItem.module.css";
import editImage from "../images/editIcon.png";
import deleteImage from "../images/deleteIcon.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
export const SidebarItem = ({
  item,
  id,
}: {
  item: IntialStateType;
  id: number;
}) => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  const [readOnly, setReadOnly] = useState(true);
  const inputref = useRef<HTMLInputElement[]>([]);
  useEffect(() => {
    if (!readOnly) {
      inputref.current[id].focus();
    }
  }, [readOnly, id]);

  const changeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    navigate("/");
  };

  return (
    <div key={id} className={styles.sidebarItem}>
      <input
        onBlur={() => setReadOnly(true)}
        onChange={changeItem}
        onClick={() => navigate(`/pages/${id}`)}
        ref={(ref) => {
          if (typeof ref === "string") inputref.current[id] = ref;
        }}
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
