import React from 'react';
import { Layout, Card,Menu, Breadcrumb, Carousel,Modal, Button} from 'antd';
import Foot from './Foot';
import Body from './Body';
import Head from './Head';

import s from './pic/31.png';
import t from './pic/32.png';
import u from './pic/33.png';
import w from './pic/35.png';

const {Header, Content, Footer } = Layout;
class Main extends React.Component{

  render(){

    return(
      <div>
        <Head/>
        <Content style={{width:'100%'}}>
       <Body/>
       <Foot/>
     </Content>
   </div>
    )
  }
}
export default Main;
