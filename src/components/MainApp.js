import React, { Component } from 'react'
import convertToArray from '../functions/convertToArray'
import CreateImage from '../functions/createImage'

const screenWidth = 670
const screenHeight = 3000
export default class MainApp extends Component{
   
 myFunc=(e)=>{
      e.preventDefault()
      var el =this.can.current
      var data = convertToArray(e.target.elements.IMG_DATA.value.trim())
      var context = el.getContext('2d')
      CreateImage(context,data)
    }
    can=React.createRef()
    text=React.createRef()
    render(){
        return(
            <div>
                <form onSubmit={this.myFunc}>
                <textarea name="IMG_DATA" ref={this.text} placeholder="Image Data"></textarea>
                <canvas id="can" width="500" height ="500" ref={this.can}>My Dta</canvas>
                <button> ADd</button>
                </form>
            </div>
        )
    }
}