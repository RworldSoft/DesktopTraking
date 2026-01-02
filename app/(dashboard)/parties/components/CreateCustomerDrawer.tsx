"use client";

import React, { useState } from "react";

interface CreateCustomerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCustomerDrawer = ({
  isOpen,
  onClose,
}: CreateCustomerDrawerProps) => {
  const [formData, setFormData] = useState({
    customerName: "",
    mobile: "",
    email: "",
    customerType: "Retail",
    gstin: "",
    isActive: true,

    address: "",
    city: "",
    state: "",
    pincode: "",

    openingBalance: "",
    balanceType: "Debit",
    creditLimit: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSave = () => {
    console.log("👤 Customer Data:", formData);
    alert("Customer saved! Check console.");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[90vw] md:w-[600px] 
        lg:w-[700px] xl:w-[800px] bg-white shadow-2xl z-50 transform 
        transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between h-12 px-4 sm:px-6 
        border-b bg-white sticky top-0 z-10"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Create Customer
          </h2>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-1.5 text-sm bg-primary text-white 
              rounded hover:bg-primary/90"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-sm text-gray-600 
              hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-48px)] overflow-y-auto p-3 space-y-4">
          {/* Customer Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-base font-medium text-gray-700 mb-3">
              Customer Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Customer Name *
                </label>
                <input
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="Customer name"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 
                  rounded focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Mobile *
                </label>
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="10 digit mobile"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 
                  rounded focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 
                  rounded focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Customer Type
                </label>
                <select
                  name="customerType"
                  value={formData.customerType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 
                  rounded focus:ring-2 focus:ring-primary outline-none bg-white"
                >
                  <option>Retail</option>
                  <option>Wholesale</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  GSTIN
                </label>
                <input
                  name="gstin"
                  value={formData.gstin}
                  onChange={handleInputChange}
                  placeholder="GST number"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 
                  rounded focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              <div className="flex items-center gap-2 mt-6">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleInputChange}
                  className="accent-primary"
                />
                <span className="text-sm text-gray-700">Active</span>
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-base font-medium text-gray-700 mb-3">
              Address Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Billing address"
                  rows={2}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 
                  rounded focus:ring-2 focus:ring-primary outline-none resize-none"
                />
              </div>

              <input
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className="w-full px-3 py-1.5 text-sm border border-gray-300 
                rounded focus:ring-2 focus:ring-primary outline-none"
              />

              <input
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
                className="w-full px-3 py-1.5 text-sm border border-gray-300 
                rounded focus:ring-2 focus:ring-primary outline-none"
              />

              <input
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                placeholder="Pincode"
                className="w-full px-3 py-1.5 text-sm border border-gray-300 
                rounded focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>

          {/* Financial Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-base font-medium text-gray-700 mb-3">
              Financial Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex focus-within:ring-2 focus-within:ring-primary rounded">
                <span
                  className="inline-flex items-center px-2 border 
                border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l"
                >
                  ₹
                </span>
                <input
                  name="openingBalance"
                  value={formData.openingBalance}
                  onChange={handleInputChange}
                  placeholder="Opening balance"
                  className="flex-1 px-2 py-1.5 text-sm border 
                  border-x-0 border-gray-300 outline-none"
                />
                <select
                  name="balanceType"
                  value={formData.balanceType}
                  onChange={handleInputChange}
                  className="px-2 py-1.5 border border-l-0 
                  border-gray-300 rounded-r bg-white text-xs outline-none"
                >
                  <option>Debit</option>
                  <option>Credit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Credit Limit
                </label>
                <input
                  name="creditLimit"
                  value={formData.creditLimit}
                  onChange={handleInputChange}
                  placeholder="Credit limit"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 
                  rounded focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCustomerDrawer;
