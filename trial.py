def solution(A):
    doctor_map = {}

    for i in range(len(A)):
        for hospital in A[i]:
            if hospital not in doctor_map:
                doctor_map[hospital] = set()
            doctor_map[hospital].add(i)

    count = 0
    for hospitals in doctor_map.values():
        if len(hospitals) > 1:
            count += 1

    return count

A = [[1, 1, 5, 2, 3], [4, 5, 6, 4, 3], [9, 4, 4, 1, 5]]
print(solution(A))