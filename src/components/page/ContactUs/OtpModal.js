import React, { useRef, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OtpModal = ({ show, onClose, contactNumber }) => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputsRef = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputsRef[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef[index - 1].current.focus();
        }
    };

    const handleSubmit = async () => {
        const enteredOtp = otp.join("");
        console.log("Submitted OTP:", enteredOtp);
        let payload = {
            contact_number: contactNumber,
            otp: enteredOtp,
        }
        try {
            const response = await fetch('https://dev.shipease.in/core-api/seller/verify-otp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                toast.error(response?.detail || "OTP is incorrect");
            } else {
                console.log(response)
                toast?.success(response?.detail)
                onClose();
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleResend = async() => {
         const enteredOtp = otp.join("");
        console.log("Submitted OTP:", enteredOtp);
        let payload = {
            contact_number: contactNumber,
        }
        try {
            const response = await fetch('https://dev.shipease.in/core-api/seller/resend-otp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                toast.error(response?.detail );
            } else {
                console.log(response)
                toast?.success(response?.detail || "OTP resend successfully")
                onClose();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='otp-main-verify'>
            <Modal
                show={show}
                onHide={onClose}
                centered
                dialogClassName="centered"
            >
                <Modal.Body>
                    <div className='main-verify'>
                        <div
                            style={{
                                backgroundColor: '#0d6efd', // Bootstrap primary
                                borderRadius: '50%',
                                width: '90px',
                                height: '90px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto',
                            }}
                        >
                            <FontAwesomeIcon icon={faShieldHalved} size="2x" style={{ color: 'white' }} />
                        </div>
                        <div className='maintext-verify text-center'><h2>Verify your code</h2></div>
                        <div className='text-center mt-1'><p>We’ve sent a 6-digit code to your number.</p></div>
                        <div className='text-center' style={{ marginTop: "-23px" }}>
                            <p>******8989</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center gap-2 my-3">
                        {otp.map((digit, index) => (
                            <Form.Control
                                key={index}
                                type="text"
                                inputMode="numeric"
                                maxLength="1"
                                ref={inputsRef[index]}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="text-center otp-input"
                            />
                        ))}
                    </div>



                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button
                            style={{ width: "90%", marginTop: "0px", fontSize: "20px", fontFamily: "Poppins, sans-serif" }}
                            className='btn btn-primary'
                            onClick={handleSubmit}
                        >
                            Verify
                        </Button>
                    </div>
                    <div className='bottomText mt-3'>
                        <h6 className='text-center'>Didn't receive code? <span className='resend-text' onClick={handleResend}>Resend</span></h6>
                    </div>
                </Modal.Body>
            </Modal>
            <ToastContainer />
        </div>
    );
};

export default OtpModal;
