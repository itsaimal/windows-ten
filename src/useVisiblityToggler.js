import React, {useState} from 'react'

function useVisiblityToggler(component,visiblity= false) {

    const [visible,setVisiblity]=useState(()=> visiblity);
    return [
        visible ? component : null,
        () => setVisiblity (v => !v)
    ];
}

export default useVisiblityToggler
