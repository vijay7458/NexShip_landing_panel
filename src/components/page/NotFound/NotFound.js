import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

const NotFound = () => {
    const Navigate = useNavigate();
    return (
        <header className="page-header">
            <div className="ripple-shape">
                <span className="ripple-1" />
                <span className="ripple-2" />
                <span className="ripple-3" />
                <span className="ripple-4" />
                <span className="ripple-5" />
            </div>
            <h1 className=''>Ooops!<br />Page Not Found!</h1>
            <p className="page-header-description">
                You can go back to the Homepage
            </p>
            <button onClick={() => Navigate("/")} className='btn main-button'>Go Back to Home <FontAwesomeIcon className='ms-2' icon={faArrowUp} /></button>
        </header>

    );
};

export default NotFound;
