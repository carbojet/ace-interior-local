import React,{Component} from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

export default class ScriptTag extends Component{
  constructor(props) {
      super(props)
      this.state = {
        getScriptTags:{}
      }
      const GET_SCRIPT_TAG = gql `
        query{
          scriptTags(first:5){
            edges{
              node{
                id
                src
                displayScope
              }
            }
          }
        }
      `;
      const CREATE_SCRIPT_TAG = gql `
        mutation scriptTagCreate($input : ScriptTagInput!){
          scriptTagCreate(input : $input){
            scriptTag{
              id
            }
            userErrors{
              field
              message
            }
          }
        }
        `;
  }
  handleScriptTagOnload = async (_event) => {
    try{
      const {loading,error,data} = await useQuery(this.GET_SCRIPT_TAG);
      if(!loading){
        if(data.scriptTags.edges.length<=0){
          const result = await useMutation(this.CREATE_SCRIPT_TAG,{
            variables : {
              input : {
                src:'ace-form',
                displayScope:"ALL"
              }
            },
            refetchQueries:[{query:GET_SCRIPT_TAG}]
          })
          this.setState({getScriptTags:result})
        }
      }
    }catch(error){
      console.log(error)
    }
  }
  componentDidMount(){
    this.handleScriptTagOnload()
  }
  render(){
    return(
      <p>testing...{console.log(this.state.getScriptTags)}</p>
    )
  }
  
}

/*
const GET_SCRIPT_TAG = gql `
  query{
    scriptTags(first:5){
      edges{
        node{
          id
          src
          displayScope
        }
      }
    }
  }
`;

const CREATE_SCRIPT_TAG = gql `
mutation scriptTagCreate($input : ScriptTagInput!){
  scriptTagCreate(input : $input){
    scriptTag{
      id
    }
    userErrors{
      field
      message
    }
  }
}
`;


function ScriptTag (){
  const [createScript] = useMutation(CREATE_SCRIPT_TAG);

  const createnewScript = useCallback( async ()=> {
    const {loading,error,data} = await useQuery(GET_SCRIPT_TAG);
    if(!loading){
      if(data.scriptTags.edges.length<=0){
        const result = await createScript({
          variables:{ 
              input: {
                src:'ace-form',
                displayScope:"ALL"
              }
            }
        });
        dataSet(result)
      }
    }
  })
  return(
    <p onLoad={createnewScript}>{JSON.stringify(data)}</p>
  )
}

export default ScriptTag;
*/