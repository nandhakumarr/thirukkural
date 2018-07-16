<template>
  <section class="kurals">
    <Kuralssss 
      v-for="kural in kurals"
      :key="kural.Numbers"
      :Numbers="kural.id"
      :Line1="kural.Line1"
      :id="kural.id" />     
  </section>
</template>

<script>
import Kuralssss from '@/components/Kuralssss'
export default {
  components: {
    Kuralssss
  },
  asyncData(){
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve({
          kurals: [
            {
              id:"1",
              "Line1": "அகர முதல எழுத்தெல்லாம் ஆதி",
              "Line2": "பகவன் முதற்றே உலகு.",
              Numbers:"1"
            },
            {
              id:"2",
              "Line1": "கற்றதனால் ஆய பயனென்கொல் வாலறிவன்",
              "Line2": "நற்றாள் தொழாஅர் எனின்.",
              Numbers:"2"
            },
            {
              id:"3",
              "Line1": "மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்",
              "Line2": "நிலமிசை நீடுவாழ் வார்.",
              Numbers:"3"
            }
          ]
        })
      }, 1500)
    })
  }
}
</script>
<style scoped>
.kura{
  display: flex;
  flex-flow: wrap row;
}

</style>


