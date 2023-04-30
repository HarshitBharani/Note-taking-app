type IntialStateType = {
  name: string;
  data: { note: string; background: string; tag: string }[];
};
export const intialState: IntialStateType[] = [
  {
    name: "first",
    data: [{ note: "sfddf", background: "red", tag: "work" }],
  },
];
type DispatchType = {
  type: "ADD_PAGE" | "CHANGE_SIDEBAR_ITEM" | "DELETE_SIDEBAR_ITEM" | "ADD_NOTE";
  payload: {
    id: number;
    name: string;
    data: { note: string; background: string; tag: string }[];
  };
};
export const dataReducer = (
  state: IntialStateType[],
  { type, payload }: DispatchType
) => {
  switch (type) {
    case "ADD_PAGE":
      return [...state, payload];
    case "CHANGE_SIDEBAR_ITEM":
      return state.map((item, id) =>
        id === payload.id ? { ...item, name: payload.name } : item
      );
    case "DELETE_SIDEBAR_ITEM":
      return state.filter((_, id) => id !== payload.id);
    case "ADD_NOTE":
      return state.map((item, id) => {
        if (id === payload.id) {
          return { ...item, data: [...item.data, payload.data] };
        }
        return item;
      });

    default:
      return state;
  }
};
