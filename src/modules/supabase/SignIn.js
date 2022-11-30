import { supabase } from '../../supabase'

export default async function SignIn(email, password) {
    try {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        
    } catch (error) {
        alert(error.error_description || error.message);
    }
}