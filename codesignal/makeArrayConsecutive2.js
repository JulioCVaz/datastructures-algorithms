/**
 * 
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
 * 
 */

function makeArrayConsecutive2(statues) {
  let nArr = [];
  let count = 0;
  for(let i = Math.min(...statues); i < Math.max(...statues); i++){
    nArr.push(i);
  }
  for(let i in nArr){
    if(nArr.indexOf(statues[i]) === -1) count++; 
  }
  return count;
}
