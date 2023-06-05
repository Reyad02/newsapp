import './App.css';
import Navbar from './components/Navbar';
// import React, { Component } from 'react'
import News from './components/News';
import React, { useState } from 'react'

import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App =() => {///used for function based
// export default class App extends Component {///use for class based
  const apiKey=process.env.REACT_APP_NEWS_API;
  // constructor() {///use for class based
  //   super();
  //   this.state = {
  //     mode: 'light',
  //   };
  // }
  const pageSize=9;

  // state={///use for class based
  //   progress: 0
  // }

  const [progress, setprogress] = useState(0)
  const [mode,setMode]=useState("light")
  const [write, setwrite] = useState("black")

  // setProgress= (progress) =>{///use for class based
  //   this.setState({progress: progress})
  // }

  // render() {
    // const [mode, setMode] = this.setState({mode: 'light'});
    // let setMode="light";

    // const toggleMode = () => {///use for class based
    //   if (this.state.mode === 'light') {
    //     this.setState({ mode: 'dark' });
    //     document.body.style.backgroundColor = '#5F6368';
    //   } else {
    //     this.setState({ mode: 'light' });
    //     document.body.style.backgroundColor = 'white';
    //   }
    // };
    const toggleMode = () => {///use for function based
      if (mode === 'light') {
        setMode("dark");
        setwrite("light");
        document.body.style.backgroundColor = '#5F6368';
      } else {
         setMode("light");
         setwrite("dark");
        document.body.style.backgroundColor = 'white';
      }
    };

    return (
      <div>
        <Router>
          {/* use for class based */}
          {/* <Navbar mode={this.state.mode} toggleMode={toggleMode}/> */}
          {/* use for function based */}
          <Navbar mode={mode} write={write}toggleMode={toggleMode}/>
          {/* <Navbar /> */}
          {/* use for class based */}
          {/* <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          /> */}
          {/* use for function based */}

          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>   
            {/* use for class based */}
            {/* <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="us" category="general"/>}/>
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="us" category="business"/>}/>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}/>
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country="us" category="health"/>}/>
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="us" category="science"/>}/>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="us" category="sports"/>}/>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="us" category="technology"/>}/> */}
            
            {/* use for function based */}
            <Route exact path='/' element={<News setProgress={setprogress} apiKey={apiKey}  key="general" pageSize={pageSize} country="us" mode={mode} write={write} category="general"/>}/>
            <Route exact path='/business' element={<News setProgress={setprogress} apiKey={apiKey}  key="business" pageSize={pageSize} country="us" mode={mode} write={write} category="business"/>}/>
            <Route exact path='/entertainment' element={<News setProgress={setprogress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="us" mode={mode} write={write} category="entertainment"/>}/>
            <Route exact path='/health' element={<News setProgress={setprogress} apiKey={apiKey}  key="health" pageSize={pageSize} country="us" mode={mode} write={write} category="health"/>}/>
            <Route exact path='/science' element={<News setProgress={setprogress} apiKey={apiKey}  key="science" pageSize={pageSize} country="us" mode={mode} write={write} category="science"/>}/>
            <Route exact path='/sports' element={<News setProgress={setprogress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="us" mode={mode} write={write} category="sports"/>}/>
            <Route exact path='/technology' element={<News setProgress={setprogress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="us" mode={mode} write={write} category="technology"/>}/>
          </Routes>
        </Router>

      </div>
    )
  }
// }

export default App//use for function

