export default {
  container: {
    display: 'flex',
    width: '75vw',
    height: '100vh',
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
    backgroundColor: 'wheat',
    margin: '5%',
    borderRadius: '50px',
    width: '100%',
    ':hover': {
      boxShadow: '-5px 9px 14px 0px black',
    }
  },
  postTitle: {
    width: 'inherit',
    textAlign: 'center',
    margin: '5%',
    color: 'darkred',
    fontSize: '150%',
    fontFamily: '微軟正黑體',
    fontWeight: 'bold',
    cursor: 'pointer',
    ':hover': {
      color: 'black',
    }
  },
  imageDiv: {
    margin: '5% 0',
    borderRadius: '3rem',
    width: 'auto',
    maxWidth: '60vw',
    height: '25vw',
    border: 'solid',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    ':hover': {
      boxShadow: '-5px 9px 14px 0px black',
    },
    '@media only screen and (max-width: 550px)': {
      height: '50vw',
    },
  },
  imageContainer: {
    width: 'auto',
    height: '25vw',
    margin: 'auto',
    '@media only screen and (max-width: 550px)': {
      height: '50vw',
    }
  },
}