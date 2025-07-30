const username = "A14uploder_bot";
const base64 = window.location.pathname.substring(1);

if (base64) {
  try {
    if (/^[A-Za-z0-9\-\_:]+$/.test(base64)) {
      const telegramUrl = `https://t.me/${username}?start=${base64}`;
      window.location.replace(telegramUrl);
    } else {
      showInvalid();
    }
  } catch (err) {
    showInvalid();
  }
}

function showInvalid() {
  document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML = `
      <div class="container error-container">
        <div class="tech-grid"></div>
        <div class="header">
          <div class="pfp-container">
            <img src="https://files.catbox.moe/nyjkcw.jpg" alt="Kiwi Profile" class="pfp">
          </div>
          <div class="title-section">
            <h1 class="error-title">Access Denied</h1>
            <p class="subtitle">KWSA14 - Security Alert</p>
          </div>
        </div>
        <div class="error-desc">
          <strong>Connection terminated.</strong> Your access token is invalid or has expired. The secure gateway has blocked this request for security reasons.
        </div>
        <div class="report-section">
          <div class="report-title">🚨 Security Incident</div>
          <div class="report-content">Report to [A14] Rebecca: <a href="https://t.me/A14_Assistant_bot" target="_blank" class="userid">@A14_Assistant_bot</a></div>
        </div>
        <div class="footer">
          POWERED BY PROJECT-A14 • MANAGED BY KIWI • KWSA14
        </div>
      </div>`;
  });
}
