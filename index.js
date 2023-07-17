const myFunctionTest = (expected, found)  => {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  

const max = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
const maxOfThree = (a, b, c) => {
    return max(max(a, b), c);

}
const isVowel = (a) => {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(a.toLowerCase()) !== -1
}

const sum = (a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}
const multiply = (a) => {
    let multi = 1;
    for (let i = 0; i < a.length; i++) {
        multi = multi * a[i];

    }
    return multi;
}

const reverse = (a) => {
    return a.split("").reverse().join("");
}

const longestWord = (a) => {
    let longest = "";

    for (let i = 0; i < a.length; i++) {
        if (a[i].length > longest.length) {
            longest = a[i];
        }
    }
    return longest;

}

const filterLongWord = (a, b) => {
    if (b >= a.length) {
        return null;
    }
    let c = [];
    let count = 0;


    for (let i = 0; i < a.length; i++) {

        if (a[i].length > a[b - 1].length) {
            c[count] = a[i];
            count++;
        }
    }
    return c;
}

const shortest = (a, b, c) => {
    let short = a.length < b.length ? a : b;
    short = short.length < c.length ? short : c;
    return short;
}


// tests

let a = [1,2,3,4];
let b = "jag testar";
let bRev = "ratset gaj";
let longest = ["abc", "ab", "a", "abcd"];
let longestRet = ["abc", "ab", "abcd"];

    
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of isVowel(a)) is true " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of sum(a) is 10 "  + myFunctionTest(10, sum(a)));
console.log("Expected output of multiply(a) is 24 "  + myFunctionTest(24, multiply(a)));
console.log("Expected output of reverse(jag testar) is ratset jag " + myFunctionTest(bRev, reverse(b)));
console.log("Expected output of longestWord(longest) is abcd " + myFunctionTest("abcd", longestWord(longest)));
console.log("Expected output of filterLongWord(longest, 3) is abc, ab, abcd " + myFunctionTest(JSON.stringify(longestRet), JSON.stringify(filterLongWord(longest, 3))));

const aa = [1,3,5,3,3]; 
const bb = aa.map(function(elem, i, array) {
  return elem + 3;
})
console.log(bb.toString() );
const cc = aa.filter(function(elem, i, array){
  return elem !== 3;});
console.log(cc.toString() );
const dd = aa.reduce(function(prevValue, elem, i, array){
  return prevValue + elem;
});
console.log(dd);

const d2 = aa.find(function(elem) {return elem > 1;}); //3
const d3 = aa.findIndex(function(elem) {return elem > 1;}); //1
console.log(d2);
console.log(d3);

const ee =  aa.map(function(elem, i, array){
    return elem * 10;
});

console.log(ee.toString());

const ff =aa.filter(function (elem, i, array) {
    return elem == 3;});
console.log(ff);
const gg = aa.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
});

console.log(gg);

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
	console.log(this.toString()) // 80
}, 80);
let arr2 = [2, 3, 5, 7]

arr2.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    console.log(this)
    return element;
}, 80);

console.log(shortest("abc", "ab", "a"));