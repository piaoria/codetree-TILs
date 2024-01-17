arr = input().split()

word_a = arr[0]
word_b = arr[1]

if len(word_a) > len(word_b):
    print(word_a, len(word_a))
elif len(word_a) < len(word_b):
    print(word_b, len(word_b))
else:
    print("same")