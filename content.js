const checkTime = () => {
  //get current Date and convert to hours and mins
  const nowDate = new Date;
  const nowHours = nowDate.getHours();
  const nowMins = nowDate.getMinutes();
  //get startTime and endTime and convert to hours and mins
  const startTime = '13:00';
  const endTime = '15:00';
  const startHours = Number(startTime.slice(0, 2));
  const startMins = Number(startTime.slice(3));
  const endHours = Number(endTime.slice(0, 2));
  const endMins = Number(endTime.slice(3));
  //if current date is within start/end params, create alarm
  if (((nowHours === startHours && nowMins >= startMins) ||
      (nowHours > startHours)) && ((nowHours < endHours) || 
      (nowHours === endHours && nowMins < endMins))) {
        return true;
      }
  //otherwise return
  return false;
}

console.log(checkTime());