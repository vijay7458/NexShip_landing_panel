import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="tc-container">
      <h1 className="tc-title">Terms and Conditions</h1>
      <p className="tc-intro">
        Welcome to our website. By using our services, you agree to the following terms and conditions.
      </p>
      <div className="tc-content">
        <section className="tc-section">
          <h2 className="tc-heading">1. Introduction</h2>
          <p className="tc-paragraph">
            These Terms and Conditions govern the use of this website and its services. By accessing or using our services, you agree to comply with these terms.
          </p>
        </section>
        
        <section className="tc-section">
          <h2 className="tc-heading">2. User Responsibilities</h2>
          <ul className="tc-list">
            <li className="tc-list-item">You must be at least 18 years old to use this website.</li>
            <li className="tc-list-item">You agree not to use the website for illegal activities.</li>
            <li className="tc-list-item">You are responsible for maintaining the confidentiality of your account.</li>
          </ul>
        </section>
        
        <section className="tc-section">
          <h2 className="tc-heading">3. Privacy Policy</h2>
          <p className="tc-paragraph">
            We respect your privacy. Please review our Privacy Policy to understand how we collect, use, and protect your data.
          </p>
        </section>
        
        <section className="tc-section">
          <h2 className="tc-heading">4. Intellectual Property</h2>
          <p className="tc-paragraph">
            All content on this website, including text, graphics, logos, and images, is the property of the website owner and is protected by intellectual property laws.
          </p>
        </section>
        
        <section className="tc-section">
          <h2 className="tc-heading">5. Limitation of Liability</h2>
          <p className="tc-paragraph">
            We are not liable for any damages resulting from the use or inability to use the website, including indirect, incidental, or consequential damages.
          </p>
        </section>
        
        <section className="tc-section">
          <h2 className="tc-heading">6. Governing Law</h2>
          <p className="tc-paragraph">
            These terms are governed by the laws of the jurisdiction in which the website owner resides.
          </p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading">7. Changes to Terms</h2>
          <p className="tc-paragraph">
            We reserve the right to modify or update these terms at any time. Any changes will be posted on this page with an updated date.
          </p>
        </section>

        <section className="tc-section">
          <h2 className="tc-heading">8. Contact Us</h2>
          <p className="tc-paragraph">
            If you have any questions regarding these Terms and Conditions, please contact us at support@website.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
