function gameTime (A,B){
    const[startHour,startMinute]=A.split(":").map(Number);
    const[endHour, endMinute]= B.split(":").map(Number);
   
    const startMinutes = startHour * 60 + startMinute;
    const endMinutes = endHour * 60 + endMinute;
   
    let nextIntervalStart = Math.ceil(startMinutes / 15)*15
   let count = 0;
   while (nextIntervalStart + 15 <= endMinutes) {
     count++;
     nextIntervalStart += 15;
   }
   return count 
}
   console.log(gameTime("20:00","06:00"))