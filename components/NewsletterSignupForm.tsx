import Link from "next/link";
import { SyntheticEvent, useRef, useState } from "react";

export default function NewsLetterSignUpForm() {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const subscribeUser = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("/api/subscribeUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: inputRef.current?.value })
      });
      if (response.status !== 201) throw new Error("Could not subscribe");
      setHasSubscribed(true);
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (hasSubscribed) {
    return (
      <div className="p-8 -ml-8 max-w-lg text-green-400 rounded-md bg-black bg-opacity-60">
        <p className="text-3xl mb-2">Thank you for subscribing!</p>
        <span className="block text-xl text-white">You will soon get the next update in your mailbox :)</span>
      </div>
    );
  }

  return (
    <div className="transition-all duration-200">
      <h1 className="text-3xl mb-4 max-w-sm text-amber-300 2xl:text-4xl 2xl:mb-8 2xl:text-center">
        Join the <span className="text-white">mailing list</span> to hear about my music
      </h1>
      {hasError && (
        <p className="md:w-96 p-3 mb-4 text-black text-xl bg-red-500 rounded-sm">
          Oops, something went wrong :( Please contact me via{" "}
          <Link href="mailto:info@arnoutjansen.com" className="underline hover:no-underline">
            email
          </Link>{" "}
          or{" "}
          <Link href="https://www.instagram.com/arnoutjansen_" target="_blank" className="underline hover:no-underline">
            Instagram
          </Link>
        </p>
      )}
      <form onSubmit={subscribeUser} className="flex w-full sm:w-96">
        <label htmlFor="email-input" className="hidden">
          Your email address
        </label>
        <input
          type="email"
          id="email-input"
          name="email"
          placeholder="Your email address"
          ref={inputRef}
          required
          autoCapitalize="off"
          autoCorrect="off"
          className="w-full h-12 text-lg text-black rounded-sm outline-none px-3 py-2 mr-2"
          onFocus={() => setHasError(false)}
        />

        <button
          type="submit"
          className={`w-36 bg-amber-300 hover:bg-amber-400 text-lg text-black rounded-sm transition-all duration-200 px-4 py-2 h-12 ${
            isLoading ? "animate-pulse" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
