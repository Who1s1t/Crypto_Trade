<template>


  <h1>Transactions</h1>

  <section>

    <div class="mainBlock">
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading...</p>
      <AppMainItem v-else v-for="transaction in result.swaps" :key="transaction.id" :transaction="transaction"/>


    </div>

  </section>
</template>

<script>
import {defineComponent} from "vue";
import AppMainItem from "@/components/AppMainItem";
import gql from "graphql-tag";
import {useQuery} from "@vue/apollo-composable";

const TRANSACTIONS_QUERY = gql`
query MyQuery {
  swaps(first: 5, orderBy: timestamp, orderDirection: desc) {
    poolId {
      address
    }
    valueUSD
    timestamp
    userAddress {
      id
    }
    id
  }
}
`

export  default defineComponent({

  components: {
    AppMainItem
  },
  setup () {
    const { result, loading, error } =  useQuery(TRANSACTIONS_QUERY);
    return {
      result,
      loading,
      error
    }
  },

})
</script>