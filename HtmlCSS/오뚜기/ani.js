var anmation = bodymovin.loadAnimation({
  container: document.getElementById("animContainer"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "ottogi.json", // 2-2. 다운받아서 사용.
});
