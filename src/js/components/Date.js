export default function getDate() {
  const d = new Date();
  const month = [];
  month[0] = 'Jan'; month[1] = 'Feb'; month[2] = 'Mar'; month[3] = 'April'; month[4] = 'May'; month[5] = 'June'; month[6] = 'Jul'; month[7] = 'Aug'; month[8] = 'Sep'; month[9] = 'Oct'; month[10] = 'Nov'; month[11] = 'Dec';
  const y = d.getFullYear();
  const m = month[d.getMonth()];
  let day = d.getDate();
  let h = d.getHours();
  let min = d.getMinutes();
  const sec = d.getSeconds();
  if (day < 10) day = '0' + day;
  if (h < 10) h = '0' + h;
  if (min < 10) min = '0' + min;
  const date = m + ' ' + day + ' ' + y + ' ' + h + ':' + min + ':' + sec;
  return date;
}
