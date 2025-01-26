import { useState } from "react";
import './folder.css';

function Folder({handleInsertNode,explorer}){

    const [expand,setExpand] = useState(false);
    const [showInput,setShowInput] = useState({
        visible:false,
        isFolder:null
    })

    const handleAdd = (e,isFolder) =>{
        console.log(e);
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible:true,
            isFolder
        })
    }

    const handleNewNode = (e) => {
        console.log(e)
        if(e.keyCode === 13 && e.target.value){
            //Call the add logic
            handleInsertNode(explorer.id,e.target.value,showInput.isFolder);
            setShowInput({...showInput,visible:false});
        }
    }

    if(explorer.isFolder){
        return(
            <div className="rootParent">
                <div className="rootFolders" 
                 onClick={()=>setExpand(!expand)}>
                        <span>📁{explorer.name}</span>
                        <div>
                            <button onClick={(e)=>handleAdd(e,true)}>
                                📁 +
                            </button>
                            <button onClick={(e)=>handleAdd(e,false)}>
                                📙 +
                            </button>
                        </div>
                </div>
                <div
                    style={{display:(expand)?"block":"none", padding:"5px"}} 
                    className="rootChildren">
                    {
                      showInput.visible && (<div className="inputContainer">
                        <span>{showInput.isFolder?"📁":"📙"}</span>
                        <input 
                        type="text"
                        onKeyDown={handleNewNode}
                        onBlur={()=>setShowInput({...showInput,visible:false})}
                        autoFocus
                        className="inputContainerInput"/>
                      </div>)  
                    }
                    {explorer.items.map((exp)=>{
                        return (
                            <Folder 
                                handleInsertNode={handleInsertNode}
                                key={exp.id} 
                                explorer={exp}/>
                        )
                    })}
                </div>
            </div>    
        )
    }else{
        return(
            <span className="rootFiles" 
                  style={{padding:"05px"}}>
                    📙{explorer.name}
            </span>
        )
    }
    
}

export default Folder;