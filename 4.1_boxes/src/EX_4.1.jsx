

export function Boxes(){
    const box1Style = {
        width: '35rem',
    height: '23rem',
    border: '0.1rem solid lightgreen',
    background: 'lightgreen',
    overflow: 'hidden',
    padding: '0.5rem',
    display: 'flex',
    justifycontent: 'center',
    }

    const box2Style = {
        width: '92%',
        height: '90%',
        padding: '0rem',
        border: '0.1rem solid lightblue',
        background: 'lightblue',
        margin:' 0px auto',
        padding: '1rem',
        overflow: 'hidden',

    }

    const box3Style = {
        width: '92%',
        height: '91%',
        padding: '1rem',
        border: '0.1rem solid pink',
        background: 'pink',
        margin: '0px auto',
        overflow: 'hidden',

    }

    const box4Style = {
        width: '51%',
        height: '4%',
        padding: '4rem',
        border: '0.1rem solid purple',
        background: 'purple',
        margin: '0px auto',

    }

    const box5Style = {
        width: '78%',
        height: '42%',
        padding: '0rem',
        border: '0.1rem solid purple',
        background: 'purple',
        margin: '0px auto',
        position: 'relative',
        top: '10%'
}

    return (
        <>
        <main style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
        <div style={box1Style}>
        <div style={box2Style}>
        <div style={box3Style}>
        <div style={box4Style}>
        </div>
        <div style={box5Style}>
        </div>
        </div>
        </div>
        </div>
        </main></>
        
    )
}