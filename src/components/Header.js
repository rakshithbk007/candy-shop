import React,{useState} from 'react'
function Header() {
  const [texts,setTexts]=useState([
    {name1:"eat"},
    {name1:"sleep"},
    {name1:"code"}
  ]);
const[index,setIndex]=useState(0)
  function high(){
    const newindex=(index+1)%texts.length
  setIndex(newindex);
}
    return(
      <div>
        <button onClick={high}>Change</button>
        <span>{texts[index].name1}</span>
      </div>
  )
    }  
export default Header