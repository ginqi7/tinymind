"use client";

import { useState } from "react";
import Link from "next/link";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("blog");

  return (
    <div className="mb-4">
      <Link href="/thoughts">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "thoughts" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("thoughts")}
        >
          Thoughts
        </button>
      </Link>
    </div>
  );
}
