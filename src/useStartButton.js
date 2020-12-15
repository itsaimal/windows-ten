import React, {useState} from 'react';

function useStartButton(component,visiblity= false) {
    
    const [visible,setVisiblity]=useState(()=> visiblity);
    return [
        visible ? component : null,
        () => setVisiblity (v => !v)
    ];
}

export default useStartButton
