import {useState} from 'react';
import './Main.css';
import Data from '../Data.json'

import SingleCard from '../SingleCard/SingleCard';
const Main=()=>{
    let searchKey="";
    let ratingKey="";
    const [resturant ,setResturant]=useState(Data);
    const onSearch=(e)=>{
        if(e.target.id==="rest_name"){
           searchKey=e.target.value;
        }
       else if(e.target.id==="rating_number"){
            ratingKey=e.target.value;
        }
         
     setResturant(Data.filter((e)=>{
        return e[" name"].toLowerCase().includes(searchKey.toLowerCase()) && e[" rating"]>ratingKey 
     }))
    };
    return(
        <div>
        
      
        <div className="searchboxes">

        <div className="searchname">

        <input type="text" id="rest_name" placeholder="Search resturants" onChange={onSearch}/>

        </div>
        <div className="searchrating">
        <label for="rating">Minimum Rating:</label>
        <input type="number" id="rating_number" placeholder="0"name="rating" min="0" max="5" style={{width:"100px"}}  onChange={onSearch}/>
        </div>
        </div>
        <div className='Cards_main_container'>

       {resturant.map((e)=>{
    
      return  <SingleCard key ={e[" _id"][" $oid"]} {...e}/>
      
    })}
        </div>
        </div>
    );
}
export default Main;