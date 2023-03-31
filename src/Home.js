import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Outlet} from 'react-router';
import Form from "./Form";


const Home = (props) => {

  const[Username, setUsername] = useState("");
  const[Password, setPassword]= useState("");

  


    const[ interns, setinterns] = useState([
        {
          name: 'sarini',
          password: '123'
        },
    
        {
          name: 'varshini',
          password:'abc'
        },

        {
            name: 'aravind',
            password:'xyz'
          },

          {
            name: 'nantha',
            password:'456'
          },
        ]
    )

        const navigate = useNavigate();


    function deleted(key){
        
        // console.log(key);
        // let interns1 = interns; 
        let interns1= interns.filter((intern) => (intern.name!== key))
        setinterns(interns1);
        console.log(interns);
        // console.log('deleted');
        }

    function addRecord(){
        navigate('/home/form');
        // var newintern = {};
        // newintern.name = Username;
        // newintern.password= Password;
        // interns.push(newintern);
        
    }

    
    return ( 
        <>
        <h1>This is Home</h1>
        <button onClick={addRecord}>Add Record</button>
        {/* <Switch>
        <Route exact path='/home/form'>
          <Form username= "" password= ""></Form>
          <Form username = {Username} password= {Password}></Form>
        </Route>
        </Switch> */}
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
                    <td><button onClick={() => {
                        // console.log('deleted');
                        // { interns= interns.filter((internss) => (internss.name!= intern.name))}
                        deleted(intern.name);

                    }}>Delete</button></td>
                    </tr>
                    );
                }) 
             }
</tbody>
        </table>

        {/* {props.children} */}
        <Outlet></Outlet>
        
        </>
     );
}
 
export default Home;