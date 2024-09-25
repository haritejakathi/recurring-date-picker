import { useDatePickerStore } from '../store/useDatePickerStore';

export default function MiniCalendar() {
  const { startDate, endDate, recurrence, interval } = useDatePickerStore();

  // Dummy display logic for preview
  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold mb-2">Preview:</h3>
      <p>Start Date: {startDate || 'Not selected'}</p>
      <p>End Date: {endDate || 'Not selected'}</p>
      <p>Recurrence: {recurrence}</p>
      <p>Interval: Every {interval} {recurrence === 'daily' ? 'day(s)' : `${recurrence}(s)`}</p>
    </div>
  );
}
