function objective(solution) {
    let x = solution.variables[0], y = solution.variables[1]
    //return - (y + 47) * Math.sin(Math.abs(x/2 + (y + 47))**.5) - x * Math.sin(Math.abs(x - (y + 47))**.5)
    return eggholder(x,y);
}

function himmelblau(x,y) {
    return (x**2 +y -11)**2 + (x + y**2 - 7)**2;
  }
  
function eggholder(x,y) {
    return -(y +47) * Math.sin(Math.sqrt(Math.abs((x/2)+(y+47)))) - x*Math.sin(Math.sqrt(Math.abs(x-(y+47))))
}


