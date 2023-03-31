import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const[username, setusername] = useState('');
    const[Password, setpassword]= useState('');

   
    const interns = [
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
    

    const navigate = useNavigate();

    const changeValueUser = (e1) =>{
        setusername(e1.target.value);
    }

    const changeValuePass = (e2) =>{
        setpassword(e2.target.value);
    }


    const clickHandle= (e) =>{

        e.preventDefault();
        const x= interns.filter((intern) => (intern.name === username && intern.password === Password))
        console.log(x.length);
        // if x == {}
        // let counter = 0;
        // for (let i = 0; i < x.length; i++) {
        // counter++;
// }

        if(x.length != 0)
            {
                navigate('/home');
            }
            else{
                alert('Login Failed');
            }
    }

    return ( 
        <>
        <div classNameName="App">
      <div className="container">
        <div className="main">
            <div className="left">
                <h1>Welcome to my Resume Website</h1>
                <p>Login and Click submit to view my resume and know more about me!</p>
            </div>
            <div className="right">
                <form>
                    <h3>User Login</h3>
                    <div className="input" id="text">
                        <i className="fa-solid fa-user"></i> &nbsp;
                        <input type="text" name="username" id="username" placeholder="" onChange={changeValueUser}></input>
                        <div id="username-error"></div>
                    </div>
    
                    <div className="input">
                        <i className="fa-solid fa-lock"></i> &nbsp;
                        <input type="password" id="password" name= "password" placeholder="" onChange= {changeValuePass}></input>
                        {/* <span id="eye"><i className="fa fa-eye" onClick=toggle()></i></span> */}
                        <div id="password-error"></div>

                    </div>


                    <button className="submit" onClick= {clickHandle}>Login</button>
    
                    <div className="box1">
                        <span className="remember">
                            <input type="checkbox" name="" id=""></input>
                            <label for="">Remember me?</label>
                        </span>    
                        <span className="forgot">
                        <a href="">Forgot Password?</a>
                        </span>
                    </div>

                    <p className="para">or sign up using</p>
    
                </form>

                <div className="box2">
                    
                    <a href="https://www.google.co.in/"><button className="google"><i className="fa-brands fa-google"></i> Google</button></a
    >
    <a href="https://www.facebook.com/"><button className="facebook"><i className="fa-brands fa-facebook"></i> Facebook</button></a>
                </div>

    
        </div>
    </div>
    </div>
    </div>

        </>
     );
}
 
export default Login;