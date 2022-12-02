/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Search from './Search';

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import useGoogle from '../useGoogle';

const SearchPageHeader = styled.div`
display: flex;
position: sticky;
top:0;
z-index: 100;
background-color: white;
align-items: flex-start;
padding:30px;
border-bottom: 1px solid lightgray;
img {
    height: 50px;
    margin-right: 50px;
    }
`

const SearchPageOptions = styled.div`
    display: flex;
    align-items: center;
    color:gray;
    margin-top: 30px;
    a {
        text-dicoration: none;
        color:gray;
        marign-left: 5px;
       }
`
const Options = styled.div`
    margin-left: ${props => props.right ? "80px": "0px"};
    display: flex;
    align-items: center;
`

const SearchPageOption = styled.div`
    dispaly: flex;
    align-items: center;
    margin-right: 20px;`




const SearchPage = () => {
    const [  {term}  ] = useStateValue();
    const { data } = useGoogle(term);
    console.log(data);
    return (
        <div> 
            <SearchPageHeader>
                <Link to="/">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png' alt='google-logo' />
                </Link>
                <div>
            <Search hide />
            <SearchPageOptions>
                <Options>
                    <SearchPageOption>
                        <SearchIcon /><Link to="/all">All</Link>
                    </SearchPageOption>
                    <SearchPageOption>
                        <DescriptionIcon /><Link to="/all">News</Link>
                    </SearchPageOption>
                    <SearchPageOption>
                        <ImageIcon /><Link to="/all">Images</Link>
                    </SearchPageOption>
                    <SearchPageOption>
                        <LocalOfferIcon /><Link to="/all">Shopping</Link>
                    </SearchPageOption>
                    <SearchPageOption>
                        <RoomIcon /><Link to="/all">Maps</Link>
                    </SearchPageOption>
                    <SearchPageOption>
                        <MoreVertIcon /><Link to="/all">More</Link>
                    </SearchPageOption>
                </Options>
                <Options right>
                    <SearchPageOption>
                        <Link to="/settings">Settings</Link>
                    </SearchPageOption>
                    <SearchPageOption>
                        <Link to="/tools">Tools</Link>
                    </SearchPageOption>
                </Options>
            </SearchPageOptions>
        </div>
            </SearchPageHeader>
            {term && (
                <SearchPageResults>
                    <p className="resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="results">
                            <SearchPage href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img src={item.pagemap?.cse_image[0]?.src} alt="" />
                                )}
                                {item.displayLink}
                            </SearchPage>
                            <SearchPageResultTitle href={item.link}>
                                <h2>{item.title}</h2>
                            </SearchPageResultTitle>
                            <SearchPageResultDesc>{item.snippet}</SearchPageResultDesc>
                        </div>
                    ))}
                </SearchPageResults>
            )}
        </div>
    )
}
export default SearchPage;