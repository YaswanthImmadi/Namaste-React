import { useRouteError } from "react-router-dom";
const Error=()=>{
    let err=useRouteError();
    return(
        <div className="error">
            <h1>OOPS Something Went Wrong !!</h1>
            <h2>{err.status} {err.statusText}</h2>
        </div>
    )
}
export default Error;