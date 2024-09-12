import PropTypes from 'prop-types'

function Input(props)
{
    const fun=props.fun;
    const val=props.category;
    const place=props.holder;
    const type=props.type;
    return(
        <div className=' form-floating mb-3 mt-3'>
            <input type={type} name={val} id={val} placeholder='...' className="form-control w-75" onChange={fun} />
            <label htmlFor={val} className='form-label'>{place}</label>
        </div>
    );
}


export default Input