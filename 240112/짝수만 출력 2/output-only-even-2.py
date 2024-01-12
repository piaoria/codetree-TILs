arr = input().split()

b = int(arr[0])
a = int(arr[1])
i = b
if b % 2 == 0:
    while i >= a:
        print(i, end = " ")
        i -= 2