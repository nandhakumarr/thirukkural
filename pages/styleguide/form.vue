<template lang="pug">
  main.content
    h1.styleguide Form Tags
    //- Form Tags
    section
      form Form-Defines an HTML form for user input
      br
      button(type="button") Defines the clickabale button
      br
      br
      legend Legend-Defines the caption for fieldset element
      br
      br
      fieldset
        legend Defines the caption for fieldset element
        | Defines the gruop related elements in a form
      br
      br
      label Defines label for an input element
      br
      br
    //- Form Tags End
    h1.styleguide Form Elements
    //- Form Elements
    section
      p
        input(type="hidden" value="__hidden__")
      p
        input(placeholder="__input__")
      br
      br
      p
        input(placeholder="date" type="date")
      br
      br
      p
        input(type="datetime" placeholder="datetime" )
      br
      br
      p
        input(type="email" placeholder="email" )
      br
      br
      p
        input(type="month" placeholder="month" )
      br
      br
      p
        input(type="number" placeholder="number" )
      br
      br
      p
        input(type="password" placeholder="password" )
      br
      br
      p
        input(type="tel" placeholder="phone__" )
      br
      br
      p
        input(type="text" placeholder="text" )
      br
      br
      p
        input(type="time" placeholder="time" )
      br
      br
      p
        input(type="url" placeholder="url---" )
      br
      br
      p
        input(type="week" placeholder="week" )
      br
      br
      p
        input(type="search" placeholder="search__" )
      br
      br
      p
        select
          option Defines a option list in dropdown
          optgroup(label="defines the group related options")
            option Defines a option list in dropdown
      br
      br
      p
        textarea Defines the multiline text
      br
      br
      p
        label
          input(type="checkbox" placeholder="checkbox")
          small checkbox
      br
      br
      p
        label
          input(type="radio" placeholder="radio")
          small Radio
      br
      br
      p
        input(type="file" placeholder="__file__" value="__file__")
      br
      br
      p
        input(type="range" placeholder="range")
      br
      br
      p
        input(type="color" placeholder="color")
      br
      br
      p
        input(type="button" placeholder="button")
      br
      br
      p
        input(type="image" value="image" alt="")
      br
      br
      p
        input(type="reset" value="__reset__")
      br
      br
      p
        input(type="submit" value="submit")
      br
      br
      br
    //- Form Elements End
    h1.styleguide Table caption
    //- Table Caption Starts
    section
      table
        caption Defines the table caption
          colgroup
            col
            col(span="2")
        thead
          tr
            th Header cell
            th(colSpan="2") Header cell
        tbody
          tr
            td Table Cell 1
            td Table Cell 2
            td Table Cell 3
        tfoot
          tr
            th Footer cell
            th(colSpan="2") Footer cell
    //- Table Caption End
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
table
  border: 1px solid #eee
  border-collapse: collapse
  table-layout: auto
  width: 100%
  height: 150px
  caption
    text-align: left
    text-transform: capitalize
    padding: 10px
  thead
    display: table-header-group
    verical-align: middle
    border-color: inherit
    background: #eee
    text-align: left
  tbody
    display: table-row-group
    verical-align: middle
    border-color: inherit
    text-align:  left
  tfoot
    display: table-header-group
    verical-align: middle
    border-color: inherit
    background: #eee
    text-align: left
</style>
