	function CRanking(i){//標題1
		var sc = "　";
		var topics = [
						"第一名",
						"第二名",
						"第三名",
						"佳"+sc+"作",
						"佳"+sc+"作",
						"佳"+sc+"作",
						"佳"+sc+"作",
						"佳"+sc+"作",
						"佳"+sc+"作"
					];
		CR = topics.length;
		return topics[i];
	}

	function CTopic(i){//標題2(連結部分,藍色字體)
		var topics = [
						"雲端",
						"聽雨",
						"隱身都市的桃花源",
						"農村生活之樂趣",
						"我的愛樂時光",
						"生活中的美好經驗",
						"歌仔戲之旅",
						"阮阿公",
						"與父親的這段路"
					];

		return topics[i];
	}

	function CClasses(i){//班級
		var classess = [
						"日間部四技建築二甲",
						"日間部四技數位一甲",
						"日間部四技企管二乙",
						"日間部四技幼保一甲",
						"日間部四技國企一甲",
						"日間部四技企管一乙",
						"進修部四技時尚一甲",
						"進修專校二專企管一戊",
						"進修專校二專企管一戊"
						];
		return classess[i];
	}

	function CNames(i){//姓名
		var namess = [
						"王咨淨",
						"林哲緯",
						"李佳怡",
						"鄭季宜",
						"翁靖涵",
						"簡秀珊",
						"劉于郡",
						"林志隆",
						"陳羽歆"
					];
		return namess[i];
	}
	CRanking();
