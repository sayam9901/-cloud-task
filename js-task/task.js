//reverse the word in the sentence

function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
    
    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}


//sorting in the des order

function des(arr){
  arr.sort((a,b)=>b-a)
  return arr
}