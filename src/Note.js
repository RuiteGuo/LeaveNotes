import React,{Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from  'react-icons/lib/fa/floppy-o'
import logo from './logo.svg';

class Note extends React.Component {
    
    constructor (props ) {
        super (props )
        this.state = {
            editing : false   
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.save = this.save.bind(this)
        this.randomBetween = this.randomBetween.bind(this)
        
    }
    
    componentWillMound() {
        this.style = {
            right : this.randomBetween(0,window.innerWidth-150, 'px'),
            top: this.randomBetween(0,window.innerHeight-150, 'px'),
            transform: `rotate(${this.randomBetween(-25,25,'deg')})`
        } 
    }
    
    randomBetween (x,y,s) {
        // s is unit pixel
        return x + Math.ceil(Math.random()*(y-x)) +s
        
    }
    edit() {
        
        this.setState(
        {
            editing : true      
        }
        )
      
       
    }
    
    remove () {
       this.props.onRemove(this.props.index)
    }
    save (e) {
    
       e.preventDefault()
       this.props.onChange(this._newText.value,this.props.index)
       this.setState({
           editing:false
       })
    }
    
//    shouldComponentUpdate(nextProps, nextState) {
//        return (
//        this.props.children !== nextProps.children || this.s
//        )
//    }
//    
    renderForm () {
        return (
        <div className = "note" style = {this.style}>
            <form onSubmit={this.save}>
            <textarea ref = {input => this._newText = input}/>
               
            <button id = "save" onClick={this.save}><FaFloppyO/></button>
             <div className="logo">
                <img src={logo}  alt="logo" />
                </div>
            </form>
        </div>    
        )
    }
    
    renderDisplay() {
        return (
      
            <div className = "note" style = {this.style}>
            <p> {this.props.children}</p>
                <div className="logo">
                <img src={logo}  alt="logo" />
                </div>
            <span>
            <button onClick = {this.edit} id = "edit"><FaPencil/></button>
            <button onClick = {this.remove} id = "remove"><FaTrash/></button>
            </span>
            
            </div>
        )
    }
    
      renderDisplaySaved() {
        return (
      
            <div className = "note">
            <p> {this.newText.value} </p>
                <div className="logo">
                <img src={logo}  alt="logo" />
                </div>
            <span>
            <button onClick = {this.edit} id = "edit"><FaPencil/></button>
            <button onClick = {this.remove} id = "remove"><FaTrash/></button>
            </span>
            
            </div>
        )
    }
    
    render() {
        if (this.state.editing) {
          
            return this.renderForm()
        } 
        else {
            return this.renderDisplay()
        }
    }
}

export default Note
