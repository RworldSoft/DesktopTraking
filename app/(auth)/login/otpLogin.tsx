"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const OTP_TIME = 60;

export default function OtpLogin() {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(OTP_TIME);
  const [loading, setLoading] = useState(false);

  // ⏱️ OTP Timer
  useEffect(() => {
    if (!otpSent || timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [otpSent, timer]);

  // 📤 GET OTP
  const handleGetOtp = async () => {
    if (number.length !== 10) {
      toast.error("Enter valid 10-digit number");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `http://103.174.103.147/desktopAPI/API/LoginAPI/GETOTP?Number=${number}`,
        { method: "GET" }
      );

      setOtpSent(true);
      setTimer(OTP_TIME);
      console.log("OTP API Response:", response);
    } catch (error) {
      toast.error("Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // ✅ VERIFY OTP (example)
  const handleVerifyOtp = async () => {
    if (otp.length !== 4) {
      toast.error("Enter valid OTP");
      return;
    }

    

    toast.success("OTP Verified (API integration pending)");
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 border rounded-xl shadow-sm bg-white">
      <h2 className="text-lg font-semibold text-center mb-4">Login with OTP</h2>

      {/* 📱 Phone Number */}
      <div className="mb-3">
        <label className="text-xs text-gray-600">Mobile Number</label>
        <input
          type="tel"
          maxLength={10}
          value={number}
          disabled={otpSent}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full mt-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary disabled:bg-gray-100"
          placeholder="Enter mobile number"
        />
      </div>

      {/* 🔘 Get OTP Button */}
      {!otpSent && (
        <button
          onClick={handleGetOtp}
          disabled={loading}
          className="w-full cursor-pointer py-2 text-sm rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? "Sending OTP..." : "Get OTP"}
        </button>
      )}

      {/* 🔢 OTP Section */}
      {otpSent && (
        <>
          <div className="mt-4">
            <label className="text-xs text-gray-600">Enter OTP</label>
            <input
              type="text"
              maxLength={4}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mt-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="4-digit OTP"
            />
          </div>

          {/* ⏱️ Timer / Resend */}
          <div className="mt-2 text-xs text-gray-500 flex justify-between">
            {timer > 0 ? (
              <span>Resend OTP in {timer}s</span>
            ) : (
              <button
                onClick={handleGetOtp}
                className="text-primary font-medium"
              >
                Resend OTP
              </button>
            )}
          </div>

          {/* ✅ Verify Button */}
          <button
            onClick={handleVerifyOtp}
            className="w-full mt-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700"
          >
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
}
