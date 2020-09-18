import AsyncStorage from '@react-native-community/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface group {
  name: string;
  m: string;
  w: string;
  v: string;
  t: string;
}

const fetch = createAsyncThunk(
  'qa/fetch',
  async () => {
    return await AsyncStorage.getItem('qa-groups');
  }
);

function save(groups: group[]) {
  const jsonValue = JSON.stringify(groups);
  AsyncStorage.setItem('qa-groups', jsonValue);
}

const initGroups: group[] = [];

const slice = createSlice({
  name: 'qa',
  initialState: { isReady: false, diag: '', groups: initGroups },
  reducers: {
    save(state) {
      const jsonValue = JSON.stringify(state.groups);
      AsyncStorage.setItem('qa-groups', jsonValue);
    },
    add(state, action) {
      const name: string = action.payload.name;
      if (!name || name.length === 0) {
        state.diag = 'empty';
        return;
      }
      for (let j = 0; j < state.groups.length; j++) {
        if (state.groups[j].name === name) {
          state.diag = 'exist';
          return;
        }
      }

      let newGroups = Object.assign([], state.groups);
      newGroups.push({
        name: name,
        m: action.payload.m,
        w: action.payload.w,
        v: action.payload.v,
        t: action.payload.t
      });

      state.groups = newGroups;
      state.diag = '';
      save(newGroups);
    },
    remove(state, action) {
      let i = -1;
      for (let j = 0; j < state.groups.length; j++) {
        if (state.groups[j].name === action.payload) { i = j; break; }
      }
      if (i < 0) { return; }

      let newGroups = Object.assign([], state.groups);
      newGroups.splice(i, 1);

      state.groups = newGroups;
      save(newGroups);
    },
    setDiag(state, action) {
      state.diag = action.payload;
    }
  },
  extraReducers: {
    [fetch.fulfilled]: (state, action) => {
      let jsonValue = action.payload;
      if (jsonValue) { state.groups = JSON.parse(jsonValue); }
      state.isReady = true;
    }
  }
});

export { fetch };
export const { add, remove, setDiag } = slice.actions;
export default slice.reducer;
