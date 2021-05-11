import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Card,IndexTable,useIndexResourceState } from '@shopify/polaris';


const GET_FIRST_PRODUCTS = gql`
query getProducts($row:Int!){
  products(first:$row) {
    edges {
      cursor
      node {
        id
        title
        images(first:1){
          edges{
            node{
              id
              originalSrc
            }
          }
        }
        variants(first:1){
          edges{
            node{
              price
            }
          }
        }
        totalInventory
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
`;

function ProductList (){
 
    const {loading, error, data} = useQuery(GET_FIRST_PRODUCTS, { variables: { row: 20 } });
    if (loading) return <div>loading...</div>
    if (error) return <div>{error.message}</div>
    //console.log('stored products',data.products.edges);    
    return(
        <Card>
          <IndexTable>
          </IndexTable>
        </Card>
    )
    
}
export default ProductList;