import { useGetUserProfileQuery } from '../../store/api/profile.service'

const Profile = () => {
    const { data: userData } = useGetUserProfileQuery(null);

    console.log(userData, "user data from the backend")

    return (
        <div>Profile page</div>

    )
}

export default Profile