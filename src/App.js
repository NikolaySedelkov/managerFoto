import './App.css';
import { useRef, useState } from 'react';
import Img from "./Img.js"

function App() {
  const fileRef = useRef();
  const [uploadImg, setUploadImg] = useState([]);
  const delImg = url => {
    setUploadImg(uploadImg.filter(img => img !== url))
  }
  const handleChange = () => {
    setUploadImg([...uploadImg, URL.createObjectURL(fileRef.current.files[0])])
  }
  return (
    <div className="App">
      <div id="conteiner__inputFile">
        <input type="file" id="inputFile" ref={fileRef} onChange={handleChange}/>
        <label id="labelFile" htmlFor='inputFile'>Загрузите изображение</label>
        <div id="sliser__inputFile"></div>
      </div>
      <div id="uploadsImg">
        {
          uploadImg.map(imgUrl=>
            <Img key={imgUrl} url={imgUrl} func={delImg}/>)
        }
      </div>
    </div>
  );
}

export default App;
