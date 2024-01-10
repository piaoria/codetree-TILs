arr1 = input().split()
arr2 = input().split()

a_ma = int(arr1[0])
a_en = int(arr1[1])
b_ma = int(arr2[0])
b_en = int(arr2[1])

if a_ma > b_ma:
    print("A")
elif a_ma < b_ma:
    print("B")
elif a_ma == b_ma and a_en > b_en:
    print("A")
elif a_ma == b_ma and a_en < b_en:
    print("B")