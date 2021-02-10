import React from 'react'
import SquareBox from './SqaureBox'

class Board extends React.Component{

  


    square = (i) => {
        return(
                <SquareBox onClick={ () => this.props.handleClick} state={this.props.state} value={this.props.squares[0].squares[i]} />


        )
    }
    handleStep = () => {
        return(
            <button>Go to the step</button>
        )
    }

    render(){
        const winner = calculateWinner(this.props.squares);
        let status ;
        if(winner){
            status = 'Winner' + winner
        }else{
            status = 'Next player is :'+ (this.props.state.XisNext ? 'X' : 'O')
        }
        return(
          <>
             <section className=' flex flex-col items-center  '>
                    <div className='flex flex-row'>
                        {this.square(0)}
                        {this.square(1)}
                        {this.square(2)}
                    </div>
                    <div className='flex flex-row'>
                        {this.square(3)}
                        {this.square(4)}
                        {this.square(5)}
                    </div>
                    <div className='flex flex-row'>
                        {this.square(6)}
                        {this.square(7)}
                        {this.square(8)}
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2>{status}</h2>
                        <div>
                            {this.handleStep()}
                        </div>
                    </div>
             </section>
          </>
        )
    }
}


 export function calculateWinner(squares) {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Board