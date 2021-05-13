import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';


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
   return(
     <p>this is script to create new for first time app installed</p>
   ) 
}
export default ScriptTag;