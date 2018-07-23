<template lang="pug">
div.header
  div.header-logo
    adhigaram-list.menu
    nuxt-link(to="/")
      img#logoimg(:src="logo", alt="")
  div.social
    img#medialogo(:src="facebook", alt="")
    img#medialogo(:src="twitter", alt="")
    img#medialogo(:src="instagram", alt="")
    img#medialogo(:src="linkedIn", alt="")
</template>

<script>
import AdhigaramList from '@/components/AdhigaramList'

export default {
  props: ['navigations'],
  data () {
    return {
      logo: 'https://lh3.googleusercontent.com/-ElZXixJm1sI/WubHL4AdYeI/AAAAAAAABt4/MkgVr6z-65kCQLGtcCIhz_EQS0sEkDQqACL0BGAYYCw/h80/2018-04-30.png',
      facebook: 'http://www.ssccardinals.org/assets/images/Images/Social-Media-Icons/Facebook-Icon.png',
      twitter: 'https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png',
      instagram: 'http://pngimg.com/uploads/instagram/instagram_PNG3.png',
      linkedIn: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-256.png'
    }
  },
  components: {
    AdhigaramList
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/styles/thirukkural'
.header
.header .header-logo
  display: flex
  float: left
  margin: 0 120px 0 15px
  .menu
    width: 100px
    height: 60px
    cursor: pointer
  #logoimg
    margin: 0.5rem
    width: 90px
    height: 50px
.social
  display: flex
  flex-direction: row
  align-items: flex-end
  justify-content: flex-end
  align-content: end
  margin: 17px 37px
  #medialogo
    width: 30px
    height: 30px
    cursor: pointer
</style>
