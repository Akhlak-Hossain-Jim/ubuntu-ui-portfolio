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
  const updateShowAbout = (value) => {
    dispatch({
      type: "updateShowAbout",
      payload: value,
    });
  };
  const updateShowProjects = (value) => {
    dispatch({
      type: "updateShowProjects",
      payload: value,
    });
  };
  const updateShowCV = (value) => {
    dispatch({
      type: "updateShowCV",
      payload: value,
    });
  };

  const value = {
    currentApp: state.currentApp,
    updateCurrentApp,
    allApps: state.allApps,
    updateAllApp,
    showSetting: state.showSetting,
    updateShowSetting,
    showTerminal: state.showTerminal,
    updateShowTerminal,
    showGithub: state.showGithub,
    updateShowGithub,
    showAbout: state.showAbout,
    updateShowAbout,
    showProjects: state.showProjects,
    updateShowProjects,
    showCV: state.showCV,
    updateShowCV,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useApp = () => {
  const context = useContext(Context);
  return context;
};

export default useApp;
