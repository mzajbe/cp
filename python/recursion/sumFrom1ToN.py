def sum_numbers(n):
    # base case 
    if n == 0:
        return 0
    return n+sum_numbers(n-1)

print(sum_numbers(5))