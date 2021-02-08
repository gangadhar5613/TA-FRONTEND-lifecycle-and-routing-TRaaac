import React from 'react';
import Cards from './Cards'

class Buttons extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lang:'All',
            repos:null
        }
    }


  componentDidMount(){
    fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.lang}&sort=stars&order=desc&type=Repositories`)
    .then((res) => res.json())
    .then((repos) => this.setState({repos:repos}))
  }

    handleLang = (event) =>{
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.lang}&sort=stars&order=desc&type=Repositories`)
        .then((res) => res.json())
        .then((repos) => this.setState({repos:repos}))
        let value = event.target.dataset.lang

        this.setState({
            lang:value
        })

       
           

    }







    render(){
        return(
        <>
            <section onClick={this.handleLang} className='flex flex-row items-center justify-center my-5'>
                <span data-lang='All' className='text-2xl cursor-pointer bg-green-400 active:bg-green-800 text-white py-1 px-3 mx-2'>All</span>
                <span data-lang='JavaScript' className='text-2xl cursor-pointer bg-green-400 active:bg-green-800 text-white py-1 px-3 mx-2'>JavaScript</span>
                <span data-lang='Python' className='text-2xl cursor-pointer bg-green-400 active:bg-green-800 text-white py-1 px-3 mx-2'>Python</span>
                <span data-lang='Ruby' className='text-2xl cursor-pointer bg-green-400 active:bg-green-800 text-white py-1 px-3 mx-2'>Ruby</span>
                <span data-lang='Java' className='text-2xl cursor-pointer bg-green-400 active:bg-green-800 text-white py-1 px-3 mx-2'>Java</span>
                <span data-lang='CSS' className='text-2xl cursor-pointer bg-green-400 active:bg-green-800 text-white py-1 px-3 mx-2'>CSS</span>
            </section>
            <section>
                <Cards repos ={this.state.repos} />
            </section>
        </>
        )
    }
}


export default Buttons