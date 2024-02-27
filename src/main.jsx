import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const cardHeader =[{id:1,
                    content:"FREE",
                    payment:"$0/month"
                },{ id:2,
                    content:"PLUS",
                    payment:"$9/month" 
                },{
                    id:3,
                    content:"PRO",
                    payment:"$49/month"
                }]


const ListItems =[[{id:1,
                    content:"single User",
                    important: true,
                    disabled:false                    
                },{id:2,
                   content:"50GB Storage",
                    important:true,
                    disabled:false
                },{ id:3,
                    content:"Unlimited Public Projects",
                    important:true,
                    disabled:false
                },{
                    id:4,
                    content:"Community Access",
                    important:true,
                    disabled:false
                },{
                    id:5,
                    content:"Unlimited  Private Projects",
                    important:false,
                    disabled:true
                },{
                    id:6,
                    content:"Dedicated Phone Support",
                    important:false,
                    disabled:true
                },{
                    id:7,
                    content:"Free Subdomain",
                    important:false,
                    disabled:true
                },{
                    id:8,
                    content:"Monthly Status Reports",
                    important:false,
                    disabled:true
                }]
                ,[{id:1,
                     content:"5 Users",
                     important: true,
                     disabled:false                    
                 },{id:2,
                    content:"50GB Storage",
                     important:true,
                     disabled:false
                 },{ id:3,
                     content:"Unlimited Public Projects",
                     important:true,
                     disabled:false
                 },{
                     id:4,
                     content:"Community Access",
                     important:true,
                     disabled:false
                 },{
                     id:5,
                     content:"Unlimited  Private Projects",
                     important:true,
                     disabled:false
                 },{
                     id:6,
                     content:"Dedicated Phone Support",
                     important:true,
                     disabled:false
                 },{
                     id:7,
                     content:"Free Subdomain",
                     important:true,
                     disabled:false
                 },{
                     id:8,
                     content:"Monthly Status Reports",
                     important:false,
                     disabled:true
                 }]
                 ,[{id:1,
                     content:"Unlimited Users",
                     important: true,
                     disabled:false                    
                 },{id:2,
                    content:"50GB Storage",
                     important:true,
                     disabled:false
                 },{ id:3,
                     content:"Unlimited Public Projects",
                     important:true,
                     disabled:false
                 },{
                     id:4,
                     content:"Community Access",
                     important:true,
                     disabled:false
                 },{
                     id:5,
                     content:"Unlimited  Private Projects",
                     important:true,
                     disabled:false
                 },{
                     id:6,
                     content:"Dedicated Phone Support",
                     important:true,
                     disabled:false
                 },{
                     id:7,
                     content:"Free Subdomain",
                     important:true,
                     disabled:false
                 },{
                     id:8,
                     content:"Monthly Status Reports",
                     important:false,
                     disabled:true
                 }]];


ReactDOM.createRoot(document.getElementById('root')).render( 
<App ListItems ={ListItems} cardHeader = {cardHeader} /> 
)
