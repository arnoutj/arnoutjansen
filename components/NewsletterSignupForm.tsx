import { SyntheticEvent, useRef } from 'react';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const subscribeUser = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await fetch('/api/subscribeUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: inputRef.current?.value })
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={subscribeUser}>
      {/* <label htmlFor="email-input" className="form__label">
        Your Best Email
      </label> */}
      <input
        type="email"
        id="email-input"
        name="email"
        placeholder="Your email address"
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
        className="w-72 h-12 text-lg text-black rounded-sm outline-none p-2 mr-2"
      />

      <button
        type="submit"
        value=""
        name="subscribe"
        className="bg-amber-300 text-lg text-black rounded-sm px-4 py-2 h-12"
      >
        Subscribe
      </button>
    </form>
  );
}
