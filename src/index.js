import React from 'react';
import ReactDOM from 'react-dom';
import Project from './project';
import Project1 from './project1';
import './index.css';

function MovieList() {
    return(
        <div>
            <Project/>
            <Project1/>
            <Project1/>
        </div>
    );
}
ReactDOM.render(<MovieList/>,document.getElementById('root'));



