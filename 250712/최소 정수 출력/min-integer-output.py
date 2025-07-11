import heapq

n = int(input())
pq = []

for _ in range(n):
    cmd = int(input())
    if cmd > 0:
        heapq.heappush(pq, cmd)
    else:
        if len(pq):
            pop_num = heapq.heappop(pq)
            print(pop_num)
        else:
            print(0)