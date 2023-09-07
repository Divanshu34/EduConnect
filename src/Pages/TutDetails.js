function Details() {
    const LogOut = ()=>{
            sessionStorage.setItem("isLoggedIn",'false');
    }
    return (<><h1>This is Detaill</h1>
    <button onClick={LogOut} >Log Out</button>
    
     </> );
}

export default Details;