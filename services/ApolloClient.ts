import {ApolloClient, InMemoryCache} from '@apollo/client'
import { type DocumentNode, type TypedDocumentNode, OperationVariables } from '@apollo/client/core'

export const client = new ApolloClient({
    uri: process.env.GRAHPQL_ENDPOINT,
    cache: new InMemoryCache(),
    defaultOptions: {
        query:{
            fetchPolicy: 'no-cache'
        },
        watchQuery: {
            fetchPolicy: 'no-cache'
        }
    }
})

const graphqlFetcher = async(query: DocumentNode | TypedDocumentNode<any, {}>, variables?: OperationVariables) => {
    try {
        const {data, error ,errors} = await client.query({
            query: query,
                variables: variables
        })

        if(error || errors){
            throw new Error(error?.message || 'unable to fetch graphql query')
        }


        return data

    } catch (error: any) {
        
        throw new Error(error.message)
    }
}

export default graphqlFetcher