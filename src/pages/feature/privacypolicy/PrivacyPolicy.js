import React from 'react';
import TopNav from '../../../navbar/TopNav';
import './privacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page-wrapper">
      <TopNav />

      {/* Hero Section */}
      <div
        className="container-fluid w-100 position-relative d-flex align-items-center justify-content-center privacy-hero"
      >
        <p className="text-center display-5 fw-bold m-0 privacy-hero-title">Privacy Policy</p>
      </div>

      {/* Main Content */}
      <div className="container my-3">
        <div className="card shadow-sm border-0 p-4 p-md-5 privacy-card">
          <div className="card-body">

            <h4 className="fw-bold mb-3 privacy-heading">Introduction</h4>
            <p className="privacy-text">
              This Privacy Policy explains how we collect, use, and protect your personal data when you use our website,
              applications, and services. Your privacy is important to us, and we are committed to handling your information
              with transparency, care, and security. By accessing or using our website, you consent to the practices described
              in this policy.
            </p>
            <p className="privacy-text">
              We regularly review and update this Privacy Policy to ensure it reflects current legal requirements,
              data protection practices, and our ongoing commitment to user privacy.
            </p>

            <h4 className="fw-bold mt-4 mb-3 privacy-heading">1. Information We Collect</h4>
            <p className="privacy-text">
              We collect information that helps us provide, improve, and personalize our services. This may include personal
              data you provide directly, such as when you register for an account, make a purchase, fill out a form, or contact
              us for support. Examples include:
            </p>
            <ul className="privacy-text">
              <li>Personal identification details such as your name, address, email address, and phone number.</li>
              <li>Payment and billing information used to process transactions securely.</li>
              <li>Technical data such as IP address, browser type, device information, and access times collected automatically when you use our website.</li>
              <li>Usage data and preferences gathered to improve your browsing and service experience.</li>
            </ul>
            <p className="privacy-text">
              We may also collect anonymized or aggregated data to help us understand overall usage trends and performance,
              which does not identify you personally.
            </p>

            <h4 className="fw-bold mt-4 mb-3 privacy-heading">2. How We Use Your Information</h4>
            <p className="privacy-text">
              The information we collect is used to operate efficiently and deliver a better experience for you. Specifically, we may use your information:
            </p>
            <ul className="privacy-text">
              <li>To provide, manage, and improve our products and services.</li>
              <li>To personalize your experience and show you relevant content and offers.</li>
              <li>To communicate with you regarding account details, orders, or support inquiries.</li>
              <li>To send service-related notifications, updates, or promotional messages — only if you have opted in.</li>
              <li>To analyze usage patterns, detect fraud, and ensure the security of our platform.</li>
            </ul>
            <p className="privacy-text">
              We use your data responsibly and only for the purposes outlined in this policy or with your explicit consent where required.
            </p>

            <h4 className="fw-bold mt-4 mb-3 privacy-heading">3. Data Security</h4>
            <p className="privacy-text">
              We take your security seriously and employ advanced measures to protect your personal data from unauthorized access,
              misuse, loss, or alteration. Our systems use secure encryption protocols (SSL/TLS), firewalls, and limited access
              controls to safeguard stored data.
            </p>
            <p className="privacy-text">
              While we follow industry best practices to protect your information, please note that no online transmission
              or storage method is completely secure. We therefore cannot guarantee absolute security, but we strive to
              mitigate all reasonable risks through continual monitoring and improvement.
            </p>

            <h4 className="fw-bold mt-4 mb-3 privacy-heading">4. Sharing Your Information</h4>
            <p className="privacy-text">
              We do not sell, rent, or trade your personal data to third parties. However, we may share limited data with
              trusted service providers and partners who assist us in website operations, payment processing, analytics,
              email communications, and delivery logistics.
            </p>
            <p className="privacy-text">
              These partners are contractually obligated to keep your information confidential and to use it only for
              the purpose of providing their services to us. We may also disclose your information when required by law
              or in response to valid legal requests from authorities.
            </p>

            <h4 className="fw-bold mt-4 mb-3 privacy-heading">5. Your Rights</h4>
            <p className="privacy-text">
              You have full control over your personal data. You may request access, correction, or deletion of your
              information at any time by contacting our support team. Additionally, you can:
            </p>
            <ul className="privacy-text">
              <li>Withdraw your consent to marketing communications.</li>
              <li>Request a copy of your personal data in a structured, commonly used format.</li>
              <li>Request limitation or objection to certain types of data processing.</li>
            </ul>
            <p className="privacy-text">
              We respond to all valid requests within the timeframes established by applicable data protection laws.
            </p>

            <h4 className="fw-bold mt-4 mb-3 privacy-heading">6. Changes to This Privacy Policy</h4>
            <p className="privacy-text">
              We reserve the right to update this Privacy Policy periodically to reflect changes in legal, operational,
              or technological requirements. Any updates will be posted on this page, and we encourage you to check
              this policy regularly to stay informed about how we protect your data.
            </p>
            <p className="privacy-text">
              The "Last Updated" date below indicates the most recent revision of this policy. Continued use of our
              website after changes means you accept the updated terms.
            </p>

            <h4 className="fw-bold mt-4 mb-3 privacy-heading">7. Contact Us</h4>
            <p className="privacy-text">
              If you have any questions, concerns, or requests regarding our Privacy Policy or data practices,
              please contact us through any of the following methods:
            </p>
            <ul className="privacy-text">
              <li><strong className="privacy-strong">Email:</strong> sales@nexshyp.com</li>
              <li><strong className="privacy-strong">Office Address:</strong> Unit - 321, Emaar Colonnade, Main Golf Course Ext Rd, Sector 66 Gurugram, Haryana, India</li>
              <li><strong className="privacy-strong">Business Hours:</strong> Monday – Friday, 9:00 AM to 6:00 PM (IST)</li>
            </ul>

            <p className="mt-4 privacy-updated">
              Last Updated: July 10, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}