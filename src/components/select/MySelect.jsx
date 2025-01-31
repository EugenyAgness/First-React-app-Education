import React from "react";

// const MySelect = ({options, defaultValue, value, onChange}) => {
//     return (

//         <select style={{margin: '10px'}} value={value} onChange={e => onChange(e.target.value)}>
//             <option disabled value=''>{defaultValue}</option>
//             {options.map(option => 
//                 <option key={option.value} value={option.value}>
//                     {option.name}
//                 </option>)}
//         </select>
//     )
// }

const MySelect = ({ options, value, defaultValue, onChange}) => {

    return (

        <select value={value} onChange={event => onChange(event.target.value)}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}

        </select>

    )
}

export default MySelect;