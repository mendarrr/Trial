function solution(A, B) {
    function timeToMinutes(timeStr) {
        const hours = parseInt(timeStr.substring(0, 2));
        const minutes = parseInt(timeStr.substring(3));
        return hours * 60 + minutes;
    }

    let startMinutes = timeToMinutes(A);
    let endMinutes = timeToMinutes(B);
    if (endMinutes < startMinutes) {
        endMinutes += 24 * 60;
    }

    let totalRounds = Math.floor((endMinutes - startMinutes) / 15);

    return totalRounds;
}

console.log(solution("12:01", "12:44"));