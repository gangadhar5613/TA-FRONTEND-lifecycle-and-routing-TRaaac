import React from 'react';
import Clock from './Clock'
import momentTZ from 'moment-timezone'

let data = [
    {
      id: 1,
      city: 'Boston',
      tz: 'America/New_York',
      enabled: true,
    },
    {
      id: 2,
      city: 'Dublin',
      tz: 'Europe/Dublin',
      enabled: true,
    },
    {
      id: 3,
      city: 'Taipei',
      tz: 'Asia/Taipei',
      enabled: true,
    },
    {
      id: 4,
      city: 'Rome',
      tz: 'Europe/Rome',
      enabled: true,
    },
    {
      id: 5,
      city: 'Sydney',
      tz: 'Australia/Sydney',
      enabled: true,
    },
    {
      id: 6,
      city: 'Helsinki',
      tz: 'Europe/Helsinki',
      enabled: true,
    },
  ];

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          clock:3,
          data:[...data],
          time:new Date(),
          
        }
        this.timer = null;
    }

  componentDidMount () {

    this.timer = setInterval(() => {
      this.setState({
             time: new Date()
      })
    }, 1000);
  }

  handleAddClock = () => {
    if(!this.state.clock <= 3){
           this.setState({
               clock:this.state.clock + 1
           })
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }
  
  handleRemoveClock = () => {
    if(this.state.clock >= 3){
           this.setState({
               clock:this.state.clock -1
           })
    }
  }


    render(){

        return(
            <section className='h-screen bg-gray-100 flex flex-col items-center justify-center'>
                <div className='flex flex-row my-10'>
                    {
                      this.state.data.slice(0,this.state.clock).map((clock) => {
                          const dateToDisplay = this.state.time // Date in UTC stored at server side
                          const patientTimezone = clock.tz // Patient timezone at Brazil
                          const result = momentTZ.tz(dateToDisplay, 'YYYY-MM-DDTHH:mm:ssZ', patientTimezone)
                        return <Clock key={clock.id} city={clock.city} result={result.toLocaleString()} />
                      })
                    }
                </div>
                <div>
                  <span onClick={this.handleAddClock} className='bg-green-500 mx-2 cursor-pointer px-6 py-2'>Add Clock</span>
                  <span onClick={this.handleRemoveClock} className='bg-red-500 mx-2 cursor-pointer px-6 py-2'>Delete Clock</span>
                </div>
            </section>
        )
    }
}

export default Dashboard