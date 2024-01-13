n = int(input())
ctn_class = 0
ctn_hall = 0
ctn_toilet = 0

for i in range(1, n+1):
    if i % 12 == 0:
        ctn_toilet += 1
    elif i % 3 == 0:
        ctn_hall += 1
    elif i % 2 == 0:
        ctn_class += 1

print(ctn_class, ctn_hall, ctn_toilet)