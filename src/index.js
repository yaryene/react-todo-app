import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
// stylesheet
import './functionBased/App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
    <StrictMode>
        <Router>
            <Routes>
            <Route path = '/' element = {<TodoContainer />}/>
            </Routes>
        </Router>
    </StrictMode>, 
    document.getElementById('root'));