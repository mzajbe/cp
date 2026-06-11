

from collections import Counter
from typing import List





class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums) // 2

        hashmap = Counter(nums)

        for key in hashmap:
            if hashmap[key] > n:
                return key


sol = Solution()

result = sol.majorityElement([2,2,2,2,2,1,1,1,1,1,2])

print(result)
 



# hashmap = {}

# for i in nums:
#     if i in hashmap:
#         hashmap[i] += 1
#     else:
#         hashmap[i] = 1