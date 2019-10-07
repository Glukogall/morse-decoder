//@ts-check

const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result='';
    let out='';
    for (let i=0; i<expr.length; i=i+10){
        let letter=expr.substr(i, 10);
  
        letter=letter.split('');
        
        for(let l=0; l<letter.length; l=l+2){
            if(letter[l]=='*'){
                result=result+' '
                l=l+9;
              }
          else{
            switch(letter[l]+letter[l+1]){
              case '10':
                out=out+'.';
                break
              case '11':
                out=out+'-';
                break
              case '00':
                break;
            }
          }
  
          
        }
        if(MORSE_TABLE[out]){result=result+MORSE_TABLE[out]}
      out='';
    }
  return result;
        }

module.exports = {
    decode
}