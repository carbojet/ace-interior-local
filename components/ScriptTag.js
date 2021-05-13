import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

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
  const {loading,error,data} = useQuery(GET_SCRIPT_TAG);
  return(
  <p onLoad={() => {
    if(data.scriptTags.edges.length<=0 && !loading){
      createScript({
        variables:{ 
            input: {
              src:'ace-form',
              displayScope:"ALL"
            }
          },
          refetchQueries:[{query:CREATE_SCRIPT_TAG}] 
      });
    }
  }}>

  </p>)
}
export default ScriptTag;