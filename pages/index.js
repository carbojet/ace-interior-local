import React,{Component} from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import {
  Page,
  Heading,
  Card
} from '@shopify/polaris';

import ScriptTag from '../components/ScriptTag';

export default class App extends Component{  

    constructor(props) {
        super(props)
    }


    render(){
        return (
            <Page title={<Heading>Store Products</Heading>} fullWidth>
              <Card sectioned>
                product list
                <ScriptTag/>
              </Card>                  
            </Page>
        );
    }  
}