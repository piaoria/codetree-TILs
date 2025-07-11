import heapq

n, m = map(int, input().split())
num_list = list(map(int, input().split()))
pq = []

for num in num_list:
    heapq.heappush(pq, -num)

for _ in range(m):
    num = -heapq.heappop(pq)
    heapq.heappush(pq, -(num - 1))

print(-pq[0])