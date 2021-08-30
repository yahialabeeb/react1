import React from 'react';
import HornedBeasts from './HornedBeasts';
class Main extends React.Component {
    render() {
        return (
            <main>
                <HornedBeasts
                title="Unicorn Head"
                imgurl=  "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" 
                describtion= "A unicorn and a narwhal nuzzling their horns" />
                <HornedBeasts />
            </main>
        )

    }
}


export default Main;