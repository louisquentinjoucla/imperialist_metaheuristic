random = Math.random
noise.seed(random())

layout = {
  autosize: true,
  showlegend: false,
  plot_bgcolor: "rgb(40, 40, 40)",
  paper_bgcolor:"rgb(40, 40, 40)",
  font:{
    color:"white"
  },
  xaxis:{
    range: [-100,100],
  },
  yaxis:{
    range: [-100,100],
  },
  margin: {
    l: 65,
    r: 50,
    b: 65,
    t: 90,
  }
};

function start(){
    inter=setInterval(() => algo.next(), 0)
}

function stop(){
    clearInterval(inter);
}

function reset(){
    init_data()
    algo = ica({world:new World(), nb_countries:200, nb_imperialists:10, assimilation_deviation:Math.PI/4, assimilation_direction:0.025, colonies_power:0.01, revolution_scale:5, revolution_rate:0.5, influency_epoch:100}, data)
}

function init_data(){
    data.countries = []
    data.empires = []
    data.best = {variables:[], cost: Infinity}
    data.iteration = 0
}

let inter
let data = {}
init_data()
let view = new Vue({el:"#ui", data, mounted(){}})
let algo = ica({world:new World(), nb_countries:200, nb_imperialists:10, assimilation_deviation:Math.PI/4, assimilation_direction:0.025, colonies_power:0.01, revolution_scale:5, revolution_rate:0.5, influency_epoch:100}, data)
