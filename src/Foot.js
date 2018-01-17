import React from 'react';
import { Layout, Card,Menu, Breadcrumb, Carousel,Modal, Button} from 'antd';
import s from './pic/31.png';
import t from './pic/32.png';
import u from './pic/33.png';
import q from './pic/29.png';
import x from './pic/30.png';
import y from './pic/36.png';
import z from './pic/37.png';
import a from './pic/38.png';
import './App.css';
class Foot extends React.Component{
  render(){
    return(
      <div>
      {/*<div style={{background:'#333',height:'3%',width:'100%',position:'absolute',padding:'4%'}}>
        <p style={{color:'white',textAlign:'center',width:'70%',margin:'auto'}}>WSPV is a global company, providing access to a diverse portfolio of products and services that aim to add individual and social value to its member
          s lives and grant them with opportunities for both professional and personal development. </p>
      </div>*/}
      <div style={{background:'#141414',height:'13%',width:'100%',marginTop:'8%',fontFamily:'Raleway',padding:'3%'}}>

        <div className='foot' style={{display:'flex',justifyContent:'space-around'}}>
          <div style={{display:'flex',flexDirection:'column',margin:'auto'}}>
            <h1 style={{color:'#fff',textAlign:'right'}}><span style={{fontWeight:'bold',fontSize:'120%'}}>WSPV</span> India Pvt. Ltd</h1>


            <div style={{display:'flex',color:'#fff'}}>
              <div><img src={y}></img></div>
              <p style={{marginLeft:5,}}>297/7, Chandra Reddy, Building<br/>Opp. KEB (Opp.ANR Kalyanamamtapa)<br/>
                 Anekal Road,Krishna Reddy Layout
                 </p>
            </div>
               <div style={{display:'flex',color:'#fff'}}>
                 <div >
                   <img src={z}></img>
                 </div>
                 <p style={{marginLeft:5}}>Email:info@wspvindia.com</p>
               </div>
          </div>
          <div style={{color:'#999',margin:'auto'}}>
          <h1 style={{color:'#fff'}}>QUICK LINKS</h1>
         <ul>
           <li>WSPV OPPURTUNITY</li>
           <li>SUCCESS STORIES</li>
           <li>GALLERY</li>
           <li>LEGAL</li>
           <li>GRIEVANCE CELL</li>
         </ul>
      </div>
        <div style={{color:'#999',margin:'auto'}}>
          <h1 style={{color:'#fff'}}>COMPANY</h1>
           <ul>
              <li>ABOUT US</li>
              <li>VISION</li>
              <li>MISSION</li>
              <li>EXECUTIVE TEAM</li>
              <li>OUR BRANDS</li>
           </ul>
        </div>
        <div style={{color:'#999',margin:'auto'}}>
          <h1 style={{color:'#fff'}}>PRODUCTS</h1>
            <ul>
             <li>SAREES</li>
              <li>SHIRTS</li>
              <li>JEANS</li>
              <li>T SHIRT</li>
              <li>KURTIS</li>
             </ul>
        </div>
        <div className='foot1' style={{height:'10%'}}>
          <h1 style={{color:'#fff',fontFamily:'Raleway'}}>FOLLOW US</h1>
          <div style={{display:'flex',width:100}}>
          <img className='twitter' src={s} ></img>
          <img src={t} className='facebook' ></img>
          <img src={u} className='insta'></img>
        </div>
        </div>

      </div>
    </div>
     <div style={{background:'#333',height:'3%',width:'100%',padding:'1.5%'}}>
       <p style={{color:'white',textAlign:'center',width:'70%',margin:'auto'}}>© 2017 WSPV INDIA PVT.LTD. All Rights Reserved. | Designed By Hashim </p>
     </div>
     </div>
    )
  }
}
export default Foot
;
