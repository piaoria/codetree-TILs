import sys
import heapq

input = sys.stdin.readline

n = int(input())
num_list = list(map(int, input().split()))

pq = []
for num in num_list:
    heapq.heappush(pq, -num)

while True:
    if len(pq) >= 2:
        a = heapq.heappop(pq)
        b = heapq.heappop(pq)
        if a == b:
            continue
        else:
            heapq.heappush(pq, abs(a - b))

    elif len(pq) == 1:
        print(pq[0])
        break

    else:
        print(-1)
        break