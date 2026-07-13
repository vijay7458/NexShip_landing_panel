import React from 'react';
import TopNav from '../../../navbar/TopNav';
import './termCondition.css';

export default function TermCondition() {
  return (
    <div className="terms-page-wrapper">
      <TopNav />

      {/* Hero Section */}
      <div
        className="container-fluid w-100 position-relative d-flex justify-content-center align-items-center terms-hero"
      >
        <p className="text-center display-6 fw-bold terms-hero-title">Terms & Conditions</p>
      </div>

      {/* Main Content */}
      <div className="container my-4">
        <div className="card shadow-sm border-0 p-4 p-md-5 terms-card">
          <div className="card-body">

            <h4 className="fw-bold mb-3 terms-heading">1. Introduction</h4>
            <p className="terms-text">
              These Terms and Conditions govern your access to and use of our website, products, and services.
              By using this site, you agree to comply with and be bound by these Terms and Conditions.
              Please read them carefully before using any part of the website.
            </p>
            <p className="terms-text">
              If you do not agree with any part of these terms, you must discontinue use of the website immediately.
              We may update or modify these Terms from time to time, and continued use signifies your acceptance of any revised terms.
            </p>

            <h4 className="fw-bold mt-4 mb-3 terms-heading">2. User Responsibilities</h4>
            <ul className="terms-text">
              <li>You must be at least 18 years old to use this website or create an account.</li>
              <li>You agree not to engage in illegal, abusive, or fraudulent activities on this website.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>Any activity under your account is your responsibility unless reported to us immediately.</li>
              <li>Misuse of the website may result in suspension or termination of access.</li>
            </ul>

            <h4 className="fw-bold mt-4 mb-3 terms-heading">3. Privacy Policy</h4>
            <p className="terms-text">
              We value your privacy and are committed to protecting your personal data.
              Our <strong className="terms-strong">Privacy Policy</strong> explains how we collect, use, and safeguard the information you share with us.
              By using this website, you consent to our data collection and usage practices described therein.
            </p>

            <h4 className="fw-bold mt-4 mb-3 terms-heading">4. Intellectual Property</h4>
            <p className="terms-text">
              All materials on this website, including logos, text, images, graphics, icons, and code, are owned or licensed by us.
              You may not copy, modify, distribute, or reproduce any part of the site's content without prior written permission.
            </p>
            <p className="terms-text">
              Unauthorized use of our intellectual property may result in legal action to protect our rights.
            </p>

            <h4 className="fw-bold mt-4 mb-3 terms-heading">5. Limitation of Liability</h4>
            <p className="terms-text">
              We strive to ensure the accuracy and reliability of the information provided on our site, but we make no guarantees.
              In no event shall we be held liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website.
            </p>
            <p className="terms-text">
              This includes, but is not limited to, loss of data, revenue, or profits resulting from system interruptions or errors.
            </p>

            <h4 className="fw-bold mt-4 mb-3 terms-heading">6. Governing Law</h4>
            <p className="terms-text">
              These Terms are governed by and construed in accordance with the laws of the jurisdiction in which the website owner resides.
              Any legal disputes shall be resolved in the competent courts of that jurisdiction.
            </p>

            <h4 className="fw-bold mt-4 mb-3 terms-heading">7. Changes to Terms</h4>
            <p className="terms-text">
              We may update these Terms and Conditions periodically to reflect changes in our practices, technology, or legal requirements.
              Updates will be posted on this page with the revised date indicated. Continued use after changes implies acceptance of the new terms.
            </p>

            <h4 className="fw-bold mt-4 mb-3 terms-heading">8. Contact Us</h4>
            <p className="terms-text">
              If you have any questions or concerns about these Terms and Conditions, please reach out to our support team:
            </p>
            <ul className="terms-text">
              <li><strong className="terms-strong">Email:</strong> sales@nexshyp.com</li>
              <li><strong className="terms-strong">Business Hours:</strong> Monday – Friday, 9:00 AM to 6:00 PM</li>
            </ul>

            <p className="mt-4 terms-updated">
              Last Updated: July 10, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}