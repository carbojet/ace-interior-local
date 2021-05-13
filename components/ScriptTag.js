import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

const GET_SCRIPT_TAG = gql`
  query{
    scriptTags(first:1){
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

const CREATE_SCRIPT_TAG = gql`
  mutation scriptTagCreate($input : ScriptTagInput!){
    scriptTagCreate(input : $input){
      scriptTag{
        id
      }
      userErrors{
        filed
        message
      }
    }
  }
`;

function ScriptTag(){
  const [loading,error,data] = useQuery(GET_SCRIPT_TAG)
  if(!loading){console.log(data)}
}
export default ScriptTag;