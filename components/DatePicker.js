import RecurrenceOptions from './RecurrenceOptions';
import MiniCalendar from './MiniCalendar';
import { useDatePickerStore } from '../store/useDatePickerStore';

export default function DatePicker() {
  const { startDate, endDate, setStartDate, setEndDate } = useDatePickerStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-4">Recurring Date Picker</h2>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          value={startDate || ''}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          value={endDate || ''}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <RecurrenceOptions />

      <div className="mt-4">
        <MiniCalendar />
      </div>
    </div>
  );
}
