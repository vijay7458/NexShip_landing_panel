import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import faqData from "./faqData.json";
import './HelpCenter.css';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);
  const navigate = useNavigate();

  useEffect(() => {
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm === "") {
      setFilteredFAQs(faqData);  // If search is empty, show all FAQs
    } else {
      const newFAQs = {};

      Object.keys(faqData).forEach((category) => {
        const filteredCategory = {};

        // Check if the category matches the search term
        const categoryMatches = category.toLowerCase().includes(trimmedSearchTerm.toLowerCase());

        // Check the subcategories for matching questions
        Object.keys(faqData[category]).forEach((subCategory) => {
          const filteredQuestions = faqData[category][subCategory].filter((faq) => {
            // Use matchSearchTerm for flexible and normal matching
            return matchSearchTerm(trimmedSearchTerm, faq.question);
          });

          // If there are any filtered questions or the category itself matches the search term, include it
          if (filteredQuestions.length || categoryMatches) {
            filteredCategory[subCategory] = filteredQuestions;
          }
        });

        // Only add category if it contains valid subcategories or category itself matches search term
        if (Object.keys(filteredCategory).length > 0 || categoryMatches) {
          newFAQs[category] = filteredCategory;
        }
      });

      // Set the filtered FAQ data, including categories and subcategories that match
      setFilteredFAQs(newFAQs);
    }
  }, [searchTerm]);

  const handleQuestionClick = (faq) => {
    navigate(`/support/solutions/articles/${faq.id}`, { state: faq });
  };

  const handleViewAllClick = (category, subCategory) => {
    const encodedName = subCategory.replace(/\s+/g, "-");
    const url = `/support/solutions/${(category)}/${encodedName}`
    navigate(url);
  };

  const matchSearchTerm = (term, text) => {
    return text.toLowerCase().includes(term.toLowerCase());
  };

  return (
    <div className="help-center">
      <h1 className="help-center__title">Help Center</h1>
      <input
        type="text"
        placeholder="Search for a question..."
        className="help-center__search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="help-center__faq-list">
        {Object.keys(filteredFAQs).length === 0 ? (
          <p>No results found for "{searchTerm.trim()}".</p> // Display trimmed search term
        ) : (
          Object.keys(filteredFAQs).map((category) => (
            <div key={category} className="help-center__category">
              <h2 className="help-center__category-title">{category}</h2>
              <div className="subcategory-container">
                {Object.keys(filteredFAQs[category]).map((subCategory) => {
                  const questions = filteredFAQs[category][subCategory];
                  const hasMoreThanFive = questions.length > 5;

                  return (
                    <div key={subCategory} className="help-center__subcategory">
                      <h3 className="help-center__subcategory-title">{subCategory}</h3>
                      <ul className="help-center__questions">
                        {questions.slice(0, 5).map((faq) => (
                          <li
                            key={faq.id}
                            className="help-center__question"
                            onClick={() => handleQuestionClick(faq)}
                          >
                            {faq.question}
                          </li>
                        ))}
                      </ul>
                      {hasMoreThanFive && (
                        <p
                          className="help-center__view-all"
                          onClick={() => handleViewAllClick(category, subCategory)}
                        >
                          View all {questions.length} questions
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
