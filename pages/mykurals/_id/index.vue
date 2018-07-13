<template>
<section class="single-kural">
  <h1>{{ kural.id }}</h1>
  <h2>{{ kural.Line1 }}</h2>
  <h2>{{ kural.Line2 }}</h2>
</section>
</template>
<script>
export default {
   asyncData(context){
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve({
          kural: [
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
            },
          ].find(el => el.id === context.params.id )
        })
      }, 1500)
    })
  }
}
</script>

