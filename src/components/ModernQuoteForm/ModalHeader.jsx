import { X } from "lucide-react";

export default function ModalHeader({ title, onClose, submitting }) {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b">
      <h2 className="text-lg font-bold text-orange-500">{title}</h2>
      <button
        onClick={() => !submitting && onClose()}
        className={`p-2 hover:bg-gray-100 rounded-full ${submitting ? "cursor-not-allowed opacity-50" : ""}`}
        disabled={submitting}
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
