Vue.component("widget1",{
  template:

  `<div class="questionContainer">
     <div class="question" v-on:click="myFilter">?</div>
     <div class="questionAnswer" v-bind:class="{ showAndHide: isActive }">
      Hello
       <br> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     </div>
   </div>`,

  data: function(){ return {
      isActive: true
  }},
  methods: {
    myFilter: function(){
        this.isActive = !this.isActive;
        // each time the button is clicked, myFilter method triggers.
        //This changes the data "isActive's" value to the opposite of what it currently is
    }
  }

})


Vue.component("widget2",{
  template:

  `<div class="questionContainer2" id="widget2">
     <div class="question2" v-on:click="myFilter">?
     </div>
     <div class="questionAnswer2 hide"  v-bind:class="{ show: isActive }">
      Hello
      <br> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     </div>
   </div>`,

  data: function(){ return {
      isActive: false
  }},
  methods: {
    myFilter: function(){
        this.isActive = !this.isActive;
        // each time the button is clicked, myFilter method triggers.
        //This changes the data "isActive's" value to the opposite of what it currently is
    }
  }

})



Vue.component("widget3",{
  template:

  `<div class="questionContainer3" id="widget3">
     <div class="question3"  v-on:click="myFilter">?
     </div>
     <div class="smallBubble" v-bind:class="{ showAndHide2: isActive }" >
     </div>
     <div class="mediumBubble" v-bind:class="{ showAndHide2: isActive }">
     </div>
     <div class="questionAnswer3" v-bind:class="{ showAndHide2: isActive }">
      Hello
       <br> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     </div>
   </div>`,

  data: function(){ return {
      isActive: true
  }},
  methods: {
    myFilter: function(){
        this.isActive = !this.isActive;
        // each time the button is clicked, myFilter method triggers.
        //This changes the data "isActive's" value to the opposite of what it currently is
    }
  }

})

new Vue({
el: "#buttons"
});
