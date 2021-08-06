import React from 'react';

const SelectList = ({ helper, name, handleInputChange }) => {

    return (
      <select 
        required
          className="btn col-12 border" 
          name={ name }
          title="Selecciona un"
          onChange={ handleInputChange }
        >
          {
            helper &&
            helper.map(( help, index ) => (
              <option key={ index } value={ help }>{ help }</option>
            ))
          }

      </select>
    )
}

export default SelectList;
