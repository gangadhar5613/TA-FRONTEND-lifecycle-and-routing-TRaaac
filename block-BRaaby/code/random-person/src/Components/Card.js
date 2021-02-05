import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:null,
            prop:'',
            value:''
        }
    }

   componentDidMount(){
       fetch('https://randomuser.me/api/')
       .then((res) => res.json())
       .then((data) => this.setState({data}) )
   }

   handleHover = (event) => {
       let property = event.target.dataset.user
       let data = this.state.data.results
       this.setState({
        prop:property,
        
    })
       switch (property) {
        case 'name':
             let name =  this.state.data.results[0].name
             this.setState({
                 value:name.first
             })
            break;
        case 'phone':
             let phone =  this.state.data.results[0].phone
             this.setState({
                value:phone
            })
           break;
        case 'dob':
            let dob =  (this.state.data.results[0].dob)
            this.setState({
                value:dob.age
            })
          break;
        case 'email':
            let email =  this.state.data.results[0].email
            this.setState({
                value:email
            })
          break;
        case 'location':
            let city =  this.state.data.results[0].location
            this.setState({
                value:city.city
            })
          break;
        case 'password':
            let password =  this.state.data.results[0].login
            this.setState({
                value:password.password
            })
          break;
        default:
            break;
    }

    }

    handleRandomUser = () => {
        this.setState({
            data:null
        })
        fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) => this.setState({data}) )
    }
    render(){
        if(!this.state.data){
            return <section className='h-screen  text-center items-center justify-center flex'>
                <div className='text-center'>
                   <i className="fas animate-spin text-5xl text-black fa-spinner"></i>
                </div>
            </section>
        }
        return(
            <section className='h-screen flex items-center justify-center'>
                 <div className='w-full h-full px-52 p-10 shadow-2xl bg-gray-100 flex flex-col text-center items-center '>
                     <div className=' text-center flex items-center justify-center w-72 h-30 p-1 rounded-full'>
                         <img className='rounded-full' src={this.state.data.results[0].picture.large} alt='user-profile' ></img>
                     </div>
                     <div className='my-10'>
                          <h2 className='text-2xl my-1'>My {this.state.prop} is</h2>
                          <h3 className='text-3xl my-1'>{this.state.value}</h3>
                         <div onMouseMove={this.handleHover} className='flex flex-row justify-between'>
                            <i data-user='name'  className="far text-3xl mx-5 hover:text-red-500 fa-user"></i>
                            <i data-user='email' className="fas text-3xl mx-5 hover:text-red-500 fa-envelope-open"></i>
                            <i data-user='location' className="fas text-3xl mx-5 hover:text-red-500 fa-map"></i>
                            <i data-user='dob' className="fas text-3xl mx-5 hover:text-red-500 fa-calendar-day"></i>
                            <i data-user='phone' className="fas text-3xl mx-5 hover:text-red-500 fa-phone"></i>
                            <i data-user='password' className="fas text-3xl mx-5 hover:text-red-500 fa-lock"></i>
                         </div>
                     </div>
                     <div>
                         <h2 onClick={this.handleRandomUser} className='bg-red-400 cursor-pointer px-6 py-2 text-black'>Random User</h2>
                     </div>
                 </div>
            </section>
        )
    }
}

export default Card