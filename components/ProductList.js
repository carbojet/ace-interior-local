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
    const resourceName = {
      singular: 'Product',
      plural: 'Products',
    };
    
    const {loading, error, data} = useQuery(GET_FIRST_PRODUCTS, { variables: { row: 20 } });
    if (loading) return <div>loading...</div>
    if (error) return <div>{error.message}</div>
    //console.log('stored products',data.products.edges);  
    const {
      selectedResources,
      allResourcesSelected,
      handleSelectionChange,
    } = useIndexResourceState(data.products.edges);

    const rowMarkup = data.products.edges.map(
      ({item}, index) => (
        <IndexTable.Row
          id={item.node.id}
          key={item.node.id}
          selected={selectedResources.includes(item.node.id)}
          position={index}
        >
          <IndexTable.Cell>
            <Thumbnail 
                source={
                    item.node.images.edges[0] ? item.node.images.edges[0].node.originalSrc :''
                }
                alt={
                    item.node.images.edges[0] ? item.node.images.edges[0].node.altText : ''
                }
            />
          </IndexTable.Cell>
          <IndexTable.Cell>{item.node.title}</IndexTable.Cell>
          <IndexTable.Cell>{item.node.variants.edges[0].node.price}</IndexTable.Cell>
        </IndexTable.Row>
      ),
    );
    return(
        <Card>
          <IndexTable
            resourceName={resourceName}
            itemCount={data.products.edges.length}
            selectedItemsCount={
              allResourcesSelected ? 'All' : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            headings={[
              {title: 'Image'},
              {title: 'Title'},
              {title: 'Price'},
            ]}  
          >
          </IndexTable>
        </Card>
    )
    
}
export default ProductList;