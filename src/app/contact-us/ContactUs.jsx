// import React from "react";

// const ContactUs = () => {
//   return (
//     <section className="bg-white px-6 md:px-12 lg:px-24 py-16 mt-20">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//           Contact Us
//         </h2>
//         <p className="text-gray-600">
//           Have a question or need assistance? Reach out to us through the following channels:
//         </p>
//       </div>

//       {/* Contact cards grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Live Chat */}
//         <div className="bg-blue-50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
//           <div className="flex flex-col gap-4">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
//               alt="Live Chat"
//               className="w-16 h-16 mx-auto sm:mx-0"
//             />
//             <div className="text-center sm:text-left">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
//               <p className="text-gray-600 mb-3">
//                 Connect with us instantly via live chat.
//               </p>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition">
//                 Start chatting
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Email */}
//         <div className="bg-indigo-50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
//           <div className="flex flex-col gap-4">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
//               alt="Email"
//               className="w-16 h-16 mx-auto sm:mx-0"
//             />
//             <div className="text-center sm:text-left">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
//               <p className="text-gray-600 mb-1">
//                 Send your queries to our dedicated support team at
//               </p>
//               <a
//                 href="mailto:support@nomotrade.com"
//                 className="text-blue-600 font-medium"
//               >
//                 support@nomotrade.com
//               </a>
//               <p className="text-gray-600 mt-1 text-sm">
//                 Expect a response within 24 working hours.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* FAQs */}
//         <div className="bg-cyan-50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
//           <div className="flex flex-col gap-4">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/324/324135.png"
//               alt="FAQs"
//               className="w-16 h-16 mx-auto sm:mx-0"
//             />
//             <div className="text-center sm:text-left">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">FAQs</h3>
//               <p className="text-gray-600">
//                 Explore our{" "}
//                 <a href="#" className="text-blue-600 font-medium">
//                   Help Center
//                 </a>{" "}
//                 for comprehensive answers to frequently asked questions.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Phone Lines */}
//         <div className="bg-blue-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
//           <div className="flex flex-col gap-4">
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
//               alt="Phone Lines"
//               className="w-16 h-16 mx-auto sm:mx-0"
//             />
//             <div className="text-center sm:text-left">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Lines</h3>
//               <p className="text-gray-600 text-sm mb-1">
//                 Our call center is available Monday to Friday, 9:00–18:00 GMT+2
//               </p>
//               <p className="text-gray-900 font-semibold">+371 254 93 909</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Address section */}
//       <div className="bg-green-50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
//         <div className="flex flex-col gap-4">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/535/535188.png"
//             alt="Address"
//             className="w-16 h-16 mx-auto sm:mx-0"
//           />
//           <div className="text-center sm:text-left">
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
//             <p className="text-gray-900 font-medium">Nomo Trade Limited</p>
//             <p className="text-gray-600 text-sm">
//               Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay,
//               Gros-Islet, LC01 401, Saint Lucia
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;


import React from "react";

const ContactUs = () => {
  const contactCards = [
    {
      id: 1,
      bg: "bg-blue-50",
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      alt: "Live Chat",
      title: "Live Chat",
      content: (
        <>
          <p className="text-gray-600 mb-3">
            Connect with us instantly via live chat.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition">
            Start chatting
          </button>
        </>
      ),
    },
    {
      id: 2,
      bg: "bg-indigo-50",
      icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
      alt: "Email",
      title: "Email",
      content: (
        <>
          <p className="text-gray-600 mb-1">
            Send your queries to our dedicated support team at
          </p>
          <a
            href="mailto:support@nomotrade.com"
            className="text-blue-600 font-medium"
          >
            support@nomotrade.com
          </a>
          <p className="text-gray-600 mt-1 text-sm">
            Expect a response within 24 working hours.
          </p>
        </>
      ),
    },
    {
      id: 3,
      bg: "bg-cyan-50",
      icon: "https://cdn-icons-png.flaticon.com/512/324/324135.png",
      alt: "FAQs",
      title: "FAQs",
      content: (
        <p className="text-gray-600">
          Explore our{" "}
          <a href="#" className="text-blue-600 font-medium">
            Help Center
          </a>{" "}
          for comprehensive answers to frequently asked questions.
        </p>
      ),
    },
    {
      id: 4,
      bg: "bg-blue-100",
      icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
      alt: "Phone Lines",
      title: "Phone Lines",
      content: (
        <>
          <p className="text-gray-600 text-sm mb-1">
            Our call center is available Monday to Friday, 9:00–18:00 GMT+2
          </p>
          <p className="text-gray-900 font-semibold">+371 254 93 909</p>
        </>
      ),
    },
  ];

  return (
    <section className="bg-white px-6 md:px-12 lg:px-24 py-16 mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600">
          Have a question or need assistance? Reach out to us through the following channels:
        </p>
      </div>

      {/* Contact cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {contactCards.map((card) => (
          <div
            key={card.id}
            className={`${card.bg} rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition`}
          >
            <div className="flex flex-col gap-4">
              <img
                src={card.icon}
                alt={card.alt}
                className="w-16 h-16 mx-auto sm:mx-0"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                {card.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Address section */}
      <div className="bg-green-50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition">
        <div className="flex flex-col gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/535/535188.png"
            alt="Address"
            className="w-16 h-16 mx-auto sm:mx-0"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-900 font-medium">Nomo Trade Limited</p>
            <p className="text-gray-600 text-sm">
              Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay,
              Gros-Islet, LC01 401, Saint Lucia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
