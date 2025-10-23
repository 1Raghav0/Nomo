import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-white py-12 px-6 text-center sm:px-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Do you have more questions?
      </h2>
      <p className="text-gray-500 mb-6">
        Our platform is continually evolving, and we're here to help along the way. If you have additional questions or need further assistance, feel free to reach out to our dedicated support team.
      </p>
      <a
        href="/contact-us" // Link to your contact page or action handler
        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zM5 4a1 1 0 011-1h8a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4z"
            clipRule="evenodd"
          />
        </svg>
        Contact us
      </a>
    </div>
  );
};

export default ContactSection;
