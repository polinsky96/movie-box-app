import { supabase } from '../../supabase'

export default async function SignUp(email, password, username) {
    const { error } = await supabase.auth.signUp({
        email, 
        password,
        options: {
            data: {
                username
            }
        }
    });

    if (error) throw error;
}