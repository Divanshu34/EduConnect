import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function Tutorails() {
    const history = useHistory();
    const details = ()=>{
        history.push('/details')
    }
var {topic} = useParams();
    return ( <><h1>This is Tutorial</h1> 
    <button onClick={details}>Go To Details</button>
    </>);
}

export default Tutorails;