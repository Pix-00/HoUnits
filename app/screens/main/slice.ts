import { createSlice } from '@reduxjs/toolkit';


const slice = createSlice({
  name: 'main',
  initialState: { value: '0', mol: '0', wUnit: 'μg', vUnit: 'L', tUnit: 'pg/mL' },
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
    setMol(state, action) {
      state.mol = action.payload;
    },
    setWUnit(state, action) {
      state.wUnit = action.payload;
    },
    setVUnit(state, action) {
      state.vUnit = action.payload;
    },
    setTUnit(state, action) {
      state.tUnit = action.payload;
    }
  }
});

export const { setValue, setMol, setWUnit, setVUnit, setTUnit } = slice.actions;
export default slice.reducer;
