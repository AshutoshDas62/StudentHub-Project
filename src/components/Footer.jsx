export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-2 md:grid-cols-3">

        <div>
          <h3 className="text-white text-xl font-bold mb-2">
            Student Hub
          </h3>
          <p>
            Empowering students to achieve academic excellence.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Links</h4>
          <ul className="space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-sm mt-2 text-gray-500">
        © {new Date().getFullYear()} Student Hub. All rights reserved.
      </div>
    </footer>
  );
}
