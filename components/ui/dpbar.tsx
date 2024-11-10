export default function Dpbar() {
  return (
    <div className="w-full p-4 border border-gray-300 rounded">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Donations Received: $7500</span>
        <span className="font-semibold">Goal: $10000</span>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded">
        <div
          className="h-full bg-green-500 rounded"
          style={{ width: "75%" }} /* Example progress (75%) */
        ></div>
      </div>
    </div>
  );
}
