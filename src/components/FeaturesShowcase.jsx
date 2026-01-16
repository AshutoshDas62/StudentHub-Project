export default function FeaturesShowcase() {
  const features = [
    {
      title: "Smart Assignment Tracking",
      desc: "Never miss a deadline again with intelligent reminders and priority-based task management that adapts to your schedule.",
      img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
    },
    {
      title: "Seamless Collaboration",
      desc: "Work together on group projects with real-time document sharing, discussion boards, and integrated communication tools.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Progress Analytics",
      desc: "Track your academic performance with detailed insights and personalized recommendations to improve your study habits.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
  ];

  return (
    <section className="bg-linear-to-b from-[#0b1220] to-[#0e1a2f] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Everything You Need for Academic Success
          </h2>
          <p className="text-gray-400 text-lg">
            Student Hub provides powerful tools designed specifically for modern
            students to excel in their academic journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#141c2f] rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-white text-lg font-semibold mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
