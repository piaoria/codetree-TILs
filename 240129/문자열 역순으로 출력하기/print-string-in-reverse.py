empty_lst = []
for _ in range(4):
    word = input()
    empty_lst += [word]

for i in range(3, -1, -1):
    print(empty_lst[i])