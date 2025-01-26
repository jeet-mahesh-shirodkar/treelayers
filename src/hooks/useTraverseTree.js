const useTraverseTree = () => {
    function insertNode(tree,folderId,nodeValue,isFolder){
        if(tree.id === folderId && tree.isFolder){
            tree.items.unshift({
                id:new Date().getTime(),
                name:nodeValue,
                isFolder,
                items:[]
            })
            return tree;
        }
        //Deep first Search Algo
        let latestNode = [];
        latestNode = tree.items.map((obj)=>{
            return insertNode(obj,folderId,nodeValue,isFolder);
        })
        return {...tree,items:latestNode};
    }
    return {insertNode};
}

export default useTraverseTree;