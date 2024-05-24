async function calculateTotalWorkingHours(performance, period) {
    function parseTime(timeStr) {
      const [hours, minutes, seconds] = timeStr.split(':').map(Number);
      const now = new Date();
      return new Date(now.setHours(hours, minutes, seconds, 0));
    }
  
    const now = new Date();
    let startDate;
  
    switch (period) {
      case 'today':
        startDate = new Date(now.setHours(0, 0, 0, 0));
        break;
      case 'week':
        startDate = new Date(now.setDate(now.getDate() - now.getDay()));
        startDate.setHours(0, 0, 0, 0);
        break;
      case 'month':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case 'year':
        startDate = new Date(now.getFullYear(), 0, 1);
        break;
      default:
        throw new Error('Invalid period specified.');
    }
  
    let totalMilliseconds = 0;
  
    performance.timeTracking.forEach(entry => {
      const entryDate = new Date(entry.date);
      if (entryDate >= startDate) {
        const timeIn = parseTime(entry.timeIn);
        const timeOut = entry.timeOut ? parseTime(entry.timeOut) : new Date();
        const workedMilliseconds = timeOut - timeIn;
        totalMilliseconds += workedMilliseconds;
      }
    });
  
    // Convert total milliseconds to hours, minutes, and seconds
    const totalHours = Math.floor(totalMilliseconds / (1000 * 60 * 60));
    const totalMinutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const totalSeconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);
  
    return { hours: totalHours, minutes: totalMinutes, seconds: totalSeconds };
  }
  
  export default calculateTotalWorkingHours;