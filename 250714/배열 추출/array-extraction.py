import sys
import heapq

input = sys.stdin.readline
n = int(input())

cmd_list = [int(input()) for _ in range(n)]

pq = []

for cmd in cmd_list:
    if cmd != 0:
        heapq.heappush(pq, -cmd)
    else:
        if pq:
            pop_data = heapq.heappop(pq)
            print(-pop_data)
        else:
            print(0)