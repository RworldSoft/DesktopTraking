"use client";

import { useState } from "react";
import { saveParty } from "@/lib/partyService";
import { PartyFormData } from "@/types/party";

export default function PartyForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<PartyFormData>({
    PartyId: 0,
    PartyName: "",
    PartyNumber: "",
    PartyType: "Customer",
    ParyBalaceType: "Credit",
    PartyBalaceAmt: "",
    IsGST: false,
    GSTNumber: "",
    PAN: "",
    IsBillingAdd: true,
    BillingAdd: "",
    PINcode: "",
    BillingState: "",
    IsShippingSame: true,
    IsBankAccount: false,
    AccountNumber: "",
    HolderName: "",
    IFSCCode: "",
    BankName: "",
    Branch: "",
    CompnayID: 1,
    StoreId: 1,
    UserID: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveParty(form);
      alert("✅ Party saved successfully");
    } catch {
      alert("❌ Failed to save party");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8"
      >
        <h1 className="text-2xl font-bold text-gray-800">Add Party</h1>

        {/* Basic Details */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Basic Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="PartyName"
              placeholder="Party Name"
              onChange={handleChange}
              required
              className="input"
            />
            <input
              name="PartyNumber"
              placeholder="Mobile Number"
              onChange={handleChange}
              className="input"
            />

            <select name="PartyType" onChange={handleChange} className="input">
              <option value="Customer">Customer</option>
              <option value="Supplier">Supplier</option>
            </select>
          </div>
        </section>

        {/* Balance */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Opening Balance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              name="ParyBalaceType"
              onChange={handleChange}
              className="input"
            >
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>

            <input
              name="PartyBalaceAmt"
              placeholder="Amount"
              onChange={handleChange}
              className="input"
            />
          </div>
        </section>

        {/* GST */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            GST Details
          </h2>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="IsGST"
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-gray-700">GST Registered</span>
          </label>

          {form.IsGST && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                name="GSTNumber"
                placeholder="GST Number"
                onChange={handleChange}
                className="input"
              />
              <input
                name="PAN"
                placeholder="PAN Number"
                onChange={handleChange}
                className="input"
              />
            </div>
          )}
        </section>

        {/* Address */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Billing Address
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="BillingAdd"
              placeholder="Address"
              onChange={handleChange}
              className="input"
            />
            <input
              name="PINcode"
              placeholder="Pincode"
              onChange={handleChange}
              className="input"
            />
            <input
              name="BillingState"
              placeholder="State"
              onChange={handleChange}
              className="input"
            />
          </div>
        </section>

        {/* Bank */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Bank Details
          </h2>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="IsBankAccount"
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-gray-700">Add Bank Account</span>
          </label>

          {form.IsBankAccount && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <input
                name="AccountNumber"
                placeholder="Account Number"
                onChange={handleChange}
                className="input"
              />
              <input
                name="HolderName"
                placeholder="Account Holder"
                onChange={handleChange}
                className="input"
              />
              <input
                name="IFSCCode"
                placeholder="IFSC Code"
                onChange={handleChange}
                className="input"
              />
              <input
                name="BankName"
                placeholder="Bank Name"
                onChange={handleChange}
                className="input"
              />
              <input
                name="Branch"
                placeholder="Branch"
                onChange={handleChange}
                className="input"
              />
            </div>
          )}
        </section>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            disabled={loading}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Party"}
          </button>
        </div>
      </form>

      {/* Tailwind reusable input style */}
      <style jsx global>{`
        .input {
          @apply w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500;
        }
      `}</style>
    </div>
  );
}
