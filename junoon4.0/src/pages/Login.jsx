import React, { useState } from "react";
import { loginUser } from "../services/authService";
import { setAuth } from "../utils/auth";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      setAuth(res.token, res.user);
      navigate(redirectPath, { replace: true });
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* 🌈 DYNAMIC GLOWS */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] bg-fuchsia-500/30 blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 w-[480px] h-[480px] bg-sky-500/30 blur-[160px]" />

      {/* 💎 OUTER FRAME */}
      <div className="relative w-[370px] p-[2px] rounded-3xl bg-gradient-to-br from-sky-400 via-fuchsia-400 to-rose-400">

        {/* 💎 INNER CARD */}
        <div className="relative rounded-3xl bg-black/70 backdrop-blur-xl px-7 py-8 border border-white/10 shadow-[0_0_50px_rgba(236,72,153,0.35)]">

          {/* FEST TAG */}
          <div className="absolute -top-3 right-6 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-black bg-gradient-to-r from-sky-400 to-rose-400 shadow-lg">
            JUNOON 4.0
          </div>

          {/* TITLE */}
          <h2 className="text-center text-2xl font-extrabold bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
            Welcome Back
          </h2>

          {/* SUB TEXT */}
          <p className="text-center text-xs text-slate-400 mt-1 mb-6">
            Step back into the arena ⚡ Your journey continues
          </p>

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-4">

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full rounded-xl px-4 py-3 bg-white/10 text-white border border-white/20 outline-none
                focus:border-sky-400 focus:shadow-[0_0_12px_rgba(56,189,248,0.6)] transition"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full rounded-xl px-4 py-3 bg-white/10 text-white border border-white/20 outline-none
                  focus:border-fuchsia-400 focus:shadow-[0_0_12px_rgba(217,70,239,0.6)] transition"
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />

              {/* SHOW/HIDE */}
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white transition"
              >
                {showPass ? "HIDE" : "SHOW"}
              </button>
            </div>

            {/* REMEMBER LINE */}
            <p className="text-[11px] text-slate-400 tracking-wide">
              🔐 Secure login • Session valid for 3 days
            </p>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="relative w-full py-3 rounded-full font-extrabold tracking-wide text-black
                bg-gradient-to-r from-sky-400 via-fuchsia-400 to-rose-400
                shadow-[0_12px_30px_rgba(0,0,0,0.6)]
                transition-all duration-200
                hover:scale-[1.04]
                active:translate-y-[2px]"
            >
              Enter Arena
            </button>
          </form>

          {/* FOOTER */}
          <p className="mt-6 text-sm text-center text-slate-300">
            New to Junoon?{" "}
            <Link
              to="/signup"
              className="text-sky-400 hover:text-sky-300 underline transition"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
