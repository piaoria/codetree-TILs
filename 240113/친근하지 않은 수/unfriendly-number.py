n = int(input())
ctn = 0

for i in range(1, n + 1):
    if i % 2 != 0 and i % 3 != 0 and i % 5 != 0:
        ctn += 1

print(ctn)