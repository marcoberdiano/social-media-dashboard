const Switch = ({onClick}) => {
    return ( 
        <label className="switch">
            <input onClick={onClick} type="checkbox" className="input"/>
            <span className="slider"/>
        </label>
     );
}
 
export default Switch;