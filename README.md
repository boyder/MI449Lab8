# MI449Lab8

I got this part from chat-gpt because I was having trouble getting the Initialize apk function from supabase to work

 const supabasePromise = new Promise((resolve, reject) => {
    window.addEventListener('load', () => {
        if (window.supabase) {
            resolve(window.supabase.createClient(
                'https://bcppkcbwweequiecbvyd.supabase.co',
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcHBrY2J3d2VlcXVpZWNidnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3Nzg3MzMsImV4cCI6MjAyNjM1NDczM30.qJXZxHbGBCR71Opey2e5IfpE2L3MoZAGXes6QxNCN-Q'
            ));
        } else {
            reject(new Error('Supabase library not loaded.'));
        }
    });
});

async function fetchBooks() {
    try {
        const supabase = await supabasePromise;
        const { data: books, error } = await supabase
            .from('books')
            .select('*');

        if (error) {
            console.error('Error fetching books:', error.message);
            return;
        }