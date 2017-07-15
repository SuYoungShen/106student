	function MORanking(i){//標題1
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
		MOR = topics.length;
		return topics[i];
	}

	function MOClasses(i){//班級(連結部分,藍色字體)
		var classess = [
						"日間部四技餐飲一甲",
						"日間部四技國企三甲",
						"日間部四技餐飲一乙",
						"日間部四技建築一乙",
						"日間部四技企管四乙",
						"日間部四技土木一甲",
						"日間部四技企管一乙",
						"日間部四技餐飲一甲",
						"日間部四技國企三甲"
						];
		return classess[i];
	}

	function MONames(i){//姓名
		var namess = [
						"蔡伊婷",
						"劉鴻慶",
						"張哲維",
						"陳佳伶",
						"吳思霆",
						"黃馨誠",
						"陳怡平",
						"蔡哲霖",
						"黃鈺婷"
					];
		return namess[i];
	}
	MORanking();
