function Img({url, func}){
    const delImg = fUrl =>{
        func(fUrl);
    }
    return (
        <div className="conteiner__img"> 
            <img src={url}/>
            <span onClick={(e)=>delImg(url)}>X</span>
        </div>
    )
}


export default Img;