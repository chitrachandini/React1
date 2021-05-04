export const UserInfo = ({user}) => {
    console.log(user.name);
    return(
        <div>Email:{user.email}
        <p>phone:{user.phone}</p>
        </div>
    )
}