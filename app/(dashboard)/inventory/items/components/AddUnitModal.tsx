"use client";

import React, { useState } from "react";

interface AddUnitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (unit: string, subUnit: string) => void;
}

const AddUnitModal: React.FC<AddUnitModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [unit, setUnit] = useState("");
  const [subUnit, setSubUnit] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (!unit.trim()) return alert("Unit is required");
    onSave(unit, subUnit);
    setUnit("");
    setSubUnit("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Add Unit / Sub Unit
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Unit */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Unit
          </label>
          <input
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="e.g. Kg, Piece"
            className="w-full rounded-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Sub Unit */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sub Unit (optional)
          </label>
          <input
            type="text"
            value={subUnit}
            onChange={(e) => setSubUnit(e.target.value)}
            placeholder="e.g. Gram, Box"
            className="w-full rounded-sm border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-sm border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-sm bg-primary text-white hover:bg-primary/90"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUnitModal;
