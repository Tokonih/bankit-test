import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IUser {
  avatar_path: null | string;
  colour: string;
  default_workspace_id: string;
  email: string;
  initials: string;
  name: string;
  timezone: null | string;
}

const UserFromLS = JSON.parse(sessionStorage.getItem('user') || 'null') as IUser;

interface AccountState {
  user: IUser;
}

const initialState: AccountState = {
  user: UserFromLS
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    }
  }
});

export const selectCurrentUser = (state: RootState) => state.account.user;

export const { setUser } = accountSlice.actions;
export default accountSlice.reducer;
