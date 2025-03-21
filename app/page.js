"use client"
//import { SubmitAction } from "@/actions/form";
//import { useRef } from "react";
//import Image from "next/image";
//import { useState, useEffect } from "react";

//import Navbar from "@/components/Navbar"

export default function Home() {
  //let ref = useRef()
  //const handleClick =async ()=>{
    //let data = {
     // name:"Hite",
   // role:"coder", 
    // }
   // let a= await fetch("/api/add",{method:"POST",
     // headers:{
       // "Content-Type":"application/json",
     // },
   // body:JSON.stringify(data),
 // })
   // let res = await a.json()
   // console.log(res)
 // }
//const[count, setCount]= useState(0)
//console.log("hey i am hite")
//let a= fs.readFile(".gitignore")
//a.then(e=>{console.log(e.toString())})
  return (
    /*<div>
      <Navbar/> 
      i  am component
     {/* {count}
    <button onClick={()=>setCount(count+1)}>click me</button>
    }
    </div><div className="container mx-auto bg-red-50">
      <img src="https://media.istockphoto.com/id/2165644511/photo/delicious-chicken-burger-with-spicy-french-fries.jpg?s=612x612&w=is&k=20&c=x64swCIlCv9JtetBmrH1mQN7XzFx7tGsqADku_lEeEk=" alt=""></img>
      
      I am Home</div> 
      <div>
        <h1 className="text-xl font=bold">Next.js routes demo</h1>
        <button onClick={handleClick}>Click me</button>
      </div>   
      <div> 
        <div className="w-2/3 mx-auto my-12">
        <form ref={ref} action={(e)=>{SubmitAction(e);ref.current.reset()}}>
          <div>
            <label htmlFor="name">Name</label>
            <input name="name" id="name" className="text-Yellow" type="text"></input>
          </div>
          <div>
            <label htmlFor="add">Address</label>
            <input name="name" id="add" className="text-red" type="text"></input>
          </div>
          <div>
            <button>Submit</button>
          </div>

        </form>
      </div>
      </div>*/
      <div>
        I Am Home Page
      </div>

      
  );
}


/*import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}
*/