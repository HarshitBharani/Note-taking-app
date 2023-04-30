import { createContext, useContext, useReducer } from "react";
import { dataReducer, intialState } from "../Reducer/DataReducer";

const dataContext = createContext();
export const useData = () => useContext(dataContext);
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, intialState);

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}
    </dataContext.Provider>
  );
};
