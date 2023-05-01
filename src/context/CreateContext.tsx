import React from "react";

export const CreateContext = <T extends {}>() => {
  const context = React.createContext<T | undefined>(undefined);
  const useContext = () => {
    const ctx = React.useContext(context);
    if (ctx === undefined) {
      throw new Error("Expected to find a context");
    }
    return ctx;
  };
  return [useContext, context.Provider] as const;
};
