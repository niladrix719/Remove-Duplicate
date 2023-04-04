import Card from '../components/Card'
import {Link} from 'react-router-dom'
import React from 'react'

class RemoveDuplicate extends React.Component {

  componentWillUnmount(){
    this.props.defaultAll();
  }

  render(){

  let cards = [];
  const colors = ['#3ba858','#ab451a','#d61331','#db9bde','#6fc9b4'
  ,'#31419e','#fff242','#b4ff42','#cc2549','#25a2cc','#363227','#4f454f','#8a0783'
  ,'#581313','#75623d','#6e4141','#6080e0','#9ba8a4','#387c8a','#8ac983','#d1ebbc'
  ,'#c4b727','#bad47b','#00bfff','#46506b','#e84d2e','black','white']

  for(let i = 0; i < this.props.value.length; i++){
    let colorCode = this.props.value[i].toLowerCase().charCodeAt(0);
    if(colorCode === 32)
      colorCode = 124;
    else if(colorCode < 97 || colorCode > 122)
      colorCode = 123;
    cards.push(<Card char={this.props.value[i]} color={colors[colorCode - 97]}
    RemoveChar={this.props.RemoveChar} key={i} index={i} />)
  }

  return (
    <div className="RemoveDuplicate">
      <div style={{textAlign : 'left'}}>
        <Link to='/'>
          <button style={styles.btn}>
            <img src='https://cdn-icons-png.flaticon.com/512/271/271220.png'
            alt="back" style={styles.img} />
          </button>
        </Link>
      </div>

      <div style={styles.cards}>
        {cards}
      </div>

      {this.props.hasNoDuplicate &&(<div style={styles.value}>
        <span style={{color : '#70bc72', fontSize : 100}}>
          <span> SUCCESS !!</span>
        </span><br></br><br></br>
        <span style={{color : 'red'}}>Previous</span> : {this.props.prev}<br></br><br></br>
        <span style={{color : '#70bc72'}}>New</span> : {this.props.value}
      </div>)}

      <div style={{marginTop : '60px' , fontSize : 25}}>
        <p>Click on any character and remove all it's duplicates</p>
      </div>
    </div>
  );
  }
}

const styles = {
  cards : {
    display : 'flex',
    justifyContent : 'space-evenly',
    width : '75%',
    margin : 'auto',
    flexWrap : 'wrap',
    gap : '20px'
  },
  btn : {
    height : 30,
    width : 40,
    backgroundColor : 'transparent',
    cursor : 'pointer',
    border : 'none',
    marginLeft : 20
  },
  img : {
    height : 30,
    width : 30
  },
  success : {
    height : 25,
    width : 25
  },
  value : {
    marginTop : '100px',
    display : 'inline-block',
    textAlign : 'left',
    fontSize : 28
  }
}

export default RemoveDuplicate;