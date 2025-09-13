import React from "react";
import { User } from "lucide-react";


export default function PersonalInfo({ formData, onChange }) {
return (
<div className="space-y-3">
<h3 className="font-semibold text-gray-700 mb-1 flex items-center gap-2">
<User className="w-4 h-4" /> Personal Info
</h3>
<input
type="text"
name="fullName"
value={formData.fullName}
onChange={onChange}
placeholder="Full Name *"
className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>
<input
type="email"
name="email"
value={formData.email}
onChange={onChange}
placeholder="Email *"
className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>
<input
type="tel"
name="phoneNumber"
value={formData.phoneNumber}
onChange={onChange}
placeholder="Phone Number *"
className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>
<input
type="text"
name="companyName"
value={formData.companyName}
onChange={onChange}
placeholder="Company (optional)"
className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
/>
</div>
);
}