<template lang="pug">
    main.content
      //- Headings
      h1.styleguide.theme Headings
      section
        h1 Head 1
        h1 Head 1.Lorem ipsum dolor sit amet, consecteture
        h1 Head 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        h2 Head 2
        h2 Head 2.Lorem ipsum dolor sit amet, consecteture
        h2 Head 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        h3 Head 3
        h3 Head 3.Lorem ipsum dolor sit amet, consecteture
        h3 Head 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        h4 Head 4
        h4 Head 4.Lorem ipsum dolor sit amet, consecteture
        h4 Head 4. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        h5 Head 5
        h5 Head 5.Lorem ipsum dolor sit amet, consecteture
        h5 Head 5. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        h6 Head 6
        h6 Head 6.Lorem ipsum dolor sit amet, consecteture
        h6 Head 6. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      //- Headings
      h1.styleguide List
      section
        ol
          li Ordered list item 1
          li Ordered list item 2
            ol(type="A")
              li Ordered list item 1
              li Ordered list item 2
              ol(type="a")
                li Ordered list item 1
                li Ordered list item 2
                ol(type="i")
                  li Ordered list item 1
                  li Ordered list item 2
        ul
          li UnOrdered list item 1
          li UnOrdered list item 2
            ul
              li UnOrdered list item 1
              li UnOrdered list item 2
      //- Headings
      h1.styleguide Text Tags
      section
        p Normal text with <a href="">Hyperlink</a> between
        p
          | Pargraph 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          | Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          | sunt in culpa qui officia deserunt mollit anim id est laborum.

        p
          | Pargraph 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          | Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          | sunt in culpa qui officia deserunt mollit anim id est laborum.
        br
        code Code - Defines a piece of computer code
        br
        blockquote Blockquote - It defines the section that is quoted from another source
        br
        time Time - Define a date/time
        br
        b Bold - Defines a bold text
        br
        u Decorator: U - Defines the text that stylistically different from normal text &nbsp;&nbsp;&nbsp;&nbsp;
        br
        i Decorator: i - Defines the part of text in an alternative voice or mood &nbsp;&nbsp;&nbsp;&nbsp;
        br
        q Decorator: q - Defines the text in an short quotation &nbsp;&nbsp;&nbsp;&nbsp;
        br
        s Decorator: s -  Defines the text that is no longer &nbsp;&nbsp;&nbsp;&nbsp;
        br
        em Decorator: em - Defines emphasized text &nbsp;&nbsp;&nbsp;&nbsp;
        br
        strong Decorator: strong - Defines the important text &nbsp;&nbsp;&nbsp;&nbsp;
        br
        small Decorator: small - Defines the smaller text &nbsp;&nbsp;&nbsp;&nbsp;
        br
        mark Decorator: mark - Defines Highlighted text &nbsp;&nbsp;&nbsp;&nbsp;
        br
        cite Decorator: cite - Defines the title of a work &nbsp;&nbsp;&nbsp;&nbsp;
        br
        ins Decorator: ins - Defines a text that has been inserted into a document &nbsp;&nbsp;&nbsp;&nbsp;
        br
        del Decorator: del - Defines the text that has been deleted from a document &nbsp;&nbsp;&nbsp;&nbsp;
        br
        var Decorator: var - Defines the variable &nbsp;&nbsp;&nbsp;&nbsp;
        br
        dfn Decorator: dfn - Represents the defining of a term &nbsp;&nbsp;&nbsp;&nbsp;
        br
        kbd Decorator: kbd - Defines the keyboard input &nbsp;&nbsp;&nbsp;&nbsp;
        br
        abbr Decorator: abbr - Define sample abbreviation &nbsp;&nbsp;&nbsp;&nbsp;
        br
        samp Decorator: samp - Define the smaple output from computer program &nbsp;&nbsp;&nbsp;&nbsp;
        br
        sub Decorator: sub - Define Subscripted text &nbsp;&nbsp;&nbsp;&nbsp;
        br
        sup Decorator: sup - Defines Superscripted text &nbsp;&nbsp;&nbsp;&nbsp;
        dl
          dl - Defines a description list
        dt
          dt - Defines a term or description text
        dd
          dd - Defines a description/value of a term in a description list
        pre
        | pre - Defines preformatted text
        hr
        | hr - Defines a thematic change in the content
        wbr
        | wbr - Defines a possible line-break
        br
        | br -  Defines a single line break
        hr
</template>

<script>
export default {
}
</script>

