import React from 'react';
import Winner from './Winner'

class Board extends React.Component{
    constructor(props){
        super(props)

    }

  

    render(){
        return(
            <section className=' h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-row text-center items-center my-10 justify-center'>
                 <div className='bg-gray-100 h-20 w-60 shadow-xl mx-2'>
                         <h2>Enter two GitHub Users</h2>
                     <i className="fas text-blue-700 text-4xl my-2 fa-user-friends"></i>
                 </div>
                 <div className='bg-gray-100 h-20 w-60 shadow-xl mx-2'>
                         <h2>Battle</h2>
                         <i className="fab text-red-600 text-4xl my-2 fa-battle-net"></i>
                 </div>
                 <div className='bg-gray-100 h-20 w-60 shadow-xl mx-2'>
                         <h2>Winner</h2>
                         <i className="fas text-green-700 text-4xl my-2 fa-trophy"></i>
                 </div>
            </div>
          <div>
                 <div className='my-20 flex flex-row items-center justify-between'>
                             {
                                 (!this.props.state.user1Data ?                                
                                 <div className='mx-10'>
                                    <label htmlFor='user1' className='user1-label text-2xl mx-1'>User 1</label>
                                     <input  onChange={this.props.handleUser} type='text' id='user1' name='user1' className='border-2 border-green-400 w-96 p-2' value={this.props.state.user1} placeholder='Enter GitHub User1'></input>
                                     <button onClick={this.props.handleSubmit} data-userdata='user1Data' data-user='user1' className='bg-black text-white py-2 px-6 mx-1' type='submit'>Submit</button>
                                    </div>
                                  : '')
                             }
                             {
                                 (this.props.state.user1Data ? (
                                 <div className='text-xl flex items-center flex-row bg-green-300 mx-2 w-96 h-30 p-2'>
                                 <img className='w-20 rounded-full h-20'  src={this.props.state.user1Data.avatar_url} alt=''></img>
                                 <h2>{this.props.state.user1Data.login}</h2>
                                 </div>
                                 ):'')


                             }
                             {
                                 
                                 (this.props.state.user2Data ? (
                                 <div className='text-xl flex items-center flex-row bg-green-300 w-96 h-30 p-2 mx-2' >
                                 <img className='w-20 rounded-full h-20'  src={this.props.state.user2Data.avatar_url} alt=''></img>
                                 <h2>{this.props.state.user2Data.login}</h2>
                                 </div>
                                 ):'')
                             }

                             {
                                 (!this.props.state.user2Data ?                                
                                  <div className='mx-10'>
                                     <label htmlFor='user2' className='user2-label  text-2xl mx-1'>User 2</label>
                                     <input onChange={this.props.handleUser} type='text' id='user2' name='user2' value={this.props.state.user2} className='border-2 border-green-400 w-96 p-2' placeholder='Enter GitHub User2'></input>
                                     <button onClick={this.props.handleSubmit} data-userdata='user2Data' data-user='user2'   className='bg-black text-white py-2 px-6 mx-1' type='submit'>Submit</button>
                                 </div> 
                             : '')
                             }
                     </div>
                    {
                        (this.props.state.user1Data && this.props.state.user2Data ?  
                         <div className='flex items-center justify-center' >
                            <button onClick={this.props.handleBattle} className='text-3xl py-2 px-6 bg-black text-white outline-none' type='submit'>Battle</button>
                         </div>
                          : '')
                    }
            </div>


         </section>



                 
        )
    }
}

export default Board