import { supabase } from '../../supabase'

export default async function SignIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;

    return { data, error }
}