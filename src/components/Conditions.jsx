import React from 'react';

const PolicyAndConditions = () => {
  return (
    <section id="policy" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Policy & Conditions</h2>
        
        {/* Terms and Conditions */}
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4">Terms and Conditions</h3>
          <p className="text-gray-600 mb-4">
            By using our website or making a reservation at Pickies Delights, you agree to the following terms and conditions. We reserve the right to modify or amend these terms at any time. Please ensure you review them regularly.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>All reservations are subject to availability and confirmation.</li>
            <li>We reserve the right to refuse service to anyone for any reason.</li>
            <li>Cancellations or modifications to your reservation must be made at least 24 hours in advance.</li>
            <li>Prices are subject to change without notice.</li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4">Privacy Policy</h3>
          <p className="text-gray-600 mb-4">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information. We do not share your personal details with third parties except when required by law.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>We collect personal data such as name, email address, and contact number to process reservations.</li>
            <li>We ensure the security of your personal information with appropriate security measures.</li>
            <li>You have the right to access and request deletion of your personal information at any time.</li>
            <li>By providing your email, you agree to receive promotional material from Pickies Delights. You can unsubscribe at any time.</li>
          </ul>
        </div>

        {/* Agreement to Terms */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4">Agreement to Terms</h3>
          <p className="text-gray-600">
            By checking the approval box on the contact form or making a reservation, you confirm that you have read and agree to our Terms and Conditions and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PolicyAndConditions;
