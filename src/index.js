import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ActionMov from './action';
import KidsandFam from './kidsandfamily';
import Bingeworthy from './bingeworthy';
import Nav from './nav'
import './index.css';

function MovieList() {
    return(
        <div>
            <Nav/>
            <ActionMov/>
            <KidsandFam/>
            <Bingeworthy/>

        </div>
    );
}
ReactDOM.render(<MovieList/>,document.getElementById('root'));



