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
    const result = useQuery(GET_SCRIPT_TAG);
    if(!result.loading){
      const scriptData = result.data; 
      console.log(scriptData)
      if(scriptData.scriptTags.edges.length<=0){
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
  }, [result]);
}

export default ScriptTag;