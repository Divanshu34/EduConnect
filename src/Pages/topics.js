import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Topics () {
    const history = useHistory();
    const GoTo = ()=>{
            history.push('/tutorials');
    }
    return (    <><h1>This is Topic </h1>
    <button onClick={GoTo}>Go To Tutorials</button>
    </> );
}

export default Topics ;