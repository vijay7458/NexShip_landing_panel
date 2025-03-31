import React, { useState } from "react";
import { Modal, Button, Nav, Tab, Table } from "react-bootstrap";

const CourierRatesModal = ({ show, handleClose }) => {
    const [activeTab, setActiveTab] = useState("all");

    const courierData = {
        air: [
            { courier: "DTDC Air 500gm", rate: "₹92.40", edd: "4 Days" },
            { courier: "Xpressbees Air", rate: "₹93.80", edd: "3 Days" },
            { courier: "Delhivery Air", rate: "₹105.15", edd: "3 Days" },
            { courier: "Blue Dart Air", rate: "₹122.00", edd: "3 Days" },
        ],
        surface: [
            { courier: "Amazon COD Surface 500gm", rate: "₹67.00", edd: "3 Days" },
            { courier: "ShipEase Next Day Delivery", rate: "₹75.00", edd: "2 Days" },
            { courier: "Ecom Express Next day delivery", rate: "₹78.00", edd: "2 Days" },
            { courier: "Xpressbees Surface", rate: "₹93.60", edd: "3 Days" },
            { courier: "Ecom Express Surface", rate: "₹96.30", edd: "3 Days" },
            { courier: "DTDC Surface", rate: "₹98.00", edd: "4 Days" },
            { courier: "Ekart Logistics Surface", rate: "₹100.70", edd: "4 Days" },
            { courier: "Delhivery Surface", rate: "₹104.45", edd: "3 Days" },
            { courier: "Blue Dart Surface", rate: "₹115.80", edd: "4 Days" },
        ],
    };

    // Combine both Air and Surface for "All" tab
    const allCouriers = [...courierData.air, ...courierData.surface];

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Compare Courier Rates</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="all">All</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="air">Air</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="surface">Surface</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content className="mt-3">
                        {["all", "air", "surface"].map((category) => (
                            <Tab.Pane eventKey={category} key={category}>
                                <div className="table-responsive">
                                    <Table bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Courier Name</th>
                                                <th>Rate</th>
                                                <th>EDD</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(category === "all" ? allCouriers : courierData[category]).map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.courier}</td>
                                                    <td>{item.rate}</td>
                                                    <td>{item.edd}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Tab.Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" href="https://app.shipease.in/signup" target="_blank">
                    Signup Now
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CourierRatesModal;
