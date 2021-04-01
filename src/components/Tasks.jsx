import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({onToggle,onDelete,tasks}) => {
    return (
        <div>
            {tasks.map(task=><Task key={task.id} onDelete={onDelete} onToggle={onToggle} {...task}/>)}
        </div>
    )
}
Tasks.propTypes={
    tasks:PropTypes.arrayOf(PropTypes.object),
    deleteTask:PropTypes.func
}
export default Tasks
