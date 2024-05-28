let A = 
     [ [1,3,2,2,1 ],[3,3,2,4,5,1]]
;
function solution(A) {
  let doctorMap = new Map();
  //looping through each elemnts.
  for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[i].length; j++) {
          let doctor = A[i][j];
          if (!doctorMap.has(doctor)) {
              doctorMap.set(doctor, new Set());
          }
          //Add the set of hospitals for the current doctors
          doctorMap.get(doctor).add(i);
      }
  }

  // Count the number of doctors with multiple hospitals
  let count = 0;
  for (let [doctor, hospitals] of doctorMap.entries()) {
      if (hospitals.size > 1) {
          count += 1;
      }
  }

  return count;
}
console.log(solution(A));