// --- DỮ LIỆU TỪ VỰNG TIẾNG TRUNG 80 TỪ (FULL HSK 1) ---
const vocabularyData = [
  {
    id: 1,
    word: "爱",
    ipa: "ài",
    meaning: "Yêu / Thích",
    example: "妈妈，我爱你。",
    examplePinyin: "Māma, wǒ ài nǐ.",
    exampleMeaning: "Mẹ ơi, con yêu mẹ.",
  },
  {
    id: 2,
    word: "八",
    ipa: "bā",
    meaning: "Số 8",
    example: "我有八本书。",
    examplePinyin: "Wǒ yǒu bā běn shū.",
    exampleMeaning: "Tôi có 8 cuốn sách.",
  },
  {
    id: 3,
    word: "爸爸",
    ipa: "bàba",
    meaning: "Bố",
    example: "我的爸爸是医生。",
    examplePinyin: "Wǒ de bàba shì yīshēng.",
    exampleMeaning: "Bố tôi là Hieudapchai.",
  },
  {
    id: 4,
    word: "杯子",
    ipa: "bēizi",
    meaning: "Cái cốc",
    example: "我想买一个杯子。",
    examplePinyin: "Wǒ xiǎng mǎi yí ge bēizi.",
    exampleMeaning: "Tôi muốn mua một cái cốc.",
  },
  {
    id: 5,
    word: "北京",
    ipa: "Běijīng",
    meaning: "Bắc Kinh",
    example: "我住在北京。",
    examplePinyin: "Wǒ zhù zài Běijīng.",
    exampleMeaning: "Tôi sống ở Bắc Kinh.",
  },
  {
    id: 6,
    word: "本",
    ipa: "běn",
    meaning: "Quyển (Lượng từ)",
    example: "这本字典很好。",
    examplePinyin: "Zhè běn zìdiǎn hěn hǎo.",
    exampleMeaning: "Cuốn từ điển này rất tốt.",
  },
  {
    id: 7,
    word: "不客气",
    ipa: "bú kèqi",
    meaning: "Đừng khách sáo",
    example: "谢谢你！——不客气。",
    examplePinyin: "Xièxie nǐ! — Bú kèqi.",
    exampleMeaning: "Cảm ơn bạn! - Đừng khách sáo.",
  },
  {
    id: 8,
    word: "不",
    ipa: "bù",
    meaning: "Không",
    example: "我不是学生。",
    examplePinyin: "Wǒ bú shì xuéshēng.",
    exampleMeaning: "Tôi không phải là học sinh.",
  },
  {
    id: 9,
    word: "菜",
    ipa: "cài",
    meaning: "Món ăn / Rau",
    example: "今天我去买菜。",
    examplePinyin: "Jīntiān wǒ qù mǎi cài.",
    exampleMeaning: "Hôm nay tôi đi mua thức ăn.",
  },
  {
    id: 10,
    word: "茶",
    ipa: "chá",
    meaning: "Trà",
    example: "请喝一杯茶。",
    examplePinyin: "Qǐng hē yì bēi chá.",
    exampleMeaning: "Mời uống một tách trà.",
  },
  {
    id: 11,
    word: "吃",
    ipa: "chī",
    meaning: "Ăn",
    example: "你喜欢吃什么？",
    examplePinyin: "Nǐ xǐhuan chī shénme?",
    exampleMeaning: "Bạn thích ăn gì?",
  },
  {
    id: 12,
    word: "出租车",
    ipa: "chūzūchē",
    meaning: "Xe taxi",
    example: "我们坐出租车去吧。",
    examplePinyin: "Wǒmen zuò chūzūchē qù ba.",
    exampleMeaning: "Chúng ta đi taxi đi.",
  },
  {
    id: 13,
    word: "打电话",
    ipa: "dǎ diànhuà",
    meaning: "Gọi điện thoại",
    example: "我在打电话。",
    examplePinyin: "Wǒ zài dǎ diànhuà.",
    exampleMeaning: "Tôi đang gọi điện thoại.",
  },
  {
    id: 14,
    word: "大",
    ipa: "dà",
    meaning: "To / Lớn",
    example: "这个苹果很大。",
    examplePinyin: "Zhè ge píngguǒ hěn dà.",
    exampleMeaning: "Quả táo này rất to.",
  },
  {
    id: 15,
    word: "的",
    ipa: "de",
    meaning: "Của (Sở hữu)",
    example: "这是我的书。",
    examplePinyin: "Zhè shì wǒ de shū.",
    exampleMeaning: "Đây là sách của tôi.",
  },
  {
    id: 16,
    word: "点",
    ipa: "diǎn",
    meaning: "Giờ",
    example: "现在是五点。",
    examplePinyin: "Xiànzài shì wǔ diǎn.",
    exampleMeaning: "Bây giờ là 5 giờ.",
  },
  {
    id: 17,
    word: "电脑",
    ipa: "diànnǎo",
    meaning: "Máy tính",
    example: "我想买一台电脑。",
    examplePinyin: "Wǒ xiǎng mǎi yì tái diànnǎo.",
    exampleMeaning: "Tôi muốn mua một chiếc máy tính.",
  },
  {
    id: 18,
    word: "电视",
    ipa: "diànshì",
    meaning: "Ti vi",
    example: "他在看电视。",
    examplePinyin: "Tā zài kàn diànshì.",
    exampleMeaning: "Anh ấy đang xem ti vi.",
  },
  {
    id: 19,
    word: "电影",
    ipa: "diànyǐng",
    meaning: "Phim",
    example: "我很喜欢看电影。",
    examplePinyin: "Wǒ hěn xǐhuan kàn diànyǐng.",
    exampleMeaning: "Tôi rất thích xem phim.",
  },
  {
    id: 20,
    word: "东西",
    ipa: "dōngxi",
    meaning: "Đồ đạc",
    example: "你在买什么东西？",
    examplePinyin: "Nǐ zài mǎi shénme dōngxi?",
    exampleMeaning: "Bạn đang mua đồ gì vậy?",
  },
  {
    id: 21,
    word: "都",
    ipa: "dōu",
    meaning: "Đều",
    example: "我们要都去。",
    examplePinyin: "Wǒmen yào dōu qù.",
    exampleMeaning: "Chúng tôi đều phải đi.",
  },
  {
    id: 22,
    word: "读",
    ipa: "dú",
    meaning: "Đọc",
    example: "他在读报纸。",
    examplePinyin: "Tā zài dú bàozhǐ.",
    exampleMeaning: "Anh ấy đang đọc báo.",
  },
  {
    id: 23,
    word: "对不起",
    ipa: "duìbuqǐ",
    meaning: "Xin lỗi",
    example: "对不起，我迟到了。",
    examplePinyin: "Duìbuqǐ, wǒ chídào le.",
    exampleMeaning: "Xin lỗi, tôi đến muộn.",
  },
  {
    id: 24,
    word: "多",
    ipa: "duō",
    meaning: "Nhiều",
    example: "这里的人很多。",
    examplePinyin: "Zhèlǐ de rén hěn duō.",
    exampleMeaning: "Người ở đây rất đông.",
  },
  {
    id: 25,
    word: "多少",
    ipa: "duōshao",
    meaning: "Bao nhiêu",
    example: "这个多少钱？",
    examplePinyin: "Zhè ge duōshao qián?",
    exampleMeaning: "Cái này bao nhiêu tiền?",
  },
  {
    id: 26,
    word: "儿子",
    ipa: "érzi",
    meaning: "Con trai",
    example: "他的儿子三岁了。",
    examplePinyin: "Tā de érzi sān suì le.",
    exampleMeaning: "Con trai anh ấy 3 tuổi rồi.",
  },
  {
    id: 27,
    word: "二",
    ipa: "èr",
    meaning: "Số 2",
    example: "我有二个苹果。",
    examplePinyin: "Wǒ yǒu èr ge píngguǒ.",
    exampleMeaning: "Tôi có 2 quả táo.",
  },
  {
    id: 28,
    word: "饭店",
    ipa: "fàndiàn",
    meaning: "Nhà hàng",
    example: "我们去饭店吃饭吧。",
    examplePinyin: "Wǒmen qù fàndiàn chīfàn ba.",
    exampleMeaning: "Chúng ta đi nhà hàng ăn cơm đi.",
  },
  {
    id: 29,
    word: "飞机",
    ipa: "fēijī",
    meaning: "Máy bay",
    example: "我坐飞机去中国。",
    examplePinyin: "Wǒ zuò fēijī qù Zhōngguó.",
    exampleMeaning: "Tôi đi máy bay đến Trung Quốc.",
  },
  {
    id: 30,
    word: "分钟",
    ipa: "fēnzhōng",
    meaning: "Phút",
    example: "等我几分钟。",
    examplePinyin: "Děng wǒ jǐ fēnzhōng.",
    exampleMeaning: "Đợi tôi vài phút.",
  },
  {
    id: 31,
    word: "高兴",
    ipa: "gāoxìng",
    meaning: "Vui vẻ",
    example: "认识你很高兴。",
    examplePinyin: "Rènshi nǐ hěn gāoxìng.",
    exampleMeaning: "Rất vui được quen biết bạn.",
  },
  {
    id: 32,
    word: "个",
    ipa: "gè",
    meaning: "Cái (Lượng từ)",
    example: "我有一个哥哥。",
    examplePinyin: "Wǒ yǒu yí ge gēge.",
    exampleMeaning: "Tôi có một người anh trai.",
  },
  {
    id: 33,
    word: "工作",
    ipa: "gōngzuò",
    meaning: "Công việc",
    example: "我很喜欢我的工作。",
    examplePinyin: "Wǒ hěn xǐhuan wǒ de gōngzuò.",
    exampleMeaning: "Tôi rất thích công việc của mình.",
  },
  {
    id: 34,
    word: "狗",
    ipa: "gǒu",
    meaning: "Con chó",
    example: "那只狗很可爱。",
    examplePinyin: "Nà zhī gǒu hěn kě'ài.",
    exampleMeaning: "Con chó kia rất đáng yêu.",
  },
  {
    id: 35,
    word: "汉语",
    ipa: "Hànyǔ",
    meaning: "Tiếng Trung",
    example: "他在学习汉语。",
    examplePinyin: "Tā zài xuéxí Hànyǔ.",
    exampleMeaning: "Anh ấy đang học tiếng Trung.",
  },
  {
    id: 36,
    word: "好",
    ipa: "hǎo",
    meaning: "Tốt / Khỏe",
    example: "今天天气很好。",
    examplePinyin: "Jīntiān tiānqì hěn hǎo.",
    exampleMeaning: "Hôm nay thời tiết rất tốt.",
  },
  {
    id: 37,
    word: "喝",
    ipa: "hē",
    meaning: "Uống",
    example: "我想喝水。",
    examplePinyin: "Wǒ xiǎng hē shuǐ.",
    exampleMeaning: "Tôi muốn uống nước.",
  },
  {
    id: 38,
    word: "和",
    ipa: "hé",
    meaning: "Và",
    example: "我和你是好朋友。",
    examplePinyin: "Wǒ hé nǐ shì hǎo péngyou.",
    exampleMeaning: "Tôi và bạn là bạn tốt.",
  },
  {
    id: 39,
    word: "很",
    ipa: "hěn",
    meaning: "Rất",
    example: "即使很累，我也要去。",
    examplePinyin: "Jíshǐ hěn lèi, wǒ yě yào qù.",
    exampleMeaning: "Dù rất mệt, tôi cũng phải đi.",
  },
  {
    id: 40,
    word: "后面",
    ipa: "hòumiàn",
    meaning: "Phía sau",
    example: "商店在学校后面。",
    examplePinyin: "Shāngdiàn zài xuéxiào hòumiàn.",
    exampleMeaning: "Cửa hàng ở phía sau trường học.",
  },
  {
    id: 41,
    word: "回",
    ipa: "huí",
    meaning: "Về",
    example: "我八点回家。",
    examplePinyin: "Wǒ bā diǎn huí jiā.",
    exampleMeaning: "Tôi về nhà lúc 8 giờ.",
  },
  {
    id: 42,
    word: "会",
    ipa: "huì",
    meaning: "Biết / Sẽ",
    example: "我会说汉语。",
    examplePinyin: "Wǒ huì shuō Hànyǔ.",
    exampleMeaning: "Tôi biết nói tiếng Trung.",
  },
  {
    id: 43,
    word: "几",
    ipa: "jǐ",
    meaning: "Mấy",
    example: "你有几本书？",
    examplePinyin: "Nǐ yǒu jǐ běn shū?",
    exampleMeaning: "Bạn có mấy quyển sách?",
  },
  {
    id: 44,
    word: "家",
    ipa: "jiā",
    meaning: "Nhà",
    example: "我的家在北京。",
    examplePinyin: "Wǒ de jiā zài Běijīng.",
    exampleMeaning: "Nhà tôi ở Bắc Kinh.",
  },
  {
    id: 45,
    word: "叫",
    ipa: "jiào",
    meaning: "Tên là / Gọi",
    example: "你叫什么名字？",
    examplePinyin: "Nǐ jiào shénme míngzi?",
    exampleMeaning: "Bạn tên là gì?",
  },
  {
    id: 46,
    word: "今天",
    ipa: "jīntiān",
    meaning: "Hôm nay",
    example: "今天星期一。",
    examplePinyin: "Jīntiān xīngqīyī.",
    exampleMeaning: "Hôm nay là thứ hai.",
  },
  {
    id: 47,
    word: "九",
    ipa: "jiǔ",
    meaning: "Số 9",
    example: "现在九点了。",
    examplePinyin: "Xiànzài jiǔ diǎn le.",
    exampleMeaning: "Bây giờ là 9 giờ rồi.",
  },
  {
    id: 48,
    word: "开",
    ipa: "kāi",
    meaning: "Mở / Lái xe",
    example: "他会开车。",
    examplePinyin: "Tā huì kāichē.",
    exampleMeaning: "Anh ấy biết lái xe.",
  },
  {
    id: 49,
    word: "看",
    ipa: "kàn",
    meaning: "Xem / Đọc",
    example: "我看了一本书。",
    examplePinyin: "Wǒ kàn le yì běn shū.",
    exampleMeaning: "Tôi đã đọc một cuốn sách.",
  },
  {
    id: 50,
    word: "看见",
    ipa: "kànjiàn",
    meaning: "Nhìn thấy",
    example: "我看见他在那里。",
    examplePinyin: "Wǒ kànjiàn tā zài nàlǐ.",
    exampleMeaning: "Tôi nhìn thấy anh ấy ở đó.",
  },
  {
    id: 51,
    word: "块",
    ipa: "kuài",
    meaning: "Tệ (Tiền)",
    example: "这件衣服五十块。",
    examplePinyin: "Zhè jiàn yīfu wǔshí kuài.",
    exampleMeaning: "Bộ đồ này 50 tệ.",
  },
  {
    id: 52,
    word: "来",
    ipa: "lái",
    meaning: "Đến",
    example: "他是昨天来的。",
    examplePinyin: "Tā shì zuótiān lái de.",
    exampleMeaning: "Anh ấy đến vào hôm qua.",
  },
  {
    id: 53,
    word: "老师",
    ipa: "lǎoshī",
    meaning: "Giáo viên",
    example: "她是我们的老师。",
    examplePinyin: "Tā shì wǒmen de lǎoshī.",
    exampleMeaning: "Cô ấy là giáo viên của chúng tôi.",
  },
  {
    id: 54,
    word: "了",
    ipa: "le",
    meaning: "Rồi",
    example: "我吃饭了。",
    examplePinyin: "Wǒ chīfàn le.",
    exampleMeaning: "Tôi ăn cơm rồi.",
  },
  {
    id: 55,
    word: "冷",
    ipa: "lěng",
    meaning: "Lạnh",
    example: "今天很冷。",
    examplePinyin: "Jīntiān hěn lěng.",
    exampleMeaning: "Hôm nay rất lạnh.",
  },
  {
    id: 56,
    word: "里",
    ipa: "lǐ",
    meaning: "Bên trong",
    example: "我们在学校里。",
    examplePinyin: "Wǒmen zài xuéxiào lǐ.",
    exampleMeaning: "Chúng tôi đang ở trong trường.",
  },
  {
    id: 57,
    word: "零",
    ipa: "líng",
    meaning: "Số 0",
    example: "现在是零下五度。",
    examplePinyin: "Xiànzài shì língxià wǔ dù.",
    exampleMeaning: "Bây giờ là âm 5 độ.",
  },
  {
    id: 58,
    word: "六",
    ipa: "liù",
    meaning: "Số 6",
    example: "今天是六号。",
    examplePinyin: "Jīntiān shì liù hào.",
    exampleMeaning: "Hôm nay là ngày mùng 6.",
  },
  {
    id: 59,
    word: "妈妈",
    ipa: "māma",
    meaning: "Mẹ",
    example: "我爱我的妈妈。",
    examplePinyin: "Wǒ ài wǒ de māma.",
    exampleMeaning: "Tôi yêu mẹ của tôi.",
  },
  {
    id: 60,
    word: "吗",
    ipa: "ma",
    meaning: "Không? (Hỏi)",
    example: "你好吗？",
    examplePinyin: "Nǐ hǎo ma?",
    exampleMeaning: "Bạn khỏe không?",
  },
  {
    id: 61,
    word: "买",
    ipa: "mǎi",
    meaning: "Mua",
    example: "我想买些水果。",
    examplePinyin: "Wǒ xiǎng mǎi xiē shuǐguǒ.",
    exampleMeaning: "Tôi muốn mua một ít hoa quả.",
  },
  {
    id: 62,
    word: "没关系",
    ipa: "méi guānxi",
    meaning: "Không sao đâu",
    example: "对不起！——没关系。",
    examplePinyin: "Duìbuqǐ! — Méi guānxi.",
    exampleMeaning: "Xin lỗi! - Không sao đâu.",
  },
  {
    id: 63,
    word: "没有",
    ipa: "méiyǒu",
    meaning: "Không có",
    example: "我没有钱。",
    examplePinyin: "Wǒ méiyǒu qián.",
    exampleMeaning: "Tôi không có tiền.",
  },
  {
    id: 64,
    word: "米饭",
    ipa: "mǐfàn",
    meaning: "Cơm",
    example: "我不爱吃米饭。",
    examplePinyin: "Wǒ bú ài chī mǐfàn.",
    exampleMeaning: "Tôi không thích ăn cơm.",
  },
  {
    id: 65,
    word: "名字",
    ipa: "míngzi",
    meaning: "Tên",
    example: "我的名字叫大卫。",
    examplePinyin: "Wǒ de míngzi jiào Dàwèi.",
    exampleMeaning: "Tên của tôi là David.",
  },
  {
    id: 66,
    word: "明天",
    ipa: "míngtiān",
    meaning: "Ngày mai",
    example: "明天见！",
    examplePinyin: "Míngtiān jiàn!",
    exampleMeaning: "Ngày mai gặp!",
  },
  {
    id: 67,
    word: "哪",
    ipa: "nǎ",
    meaning: "Nào / Đâu",
    example: "你是哪国人？",
    examplePinyin: "Nǐ shì nǎ guó rén?",
    exampleMeaning: "Bạn là người nước nào?",
  },
  {
    id: 68,
    word: "哪儿",
    ipa: "nǎr",
    meaning: "Ở đâu",
    example: "你在哪儿？",
    examplePinyin: "Nǐ zài nǎr?",
    exampleMeaning: "Bạn đang ở đâu?",
  },
  {
    id: 69,
    word: "那",
    ipa: "nà",
    meaning: "Kia / Đó",
    example: "那个人是谁？",
    examplePinyin: "Nà ge rén shì shéi?",
    exampleMeaning: "Người kia là ai?",
  },
  {
    id: 70,
    word: "呢",
    ipa: "ne",
    meaning: "Thế / Nhỉ",
    example: "我的书呢？",
    examplePinyin: "Wǒ de shū ne?",
    exampleMeaning: "Sách của tôi đâu nhỉ?",
  },
  {
    id: 71,
    word: "能",
    ipa: "néng",
    meaning: "Có thể",
    example: "你能帮我吗？",
    examplePinyin: "Nǐ néng bāng wǒ ma?",
    exampleMeaning: "Bạn có thể giúp tôi không?",
  },
  {
    id: 72,
    word: "你",
    ipa: "nǐ",
    meaning: "Bạn / Anh",
    example: "你是学生吗？",
    examplePinyin: "Nǐ shì xuéshēng ma?",
    exampleMeaning: "Bạn là học sinh phải không?",
  },
  {
    id: 73,
    word: "年",
    ipa: "nián",
    meaning: "Năm",
    example: "我在中国住了三年。",
    examplePinyin: "Wǒ zài Zhōngguó zhù le sān nián.",
    exampleMeaning: "Tôi đã sống ở Trung Quốc 3 năm.",
  },
  {
    id: 74,
    word: "女儿",
    ipa: "nǚ'ér",
    meaning: "Con gái",
    example: "这是我的女儿。",
    examplePinyin: "Zhè shì wǒ de nǚ'ér.",
    exampleMeaning: "Đây là con gái của tôi.",
  },
  {
    id: 75,
    word: "朋友",
    ipa: "péngyou",
    meaning: "Bạn bè",
    example: "他是我的好朋友。",
    examplePinyin: "Tā shì wǒ de hǎo péngyou.",
    exampleMeaning: "Anh ấy là bạn tốt của tôi.",
  },
  {
    id: 76,
    word: "漂亮",
    ipa: "piàoliang",
    meaning: "Xinh đẹp",
    example: "你的衣服很漂亮。",
    examplePinyin: "Nǐ de yīfu hěn piàoliang.",
    exampleMeaning: "Quần áo của bạn rất đẹp.",
  },
  {
    id: 77,
    word: "苹果",
    ipa: "píngguǒ",
    meaning: "Quả táo",
    example: "我想吃一个苹果。",
    examplePinyin: "Wǒ xiǎng chī yí ge píngguǒ.",
    exampleMeaning: "Tôi muốn ăn một quả táo.",
  },
  {
    id: 78,
    word: "七",
    ipa: "qī",
    meaning: "Số 7",
    example: "我有七个朋友。",
    examplePinyin: "Wǒ yǒu qī ge péngyou.",
    exampleMeaning: "Tôi có 7 người bạn.",
  },
  {
    id: 79,
    word: "钱",
    ipa: "qián",
    meaning: "Tiền",
    example: "那是多少钱？",
    examplePinyin: "Nà shì duōshao qián?",
    exampleMeaning: "Cái đó bao nhiêu tiền?",
  },
  {
    id: 80,
    word: "前面",
    ipa: "qiánmiàn",
    meaning: "Phía trước",
    example: "他在我前面。",
    examplePinyin: "Tā zài wǒ qiánmiàn.",
    exampleMeaning: "Anh ấy ở phía trước tôi.",
  },
  {
    id: 81,
    word: "请",
    ipa: "qǐng",
    meaning: "Mời / Xin",
    example: "请坐。",
    examplePinyin: "Qǐng zuò.",
    exampleMeaning: "Mời ngồi.",
  },
  {
    id: 82,
    word: "去",
    ipa: "qù",
    meaning: "Đi",
    example: "我去学校。",
    examplePinyin: "Wǒ qù xuéxiào.",
    exampleMeaning: "Tôi đi đến trường.",
  },
  {
    id: 83,
    word: "热",
    ipa: "rè",
    meaning: "Nóng",
    example: "今天很热。",
    examplePinyin: "Jīntiān hěn rè.",
    exampleMeaning: "Hôm nay rất nóng.",
  },
  {
    id: 84,
    word: "人",
    ipa: "rén",
    meaning: "Người",
    example: "那个人是我的老师。",
    examplePinyin: "Nà ge rén shì wǒ de lǎoshī.",
    exampleMeaning: "Người đó là giáo viên của tôi.",
  },
  {
    id: 85,
    word: "认识",
    ipa: "rènshi",
    meaning: "Quen biết",
    example: "很高兴认识你。",
    examplePinyin: "Hěn gāoxìng rènshi nǐ.",
    exampleMeaning: "Rất vui được quen biết bạn.",
  },
  {
    id: 86,
    word: "日",
    ipa: "rì",
    meaning: "Ngày",
    example: "今天是三月五日。",
    examplePinyin: "Jīntiān shì Sānyuè wǔ rì.",
    exampleMeaning: "Hôm nay là ngày 5 tháng 3.",
  },
  {
    id: 87,
    word: "三",
    ipa: "sān",
    meaning: "Số 3",
    example: "我有三本书。",
    examplePinyin: "Wǒ yǒu sān běn shū.",
    exampleMeaning: "Tôi có 3 cuốn sách.",
  },
  {
    id: 88,
    word: "商店",
    ipa: "shāngdiàn",
    meaning: "Cửa hàng",
    example: "我去商店买东西。",
    examplePinyin: "Wǒ qù shāngdiàn mǎi dōngxi.",
    exampleMeaning: "Tôi đi cửa hàng mua đồ.",
  },
  {
    id: 89,
    word: "上",
    ipa: "shàng",
    meaning: "Trên / Lên",
    example: "猫在椅子上。",
    examplePinyin: "Māo zài yǐzi shàng.",
    exampleMeaning: "Con mèo ở trên ghế.",
  },
  {
    id: 90,
    word: "上午",
    ipa: "shàngwǔ",
    meaning: "Buổi sáng",
    example: "上午我在家。",
    examplePinyin: "Shàngwǔ wǒ zài jiā.",
    exampleMeaning: "Buổi sáng tôi ở nhà.",
  },
];

// --- QUẢN LÝ TRẠNG THÁI (STATE) ---
let currentVocabList = [...vocabularyData];
let learnedIds = JSON.parse(localStorage.getItem("learnedWords")) || [];
let currentIndex = 0;

// Practice Quiz State
let quizIndex = 0;
let wrongAnswers = [];
let isReviewMode = false;

// Context Quiz State
let contextIndex = 0;

// --- DOM ELEMENTS ---
// Flashcard
const flashcard = document.getElementById("flashcard");
const elWord = document.getElementById("vocab-word");
const elIpa = document.getElementById("vocab-ipa");
const elMeaning = document.getElementById("vocab-meaning");
const elExample = document.getElementById("vocab-example");
const elExamplePinyin = document.getElementById("vocab-example-pinyin"); // Đã có trong HTML mới
const elExampleMeaning = document.getElementById("vocab-example-meaning"); // Đã có trong HTML mới
const elCounter = document.getElementById("card-counter");
const btnSpeak = document.getElementById("btn-speak");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const btnShuffle = document.getElementById("btn-shuffle");
const btnMarkLearned = document.getElementById("btn-mark-learned");
const inputJump = document.getElementById("jump-input");
const btnJump = document.getElementById("btn-jump");

// Practice Quiz
const quizWordEl = document.getElementById("quiz-word");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");
const btnNextQuiz = document.getElementById("btn-next-quiz");
const wrongCountEl = document.getElementById("wrong-count");
const btnReviewMistakes = document.getElementById("btn-review-mistakes");
const quizModeLabel = document.getElementById("quiz-mode-label");

// Context Quiz
const contextSentenceEl = document.getElementById("context-sentence");
const contextOptionsEl = document.getElementById("context-options");
const contextFeedbackEl = document.getElementById("context-feedback");
const contextCounterEl = document.getElementById("context-counter");
const btnNextContextAuto = document.getElementById("btn-next-context-auto");
const btnRestartContext = document.getElementById("btn-restart-context");
const btnContextPrev = document.getElementById("btn-context-prev");
const btnContextNext = document.getElementById("btn-context-next");

// Progress
const progressPercentEl = document.getElementById("progress-percent");
const learnedCountEl = document.getElementById("learned-count");
const totalCountEl = document.getElementById("total-count");
const btnViewLearned = document.getElementById("btn-view-learned");
const learnedListBox = document.getElementById("learned-list-container");
const learnedListContent = document.getElementById("learned-list-content");
const btnCloseList = document.getElementById("btn-close-list");
const btnReset = document.getElementById("btn-reset");
const circularProgress = document.querySelector(".circular-progress");

// Navigation
const navItems = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll(".section");

// --- KHỞI TẠO ---
window.addEventListener("DOMContentLoaded", () => {
  loadFlashcard(currentIndex);
  updateProgressUI();
  loadPracticeQuiz();
  loadContextQuiz();
});

// --- NAVIGATION ---
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");
    const targetId = item.getAttribute("data-target");
    sections.forEach((sec) => sec.classList.remove("active-section"));
    document.getElementById(targetId).classList.add("active-section");
    if (targetId === "home") window.scrollTo(0, 0);
    if (targetId === "writing") loadContextQuiz();
  });
});
window.navigateTo = (targetId) => {
  document.querySelector(`nav ul li[data-target="${targetId}"]`).click();
};

// --- FLASHCARD LOGIC ---
function loadFlashcard(index) {
  const data = currentVocabList[index];
  flashcard.classList.remove("flipped");

  elWord.textContent = data.word;
  elIpa.textContent = data.ipa;
  elMeaning.textContent = data.meaning;

  // Hiển thị 3 phần của ví dụ
  elExample.textContent = data.example;
  elExamplePinyin.textContent = data.examplePinyin;
  elExampleMeaning.textContent = data.exampleMeaning;

  elCounter.textContent = `${index + 1}/${currentVocabList.length}`;

  if (learnedIds.includes(data.id)) {
    btnMarkLearned.textContent = "🎉 Đã thuộc từ này";
    btnMarkLearned.disabled = true;
    btnMarkLearned.classList.replace("btn-success", "btn-secondary");
  } else {
    btnMarkLearned.textContent = "✅ Đã thuộc từ này";
    btnMarkLearned.disabled = false;
    btnMarkLearned.classList.replace("btn-secondary", "btn-success");
  }
}

flashcard.addEventListener("click", () =>
  flashcard.classList.toggle("flipped")
);

btnSpeak.addEventListener("click", (e) => {
  e.stopPropagation();
  const utterance = new SpeechSynthesisUtterance(
    currentVocabList[currentIndex].word
  );
  utterance.lang = "zh-CN";
  window.speechSynthesis.speak(utterance);
});

btnNext.addEventListener("click", () => {
  if (currentIndex < currentVocabList.length - 1) {
    currentIndex++;
    loadFlashcard(currentIndex);
  } else {
    currentIndex = 0;
    loadFlashcard(currentIndex);
  }
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadFlashcard(currentIndex);
  } else {
    currentIndex = currentVocabList.length - 1;
    loadFlashcard(currentIndex);
  }
});

btnJump.addEventListener("click", () => {
  const val = parseInt(inputJump.value);
  if (val >= 1 && val <= currentVocabList.length) {
    currentIndex = val - 1;
    loadFlashcard(currentIndex);
    inputJump.value = "";
  } else {
    alert(`Vui lòng nhập số từ 1 đến ${currentVocabList.length}`);
  }
});

btnShuffle.addEventListener("click", () => {
  for (let i = currentVocabList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentVocabList[i], currentVocabList[j]] = [
      currentVocabList[j],
      currentVocabList[i],
    ];
  }
  currentIndex = 0;
  loadFlashcard(currentIndex);
  const originalText = btnShuffle.innerHTML;
  btnShuffle.innerHTML = "Đã trộn!";
  setTimeout(() => (btnShuffle.innerHTML = originalText), 1000);
});

btnMarkLearned.addEventListener("click", (e) => {
  e.stopPropagation();
  const currentItem = currentVocabList[currentIndex];
  if (!learnedIds.includes(currentItem.id)) {
    learnedIds.push(currentItem.id);
    localStorage.setItem("learnedWords", JSON.stringify(learnedIds));
    updateProgressUI();
    loadFlashcard(currentIndex);
  }
});

// --- PRACTICE QUIZ LOGIC ---
function loadPracticeQuiz() {
  quizFeedbackEl.textContent = "";
  quizOptionsEl.innerHTML = "";
  btnNextQuiz.style.display = "none";
  let sourceList = isReviewMode ? wrongAnswers : vocabularyData;
  if (isReviewMode && wrongAnswers.length === 0) {
    isReviewMode = false;
    quizModeLabel.style.display = "none";
    alert("Bạn đã hoàn thành các câu sai!");
    loadPracticeQuiz();
    return;
  }
  if (quizIndex >= sourceList.length) quizIndex = 0;
  const questionData = sourceList[quizIndex];
  quizWordEl.textContent = questionData.word;
  let options = [questionData];
  while (options.length < 4) {
    const randomItem =
      vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (!options.some((o) => o.id === randomItem.id)) options.push(randomItem);
  }
  options.sort(() => Math.random() - 0.5);
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.meaning;
    btn.onclick = () => checkQuizAnswer(opt, questionData, btn);
    quizOptionsEl.appendChild(btn);
  });
}

function checkQuizAnswer(selected, correct, btnElement) {
  const allBtns = quizOptionsEl.querySelectorAll(".option-btn");
  allBtns.forEach((b) => (b.disabled = true));
  if (selected.id === correct.id) {
    btnElement.classList.add("correct");
    quizFeedbackEl.textContent = "Chính xác! 🎉";
    quizFeedbackEl.style.color = "var(--success)";
    if (isReviewMode) {
      wrongAnswers = wrongAnswers.filter((w) => w.id !== correct.id);
      updateWrongCount();
    }
  } else {
    btnElement.classList.add("wrong");
    quizFeedbackEl.textContent = `Sai rồi! Đáp án là: ${correct.meaning}`;
    quizFeedbackEl.style.color = "var(--error)";
    allBtns.forEach((b) => {
      if (b.textContent === correct.meaning) b.classList.add("correct");
    });
    if (!wrongAnswers.some((w) => w.id === correct.id)) {
      wrongAnswers.push(correct);
      updateWrongCount();
    }
  }
  btnNextQuiz.style.display = "inline-block";
}
btnNextQuiz.addEventListener("click", () => {
  if (!isReviewMode)
    quizIndex = Math.floor(Math.random() * vocabularyData.length);
  loadPracticeQuiz();
});
function updateWrongCount() {
  wrongCountEl.textContent = wrongAnswers.length;
  btnReviewMistakes.disabled = wrongAnswers.length === 0;
}
btnReviewMistakes.addEventListener("click", () => {
  isReviewMode = true;
  quizModeLabel.style.display = "inline-block";
  quizIndex = 0;
  loadPracticeQuiz();
});

// --- CONTEXT QUIZ LOGIC (ĐIỀN TỪ) ---
function loadContextQuiz() {
  contextFeedbackEl.textContent = "";
  contextOptionsEl.innerHTML = "";
  btnNextContextAuto.style.display = "none";
  btnRestartContext.style.display = "none";
  contextSentenceEl.style.display = "block";

  btnContextPrev.disabled = contextIndex === 0;
  btnContextNext.disabled = contextIndex === vocabularyData.length - 1;

  if (contextIndex >= vocabularyData.length) {
    contextSentenceEl.innerHTML = "🎉 Bạn đã hoàn thành hết danh sách.";
    btnRestartContext.style.display = "inline-block";
    return;
  }

  const data = vocabularyData[contextIndex];
  contextCounterEl.textContent = `${contextIndex + 1}/${vocabularyData.length}`;

  // Logic ẩn từ trong câu tiếng Trung
  const regex = new RegExp(data.word, "g");
  if (!data.example.match(regex)) {
    if (contextIndex < vocabularyData.length - 1) {
      contextIndex++;
      loadContextQuiz();
    }
    return;
  }

  const hiddenSentence = data.example.replace(
    regex,
    `<span class="blank-highlight">_____</span>`
  );
  // Hiển thị thêm gợi ý nghĩa tiếng Việt bên dưới câu hỏi
  contextSentenceEl.innerHTML = `
    ${hiddenSentence}
    <div style="font-size: 0.9rem; color: #7f8c8d; margin-top: 10px; font-family: 'Poppins'">
        (${data.exampleMeaning})
    </div>
  `;

  let options = [data];
  while (options.length < 4) {
    const randomItem =
      vocabularyData[Math.floor(Math.random() * vocabularyData.length)];
    if (!options.some((o) => o.id === randomItem.id)) options.push(randomItem);
  }
  options.sort(() => Math.random() - 0.5);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.word;
    btn.onclick = () => checkContextAnswer(opt.id, data.id, data.word, btn);
    contextOptionsEl.appendChild(btn);
  });
}

function checkContextAnswer(selectedId, correctId, correctWord, btnElement) {
  const allBtns = contextOptionsEl.querySelectorAll(".option-btn");
  allBtns.forEach((b) => (b.disabled = true));
  if (selectedId === correctId) {
    btnElement.classList.add("correct");
    contextFeedbackEl.textContent = "Chính xác!";
    contextFeedbackEl.style.color = "var(--success)";
    const blanks = contextSentenceEl.querySelectorAll(".blank-highlight");
    blanks.forEach((blank) => {
      blank.textContent = correctWord;
      blank.classList.add("filled");
    });
    if (contextIndex < vocabularyData.length - 1)
      btnNextContextAuto.style.display = "inline-block";
  } else {
    btnElement.classList.add("wrong");
    contextFeedbackEl.textContent = `Sai rồi! Đáp án là: ${correctWord}`;
    contextFeedbackEl.style.color = "var(--error)";
    allBtns.forEach((b) => {
      if (b.textContent === correctWord) b.classList.add("correct");
    });
  }
}

btnNextContextAuto.addEventListener("click", () => {
  if (contextIndex < vocabularyData.length - 1) {
    contextIndex++;
    loadContextQuiz();
  }
});
btnRestartContext.addEventListener("click", () => {
  contextIndex = 0;
  loadContextQuiz();
});
btnContextPrev.addEventListener("click", () => {
  if (contextIndex > 0) {
    contextIndex--;
    loadContextQuiz();
  }
});
btnContextNext.addEventListener("click", () => {
  if (contextIndex < vocabularyData.length - 1) {
    contextIndex++;
    loadContextQuiz();
  }
});

// --- PROGRESS LOGIC ---
function updateProgressUI() {
  const learnedCount = learnedIds.length;
  const total = vocabularyData.length;
  learnedCountEl.textContent = learnedCount;
  totalCountEl.textContent = total;
  const percent = Math.round((learnedCount / total) * 100);
  progressPercentEl.textContent = `${percent}%`;
  circularProgress.style.background = `conic-gradient(var(--success) ${
    percent * 3.6
  }deg, #cadcff ${percent * 3.6}deg)`;
}
btnViewLearned.addEventListener("click", () => {
  learnedListContent.innerHTML = "";
  if (learnedIds.length === 0)
    learnedListContent.innerHTML =
      "<p style='padding:10px; text-align:center'>Chưa có từ nào.</p>";
  else {
    learnedIds.forEach((id) => {
      const item = vocabularyData.find((v) => v.id === id);
      if (item) {
        const li = document.createElement("li");
        li.className = "learned-item";
        li.innerHTML = `<span class="learned-word">${item.word}</span><span class="learned-meaning">${item.meaning}</span>`;
        learnedListContent.appendChild(li);
      }
    });
  }
  learnedListBox.style.display = "block";
});
btnCloseList.addEventListener(
  "click",
  () => (learnedListBox.style.display = "none")
);
btnReset.addEventListener("click", () => {
  if (confirm("Bạn có chắc muốn xóa toàn bộ tiến độ?")) {
    learnedIds = [];
    localStorage.removeItem("learnedWords");
    updateProgressUI();
    loadFlashcard(currentIndex);
    alert("Đã reset!");
  }
});
