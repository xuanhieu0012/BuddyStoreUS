import React, {useState} from "react";
import ProfileForm from "./ProfileForm";

function ProfileUser({currentUser, setProfile}){
    const [toggleProfile, setToggleProfile] =useState(false)
    console.log(currentUser.profile)
    const displayProfile = currentUser.profile === null ? <button onClick={() => setToggleProfile(toggleProfile => !toggleProfile)} >Create Profile</button> : <div className="profile-user">
        <div>
            <button onClick={() => setToggleProfile(toggleProfile => !toggleProfile)}>Update Profile</button>
        </div>
        <div>
            <h3>Full name:</h3>
            <p>{currentUser.profile.fullname}</p>
        </div>
        <div>
            <h3>Date of Birth:</h3>
            <p>{currentUser.profile.birthday}</p>
        </div>
        <div>
            <h3>Phone Number:</h3>
            <p>{currentUser.profile.phone_number}</p>
        </div>
        <div>
            <h3>Address:</h3>
            <p>{currentUser.profile.address}</p>
        </div>
        <div>
            <h3>Email:</h3>
            <p>{currentUser.profile.email}</p>
        </div>
    </div>
    
    return <div>
        {toggleProfile=== false ? displayProfile : null}
        {toggleProfile === false ? null : <ProfileForm currentUser={currentUser} setToggleProfile={setToggleProfile} setProfile={setProfile}/>}
    </div>
}


export default ProfileUser 