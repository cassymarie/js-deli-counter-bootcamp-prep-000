let katzDeliLine = [];



function takeANumber(curLine, person){
    katzDeliLine.push(person);
    return `Welcome, ${person}. You are number ${curLine.length} in line.`;
}

function nowServing(curLine){
    let currServ = curLine[0];
    curLine.shift()
    return currServ
}

function currentLine(curLine){
    var curQue = 'The line is currently: '
    for (let i = 0; i < curLine.length; i++){
        curQue = curQue + `${i+1}. ${curLine[i]}, `;
    }
    return curQue
}


