import { useNavigate } from "react-router-dom";

const Form = (props) => {

    const history = useNavigate();


    // const[username, password] = props;


    const changeValueUser = (e1) =>{
        // person.name= e1.target.value;
        props.setUsername(e1.target.value);
    }

    const changeValuePass = (e2) =>{
        // person.password= e2.target.value;
        props.setPassword(e2.target.value);
    }

    function Submit()
    {
        history.push('/home');
    }

    return ( 
        <form >
            <input type="text" onChange={changeValueUser} />
            <input type="password" onChange= {changeValuePass}/>
            <button onClick={Submit}></button>
        </form>
     );
}
 
export default Form;