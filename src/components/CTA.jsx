export default function CTA() {
  return (
    <section className="bg-linear-to-br from-[#0b1220] via-[#0e1a2f] to-[#0b1220] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your <br />
              Academic Journey?
            </h2>

            <p className="text-gray-300 max-w-xl">
              Join thousands of students who are already using Student Hub to
              organize their studies, connect with peers, and achieve academic
              success. Start your journey today.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-lg font-semibold">
                Get Started Free
              </button>

              <button className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
                Learn More
              </button>
            </div>

            <p className="text-sm text-gray-400">
              No credit card required · Free forever plan available
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-6 left-6 bg-[#141c2f] px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg">
              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">
                ✓
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  50,000+ Students
                </p>
                <p className="text-gray-400 text-xs">
                  Already joined
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
