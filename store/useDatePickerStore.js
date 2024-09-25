import create from 'zustand';

export const useDatePickerStore = create((set) => ({
  recurrence: 'daily',
  interval: 1,
  startDate: null,
  endDate: null,
  setRecurrence: (recurrence) => set({ recurrence }),
  setInterval: (interval) => set({ interval }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));
