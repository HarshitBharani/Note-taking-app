export const intialState = [
  {
    name: "first",
    data: [{ note: "sfddf", background: "red", tag: "work" }],
  },
];
export const dataReducer = (state, { type, payload }) => {
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
        if (id == payload.id) {
          return { ...item, data: [...item.data, payload.data] };
        }
        return item;
      });

    default:
      return state;
  }
};
