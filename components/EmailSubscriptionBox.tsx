import React from "react";

type Props = {};

const EmailSubscriptionBox = (props: Props) => {
  const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="border border-sky-200 rounded-lg p-6 my-4 w-full dark:border-zinc-200 bg-blue-50 dark:bg-neutral-900">
        <p className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Subscribe to the newsletter
        </p>
        <p className="my-1 text-zinc-800 dark:text-zinc-200">
          🏆 Be the first one to receive emails from me.
        </p>

        <form
          onSubmit={(e) => subscribe(e)}
          className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2"
        >
          <input
            type="email"
            autoComplete="email"
            aria-label="Email for newsletter"
            required
            placeholder="time@apple.com"
            className="outline-none border-2 border-transparent px-4 py-2 mt-1 block w-full focus:border-sky-500 rounded-md bg-white dark:bg-zinc-800 transition-all duration-150"
          />
          <button className="ml-auto px-3 py-2 bg-white hover:bg-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all duration-150 rounded-md">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailSubscriptionBox;
