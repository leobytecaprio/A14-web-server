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

