import React from 'react'
import Loader from './Loader'

class Cards extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            repos:this.props.repos
        }
       
    }


   

    render(){
        return(
            <section className='mx-2'>
                {
                   (!this.props.repos ? <Loader />:
                    <section className='grid grid-cols-5 gap-3'>
                             {
                                 this.props.repos.items.map((repo,index) => {
                                      return(
                                          <div key={repo.id} className='bg-green-100 py-1 text-center  shadow-xl flex flex-col '>
                                              <h3 className='text-center text-2xl'>#{index+1}</h3>
                                              <div className='items-center flex justify-center my-1 text-center'>
                                                  <img className='w-20 h-20 rounded-full' src={repo.owner.avatar_url} alt='repo'></img>
                                              </div>
                                              <h2 className='text-center text-3xl my-1 font-bold '>{repo.owner.login}</h2>
                                              <h3 className='text-green-600 my-1 text-xl'>{repo.stargazers_count}: Stars</h3>
                                              <h3 className='text-blue-800 my-1 text-xl'>{repo.forks_count}: Forks</h3>
                                              <h4 className='text-gray-600 my-1 text-xl'>{repo.open_issues_count}: Open Issues</h4>
                                          </div>
                                      )
                                 })
                             }
                    </section>
                    )
                }
            </section>
        )
    }
}

export default Cards