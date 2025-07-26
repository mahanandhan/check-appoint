import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">About CheckAppoint</h1>
        
        <p className="text-gray-700 mb-4">
          <strong>CheckAppoint</strong> is an advanced digital platform engineered to modernize and simplify the process of medical appointment scheduling. Designed with both patients and healthcare providers in mind, it bridges the gap between accessibility and efficiency in clinical workflows.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Key Functionalities:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Hospital Discovery:</strong> Seamless access to hospital directories based on location and specialties.</li>
          <li><strong>Doctor Filtering:</strong> Intelligent categorization and search across medical cadres like Orthopedics, Neurology, Cardiology, and more.</li>
          <li><strong>Location-Based Search:</strong> Geospatial search support to surface relevant doctors and institutions within proximity.</li>
          <li><strong>Real-Time Appointment Scheduling:</strong> Booking logic synchronized with doctor availability to avoid double-booking.</li>
          <li><strong>Telemedicine Integration:</strong> WebRTC-powered video consultations that ensure end-to-end encrypted patient-doctor interactions.</li>
          <li><strong>Flexible Payments:</strong> Support for QR-based manual payments and optional integration with secure payment gateways.</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Vision Statement:</h2>
        <p className="text-gray-700 mb-4">
          Our mission is to revolutionize how individuals connect with healthcare services—making timely and informed medical access a norm rather than a privilege. We aim to foster a digital ecosystem where convenience, trust, and security coalesce.
        </p>

        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-2">Privacy & Data Integrity:</h2>
        <p className="text-gray-700">
          Patient confidentiality is central to our architecture. CheckAppoint employs best practices in data encryption, session management, and secure communications to ensure compliance with global data protection standards such as HIPAA and GDPR (where applicable).
        </p>
      </div>
    </div>
  );
};

export default About;
