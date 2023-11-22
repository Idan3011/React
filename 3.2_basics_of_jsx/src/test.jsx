
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

