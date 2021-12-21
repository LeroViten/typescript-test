interface IParams {
  name: string;
  size: string;
  toppings: string[];
}

interface IPizza {
  size: string;
  toppings: string[];
  addTopping(topping: string): void;
  //! You cannot set types for private methods and options!
  //   checkToppingAvailability(topping: string): boolean;
}

class Pizza implements IPizza {
  public name: string;
  public size: string;
  public toppings: string[];

  constructor({ name, size, toppings = [] }: IParams) {
    this.name = name;
    this.size = size;
    this.toppings = toppings;
  }

  private checkToppingAvailability(topping: string): boolean {
    return true;
  }

  public addTopping(topping: string) {
    this.checkToppingAvailability(topping);
    this.toppings.push(topping);
  }
}

const pizza: IPizza = new Pizza({
  name: 'margarita',
  size: 'medium',
  toppings: ['cheese', 'mushrooms'],
});
console.log('pizza :>> ', pizza);

const order = pizza.addTopping('bacon');
console.log('order :>> ', order);

// * GENERICS IN CLASSES: FUNCTIONAL in 10-interfaces!

type TAnimationState = 'playing' | 'paused';
type THttpState = 'request' | 'success' | 'error';

class State<S> {
  private state: S;

  constructor(initialState: S) {
    this.state = initialState;
  }

  getState() {
    return this.state;
  }
  setState(newState: S) {
    this.state = newState;
  }
}
const animationState = new State<TAnimationState>('playing');
animationState.setState('paused');
//animationState.setState('error'); //! you dont want animation to have'error

const httpState = new State<THttpState>('error');
httpState.setState('request');
//httpState.setState('playing'); //! you dont want request to be playing

export {};
