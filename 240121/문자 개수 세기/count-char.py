word = input()
word_factor = input()
word_len = len(word)
cnt = 0
for i in range (word_len):
    if word_factor == word[i]:
        cnt += 1

print(cnt)