import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducers";

const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateCurrentApp = (value) => {
    dispatch({
      type: "updateCurrentApp",
      payload: value,
    });
  };
  const updateAllApp = (value) => {
    dispatch({
      type: "updateAllApp",
      payload: value,
    });
  };
  const updateShowSetting = (value) => {
    dispatch({
      type: "updateShowSetting",
      payload: value,
    });
  };
  const updateShowTerminal = (value) => {
    dispatch({
      type: "updateShowTerminal",
      payload: value,
    });
  };
  const updateShowGithub = (value) => {
    dispatch({
      type: "updateShowGithub",
      payload: value,
    });
  };

  const value = {
    currentApp: state.currentApp,
    allApps: state.allApps,
    showSetting: state.showSetting,
    showTerminal: state.showTerminal,
    showGithub: state.showGithub,
    updateCurrentApp,
    updateAllApp,
    updateShowSetting,
    updateShowTerminal,
    updateShowGithub,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useApp = () => {
  const context = useContext(Context);
  return context;
};

export default useApp;
