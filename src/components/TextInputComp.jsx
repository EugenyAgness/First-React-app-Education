import React, { useState } from "react";

function TextInputComp() {
    const [val, setValue] = useState('text');


    return (
        <div>
            <input className="inp_text" type="text" value={val} onChange={event => setValue(event.target.value)} />
        </div>
    );
}

export default TextInputComp;