// Digital root: Sums the digits of a number until this number is a single digit long
export function digitalRoot(n: number): number {
    while (n >= 10) { 
        n = n .toString() 
        .split('') 
        .reduce((sum, digit) => sum + parseInt(digit, 10), 0); 
    } return n;
}

export function squareDigits(num: number): number {
    const numToString = num.toString();
    const numLenght= numToString.length;
    let counter = 0;
    let result = '';
    while (numLenght>counter) {
        const numExtraction =  numToString.charAt(counter);
        const numExtractionToNumber = parseInt(numExtraction, 10);
        const powOf = Math.pow(numExtractionToNumber, 2);
        result = result+powOf;
        counter++;
    }
    const resultToInteger = parseInt(result, 10);
    return resultToInteger;
}

export function duplicateCount(text: string): number{
    const textLength = text.length;
    let counter = 0;
    let result = 0;
    while (textLength>counter) {
      let internalCounter = 0;
      const textComparison = text.charAt(counter);
      while (textLength>internalCounter) {
      const internalComparison = text.charAt(internalCounter);
      if (textComparison===internalComparison && counter!==internalCounter) {
        break;
        } else {
          internalCounter++;
        }
      }
      if (internalCounter<counter) {
        result++;
      }
      counter++;
    }
    return result;
  }

  // turn vowels into numbers
export function encode(string: string): string {
  let counter = 0;
  let result = '';
  const letterToNumber: { [key: string]: string } = { 
    'a': '1', 
    'e': '2', 
    'i': '3', 
    'o': '4', 
    'u': '5'
    };
  while (string.length>counter) {
    const currentLetter = string.charAt(counter);
    if (currentLetter in letterToNumber) {
        result += letterToNumber[currentLetter];
        } else {
          result += currentLetter;
        }
    counter++;
  }
  return result;
}

export function decode(string: string): string {
  let counter = 0;
  let result = '';
  const numberToLetter: { [key: string]: string } = { 
    '1': 'a', 
    '2': 'e', 
    '3': 'i', 
    '4': 'o', 
    '5': 'u'
    };
  while (string.length>counter) {
    const currentCharacter = string.charAt(counter);
    if (currentCharacter in numberToLetter) {
        result += numberToLetter[currentCharacter];
        } else {
          result += currentCharacter;
        }
    counter++;
  }
  return result;
}

export function removeNb (n:number):number[][] {
  let result: number[][] = [];
  let total = (n * (n + 1)) / 2;
  let a = 1;
  let b = 1;
  let pairFound = false;
  for (a = 1; a <= n; a++) { 
    for (b = 1; b <= n; b++) { 
      if (a * b === total - a - b) { 
          result.push([a, b]); 
          result.push([b, a]); 
          pairFound = true;
          break;
      }
      if (pairFound === true) break;
    }
  }
  return result;
}

export function josephusSurvivor(n: number, k: number) {
  let currentExtraction = 0;
  let nArray: number [] = [];
  for (let i = 1 ; n+1 > i ; i++) {
    nArray.push(i);
  }
  for (let i = 0 ; nArray.length>i ; i++) {
    currentExtraction += k;
    if (currentExtraction > nArray.length) {
      currentExtraction -= nArray.length+1;
    }
    nArray.splice(currentExtraction, 1);
  }
  return nArray[0];
}

export function encryption(message: string): string {
  let letterToMorseCode : { [key: string]: string } = { 
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
  };
  let result = '';
  for (let i = 0; message.length > i; i++) {
    const currentChar = message.charAt(i).toUpperCase() 
    if (currentChar in letterToMorseCode) {
      result += letterToMorseCode[currentChar]+'/';
    } else {
      result += '/';
    }
  }
  return result.trim();
}

export function decrypt (encryptedMessage: string): string {
  const morseCodeToLetter : { [key: string]: string } = { 
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9'
  };
  const message = encryptedMessage.split('/'); 
  let result = '';
  for (let i = 0; message.length > i; i++) {
    const currentChar = message[i].toUpperCase() 
    if (currentChar in morseCodeToLetter) {
      result += morseCodeToLetter[currentChar];
    } else {
      result += ' ';
    }
  }
  return result.trim();
}

function sumDigPow(a, b) { const array = []; for (let i = a; ***i <= b***; i++) { 
  let result = 0; const numStr = ***i.toString()***;  
  for (let j = 0; ***j < numStr.length***; j++) { 
    const currentNum = ***parseInt(numStr.charAt(j))***; 
    result += currentNum ** (j + 1); } if (***result === i***) { // Changed `result === a` to `result === i` array.push(***i***); // Changed `a` to `i` } } return array; }