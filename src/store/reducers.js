export const initialState = {
  currentApp: "",
  allApps: false,
  showSetting: false,
  showTerminal: false,
  showGithub: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "updateCurrentApp": {
      return { ...state, currentApp: payload };
    }
    case "updateAllApp": {
      return { ...state, allApps: payload };
    }
    case "updateShowSetting": {
      return { ...state, showSetting: payload };
    }
    case "updateShowTerminal": {
      return { ...state, showTerminal: payload };
    }
    case "updateShowGithub": {
      return { ...state, showGithub: payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
