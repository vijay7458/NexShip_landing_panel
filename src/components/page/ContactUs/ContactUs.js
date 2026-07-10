import React, { useEffect, useState } from 'react';
import './ContactUs.css';
import MapboxComponent from './MapboxComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ShopifyLogo from "../../../assets/image/Channels/logo/shopify.jpg"
import AmazonLogo from "../../../assets/image/Channels/logo/AmazonLogo.png"
import WooLogo from "../../../assets/image/Channels/logo/WCLogo.png"
import HippoLogo from "../../../assets/image/Channels/logo/StoreHippo.png"
import MagentoLogo from "../../../assets/image/Channels/logo/magento.png"
import CustomLogo from "../../../assets/image/Channels/logo/Manual.png"
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { faUser, faBuilding, faMobileAlt, faEnvelope, faBox, faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import OtpModal from './OtpModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopNav from '../../../navbar/TopNav';


const ContactUs = () => {

    const resetForm = () => {
        setNewFormData({
            role: "buisness",
            name: "",
            mobile: "",
            companyName: "",
            companyUrl: "",
            emailAddress: "",
            monthlyShipment: "less than 1000",
        })
        setSelectedIds([])
    }

    const [openVerifyModal, setOpenVerifyModal] = useState(false)
    const [selectedIds, setSelectedIds] = useState([]);
    const [mainModalClose, setMainModalClose] = useState("")

    const handleitemboxChange = (id) => {
        setSelectedIds((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id)
                : [...prevSelected, id]
        );
    };

    console.log(openVerifyModal)

    useEffect(() => {
        if (mainModalClose === "closed") {
            setOpenVerifyModal(false)
            toast.info("We will contact you ")
        } else {
            setMainModalClose("")
        }
    }, [mainModalClose])

    console.log(7777777777777777, mainModalClose)


    const [error, seterror] = useState(false)

    const [showModal, setShowModal] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };

    const contactBoxObj = [
        { icon: <FontAwesomeIcon icon={faEnvelope} />, content: "ops@nexshyp.com" },
        { icon: <FontAwesomeIcon icon={faMobileAlt} />, content: "+91 9625673132" },
        { icon: <FontAwesomeIcon icon={faMapMarkerAlt} />, content: "Plot No. B1, PU 4, Scheme No. 54, Vijay Nagar Square, AB Rd, Vijay Nagar, Indore, Madhya Pradesh 452010" },
    ]

    const formCheck = [
        { id: "shopify", label: "Shopify", img: ShopifyLogo },
        { id: "amazon", label: "Amazon", img: AmazonLogo },
        { id: "storeHippo", label: "StoreHippo", img: HippoLogo },
        { id: "magento", label: "Magento", img: MagentoLogo },
        { id: "custom", label: "Custom", img: CustomLogo },
        { id: "wooCommerce", label: "WooCommerce", img: WooLogo },
    ]



    const [newFormData, setNewFormData] = useState({
        role: "buisness",
        name: "",
        mobile: "",
        companyName: "",
        companyUrl: "",
        emailAddress: "",
        monthlyShipment: "less than 1000",
    });
    const [newError, setNewError] = useState({});

    const handleChangeFormData = (e) => {
        const { name, value } = e.target;
        setNewFormData((prev) => ({ ...prev, [name]: value }));
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let err = "";

        switch (name) {
            case "name":
                if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
                    err = "Name must be at least 2 characters and only contain letters.";
                }
                break;
            case "mobile":
                if (!/^\d{10}$/.test(value)) {
                    err = "Mobile number must be 10 digits.";
                }
                break;
            case "emailAddress":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    err = "Enter a valid email address.";
                }
                break;
            default:
                err = "";
        }

        setNewError((prevErrors) => ({
            ...prevErrors,
            [name]: err,
        }));
    };

    const submitForm = async () => {
        const errors = {};

        Object.entries(newFormData).forEach(([key, value]) => {
            let err = "";

            switch (key) {
                case "name":
                    if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
                        err = "Name must be at least 2 characters and only contain letters.";
                    }
                    break;
                case "mobile":
                    if (!/^\d{10}$/.test(value)) {
                        err = "Mobile number must be 10 digits.";
                    }
                    break;
                case "emailAddress":
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        err = "Enter a valid email address.";
                    }
                    break;
                default:
                    break;
            }

            if (err) {
                errors[key] = err;
            }
        });

        setNewError(errors);

        if (Object.keys(errors).length === 0) {
            const payload = {
                type: newFormData.role,
                first_name: newFormData.name,
                mobile: newFormData.mobile,
                company_name: newFormData.companyName,
                website: newFormData.companyUrl,
                email: newFormData.emailAddress,
                monthly_shipment: newFormData.monthlyShipment,
                channel_name: selectedIds
            };

            try {
                const response = await fetch('https://nexshyp.com/core-api/seller/contact-us/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                const data = await response.json();
                if (data?.msgid) {
                    toast.success("OTP sent");
                    setOpenVerifyModal(true);
                } else if (data?.is_otp_verify === false) {
                    toast.info(data?.message || "OTP not verified");
                    setOpenVerifyModal(true);
                } else if (data?.is_otp_verify) {
                     window.scrollTo({ top: 0, behavior: 'smooth' });
                    toast.info("We will contact you shortly.")
                    resetForm()
                }

            } catch (error) {
                console.error("Submit error:", error);
                toast.error(error.message || "Failed to submit form");
            }


        }
    };

    const offerings = [
        {
            title: "Seamless eCommerce Integration",
            description:
                "Integrate your online store effortlessly with our logistics engine. From Shopify and WooCommerce to custom APIs, we automate the order-to-delivery journey — including real-time sync, shipping label generation, and courier assignment — all without lifting a finger.",
            image: "https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Fast & Reliable Nationwide Shipping",
            description:
                "Deliver products to over 29,000+ pincodes in India using our AI-powered courier allocation system. We ensure faster delivery, lower RTO, and higher customer satisfaction with daily pickups, NDR management, and real-time tracking updates.",
            image: "https://images.unsplash.com/photo-1674027392887-751d6396b710?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    return (
        <>
        <div className='mt-2'>
             <TopNav />
        </div>
            <div className="new-contact-us">

                <div className="left-contact-section">
                    <div className="row mt-4">
                        <h2 className="row get-in-touch">Connect with us</h2>
                    </div>
                    {/* Input Row 1*/}
                    <div className="row g-3 mt-4">
                        {/* Role Selector */}
                        <div className="col-12 col-lg-6">
                            <Form.Label>Select your role</Form.Label>
                            <InputGroup className='shadow-sm'>
                                <InputGroup.Text className="icon-input-addon">
                                    <FontAwesomeIcon icon={newFormData?.role === "customer" ? faUser : faBuilding} />
                                </InputGroup.Text>
                                <Form.Select
                                    aria-label="Select your role"
                                    name="role"
                                    onChange={(e) => handleChangeFormData(e)}
                                    className="border-start-0 dark-form-control"
                                >
                                    <option value="buisness">Business</option>
                                    <option value="customer">Customer</option>
                                </Form.Select>
                            </InputGroup>
                        </div>

                        {/* Name Input */}
                        <div className="col-12 col-lg-6">
                            <Form.Label>Your Name <span className="required-asterisk">*</span>  </Form.Label>
                            <InputGroup className='shadow-sm'>
                                <InputGroup.Text className="icon-input-addon">
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                                <Form.Control
                                    onChange={(e) => handleChangeFormData(e)}
                                    name="name"
                                    type="text"
                                    value={newFormData?.name}
                                    placeholder="Enter your name"
                                    className="border-start-0 dark-form-control"
                                />
                            </InputGroup>
                            {newError?.name && (
                                <div className="text-danger error-text">
                                    {newError?.name}
                                </div>
                            )}
                        </div>
                    </div>


                    {/* input row 2 */}

                    <div className="row g-3">
                        {/* Mobile Number */}
                        <div className="col-12 col-md-6">
                            <Form.Label className='mt-3'>Mobile Number <span className="required-asterisk">*</span>  </Form.Label>
                            <InputGroup className='shadow-sm'>
                                <InputGroup.Text className="icon-input-addon">
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </InputGroup.Text>
                                <Form.Control
                                    value={newFormData?.mobile}
                                    onChange={(e) => handleChangeFormData(e)}
                                    name="mobile"
                                    type="number"
                                    placeholder="Enter mobile no."
                                    className="border-start-0 dark-form-control"
                                />
                            </InputGroup>
                            {newError?.mobile && (
                                <div className="text-danger error-text">
                                    {newError?.mobile}
                                </div>
                            )}
                        </div>

                        {/* Company Name */}
                        <div className="col-12 col-md-6">
                            <Form.Label className='mt-3'>Company Name</Form.Label>
                            <InputGroup className='shadow-sm'>
                                <InputGroup.Text className="icon-input-addon">
                                    <FontAwesomeIcon icon={faBuilding} />
                                </InputGroup.Text>
                                <Form.Control
                                    onChange={(e) => handleChangeFormData(e)}
                                    name="companyName"
                                    type="text"
                                    placeholder="Enter company name"
                                    className="border-start-0 dark-form-control"
                                    value={newFormData?.companyName}
                                />
                            </InputGroup>
                        </div>
                    </div>


                    {/* input row 3 */}

                    <div className="row g-3">
                        {/* Company URL (Optional) */}
                        <div className="col-12 col-md-6">
                            <Form.Label className='mt-3'>
                                Company Url <span className="optional-text">(Optional)</span>
                            </Form.Label>
                            <InputGroup className='shadow-sm'>
                                <InputGroup.Text className="icon-input-addon">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </InputGroup.Text>
                                <Form.Control
                                    onChange={(e) => handleChangeFormData(e)}
                                    name="companyUrl"
                                    type="text"
                                    placeholder="Enter URL"
                                    className="border-start-0 dark-form-control"
                                    value={newFormData?.companyUrl}
                                />
                            </InputGroup>
                            {newError?.companyUrl && (
                                <div className="text-danger error-text">
                                    {newError?.companyUrl}
                                </div>
                            )}
                        </div>

                        {/* Email Address */}
                        <div className="col-12 col-md-6">
                            <Form.Label className='mt-3'>Email Address <span className="required-asterisk">*</span> </Form.Label>
                            <InputGroup className='shadow-sm'>
                                <InputGroup.Text className="icon-input-addon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => handleChangeFormData(e)}
                                    name="emailAddress"
                                    placeholder="Enter your email"
                                    className="border-start-0 dark-form-control"
                                    value={newFormData?.emailAddress}
                                />
                            </InputGroup>
                            {newError?.emailAddress && (
                                <div className="text-danger error-text">
                                    {newError?.emailAddress}
                                </div>
                            )}
                        </div>
                    </div>


                    {/* input row 4 */}

                    <div className="row g-3">
                        <div className="col-12">
                            <Form.Label className='mt-3'>Monthly Shipments</Form.Label>
                            <InputGroup className='shadow-sm'>
                                <InputGroup.Text className="icon-input-addon">
                                    <FontAwesomeIcon icon={faBox} />
                                </InputGroup.Text>
                                <Form.Select
                                    onChange={(e) => handleChangeFormData(e)}
                                    name="mothlyShipment"
                                    aria-label="Referral Source"
                                    className="dark-form-control border-start-0"
                                >
                                    <option value="less than 100">Less Than 100</option>
                                    <option value="100 to 1000">100 to 1000</option>
                                    <option value="1000 to 5000">1000 to 5000</option>
                                    <option value="more than 5000">More Than 5000</option>
                                </Form.Select>
                            </InputGroup>
                        </div>
                    </div>
                    <div className="row mt-4 channels-row">

                        {/* mobile number */}
                        <div className="col channels-col">
                            <Form.Label className="channels-label">Preferred Channels (select multiple)</Form.Label>
                            <div className='shadow-sm channels-wrapper'>
                                <div className="channels-inner">
                                    {formCheck?.map((item, index) => (
                                        <div
                                            key={index}
                                            className="channel-item"
                                        >
                                            <Form.Check
                                                type="checkbox"
                                                id={item?.id}
                                                checked={selectedIds.includes(item.id)}
                                                onChange={() => handleitemboxChange(item.id)}
                                                className="channel-checkbox"
                                            />
                                            {item?.img && (
                                                <img
                                                    src={item.img}
                                                    alt={item.label || `img-${index}`}
                                                    className="channel-img"
                                                />
                                            )}
                                            <label htmlFor={item?.id} className="channel-label-text">
                                                {item?.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className='mt-4 submit-row'>
                            <button onClick={submitForm} className="btn submit-btn">Submit Form</button>
                        </div>


                        <div className='mt-4'>
                            <h1 className="row form-text-label-main">Contact Us</h1>
                        </div>

                        <div className="row">
                            {contactBoxObj?.map((item, index) => (
                                <div className="col-12 col-md-6 col-lg-4 mt-4" key={index}>
                                    <div className="p-3 border rounded h-100 d-flex flex-column contact-box-item">
                                        <div className="contact-icon-box">
                                            {item?.icon}
                                        </div>
                                        <div className="contact-box-content">{item?.content}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


            </div>
            <div className="map-content-main">
                <div className="map-section">
                    <MapboxComponent />
                </div>
                {/* Left: Content */}
                <div className="contact-info-section">
                    <h3>What We Offer</h3>
                    <div className="offering-list">
                        {offerings.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`offering-item ${index % 2 !== 0 ? "reverse" : ""}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="offering-text">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <div className="offering-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {openVerifyModal && <OtpModal resetForm={resetForm} show={openVerifyModal} setMainModalClose={setMainModalClose} contactNumber={newFormData?.mobile} onClose={() => setOpenVerifyModal(false)} />}
                </div>
                <ToastContainer closeButton={false} autoClose={3000} />
            </div>
        </>
    );
};

export default ContactUs;
