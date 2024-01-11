arr = input().split()

a = int(arr[0])
b = int(arr[1])
c = int(arr[2])

if a > b and a > c:
    if b > c:
        print(b)
    else:
        print(c)
elif c > b and c > a:
        if b > a:
            print(b)
        else:
            print(a)
else:
    if b > a and b > c:
        if a > c:
            print(a)
        else:
            print(c)