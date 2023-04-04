import {Link} from 'react-router-dom'

function Inputbar(props) {
  function alertMsg(){
    alert('Please Provide non empty value');
  }

  return (
    <div className="Inputbar">
      <h1>Enter Something...</h1>
      <input style={styles.input} type="text" onChange={props.onInputChange} />
      {props.value.trim() !== '' && (<Link to="/remove-duplicate" >
        <button style={styles.btn}>Submit</button>
      </Link>)}
      {props.value.trim() === '' && (<button onClick={alertMsg}
      style={styles.btn}>Submit</button>)}
    </div>
  );
}

const styles = {
  input : {
    height : 30,
    width : 500,
    fontSize : 18,
    outline : 'none'
  },

  btn : {
    height : 37,
    width : 100,
    backgroundColor : 'black',
    color : 'white',
    fontSize : 18,
    border : 'none',
    cursor : 'pointer'
  }
}

export default Inputbar;