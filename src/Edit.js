import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { actionCreators } from "./state";



const Edit = () => {

    const interns = useSelector(state => state.interns);
    const person = useSelector(state=> state.person);
    const dispatch = useDispatch();


    // console.log(person);
    // const {userId}= user.params;
    const navigate= useNavigate();

    const { paramname, parampass } = useParams();

    // person.username = name;
    // person.pass= pass;

    // console.log(person);

    // const[Name,setName] = useState(name);
    // const[Pass, setPass] = useState(pass);
    
    const[Name,setName] = useState(paramname);
    const[Pass, setPass] = useState(parampass);
    
    

    // const  Editted= () => {
    //     return (  );
    // }

    const changeValueUsername = (e1) =>{
        // console.log(e1.target.value);
        setName(e1.target.value);
        // dispatch(actionCreators.changeValueUser(Name));
        // person.username = Name;
        // console.log(Name);
    }

    const changeValuePass = (e2) =>{
       setPass(e2.target.value);
    //    person.pass= Pass;
    }

    function Submit(e)
    {
        e.preventDefault();
        // const updatedPerson = { ...person, username: Name, pass: Pass };
        const updatedPerson= {
            name: Name,
            pass: Pass,
          };
      
        //   console.log(updatedPerson);
        
        // console.log(name,pass);
        dispatch(actionCreators.EditIntern(updatedPerson,paramname,parampass));
        // console.log(interns);
        // console.log(updatedPerson)
        // onEdit(Name,Pass);
        
        // return(
        //     <h1>{Name}</h1>
        // );
        navigate('/home');
    }

     
    return ( 
        <>
        {/* <h1>This is edit</h1>
        <h1>User Id: {userId}</h1> */}

        <form >
            <input type="text" value={Name} onChange={changeValueUsername} />
            <input type="password" value= {Pass} onChange= {changeValuePass}/>
            <button onClick={Submit}>Edit</button>
            {/* <h1>{Name}</h1> */}
        </form>
        </>
     );
}
 
export default Edit;