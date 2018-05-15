<<<<<<< HEAD
<template>
<div id="wrap">
  <form action="" autocomplete="on">
  <input id="search" name="search" type="text" placeholder="What're you looking for?">
  <input id="search_submit" value="Rechercher" type="submit">
  </form>
</div>
=======
<template lang="pug">
section
  div#content
    div.kural
      router-kural(v-for="sub in subject", :key="sub.text")
        h1 {{ sub.text }}
>>>>>>> 6f5a4b61c07eda4e66548907dd76fe2307f1b073
</template>

<script>
export default {
}
</script>

<style scoped>

#wrap {
  margin: 50px 30px;
  display: inline-block;
  position: relative;
  float: right;
  padding: 0;
}

input[type="text"] {
  height: 50px;
  font-size: 20px;
  display: inline-block;
  font-family: "Lato";
  font-weight: 100;
  border: none;
  outline: none;
  color: #555;
  padding: 3px;
  padding-right: 60px;
  width: 0px;
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  z-index: 3;
  transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
  cursor: pointer;
}

input[type="text"]:focus:hover {
  border-bottom: 1px solid #BBB;
}

input[type="text"]:focus {
  width: 280px;
  z-index: 1;
  border-bottom: 1px solid #BBB;
  cursor: text;
}
input[type="submit"] {
  height: 67px;
  width: 63px;
  display: inline-block;
  color:red;
  float: right;
  background: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-24.png') center center no-repeat;
  text-indent: -10000px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  cursor: pointer;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity .4s ease;
}

input[type="submit"]:hover {
  opacity: 0.8;
}
</style>
