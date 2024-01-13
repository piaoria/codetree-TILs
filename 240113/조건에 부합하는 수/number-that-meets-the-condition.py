a = int(input())

for i in range(1, a + 1):
    if i % 2 != 0 or i % 4 == 0:
      k = i // 8
      if k % 2 == 1:
        k = i % 7
        if k >= 4:
          print(i, end = " ")