/**
 * Created by lb on 2016/11/17.
 */
import React,{Component,propTypes} from 'react';
import Todo from './Todo';

export default class TodoList extends Component{
    render(){
        return(
            <ul>
                {this.props.todos.map((todo,index)=>
                    <Todo {...todo}
                          key = {index}
                          onClick={()=>this.props.onTodoClick(index)}
                    />
        )}
            </ul>
        )
    }
}

TodoList.propTypes={
    onTodoClick:propTypes.func.isRequired,
    todos:propTypes.arrayOf(propTypes.shape({
        text:propTypes.string.isRequired,
        completed:propTypes.bool.isRequired
    }).isRequired).isRequired,
};