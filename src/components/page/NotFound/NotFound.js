import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import "./notFound.css";

const NotFound = () => {
    const Navigate = useNavigate();
    return (
        <div className="notfound-page-header">
            <div className="notfound-ripple-shape">
                <span className="notfound-ripple-1" />
                <span className="notfound-ripple-2" />
                <span className="notfound-ripple-3" />
                <span className="notfound-ripple-4" />
                <span className="notfound-ripple-5" />
            </div>
            <h1 className='notfound-title'>Ooops!<br />Page Not Found!</h1>
            <p className="notfound-description">
                You can go back to the Homepage
            </p>
            <button onClick={() => Navigate("/")} className='btn notfound-main-button'>Go Back to Home <FontAwesomeIcon className='ms-2' icon={faArrowUp} /></button>
        </div>
    );
};

export default NotFound;