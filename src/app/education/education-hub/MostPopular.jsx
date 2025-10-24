import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

export default function MostPopular() {
  const articles = [
    {
      id: 1,
      title: "Mastering Technical Analysis for Profitable Trading",
      category: "Analysis",
      difficulty: "Advanced",
      time: "5 mins",
      description:
        "Master the art of trading with technical analysis. Decode market trends, analyze charts, and make informed decisions.",
      image:
        "https://nomotrade.com/_next/image?url=https%3A%2F%2Fapi-blog.nomotrade.com%2Fuploads%2Flarge_Analysis_Mastering_Technical_Analysis_for_Profitable_Trading_8d4c33abd4.png&w=828&q=75",
      link: "/education/analysis/mastering-technical-analysis",
      categoryColor: "bg-purple-100 text-purple-700",
      difficultyColor: "text-green-600",
    },
    {
      id: 2,
      title: "Why Should I Start Trading?",
      category: "Trading",
      difficulty: "Beginner",
      time: "4 mins",
      description:
        "Uncover the basics of trading for beginners, from asset types to choosing the best trading platform.",
      image:
        "https://nomotrade.com/_next/image?url=https%3A%2F%2Fapi-blog.nomotrade.com%2Fuploads%2Flarge_Beginner_Why_Should_I_Start_Trading_726e87f223.png&w=828&q=75",
      link: "/education/beginners-corner/why-should-i-start-trading",
      categoryColor: "bg-cyan-100 text-cyan-700",
      difficultyColor: "text-green-500",
    },
    {
      id: 3,
      title: "Decoding IPOs: An Investor's Guide",
      category: "Investing",
      difficulty: "Intermediate",
      time: "5 mins",
      description:
        "Decode the intricacies of Initial Public Offerings (IPOs), exploring steps, investing strategies, and notable success stories.",
      image:
        "https://nomotrade.com/_next/image?url=https%3A%2F%2Fapi-blog.nomotrade.com%2Fuploads%2Flarge_Fin_Markets_Decoding_IP_Os_An_Investor_s_Guide_1_cdcab91c72.png&w=828&q=75",
      link: "/education/investing/decoding-ipos",
      categoryColor: "bg-green-100 text-green-700",
      difficultyColor: "text-green-500",
    },
  ];

  return (
    <section className="bg-[#F8FAFD] py-20 px-6 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a23] mb-12">
        Most popular
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow text-left">
              {/* Tags */}
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-lg ${article.categoryColor}`}
                >
                  {article.category}
                </span>
              </div>

              <p className="text-sm mb-3">
                <span className={`${article.difficultyColor} font-medium`}>
                  {article.difficulty}
                </span>
                <span className="text-gray-400"> • {article.time}</span>
              </p>

              <h3 className="text-lg font-semibold text-[#0a0a23] leading-snug mb-3">
                {article.title}
              </h3>

              <p className="text-gray-500 text-sm mb-6 flex-grow">
                {article.description}
              </p>

              {/* Register Link */}
              <a
                href={article.link}
                className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
              >
                Register to see <HiArrowRight className="mt-[1px]" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl shadow-md transition-all">
          Show all
        </button>
      </div>
    </section>
  );
}
