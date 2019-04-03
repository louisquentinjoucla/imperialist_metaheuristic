class World {
  
    //Limits of the world
      limits = [[-100, 100], [-100, 100]]
  
    //List of countries
      countries = new Set()
  
    // Map data
      map = []
  
    // Graph
      graph = null
  
      constructor() {
        this.init_map();
      }
  
    //Create a new country and initialize it randomly
      create_country() {
        const country = new Country(this, this.limits.map(v => v[0] + random()*(v[1]-v[0])))
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
  
    //Update colors after an overthrow
      update_colors(prev, next) {
        let color = this._colors.get(prev)
        this._colors.delete(prev)
        this._colors.set(next, color)
      }
  
    //Colors initializer
      colors() {
        //let colors = ["#FFFFFF", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF", "#008080", "#0000FF", "#000080", "#FF00FF", "#800080"]
        let colors = ["rgba(255, 255, 255, 1)", "rgba(255, 0, 0, 1)", "rgba(128, 0, 0, 1)", "rgba(255, 255, 0, 1)", "rgba(128, 128, 0, 1)", "rgba(0, 255, 0, 1)", "rgba(0, 128, 0, 1)", "rgba(0, 255, 255, 1)", "rgba(0, 128, 128, 1)", "rgba(0, 0, 255, 1)", "rgba(0, 0, 128, 1)", "rgba(255, 0, 255, 1)", "rgba(128, 0, 128, 1)"]
        this._colors = new Map()
        for (let i = 0; i < this.imperialists.length; i++)
          this._colors.set(this.imperialists[i], colors[i])
      }
  
    //Color giver
      color(country) {
        return this._colors.get(country.allegiance)||"rgba(0, 0, 0, 1)"//||"#000000"
      }
  
    // Map init
  
      init_map() {
        let x_coord = []
        let y_coord = []
        let z_coord = []
        for(let i=this.limits[0][0];i<=this.limits[0][1];i++){
          let line = []
          for(let j=this.limits[1][0]; j<=this.limits[1][1]; j++){
          x_coord.push(i)
          y_coord.push(j)
          z_coord.push(eggholder(i,j))
          }
        }
        this.map.push({
             x: x_coord,
             y: y_coord,
             z: z_coord,
             type: 'heatmap',
             colorscale:'Blues'
        });
      }
  
    // Update graph markers
      create_or_update_graph(){
        let traces = []
        for (let imperialist of this.imperialists) {
          let trace = {
            mode: 'markers',
            marker: {
              symbol: "diamond",
              size: 12,
              line: {
              //color: 'rgba(0, 255, 0, 1)',
              width: 1},
              opacity: 0.8},
            type: 'scatter2d'
          };
  
            // Setting parameter for the imperialist trace
            trace.x = [imperialist.variables[0]]
            trace.y = [imperialist.variables[1]]
            //trace.z = [imperialist.cost]
            trace.marker.color = this._colors.get(imperialist)
            trace.marker.symbol = "diamond"
            trace.marker.size = 18
            traces.push(trace)
  
            // Setting parameter for the colony trace
            let ctrace = {
              mode: 'markers',
              marker: {
                symbol: "circle",
                color: this._colors.get(imperialist),
                size: 10,
                line: {
                width: 1},
                opacity: 0.8},
              type: 'scatter2d'
            };
            ctrace.x = []
            ctrace.y = []
            ctrace.z = []
  
            for(let colony of imperialist.colonies) {
              ctrace.x.push(colony.variables[0])
              ctrace.y.push(colony.variables[1])
              //ctrace.z.push(colony.cost)
  
            }
            traces.push(ctrace)
            
        }  
          this.graph = Plotly.newPlot('graph', traces.concat(this.map), layout)
      }
  }