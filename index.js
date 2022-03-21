const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let tutorialsNew = tutorials.map(function(sentence){
    let indWords = (sentence.split(" "));
    let capitalizedWords = indWords.map(function(eachWord) {
      //console.log(eachWord.charAt(0).toUpperCase(),
      //eachWord.substring(1),eachWord.charAt(0).toUpperCase().concat(eachWord.substring(1)));
      //eachWord.charAt(0);
      //eachWord.charAt(0).toUpperCase();
      //eachWord.substring(1);

      return eachWord.charAt(0).toUpperCase().concat(eachWord.substring(1));
    })
    //console.log(capitalizedWords.join(' '))
    return capitalizedWords.join(' ');
  })
  return tutorialsNew;
}

//Pull each word from each sentence. Need to use .split() method (creates an array of each word).
//Need to capitalize first letter of each word. Iterate over each new array. 
//
