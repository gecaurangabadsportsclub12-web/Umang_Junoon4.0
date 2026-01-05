import React, { useState } from "react";
import { signupUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const passwordStrength =
    form.password.length === 0
      ? ""
      : form.password.length < 6
      ? "Weak"
      : form.password.length < 10
      ? "Medium"
      : "Strong";

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signupUser(form);
      alert("Signup successful. Please login.");
      navigate("/login");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* 🌈 ATMOSPHERIC GLOWS */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-fuchsia-500/30 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-sky-500/30 blur-[150px]" />

      {/* 💎 OUTER NEON FRAME */}
      <div className="relative w-[390px] p-[2px] rounded-3xl bg-gradient-to-br from-sky-400 via-fuchsia-400 to-rose-400">

        {/* 💎 CARD */}
        <div className="relative rounded-3xl bg-black/70 backdrop-blur-xl px-7 py-8 border border-white/10 shadow-[0_0_50px_rgba(236,72,153,0.35)]">

          {/* FEST BADGE */}
          <div className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-black bg-gradient-to-r from-sky-400 to-rose-400 shadow-lg">
            UMANG’25
          </div>

          {/* STEP */}
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2 text-center">
            Step 1 of 2 • Create Account
          </p>

          {/* TITLE */}
          <h2 className="text-center text-2xl font-extrabold mb-1 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
            Join JUNOON 4.0
          </h2>

          {/* SUBTEXT */}
          <p className="text-center text-xs text-slate-400 mb-6">
            Enter the arena. Compete. Celebrate the spirit of sports.
          </p>

          {/* FORM */}
          <form onSubmit={handleSignup} className="space-y-4">

            {/* NAME */}
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full rounded-xl px-4 py-3 bg-white/10 text-white border border-white/20 outline-none
                focus:border-sky-400 focus:shadow-[0_0_12px_rgba(56,189,248,0.6)] transition"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full rounded-xl px-4 py-3 bg-white/10 text-white border border-white/20 outline-none
                focus:border-fuchsia-400 focus:shadow-[0_0_12px_rgba(217,70,239,0.6)] transition"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            {/* PASSWORD */}
            <div className="space-y-1">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full rounded-xl px-4 py-3 bg-white/10 text-white border border-white/20 outline-none
                  focus:border-rose-400 focus:shadow-[0_0_12px_rgba(244,63,94,0.6)] transition"
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />

              {/* PASSWORD STRENGTH */}
              {passwordStrength && (
                <p
                  className={`text-[11px] tracking-wide ${
                    passwordStrength === "Weak"
                      ? "text-red-400"
                      : passwordStrength === "Medium"
                      ? "text-yellow-400"
                      : "text-emerald-400"
                  }`}
                >
                  Password strength: {passwordStrength}
                </p>
              )}
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="relative w-full py-3 rounded-full font-extrabold tracking-wide text-black
                bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400
                shadow-[0_12px_30px_rgba(0,0,0,0.6)]
                transition-all duration-200
                hover:scale-[1.04]
                active:translate-y-[2px]"
            >
              Create Account
            </button>
          </form>

          {/* FOOTER */}
          <p className="mt-6 text-sm text-center text-slate-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-sky-400 hover:text-sky-300 underline transition"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
