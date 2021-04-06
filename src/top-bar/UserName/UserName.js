function UserName(props) {
    return (
        <div>
            Usuário:
            &nbsp;
            <input 
            type="text" 
            placeholder="Digite seu nome..."
            value={props.userName || ''}
            onChange={inputChanged}></input>
        </div>
    )

    function inputChanged(event) {
        props.handleUserNameInput(event.target.value);
    }
}



export { UserName };