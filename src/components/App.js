import React, { Component } from 'react';
import Form from './Form'
import CommentList from './CommentList'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Botify</h1>
                </header>
                <div>
                    {/* Call Form component */}
                    <Form />
                    {/* Call CommentList component */}
                    <CommentList />
                </div>
            </div>
        );
    }
}

export default App;
