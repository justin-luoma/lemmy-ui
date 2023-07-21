import { initializeSite, setupDateFns } from "@utils/app";
import { hydrate } from "inferno-hydrate";
import { BrowserRouter } from "inferno-router";
import { App } from "../shared/components/app/app";
import { UserService } from "../shared/services";

import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";

localStorage.setItem("blur-nsfw", localStorage.getItem("blur-nsfw") ?? "true");
localStorage.setItem(
  "blur-nsfw-community",
  localStorage.getItem("blur-nsfw-community") ?? "true"
);
localStorage.setItem(
  "auto-expand",
  localStorage.getItem("auto-expand") ?? "false"
);

async function startClient() {
  initializeSite(window.isoData.site_res);

  await setupDateFns();

  const wrapper = (
    <BrowserRouter>
      <App user={UserService.Instance.myUserInfo} />
    </BrowserRouter>
  );

  const root = document.getElementById("root");

  if (root) {
    hydrate(wrapper, root);
  }
}

startClient();
