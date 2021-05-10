import React,{Component} from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import {
  Page,
  Frame,
  Layout,
} from '@shopify/polaris';
import ProductList from '../components/ProductList';

export default class App extends Component{  

    constructor(props) {
        super(props)
    }


    render(){
        return (
            <Page title={<Heading>Store Products</Heading>} fullWidth>
              <Card sectioned>
                  <ProductList />
              </Card>                  
            </Page>
        );
    }  
}