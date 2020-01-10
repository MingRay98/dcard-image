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
    backgroundColor: 'wheat',
    margin: '2%',
    borderRadius: '50px',
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
    }
  },
  imageDiv: {
    margin: '0 0 8%',
    width: 'auto',
    maxWidth: '60vw',
    height: '25vw',
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
    height: '25vw',
    margin: 'auto',
    objectFit: 'contain',
    '@media only screen and (max-width: 550px)': {
      width: '60vw',
      height: '65vw',
    }
  },postExcerpt:{
    margin: '0 5% 5% 5%',
    fontSize: '125%',
    fontFamily: '微軟正黑體',
    fontWeight: 'bold',
  }
}