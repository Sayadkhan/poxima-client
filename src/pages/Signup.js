import { useState } from "react";

import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Signup, error, loading } = useSignup();

  const handleSignup = async (e) => {
    e.preventDefault();

    // signup user
    await Signup(email, password);
  };

  return (
    <form
      onSubmit={handleSignup}
      className="login-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-sky-400 mb-10">Signup</h2>
      <div className="form-control flex flex-col gap-2">
        <label
          className="cursor-pointer hover:text-sky-400 duration-300"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="hello@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-stone-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          className="cursor-pointer hover:text-sky-400 duration-300"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-stone-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="bg-sky-400 text-slate-900 py-3 rounded-xl hover:bg-sky-500 duration-300 mt-4"
      >
        Signup
      </button>

      {error && (
        <p className="bg-rose-500/20 rounded-lg p-5 text-red-500 border border-red-500">
          {" "}
          {error}
        </p>
      )}
    </form>
  );
};

export default Signup;
