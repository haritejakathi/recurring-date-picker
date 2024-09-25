import { useDatePickerStore } from '../store/useDatePickerStore';

export default function RecurrenceOptions() {
  const { recurrence, setRecurrence, interval, setInterval } = useDatePickerStore();

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">Recurrence</label>
      <select
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <div className="mt-2">
        <label className="block mb-2 text-sm font-medium text-gray-700">Interval</label>
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
}
