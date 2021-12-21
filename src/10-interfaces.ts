interface IUser<U> {
  id: U;
}

const lero: IUser<number> = { id: 36 };
const viten: IUser<string> = { id: 'poop69' };

console.log(lero);
console.log(viten);

interface Tab<T> {
  id: string;
  position: number;
  active: boolean;
  content: T;
}

const tabOne: Tab<string[]> = {
  id: 'qwe',
  position: 3,
  active: true,
  content: ['This', 'is', 'dummy', 'data'],
};

const tabTwo: Tab<string> = {
  id: '12',
  position: 1,
  active: false,
  content: 'This is dummy data',
};

console.log(tabOne);
console.log(tabTwo);

//! EXAMPLE:

type TAnimationState = 'playing' | 'paused';
type THttpState = 'request' | 'success' | 'error';

const makeState = <S>(initialState: S) => {
  let state = initialState;

  const getState = () => {
    return state;
  };

  const setState = (newState: S) => {
    state = newState;
  };

  return {
    getState,
    setState,
  };
};

const animationState = makeState<TAnimationState>('paused');
animationState.setState('playing');
//animationState.setState('error'); //! you dont want animation to have'error

const httpState = makeState<THttpState>('error');
httpState.setState('request');
//httpState.setState('playing'); //! you dont want request to be playing

export {};
