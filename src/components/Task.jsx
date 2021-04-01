import {AiTwotoneDelete} from 'react-icons/ai'
const Task = ({onToggle,onDelete,id,text,day,reminder}) => {
    return (
        <div onDoubleClick={()=>onToggle(id)} className={`task ${reminder?"reminder":""}`}>
            <h3>{text} <AiTwotoneDelete style={{cursor:'pointer',color:'red'}} onClick={()=>onDelete(id)}/></h3>
            <p>{day}</p>
        </div>
    )
}

export default Task
