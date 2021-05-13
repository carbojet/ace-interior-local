import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {useEffect} from 'react';

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

function ScriptTag(){
  const [createScript] = useMutation(CREATE_SCRIPT_TAG);
  useEffect(() => {
    const {loading,error,data} = useQuery(GET_SCRIPT_TAG);
    if(!loading){
      console.log(data)
      if(data.scriptTags.edges.length<=0){
        createScript({
          variables:{ 
              input: {
                src:'ace-form',
                displayScope:"ALL"
              }
            }
        });
      }
    }
  }, [data]);
}

export default ScriptTag;