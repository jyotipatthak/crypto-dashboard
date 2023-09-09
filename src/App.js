import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
 

function App() {
	return (
    <div class="bg-white sm:w-full relative">
      <Header />
		<div>
         <Main />
	    </div>
	</div>		   
  );
}
export default App;
