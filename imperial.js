(function(a){function b(a,b,c){this.x=a,this.y=b,this.z=c}function c(a){return a*a*a*(a*(6*a-15)+10)}function d(c,a,b){return(1-b)*c+b*a}var e=a.noise={};b.prototype.dot2=function(a,b){return this.x*a+this.y*b},b.prototype.dot3=function(a,b,c){return this.x*a+this.y*b+this.z*c};var f=[new b(1,1,0),new b(-1,1,0),new b(1,-1,0),new b(-1,-1,0),new b(1,0,1),new b(-1,0,1),new b(1,0,-1),new b(-1,0,-1),new b(0,1,1),new b(0,-1,1),new b(0,1,-1),new b(0,-1,-1)],g=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],h=Array(512),l=Array(512);e.seed=function(a){0<a&&1>a&&(a*=65536),a=Math.floor(a),256>a&&(a|=a<<8);for(var b=0;256>b;b++){var c;c=1&b?g[b]^255&a:g[b]^255&a>>8,h[b]=h[b+256]=c,l[b]=l[b+256]=f[c%12]}},e.seed(0);var m=.5*(Math.sqrt(3)-1),k=(3-Math.sqrt(3))/6,n=1/6;e.simplex2=function(a,b){var c,d,e,f,g,n=(a+b)*m,o=Math.floor(a+n),p=Math.floor(b+n),q=(o+p)*k,r=a-o+q,s=b-p+q;r>s?(f=1,g=0):(f=0,g=1);var t=r-f+k,u=s-g+k,v=r-1+2*k,w=s-1+2*k;o&=255,p&=255;var x=l[o+h[p]],y=l[o+f+h[p+g]],z=l[o+1+h[p+1]],A=.5-r*r-s*s;0>A?c=0:(A*=A,c=A*A*x.dot2(r,s));var B=.5-t*t-u*u;0>B?d=0:(B*=B,d=B*B*y.dot2(t,u));var C=.5-v*v-w*w;return 0>C?e=0:(C*=C,e=C*C*z.dot2(v,w)),70*(c+d+e)},e.simplex3=function(a,b,c){var d,e,f,g,m,o,p,q,r,u,v=(a+b+c)*(1/3),s=Math.floor(a+v),w=Math.floor(b+v),x=Math.floor(c+v),y=(s+w+x)*n,t=a-s+y,z=b-w+y,A=c-x+y;t>=z?z>=A?(m=1,o=0,p=0,q=1,r=1,u=0):t>=A?(m=1,o=0,p=0,q=1,r=0,u=1):(m=0,o=0,p=1,q=1,r=0,u=1):z<A?(m=0,o=0,p=1,q=0,r=1,u=1):t<A?(m=0,o=1,p=0,q=0,r=1,u=1):(m=0,o=1,p=0,q=1,r=1,u=0);var B=t-m+n,C=z-o+n,D=A-p+n,E=t-q+2*n,F=z-r+2*n,G=A-u+2*n,H=t-1+3*n,I=z-1+3*n,J=A-1+3*n;s&=255,w&=255,x&=255;var K=l[s+h[w+h[x]]],L=l[s+m+h[w+o+h[x+p]]],M=l[s+q+h[w+r+h[x+u]]],N=l[s+1+h[w+1+h[x+1]]],O=.6-t*t-z*z-A*A;0>O?d=0:(O*=O,d=O*O*K.dot3(t,z,A));var P=.6-B*B-C*C-D*D;0>P?e=0:(P*=P,e=P*P*L.dot3(B,C,D));var Q=.6-E*E-F*F-G*G;0>Q?f=0:(Q*=Q,f=Q*Q*M.dot3(E,F,G));var R=.6-H*H-I*I-J*J;return 0>R?g=0:(R*=R,g=R*R*N.dot3(H,I,J)),32*(d+e+f+g)},e.perlin2=function(a,b){var e=Math.floor(a),f=Math.floor(b);a-=e,b-=f,e&=255,f&=255;var g=l[e+h[f]].dot2(a,b),i=l[e+h[f+1]].dot2(a,b-1),j=l[e+1+h[f]].dot2(a-1,b),k=l[e+1+h[f+1]].dot2(a-1,b-1),m=c(a);return d(d(g,j,m),d(i,k,m),c(b))},e.perlin3=function(a,b,e){var f=Math.floor(a),g=Math.floor(b),i=Math.floor(e);a-=f,b-=g,e-=i,f&=255,g&=255,i&=255;var j=l[f+h[g+h[i]]].dot3(a,b,e),k=l[f+h[g+h[i+1]]].dot3(a,b,e-1),m=l[f+h[g+1+h[i]]].dot3(a,b-1,e),n=l[f+h[g+1+h[i+1]]].dot3(a,b-1,e-1),o=l[f+1+h[g+h[i]]].dot3(a-1,b,e),p=l[f+1+h[g+h[i+1]]].dot3(a-1,b,e-1),q=l[f+1+h[g+1+h[i]]].dot3(a-1,b-1,e),r=l[f+1+h[g+1+h[i+1]]].dot3(a-1,b-1,e-1),s=c(a),t=c(b),u=c(e);return d(d(d(j,o,s),d(k,p,s),u),d(d(m,q,s),d(n,r,s),u),t)}})(this);

random = Math.random

class World {
  
  //Limits of the world
    limits = [[0, 10], [0, 10]]

  //List of countries
    countries = new Set()

  //Create a new country and initialize it randomly
    create_country() {
      const country = new Country(this, this.limits.map(v => v[0] + random()*v[1]))
      this.countries.add(country)
      return country
    }

  //List of imperialists
    get imperialists() {
      return [...this.countries].filter(country => country.imperialist)
    }

  //List of colonies
    get colonies() {
      return [...this.countries].filter(country => !country.imperialist)
    }
}

class Country {

  //Constructor
    constructor(world, variables) {
      this.world = world
      this.variables = variables
    }

  //Power
    power = NaN

  //Cost (based on objective function)
    get cost() {
      return objective(this)
    }

  //Imperialist allegiance
    allegiance = null

  //Tell if imperialist (i.e. allegiance to self)
    get imperialist() {
      return this.allegiance === this
    }

  //List of colonies (if imperialist, else it will be empty)
    get colonies() {
      return [...this.world.countries].filter(country => (country.allegiance === this) && (country !== this))
    }

  //Compute the distance to another country
    distance(country) {
      return this.variables.map((variable, index) => country.variables[index] - variable)
    }

  //Correct variables values
    clamp() {
      let limits = this.world.limits
      for (let i = 0; i < this.variables.length; i++) 
        this.variables[i] = Math.max(limits[i][0], Math.min(limits[i][1], this.variables[i]))
    }

}

function objective(solution) {
  return Math.abs(noise.simplex2(solution.variables[0] / 10 * solution.world.limits[0][1], solution.variables[1] / 10 * solution.world.limits[1][1]))
}

function* ica({world, nb_countries, nb_imperialists, assimilation_deviation, assimilation_direction, colonies_power, revolution_scale, revolution_rate, influency_epoch}) {
  //Initialisation
    let best = null

  //1. Generate countries
    let countries = []
    for (let i = 0; i < nb_countries; i++)
      countries.push(world.create_country())
  
  //2. Select imperialists among the best countries
    countries.sort((a, b) => a.cost - b.cost)
    let imperialists = countries.slice(0, nb_imperialists)
    let colonies = countries.slice(nb_imperialists)
    imperialists.forEach(country => country.allegiance = country)

  //3. Compute imperialists initial power
    let cost_imperialists = imperialists.map(imperialist => imperialist.cost)
    let max_cost_imperialists = Math.max(...cost_imperialists)
    let sum_cost_imperialists = cost_imperialists.reduce((a, b) => a + b, 0)
    imperialists.forEach(imperialist => imperialist.power = Math.abs((max_cost_imperialists - imperialist.cost)/sum_cost_imperialists))

  //4. Form empire by granting colonies to imperialists
    for (let imperialist of imperialists) {
      let nb_colonies = Math.round(imperialist.power * (nb_countries - nb_imperialists))

      //Attribution of colonies
        for (let i = 0; i < nb_colonies; i++)
          colonies.splice(Math.floor(random()*colonies.length), 1)[0].allegiance = imperialist
          
    }
    
  //Main loop
    while (true) {

      //Update colonies and imperialist lists
        countries = [...world.countries]
        colonies = world.colonies
        imperialists = world.imperialists

        console.log(countries)

      //Update colonies with assimilation and revolutions
        for (let colony of colonies) {
          //5. Assimilation
            //Direction
              let d = colony.distance(colony.allegiance)
              let x = d.map(distance => random() * distance * assimilation_direction)
            //Deviation
              let t = -assimilation_deviation + 2 * random() * assimilation_deviation
            //Affectation
              colony.variables = x.map(v => v * t)

          //6. Revolutions
              if (random() < revolution_rate)
                colony.variables = colony.variables.map(v => v + revolution_scale * (random() - random()))
              
          //Adjust variables values (must be inside world's limit)
            colony.clamp()   
        }

      //7. Overthrow of imperialists
        for (let imperialist of imperialists) {
          //Search of a better colony inside the empire
            let colonies_costs = imperialist.colonies.map(colony => colony.cost)
            let colonies_min = Math.min(...colonies_costs)

          //If better, the colony overthrow the current imperialist
            if (colonies_min < imperialist.cost) {
              let new_imperialist = colonies_costs.indexOf(colonies_min)
              imperialist.colonies.forEach(colony => colony.allegiance = new_imperialist)
              imperialist.allegiance = new_imperialist
            }            
        }

      //8. Competition
        //Compute the influency of each imperialist
          let total_cost_imperialists = imperialists.map(imperialist => imperialist.cost + colonies_power * (imperialist.colonies.map(colony => colony.cost).reduce((a, b) => a + b, 0)/imperialist.colonies.length))
          let max_total_cost_imperialists = Math.max(...total_cost_imperialists)
          let sum_total_cost_imperialists = total_cost_imperialists.reduce((a, b) => a + b, 0)
          let influencies = total_cost_imperialists.map(total_cost_imperialist => Math.abs((total_cost_imperialist - max_total_cost_imperialists)/sum_total_cost_imperialists))

        //Weakest colony
          let colonies_cost = colonies.map(colony => colony.colony)
          let weakest = colonies[colonies_cost.indexOf(Math.min(...colonies_cost))]

        //Influencies war
          for (let j = 0; j < influency_epoch; j++)
            influencies = influencies.map(influency => influency - random())
          let winner = imperialists[influencies.indexOf(Math.max(...influencies))]

        //Change the weakest colony allegiance
          weakest.allegiance = winner

      //9. Collapse the weakest empire
        for (let imperialist of imperialists)
          if (imperialist.colonies.length === 0) 
            imperialist.allegiance = null

      //Update best solution
        let costs = countries.map(country => country.cost)
        best = country[costs.indexOf(Math.min(...costs))]
        yield best
    }
}

let algo = ica({world:new World(), nb_countries:10, nb_imperialists:3, assimilation_deviation:Math.PI/4, assimilation_direction:0.5, colonies_power:0.1, revolution_scale:0.5, revolution_rate:0.2, influency_epoch:1000})
algo.next()