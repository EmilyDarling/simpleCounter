import React from "react";

        

const CardBase = (props) => {
	return (
                       
            <div className="bg-black rounded-3 border border-3 border-secondary mt-1" style={{width:150, height:190}}>
                <p className= "text-center mb-3" style={{fontSize:150}}>{props.number}</p>
                <span>{props.icon}</span>
            </div>
            
        
    );
};

export default CardBase;