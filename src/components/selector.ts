import { RootState } from '../store';

export const selectName = (state: RootState) => state.registerReducer.name;
export const selectEmail = (state: RootState) => state.registerReducer.email;
