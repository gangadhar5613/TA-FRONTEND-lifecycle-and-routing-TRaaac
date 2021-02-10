import React from 'react'
import Loader from '../Loader'
import {Link} from 'react-router-dom'

class News extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news:null
        }
    }


    async componentDidMount() {

        const newsArr = await this.props.newsIds.map(async (newsId) => {
            const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
            const data = await res.json()
            return await data;
        })

        console.log(newsArr)

        Promise.all(newsArr).then((news) => {
            console.log(news)
            this.setState({
                news: news
            })
        })
    }

    render(){
        return(
            <article className='mx-10  '>
                {!this.state.news  ? <Loader /> : 
                       (<section className='h-full bg-gray-100'>
                               {
                                   this.state.news.map((singleNews,index) => {
                                       return (
                                    <a target='_blank' href={`${singleNews.url}`}>
                                       <div className='flex flex-col bg-yellow-200 justify-center my-2 '>
                                             <div className='flex flex-row items-center'>
                                                   <span className='text-lg font-bold'>{index+1})</span>
                                                   <h2 className='text-xl font-bold text-red-700'>{singleNews.title}</h2>
                                             </div>
                                             <div className='flex text-sm text-gray-600 font-bold flex-row items-center'>
                                                 <h4>{singleNews.score} points  |</h4>
                                                 <h4>by {singleNews.by}  |</h4>
                                                 <h4>{singleNews.score} Comments</h4>
                                             </div>
                                       </div>
                                    </a>
                                   )
                                   })
                               }
                        </section>)
                }
            </article>
        )
    }
}

export default News