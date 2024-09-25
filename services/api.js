import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://fwzwqbsbvcafixqdyyho.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3endxYnNidmNhZml4cWR5eWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMjYxMTQsImV4cCI6MjA0MjgwMjExNH0.6ivUV8UOPcAgC5YcWGYrEHpicIOV1TduvWcD-g4cpH0",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3endxYnNidmNhZml4cWR5eWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMjYxMTQsImV4cCI6MjA0MjgwMjExNH0.6ivUV8UOPcAgC5YcWGYrEHpicIOV1TduvWcD-g4cpH0"
    }
})