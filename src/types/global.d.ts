declare module "*.module.css";
declare module "*.png";
declare type IntialStateType = {
  name: string;
  data: { note: string; background: string; tag: string }[];
};

declare type DispatchType =
  | {
      type: "ADD_PAGE";
      payload: {
        name: string;
        data: { note: string; background: string; tag: string }[];
      };
    }
  | {
      type: "CHANGE_SIDEBAR_ITEM";
      payload: {
        id: number;
        name: string;
      };
    }
  | {
      type: "DELETE_SIDEBAR_ITEM";
      payload: {
        id: number;
      };
    }
  | {
      type: "ADD_NOTE";
      payload: {
        id: number;
        data: {
          note: string;
          background: string;
          tag: string;
        };
      };
  } | {
    type: "UPDATE_NOTE",
    payload: {
       pageid : number,
        dataid : number,
        data: {
          note : string,
          background : string,
          tag:string,
        },
      },
    }
    }
