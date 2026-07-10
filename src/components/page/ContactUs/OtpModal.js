import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './otpModal.css';


const OtpModal = ({ show, onClose, contactNumber, resetForm }) => {
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
    const maskedNumber = contactNumber.replace(/^(\d{6})/, '******');

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef[index - 1].current.focus();
        }
    };



    const handleSubmit = async () => {
        const enteredOtp = otp.join("");
        console.log("Submitted OTP:", enteredOtp);
        const payload = {
            contact_number: contactNumber,
            otp: enteredOtp,
        };

        try {
            const response = await fetch('https://nexshyp.com/core-api/seller/verify-otp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            if (data?.message === "OTP verified successfully!") {
                toast.success("We will contact you shortly.")
                setTimeout(() => {
                    onClose();
                    resetForm();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 2000)
            } else {
                toast.error("OTP is not verified")
            }

        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("Something went wrong");
        }
    };




    const handleResend = async () => {
        setOtp(["", "", "", "", "", ""])
        const enteredOtp = otp.join("");
        console.log("Submitted OTP:", enteredOtp);
        let payload = {
            contact_number: contactNumber,
        }
        try {
            const response = await fetch('https://nexshyp.com/core-api/seller/resend-otp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json()
            if (!response.ok) {
                toast.error(response?.detail);
            } else {
                toast?.success(data?.message)
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
                className="otp-modal-dark"
            >
                <Modal.Body>
                    <div className='main-verify'>
                        <div className="otp-shield-icon">
                            <FontAwesomeIcon icon={faShieldHalved} size="2x" className="otp-shield-icon-glyph" />
                        </div>
                        <div className='maintext-verify text-center'><h2>Verify your code</h2></div>
                        <div className='text-center mt-1'><p>We&rsquo;ve sent a 6-digit code to your number.</p></div>
                        <div className='text-center otp-masked-number'>
                            <p>{maskedNumber}</p>
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

                    <div className="otp-verify-btn-row">
                        <Button
                            className='btn otp-verify-btn'
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
            <ToastContainer closeButton={false} autoClose={3000} />
        </div>
    );
};

export default OtpModal;