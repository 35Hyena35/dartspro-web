export const locales = { tr:"Türkçe", en:"English", de:"Deutsch", zh:"中文" } as const;

const dict = {
  tr:{ tagline:"Skor • İdman • Turnuva • Canlı", play:"Oyna", practice:"İdman" },
  en:{ tagline:"Score • Practice • Tournaments • Live", play:"Play", practice:"Practice" },
  de:{ tagline:"Score • Training • Turniere • Live", play:"Spielen", practice:"Training" },
  zh:{ tagline:"计分 • 训练 • 锦标赛 • 直播", play:"对战", practice:"训练" }
};
export const getDict = (l:keyof typeof locales)=>{
  const forced = (typeof window!=="undefined" && localStorage.getItem("locale")) as keyof typeof locales | null;
  const pick = forced || l;
  return dict[pick] ?? dict.en;
};
