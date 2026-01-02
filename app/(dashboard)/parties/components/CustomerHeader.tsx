"use client";
import { FC, useState } from "react";
import { Settings, Upload, Plus, Download } from "lucide-react";
import CreateCustomerDrawer from "./CreateCustomerDrawer";

interface CustomersHeaderProps {
  title?: string;
}

const CustomerHeader = ({ title = "Items" }: CustomersHeaderProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="flex items-center justify-between pb-3">
      {/* Left: Title */}
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      {/* Right: Buttons */}
      <div className="flex items-center gap-2">
        {/* Settings */}
        <button className="border border-gray-300 hover:bg-gray-100 px-2 py-1.5 rounded flex items-center gap-1.5 text-sm">
          <Settings size={14} />
        </button>

        {/* Export */}
        <button className="border border-gray-300 hover:bg-gray-100 px-2.5 py-1.5 rounded flex items-center gap-1.5 text-sm">
          <Download size={14} className="text-green-600" />
          <span>Export</span>
        </button>

        {/* Import */}
        <button className="border border-primary text-primary hover:bg-blue-50 px-2.5 py-1.5 rounded flex items-center gap-1.5 text-sm">
          <Upload size={14} />
          <span>Import</span>
        </button>

        {/* New */}
        <button
          className="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded flex items-center gap-1.5 text-sm"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Plus size={14} />
          <span>New</span>
        </button>
      </div>

      <CreateCustomerDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default CustomerHeader;
