import sys

input = sys.stdin.readline

n = int(input())
hashmap = dict()

def add(k, v):
    hashmap[k] = v

def remove(k):
    hashmap.pop(k)

def find(k):
    if k in hashmap:
        return hashmap[k]
    else:
        return "None"

for _ in range(n):
    cmd = input().split()

    if cmd[0] == "add":
        add(cmd[1], cmd[2])

    elif cmd[0] == "find":
        print(find(cmd[1]))
    
    elif cmd[0] == "remove":
        remove(cmd[1])
        