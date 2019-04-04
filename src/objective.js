function objective(solution) {
    let x = solution.variables[0], y = solution.variables[1]
    //return - (y + 47) * Math.sin(Math.abs(x/2 + (y + 47))**.5) - x * Math.sin(Math.abs(x - (y + 47))**.5)
    return data.objective.func(x,y);
}

function himmelblau(x,y) {
    return (x**2 +y -11)**2 + (x + y**2 - 7)**2;
  }
  
function eggholder(x,y) {
    return -(y +47) * Math.sin(Math.sqrt(Math.abs((x/2)+(y+47)))) - x*Math.sin(Math.sqrt(Math.abs(x-(y+47))))
}

function beale(x,y){
    return (1.5 -x + x*y)**2 + (2.25 - x + (x*y)**2)**2 + (2.625 - x + (x*y)**3)**2
}

function booth(x,y){
    return (x + 2*y - 7)**2 + (2*x + y -5)**2
}

function noise_simplex(x, y) {
    return noise.simplex2(x/50, y/50)
}

function noise_perlin(x, y) {
    return noise.perlin2(x/50, y/50)
}


let test_functions = [
    {name:'Eggholder', func:eggholder, limit:[[-100, 100],[-100, 100]]},
    {name:'Himmelbleau', func:himmelblau, limit:[[-100, 100],[-100, 100]]},
    {name:'Beale ', func:beale, limit:[[-4.5, 4.5],[-4.5, 4.5]]},
    {name:'Booth', func:booth, limit:[[-10, 10],[-10, 10]]},
    {name:'Noise (Simplex)', func:noise_simplex, limit:[[-100, 100],[-100, 100]]},
    {name:'Noise (Perlin)', func:noise_perlin, limit:[[-100, 100],[-100, 100]]},
]