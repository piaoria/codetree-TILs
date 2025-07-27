import sys
import heapq

input = sys.stdin.readline
MAX_INT = sys.maxsize

n, m = map(int, input().split())
edges = [tuple(map(int, input().split())) for _ in range(m)]
graph = [[] for _ in range(n + 1)]

max_dist = 0
pq = []
dist = [MAX_INT] * (n + 1)

# 단방향
for x, y, z in edges:
    graph[y].append((x, z))

# 각 학생에 대한 거리 계산 후 max_dist 갱신
start = n
dist[start] = 0
heapq.heappush(pq, (0, start))

while pq:
    cur_dist, cur_node = heapq.heappop(pq)

    if dist[cur_node] < cur_dist:
        continue
    
    for next_node, weight in graph[cur_node]:
        if dist[next_node] > cur_dist + weight:
            dist[next_node] = cur_dist + weight
            heapq.heappush(pq, (dist[next_node], next_node))

print(max(dist[1:]))