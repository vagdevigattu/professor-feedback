import PropTypes from 'prop-types'

function Input2(props)
{
    const val=props.category;
    const place=props.holder;
    const type=props.type;
    const fun=props.fun;
    return(
        <div className="mb-3">
            <label htmlFor={val} className='form-label h5'>{place}</label>
            <input onChange={fun} type={type} name={val} id={val} className="form-control " />
        </div>
    );
}

export default Input2