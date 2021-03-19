import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"
import Modal from 'react-modal';
class App extends Component{
    constructor(){
        super()

        this.state ={
            color: '',
            main: [{color: '#f2f2f2'}],
            count1: 0,
            main2: [],
            itemsone: [],
            tot: 40,
            data: "#f2f2f2"
        }
        this.Restrict = this.Restrict.bind(this)
        this.Surething = this.Surething.bind(this)
    }

    Restrict(){
        let ok = parseInt(document.getElementById('res').value);
       console.log(ok)
        console.log('restricted'  +typeof(ok) + ok)
        this.setState({
            tot: ok
        })
        console.log(this.state.tot)
        
    
    }
    
  

    componentDidMount(){
        let arr2 = []
        for (let z=0; z< this.state.tot;z++)
        {
            let count =0
            count = count+1
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            let dict2 = {
                id: "#" + randomColor,
                color2: "#" + randomColor
                }
                arr2.push(dict2)
                
        }

        console.log(arr2)

        this.state.main2.push(arr2)
        console.log(this.state.main2)

        
        this.setState({
            main2: arr2
        })
        
        let items =[]
        for(let o=0; o< this.state.tot;o++)
        {
            //console.log(this.state.main2[0][o].color2)
            items.push(<div className="grid-item" id={ this.state.main2[0][o].color2} style={{backgroundColor: this.state.main2[0][o].color2}}>{this.state.main2[0][o].color2}</div>)

        }
        this.setState({
            itemsone: items
        })
        console.log(this.state.itemsone)
    }

  

  Surething(){
      this.setState({
          itemsone:this.items
      })
      console.log(this.state.itemsone)
  };


    render()
    {
        
        
       console.log(this.state.tot)

        return(
            <div>
                <div className="grid-container1">
                <div className="grid-item1">
                <h2 className="left">Palette</h2>
                <p className="rightturn">Total elements: {this.state.tot}</p>
                <hr/>
         
                <div className="grid-container" key={1}>
                       
                {this.state.itemsone}
                            
               
                </div>
</div>
                
                <div className="grid-item1">
                    <h2 className="turnleft">Config panel</h2>
                    <hr/>
                    <input type="number" placeholder="enter" id="res"/> 
                    <br/>
                    <button onClick={this.Restrict} className="gen">Generate</button>
                    <button className="cle">Clear</button>
                    <br/>
                    <br/><br/>
                    <h3 className="turnleft">Selected:</h3>
                    <hr/>
                    <div className="okayy"></div>
                    
                    </div>



            </div>
            </div>

        )
    }
}
export default App