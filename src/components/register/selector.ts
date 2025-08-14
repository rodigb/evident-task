import { RootState } from '../../store';

export const selectName = (state: RootState) => state.register.name;
export const selectEmail = (state: RootState) => state.register.email;
