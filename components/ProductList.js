import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Card, ResourceList, Stack, Thumbnail,Heading } from '@shopify/polaris';


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
    const products = data.products.edges;

    const resourceName = {
        singular: 'Product',
        plural: 'Products',
    };
    
    //console.log('stored products',data.products.edges);    
    return(
        <Card>
            
            
        </Card>
    )
}
export default ProductList;