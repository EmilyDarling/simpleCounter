import React from "react";

        

const CardBase = (props) => {
	return (
                       
            <div className="bg-black rounded-3 border border-3 border-secondary mt-1" style={{width:150, height:190}}>
                {props.number ? <p className= "text-center card-inner text-white" style={{fontSize:150, height:170}}>{props.number}</p> :
                <i className="far fa-clock card-inner text-white" style={{fontSize:120, marginTop: 35}}></i> }
            </div>
        
    );
};

export default CardBase;