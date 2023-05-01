import { PropsWithChildren, useReducer } from "react";
import { dataReducer, intialState } from "../Reducer/DataReducer";
import { CreateContext } from "./CreateContext";

type DataContextProps = {
  state: IntialStateType[];
  dispatch: React.Dispatch<DispatchType>;
};
export const [useData, DataContextProvider] = CreateContext<DataContextProps>();

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(dataReducer, intialState);

  return (
    <DataContextProvider value={{ state, dispatch }}>
      {children}
    </DataContextProvider>
  );
};
