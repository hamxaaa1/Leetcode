/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(' ');
    words = words.filter( (word)=> { return word !== ""})
    console.log(words)

    let startPoint = 0;
    let endPoint = words.length -1
    while(startPoint < endPoint){
        let temp = words[startPoint] 
        words[startPoint] =  words[endPoint]
        words[endPoint] = temp;

        startPoint++;
        endPoint--;
    }
    

     return words.join(' ')

    
};