import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link} from "react-router-dom";
import Search from "./search";
import './searchPage.css';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function SeacrhPage(){
    const [{term},dispatch] =useStateValue();
    //Live API call

    const {data} =useGoogleSearch(term); 

   //MOCK api call
   //const data = Response;

    console.log(data);
 
    return( 
    <div className="searchPage">
        <div className="searchPage_header">
           <Link to="/">
           <img className="searchPage_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="" />
           </Link>

        
        <div className="searchPage_headerBody">
            <Search hideButtons/>

           <div className="searchPage_options">
                 
                 <div className="searchPage_optionsLeft">

                     <div className="searchPage_option">
                         <SearchIcon/>
                         <Link to="/all">All</Link>
                     </div>
                     <div className="searchPage_option">
                     <FeedIcon/>
                         <Link to="/all">news</Link>
                    </div>
                    <div className="searchPage_option">
                    <ImageIcon/>
                         <Link to="/all">Images</Link>

                    </div>
                    <div className="searchPage_option">
                    <LocalOfferIcon/>
                         <Link to="/all">Shopping</Link>
                    </div>
                    <div className="searchPage_option">
                    <LocationOnIcon/>
                         <Link to="/all">Location</Link>
                    </div>
                    <div className="searchPage_option">
                    <MoreVertIcon/>
                         <Link to="/all">More</Link>
                    </div> 
                         
                         
                         
                         
                        
                     
                 </div>

                 <div className="searchPage_optionsRight">
                     <div className="searchPage_option">
                         <Link to="/Setting">Setting</Link>
                     </div>
                     <div className="searchPage_option">
                         <Link to="/tools">Tools</Link>
                     </div>

                 </div>


           </div>
 

        </div>
        </div>
        {term && (
            <div className="searchPage_results">
                <p className="searchPage_resultCount">
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
                    for {term}
                </p>

                {data?.items.map(item => (
                    <div className="searchPage_result">
                        <a href={item.link}>
                            {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                                <img className="searchPage_resultImage" src={item.pagemap?.cse_image?.length>0&& item.pagemap?.cse_image[0]?.src} alt="" />
                            )}
                           
                           
                            {item.displayLink}
                        </a>
                        <a className="searchPage_resultTitle" href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className="searchPage_resultSnippet">{item.snippet}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
    )
}
export default SeacrhPage;