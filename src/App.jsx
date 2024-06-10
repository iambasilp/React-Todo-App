

const App = () => {
  const array = [1,2,3,4]
 

  return (
   <div>
     {
      array.map((item,index)=>{
         return <button key={index} onClick={function(){
          console.log("hello")
         }}>{item}</button>
      })
     }
   </div>
  ) 
}

export default App
