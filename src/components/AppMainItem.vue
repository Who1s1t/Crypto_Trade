<template>
  <div class="test">
    <div class="grid-container">
      <div>
        <p><b>Sender:</b> {{transaction.userAddress.id}}</p>
        <p><b>Recipient:</b> {{transaction.poolId.address}}</p>
      </div>
      <div>
        <p><b>valueUSD:</b> {{Number(transaction.valueUSD).toFixed(2)}} USD</p>
        <p><b>Date and time:</b> {{new Date(transaction.timestamp * 1000)}}</p>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  props:{
    transaction: {
      type: Object
  }
}
})

</script>