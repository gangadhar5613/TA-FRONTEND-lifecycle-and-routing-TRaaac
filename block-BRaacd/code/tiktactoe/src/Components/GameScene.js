import React from 'react'
import Board,{calculateWinner} from './Board'
class GameScene extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            history: [{
              squares: Array(9).fill(null),
            }],
            xIsNext: true,
          };
      
    }
    handleClick = (i)=> {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
      squares[Number(i)] = (this.state.XisNext) ? 'X' : 'O'
        this.setState({
            history: history.concat([{
                squares: squares,
              }]),
              xIsNext: !this.state.xIsNext,
        })
     }
    render(){
        return(
          <>
            <section className='h-screen items-center flex flex-col justify-center  bg-gray-200' >
                <Board  squares={this.state.history} state={this.state} onClick={() => this.handleClick()}/>
               <div>
                   <div></div>
                   <div>{}</div>
               </div>
            </section>
          </>
        )
    }
}

export default GameScene