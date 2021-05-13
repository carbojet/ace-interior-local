import gql from 'graphql-tag';
import { useQuery,useMutation } from '@apollo/react-hooks';

const CREATE_SCRIPT_TAG = gql`
    mutation scriptTagCreate($input: ScriptTagInput!){
        scriptTagCreate(input:$input){
            scriptTag{
                id
            }
            userError{
                field
                message
            }
        }
    }
`;
function AceForm(){
    return(
        <div>
            <form>
                <p>testing...</p>
            </form>
        </div>
    )
}
export default AceForm;
