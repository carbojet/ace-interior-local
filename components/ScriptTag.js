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
  console.log(data)
  return(
    <p>test</p>
  )
}
export default ScriptTag;