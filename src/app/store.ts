import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import currentUserSlice from '../slices/currentUser.slice';
import gameSlice from '../slices/game.slice';
import meetingSlice from '../slices/meeting.slice';
import messageSlice from '../slices/message.slice';
import userSlice from '../slices/user.slice';

export const store = configureStore( {
  reducer: {
    currentUser: currentUserSlice,
    user: userSlice,
    game: gameSlice,
    meeting: meetingSlice,
    message: messageSlice
  },
} );

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
