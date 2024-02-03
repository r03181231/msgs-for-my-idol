import dummyData from "../../shared/fakeData";
// counter.js

// action value

const SET_TAB = "SET_TAB";
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
const SET_LETTER_VALUE = "SET_LETTER_VALUE";
const SET_LETTER_EDIT_DELTETE = "SET_LETTER_EDIT_DELTETE";

// action creator : action value를 return하는 함수
export const setTab = (payload) => {
  return {
    type: SET_TAB,
    payload,
  };
};
export const setActiveTab = (payload) => {
  return {
    type: SET_ACTIVE_TAB,
    payload,
  };
};
export const setLetterValue = (payload) => {
  return {
    type: SET_LETTER_VALUE,
    payload,
  };
};

export const setLetterEditDelete = (payload) => {
  return {
    type: SET_LETTER_EDIT_DELTETE,
    payload,
  };
};

const initialState = {
  tabData: [
    {
      tabNum: 1,
      writedTo: "정승환",
    },
    {
      tabNum: 2,
      writedTo: "권진아",
    },
    {
      tabNum: 3,
      writedTo: "샘킴",
    },
    {
      tabNum: 4,
      writedTo: "이진아",
    },
  ],
  // activeTab: [{}],
  activeTab: {
    tabNum: 1,
    writedTo: "정승환",
  },
  // tab: [{}],
  tab: {
    tabNum: 1,
    writedTo: "정승환",
  },
  letterValue: dummyData,
};

//원래라면
// const [number, setNumber] = useState(0); 지만 위처럼 바꾼거야.

// input : state, action
const letter = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB:
      return { ...state, tab: action.payload };
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };

    // Form
    case SET_LETTER_VALUE:
      return {
        ...state,
        letterValue: [action.payload, ...state.letterValue],
      };
    case SET_LETTER_EDIT_DELTETE:
      return {
        ...state,
        letterValue: action.payload,
      };
    default:
      return state;
  }
};

export default letter;
