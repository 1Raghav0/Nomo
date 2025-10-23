import React from "react";

const ReferralSteps = () => {
  const steps = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      alt: "Link Icon",
      title: "Get your link",
      description:
        "Click below and sign up on our referral portal using your nomo email. That’s how your rewards get tracked.",
      image: "step-1-en.avif",
      imageAlt: "Referral Dashboard",
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      alt: "Share Icon",
      title: "Share it",
      description:
        "Send your unique invite link to friends you think will love nomo. Text it, tweet it, DM it — totally up to you.",
      image: "step-1-en.avif",
      imageAlt: "Share Link",
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png",
      alt: "Earn Icon",
      title: "Earn together",
      description: (
        <>
          When your friend joins, deposits $250, and completes all dashboard
          tasks —{" "}
          <span className="font-semibold text-gray-900">you both get $50</span>.
          Win-win 🎉
        </>
      ),
      image: "step-1-en.avif",
      imageAlt: "Rewards",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-24 py-16">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold lg:text-5xl text-gray-900 mb-12 text-center">
        How to refer a friend <span className="text-blue-600">to nomo</span>
      </h2>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-2xl shadow-sm p-6 md:p-8 text-right hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-4">
              
              <img
                src={step.icon}
                alt={step.alt}
                className="w-12 h-12"
              />
              <span className="bg-blue-50 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                Step {step.id}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-left">
              {step.title}
            </h3>
            <p className="text-gray-600 mb-4 text-left">{step.description}</p>
            <img
              src={step.image}
              alt={step.imageAlt}
              className="rounded-lg border border-gray-200 ml-auto"
            />
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition ">
          Sign up at the referral portal
        </button>
      </div>

      {/* Beta Notice */}
      <div className="bg-blue-50 rounded-xl mt-8 p-5 flex flex-col md:flex-row items-start md:items-center gap-3 text-sm text-gray-700 border border-blue-100">
        <span className="text-lg">⚠️</span>
        <p>
          <span className="font-bold text-lg">Heads up – this is a beta drop</span>
          <br />
          nomo’s referral program is in limited testing. It’s like a seasonal
          drop – join early, shape the future. Referral access is invite-only
          and time-limited.
        </p>
      </div>
    </section>
  );
};

export default ReferralSteps;
