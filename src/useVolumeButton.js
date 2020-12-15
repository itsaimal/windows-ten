import React, {useState} from 'react'

function useVolumeButton(component,visiblity= false) {
    const [visible,setVisiblity]=useState(()=> visiblity);
    return [
        visible ? component : null,
        () => setVisiblity (v => !v)
    ];
}

export default useVolumeButton
