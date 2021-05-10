import React,{Component} from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import {
  Page,
  Frame,
  Layout,
} from '@shopify/polaris';


export default class App extends Component{  

  constructor(props) {
    super(props)
  }


  render(){
    return (
      <Frame>
             testing...
      </Frame>
    );
  }  
}