
function copyDiscordCommand(btn) {
  const command = btn.parentElement.querySelector(".discord-command code").innerText.trim();

  navigator.clipboard.writeText(command).then(() => {
    btn.textContent = "✓";
    setTimeout(() => btn.textContent = "⧉", 1200);
  });
}

