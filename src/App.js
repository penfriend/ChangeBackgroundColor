import React,{useState, useEffect} from 'react';
import './App.css';

// react-dev-tools

function App() {
  const [{ top, bottom }, setColors] = useState({
    top: '#000',
    bottom: '#fff'
  });

  const [back, setBack] = useState('');

  const handleClick = () => {
    setBack(`linear-gradient(to top, ${top}, ${bottom})`);
  }

  const handleChange = (event) => {
    const { name, value} = event.target;
    setColors(prevColors => ({
      ...prevColors,
      [name]: value // 
    }));
  }

  useEffect(() => {
    console.log('rerender');
    let reg = /[#][0-9A-F]{6}/i;
    const ok = reg.test(top) && reg.test(bottom);

    if(ok) {
      handleClick();  // #12345
    }
  }, [top, bottom]);

  return (
    <div action="#" className="App" style={{background: back}}>
      <input value={top} name='top' onChange={handleChange} />
      <input value={bottom} name='bottom' onChange={handleChange}/>
    </div>
  );
}

export default App;
