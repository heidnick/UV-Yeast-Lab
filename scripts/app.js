let app;
var titles = ['UV Rays and Human Cells','Human Cell Reparation','SPF','Saccharomyces Cerevisiae','Experiment and Predictions','Experiment Process','Results Analysis and Conclusion'];


Vue.component('modal-component', {
  data () {
    return {
      slide_num: 0,
      title: titles[0]
    }
  },
  methods: {
    changeSlide: function(value){
      if (value == -1) {
        if (this.slide_num > 0){
          this.slide_num --;
        } 
      }else{
        this.slide_num ++;
      }
    },            
  },
  template: `
      <div>
        <h3 class="underline">{{titles[slide_num]}}</h3>
        <transition name="modal">
            <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                <div class="modal-body">
                    <slot name="body">
                    <div class="col text-center">
                        <div>
                        <image-component :selected="slide_num"></image-component>
                        </div>
                    </div>
                    </br>
                    <div class="row">
                      <div v-if="slide_num == 0" class="col-md-12 text-right">
                        <a style="text-decoration: none;" v-on:click="slide_num += 1" href="#" class="next round">&#8250;</a>
                      </div>
                      <div v-if="slide_num > 0" class="col-md-6 text-right">
                        <a style="text-decoration: none;" v-on:click="slide_num -= 1" class="previous round">&#8249;</a>
                      </div>
                      <div v-if="slide_num < 6 && slide_num > 0" class="col-md-6 text-left">
                        <a style="text-decoration: none;" v-on:click="slide_num += 1" href="#" class="next round">&#8250;</a>
                      </div>
                    </div>
                    </slot>
                </div>
                <written-component :selected="slide_num"></written-component>              
            </div>
            </div>
        </transition>
      </div>
  `
});

Vue.component('image-component', {
  data () {
    return { selected: 0}
  },
  props: ['selected'],
  template: `
  <div>
    <div v-if="selected == 0">
      <img class="image" src="./images/td.png" alt="Thymine Dimer">
    </div>
    <div v-else-if="selected == 1">
      <img class="image" src="./images/uvrad.png" alt="Cancer Cell">
    </div>
    <div v-else-if="selected == 2">
      <img class="image" src="./images/spray.jpg" alt="Sunscreen Spray">
    </div>
    <div v-else-if="selected == 3">
      <img class="image" src="./images/yeast.jpg" alt="Yeast">
    </div>
    <div v-else-if="selected == 4">
      <div class="row">
        <div class="col-md-3">
          <img class="image" src="./images/exposedcontrol1s.jpg" alt="Exposed Control 1">
        </div>
        <div class="col-md-3">
          <img class="image" src="./images/exposedcontrol2s.jpg" alt="Exposed Control 2">
        </div>
        <div class="col-md-3">
          <img class="image" src="./images/unexposedcontrol1s.jpg" alt="Unexposed Control 1">
        </div>
        <div class="col-md-3">
          <img class="image" src="./images/unexposedcontrol2s.jpg" alt="Unexposed Control 2">
        </div>
      </div>
    </div>
    <div v-else-if="selected == 5">
      <div class="row">
        <div class="col-md-6">
          <img class="image" src="./images/grid_analysis.png" alt="Grid Analysis">
        </div>
        <div class="col-md-3">
          <img class="image" src="./images/NeutrogenalotionSPF852010Xs.jpg" alt="Neutrogena 85">
        </div>
        <div class="col-md-3">
          <img class="image" src="./images/CoppertonelotionSPF152008Xs.jpg" alt="Coppertone 15">
        </div>
      </div>
    </div>
    <div v-else>
      <img class="image" src="./images/data_chart.JPG" alt="Data Results">
    </div>
  </div>
  `
});

Vue.component('written-component', {
  data () {
    return { selected: 0}
  },
  props: ['selected'],
  template: `
  <div style="margin: auto; width: 80%; text-align: center; background-color: #FFFAFA;">
    <div v-if="selected == 0">
      <p>UV rays that are cast by the sun can cause harmful effects to cells in the human body. When skin is exposed to UV rays, the UV may penetrate a cells nucleus which can damage DNA. The UV rays create a thymine dimer in one side of the DNA strand, which is the bonding of adjacent nucleotides, rather than bonding of nucleotides from the other side of the DNA strand. Enzymes in the cell fix these thymine dimers by removing then replacing the missing sequence with random nucleotides. Once the DNA strand is corrected, it will be able to properly divide (Cell Cycle).</p>
    </div>
    <div v-else-if="selected == 1">
      <p>The protein, p53, is the enzyme that corrects these thymine dimers when DNA is damaged by UV rays. If the DNA strand responsible for producing p53 gets damaged, the body will not be able to fix the thymine dimers and replace the random nucleotides with the proper ones. This leads to mutations in the DNA strand upon division. Mutations in a cell’s DNA could eventually lead to a malignant or cancerous cell (Cell Cycle).</p>
      <p>“Cancer cells start as normal cell, but mutations cause them to lose the ability to regulate their division … Cancer cells may divide and spread, invading other tissues, disrupting organ function, and killing the host.” (Taylor Section 8.0)</p>
    </div>
    <div v-else-if="selected == 2">
      <p>Sunscreen is extremely important in protecting UV rays from damaging DNA in body cells. Various sunscreen lotions or sprays receive a rating based on their sun protection factor (SPF).</p>
      <p>The FDA states that, “SPF is a measure of how much solar energy (UV radiation) is required to produce sunburn on protected skin relative to the amount of solar energy required to produce sunburn on unprotected skin.” The SPF number does not mean the amount of time you can be in the sun and is not related to how much sunscreen is applied (Center for Drug Evaluation and Research).</p>
      <p>“Using sunscreens having higher SPF than 15 may be helpful for the people in avoiding the negative impacts of UV radiation.” (Alhamdy)</p>
    </div>
    <div v-else-if="selected == 3">
      <p>The yeast, Saccharomyces cerevisiae, closely resembles reproduction, metabolism, and chemistry of human cells. When it is exposed to UV rays, it repairs the same way as human cells do. (Alhamdy)</p>
      <p>“When it is exposed to UV, yeast get mutations which make them impossible to perform DNA repair, leading to the death of yeast cells. (Alhamdy)</p>
      <p>Since they are so similar, the yeast used in the following experiment closely resembles what human cells would do when exposed to UV rays.</p>
    </div>
    <div v-else-if="selected == 4">
      <p>Two controls, exposed (left) and unexposed (right), were used in an experiment measuring the effects of UV rays on yeast cells, and how different levels of SPF in sunscreen can help protect against the UV rays. Sunscreen solutions with SPF 15 and SPF 85 were used to compare the effectiveness in protection to yeast cells in different levels of SPF. </p>
      <p>I predicted that the unexposed control would protect the yeast better than any of the other options because no UV rays will be able to damage the yeast. I also predicted that SPF 85 would protect the yeast better than SPF 15. Lastly, I predicted that the exposed control would protect the yeast the least out of all four options.</p>
      <p>The study, The Effect of Sunscreens on Yeast to Prevent UV Damage, proved that 0% exposure to the sun resulted in the maximum amount of yeast growth, and 100% exposure to the sun resulted in no yeast growth. This is because the UV rays directly damage the repair cells in the yeast with no protection and vis versa. The study also showed that higher than 15 SPF levels protect yeast better than lower levels than 15 SPF. This was derived from their results showing a larger yeast colony in the higher than 15 leveled SPF than the lower than 15 leveled SPF and supports my prediction above.</p>
    </div><div v-else-if="selected == 5">
      <p>The experiment was conducted by counting the percentage of coverage in each grid of yeast cells. The yeast colonies shown on the pitri dishes were given the same time of exposure to UV rays across each test.</p>
      <p>Sunscreen solutions were applied to the top of the cover of the pitri dish. The two sunscreen solutions tested were Neutrogena lotion SPF-85 (left), and Coppertone lotion SPF-15 (left).</p>
      <p>Each solution was tested twice and the average between the two tests were recorded and presented in the following page.</p>
    </div>
    <div v-else>
        <p>The results were exactly as I had predicted. The control that was fully exposed to the UV radiation had the lowest amount of yeast survived at 0.85%. The control that was unexposed to any UV rays had the highest amount of yeast growth at 88.5%. As predicted, the SPF 85 had a higher amount of growth (77.9% coverage) than the SPF 15 (45.7% coverage). </p>
        <p>As shown above, the UV rays were able to cause the most damage to the yeast cells in the exposed (0.85%) and SPF 15 (45.7%). The UV rays penetrated the yeast cells and affected their DNA sequences. The protein p53 was unable to repair the damage made in most cells, and therefore, the cells would mutate and die, rather than reproduce. The SPF 85 (77.9%) and unexposed (88.5%) protected the cells better from the UV damage, and their cells were able to repair DNA strands and reproduce their cells to continue growth.</p> 
        <p>It can be concluded that sunscreen solutions with SPF 85 protects yeast cells better than sunscreen solutions with SPF 15. Since the yeast cells are very similar to human cells with their repair method, it is safe to say that using a sunscreen solution with a higher than 15 SPF rating will protect you from UV rays more than a sunscreen with SPF 15 or below. </p>
    </div>
    </br>
    </br>
  </div>
  `
});



Vue.component('nav-bar-component', {
    data: function() {
      return {selected: 0}
    },
    props: ['selected'],
    methods: {
      returnSelected: function(num){
        this.selected = num;
        console.log('num: ' , num);
        this.$emit('clicked-nav-item', this.selected);
      }
    },
    template: `
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a v-on:click="returnSelected(0)" class="navbar-brand" href="#">UV-Sensitive Yeast</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a v-on:click="returnSelected(1)" class="nav-link active" aria-current="page" href="#">Citations</a>
          </li>
          <li class="nav-item">
            <a v-on:click="returnSelected(2)" class="nav-link active" aria-current="page" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
    `
});

Vue.component('about-component', {
  template: `
  <div>
    </br>
    <p>This site was created by Nick Heid using Vue.js, Bootstrap 5, and CSS.</p>
    <p>Click this link to see my other projects: <a target="_blank" href="https://github.com/heidnick">github</a></p> 
  </div>
  `
});


Vue.component('citations-component', {
  template: `
  <div style="margin: auto; width: 50%; text-align: center; background-color: #FFFAFA;">
    </br>
    <h3 class="underline">Citations</h3>
    <p>Alhamdy, Tomather & Al-Sowayan, Noorah. (2020). The Effect of Sunscreens on Yeast to Prevent Ultraviolet Damage. Advances in Bioscience and Biotechnology. 11. 111-122. 10.4236/abb.2020.114009.</p>
    <p>Cell Cycle, Sunlight and Skin Cancer (worksheet/quiz)</p>
    <p>Center for Drug Evaluation and Research. (2017, July 14). Sun Protection Factor (SPF). U.S. Food and Drug Administration. https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/sun-protection-factor-spf</p>
    <p>Taylor, M. R., Simon, E. J., Dickey, J. L., & Hogan, K. (2020). Campbell Biology Concepts and Connections - 10th NASTA edition (10th ed.). Pearson.</p>
  </div>
  `
});

function init() {

/*------------------------Main Component--------------------------*/
    app = new Vue({
        el: '#app',
        data: {
            nav_item_selected: 0,
            slide_num: 0,
        },
        methods: {
          clickedNavItem: function(value){
            console.log('value ', value);
            this.nav_item_selected = value;
          },            
        },
        template: `
        <div class="container-fluid">
            <nav-bar-component :selected="nav_item_selected" @clicked-nav-item="clickedNavItem"></nav-bar-component>
            <div class="row">
                <div class="col text-center">
                    <div v-if="nav_item_selected == 0">
                      </br>
                      </br>
                      <modal-component></modal-component>
                    </div>
                    <div v-else-if="nav_item_selected == 1">
                      <citations-component></citations-component>
                    </div>
                    <div v-else>
                      <about-component></about-component>
                    </div>
                </div>
            </div>
        </div>
        `
    }); 
}


