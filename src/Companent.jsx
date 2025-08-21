import {useState} from "react"

export default function Companent() {

    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    function addList() {        
        const newitem = item;  
        
        setList(l => [...l, newitem])
        setItem("")
    }

    function addItem(event) {
        setItem(event.target.value);
  }
  
  function removeitem(index) {
    setList(l => l.filter((_,i) => i !==index ));
  }



    return (<div className="main-cantainer">

        <h2>What's on your mind to do </h2>
        <ul> {list.map((list , index) => 
        <li key={index} onClick={() => removeitem(index)}>
        {list}</li>)}            
        </ul>
      <input type="text"
        onChange={addItem}
        value={item}
        placeholder="Write down" />   
        
      <br />
      
      <button onClick={addList} > Add</button>
    </div>
    );

}