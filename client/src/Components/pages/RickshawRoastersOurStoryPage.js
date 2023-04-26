import React from 'react';
import './RickshawRoastersOurStoryPage.css';
import RickshawRoastersHeader from '../RickshawRoastersHeader';
import RickshawRoastersFooter from '../RickshawRoastersFooter';

class RickshawRoastersOurStoryPage extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render(){
        return(
            <div>
                <RickshawRoastersHeader />
                <main id="our-story-page">

                </main>
                <RickshawRoastersFooter />
            </div>
        );
    }
}

export default RickshawRoastersOurStoryPage;