export const adapterEntryType = (entryType: string) => {
  const EntriesTypes = {
    per_seat: 'Por asiento',
    general: 'Por persona',
  };
  return EntriesTypes[entryType as keyof typeof EntriesTypes] || entryType;
};
