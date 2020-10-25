// You are collecting rain water from pockets in between pillars. You are given an array of non-negative integers where each non-zero integer represents the height of a pillar of width 1. Write a function that returns the surface area of the water trapped between the pillars viewed from the front.

/*
Example
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*/

function rainCollector(blocks) {
  const rightMaxes = [];
  let rightMax = 0;
  for (let i = blocks.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, blocks[i]);
    rightMaxes[i] = rightMax;
  }

  const leftMaxes = [];
  let leftMax = 0;
  for (let i = 0; i < blocks.length; i++) {
    leftMax = Math.max(leftMax, blocks[i]);
    leftMaxes[i] = leftMax;
  }

  return blocks.reduce((waterCollected, block, idx) => {
    const leftMax = leftMaxes[idx];
    const rightMax = rightMaxes[idx];
    return waterCollected + Math.min(leftMax, rightMax) - block;
  }, 0);
}
