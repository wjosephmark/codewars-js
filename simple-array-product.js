// In this Kata, you will be given a multi-dimensional array containing 2 or more sub-arrays of integers. 
// Your task is to find the maximum product that can be formed by taking any one element from each sub-array.

// Examples:
// solve( [[1, 2],[3, 4]] ) = 8. The max product is given by 2 * 4
// solve( [[10,-15],[-1,-3]] ) = 45, given by (-15) * (-3)
// solve( [[1,-1],[2,3],[10,-100]] ) = 300, given by (-1) * 3 * (-100)

function solve(arr){
    
    //Number placeholders
    var firstNum = null
    var secondNum = null
    var thirdNum = null
    var fourthNum = null

    var largestProduct = null

    //Populate number placeholders
    arr.forEach(subArr => {
        if(firstNum == null) {
            firstNum = subArr[0]
            secondNum = subArr[1]
        } else {
            thirdNum = subArr[0]
            fourthNum = subArr[1]
        }
    });
    

    console.log(firstNum, secondNum, thirdNum, fourthNum)
}

solve([[2, 3], [4,5]])