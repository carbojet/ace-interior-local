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

function ScriptTag(){
  const {loading,error,data} = useQuery(GET_SCRIPT_TAG);
  if(!loading){
    console.log(data)
    if(data.scriptTag.edges.length<=0){
      console.log('no script yet')
    }
  }
  
  return(
    <p>test</p>
  )
}
export default ScriptTag;