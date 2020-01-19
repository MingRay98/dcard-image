export default {
    container: {
        display: 'flex',
        width: '85vw',
        height: '90vh',
        flexWrap: 'wrap',
        margin: 'auto',
        justifyContent: 'space-around',
        overflowY: 'auto',
    },
    loading: {
        color: 'pink',
        display: 'flex',
        alignItems: 'center',
        fontSize: '50px',
        fontWeight: 'bold',
    },
    postContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        margin: '2%',
        borderRadius: '25px',
        width: '100%',
        ':hover': {
            boxShadow: '-5px 9px 14px 0px black',
        },
    },
    postTitle: {
        width: 'inherit',
        textAlign: 'center',
        margin: '2%',
        color: 'darkred',
        fontSize: '150%',
        fontFamily: '微軟正黑體',
        fontWeight: 'bold',
        cursor: 'pointer',
        ':hover': {
            color: 'black',
        },
        '@media only screen and (max-width: 550px)': {
            fontSize: '110%',
        },
    },
    school: {
        width: 'fit-content',
        color: 'black',
        margin: '2%',
        fontStyle: 'italic ',
        fontSize: '70%',
        fontFamily: 'inherit',
        fontWeight: 'bold',
        display: 'inline-flex',
        '@media only screen and (max-width: 550px)': {
            fontSize: '40%',
        },
    },
    imageDiv: {
        margin: '0 0 8%',
        width: 'auto',
        height: 'auto',
        overflow: 'hidden',
        ':hover': {
            boxShadow: '-5px 9px 14px 0px black',
        },
        '@media only screen and (max-width: 550px)': {
            width: 'auto',
            height: 'auto',
        },
    },
    imageContainer: {
        width: 'auto',
        maxWidth: '60vw',
        height: 'auto',
        maxheight: '35vh',
        margin: 'auto',
        objectFit: 'contain',
        borderRadius:'25px',
        '@media only screen and (max-width: 550px)': {
            maxWidth: '60vw',
            maxheight: '65vh',
        }
    },
    postExcerpt: {
        margin: '0 5% 5% 5%',
        fontSize: '125%',
        fontFamily: '微軟正黑體',
        fontWeight: 'bold',
        '@media only screen and (max-width: 550px)': {
            fontSize: '95%'
        },
    }
}