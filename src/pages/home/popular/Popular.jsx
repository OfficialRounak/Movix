import {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

import "../style.scss";


 

const Popular = () => {

    const [endpoint,setEndpoint] = useState("movie");

    const{data,loading}=useFetch(`/${endpoint}/popular`)

    const onTabChange = (tab) => { // receiving the tab data from the child component (switchTabs) the if condition helps to decide the api endpoint to call whether its a week or a day.
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    }

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>What's Popular ...</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    )
}

export default Popular;