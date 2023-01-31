const SUPABASE_URL = 'https://agyutucvgxjlkhiwcbon.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFneXV0dWN2Z3hqbGtoaXdjYm9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyMzg2NDcsImV4cCI6MTk4OTgxNDY0N30.BzK5Q5-MFu_4cAlsgE56qseE8UABfriLz24WrqUhsPY';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createItem(item, quantity) {
    const response = await client.from('list_items').insert([{ item, quantity }]);
    return response;
}

export async function getItem() {
    let response = await client.from('list_items').select('*');
    return response;
}

export async function buyItem(id) {
    const response = await client
        .from('list_items')
        .update({ is_bought: true })
        .match({ user_id: id });
    return response;
}

export async function deleteAllItems() {
    const response = await client.from('list_items').delete().match({ user_id: getUser().id });
    return response;
}
