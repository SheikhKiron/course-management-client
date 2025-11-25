export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-primary">Course Hub</h2>
            <p className="text-gray-600 mt-2 max-w-xs">
              Learn professional skills from industry experts. Upgrade your
              career with our premium courses.
            </p>
          </div>

        
          <nav className="grid grid-flow-row text-center md:text-left">
            <a href="/About" className="link link-hover text-gray-700">
              About Us
            </a>
            <a href="/Contact" className="link link-hover text-gray-700">
              Contact
            </a>
            <a href="/Courses" className="link link-hover text-gray-700">
              Courses
            </a>
            <a href="/Categories" className="link link-hover text-gray-700">
              Categories
            </a>
            <a href="/FAQ" className="link link-hover text-gray-700">
              FAQ
            </a>
          </nav>

          
          <div className="flex gap-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current hover:text-primary transition"
              >
                <path d="M24 4.557c-.883.392-1.832..."></path>
              </svg>
            </a>

            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current hover:text-primary transition"
              >
                <path d="M19.615 3.184c-3.604..."></path>
              </svg>
            </a>

            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="fill-current hover:text-primary transition"
              >
                <path d="M9 8h-3v4h3v12h5..."></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-10 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Course Hub — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
