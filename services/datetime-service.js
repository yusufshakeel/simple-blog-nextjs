export default function DateTimeService() {
    const formattedDate = date => new Date(date).toLocaleDateString('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return {formattedDate};
}