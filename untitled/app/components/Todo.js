/**
 * Created by lb on 2016/11/17.
 */
import React,{Component,propTypes} from 'react';

export default class Todo extends Component{
    render(){
        return(
            <li onClick={this.props.onClick}
            style={{
                textDecoration:this.props.completed?'line-through':'none',
                cursor:this.props.completed?'default':'pointer'
            }}>
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes={
    onClick:propTypes.func.isRequired,
    text:propTypes.string.isRequired,
    completed:propTypes.bool.isRequired
};