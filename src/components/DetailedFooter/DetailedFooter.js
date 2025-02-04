import React from 'react'
import './DetailedFooter.css'
import { Link } from 'react-router-dom';

const DetailedFooter = () => {
    return (
        <footer className="detailed-footer">
            <div className="detailed-footer__container">
                <p className="detailed-footer__text">© 2025 Shipease. All rights reserved.</p>
                <div className="detailed-footer__links">
                    <Link to="/terms-and-conditions" className="detailed-footer__link">
                        Terms & Conditions
                    </Link>
                    <Link to="/privacy-policy" className="detailed-footer__link">
                        Privacy Policy
                    </Link>
                    <Link to="" className="detailed-footer__link">
                        Compliance
                    </Link>
                    <Link to="" className="detailed-footer__link">
                        Refund & Cancellation Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default DetailedFooter;
