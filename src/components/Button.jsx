import PropTypes from 'prop-types'

function Button(props)
{
     const page=props.fun;
     const text=props.text;
    return(
        <button onClick={page} className="btn float-start" id="button">{text}</button>
    );
}

export default Button