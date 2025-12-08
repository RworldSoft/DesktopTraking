import React, { useState } from "react";
import { X, Plus } from "lucide-react";

interface CreateItemsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateItemsDrawer = ({ isOpen, onClose }: CreateItemsDrawerProps) => {
  const [formData, setFormData] = useState({
    itemName: "",
    unit: "",
    sellPrice: "",
    itemCode: "",
    itemDescription: "",
    category: "",
    brand: "",
    mrp: "",
    purchasePrice: "",
    hsnCode: "",
    gstPercent: "",
    cessPercent: "",
    discount: "",
    discountType: "Amount",
    offerText: "",
    stock: "",
    isActive: false,
  });

  const [images, setImages] = useState<string[]>([]);

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
    console.log("Form data:", formData);
    // Handle save logic here
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">Create Items</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100%-73px)] overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* General Details */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                General Details
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Item Name */}
                <div className="lg:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Item Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleInputChange}
                    placeholder="Name of item"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Activate Item Toggle */}
                <div className="lg:col-span-1 flex items-end">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-14 h-8 rounded-full transition-colors ${
                          formData.isActive ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                          formData.isActive ? "transform translate-x-6" : ""
                        }`}
                      ></div>
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      Activate item
                    </span>
                  </label>
                </div>

                {/* Unit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Select Unit</option>
                    <option value="pcs">Pieces</option>
                    <option value="kg">Kilogram</option>
                    <option value="ltr">Liter</option>
                  </select>
                </div>

                {/* Sell Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sell price<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l">
                      ₹
                    </span>
                    <input
                      type="text"
                      name="sellPrice"
                      value={formData.sellPrice}
                      onChange={handleInputChange}
                      placeholder="Sale-price"
                      className="flex-1 px-4 py-2 border border-x-0 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                    <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                      <option>Excl. of Tax</option>
                      <option>Incl. of Tax</option>
                    </select>
                  </div>
                </div>

                {/* Item Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Item Code
                  </label>
                  <input
                    type="text"
                    name="itemCode"
                    value={formData.itemCode}
                    onChange={handleInputChange}
                    placeholder="Item code"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Item Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Item Description
                  </label>
                  <textarea
                    name="itemDescription"
                    value={formData.itemDescription}
                    onChange={handleInputChange}
                    placeholder="Item description"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                    >
                      <option value="">Select Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                    </select>
                    <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap">
                      + New
                    </button>
                  </div>
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                    >
                      <option value="">Select Brand</option>
                      <option value="brand1">Brand 1</option>
                      <option value="brand2">Brand 2</option>
                    </select>
                    <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap">
                      + New
                    </button>
                  </div>
                </div>
              </div>

              {/* Upload Images */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload images
                </label>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="relative flex-shrink-0">
                      <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded flex items-center justify-center hover:border-gray-400 transition-colors cursor-pointer bg-gray-50">
                        <Plus className="w-8 h-8 text-gray-400" />
                      </div>
                      <button className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Details */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Price Details
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* MRP */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    MRP
                  </label>
                  <input
                    type="text"
                    name="mrp"
                    value={formData.mrp}
                    onChange={handleInputChange}
                    placeholder="MRP"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Purchase Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purchase price
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l">
                      ₹
                    </span>
                    <input
                      type="text"
                      name="purchasePrice"
                      value={formData.purchasePrice}
                      onChange={handleInputChange}
                      placeholder="Purchase"
                      className="flex-1 px-4 py-2 border border-x-0 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                    <select className="px-3 py-2 border border-l-0 border-gray-300 rounded-r bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none">
                      <option>Excl. of Tax</option>
                      <option>Incl. of Tax</option>
                    </select>
                  </div>
                </div>

                {/* HSN Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    HSN Code
                  </label>
                  <input
                    type="text"
                    name="hsnCode"
                    value={formData.hsnCode}
                    onChange={handleInputChange}
                    placeholder="HSN code"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* GST % */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GST %
                  </label>
                  <select
                    name="gstPercent"
                    value={formData.gstPercent}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Select Tax</option>
                    <option value="0">0%</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </div>

                {/* Cess % */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cess %
                  </label>
                  <select
                    name="cessPercent"
                    value={formData.cessPercent}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                  >
                    <option value="">Select Cess</option>
                    <option value="0">0%</option>
                    <option value="1">1%</option>
                    <option value="2">2%</option>
                  </select>
                </div>

                {/* Discount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      name="discount"
                      value={formData.discount}
                      onChange={handleInputChange}
                      placeholder="Discount"
                      className="flex-1 px-4 py-2 border border-r-0 border-gray-300 rounded-l focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                    <select
                      name="discountType"
                      value={formData.discountType}
                      onChange={handleInputChange}
                      className="px-3 py-2 border border-l-0 border-gray-300 rounded-r bg-white text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option>Amount</option>
                      <option>Percentage</option>
                    </select>
                  </div>
                </div>

                {/* Offer Text */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Offer text
                  </label>
                  <input
                    type="text"
                    name="offerText"
                    value={formData.offerText}
                    onChange={handleInputChange}
                    placeholder="Show offer"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Stock Details */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                Stock Details
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Stock */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock
                  </label>
                  <input
                    type="text"
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    placeholder="Stock"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateItemsDrawer;

// // Demo App Component
// export default function App() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">
//           Inventory Management System
//         </h1>

//         <button
//           onClick={() => setIsDrawerOpen(true)}
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md"
//         >
//           Create New Item
//         </button>

//         <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             Items List
//           </h2>
//           <p className="text-gray-500">
//             Click the button above to create a new item.
//           </p>
//         </div>
//       </div>

//       <CreateItemsDrawer
//         isOpen={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//       />
//     </div>
//   );
// }
