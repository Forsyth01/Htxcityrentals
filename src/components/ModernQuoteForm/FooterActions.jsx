export default function FooterActions({
  showPreview,
  onPreview,
  onEdit,
  onSend,
  submitting
}) {
  return (
    <div className="flex justify-end gap-3">
      {!showPreview && (
        <button
          onClick={onPreview}
          className="px-4 py-2 cursor-pointer mb-3 md:mr-10 mr-6 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-200"
          disabled={submitting}
        >
          Preview
        </button>
      )}
      {showPreview && (
        <>
          <button
            onClick={onEdit}
            className="px-4 py-2 cursor-pointer mb-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200"
            disabled={submitting}
          >
            Edit
          </button>
          <button
            onClick={onSend}
            className="px-4 py-2 cursor-pointer mb-3 md:mr-10 mr-6 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-200"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Confirm"}
          </button>
        </>
      )}
    </div>
  );
}
