import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { actionCreators } from "./state";



const EDIT = () => {

    const interns = useSelector(state => state.interns);
    console.log(interns);
    // const {userId}= user.params;
    const navigate= useNavigate();

    const { name,pass } = useParams();

    // const[Name,setName] = useState(name);
    // const[Pass, setPass] = useState(pass);
    
    const[Name,setName] = useState(name);
    const[Pass, setPass] = useState(pass);
    
    

    // const  Editted= () => {
    //     return (  );
    // }

    const changeValueUser = (e1) =>{
        setName(e1.target.value);
        // console.log(Name);
    }

    const changeValuePass = (e2) =>{
       setPass(e2.target.value);
    }

    function Submit(e)
    {
        // onEdit(Name,Pass);
        e.preventDefault();
        console.log(Name,Pass);
        // return(
        //     <h1>{Name}</h1>
        // );
        // navigate('/home');
    }

     
    return ( 
        <>
        {/* <h1>This is edit</h1>
        <h1>User Id: {userId}</h1> */}

        <form >
            <input type="text" value={Name} onChange={changeValueUser} />
            <input type="password" value= {Pass} onChange= {changeValuePass}/>
            <button onClick={Submit}>Edit</button>
            {/* <h1>{Name}</h1> */}
        </form>
        </>
     );
}
 
export default EDIT;