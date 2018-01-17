import React from 'react';
import { Layout, Card,Menu, Breadcrumb, Carousel,Modal, Button} from 'antd';
import a from './pic/13.jpg';
import z from './pic/12.png';
import b from './pic/14.jpg';
import c from './pic/15.jpg';
import h from './pic/20.png';
import g from './pic/19.png';
import i from './pic/21.png';
import j from './pic/22.png';
import k from './pic/23.png';
import l from './pic/24.jpg';
import m from './pic/25.jpg';
import n from './pic/26.jpg';
import o from './pic/27.jpg';
import p from './pic/28.jpg';
import CardTemp from './CardTemp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
class Body extends React.Component{
  render(){
    const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 4,

};

    return(
      <div>
      <div >
      <Carousel  autoplay>
        <div><img src={a} style={{width:'100%'}}></img></div>
        <div><img src={c} style={{width:'100%'}}></img></div>
        <div><img src={b} style={{width:'100%'}} ></img></div>
        <div><img src={z} style={{width:'100%'}}></img></div>
      </Carousel>
      </div>
      <div style={{width:'90%',marginTop:'-2%',marginLeft:'auto',marginRight:'auto'}}>
        <Card style={{padding:'20px'}}>
          <h1 style={{textAlign:'center',fontWeight:900,fontFamily:'Raleway'}}><span style={{fontWeight:'900',fontSize:'150%'}}>WSPV</span> India Pvt Ltd</h1>
          <div className='body'>
          <p className='body1'>Incorporated in 2003 as a clothing company with an intention to touch and change the lives of people around the world,WSPV was the vision
             of youngentrepreneurs Withcountless years of marketing, manufacturing and exporting experience
             between us, but we were dissatisfied with other companies and job opportunities we had encountered.
             Finally we realized that the only way to find a company we wanted to be a part of was to create that company.</p>
           <img className='bodyimg' src={g}/>
           </div>
        </Card>
      </div>
      <div>
        <Card style={{width:'90%',marginTop:'-2%',marginLeft:'auto',marginRight:'auto',marginTop:'3% '}}>
          <h1 style={{fontWeight:'bold',textAlign:'center',fontFamily:'Raleway'}}><span style={{textDecoration:'underline',fontSize:'120%',textDecorationStyle:'dashed'}}>Our</span> Brands</h1>
          <div  style={{margin:'2%'}}>
            <Slider className='body2' {...settings} >
            <div style={{textAlign:'center',borderRight:'1px dashed #000'}}><img src={h} style={{display:'inline-block'}}></img></div>
            <div style={{textAlign:'center',borderRight:'1px dashed #000'}}><img src={i} style={{display:'inline-block'}}></img></div>
            <div style={{textAlign:'center',borderRight:'1px dashed #000'}}><img src={j} style={{display:'inline-block'}}></img></div>
            <div style={{textAlign:'center',borderRight:'1px dashed #000'}}><img src={k} style={{display:'inline-block'}}></img></div>
            </Slider >

          </div>
        </Card>
      </div>
      <div>
        <Card style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:'3% ',borderRadius:'15px'}}>
           <h1 style={{fontWeight:'bold',textAlign:'center',fontFamily:'Raleway'}}><span style={{textDecoration:'underline',fontSize:'120%',textDecorationStyle:'dashed'}}>Our</span> Products</h1>
           <div className="body3" style={{display:'flex',marginTop:'25px'}}>
           <Card className="bodyCard" bodyStyle={{padding:'1%'}} style={{margin:4,borderRadius:'15px'}}><img src={l} style={{borderRadius:'15px'}}></img></Card>
           <Card className="bodyCard" bodyStyle={{padding:'1%'}} style={{margin:4,borderRadius:'15px'}}><img src={m} style={{borderRadius:'15px'}}></img></Card>
           <Card className="bodyCard" bodyStyle={{padding:'1%'}} style={{margin:4,borderRadius:'15px'}}><img src={n} style={{borderRadius:'15px'}}></img></Card>
           <Card className="bodyCard" bodyStyle={{padding:'1%'}} style={{margin:4,borderRadius:'15px'}}><img src={o} style={{borderRadius:'15px'}}></img></Card>
           <Card className="bodyCard" bodyStyle={{padding:'1%'}} style={{margin:4,borderRadius:'15px'}}><img src={p} style={{borderRadius:'15px'}}></img></Card>
           </div>
        </Card>
    </div>
    <div style={{width:'90%',marginLeft:'auto',marginRight:'auto',marginTop:'1.5%'}}>
    <div className='body4'  style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
      <div className="card"><CardTemp/></div>
      <div className="card"><CardTemp/></div>
      <div className="card"><CardTemp/></div>
    </div>
    </div>

      </div>
    )
  }
}
export default Body
;
