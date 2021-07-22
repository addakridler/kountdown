

chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.sync.set({  });
  console.log("I am installed!");
});

chrome.alarms.onAlarm.addListener((alarm) => {
  //console.log("Got an alarm!", alarm);
  // alert("!!! It is break time !!!");
  let bananaTime = new Audio ("BANANA.mp3");
  bananaTime.onplaying = () => alert("!!! It is break time !!!");
  bananaTime.play();
});



// let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
// chrome.scripting.executeScript({
//   target: { tabId: tab.id },
//   function: bananasImages,
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