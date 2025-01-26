export const explorer = {
    id: "1",
    name:"root",
    isFolder: true,
    items: [
        {
        id: "2",
        name: "public",
        isFolder:true,
        items: [
            {
                id:"2.1",
                name:"index.html",
                isFolder:false,
                items: []
            },
            {
                id:"2.2",
                name:"index.css",
                isFolder:false,
                items: [] 
            },
            {
                id:"2.3",
                name:"manifest.json",
                isFolder:false,
                items: [] 
            }]
        },
        {   
                id: "3",
                name: "src",
                isFolder:true,
                items: [
                    {
                        id:"3.1",
                        name:"App",
                        isFolder:true,
                        items: [
                            {
                                id:"3.11",
                                name:"App.js",
                                isFolder:false,
                                items:[] 
                            },
                            {
                                id:"3.12",
                                name:"App.css",
                                isFolder:false,
                                items:[] 
                            }
                        ]
                    },
                    {
                        id:"3.2",
                        name:"style.css",
                        isFolder:false,
                        items: [] 
                    },
                    {
                        id:"3.3",
                        name:"index.js",
                        isFolder:false,
                        items: [] 
                    }]
        },
        {
            id: "4",
            name:"package.json",
            isFolder: false,
            items:[]
        }
    ]
}
