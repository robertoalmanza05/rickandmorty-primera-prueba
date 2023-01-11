import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar';

export default function Index() {

  var x= 20;
  const [contador, setContador] = useState(x);

const onchangeCounterMenor= function(event){
setContador(contador-1) 
}
const onchangeCounterMayor= function(){
  setContador(contador+1)
}
const onReset= function(){
  setContador(x)
}
const [images, setImages]= useState([])
const [imagesURLs, setImageURLs]= useState([])

const onImageChange=function(e){
setImages([...e.target.files]);


}

useEffect(() => {
  if(images.length<1) return;
  const newImageUrls =[];
  images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
  setImageURLs(newImageUrls);

}, [images]);

  return (


    

<div
style={{
       
      }} >
        <NavBar/>
      <div style={
{
  justifyContent:'center',
  gap:'10px',
  alignItems:'center',
  display:'flex',
  
  paddingTop:'30px'


}    }>  
<button onClick={onchangeCounterMenor} style={{
        width: '100px',
        height:'30px'
       

      }} />
<h1>{contador} </h1>

<button onClick={onchangeCounterMayor}
style={{
  width: '100px',
  height:'30px'

}} 


/>
</div>
<button style={
  {
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    justifyItems:'center',
    
  }
} onClick={onReset}>Reset</button>


<input type="file" multiple accept="image/*" onChange={onImageChange} />
{imagesURLs.map(imageSrc => <img style={{
width:'400px',
height:'400px',
borderRadius:'100px',
borderStyle:'solid',
borderColor:'green'

}} src={imageSrc} />)}
</div>
    )
}

