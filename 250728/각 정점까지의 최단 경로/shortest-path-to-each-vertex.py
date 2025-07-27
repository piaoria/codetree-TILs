import sys
import heapq
input = sys.stdin.readline

n, m = map(int, input().split())
k = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]

INT_MAX = sys.maxsize

# 인접 그래프 리스트
graph = [[] for _ in range(n + 1)]

# 무방향/양방향
for x, y, z in edges:
    graph[x].append((y, z))
    graph[y].append((x, z))

dist = [INT_MAX] * (n + 1)

pq = []

start = k
dist[start] = 0
heapq.heappush(pq, (0, start))

# 다익스트라
while pq:
    cur_dist, cur_node = heapq.heappop(pq)

    # 이미 최소거리를 갖고 있으면 패스
    if dist[cur_node] < cur_dist:
        continue

    for next_node, weight in graph[cur_node]:
        if dist[next_node] > cur_dist + weight:
            dist[next_node] = cur_dist + weight
            heapq.heappush(pq, (dist[next_node], next_node))
    
for idx in range(1, n + 1):
    if dist[idx] == INT_MAX:
        print(-1)
    else:
        print(dist[idx])