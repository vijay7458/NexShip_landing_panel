import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import faqData from './faqData.json';
import './SubCategoryPage.css'

const SubCategoryPage = () => {
    const { category, subCategory } = useParams();
    const navigate = useNavigate();

    // Decode the subCategory if it was slugified (hyphenated)
    const decodedSubCategory = subCategory.replace(/-/g, " ");

    // You can get the data from the FAQ JSON based on the category and subcategory
    const questions = faqData[category]?.[decodedSubCategory] || [];

    const handleFAQClick = (faqId) => {
        // Navigate to the FAQ detail page, passing the FAQ ID
        navigate(`/support/solutions/articles/${faqId}`);
    };

    return (
        <div className="subcategory-page">
            <h1>{decodedSubCategory} - All Questions</h1>
            <ul>
                {questions.length > 0 ? (
                    questions.map((faq) => (
                        <li key={faq.id} onClick={() => handleFAQClick(faq.id)}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </li>
                    ))
                ) : (
                    <p className='no-questions'>No questions available for this subcategory.</p>
                )}
            </ul>
        </div>
    );
};

export default SubCategoryPage;
