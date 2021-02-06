


function Clock (props){     
   

    return(
        <div  className='bg-black text-center mx-2 text-white py-2 px-8'>
            <h1>{props.result}</h1>
            <h2 className='bg-red-500 my-2 text-2xl'>{props.city}</h2>
        </div>
    )
}



export default Clock