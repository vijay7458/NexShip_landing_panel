import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="pp-container">
      <h1 className="pp-title">Privacy Policy</h1>
      <p className="pp-intro">
        This Privacy Policy explains how we collect, use, and protect your personal data when you use our website.
      </p>
      <div className="pp-content">
        <section className="pp-section">
          <h2 className="pp-heading">1. Information We Collect</h2>
          <p className="pp-paragraph">
            We collect personal information that you provide to us when you register, make a purchase, or use our services. This may include your name, email address, phone number, and payment details.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-heading">2. How We Use Your Information</h2>
          <ul className="pp-list">
            <li className="pp-list-item">To provide and improve our services.</li>
            <li className="pp-list-item">To communicate with you regarding your account or transactions.</li>
            <li className="pp-list-item">To send promotional emails, if you opt-in.</li>
          </ul>
        </section>

        <section className="pp-section">
          <h2 className="pp-heading">3. Data Security</h2>
          <p className="pp-paragraph">
            We take appropriate measures to protect your personal data from unauthorized access, alteration, or destruction. This includes using encryption and secure storage practices.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-heading">4. Sharing Your Information</h2>
          <p className="pp-paragraph">
            We do not sell or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our website or services.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-heading">5. Your Rights</h2>
          <p className="pp-paragraph">
            You have the right to access, correct, or delete the personal data we hold about you. If you wish to exercise any of these rights, please contact us at support@website.com.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-heading">6. Changes to This Privacy Policy</h2>
          <p className="pp-paragraph">
            We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
          </p>
        </section>

        <section className="pp-section">
          <h2 className="pp-heading">7. Contact Us</h2>
          <p className="pp-paragraph">
            If you have any questions or concerns about our privacy practices, please contact us at support@website.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
