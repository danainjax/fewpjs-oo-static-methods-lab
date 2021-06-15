class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace( /[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}
// Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
// Write a method static capitalize that takes in a string and capitalizes the first letter.

//   static titleize(sentence) {
//     let titleizeWord = this.capitalize;
//     let result = [];
//     const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    
    
//      let first = sentence.split(" ")
//      result.push(titleizeWord(first[0]))
//      if(!sentence.split) return sentence;
//     sentence.split(" ").forEach(function (word) {
//       if (!exceptions.includes(word))
//       result.push(titleizeWord(word));
//       else {
//         result.push(word)
//       }
//     });
//     return result.join( " ");
//   }
// }
