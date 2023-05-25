import {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

import "../style.scss";




const Trending = () => {

    const [endpoint,setEndpoint] = useState("day");

    const{data,loading}=useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab) => { // receiving the tab data from the child component (switchTabs) the if condition helps to decide the api endpoint to call whether its a week or a day.
        setEndpoint(tab === "Day" ? "day" : "week");
    }

    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data.results} loading={loading}/>
        </div>
    )
}

export default Trending