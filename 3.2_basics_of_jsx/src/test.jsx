
const data =['Hello', 'World']
export function HelloWorld(){
    
     const str = `${data[0]} ` + `${data[1]}`
    return (
        <header>
            <h1>Testing</h1>
            <p>{str}</p>
        </header>
    
    )
}

const number1 = 5;
const number2 =6;

export function Calc (){
    const number1 = 5;
    const number2 =6;
    const total = number1+number2;
        return (
        <div>
            <p>the sum total is: {total}</p>
        </div>
    )
}

export function StrLength(){
    const str = 'I love React';
    const length = str.length;
    return (
        <div>
            <p>The string length is: {length}</p>
        </div>
    )
}
