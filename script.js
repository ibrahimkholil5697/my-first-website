const supabaseUrl = "https://ekbkdifscqphlotmrkwi.supabase.co";
const supabaseKey = "sb_publishable_8gVK9JR0Dt7ldxrS5thUAQ_u3vOvsgl";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function searchName() {
  const input = document.getElementById("searchInput").value.trim();

  if (!input) {
    document.getElementById("result").innerHTML = "<p>একটি নাম লিখুন।</p>";
    return;
  }

  const { data, error } = await supabase
    .from("names")
    .select("*")
    .ilike("name", input);

  if (error) {
    document.getElementById("result").innerHTML =
      "<p>ত্রুটি হয়েছে।</p>";
    console.log(error);
    return;
  }

  if (data.length === 0) {
    document.getElementById("result").innerHTML =
      "<p>নাম পাওয়া যায়নি।</p>";
    return;
  }

  let html = "";

  data.forEach(item => {
    html += `
      <h2>${item.name}</h2>
      <p><b>Meaning:</b> ${item.meaning}</p>
      <p><b>Origin:</b> ${item.origin}</p>
      <p><b>Country:</b> ${item.countries}</p>
      <hr>
    `;
  });

  document.getElementById("result").innerHTML = html;
}
