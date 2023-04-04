function Card(props) {
  const styles = {
  card : {
    height : 100,
    width : 100,
    color : 'white',
    fontSize : 78,
    backgroundColor : props.color,
    position : 'relative',
    border : '2px solid black'
  },
  img : {
    position : 'absolute',
    height : '15px',
    width : '15px',
    top : '3px',
    right : '3px',
    cursor : 'pointer',
  },
  btn : {
    height : '25px',
    width : '25px',
    position : 'absolute',
    top : '3px',
    right : '3px',
    cursor : 'pointer',
  }
}
  return (
    <div className="Card" style={styles.card}>
      {props.char}
      <button onClick={() => props.RemoveChar(props.char,props.index)} 
      style={styles.btn}
      >
      <img src='https://cdn-icons-png.flaticon.com/512/2961/2961937.png'
      style={styles.img} alt="bin"
      /> </button>
    </div>
  );
}

export default Card;