import sys
import heapq
input = sys.stdin.readline

n, m = map(int, input().split())
point_list = [list(map(int, input().split())) for _ in range(n)]

pq = []

for point in point_list:
    x, y = point

    heapq.heappush(pq, (x + y, x, y))

for _ in range(m):
    _, min_x, min_y = heapq.heappop(pq)
    
    heapq.heappush(pq, (min_x + min_y + 4, min_x + 2, min_y + 2))

print(pq[0][1], pq[0][2])