import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import currentUserSlice from '../components/user/slices/currentUser.slice';
import gameSlice from '../components/game/slices/game.slice';
import meetingSlice from '../components/meeting/slices/meeting.slice';
import messageSlice from '../components/message/slices/message.slice';
import userSlice from '../components/user/slices/user.slice';

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
