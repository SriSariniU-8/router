import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Outlet} from 'react-router';
import Form from "./Form";
import { useEffect } from "react";
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import { actionCreators } from "./state";

const Home = () => {


  const interns = useSelector(state => state.interns);
  const person = useSelector(state => state.person);

  const dispatch = useDispatch();
//   console.log(interns);

    // console.log(person);
        const navigate = useNavigate();


    // function deleted(key){
        
    //     }

    function addRecord(){
        navigate('/home/form');
        
    }

    function Editted(name,pass){
      navigate(`/edit/${name}/${pass}`);
    }

    
    
    return ( 
        <>
        <h1>This is Home</h1>
        <button onClick={addRecord}>Add Record</button>
        <table>
            <tr>
            <th>name</th>
            <th>password</th>
            </tr>
            <tbody>
                { interns.map(intern => {
                    return (
                    <tr key={ intern.name }>
                    <td>{ intern.name }</td>
                    <td>{ intern.password}</td>
                    <td><button onClick={()=> {dispatch(actionCreators.Deleteintern(intern.name))}}>Delete</button></td>
                    <button onClick={() => {Editted(intern.name, intern.password)}}>Edit </button>
                    </tr>
                    );
                }) 
             }
</tbody>
        </table>

        <Outlet></Outlet>
        
        </>
     );
}
 
export default Home;