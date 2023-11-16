import React from "react";

const Contact = () => {
  return (
    <div className="my-14">
      <div className="py-2 px-4 mx-auto max-w-screen-md">
        <h2
          className="mb-4 text-4xl font-extrabold  
                           text-center text-gray-900"
        >
          Contact Us
        </h2>
        <p
          className="mb-4 font-light text-left  
                          text-gray-500 sm:text-xl"
        >
          Got a issue? Want to send feedback? Need details about our Courses?
          Let us know.
        </p>
        <form action="#">
          <div className="flex flex-row">
            <div className="w-1/2 pr-2 ">
              <label
                htmlFor="firstName"
                className="block my-2 text-left  
                                          text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full rounded border border-stroke px-3 py-2 bg-gray pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                placeholder="Enter First Name"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                htmlFor="firstName"
                className="block my-2 text-left text-sm  
                                          font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                className="w-full rounded border border-stroke px-3 py-2 bg-gray pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block my-2 text-left text-sm  
                                      font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              className="w-full rounded border border-stroke px-3 py-2 bg-gray pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              placeholder="abc@geeksforgeeks.org"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block my-2 text-left  
                                      text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              className="w-full rounded border border-stroke px-3 py-2 bg-gray pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary "
              placeholder="What issue/suggestion do you have?"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block my-2 text-left  
                                      text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              rows="6"
              className="w-full rounded border border-stroke px-3 py-2 bg-gray pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              placeholder="Query/Suggestion..."
            />
          </div>
          <button className="">
            <input type="submit" value="Send message" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
