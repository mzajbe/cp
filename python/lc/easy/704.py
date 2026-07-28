# https://leetcode.com/problems/binary-search/
from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        
        while left <= right:
            mid = (left+right)//2
            
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid -1
            
        return -1
        

result = Solution()

nums1 = [1,2,3,4,5]
target = 5



print(f"{target} exists in nums and its index is {result.search(nums1,target)}")