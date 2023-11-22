

export const Quiz = () =>{
    const QuizBox ={
        display: 'flex',
        justifycontent: 'center',
        alignitems: 'center',
        border: '0.3rem solid black',
        width: '35rem',
        height: '15rem',
        margin: '-14rem 0',

    }
    return (
        <div style={QuizBox}></div>
    )

}

export const QuizTitle = () =>{
    const h = {
            fontSize: '2.2em',
            lineHeight: '0.1',
            color: 'black',
            marginTop: '-1rem'
    }
    return (
        <h1 style={h}>How Do You Like Front End?</h1>
    )
}

export const Q1 = () =>{
    const paraStyle = {
        color: 'black',
        position: 'relative',
        marginLeft: '-15rem',
        marginTop: '3rem',
        fontSize: '1.1rem',
        fontWeight: '500',

    }

    const inputStyle = {
        marginLeft: '-20rem',
        width: '10rem',
        color: 'black'
    }

    const para2Style = {
        color: 'black',
        position: 'relative',
        marginLeft: '-7rem',
        marginTop: '0rem',
        fontSize: '1.1rem',
        fontWeight: '500',
    }
    const inputText = {
        marginLeft:' -17rem',
        width: '12rem',
    }

    return (
            <>
        <p style={paraStyle}>How Much You Love Front End?</p>
        <input type="range" min='0' max='100' style={inputStyle}/>
        <p style={paraStyle}>What is your favorite front end feature/topic?</p>
        <input type="text" placeholder="let us know..."/>
        </>
    )
}