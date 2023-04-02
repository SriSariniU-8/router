import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { actionCreators } from "./state";
import { useEffect, useState } from "react";

const ADD = () => {

    const dispatch = useDispatch();

        const interns = useSelector(state => state.interns);
        const person = useSelector(state => state.person);

        const [Name, setName] = useState('');
        const[Pass, setPass] = useState(''); 


        const navigate= useNavigate();


        // In your code, you are setting the values of newperson.name and newperson.pass
        //  inside the change handlers changeValueUser and changeValuePass.
        //   However, setState is asynchronous in React, which means that the new state might not be immediately available. 
        //   So, when you access the newperson object inside the Submit function, the name and pass properties might still have their old values.

        // var newperson = {
        //     name: '',
        //     pass:''         
        //  };


    


    const changeValueUser = (e1) =>{
        setName(e1.target.value);
        // newperson.name = Name;
        // console.log(Name);
    }

    const changeValuePass = (e2) =>{
        setPass(e2.target.value);
        // newperson.pass = Pass;
    }

    function Submit(e)
    {
        e.preventDefault();

        const newperson = {
            name: Name,
            pass: Pass,
          };
      

        dispatch(actionCreators.AddIntern(newperson));
        console.log(newperson);
        navigate('/home');
    }

    return ( 
        <form >
            <input type="text" onChange={changeValueUser} />
            <input type="password" onChange= {changeValuePass}/>
            <button onClick={Submit}>Add</button>
        </form>
     );
}
 
export default ADD;