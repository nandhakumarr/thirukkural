<template >
<social-sharing url="http://localhost:3000/kural/1"
                      title="Thirukkural"
                      description="Kurals"
                      quote="Details"
                      hashtags=""
                      twitter-user=""
                      inline-template>
  <div>
      
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      
      <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i> Whatsapp
      </network>
  </div>
</social-sharing>

</template>

<script>
import SocialSharing from 'vue-social-sharing'

export default {
    components: {
        SocialSharing
    }    
    
}
</script>

<style lang="sass">

</style>

