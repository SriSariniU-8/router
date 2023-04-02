// export const Addintern = (amount) =>{
//     return (dispach) =>{
//         dispach({
//             type: 'ADD-INTERN',
//             payload: amount
//         } )
//     }
// }

export const Deleteintern= (name) =>{
    return (dispatch) =>{
        dispatch({
            type: 'DELETE-INTERN',
            payload: name
        } )
    }
}

export const EditIntern= (updatedPerson,paramname,parampass) =>{
    return (dispatch) =>{
        dispatch({
            type: 'EDIT-INTERN',
            payload: {
                updatedPerson: updatedPerson,
                paramname: paramname,
                parampass: parampass

            }
        } )
    }
}

export const AddIntern= (newperson) =>{
    return (dispatch) =>{
        dispatch({
            type: 'ADD-INTERN',
            payload: newperson
        } )
    }
}

