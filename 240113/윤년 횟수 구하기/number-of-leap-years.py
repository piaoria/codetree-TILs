n = int(input())
ctn = 0

for i in range(1, n + 1):
    if i % 4 == 0:
        ctn += 1
    if i % 100 == 0:
        ctn -= 1
    if i % 400 == 0:
        ctn += 1

print(ctn)