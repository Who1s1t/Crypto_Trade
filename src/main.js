import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import App from './App.vue'

const cache = new InMemoryCache()

const httpLink = createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/chimpytuts/darkpools-main-arbitrum'
})

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
})

const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

app.mount('#app');