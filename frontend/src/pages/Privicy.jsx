import React from 'react';

const Privicy = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-3xl font-bold mb-6">Privacy & Security</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Data Collection</h2>
          <p>
            We collect only the necessary information required for booking and managing your medical appointments, such as your name, contact details, and appointment history.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Data Usage</h2>
          <p>
            Your personal information is used strictly for service purposes and to enhance your user experience. We do not share your data with third parties without your consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Security</h2>
          <p>
            We use industry-standard encryption and authentication methods to protect your data. Your account information is stored securely and access is restricted to authorized personnel only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Cookies</h2>
          <p>
            We use cookies to maintain your session and provide a personalized experience. You can disable cookies in your browser settings if you prefer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <p>
            You have full control over your data. You can view, update, or request deletion of your account and personal information at any time by contacting our support.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            If you have any questions regarding your privacy or security, feel free to contact our support team at <a href="mailto:support@checkappoint.com" className="text-blue-600 underline">support@checkappoint.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privicy;
