import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}<span>Required</span></label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

renderField.propTypes = {
  input: React.PropTypes.object,
  label: React.PropTypes.string,
  type: React.PropTypes.string,
  meta: React.PropTypes.object
}

export default renderField
