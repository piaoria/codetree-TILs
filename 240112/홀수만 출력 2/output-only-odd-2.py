arr = input().split()

b = int(arr[0])
a = int(arr[1])

for i in range(b + 1, a - 1, -2):
    if (b + 1) % 2 == 0:
        print(i - 1, end = " ")
    else:
        print(i, end = " ")