import React from 'react';
import './Lines.css'

export default function Lines({nodelist, handleLineClick,lClasses}) {
    return(
        nodelist.map((node) =>{
            if(node==null)
              return null;
            const {x,y,id,adj} = node;
            const e = adj.map( (v) => {
              //can be null because of setstate async
              if(nodelist[v] && v>id){
                let lClass = nodelist[id].lClasses.has(v)?nodelist[id].lClasses.get(v):null;
                return <DrawLine  key={getkey(id,v)} u={id} v={v} onClick={handleLineClick} isDrawing="1" x1={x} y1={y} x2={nodelist[v].x} y2={nodelist[v].y} lClass={lClass} />
              }
              return null;
            });
            return e;
          })
    );
}

export function DrawLine(props){
    if(props.isDrawing){
    // console.log(props.isDrawing,'from : ',props.x1,' ',props.y1,' to ',props.x2,' ',props.y2);
      return <line id={getkey(props.u,props.v)} u={props.u} v={props.v} onClick={props.onClick} className={`svg-line ${props.isDrawing?"nohover":""} ${props.lClass}` } x1={`${props.x1}`} y1={`${props.y1}`} x2={`${props.x2}`} y2={`${props.y2}`}/>
    }
    else return null;
  }
  
const getkey = (u,v) => 'e' + Math.min(u,v).toString().concat('--',Math.max(u,v).toString());

