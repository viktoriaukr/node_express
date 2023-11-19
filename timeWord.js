function timeToWords(time) {
  const [hours, minutes] = time.split(":");
  const date = new Date(0);
  date.setUTCHours(hours);
  date.setUTCMinutes(minutes);

  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = date.toLocaleTimeString("en-US", options);
  return formattedTime.toLowerCase();
}

module.exports = timeToWords;
