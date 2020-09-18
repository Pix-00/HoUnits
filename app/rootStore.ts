import { configureStore } from '@reduxjs/toolkit';

import mReducer from './screens/main/slice';
import qaReducer from './screens/main/quick_access/slice';

export const store = configureStore({
  reducer: {
    main: mReducer,
    qa: qaReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
