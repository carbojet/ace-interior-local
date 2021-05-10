import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Card, ResourceList, Stack, Thumbnail,Heading,IndexTable,useIndexResourceState } from '@shopify/polaris';


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
    /*
    const items = []
    products.forEach(product => {
        items.push(
            {
                id:product.node.id,
                title:product.node.title,
                image : {
                    src: product.images.edges[0].node.originalSrc,
                    alt:product.images.edges[0].node.altText
                }
            }
        )
    });
    */
    const resourceName = {
        singular: 'Product',
        plural: 'Products',
    };

    const {
        selectedResources,
        allResourcesSelected,
        handleSelectionChange,
    } = useIndexResourceState(products);

    const rowMarkup = products.map(
        (product, index) => (
            <IndexTable.Row
            id={product.node.id}
            key={product.node.id}
            selected={selectedResources.includes(product.node.id)}
            position={index}
            >
                <IndexTable.Cell>
                    <Thumbnail 
                        source={
                            product.node.images.edges[0].node.originalSrc ? product.node.images.edges[0].node.originalSrc :''
                        }
                        alt={
                            product.node.images.edges[0].node.altText ? product.onde.images.edges[0].node.altText : ''
                        }
                    />
                </IndexTable.Cell>
                <IndexTable.Cell>{product.node.title}</IndexTable.Cell>
            </IndexTable.Row>
        ),
    );
    //console.log('stored products',data.products.edges);    
    return(
        <Card>
            <IndexTable
                resourceName={resourceName}
                itemCount={Products.length}
                selectedItemsCount={
                    allResourcesSelected ? 'All' : selectedResources.length
                }
                hasMoreItems
                headings={[
                    {title: ''},
                    {title: 'Title'},
                ]}
            >
                {{rowMarkup}}
            </IndexTable>
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
                            <Stack.Item>
                                <p>{ product.totalInventory}</p>
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