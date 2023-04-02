import { configureStore } from '@reduxjs/toolkit';
import reducer1 from "./reducers/reducer";


export const store = configureStore({reducer: reducer1} )






// const reducer1 = (state=initialState, action)=>{
  //   if(action.type== 'DELETE-INTERN'){
  //       state.interns= state.interns.filter((intern) => (intern.name !== action.payload))

  //   }
