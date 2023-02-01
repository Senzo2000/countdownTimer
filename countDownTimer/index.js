



// HMTL ELEMENT WERE ARE GOING TO BE ALETERING , I.E THE TIMES
 days = document.getElementById('days').innerHTML;
 hours = document.getElementById("hours").innerHTML
  minutes =  document.getElementById('minutes').innerHTML;
 seconds =  document.getElementById('seconds').innerHTML;






const countDown = () => {
  
  // BIRTHDATE
  const BIRTHDATE = new Date("Aug 03, 2023 00:00:00").getTime();
  console.log(BIRTHDATE);



// THE TIME NOW...TODAY
  const now = new Date().getTime()
 
  // difference between my Birthday and NOW
   const difference = BIRTHDATE - now;

  
   const seconds = 1000;
   const minutes = seconds * 60;
   const hours = minutes * 60;
   const days = hours * 24;

   const timeDays = difference;
   console.log(timeDays);

// MATHEMATICAL EQUATIONS TO GET THE DAY FROM TODAY AND MY BIRTHDAY
   const daysSet = Math.floor(difference/ days);
   const hoursSet = Math.floor((difference % days) / hours);
   const minutesSet = Math.floor((difference % hours) / minutes)
   const secondsSet = Math.floor((difference % minutes) / seconds)

   // HMTL ELEMENT WERE ARE GOING TO BE ALETERING , I.E THE TIMES
document.getElementById('days').innerHTML = daysSet;
  document.getElementById("hours").innerHTML = hoursSet;
   document.getElementById('minutes').innerHTML = minutesSet;
  document.getElementById('seconds').innerHTML = secondsSet;





  






}

setInterval(countDown, 1000)