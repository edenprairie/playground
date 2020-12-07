import { InjectionToken } from '@angular/core';
import { StoreEnhancer, Store, compose, createStore } from 'redux';
import { AppState } from './app.state';
import {
    counterReducer as reducer,
    initialState
} from './counter.reducer';

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> =
    window['devToolsExtension'] ?
        window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
    return createStore(
        reducer,
        initialState,
        compose(devtools)
    )
}

export const appStoreProviders = [
    { provide: AppStore, useFactory: createAppStore }
];