import React from "react";
import './search.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";



function Search({hideButtons= false}){
    const [state,dispatch]=useStateValue();
    const [input,setInput]=useState("");
    const history = useNavigate();

    const search = e => {
     e.preventDefault();
    console.log("You hit the search button");
    //when you click on search button you will be redirected to the search page
    //with the help of:
    history('/search');
    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input, 
    })
    }
    return(
        //We used the form instead of div because we want ,wehn someone hits enter
        // in the search bar the search function calls in 
        //to do that we used <form >
        //and in the Button tag 
        // we added type="submit"
        

        //.preventDefault() 
        //this function basically prevents the default procedure 
        //in case of submit button it prevents it from reloading and resetting it to default 
        //when submit is clicked

        //e=>setInput(e.target.value) 
        // it sets the value "input" with value in the search box

        <form className="search">
            <div className="search_input">
                <SearchOutlinedIcon className="search_inputIcon"/>
                
                <input value={input} onChange={e=>setInput(e.target.value)}/>
                <MicOutlinedIcon/>
            </div> 

            {!hideButtons?(
                <div className="search_buttons">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
           </div>

            ):(
                <div className="search_buttons">
                 <Button className="search_buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                 <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
            </div>
            ) }
        </form>

    )
};

export default Search;