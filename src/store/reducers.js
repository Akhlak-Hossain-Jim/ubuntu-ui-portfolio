export const initialState = {
  currentApp: "About",
  allApps: false,
  showSetting: false,
  showTerminal: false,
  showGithub: false,
  showAbout: true,
  showProjects: false,
  showCV: false,
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
    case "updateShowAbout": {
      return { ...state, showAbout: payload };
    }
    case "updateShowProjects": {
      return { ...state, showProjects: payload };
    }
    case "updateShowCV": {
      return { ...state, showCV: payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
