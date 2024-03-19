import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bcppkcbwweequiecbvyd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcHBrY2J3d2VlcXVpZWNidnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3Nzg3MzMsImV4cCI6MjAyNjM1NDczM30.qJXZxHbGBCR71Opey2e5IfpE2L3MoZAGXes6QxNCN-Q'
const supabase = createClient(supabaseUrl, supabaseKey)


let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for(let book of books) {
    let bookList = document.getElementById('books'); 
    bookList.innerHTML += `<li>${book.title}</li>`;
  }