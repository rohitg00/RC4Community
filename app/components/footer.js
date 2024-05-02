import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-black mt-12">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="#" className="flex items-center">
            <img src="/devopscommlogo.svg" className="h-8 mr-1" alt="DevOps Community Logo" width="40px" height="40px" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DevOpsCommunity</span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">DevOpsCommunity</a>
              </li>
              <li>
                <a href="https://github.com/RocketChat/RC4Community" className="hover:underline">RC4Community</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Join us</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://twitter.com/i/communities/1523681883384549376" className="hover:underline">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="https://chat.whatsapp.com/JYIvvb5jVBEG88aLl7VobV" className="hover:underline">WhatsApp</a>
              </li>
              <li>
                <a href="https://t.me/+Tj_gjbgG6LswNDM1" className="hover:underline">Telegram</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Star Us</h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://github.com/rohitg00/devopscommunity" className="hover:underline ">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center text-gray-400"><a href="https://github.com/RocketChat/RC4Community" className="hover:underline">Powered by Rocket.Chat</a>
        </span>
        <div className="text-lg sm:text-center text-gray-400 max-sm:mt-3 pr-[50px]">
          <a href="https://www.civo.com/" className="hover:underline flex items-center gap-x-2">
            <span className="">Hosted on</span>
            <svg className="h-[13px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 711 238">
              <path d="M273.539.081h-29.424c-5.424 0-8.981 4.179-8.981 9.423v219.13c0 5.245 3.557 9.447 8.981 9.447h29.424c5.424 0 9.595-4.202 9.595-9.447V9.504c0-5.244-4.171-9.423-9.595-9.423m-91.877 173.041c-2.671-5.859-10.327-7.473-15.027-3.072-12.446 11.658-29.136 18.819-47.538 18.819-48.218 0-85.012-48.909-63.477-99.824 6.365-15.049 18.442-27.092 33.495-33.447 29.421-12.421 58.048-5.345 77.037 12.095 4.749 4.361 12.365 2.814 15.04-3.054l12.744-27.956c2.039-4.474.631-9.721-3.292-12.685C160.789 1.437 120.037-7.42 77.562 7.052 43.472 18.666 16.89 46.154 6.065 80.503c-25.894 82.163 34.749 157.69 113.032 157.69 27.245 0 52.286-9.214 72.327-24.633 3.786-2.913 4.973-8.113 2.991-12.462zm523.637-92.619c-10.825-34.349-37.407-61.837-71.497-73.451-24.128-8.221-47.698-8.906-69.033-3.835-35.585 7.946-61.358 24.817-84.01 73.453l-45.455 98.598L358.15 5.667a9.5 9.5 0 0 0-8.626-5.56L315.818.054c-6.917-.011-11.524 7.142-8.653 13.436l100.064 218.79c1.542 3.383 4.917 5.67 8.634 5.671l1.637.131h37.841c.761 0 1.522-.157 2.244-.403 2.604-.887 4.798-2.745 5.938-5.311 0 0 50.098-114.027 50.681-115.402 15.244-35.949 24.495-50.922 48.691-61.206 18.307-7.78 39.955-8.727 60.885.753 14.57 6.599 26.028 18.657 32.122 33.443a80.1 80.1 0 0 1 6.122 28.142c.545 38.992-30.891 70.773-69.758 70.773-18.402 0-35.092-7.162-47.538-18.819-4.7-4.402-12.356-2.788-15.027 3.071L516.947 201.1c-1.981 4.348-.795 9.547 2.993 12.461 20.04 15.418 45.081 24.633 72.326 24.633 78.284-.001 138.926-75.528 113.033-157.691" fill="#239DFF"/>
            </svg>
          </a>
        </div>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a href="https://www.instagram.com/rohit_ghumare_rg/" className="text-gray-500 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="https://twitter.com/ghumare64" className="text-gray-500 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            <span className="sr-only">Twitter page</span>
          </a>
          <a href="https://github.com/rohitg00" className="text-gray-500 hover:text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            <span className="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
