import './App.css';
import Folder from './components/Folder';
import {useState} from 'react';
import {explorer} from './data/folderData';
import useTraverseTree from './hooks/useTraverseTree';

function App() {
  
  const [explorerData, setExplorerData] = useState(explorer);
  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId,nodeValue,isFolder) => {
    const completeTree = insertNode(explorerData,folderId,nodeValue,isFolder);
    setExplorerData(completeTree);
  }

  return (
    <div className="App">
      <div style={{margin:"10px", alignItems:"center" }}>Hello File Explorer !</div>
      {console.log(explorerData)}
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
    </div>
  );
}

export default App;
