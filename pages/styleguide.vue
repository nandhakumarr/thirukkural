<template lang="pug">
  .page.styleguide
    header
        navigation.primary(:links="primaryNavigation")
    nuxt-child
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
    data () {
        return {
            primaryNavigation: [
                { title: 'Typography', icon:'text_fields', url:'styleguide/typography'},
                { title: 'Form', icon:'check_box', url:'styleguide/form'},
                { title: 'UI Components', icon:'widgets', url:'styleguide/UI-components'}
            ]
        }
    },
    components: {
        Navigation
    }
}   
</script>
