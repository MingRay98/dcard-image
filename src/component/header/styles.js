export default {
  container:{
    display: 'flex',
    width: '100vw',
    height: '10vw',
    maxHeight: '10vh',
    flexWrap: 'wrap',
    margin: 'auto',
    fontSize: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    color: 'midnightblue',
    fontWeight: 'bold',
    boxShadow: 'inset 0px 0px 7px 1px',
    '@media only screen and (max-width: 550px)': {
      fontSize: '24px',
    },
  },
}