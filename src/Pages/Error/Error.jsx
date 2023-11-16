import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div class="text-center">
        <h1 class="mb-4 text-8xl font-semibold text-orange-700">404</h1>
        <p class="mb-4 text-5xl text-gray-600">Oops! Looks like you're lost.</p>
        <div class="animate-bounce">
          <svg
            class="mx-auto h-16 w-16 text-orange-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p class="mt-4 text-2xl text-gray-600">
          Let's get you back{" "}
          <a href="/" class="text-orange-500">
            home
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Error;
