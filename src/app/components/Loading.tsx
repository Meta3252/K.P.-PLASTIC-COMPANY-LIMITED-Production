export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="loading-spinner"></div>
      <p className="mt-4 text-blue-600 font-semibold text-lg">กำลังโหลด...</p>
    </div>
  );
}
