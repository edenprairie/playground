interface Action {
    type: string;
    payload?: any;
}

interface Reducer<T> {
    (state: T, action: Action): T;
}

interface ListenCallback {
    (): void;
}

interface UnsubscribeCallback {
    (): void;
}

let reducer: Reducer<number> = (state: number, action: Action) => {

    switch (action?.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'PLUS':
            return state + action?.payload;
        default:
            return state;
    }
}


console.log(reducer(0, null));

let inc: Action = { type: 'INC' };
console.log(reducer(0, inc));
console.log(reducer(1, inc));

let dec: Action = { type: 'DEC' };
console.log(reducer(100, dec));

let plus9: Action = { type: 'PLUS', payload: 9 };
console.log(reducer(100, plus9));

class Store<T> {
    private _state: T;
    private _listeners: ListenCallback[] = [];

    constructor(
        private reducer: Reducer<T>,
        initialState: T
    ) {
       this._state = initialState; 
    }

    getState(): T {
        return this._state;
    }

    dispatch(action: Action): void {
        this._state = this.reducer(this._state, action);
        this._listeners.forEach((listener: ListenCallback) => listener());
    }

    subscribe(listener: ListenCallback): UnsubscribeCallback {
        this._listeners.push(listener);
        return () => {
            this._listeners = this._listeners.filter(l => l !== listener);
        };
    }
}

console.log('***** STORE *****');
let store: Store<number> = new Store<number>(reducer, 0);
console.log(store.getState());

store.dispatch({ type: 'INC' });
console.log(store.getState());

store.dispatch({ type: 'PLUS', payload: 7 });
console.log(store.getState());

store.dispatch({ type: 'DEC' });
console.log(store.getState());

console.log('**** SUBSCRIBE ****');
let unscribe = store.subscribe(() => {
    console.log('subscribed: ', store.getState());
});

store.dispatch({ type: 'INC'});
store.dispatch({ type: 'INC'});

store.dispatch({ type: 'DEC'});
unscribe();

store.dispatch({ type: 'DEC'});
store.dispatch({ type: 'DEC'});
console.log(store.getState());


