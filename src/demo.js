import React from "react";
import {useSelector} from 'react-redux';

const Demo = () => {
    // const name = useSelector(state => state.name)
    const interns = useSelector(state => state.interns);
    const person = useSelector(state=> state.person);

    console.log(person);

    console.log(interns);
    return ( 

        <div>
        <h1>Interns:</h1>
        <ul>
          {interns.map((intern) => (
            <li key={intern.name}>
              {intern.name} - {intern.password}
            </li>
          ))}
        </ul>
      </div>
  
     );
}
 
export default Demo;