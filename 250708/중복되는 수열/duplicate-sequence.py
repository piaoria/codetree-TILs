import sys
input = sys.stdin.readline

n = int(input())

array_list = [input().strip() for _ in range(n)]

class Node:
    def __init__(self):
        self.is_end = False
        self.children = {}

class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, number):
        node = self.root

        for num in number:
            if node.is_end:
                return True
            if num not in node.children:
                node.children[num] = Node()
            node = node.children[num]
        node.is_end = True
        return False


result = True
trie = Trie()
array_list.sort()
for nm in array_list:
    if trie.insert(nm):
        result = False
        break
print(int(result))