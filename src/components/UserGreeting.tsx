interface UserState{
    isLoggedIn: boolean,
    username: string,
}


const UserGreeting = (props:UserState) => {

    return(
        <div>
            {props.username}
        </div>
    );
};
export default UserGreeting