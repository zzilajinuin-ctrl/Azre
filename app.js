const GITHUB_OWNER = "zzilajinuin-ctrl";
const REPO_NAME = "Azre";
const LABEL = "Aasixin_AJA 😜";
const SYMBOLS = ["✦", "☾", "❖", "♜", "◇", "⚝", "☼", "♧", "✧", "☘"];
const $ = id => document.getElementById(id);
const repo = `https://github.com/${GITHUB_OWNER}/${REPO_NAME}`;
const newIssue = `${repo}/issues/new?template=pesan.yml`;
$("githubLink").href = repo;
$("sendTop").href = newIssue;

function esc(s="") { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function field(body, heading) {
  const re = new RegExp("^###\\s+" + heading + "\\s*\n+([\\s\\S]*?)(?=\\n###\\s+|$)", "mi");
  return (body.match(re) || [])[1]?.trim() || "";
}
function parseBody(body="") {
  const symbol = field(body, "Simbol profil") || "✦";
  const description = field(body, "Deskripsi singkat") || "Anggota komunitas";
  const message = field(body, "Pesan") || body.trim();
  return {symbol: SYMBOLS.includes(symbol) ? symbol : "✦", description, message};
}
function dateText(date) { return new Date(date).toLocaleString("id-ID", {dateStyle:"medium",timeStyle:"short"}); }
async function load() {
  const feed = $("feed"); feed.innerHTML = '<div class="loading">Memuat pesan...</div>';
  try {
    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${REPO_NAME}/issues?state=open&labels=${encodeURIComponent(LABEL)}&per_page=50`;
    const response = await fetch(url, {headers:{Accept:"application/vnd.github+json"}});
    if (!response.ok) throw new Error(response.status === 404 ? "Repositori belum ditemukan. Periksa nama pemilik dan repositori di app.js." : "GitHub belum bisa dihubungi. Coba lagi sebentar.");
    const issues = (await response.json()).filter(x => !x.pull_request);
    if (!issues.length) { feed.innerHTML = '<div class="empty">Belum ada pesan. Jadilah yang pertama mengisi ruang ini ✦</div>'; return; }
    feed.innerHTML = issues.map(issue => {
      const p = parseBody(issue.body || "");
      return `<article class="post"><div class="avatar">${esc(p.symbol)}</div><div class="post-main"><div class="post-head"><strong>${esc(issue.user.login)}</strong><time>${esc(dateText(issue.created_at))}</time></div><div class="description">${esc(p.description)}</div><div class="message">${esc(p.message || issue.title)}</div><a class="issue-link" href="${esc(issue.html_url)}" target="_blank" rel="noopener">LIHAT / BALAS DI GITHUB ↗</a></div></article>`;
    }).join("");
  } catch (err) { feed.innerHTML = `<div class="empty">${esc(err.message)}<br><br>Pastikan repo publik, Issues aktif, dan label pesan-komunitas sudah dibuat.</div>`; }
}
$("refreshBtn").onclick = load;
load();
