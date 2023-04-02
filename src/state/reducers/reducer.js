const initialState = {

    // name : 'sarini',

   person: {
      username: '',
      pass : ''
    },
    interns: [
      {
        name: 'sarini',
        password: '123'
      },
      {
        name: 'varshini',
        password: 'abc'
      },
      {
        name: 'aravind',
        password: 'xyz'
      },
      {
        name: 'nantha',
        password: '456'
      },
    ]
  };
  
  
  const reducer1 = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE-INTERN':
        return {
          ...state,
          interns: state.interns.filter((intern) => intern.name !== action.payload)
        };

        case 'ADD-INTERN':
        return {
          // ...state.interns,
          // interns: state.interns.push(action.payload)
          interns: [
            ...state.interns,
            action.payload
          ]
  
        };

        // case 'EDIT-INTERN':
        // return {
        //     ...state,
        //     interns : state.interns.map((intern) => 
        //     {
        //       if(intern.name == action.payload.paramname && intern.name == action.payload.parampass)
        //           intern =action.payload.updatedPerson;
        //     }
        //       )
        // };

        case 'EDIT-INTERN':
        return {
            ...state,
            interns: state.interns.map((intern) => {
            if(intern.name === action.payload.paramname && intern.password === action.payload.parampass) {
            // return action.payload.updatedPerson;
            intern = action.payload.updatedPerson;

      }
      return intern;
    })
  };

      default:
        return state;
    };

    
  };
  

    // if(action.type == 'EDIT-INTERN'){

    // }
    
export default reducer1;