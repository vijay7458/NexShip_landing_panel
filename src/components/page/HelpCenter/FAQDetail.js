import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import faqData from "./faqData.json"; // Adjust the path if needed
import './FAQDetail.css';

const FAQDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the FAQ by ID
    let selectedFAQ = null;

    // Iterate through each category in faqData (which are objects, not arrays)
    Object.keys(faqData).forEach((categoryKey) => {
        const categories = faqData[categoryKey]; // This is an object containing FAQs for each subcategory

        // Iterate through each subcategory in the category
        Object.values(categories).forEach((faqList) => {
            const found = faqList.find((faq) => faq.id === Number(id));
            if (found) selectedFAQ = found;
        });
    });

    // If no FAQ is found, display a message
    if (!selectedFAQ) {
        return (
            <div className="faq-detail">
                <div className="faq-detail__error">
                    FAQ not found. <span onClick={() => navigate("/help-center")}>Go back to Help Center</span>
                </div>
            </div>
        );
    }

    return (
        <div className="faq-detail">
            <button className="btn main-button" onClick={() => navigate(-1)}>
                ← Back
            </button>
            <h2 className="faq-detail__question mt-5">{selectedFAQ.question}</h2>
            <p className="faq-detail__answer">{selectedFAQ.answer}</p>
        </div>
    );
};

export default FAQDetail;
