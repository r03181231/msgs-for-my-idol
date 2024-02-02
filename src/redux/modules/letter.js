// counter.js

// action value
const PLUS_ONE = "plus_one";
const MINUS_ONE = "minus_one";
const PLUS_N = "plus_n";

// action creator : action value를 return하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload: payload, // 3
  };
};

// 초기 상태값(state)

const initialState = [
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

//원래라면
// const [number, setNumber] = useState(0); 지만 위처럼 바꾼거야.

// 리듀서 : "state에 변화를 일으키는"함수
// (1) state를 action의 type에 따라 변경하는 함수
// state를 action 안에 있는 type에 따라서 변경하는 작업

// input : state, action
// action 객체라는 건 action type을 payload만큼 처리하는 거야
// ex : payload가 3이야. +가 되는데 3만큼을 plus(action)해라 라는거야.
const letter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        //number는 원래 있었던 state의 number에 action.payload라는 값을 더해서 리턴해줄거야라는 의미야.
        number: state.number + action.payload,
      };
    default:
      return state;
  }
};

export default letter;
