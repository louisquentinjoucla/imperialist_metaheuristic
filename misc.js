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
    if(!inter)
      inter=setInterval(() => algo.next(), 0)

}

function stop(){
    clearInterval(inter);
    inter = null
}

function reset(){
    init_data()
    algo = ica({world:new World(), nb_countries:50, nb_imperialists:4, assimilation_deviation:Math.PI/4, assimilation_direction:0.025, colonies_power:0.01, revolution_scale:5, revolution_rate:0.5, influency_epoch:100}, data)
}

function init_data(){
    data.countries = []
    data.empires = []
    data.best = {variables:[], cost: Infinity}
    data.iteration = 0
    data.debug ? data.debug.clear() : data.debug = new Logger()
}

function set_test(){
    stop()
    layout.xaxis.range = data.objective.limit[0]
    layout.yaxis.range = data.objective.limit[1]
    reset()
}

let inter

let data = {test_functions: test_functions, objective:test_functions[0]}
init_data()
let view = new Vue({el:"#ui", data, mounted(){}})
let algo = ica({world:new World(), nb_countries:50, nb_imperialists:4, assimilation_deviation:Math.PI/4, assimilation_direction:0.025, colonies_power:0.01, revolution_scale:1, revolution_rate:0.5, influency_epoch:100}, data)

