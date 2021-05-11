import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Card, ResourceList,Stack,Thumbnail,Heading } from '@shopify/polaris';


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
          <div className="Polaris-DataTable--condensed">
            <div className="Polaris-DataTable Polaris-DataTable--condensed">
              <div className="Polaris-DataTable__ScrollContainer">
                <table className="Polaris-DataTable__Table">
                  <thead>
                  <tr>
                    <th><input type="checkbox" name="check_all" /></th>
                    <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignMiddle Polaris-DataTable__Cell--header"></th>
                    <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignMiddle Polaris-DataTable__Cell--header">Title</th>
                    <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignMiddle Polaris-DataTable__Cell--header">Price</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr className="Polaris-DataTable__TableRow">
                      <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignMiddle Polaris-DataTable__Cell--firstColumn"><input type="checkbox" name="check_each" /></td>
                      <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignMiddle Polaris-DataTable__Cell">Image</td>
                      <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignMiddle Polaris-DataTable__Cell">Product Title</td>
                      <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignMiddle Polaris-DataTable__Cell">Product $1254</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ResourceList
            items={data.products.edges}
            renderItem={ item => {
              const product = item.node;
              const price = product.variants.edges[0].node.price;
              const media = (
                  <Thumbnail 
                      source={
                          product.images.edges[0] ? product.images.edges[0].node.originalSrc :''
                      }
                      alt={
                          product.images.edges[0] ? product.images.edges[0].node.altText : ''
                      }
                  />
              );
              return(
                <ResourceList.Item
                    id={product.id}
                    media={media}
                    url={'product/'+product.id}
                    accessibilityLabel={`view Details for ${product.title}`}
                >
                  <Stack>
                      <Stack.Item fill>
                          <Heading>
                            {product.title}
                          </Heading>
                      </Stack.Item>
                      <Stack.Item>
                          <p>INR {price}</p>
                      </Stack.Item>
                  </Stack>
                </ResourceList.Item>
              )
            }}
          >
          </ResourceList>
        </Card>
    )
    
}
export default ProductList;