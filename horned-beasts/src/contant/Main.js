import React from 'react';
import HornedBeasts from './HornedBeasts';
class Main extends React.Component {
    render() {
        return (
            <main>
                <HornedBeasts
                title="UniWhal"
                imgurl= "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" 
                describtion= "A unicorn and a narwhal nuzzling their horns" />
                <HornedBeasts />
            </main>
        )

    }
}


export default Main;