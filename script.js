const photos = [
  { file: "001.jpg", date: "2026/3/31", caption: "跟栗子5151" },
  { file: "002.jpg", date: "2026/3/31", caption: "蘇西想跑" },
  { file: "003.jpg", date: "2026/3/31", caption: "去找小豬拍照" },
  { file: "004.jpg", date: "2026/3/31", caption: "過期了" },
  { file: "005.jpg", date: "2026/3/31", caption: "剛洗好濕濕的" },
  { file: "006.jpg", date: "2026/3/31", caption: "笑一個(•ᴗ•)" },
  { file: "007.jpg", date: "2026/3/12", caption: "沖繩飯店的浴缸" },
  { file: "008.jpg", date: "2026/3/13", caption: "下雨的萬座毛" },
  { file: "009.jpg", date: "2026/3/13", caption: "沖繩海邊" },
  { file: "010.jpg", date: "？？？", caption: "看起來很冷？" },
  { file: "011.jpg", date: "2024", caption: "疊疊樂" },
  { file: "012.jpg", date: "2026/2/26", caption: "栗子小豬" },
  { file: "013.jpg", date: "2026/2/26", caption: "蘇西小豬" },
  { file: "014.jpg", date: "2023/1/1", caption: "純琳元朋婚禮 的我們" },
  { file: "015.jpg", date: "2023", caption: "跟熊熊拍照" },
  { file: "016.jpg", date: "2023", caption: "大吃一口" },
  { file: "017.jpg", date: "2021", caption: "軟綿綿" },
  { file: "018.jpg", date: "？？？", caption: "一隻耳機" },
  { file: "019.jpg", date: "2019/11/3", caption: "去zooooooo" },
  { file: "020.jpg", date: "2019/2/11", caption: "北車咖" },
  { file: "021.jpg", date: "???", caption: "demi巨人" },
  { file: "022.jpg", date: "2023/2/14", caption: "情人節花" },
  { file: "023.jpg", date: "2023/4/15", caption: "風沙很大的一天" },
  { file: "024.jpg", date: "2025", caption: "橫山書法公園閒人" },
  { file: "025.jpg", date: "???", caption: "熊熊第一次洗澡" },
  { file: "026.jpg", date: "2019/12/1", caption: "社子漫拍" },
  { file: "027.jpg", date: "2021/10/2", caption: "生日爆炸頭" },
  { file: "028.jpg", date: "2022/10/2", caption: "生日快樂" },
  { file: "029.jpg", date: "2023/2/14", caption: "給demi的情人節花2" },
  { file: "030.jpg", date: "???", caption: "興奮到模糊" },
  { file: "031.jpg", date: "2023/2/12", caption: "去水美園就買了" },
  { file: "032.jpg", date: "2019/2/11", caption: "那天拍了好多張" },
  { file: "033.jpg", date: "2022", caption: "拍畢業照的我們" },
  { file: "034.jpg", date: "2024/12/6", caption: "超醜的壽星" },
  { file: "035.jpg", date: "???", caption: "髒髒的不能躺床" },
  { file: "036.jpg", date: "2023/4/26", caption: "梅酒！" },
  { file: "037.jpg", date: "2019/10/15", caption: "我回來了～" },
  { file: "038.jpg", date: "2020", caption: "當兵露兩點" },
  { file: "039.jpg", date: "2020/8/13", caption: "錘戒指" },
  { file: "040.jpg", date: "2022/10/2", caption: "demi24歲生日" },
  { file: "041.jpg", date: "2022", caption: "搬去青埔的第一年" },
  { file: "042.jpg", date: "2024", caption: "皇家新家的一角" },
  { file: "043.jpg", date: "2024/10/2", caption: "26歲生日" },
  { file: "044.jpg", date: "2019", caption: "剛來新家的熊熊" },
  { file: "045.jpg", date: "2021", caption: "萬里海邊看日出" },
  { file: "046.jpg", date: "2023", caption: "沙發馬鈴薯" },
  { file: "047.jpg", date: "2019/10/15", caption: "時隔四個月，有點陌生" },
  { file: "048.jpg", date: "2022/3/12", caption: "來看日出" },
  { file: "049.jpg", date: "2026/3/13", caption: "外貌check!" },
  { file: "050.jpg", date: "2019/11/3", caption: "看動物" },
  { file: "051.jpg", date: "2024/12/7", caption: "參加女孩們的燭光晚餐" },
  { file: "052.jpg", date: "？？？", caption: "太陽好大" },
  { file: "053.jpg", date: "2023", caption: "害羞洗澡" },
  { file: "054.jpg", date: "2022/10/2", caption: "阿奇＆demi&蛋糕" },
  { file: "055.jpg", date: "2023", caption: "水舞道一角" },
  { file: "056.jpg", date: "2023/2/12", caption: "戰利品！" },
  { file: "057.jpg", date: "2023/9/29", caption: "該洗澡了" },
  { file: "058.jpg", date: "2019/11/20", caption: "好吃" },
  { file: "059.jpg", date: "2023/10/1", caption: "花蓮好天氣" },
  { file: "060.jpg", date: "2024", caption: "仁愛匯風景" },
  { file: "061.jpg", date: "2023", caption: "害羞洗澡2" },
  { file: "062.jpg", date: "？？？", caption: "兩隻鍬形蟲？" },
  { file: "063.jpg", date: "2023/10/2", caption: "25歲了" },
  { file: "064.jpg", date: "2022/2/14", caption: "情人節快樂" },
  { file: "065.jpg", date: "2022/3/12", caption: "曬曬太陽" },
  { file: "066.jpg", date: "2022/3/12", caption: "我的戒指" },
  { file: "067.jpg", date: "？？？", caption: "甜點系女孩" },
  { file: "068.jpg", date: "2019/11/20", caption: "好吃" },
  { file: "069.jpg", date: "2024/12/7", caption: "參加女孩們的燭光晚餐2" },
  { file: "070.jpg", date: "2023/10/2", caption: "呱呱" },
  { file: "071.jpg", date: "2026/3/10", caption: "超喜歡的房間" },
  { file: "072.jpg", date: "2026/3/14", caption: "外貌check!2" },
  { file: "073.jpg", date: "2023/5/20", caption: "兩顆星星" },
  { file: "074.jpg", date: "2023/10/2", caption: "全家出門玩" },
  { file: "075.jpg", date: "2024", caption: "在家搓蔥油餅" },
  { file: "076.jpg", date: "2022/3/12", caption: "大便" },
  { file: "077.jpg", date: "？？？", caption: "黑白饅頭" },
  { file: "078.jpg", date: "2022/3/12", caption: "背一下" },
  { file: "079.jpg", date: "2023/12/16", caption: "12月壽星集合" },
  { file: "080.jpg", date: "2024", caption: "被床綁架" },
  { file: "081.jpg", date: "2022/12/15", caption: "去看keshi" },
  { file: "082.jpg", date: "2025/10/2", caption: "27歲惹" },
  { file: "083.jpg", date: "2022/10/2", caption: "這天的第N張" },
  { file: "084.jpg", date: "2023/12/5", caption: "不要27" },
  { file: "085.jpg", date: "2023/4/15", caption: "豪大一口" },
  { file: "086.jpg", date: "2020", caption: "//疫情期間//" },
  { file: "087.jpg", date: "？？？", caption: "公司拍拍" },
  { file: "088.jpg", date: "2025", caption: "奇怪造型" },
  { file: "089.jpg", date: "2023/12/24", caption: "睡一起" },
  { file: "090.jpg", date: "2025", caption: "偷笑～" },
  { file: "091.jpg", date: "2026/2/26", caption: "拍蘇西小豬" },
  { file: "092.jpg", date: "2023/10/2", caption: "三兄弟" },
  { file: "093.jpg", date: "2025/10/2", caption: "星星蠟燭" },
  { file: "094.jpg", date: "2022/8/13", caption: "垂一下" },
  { file: "095.jpg", date: "2025/10/2", caption: "醜八怪" },
  { file: "096.jpg", date: "2022/10/2", caption: "這天的第N百張" },
  { file: "097.jpg", date: "2024/12/7", caption: "參加女孩們的燭光晚餐3" },
  { file: "098.jpg", date: "2025", caption: "橫山書法公園閒人2" },
  { file: "099.jpg", date: "2023/10/2", caption: "？？" },
  { file: "100.jpg", date: "2023/10/2", caption: "金髮女孩" },
  { file: "101.jpg", date: "2025", caption: "痾" },
  { file: "102.jpg", date: "？？？", caption: "乘風破浪？" },
  { file: "103.jpg", date: "2023/5/20", caption: "露營趣" },
  { file: "104.jpg", date: "2023", caption: "居酒屋" },
  { file: "105.jpg", date: "2023/9/29", caption: "濕噠噠" },
  { file: "106.jpg", date: "？？？", caption: "兔子" },
  { file: "107.jpg", date: "2019/10/21", caption: "年輕的我們" },
  { file: "108.jpg", date: "2021", caption: "demi要畢業了" },
  { file: "109.jpg", date: "2023", caption: "藍藍又黃黃" },
  { file: "110.jpg", date: "2021/12", caption: "驚喜？" },
  { file: "111.jpg", date: "2024", caption: "大水梨" },
  { file: "112.jpg", date: "2019/2/11", caption: "一直都是臭臉" },
  { file: "113.jpg", date: "2025", caption: "無尾袋鼠" },
  { file: "114.jpg", date: "2024", caption: "電頭毛" },
  { file: "115.jpg", date: "2026/3/13", caption: "拍拍" },
  { file: "116.jpg", date: "2025/12", caption: "卷卷毛" },
  { file: "117.jpg", date: "2022/3/12", caption: "water" },
  { file: "118.jpg", date: "2026/3/10", caption: "超喜歡的房間2" },
  { file: "119.jpg", date: "2023", caption: "水舞道日常" },
  { file: "120.jpg", date: "2026/3/12", caption: "藍色房間1" },
  { file: "121.jpg", date: "2026/3/13", caption: "藍色房間2" },
  { file: "122.jpg", date: "2022/2/6", caption: "客美多阿奇" },
  { file: "123.jpg", date: "2019/2/11", caption: "呵呵臉" },
  { file: "124.jpg", date: "2020/2/2", caption: "社子日常" },
  { file: "125.jpg", date: "2023/1/1", caption: "純琳元朋婚禮的我們2" },
  { file: "126.jpg", date: "2019/10/15", caption: "真的好尷尬" },
  { file: "127.jpg", date: "2026/3/13", caption: "你拍我拍它" },
  { file: "128.jpg", date: "2026/3/13", caption: "沖繩飯店" },
  { file: "129.jpg", date: "2026/3/13", caption: "該出門了" },
  { file: "130.jpg", date: "2022/2/6", caption: "客美多Demi" },
  { file: "131.jpg", date: "2026/3/13", caption: "沖繩海" },
  { file: "132.jpg", date: "2023", caption: "水舞道日常2" },
  { file: "133.jpg", date: "2019/11/3", caption: "動物看我" },
  { file: "134.jpg", date: "2019/11/14", caption: "櫻桃小嘴" },
  { file: "135.jpg", date: "2024/11/22", caption: "房東阿姨的小禮物" },
  { file: "136.jpg", date: "2023", caption: "zzz" },
  { file: "137.jpg", date: "2025", caption: "怪造型" },
  { file: "138.jpg", date: "2019/2/11", caption: "認識不久的兩人" },
  { file: "139.jpg", date: "2019/10/20", caption: "來找Demi" },
  { file: "140.jpg", date: "2020", caption: "當兵時奇＆Demi" },
  { file: "141.jpg", date: "2020/2/2", caption: "社子日常2" },
  { file: "142.jpg", date: "2020/2/6", caption: "櫻花奇" },
  { file: "143.jpg", date: "2023/12/16", caption: "兩位壽星" },
  { file: "144.jpg", date: "2023/12/24", caption: "藍色毛毛蟲" },
  { file: "145.jpg", date: "2023/10/2", caption: "民宿休息" },
  { file: "146.jpg", date: "2023/4/26", caption: "還梅醉" },
  { file: "147.jpg", date: "2024/11/18", caption: "洗衣機守門人" },
  { file: "148.jpg", date: "2023", caption: "水舞道馬鈴薯" },
  { file: "149.jpg", date: "2024", caption: "奇怪" },
  { file: "150.jpg", date: "2023/12/16", caption: "慶生派對" },
  { file: "151.jpg", date: "2020", caption: "當兵時奇＆Demi 2" },
  { file: "152.jpg", date: "2024", caption: "水舞蹈日常 3" },
  { file: "153.jpg", date: "2019/6/15", caption: "淡水遊" },
  { file: "154.jpg", date: "2019/6/15", caption: "淡水遊" },
  { file: "155.jpg", date: "2021/12", caption: "世博幫我們拍的" },
  { file: "156.jpg", date: "2019/12/4", caption: "阿奇和熊熊" },
  { file: "157.jpg", date: "2019/11/27", caption: "阿奇" },
  { file: "158.jpg", date: "2019/11/27", caption: "我們" },
  { file: "159.jpg", date: "2019/11/27", caption: "Demi" },
  { file: "160.jpg", date: "2019/12/5", caption: "23歲" },
  { file: "161.jpg", date: "2019/12/1", caption: "社子拍拍" },
  { file: "162.jpg", date: "2019/11/27", caption: "(／／•／ω／•／／)" },
  { file: "163.jpg", date: "2019/12/1", caption: "社子拍拍" },
  { file: "164.jpg", date: "2019/12/1", caption: "社子拍拍" },
  { file: "165.jpg", date: "2019/11/27", caption: "阿奇" },
  { file: "166.jpg", date: "2019/11/27", caption: "章魚燒" },
  { file: "167.jpg", date: "2019/11/27", caption: "(／／•／ω／•／／)" },
  { file: "168.jpg", date: "2019/12/5", caption: "最愛巧可力蛋糕" },
  { file: "169.jpg", date: "2024/12/7", caption: "女孩們的燭光晚餐一腳" },
  { file: "170.jpg", date: "2022", caption: "雲" },
  { file: "171.jpg", date: "2022", caption: "雲" },
  { file: "172.jpg", date: "2022", caption: "雲" },
  { file: "173.jpg", date: "2023/10/2", caption: "民宿的一角" },
  { file: "174.jpg", date: "2024/12/5", caption: "27歲蛋糕" },
  { file: "175.jpg", date: "2021/4/11", caption: "海邊走走" },
  { file: "176.jpg", date: "2020", caption: "櫻花" },
  { file: "177.jpg", date: "2021/10/10", caption: "日出time" },
  { file: "178.jpg", date: "2021/2/27", caption: "未滿18" },
  { file: "179.jpg", date: "2021/2/27", caption: "未滿18" },
  { file: "180.jpg", date: "2021", caption: "比薩派對" },
  { file: "181.jpg", date: "2021/10/10", caption: "日出time" },
  { file: "182.jpg", date: "2021/10/10", caption: "日出time" },
  { file: "183.jpg", date: "2020", caption: "社子日常" },
  { file: "184.jpg", date: "2020", caption: "躺著讀書" },
  { file: "185.jpg", date: "2020/2/4", caption: "漂亮女生" },
  { file: "186.jpg", date: "2023", caption: "小狗勾們" },
  { file: "187.jpg", date: "2023", caption: "我們與小熊灰熊" },
  { file: "188.jpg", date: "2019", caption: "社子日常" },
  { file: "189.jpg", date: "2019", caption: "社子日常" },
  { file: "190.jpg", date: "2020/2/4", caption: "沒穿衣服" },
  { file: "191.jpg", date: "2020/2/4", caption: "漂亮女生" },
  { file: "192.jpg", date: "2020", caption: "櫻花色" },
  { file: "193.jpg", date: "？？？", caption: "第一次露營" },
  { file: "194.jpg", date: "2023", caption: "新手上路" },
  { file: "195.jpg", date: "2022/8/5", caption: "可愛小孩" },
  { file: "196.jpg", date: "2024", caption: "水舞道日常" },
  { file: "197.jpg", date: "2025", caption: "賴床" },
  { file: "198.jpg", date: "2022", caption: "社子日常" },
  { file: "199.jpg", date: "2020", caption: "愛挖鼻孔" },
  { file: "200.jpg", date: "2021", caption: "日出time" },
  { file: "201.jpg", date: "2023/1/21", caption: "cooking" },
  { file: "202.jpg", date: "2019", caption: "心肝寶貝" },
  { file: "203.jpg", date: "2021/10/2", caption: "23歲小孩" },
];

function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setViewportHeight();

const wall = document.getElementById("wall");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalDate = document.getElementById("modal-date");
const modalCaption = document.getElementById("modal-caption");
const modalBg = document.querySelector(".modal-bg");
const modalContent = document.querySelector(".modal-content");
let closeTimer;
const modalCloseDuration = 700;
const initialWallPhotoCount = 52;
const eagerWallPhotoCount = 16;
const photosByFile = new Map(photos.map((photo) => [photo.file, photo]));

function recalculateMobileLayout() {
  setViewportHeight();
  void wall.offsetHeight;
  requestAnimationFrame(() => {
    setViewportHeight();
    void wall.offsetHeight;
    scheduleModalTextAlign();
  });
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function createWall() {
  const wallPhotos = shuffle(photos).slice(0, initialWallPhotoCount);
  const rows = [[], [], [], []];

  wallPhotos.forEach((photo, index) => {
    rows[index % 4].push({ photo, index });
  });

  rows.forEach((rowPhotos, rowIndex) => {
    const row = document.createElement("div");
    row.className = `row ${rowIndex % 2 === 0 ? "to-right" : "to-left"}`;
    row.style.animationDuration = `${300 + rowIndex * 40}s`;

    const rowSet = document.createElement("div");
    rowSet.className = "row-set";

    rowPhotos.forEach(({ photo, index }) => {
      const img = document.createElement("img");
      img.src = `photos/${photo.file}`;
      img.alt = photo.caption;
      img.dataset.file = photo.file;
      img.decoding = "async";

      if (index >= eagerWallPhotoCount) {
        img.loading = "lazy";
      }

      const variation = getPhotoVariation();
      const rotate = randomBetween(-variation.rotate, variation.rotate);
      const offsetY = randomBetween(-variation.offsetY, variation.offsetY);
      const scale = randomBetween(variation.minScale, variation.maxScale);
      img.style.setProperty("--rotate", `${rotate}deg`);
      img.style.setProperty("--offset-y", `${offsetY}px`);
      img.style.setProperty("--scale", scale);

      rowSet.appendChild(img);
    });

    row.appendChild(rowSet);
    row.appendChild(rowSet.cloneNode(true));
    wall.appendChild(row);
  });
}

function openModal(photo) {
  clearTimeout(closeTimer);
  modal.classList.remove("closing");
  modalImg.src = `photos/${photo.file}`;
  modalDate.textContent = formatDateLabel(photo.date);
  modalCaption.textContent = photo.caption;
  requestAnimationFrame(() => {
    document.body.classList.add("memory-open");
    modal.classList.add("active");
    if (modalImg.complete) {
      scheduleModalTextAlign();
    }
  });
}

function closeModal() {
  modal.classList.remove("active");
  modal.classList.add("closing");
  document.body.classList.remove("memory-open");
  closeTimer = setTimeout(() => {
    if (!modal.classList.contains("active")) {
      modal.classList.remove("closing");
      modalContent.style.setProperty("--modal-text-offset", "0px");
    }
  }, modalCloseDuration);
}

function getPhotoVariation() {
  const chance = Math.random();

  if (chance < 0.7) {
    return { rotate: 0.8, offsetY: 7, minScale: 0.98, maxScale: 1.02 };
  }

  if (chance < 0.9) {
    return { rotate: 2.2, offsetY: 18, minScale: 0.95, maxScale: 1.05 };
  }

  return { rotate: 3.6, offsetY: 30, minScale: 0.92, maxScale: 1.08 };
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function formatDateLabel(date) {
  if (!date.includes("/")) {
    return date;
  }

  return date
    .split("/")
    .map((part) => part.padStart(2, "0"))
    .join(" / ");
}

function alignModalText() {
  if (window.innerWidth <= 768 || !modal.classList.contains("active")) {
    modalContent.style.setProperty("--modal-text-offset", "0px");
    return;
  }

  const imageHeight = modalImg.offsetHeight;
  const textHeight = modalContent.querySelector(".modal-text").offsetHeight;
  const offset = (imageHeight - textHeight) / 2;
  modalContent.style.setProperty("--modal-text-offset", `${offset}px`);
}

function scheduleModalTextAlign() {
  requestAnimationFrame(() => {
    requestAnimationFrame(alignModalText);
  });
}

modalImg.addEventListener("load", scheduleModalTextAlign);
modalBg.addEventListener("click", closeModal);
window.addEventListener("resize", () => {
  recalculateMobileLayout();
});
window.addEventListener("orientationchange", () => {
  recalculateMobileLayout();
  window.setTimeout(() => {
    recalculateMobileLayout();
  }, 250);
});
window.addEventListener("load", recalculateMobileLayout, { once: true });

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", recalculateMobileLayout, { once: true });
}

wall.addEventListener("click", (event) => {
  const img = event.target.closest(".row img");

  if (!img) {
    return;
  }

  const photo = photosByFile.get(img.dataset.file);

  if (photo) {
    openModal(photo);
  }
});

modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});

createWall();
recalculateMobileLayout();
