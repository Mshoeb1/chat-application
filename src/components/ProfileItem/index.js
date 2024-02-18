import "./index.css"

const ProfileItem = props => {
    const {userDetails} = props
    const {testName, isMessaged, lastSeen} = userDetails
    return (
        <div className="profile-item-container">
            <h1 className="profile-heading">{testName}</h1>
            <div className="profile-text-container">
                <p className="is-messaged">{isMessaged}</p>
                <p className="last-seen">{lastSeen}</p>
            </div>
        </div>
    )
}

export default ProfileItem