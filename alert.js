// const startTime = document.getElementById("startTime").value;
// const endTime = document.getElementById("endTime").value;

const startButton = document.getElementById("toggleAlarm");
let newAlarm = "newAlarm"
let alarmOn = false;
//function that will checkAlarm - if no alarm started, start one; otherwise end current alarm
const checkAlarm = () => {
  if (alarmOn === false) {
    createAlarm();
  }
  else {
    startButton.innerHTML = 'ENABLE';
    endAlarm();
  }
};

//function to create and start an alarm
const createAlarm = () => {
  const interval = Number(document.getElementById("interval").value);
  startButton.innerHTML = 'DISABLE';
  chrome.alarms.create(newAlarm, {delayInMinutes: interval, periodInMinutes: interval});
  alarmOn = true;
}
//function to end current alarm
const endAlarm = () => {
  alarmOn = false;
  chrome.alarms.clearAll();
}


startButton.addEventListener('click', checkAlarm);

// chrome.alarms.onAlarm.addListener((alarm) => {
//   console.log("Got an alarm!", alarm);
//   let bananaTime = new Audio ("bananas.mp3");
//   bananaTime.play();
//   // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   // chrome.scripting.executeScript({
//   //   target: { tabId: tab.id },
//   //   function: bananasImages,
//   // });
// });

// const bananasImages = () => {
//   const images = document.querySelectorAll('img');
//   let counter = 1;
//   for (let img of images) {
//     if (counter > 4) counter = 1;
//     img.src = `banana${counter}.jpeg`;
//     counter++;
//   } 
// };