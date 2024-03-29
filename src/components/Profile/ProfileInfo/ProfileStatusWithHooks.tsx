import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string | null) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}> {props.status || "----"}</span>
                </div>
            }
            {editMode &&
            <div>
                <input  onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode}
                        value={status}/>
            </div>
            }
        </div>
    )
}

