export default function Money(props) {
    console.log("props ==", props);
    function handleChange(e) {
        props.transformFunction(e.target.value)
    }
    return <div>
        <fieldset>
            <legend>{props.text}</legend>
            <span>{props.data}</span>
            <input type="text" value={props.value} onChange={handleChange}/>
        </fieldset>
    </div>
}