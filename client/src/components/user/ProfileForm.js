import React, {useState} from "react";

function ProfileForm({currentUser, setToggleProfile, setProfile}){
    const [profileData, setProfileData] = useState({
        fullname: currentUser.profile === null ? "" : currentUser.profile.fullname,
        birthday: currentUser.profile === null ? "" : currentUser.profile.birthday,
        address: currentUser.profile === null ? "" : currentUser.profile.address,
        phone_number: currentUser.profile === null ? "" : currentUser.profile.phone_number,
        email: currentUser.profile === null ? "" : currentUser.profile.email,
        user_id: currentUser.id
    })
    function handleProfileOnChange(e){
        const key = e.target.name
        setProfileData({...profileData, [key]: e.target.value})
    }
    function handleProfileSubmit(e){
        e.preventDefault()
        console.log(profileData)
        fetch((currentUser.profile === null ? '/profiles' : `/profiles/${currentUser.profile.id}`),{
            method: currentUser.profile === null ? 'POST' : "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profileData)
        })
        setToggleProfile(toggleProfile => !toggleProfile)
        setProfile(profile => !profile)
    }
    return <div className="profile-form-data">
        <form onSubmit={handleProfileSubmit} className="form-detail-container">
            <div>
                <label>Full Name</label>
                <input type="text" name="fullname" value={profileData.fullname} onChange={handleProfileOnChange}></input>
            </div>
            <div>
                <label>Date of Birth</label>
                <input type="text" name="birthday" value={profileData.birthday} onChange={handleProfileOnChange}></input>
            </div>
            <div>
                <label>Address</label>
                <input type="text" name="address" value={profileData.address} onChange={handleProfileOnChange}></input>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" name="phone_number"value={profileData.phone_number} onChange={handleProfileOnChange}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={profileData.email} onChange={handleProfileOnChange}></input>
            </div>
            <div>
                <button type="submit">{currentUser.profile === null? "Create your profile": "Update your profile" }</button>
                <button onClick={() => setToggleProfile(toggleProfile => !toggleProfile)}>Cancel Update</button>
                </div>
        </form>
        
    </div>
}


export default ProfileForm 