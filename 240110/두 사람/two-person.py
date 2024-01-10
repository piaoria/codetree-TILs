arr_a = input().split()
arr_b = input().split()

a_age = int(arr_a[0])
a_gen = arr_a[1]
b_age = int(arr_b[0])
b_gen = arr_b[1]

print(int((a_age >= 19 and a_gen == "M") or (b_age >= 19 and b_gen == "M")))