import { mux } from "./services/mux.js";

async function createRenditions() {
  const assets = await mux.Video.Assets.list({
    limit: 100,

    // Change this from 1 to N based on how many assets you have and rerun the script
    page: 2,
  });

  assets.forEach((asset) => {
    console.log('Updating ' + asset.id)
    mux.Video.Assets.updateMp4Support(asset.id, { mp4_support: "standard" });
  });
}

createRenditions();
