const binary ={
  "1101":"A","10110":"B","0001":"C","0110":"D","111":"E",
  "00101":"F","01001":"G","00001":"H","1010":"I","010000":"J",
  "10001":"K","0111":"L","11000":"M","1001":"N","0011":"O",
  "11101":"P","11001":"Q","10000":"R","01101":"S","0101":"T",
  "10111":"U","000001":"V","10101":"W","001001":"X",
  "0100001":"Y","11100":"Z","00000":" "

};


const table=Object.fromEntries(
    Object.entries(binary).map(([k,v])=> [v,k])
)


function decode(){
    let txt = document.getElementById('code').value
    let result =''
    let buffer=''

    txt =txt+ " "


    for( let char of txt){
        if(char === ' ' || char === '\n'){
            if(buffer.length>0){
                if(binary[buffer]){
                    result+=binary[buffer]
                }
                buffer=''
            }
        }else{
            buffer+= char
        }
    }
    document.getElementById('result').innerText= result || "invalid code"

}

function encode(){
    let txt = document.getElementById("code").value.toUpperCase()
    let result=[]

    for( let char of txt){
        if(table[char]){
            result.push(table[char])
        }
    }
    document.getElementById("result").innerText=result.join(' ')|| "invalid text"
}