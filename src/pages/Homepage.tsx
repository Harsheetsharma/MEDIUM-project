import { Link } from "react-router-dom"; // since it's Vite, use react-router
import { BookOpen, Search, Bell, User } from "lucide-react";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="bg-yellow-50 border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Stay curious.
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-lg">
                Discover stories, thinking, and expertise from writers on any
                topic.
              </p>
              <Link
                to="/explore"
                className="mt-8 inline-block px-6 py-3 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors"
              >
                Start reading
              </Link>
            </div>
            <div className="hidden md:block md:w-1/2">
              <img
                src="/placeholder.svg"
                alt="Hero illustration"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-5 w-5 text-gray-900" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Trending on Medium
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="text-3xl font-bold text-gray-200">0{item}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                    <span className="text-sm font-medium">Author Name</span>
                  </div>
                  <h3 className="font-bold text-base mb-1 hover:underline cursor-pointer">
                    How to Build a Successful Blog in 2023
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>May 2</span>
                    <span className="mx-1">·</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Articles */}
            <div className="lg:col-span-8">
              {[1, 2, 3, 4, 5].map((article) => (
                <article
                  key={article}
                  className="mb-10 pb-10 border-b border-gray-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 rounded-full bg-gray-300"></div>
                    <span className="text-sm font-medium">Author Name</span>
                  </div>
                  <div className="md:flex md:gap-6">
                    <div className="md:flex-1">
                      <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">
                        The Future of Web Development: Trends to Watch in 2023
                      </h2>
                      <p className="text-gray-600 mb-2 line-clamp-2">
                        Exploring the latest technologies and methodologies that
                        are shaping the future of web development. From
                        serverless architectures to AI-driven interfaces.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <span>May 2</span>
                          <span className="mx-1">·</span>
                          <span>5 min read</span>
                          <span className="mx-1">·</span>
                          <span className="ml-1 px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                            Technology
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <img
                        src="/placeholder.svg"
                        alt="Article thumbnail"
                        width={200}
                        height={150}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="top-20">
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                    Discover more of what matters to you
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Programming",
                      "Data Science",
                      "Technology",
                      "Self Improvement",
                      "Writing",
                      "Relationships",
                      "Machine Learning",
                      "Productivity",
                    ].map((tag) => (
                      <Link
                        key={tag}
                        to={`/tag/${tag.toLowerCase()}`}
                        className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-gray-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                    Who to follow
                  </h3>
                  {[1, 2, 3].map((person) => (
                    <div key={person} className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                      <div className="flex-1">
                        <h4 className="font-medium">Writer Name</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          Short bio about the writer and their expertise
                        </p>
                      </div>
                      <button className="px-3 py-1 rounded-full border border-gray-900 text-sm font-medium">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <Link to="/" className="font-bold text-xl text-black">
                Medium
              </Link>
              <p className="mt-2 text-gray-600 max-w-md">
                Every idea needs a Medium. Share your thinking.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                  About
                </h3>
                <ul className="space-y-2">
                  {["About", "Careers", "Help", "Legal"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                  Write
                </h3>
                <ul className="space-y-2">
                  {["Start Writing", "Writers Program", "Partner Program"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                  Social
                </h3>
                <ul className="space-y-2">
                  {["Twitter", "Facebook", "Instagram", "LinkedIn"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>© 2023 Medium Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
