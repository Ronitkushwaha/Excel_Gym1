import React from 'react'

export default function facility() {
  
    const style = {
        width:'80%',
        height:'900px'
    }
    return (
    <>
    <main>
            <div class="trainer">
                <h1>know our trainers</h1>
            </div>   
            <div class="card"></div>
            <div class="infra">
                <h2>our infrastructure</h2>
                <h2 class="h2" >wide range of machines</h2>
                <img src="./img/mach.jpg" style={style}/>
                <h2 class="h2">premium equipments</h2>
                <img src="./img/dumb.avif" style={style}/>
                <h2 class="h2">enhancing yoga sessions</h2>
                <img src="./img/yogawe.jpg" style={style}/>
                <h2 class="h2">high-intensity cardio sessions</h2>
                <img src="./img/cardio.jpg" style={style}/>
                <h2 class="h2">productive karate sessions</h2>
                <img src="./img/karat.jpg" style={style}/>
            </div> 
        </main>
        
        <a href="#" class="gotopbtn"><div class="gotopsym"></div></a>
    
    </>
  )
}
