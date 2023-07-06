import { useEffect, useState } from "react";
import supabase from "../../lib/supabase";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Accounts() {
    const [userProfile, setUserProfile] = useState(null)
    const session = useSession();

    useEffect(() => {
        async function fetchProfile() {
            if (session?.user?.id) {
                const { data, error } = await supabase
                  .from('profiles')
                  .select('*')
                  .eq('user_id', session.user.id)
                  .single()
                if (error) {
                    console.log('error', error)

                } else {
                    setUserProfile(data)
                }
            }
        }
        fetchProfile()
    }, [session])

    const handleUpdateProfile = async (event) => {
        event.preventDefault()
        const { full_name, bio } = event.target.elements
        const updates = {
            full_name: full_name.value,
            bio: bio.value,
        }
        const { error } = await supabase
           .from('profiles')
           .update(updates)
           .eq('user_id', session.user.id)
        if (error) {
            console.log('error', error)
        } else {
            alert('Profile Updated Successfully!')
            setUserProfile({ ...userProfile, ...updates })
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="container max-w-xl mx-auto mt-5">
            <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
            {userProfile ? (
                <>
                <form onSubmit={handleUpdateProfile}>
                    <label className="block mb-4">
                        <p className="inline-block">Full Name:</p>
                        <input
                            type="text"
                            name="full_name"
                            defaultValue={userProfile.full_name}
                            className="w-72 border rounded inline-block mx-3 py-2 px-3"
                        />
                    </label>
                    <label className="block mb-4">
                        <p className="inline-block">Biography:</p>
                        <textarea
                            name="bio"
                            defaultValue={userProfile.bio}
                            className="w-72 border rounded inline-block mx-3 py-2 px-3"
                        />
                    </label>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update Profile
                    </button>
                </form>
                </>
            ) : <p>Loading...</p>
            }
            </div>
        </div>
    )

}