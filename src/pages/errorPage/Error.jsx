import { useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import './error.css'
function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="error">
            <h1>Oops! <FontAwesomeIcon icon={faFaceSadTear} /></h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}



export default ErrorPage;