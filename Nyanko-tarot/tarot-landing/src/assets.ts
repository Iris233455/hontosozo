type AssetMap = Record<string, string>;

function toAssetMap(modules: Record<string, string>): AssetMap {
  return Object.fromEntries(
    Object.entries(modules).map(([path, url]) => [
      path.split("/").pop() ?? path,
      url,
    ]),
  );
}

const logoAssets = toAssetMap(
  import.meta.glob("../../Logo/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>,
);

const screenshotAssets = toAssetMap(
  import.meta.glob("../../Screenshot/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>,
);

const riderWaiteAssets = toAssetMap(
  import.meta.glob("../../tarot/rider_waite/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>,
);

const catAssets = toAssetMap(
  import.meta.glob("../../tarot/cat/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>,
);

export const tarotAppLogo =
  logoAssets["tarot_app_logo.png"] ?? "/tarot_app_logo.svg";

export const featureIcons = {
  tarot: logoAssets["tarot.png"] ?? tarotAppLogo,
  cat: logoAssets["cat.png"] ?? tarotAppLogo,
  magicBook: logoAssets["magic-book.png"] ?? tarotAppLogo,
};

export function getScreenshot(name: string) {
  return screenshotAssets[name] ?? "";
}

export function getRiderWaiteCardImage(name: string) {
  return riderWaiteAssets[name] ?? "";
}

export function getCatCardImage(name: string) {
  return catAssets[name] ?? "";
}
