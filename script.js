const supabaseUrl = "https://ekbkdifscqphlotmrkwi.supabase.co";
const supabaseKey = "sb_publishable_8gVK9JR0Dt7ldxrS5thUAQ_u3vOvsgl";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function searchName() {
    const input = document.getElementById("searchInput").value.trim();
    const result = document.getElementById("result");

    if (!input) {
        result.innerHTML = "<p>অনুগ্রহ করে একটি নাম লিখুন।</p>";
        return;
    }

    result.innerHTML = "<p>Searching...</p>";

    const { data, error } = await supabase
        .from("names")
        .select("*")
        .ilike("name", `%${input}%`);

    if (error) {
        console.error(error);
        result.innerHTML = `<p>Error: ${error.message}</p>`;
        return;
    }

    if (!data || data.length === 0) {
        result.innerHTML = "<p>নাম পাওয়া যায়নি।</p>";
        return;
    }

    let html = "";

    data.forEach(item => {
        html += `
            <div style="padding:15px;border:1px solid #ddd;margin:10px 0;border-radius:8px;">
                <h2>${item.name}</h2>
                <p><b>Meaning:</b> ${item.meaning}</p>
                <p><b>Origin:</b> ${item.origin}</p>
                <p><b>Country:</b> ${item.countries}</p>
            </div>
        `;
    });

    result.innerHTML = html;
}
