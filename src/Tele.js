import React from 'react';
import { Layout, Card,Menu, Breadcrumb, Carousel,Modal, Button} from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import a from './pic/13.jpg';
import b from './pic/14.jpg';
import c from './pic/15.jpg';
import d from './pic/16.png';
import e from './pic/17.png';
import f from './pic/18.png';
import g from './pic/19.png';
import h from './pic/20.png';
import i from './pic/21.png';
import j from './pic/22.png';
import k from './pic/23.png';
import l from './pic/24.jpg';
import m from './pic/25.jpg';
import n from './pic/26.jpg';
import o from './pic/27.jpg';
import p from './pic/28.jpg';
import q from './pic/29.png';
import r from './pic/30.png';
import s from './pic/31.png';
import t from './pic/32.png';
import u from './pic/33.png';
import v from './pic/34.png';
const { Header, Content, Footer } = Layout;
class Tele extends React.Component{

  render(){
    const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 4,

};

    return(
      <Layout >
     <Header style={{ padding:'0px',position: 'absolute',top:'0px',left:'0px',opacity:'0.6', width: '100%',zIndex:600,backgroundColor:'#000'}}>
       <div className="logo" style={{height:'100%',width:'10%',float:'left',display:'inline-block'}}>
         <img src={r}></img>
       </div>
       <div style={{width:'80%',float:'left'}}>
     <Menu
       theme="dark"
       mode="horizontal"
       defaultSelectedKeys={['2']}
       style={{ lineHeight: '64px',display:'block',width:'38%',margin:'auto',backgroundColor:'#000'}}
     >
       <Menu.Item key="1">Our Brands</Menu.Item>
       <Menu.Item key="2">Products</Menu.Item>
       <Menu.Item key="3">Gallery</Menu.Item>
       <Menu.Item key="4">Contact Us</Menu.Item>
     </Menu>
     </div>
     <div style={{width:'10%',height:'100%',float:'right',textAlign:'center'}}>
       <img src={v} style={{height:'75%',padding:'10%',margin:'auto'}}></img>
     </div>
     </Header>
     <Content style={{width:'100%'}}>
       <div >
       <Carousel autoplay>
         <div><img src={a} style={{width:'100%'}}></img></div>
         <div><img src={c} style={{width:'100%'}}></img></div>
         <div><img src={b} style={{width:'100%'}} ></img></div>
       </Carousel>
       </div>
       <div style={{width:'90%',marginTop:'-2%',marginLeft:'auto',marginRight:'auto'}}>
         <Card style={{padding:'20px'}}>
           <h1 style={{textAlign:'center',fontWeight:700,fontFamily:'Raleway'}}><span style={{fontWeight:'900',fontSize:'150%'}}>WSPV</span> India Pvt Ltd</h1>
           <div style={{display:'flex'}}>
           <p style={{fontSize:'20px',maxWidth:'50%',padding:'30px',wordSpacing:'10px',lineHeight:'2',fontFamily:'Oswald'}}>Incorporated in 2003 as a clothing company with an intention to touch and change the lives of people around the world,WSPV was the vision
              of youngentrepreneurs Withcountless years of marketing, manufacturing and exporting experience
              between us, but we were dissatisfied with other companies and job opportunities we had encountered.
              Finally we realized that the only way to find a company we wanted to be a part of was to create that company.</p>
            <div style={{display:'flex',flexDirection:'column',margin:'auto',width:'35%',height:'35%',alignItems:'center'}}>
              <img src={g} style={{margin:'20px',width:'100%',height:'100%'}}/>
            </div>
            </div>
         </Card>
       </div>
       <div>
         <Card style={{width:'90%',marginTop:'-2%',marginLeft:'auto',marginRight:'auto',marginTop:'3% '}}>
           <h1 style={{fontWeight:'bold',textAlign:'center',fontFamily:'Raleway'}}><span style={{textDecoration:'underline',fontSize:'120%',textDecorationStyle:'dashed'}}>Our</span> Brands</h1>
           <div style={{margin:'2%'}}>
             <Slider {...settings} >
             <div style={{textAlign:'center',borderRight:'1px dashed #000'}}><img src={h} style={{display:'inline-block'}}></img></div>
             <div style={{textAlign:'center',borderRight:'1px dashed #000'}}><img src={i} style={{display:'inline-block'}}></img></div>
             <div style={{textAlign:'center',borderRight:'1px dashed #000'}}><img src={j} style={{display:'inline-block'}}></img></div>
             <div style={{textAlign:'center',borderRight:'1px dashed #000'}}><img src={k} style={{display:'inline-block'}}></img></div>
             </Slider >

           </div>
         </Card>
       </div>
       <div>
         <Card style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:'3% '}}>
            <h1 style={{fontWeight:'bold',textAlign:'center',fontFamily:'Raleway'}}><span style={{textDecoration:'underline',fontSize:'120%',textDecorationStyle:'dashed'}}>Our</span> Products</h1>
            <div style={{display:'flex',marginTop:'25px'}}>
            <Card bodyStyle={{padding:'1%'}} style={{width:'20%',height:'20%'}}><img src={l} style={{width:'100%'}}></img></Card>
            <Card bodyStyle={{padding:'1%'}} style={{width:'20%',height:'20%'}}><img src={m} style={{width:'100%'}}></img></Card>
            <Card bodyStyle={{padding:'1%'}} style={{width:'20%',height:'20%'}}><img src={n} style={{width:'100%'}}></img></Card>
            <Card bodyStyle={{padding:'1%'}} style={{width:'20%',height:'20%'}}><img src={o} style={{width:'100%'}}></img></Card>
            <Card bodyStyle={{padding:'1%'}} style={{width:'20%',height:'20%'}}><img src={p} style={{width:'100%'}}></img></Card>
            </div>
         </Card>
     </div>
       <div>
        <Card style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:'3% '}}>
             <h1 style={{fontWeight:'bold',textAlign:'center',fontFamily:'Raleway'}}>Contact Us</h1>
              <p style={{fontSize:'18px',maxWidth:'30%',padding:'30px',wordSpacing:'10px',lineHeight:'2',fontFamily:'Oswald',margin:'auto'}}>
              WSPV INDIA PVT. LTD<br/>
            297/7, Chandra Reddy, Building<br/>
               Opp. KEB (Opp.ANR Kalyanamamtapa)
               Anekal Road,Krishna Reddy Layout
               <br/>
               <br/>
               Email:info@wspvindia.com
               Web: www.wspvindia.com</p>

         </Card>
       </div>
       <div style={{width:'90%',margin:'auto',marginBottom:'-2%',position:'relative',top:'0px',zIndex:500}}>
          <img src={q} style={{width:'100%'}}></img>
       </div>
       <div style={{background:'#333',height:'5%',width:'100%',position:'absolute',padding:'4%'}}>
         <p style={{color:'white',textAlign:'center',width:'70%',margin:'auto'}}>WSPV is a global company, providing access to a diverse portfolio of products and services that aim to add individual and social value to its member
           s lives and grant them with opportunities for both professional and personal development. </p>
       </div>
       <div style={{background:'#141414',height:'12%',width:'100%',display:'flex',marginTop:'6%',flexDirection:'column',fontFamily:'Raleway'}}>
         <h1 style={{color:'#fff',textAlign:'center',margin:'10%'}}><span style={{fontWeight:'bold',fontSize:'120%'}}>WSPV</span> India Pvt. Ltd</h1>
         <div style={{display:'flex',justifyContent:'space-around'}}>
           <div style={{color:'#fff'}}>
           <h1 style={{color:'#fff'}}>QUICK LINKS</h1>
          <ul>
            <li>WSPV OPPURTUNITY</li>
            <li>SUCCESS STORIES</li>
            <li>GALLERY</li>
            <li>LEGAL</li>
            <li>GRIEVANCE CELL</li>
          </ul>
       </div>
         <div style={{color:'#fff'}}>
           <h1 style={{color:'#fff'}}>COMPANY</h1>
            <ul>
               <li>ABOUT US</li>
               <li>VISION</li>
               <li>MISSION</li>
               <li>EXECUTIVE TEAM</li>
               <li>OUR BRANDS</li>
            </ul>
         </div>
         <div style={{color:'#fff'}}>
           <h1 style={{color:'#fff'}}>PRODUCTS</h1>
             <ul>
              <li>SAREES</li>
               <li>SHIRTS</li>
               <li>JEANS</li>
               <li>T SHIRT</li>
               <li>KURTIS</li>
              </ul>
         </div>
       </div>
       <div style={{display:'flex',width:'8%',margin:'auto'}}>
         <img src={s}></img>
         <img src={t}></img>
         <img src={u}></img>
       </div>
      </div>
      <div style={{background:'#333',height:'2%',width:'100%',padding:'1.5%'}}>
        <p style={{color:'white',textAlign:'center',width:'70%',margin:'auto'}}>© 2017 WSPV INDIA PVT.LTD. All Rights Reserved. | Designed By Hashim </p>
      </div>
     </Content>
   </Layout>
    )
  }
}
export default Tele;
