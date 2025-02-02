import React from 'react';
import './DeliveryActivity.css';

const DeliveryActivity = () => {

    const activities = [
        {
            activity: "SHIPMENT DELIVERED",
            location: "NOIDA-ETAIL DELIVERY/RTO",
            date: "15 Mar",
            time: "05:22 PM",
        },
        {
            activity: "SHIPMENT OUTSCAN",
            location: "NOIDA-ETAIL DELIVERY/RTO",
            date: "15 Mar",
            time: "03:23 PM",
        },
        {
            activity: "SHIPMENT INSCAN",
            location: "NOIDA-ETAIL DELIVERY/RTO",
            date: "15 Mar",
            time: "02:52 PM",
        },
        {
            activity: "SHIPMENT OUTSCANNED TO NETWORK",
            location: "GOPINATH BAZAR HUB",
            date: "15 Mar",
            time: "01:20 PM",
        },
        {
            activity: "COMM FLIGHT, VEH/TRAIN; DELAYED/CANCELLED",
            location: "MUMBAI ETAIL WAREHOUSE",
            date: "15 Mar",
            time: "07:02 AM",
        },
        {
            activity: "COMM FLIGHT, VEH/TRAIN; DELAYED/CANCELLED",
            location: "MUMBAI ETAIL WAREHOUSE",
            date: "15 Mar",
            time: "04:36 AM",
        },
        {
            activity: "SHIPMENT OUTSCANNED TO NETWORK",
            location: "MUMBAI ETAIL WAREHOUSE",
            date: "15 Mar",
            time: "04:32 AM",
        },
        {
            activity: "SHIPMENT OUTSCANNED TO NETWORK",
            location: "OVALI ETAIL UNIT",
            date: "14 Mar",
            time: "07:50 PM",
        },
        {
            activity: "PICK UP SCAN ON FIELD",
            location: "OVALI ETAIL UNIT",
            date: "13 Mar",
            time: "07:26 PM",
        },
        {
            activity: "Order Received",
            location: "Gautam Buddha Nagar",
            date: "13 Mar",
            time: "08:11 AM",
        },
    ];
    const shipmentDeliveredActivity = activities.find(activity => activity.activity === "SHIPMENT DELIVERED");

    // Remove it from the array if it exists, and store it separately
    const filteredActivities = activities.filter(activity => activity.activity !== "SHIPMENT DELIVERED");

    // Push the "SHIPMENT DELIVERED" activity to the top of the list
    const updatedActivities = [shipmentDeliveredActivity, ...filteredActivities];

    return (
        <div className="delivery-info">
            <div className="delivery-list-wrap">
                <ul>
                    {updatedActivities.map((activity, index) => (
                        <li
                            key={index}
                            className={index === 0 ? 'delivery-list-item active' : 'delivery-list-item'}
                        >
                            <span>Activity: <span className="activity">{activity.activity}</span></span>
                            <span>Location: <span className="activity">{activity.location}</span></span>

                            <div className="date-for-activities">
                                <span className="date">{activity.date}</span>
                                <span className="time">{activity.time}</span>
                            </div>
                            <i className="circle-icon"></i>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DeliveryActivity;
