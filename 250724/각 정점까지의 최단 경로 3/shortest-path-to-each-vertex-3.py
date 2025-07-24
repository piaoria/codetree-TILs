import sys
import heapq

input = sys.stdin.readline
INT_MAX = sys.maxsize

# 정점의 수, 간선의 수
n, m = map(int, input().split())

# 인접 리스트 그래프
graph = [[] for _ in range(n + 1)]

# 간선 정보
edges = [tuple(map(int, input().split())) for _ in range(m)]

# 인접 리스트에 간선 등록
for x, y, z in edges:
    graph[x].append((y, z))

# 거리 배열 초기화
dist = [INT_MAX] * (n + 1)

pq = []

# 시작 정점 1
start = 1
dist[start] = 0
heapq.heappush(pq, (0, start)) # 거리, 정점

# 다익스트라
while pq:
    cur_dist, cur_node = heapq.heappop(pq)

    # 이미 처리된 정점이면 무시
    if dist[cur_node] < cur_dist:
        continue

    # 현재 정점에서 갈 수 있는 인접 정점 확인
    for next_node, weight in graph[cur_node]:
        if dist[next_node] > cur_dist + weight:
            dist[next_node] = cur_dist + weight
            heapq.heappush(pq, (dist[next_node], next_node))

for i in range(2, n + 1):
    value = dist[i]
    if value == INT_MAX:
        print(-1)
    else:
        print(value)