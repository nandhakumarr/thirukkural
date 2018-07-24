<template>
  <div class="slides">
    <div class="vilakkams">
       <h2>
          எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றன. அதுபோல உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது.
       </h2>
       <div class="author">மு.வரதராசனார்</div>
    </div>
    <div class="vilakkams">
       <h2>
          எழுத்துக்கள் எல்லாம் அகரத்தில் தொடங்குகின்றன; (அது போல) உலகம் கடவுளில் தொடங்குகிறது.
        </h2>
        <div class="author">சாலமன் பாப்பையா</div>
    </div>
    <div class="vilakkams">
       <h2>
          அகரம் எழுத்துக்களுக்கு முதன்மை; ஆதிபகவன், உலகில் வாழும் உயிர்களுக்கு முதன்மை.
       </h2>
       <div class="author">மு.கருணாநிதி</div>
    </div>
    <div style="text-align:center">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>


</template>
<style>
.slides {
  max-width: 800px;
  position: relative;
  margin: auto;
}
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
.active, .dot:hover {
  background-color: #ca2323;
}
.author{
  text-align: center;
  font-size: 15px;
  padding: 8px 12px;
   bottom: 8px;
  width: 100%;
  margin-top: -17px;

}
</style>
