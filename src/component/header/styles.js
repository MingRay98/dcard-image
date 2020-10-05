export default {
    container: {
        display: 'flex',
        width: '100vw',
        height: '10vw',
        maxHeight: '10vh',
        flexWrap: 'wrap',
        margin: 'auto',
        fontSize: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006AA6',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        '@media only screen and (max-width: 550px)': {
            fontSize: '24px',
        },
    },
}