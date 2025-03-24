import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

const CourierRatesModal = ({ show, handleClose, shippingData }) => {
    console.log(shippingData, "shippingData");

    return (
        <Modal show={show} onHide={handleClose} size="md">
            <Modal.Header closeButton>
                <Modal.Title>Courier Rates</Modal.Title>
            </Modal.Header>
            <Modal.Body className="position-relative">
                <div className="">
                    {shippingData ? (
                        <div className="courier-rates-pop table-responsive">
                            <table className="w-100">
                                <thead>
                                    <tr>
                                        <th style={{ width: '60%' }}>Courier Name</th>
                                        <th style={{ width: '20%' }}>Rate</th>
                                        <th style={{ width: '20%' }}>EDD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shippingData.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    <img
                                                        src={item.partner_image}
                                                        alt={item.partner_title}
                                                        style={{ width: "50px", height: "auto" }}
                                                    />
                                                    {item.partner_title || "N/A"}
                                                </div>
                                            </td>
                                            <td>₹{item.total_charge?.toFixed(2) || "N/A"}</td>
                                            <td>{item.estimate_days || "N/A"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-center">No shipping data available.</p>
                    )}
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer> */}
        </Modal>
    );
};

export default CourierRatesModal;
