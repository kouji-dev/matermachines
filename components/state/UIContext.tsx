import { stat } from "fs";
import { createContext, FC, useCallback, useContext, useReducer } from "react";
import { OpenModalAction, Actions, ActionTypes } from "./actions";

//State
interface UIContextType {
  view: "CART" | "LOGIN" | "LOGOUT";
  isOpen: boolean;
}

//Initial State & Context
const InitialUI: UIContextType = {
  view: "CART",
  isOpen: false,
};

const UIContext = createContext<UIContextType | any>(InitialUI);

UIContext.displayName = "UIContext";

function reducer(state: UIContextType, action: Actions): UIContextType {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL: {
      return {
        ...state,
        isOpen: true,
      };
    }
    case ActionTypes.CLOSE_MODAL: {
      return {
        ...state,
        isOpen: false,
      };
    }

    default:
      return state;
  }
}

const UIProvider: FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialUI);

  const openModal = useCallback(
    () => dispatch(new OpenModalAction()),
    [dispatch]
  );

  return (
    <UIContext.Provider value={{ ...state, openModal }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);

  if (!context) throw Error("UIContext is not provided");

  return context;
};
