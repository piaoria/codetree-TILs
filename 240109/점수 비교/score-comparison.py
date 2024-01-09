arra = input().split()
math_a = int(arra[0])
english_a = int(arra[1])

arrb = input().split()
math_b = int(arrb[0])
english_b = int(arrb[1])

print(int(math_a > math_b and english_a > english_b))