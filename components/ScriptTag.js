import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {useEffect,useState} from 'react';

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
  const [data,dataSet] = useState(null)
  const [createScript] = useMutation(CREATE_SCRIPT_TAG);
  const createnewScript = createScriptTag( async ()=> {
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
  useEffect(() => {
    createnewScript()
  }, [createnewScript]);
  return(
    <p onLoad={createnewScript}>{JSON.stringify(data)}</p>
  )
}

export default ScriptTag;