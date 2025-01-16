var label = document.getElementById('labelForMorse');
var textValue = document.getElementById('textToMorseCode');
var textOption = document.getElementById('textOption');
var morseOption = document.getElementById('morseOption');

function isChecked() {
    const text = textValue.value.trim();
    if (textOption.checked) {
        if (text.charAt(0) === '-' || text.charAt(0) === '.') { 
            label.innerText = 'The given sentence does not contain any text';
            return;
        }
        function encryption() {
            let letterToMorseCode = { 
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
            for (let i = 0; text.length > i; i++) { 
                const currentChar = text.charAt(i).toUpperCase();
                if (currentChar in letterToMorseCode) {
                    result += letterToMorseCode[currentChar] + '/';
                } else {
                    result += '/';
                }
            }
            label.innerText = result.trim();
        }
        encryption();
    } else if (morseOption.checked) {
        if (text.charAt(0) !== '-' && text.charAt(0) !== '.') { 
            label.innerText = 'The given sentence does not contain any morse code';  
            return;
        }
        function decrypt() {
            const morseCodeToLetter = { 
                '.-': 'a',
                '-...': 'b',
                '-.-.': 'c',
                '-..': 'd',
                '.': 'e',
                '..-.': 'f',
                '--.': 'g',
                '....': 'h',
                '..': 'i',
                '.---': 'j',
                '-.-': 'k',
                '.-..': 'l',
                '--': 'm',
                '-.': 'n',
                '---': 'o',
                '.--.': 'p',
                '--.-': 'q',
                '.-.': 'r',
                '...': 's',
                '-': 't',
                '..-': 'u',
                '...-': 'v',
                '.--': 'w',
                '-..-': 'x',
                '-.--': 'y',
                '--..': 'z',
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
            const message = text.split('/'); 
            let result = '';
            for (let i = 0; message.length > i; i++) {
                const currentChar = message[i].trim();
                if (currentChar in morseCodeToLetter) {
                    result += morseCodeToLetter[currentChar];
                } else {
                    result += ' ';
                }
            }
            label.innerText = result.charAt(0).toUpperCase() + result.slice(1);
        }
        decrypt();
    } else {
        label.innerText = 'You must select one of the options';
    }
}