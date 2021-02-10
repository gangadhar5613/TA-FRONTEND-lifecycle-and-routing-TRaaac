import React from 'react'
class SquareBox extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

     render(){
        return(
            <div   onClick={ this.props.onClick} className='box w-10 h-10 bg-white m-2 flex items-center justify-center'>{this.props.value}</div>
        )
     }
}

export default SquareBox;