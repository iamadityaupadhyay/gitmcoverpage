"use client";
import { useTheme } from "../components/ThemeContext";
import Link from "next/link";
export default function Footer() {
  const { theme } = useTheme(); // Use the theme context

  return (
    <div>
      <footer
        className={`border-t-2 ${
          theme === "dark"
            ? "bg-gray-900 border-neutral-600"
            : "bg-gray-50 border-gray-300"
        }`}
      >
        <div className="container px-2 py-2 mx-auto">
        <div className="flex justify-between">
              <Link className="bg-gradient-to-br font-sans font-bold text-yellow-700 hover:scale-105 p-2 rounded-lg" href="https://adityaupadhyay.vercel.app">Portfolio</Link>
              <Link className="mb-3 text-lg font-sans font-bold text-yellow-700 hover:scale-105" href="https://buymeacoffee.com/iamadityaupadhyay"><span className="text-green-700">Buy me</span> a coffee ☕</Link>
              </div>

          
          <hr
            className={` lg:border-t-2 sm:border-t-1 mt-4 mb-5 md:my-6 ${
              theme === "dark" ? "border-neutral-500" : "border-gray-300"
            }`}
          />

          <div className="flex flex-col mb-3 items-center sm:flex-row sm:justify-between">
            <p
              className={`text-sm mb-5 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Aditya Upadhyay © Copyright 2025. All Rights Reserved.
            </p>

            <div className="flex -mx-2">
             

              <a
                href="https://www.linkedin.com/in/iamadityaupadhyay/"
                className={`mx-2 justify-center transition-colors duration-300 hover:text-blue-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
                aria-label="Linkedin"
              >
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi rounded-full w-5 h-5 bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
              </a>

              <a
                href="https://github.com/iamadityaupadhyay"
                className={`mx-2 transition-colors duration-300 hover:text-blue-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
                aria-label="Github"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}