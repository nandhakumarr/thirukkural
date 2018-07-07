<template lang="pug">

.container
  section
    h4 Buttons
    article
      div
        a.btn.btn-default(href='“#”') Default
      div
        a.btn.btn-round(href='“#”') Round
      div
        a.btn.btn-round(href='“#”')
          i.material-icons.ind favorite
          | With Icon
      div
        a.btn.icon.btn-circle(href='“#”')
          i.material-icons favorite
    article
      h4 Size Variations
      div
        a.btn.btn-small(href='“#”') Small
      div
        a.btn.btn-default(href='“#”') Regular
      div
        a.btn.btn-x-large(href='“#”') Large
    article
      h4 Color Variations
      button.btn Default
      button.btn.btn-default Primary
      button.btn.btn-info Info
      button.btn.btn-success Success
      button.btn.btn-warning Warning
      button.btn.btn-error Error
    article
      h4 Badges 
      span.badge.badge-pill.badge-secondary Default
      span.badge.badge-pill.badge-primary Primary
      span.badge.badge-pill.badge-info Info
      span.badge.badge-pill.badge-success Success
      span.badge.badge-pill.badge-warning Warning
      span.badge.badge-pill.badge-danger Danger
      span.badge.badge-pill.badge-rose Rose
        
   
   

</template>

<script>
export default {
    
}
</script>



<style lang="sass" scoped>


@import url(https://fonts.googleapis.com/icon?family=Material+Icons)

*
  &:before, &:after
    box-sizing: border-box

hr
  box-sizing: content-box
  height: 0
  overflow: visible

h1, h2, h3, h4, h5, h6
  margin-top: 0
  margin-bottom: 0.5rem
  color: #666666
  font-weight: 700

.container
  margin: 0 auto
  padding: 1em
  max-width: 64em

[role="contentinfo"]
  padding: 2em 0

@media (min-width: 30em)
  p
    max-width: 50%

article
  border-bottom: 1px solid #c7b6a5
  margin: 0 0 2em
  padding: 0 0 2em
  >
    div, span
      display: inline-block
      margin-right: 1em
  &:last-child
    border: none


.btn
  position: relative
  padding: 12px 30px
  margin: .3125rem 1px
  font-size: .75rem
  font-weight: 400
  line-height: 1.428571
  text-decoration: none
  text-transform: uppercase
  letter-spacing: 0
  cursor: pointer
  color: #fff
  background-color: #999
  border-color: #999
  border: 0
  border-radius: .2rem
  outline: 0
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)
  .material-icons, &:not(.btn-just-icon):not(.btn-fab) .fa
    position: relative
    display: inline-block
    top: 0
    margin-top: -1em
    margin-bottom: -1em
    font-size: 1.1rem
    vertical-align: middle

.material-icons
  font-family: 'Material Icons'
  font-weight: normal
  font-style: normal
  font-size: 24px
  line-height: 1
  letter-spacing: normal
  text-transform: none
  display: inline-block
  white-space: nowrap
  word-wrap: normal
  direction: ltr
  -webkit-font-smoothing: antialiased

.btn
  &:hover, &:focus
    color: #fff
    background-color: #888
    border-color: #888
    box-shadow: 0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px

.btn-default
  background-color: #08c299
  &:hover, &:focus
    background-color: #0ba785
    color: #ffffff

.btn-round
  background-color: #08c299
  border-radius: 30px
  .ind
    margin-right: 0.5em
  &:hover, &:focus
    background-color: #0ba785
    color: #ffffff

.btn-circle
  background-color: #08c299
  border-radius: 50%
  height: 100%
  min-width: 41px
  width: 100%
  padding: 100%
  overflow: hidden
  position: relative
  line-height: 41px
  .icon
    align-content: center
  &:hover, &:focus
    background-color: #0ba785
    color: #ffffff

.btn-secondary
  background-color: #08c299
  &:hover, &:focus
    background-color: #0ba785
    color: #ffffff

.btn-small
  background-color: #08c299
  padding: .40625rem 1.25rem
  font-size: .6875rem
  line-height: 1.5
  border-radius: .2rem
  &:hover, &:focus
    background-color: #0ba785
    color: #ffffff

.btn-large
  background-color: #08c299
  &:hover, &:focus
    background-color: #0ba785
    color: #ffffff

.btn-x-large
  background-color: #08c299
  padding: 1.125rem 2.25rem
  font-size: .875rem
  line-height: 1.333333
  border-radius: .2rem
  &:hover, &:focus
    background-color: #0ba785
    color: #ffffff

.btn.btn-info
  color: #fff
  background-color: #00bcd4
  border-color: #00bcd4

.btn-info
  &:hover, &:focus
    background-color: #02aac0
    color: #ffffff

.btn.btn-success
  color: #fff
  background-color: #4caf50
  border-color: #4caf50

.btn-success
  &:hover, &:focus
    background-color: #3ea141
    color: #ffffff

.btn.btn-warning
  color: #fff
  background-color: #ff9800
  border-color: #ff9800

.btn-warning
  &:hover, &:focus
    background-color: #da8302
    color: #ffffff

.btn.btn-error
  color: #fff
  background-color: #f44336
  border-color: #f44336

.btn-error
  &:hover, &:focus
    background-color: #d62a1e
    color: #ffffff


.badge
  display: inline-block
  font-weight: 500
  line-height: 1
  text-align: center
  white-space: nowrap
  vertical-align: baseline
  padding: 5px 12px
  text-transform: uppercase
  font-size: 10px
  color: #fff
  max-width: 100%
  &:empty
    display: none

.btn .badge
  position: relative
  top: -1px

.badge-pill
  padding-right: 0.6em
  padding-left: 0.6em
  border-radius: 10rem

.badge-primary
  color: #ffffff
  background-color: #2196f3
  &:hover, &:focus
    color: #ffffff
    text-decoration: none
    background-color: #0c7cd5

.badge-secondary
  color: #ffffff
  background-color: #6c757d
  &:hover, &:focus
    color: #ffffff
    text-decoration: none
    background-color: #545b62

.badge-success
  color: #ffffff
  background-color: #4caf50
  &:hover, &:focus
    color: #ffffff
    text-decoration: none
    background-color: #3d8b40

.badge-info
  color: #ffffff
  background-color: #00bcd4
  &:hover, &:focus
    color: #ffffff
    text-decoration: none
    background-color: #008fa1

.badge-warning
  color: #212529
  background-color: #ffeb3b
  &:hover, &:focus
    color: #212529
    text-decoration: none
    background-color: #ffe608

.badge-danger
  color: #ffffff
  background-color: #f44336
  &:hover, &:focus
    color: #ffffff
    text-decoration: none
    background-color: #ea1c0d

.badge-light
  color: #212529
  background-color: #f8f9fa
  &:hover, &:focus
    color: #212529
    text-decoration: none
    background-color: #dae0e5

.badge-dark
  color: #ffffff
  background-color: #343a40
  &:hover, &:focus
    color: #ffffff
    text-decoration: none
    background-color: #1d2124

.badge-rose
  color: #ffffff
  background-color: #e91e63
  &:hover, &:focus
    color: #ffffff
    text-decoration: none
    background-color: #c51450


</style>
