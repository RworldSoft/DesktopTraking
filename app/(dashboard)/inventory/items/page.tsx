"use client";
import React from "react";
import {
  Search,
  Plus,
  Import,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import ItemsHeader from "./components/header";

export default function ItemsComponent() {
  return (
    <div className="w-full">
      <ItemsHeader title="Items" />

      {/* Filters Row */}
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <Input placeholder="Search" className="border rounded-md" />

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cat1">Category 1</SelectItem>
            <SelectItem value="cat2">Category 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Active" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Warehouse" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wh1">Warehouse 1</SelectItem>
            <SelectItem value="wh2">Warehouse 2</SelectItem>
          </SelectContent>
        </Select>

       
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-md">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm text-gray-600">
              <th className="p-3 border">Item Code</th>
              <th className="p-3 border">Item Name</th>
              <th className="p-3 border">Stock</th>
              <th className="p-3 border">Selling Price</th>
              <th className="p-3 border">Purchase Price</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-sm">
              <td className="p-3 border">76543</td>
              <td className="p-3 border text-blue-600 cursor-pointer">apple</td>
              <td className="p-3 border">888 Box</td>
              <td className="p-3 border">₹ 20</td>
              <td className="p-3 border">₹ 98</td>
              <td className="p-3 border flex items-center justify-center gap-4">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  ↕
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  ✏️
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-4 mt-4 text-sm">
        <span>1 - 1 of 1</span>
        <Button variant="outline" size="icon">
          <ChevronLeft className="w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="w-4" />
        </Button>
      </div>
    </div>
  );
}
