import './Button.css'

const Button = ({ icon, color, handleClick })=>{
    return (
        <div className='button-wrapper' style={{ backgroundColor: color }} onClick={handleClick(icon)}>
            {icon}
            </div>
    );
}
export default Button;