import './App.css';

import {useRef} from 'react';

const App = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ Open the file input box on click of another element
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // 👇️ Reset file input
    event.target.value = null;

    // 👇️ Is now empty
    console.log(event.target.files);

    // 👇️ Can still access the file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };

  return (
    <div>
      <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <button onClick={handleClick}>Open file upload box</button>
    </div>
  );
};

export default App;
