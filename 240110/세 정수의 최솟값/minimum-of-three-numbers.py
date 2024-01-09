arr = input().split()

a = int(arr[0])
b = int(arr[1])
c = int(arr[2])

if a <= b and a <= c:
    print(a)
elif b <= c and b <= a:
    print(b)
else:
    print(c)