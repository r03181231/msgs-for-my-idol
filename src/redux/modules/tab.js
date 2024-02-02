import dummyData from "../../shared/fakeData";
// counter.js

// action value

const SET_TAB = "SET_TAB";
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

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

// 초기 상태값(state)

const tabData = [
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
];

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
  activeTab: [{}],
  tab: [{}],
  letterValue: dummyData,
};
console.log();

//원래라면
// const [number, setNumber] = useState(0); 지만 위처럼 바꾼거야.

// input : state, action
const tabMenu = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB:
      return { tabData: action.payload };
    case SET_ACTIVE_TAB:
      console.log(action.payload); //{tabNum: 1, writedTo: '정승환'}
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default tabMenu;
