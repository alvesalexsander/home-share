import './TopBar.css';
import { UserName } from './UserName/UserName';

function TopBar(props) {

    const userName = props.userName;
    const updateUserName = props.setUserName;

    return (
        <div className="top-bar">
            <h1>Home Share</h1>
            <UserName
            userName={userName}
            handleUserNameInput={updateUserName}/>
        </div>
    )
}

export { TopBar };