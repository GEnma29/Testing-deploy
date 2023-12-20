export const adapterEvents = (events: any[]) => {
    return events.map((event) => ({
        label: event.name,
        value: event.id,
    }));

}