import { useHistory } from 'react-router-dom';

function Login()
{
    const history = useHistory();

    const SignIn = ()=>{
        window.sessionStorage.setItem("isLoggedIn", 'true');
        history.push('/topics');
        var server = new XMLHttpRequest();
        server.onreadystatechange = ()=>{
                    if(server.readyState==4 && server.status==200){
                        var data = JSON.parse(server.responseType);
                        if(data.legth>0){
                            window.sessionStorage.setItem("Name",data.fName + " " + data.lName);
                        }
                        else{

                        }
                    }
        }
        server.open("POSt",'');
        server.setRequestHeader('Content-Type','application/json');
        server.send();


    }
    return <div>
                <h1>Welcome To Login</h1>
                <button onClick={SignIn}>Sign In</button>
           </div>
}
export default Login