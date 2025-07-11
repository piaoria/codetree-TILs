import sys
import heapq

input = sys.stdin.readline

n = int(input())
cmd_list = [input().split() for _ in range(n)]

class PriorityQueue:
    def __init__(self):
        self.items = []

    def push(self, item):
        heapq.heappush(self.items, -item)

    def empty(self):
        return not self.items

    def size(self):
        return len(self.items)
    
    def pop(self):
        return -heapq.heappop(self.items)
    
    def top(self):
        return -self.items[0]


pq = PriorityQueue()

for cmd in cmd_list:
    order = cmd[0]

    if order == "push":
        pq.push(int(cmd[1]))

    elif order == "pop":
        print(pq.pop())

    elif order == "size":
        print(pq.size())

    elif order == "empty":
        if pq.empty():
            print(1)
        else:
            print(0)

    elif order == "top":
        print(pq.top())