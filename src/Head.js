import React from 'react';
import { Layout, Card,Menu, Breadcrumb, Carousel,Modal, Button,Icon,Dropdown} from 'antd';
import r from './pic/30.png';
import v from './pic/34.png';
import s from './pic/31.png';
import t from './pic/32.png';
import u from './pic/33.png';
import w from './pic/35.png';
import './App.css'
const { Header } = Layout;
class Head extends React.Component{


  render(){
    const menu = (
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{borderBottom:'0px',paddingBottom:'0px',lineHeight:'450%'}}
      >
        <Menu.Item key="1">Our Brands</Menu.Item>
        <Menu.Item key="2">Products</Menu.Item>
        <Menu.Item key="3">Gallery</Menu.Item>
        <Menu.Item key="4">Contact Us</Menu.Item>
      </Menu>
);

    return(
      <div>

        <Layout>
        <Header  style={{padding:'0px'}} >
          <div  style={{backgroundColor:'#0073B5',height:'80%'}}>
            <div  style={{height:'100%',padding:5 }}>
              <img src={w} style={{height:'inherit',padding:'0.25%',display:'inline-block',float:'left'}}></img>
              <p style={{lineHeight:'200%',color:'white',marginBottom:'0px',display:'inline-block',float:'left'}}>info@wspvindia.com</p>
                <div style={{float:'right',width:'100px'}}>
                  <div style={{display:'flex',width:'100%'}}>
                  <img src={s}></img>
                  <img src={t}></img>
                  <img src={u}></img>
                  </div>
                </div>

            </div>


          </div>

          <div className='col-12' style={{ padding:'0px',height:'inherit',position: 'relative',top:'0px',left:'0px',zIndex:450,backgroundColor:'#fff',display:'flex',justifyContent:'space-around'}}>
          <div  style={{display:'inline-block'}}>
            <img  src={r}></img>
          </div>
          <div className="icon iconVan" >

              <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                <Icon type="bars"  />
              </Dropdown>
         </div>

          <div className="menu one">
            {menu}
        </div>
        <div className="one" style={{width:'10%',height:'100%',float:'right',textAlign:'center'}}>
          <img src={v} style={{height:'75%',padding:'10%',margin:'auto'}}></img>
        </div>
        </div>
        </Header>
        </Layout>

      </div>
    )
  }
}
export default Head
;
