const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addresszXMJdsy = accounts[1]
		const addressieKATPW = accounts[3]
		const addressR6i7yaj = accounts[1]
		const addressc3cIho = accounts[4]
		const uintQom6sbv = BigInt("873")
		const FairStockEquitybQmvsDn = await FairStockEquity.new(addresszXMJdsy, addressieKATPW, addressR6i7yaj, addressc3cIho, uintQom6sbv, {from: accounts[3]});
		const boolK18NqjV = false
		const addressr4BWily = accounts[2]
		const uintqkNShHR = BigInt("1775")
		const uintWShcA7 = BigInt("781")
		const uintXYoGws = BigInt("1731")
		const uintFKXcSuy = BigInt("930")
		const uint41Aqoz = BigInt("713")
		const uintqs2sO3V = BigInt("399")
		const uintPlnNLnS = BigInt("1941")
		const addressGrNNWDz = await FairStockEquitybQmvsDn.setLPT.call(addressr4BWily, boolK18NqjV, {from: accounts[1]});
		const uint256tp8HxjJ = await FairStockEquitybQmvsDn.invest.call(uintqkNShHR, {from: accounts[3]});
		await FairStockEquitybQmvsDn.withdrawBonus.call({from: accounts[3]});
		const uint256Kh6MJuO = await FairStockEquitybQmvsDn.setDegree.call(uintqs2sO3V, uint41Aqoz, uintFKXcSuy, uintXYoGws, uintWShcA7, {from: accounts[5]});
		const uint256PO8SWN6 = await FairStockEquitybQmvsDn.depositBonus.call(uintPlnNLnS, {from: accounts[1]});

		await expect(FairStockEquitybQmvsDn.setLPT.call(addressr4BWily, boolK18NqjV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressyfCcDwi = accounts[1]
		const addressDPtKfku = accounts[5]
		const addressq1TTekH = accounts[3]
		const addressIklVSKi = accounts[2]
		const uintfNY0WZR = BigInt("903")
		const FairStockEquityxrPoGi2 = await FairStockEquity.new(addressyfCcDwi, addressDPtKfku, addressq1TTekH, addressIklVSKi, uintfNY0WZR, {from: accounts[1]});
		const uintPRdCsk0 = BigInt("1740")
		const uintIvzedhm = BigInt("311")
		await FairStockEquityxrPoGi2.withdrawBonus.call({from: accounts[3]});
		const uint256kVQj0CH = await FairStockEquityxrPoGi2.setProfitPercentBonus.call(uintPRdCsk0, {from: accounts[3]});
		const uint256fIEMwBz = await FairStockEquityxrPoGi2.bonus.call(uintIvzedhm, {from: accounts[3]});

		await expect(FairStockEquityxrPoGi2.withdrawBonus.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressmKg6p2A = accounts[3]
		const addressVL3dwwo = accounts[4]
		const addresstWDeKF = accounts[5]
		const addressx5HCejo = accounts[3]
		const uintCr67mA4 = BigInt("1740")
		const FairStockEquityRezdA8y = await FairStockEquity.new(addressmKg6p2A, addressVL3dwwo, addresstWDeKF, addressx5HCejo, uintCr67mA4, {from: accounts[3]});
		const uintCGensvh = BigInt("1472")
		const uintLhIH0jv = BigInt("3")
		const uintwJY2Ly1 = BigInt("23")
		const uintg1iPZ6P = BigInt("959")
		const addresshtF2S7H = accounts[0]
		const uintvotkw1I = BigInt("255")
		const uintPMRqSzl = BigInt("210")
		const addressq3Q2kqX = accounts[3]
		const uintHa6tRu = BigInt("498")
		const uintIc9p4jS = BigInt("441")
		const uintqntuZJJ = BigInt("1248")
		const uintrTuXl4C = BigInt("784")
		const addressHUXbPue = accounts[2]
		const uintUrHZ9no = BigInt("1794")
		const address1uiEgb = await FairStockEquityRezdA8y.business.call(addresshtF2S7H, uintg1iPZ6P, uintwJY2Ly1, uintLhIH0jv, uintCGensvh, {from: accounts[3]});
		const addressCbsbjrN = await FairStockEquityRezdA8y.withdrawMTCallback.call(addressq3Q2kqX, uintPMRqSzl, uintvotkw1I, {from: accounts[0]});
		const addressrTMzwBM = await FairStockEquityRezdA8y.business.call(addressHUXbPue, uintrTuXl4C, uintqntuZJJ, uintIc9p4jS, uintHa6tRu, {from: "0x0000000000000000000000000000000000000001"});
		const uint2560IeT20 = await FairStockEquityRezdA8y.setStartTime.call(uintUrHZ9no, {from: accounts[3]});

		await expect(FairStockEquityRezdA8y.business.call(addresshtF2S7H, uintg1iPZ6P, uintwJY2Ly1, uintLhIH0jv, uintCGensvh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressgFqotbm = accounts[4]
		const addressHI0NVJh = accounts[1]
		const addressfp3byA = accounts[2]
		const addressaJyfLQT = accounts[3]
		const uintllWlOQb = BigInt("1749")
		const FairStockEquityHeYfKAn = await FairStockEquity.new(addressgFqotbm, addressHI0NVJh, addressfp3byA, addressaJyfLQT, uintllWlOQb, {from: accounts[1]});
		const uintm2scZf = BigInt("574")
		const uintTS0t54P = BigInt("1351")
		const uintm3F9pH7 = BigInt("1551")
		const addressVz3TPzI = accounts[4]
		const uint256BkM4hJX = await FairStockEquityHeYfKAn.bonus.call(uintm2scZf, {from: accounts[3]});
		await FairStockEquityHeYfKAn.checkStart.call({from: accounts[1]});
		const addresscN0sTK = await FairStockEquityHeYfKAn.withdrawMTCallback.call(addressVz3TPzI, uintm3F9pH7, uintTS0t54P, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityHeYfKAn.bonus.call(uintm2scZf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvMp7c0K = accounts[1]
		const addressd3KYpDi = accounts[4]
		const addresso6BLbuq = accounts[4]
		const addressNGOTxVB = accounts[1]
		const uintGldn175 = BigInt("611")
		const FairStockEquityH9FYbrw = await FairStockEquity.new(addressvMp7c0K, addressd3KYpDi, addresso6BLbuq, addressNGOTxVB, uintGldn175, {from: accounts[4]});
		const uintk2nRONZ = BigInt("1260")
		const uintORZDWL3 = BigInt("45")
		const uint256iKpdIgf = await FairStockEquityH9FYbrw.setStartTime.call(uintk2nRONZ, {from: accounts[4]});
		const uint256Wtr1YE = await FairStockEquityH9FYbrw.setProfitPercentBonus.call(uintORZDWL3, {from: accounts[4]});
		await FairStockEquityH9FYbrw.withdrawMT.call({from: accounts[1]});

		await expect(FairStockEquityH9FYbrw.withdrawMT.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressCcTDGwg = accounts[0]
		const addressP1Cr0bl = accounts[5]
		const addressjktwEql = accounts[3]
		const addressV02fzQO = accounts[1]
		const uintFvJp3GS = BigInt("361")
		const FairStockEquitykTcPGJL = await FairStockEquity.new(addressCcTDGwg, addressP1Cr0bl, addressjktwEql, addressV02fzQO, uintFvJp3GS, {from: accounts[1]});
		const uintkOm4mmS = BigInt("1918")
		const uintXvrHp6I = BigInt("1859")
		const uintAeAH6it = BigInt("898")
		const uintD32wrb = BigInt("1511")
		const uintT47sueY = BigInt("1970")
		const uintOqXNX2C = BigInt("1015")
		const addressdGiQ8d = accounts[0]
		const uintZN32aBE = BigInt("1620")
		const uint256MVchIG9 = await FairStockEquitykTcPGJL.setProfitPercentMT.call(uintkOm4mmS, {from: accounts[2]});
		const uint256SYJNky = await FairStockEquitykTcPGJL.setProfitPercentBonus.call(uintXvrHp6I, {from: accounts[3]});
		const addressr8UGe8E = await FairStockEquitykTcPGJL.business.call(addressdGiQ8d, uintOqXNX2C, uintT47sueY, uintD32wrb, uintAeAH6it, {from: accounts[3]});
		const uint256VnXF6lu = await FairStockEquitykTcPGJL.reduceShare.call(uintZN32aBE, {from: accounts[0]});
		await FairStockEquitykTcPGJL.withdrawMT.call({from: accounts[2]});

		await expect(FairStockEquitykTcPGJL.setProfitPercentMT.call(uintkOm4mmS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZSJFLu1 = "0x0000000000000000000000000000000000000001"
		const addressRvpXKe1 = accounts[5]
		const addressypxI3fY = accounts[5]
		const addressLKRU91n = accounts[5]
		const uint7HGk3m = BigInt("1016")
		const FairStockEquityHEO8xB = await FairStockEquity.new(addressZSJFLu1, addressRvpXKe1, addressypxI3fY, addressLKRU91n, uint7HGk3m, {from: accounts[4]});
		const uintYDByrSW = BigInt("1432")
		const addressSbBjFvq = accounts[1]
		const addressYjrTWtj = await FairStockEquityHEO8xB.depositLPT.call(addressSbBjFvq, uintYDByrSW, {from: accounts[0]});

		await expect(FairStockEquityHEO8xB.depositLPT.call(addressSbBjFvq, uintYDByrSW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresskiPjrX4 = accounts[0]
		const addressZIGCQM7 = accounts[3]
		const addressj5AwbY = accounts[3]
		const addressqSS58y = accounts[4]
		const uintPPMYmH1 = BigInt("906")
		const FairStockEquityif2b6Ul = await FairStockEquity.new(addresskiPjrX4, addressZIGCQM7, addressj5AwbY, addressqSS58y, uintPPMYmH1, {from: accounts[3]});
		const uintESWgmAl = BigInt("1662")
		const uintwXHbDF = BigInt("1598")
		const addressNwZyaUP = accounts[3]
		const boolgoM4OKz = true
		const addressiQWCGPu = accounts[0]
		await FairStockEquityif2b6Ul.f.call({from: accounts[5]});
		await FairStockEquityif2b6Ul.withdrawPJ.call({from: accounts[5]});
		const addressOe3GdXJ = await FairStockEquityif2b6Ul.setModule.call(addressNwZyaUP, uintwXHbDF, uintESWgmAl, {from: accounts[0]});
		const addresscWpWhac = await FairStockEquityif2b6Ul.setLPT.call(addressiQWCGPu, boolgoM4OKz, {from: accounts[2]});
		await FairStockEquityif2b6Ul.onlyDataSource.call({from: accounts[1]});

		await expect(FairStockEquityif2b6Ul.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressHQEnHQ = accounts[1]
		const addressQhz0lnI = accounts[1]
		const addresshuwBJH = "0x0000000000000000000000000000000000000001"
		const addressYEJjnAy = accounts[2]
		const uintenJzb6s = BigInt("943")
		const FairStockEquityM6sFE0u = await FairStockEquity.new(addressHQEnHQ, addressQhz0lnI, addresshuwBJH, addressYEJjnAy, uintenJzb6s, {from: accounts[5]});
		const uintE0y5VwY = BigInt("1387")
		const uintf84hOlg = BigInt("836")
		const uint256hRiI9ge = await FairStockEquityM6sFE0u.setGasFeeForCallback.call(uintE0y5VwY, {from: accounts[5]});
		const uint256WCyiA3b = await FairStockEquityM6sFE0u.setProfitPercentPJ.call(uintf84hOlg, {from: accounts[5]});
		await FairStockEquityM6sFE0u.onlyDataSource.call({from: accounts[0]});

		await expect(FairStockEquityM6sFE0u.onlyDataSource.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressaioHC0R = "0x0000000000000000000000000000000000000001"
		const addressECu3VM = accounts[5]
		const addresskRtUYaJ = accounts[5]
		const addressqdF5aMU = accounts[5]
		const uintortMdv = BigInt("1016")
		const FairStockEquityHEO8xB = await FairStockEquity.new(addressaioHC0R, addressECu3VM, addresskRtUYaJ, addressqdF5aMU, uintortMdv, {from: accounts[4]});
		const uintEr9P6ny = BigInt("1163")
		const uintJxYrCdP = BigInt("1424")
		const addressylYReoW = accounts[5]
		const uintWirXmA8 = BigInt("2018")
		const uint256Wyw6LTS = await FairStockEquityHEO8xB.reduceShare.call(uintEr9P6ny, {from: accounts[1]});
		const addressYjrTWtj = await FairStockEquityHEO8xB.depositLPT.call(addressylYReoW, uintJxYrCdP, {from: accounts[0]});
		const uint256mPrJu4I = await FairStockEquityHEO8xB.setProfitPercentMT.call(uintWirXmA8, {from: accounts[4]});

		await expect(FairStockEquityHEO8xB.reduceShare.call(uintEr9P6ny, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspElw15j = "0x0000000000000000000000000000000000000001"
		const addresstxIt8de = accounts[5]
		const addressYkNAwzD = accounts[5]
		const addressoWpc40w = accounts[5]
		const uintazDF3zX = BigInt("1016")
		const FairStockEquityHEO8xB = await FairStockEquity.new(addresspElw15j, addresstxIt8de, addressYkNAwzD, addressoWpc40w, uintazDF3zX, {from: accounts[4]});
		const uintO4EWyf9 = BigInt("2028")
		const uintP5p3Kv = BigInt("301")
		const addressmD0nzyy = accounts[5]
		const uintj7FxGO = BigInt("1446")
		const addressMdMyJy = accounts[5]
		const addressJeCRDcO = await FairStockEquityHEO8xB.withdrawBonusCallback.call(addressmD0nzyy, uintP5p3Kv, uintO4EWyf9, {from: accounts[1]});
		const addressYjrTWtj = await FairStockEquityHEO8xB.depositLPT.call(addressMdMyJy, uintj7FxGO, {from: accounts[0]});

		await expect(FairStockEquityHEO8xB.withdrawBonusCallback.call(addressmD0nzyy, uintP5p3Kv, uintO4EWyf9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressb71zlQv = accounts[2]
		const addressq9uuD7 = accounts[4]
		const addressVux7lad = accounts[4]
		const addresstJtCMM = accounts[5]
		const uintslSwWO7 = BigInt("1021")
		const FairStockEquityHClYJEG = await FairStockEquity.new(addressb71zlQv, addressq9uuD7, addressVux7lad, addresstJtCMM, uintslSwWO7, {from: accounts[1]});
		const uintKvSbGmK = BigInt("599")
		const addressynmJ5hK = accounts[5]
		const uintvgiRIAi = BigInt("206")
		const uintQoC9b8K = BigInt("1785")
		const uintfXdOvnk = BigInt("63")
		const uintCAAC72N = BigInt("65")
		const addressZBy1GUI = accounts[2]
		const addresspbl42gL = await FairStockEquityHClYJEG.withdrawLPT.call(addressynmJ5hK, uintKvSbGmK, {from: accounts[5]});
		const uint256jcdd43g = await FairStockEquityHClYJEG.setProfitPercentBonus.call(uintvgiRIAi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256B7pGppb = await FairStockEquityHClYJEG.setProfitPercentBonus.call(uintQoC9b8K, {from: accounts[1]});
		await FairStockEquityHClYJEG.onlyDataSource.call({from: accounts[2]});
		const addressz5xhedl = await FairStockEquityHClYJEG.setModule.call(addressZBy1GUI, uintCAAC72N, uintfXdOvnk, {from: accounts[0]});

		await expect(FairStockEquityHClYJEG.withdrawLPT.call(addressynmJ5hK, uintKvSbGmK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressL3nQcr6 = "0x0000000000000000000000000000000000000001"
		const addressyehUMHq = accounts[5]
		const addressE2DigqG = accounts[5]
		const addressGAnUYBM = accounts[5]
		const uintVyXyEBN = BigInt("1016")
		const FairStockEquityHEO8xB = await FairStockEquity.new(addressL3nQcr6, addressyehUMHq, addressE2DigqG, addressGAnUYBM, uintVyXyEBN, {from: accounts[4]});
		const uintntmTGho = BigInt("1704")
		const uintrT6fAp1 = BigInt("529")
		const uintFb19BL0 = BigInt("814")
		const addresswfCDWH = accounts[0]
		const uintvr7QSQs = BigInt("1443")
		const addressmOXRsIA = accounts[1]
		const uint256qqXJFF9 = await FairStockEquityHEO8xB.invest.call(uintntmTGho, {from: accounts[5]});
		const addressS8JwGfA = await FairStockEquityHEO8xB.withdrawBonusCallback.call(addresswfCDWH, uintFb19BL0, uintrT6fAp1, {from: accounts[0]});
		const addressYjrTWtj = await FairStockEquityHEO8xB.depositLPT.call(addressmOXRsIA, uintvr7QSQs, {from: accounts[0]});

		await expect(FairStockEquityHEO8xB.invest.call(uintntmTGho, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressAwE0KgR = "0x0000000000000000000000000000000000000001"
		const addressuanDa1s = accounts[5]
		const addressv7E4Xbk = accounts[5]
		const addressNwBn0Om = accounts[5]
		const uintHMwl2GT = BigInt("1016")
		const FairStockEquityHEO8xB = await FairStockEquity.new(addressAwE0KgR, addressuanDa1s, addressv7E4Xbk, addressNwBn0Om, uintHMwl2GT, {from: accounts[4]});
		const uintLfKfAOw = BigInt("1822")
		const uintazyaSDI = BigInt("298")
		const addressb6FZwRh = accounts[5]
		const uintz5zxHtv = BigInt("1704")
		const uintRN13b6Z = BigInt("1399")
		const addressQh2AFiY = "0x0000000000000000000000000000000000000001"
		const addressp5BQzE = await FairStockEquityHEO8xB.withdrawMTCallback.call(addressb6FZwRh, uintazyaSDI, uintLfKfAOw, {from: accounts[5]});
		const uint256qqXJFF9 = await FairStockEquityHEO8xB.invest.call(uintz5zxHtv, {from: accounts[5]});
		const addressYjrTWtj = await FairStockEquityHEO8xB.depositLPT.call(addressQh2AFiY, uintRN13b6Z, {from: accounts[0]});

		await expect(FairStockEquityHEO8xB.withdrawMTCallback.call(addressb6FZwRh, uintazyaSDI, uintLfKfAOw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressDCOawQv = "0x0000000000000000000000000000000000000001"
		const addressEQpbOz0 = accounts[5]
		const addressmNQCj6D = accounts[5]
		const addressRqTNfVf = accounts[5]
		const uintcOu3Wsc = BigInt("1016")
		const FairStockEquityHEO8xB = await FairStockEquity.new(addressDCOawQv, addressEQpbOz0, addressmNQCj6D, addressRqTNfVf, uintcOu3Wsc, {from: accounts[4]});
		const uintEtzRefF = BigInt("872")
		const uintkQark7 = BigInt("1432")
		const addressy8UGicu = accounts[1]
		const uintpjMcw4 = BigInt("462")
		const uint256FrL1ob = await FairStockEquityHEO8xB.depositBonus.call(uintEtzRefF, {from: accounts[5]});
		const addressYjrTWtj = await FairStockEquityHEO8xB.depositLPT.call(addressy8UGicu, uintkQark7, {from: accounts[0]});
		const uint256ro2U05j = await FairStockEquityHEO8xB.reduceShare.call(uintpjMcw4, {from: accounts[2]});
		await FairStockEquityHEO8xB.withdrawPJ.call({from: accounts[5]});

		await expect(FairStockEquityHEO8xB.depositBonus.call(uintEtzRefF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressEpQ26k1 = accounts[0]
		const addressurRhXa2 = accounts[0]
		const addressEF1hpvp = accounts[3]
		const addressx6ajmk0 = accounts[3]
		const uintT8YEFWH = BigInt("61")
		const FairStockEquityxVSjh0e = await FairStockEquity.new(addressEpQ26k1, addressurRhXa2, addressEF1hpvp, addressx6ajmk0, uintT8YEFWH, {from: "0x0000000000000000000000000000000000000001"});
		const uintDsoBea = BigInt("1600")
		const uintONVIcBp = BigInt("133")
		const uintGF1OZW = BigInt("1567")
		const addressbvRVnhf = accounts[5]
		const uintNQotatp = BigInt("724")
		const uintmf73kB = BigInt("1760")
		await FairStockEquityxVSjh0e.withdrawMT.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qZ3a3dW = await FairStockEquityxVSjh0e.reduceShare.call(uintDsoBea, {from: accounts[2]});
		const addressLckaeko = await FairStockEquityxVSjh0e.withdrawBonusCallback.call(addressbvRVnhf, uintGF1OZW, uintONVIcBp, {from: accounts[3]});
		const uint256P9f9kcp = await FairStockEquityxVSjh0e.setGasFeeForCallback.call(uintNQotatp, {from: accounts[4]});
		await FairStockEquityxVSjh0e.withdrawMT.call({from: accounts[1]});
		const uint256JBNylY = await FairStockEquityxVSjh0e.invest.call(uintmf73kB, {from: accounts[0]});
	});

	it('test for FairStockEquity', async () => {
		const addressoYxzHRU = accounts[1]
		const addressdz6luxL = accounts[2]
		const addressU2TMTcm = accounts[0]
		const addressXBBQKPe = accounts[3]
		const uinthEfTZ2A = BigInt("893")
		const FairStockEquityEyj3lCL = await FairStockEquity.new(addressoYxzHRU, addressdz6luxL, addressU2TMTcm, addressXBBQKPe, uinthEfTZ2A, {from: accounts[3]});
		const uintn79esA7 = BigInt("605")
		const uintsjwIbX = BigInt("106")
		const addressCmbtsPQ = accounts[1]
		const uintkg57gHO = BigInt("1141")
		const uintsaadDLK = BigInt("1460")
		const uinttMYbgwq = BigInt("1053")
		const address3rL36L = accounts[5]
		const addressWfkhKzh = await FairStockEquityEyj3lCL.withdrawBonusCallback.call(addressCmbtsPQ, uintsjwIbX, uintn79esA7, {from: accounts[3]});
		const uint256WI0Ywrt = await FairStockEquityEyj3lCL.invest.call(uintkg57gHO, {from: accounts[4]});
		const uint256V4ADH6a = await FairStockEquityEyj3lCL.invest.call(uintsaadDLK, {from: "0x0000000000000000000000000000000000000001"});
		const addressi4nEBUc = await FairStockEquityEyj3lCL.depositLPT.call(address3rL36L, uinttMYbgwq, {from: accounts[2]});

		await expect(FairStockEquityEyj3lCL.withdrawBonusCallback.call(addressCmbtsPQ, uintsjwIbX, uintn79esA7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressERxknkc = "0x0000000000000000000000000000000000000001"
		const addressjuxfqqJ = accounts[5]
		const addresslvQIMMz = accounts[5]
		const addressNV5ZSmJ = accounts[5]
		const uintICdUNbN = BigInt("1016")
		const FairStockEquityHEO8xB = await FairStockEquity.new(addressERxknkc, addressjuxfqqJ, addresslvQIMMz, addressNV5ZSmJ, uintICdUNbN, {from: accounts[4]});
		const boolUqd0ay = true
		const addressane3Gfs = accounts[2]
		const uintD15LJqf = BigInt("1193")
		const uintAkwVyur = BigInt("1736")
		const uintgjCUR4P = BigInt("1686")
		const addressvTGqpgm = accounts[2]
		const addressrNTbZVK = await FairStockEquityHEO8xB.setLPT.call(addressane3Gfs, boolUqd0ay, {from: accounts[4]});
		const uint256qqXJFF9 = await FairStockEquityHEO8xB.invest.call(uintD15LJqf, {from: accounts[5]});
		const addresstvzOiDz = await FairStockEquityHEO8xB.setModule.call(addressvTGqpgm, uintgjCUR4P, uintAkwVyur, {from: accounts[3]});

		await expect(FairStockEquityHEO8xB.invest.call(uintD15LJqf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresspH8g6Y5 = "0x0000000000000000000000000000000000000001"
		const addressI07Rk3 = accounts[5]
		const addressn5HN63d = accounts[5]
		const addressY9pKgaC = accounts[5]
		const uintUYv8FT = BigInt("1016")
		const FairStockEquityHEO8xB = await FairStockEquity.new(addresspH8g6Y5, addressI07Rk3, addressn5HN63d, addressY9pKgaC, uintUYv8FT, {from: accounts[4]});
		const uintWF5Hr7Q = BigInt("1241")
		const uinthqZn0kV = BigInt("906")
		const addressXWpJebl = accounts[4]
		const uintaUE4zZ3 = BigInt("1887")
		const uintqgUgSZB = BigInt("500")
		const uintk39BmZP = BigInt("742")
		const uintYKnlLt2 = BigInt("1806")
		const addressBF4SneR = accounts[3]
		const uintk07p7A9 = BigInt("1202")
		const addressLHAe36t = await FairStockEquityHEO8xB.setModule.call(addressXWpJebl, uinthqZn0kV, uintWF5Hr7Q, {from: accounts[4]});
		const addresscwwzuXq = await FairStockEquityHEO8xB.business.call(addressBF4SneR, uintYKnlLt2, uintk39BmZP, uintqgUgSZB, uintaUE4zZ3, {from: accounts[4]});
		const uint256qqXJFF9 = await FairStockEquityHEO8xB.invest.call(uintk07p7A9, {from: accounts[5]});

		await expect(FairStockEquityHEO8xB.business.call(addressBF4SneR, uintYKnlLt2, uintk39BmZP, uintqgUgSZB, uintaUE4zZ3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressY84sZ2O = "0x0000000000000000000000000000000000000001"
		const addressgMuwEgp = accounts[5]
		const addresshFGSgop = accounts[5]
		const addressLnZAd12 = accounts[5]
		const uintibsUGZ4 = BigInt("1016")
		const FairStockEquityHEO8xB = await FairStockEquity.new(addressY84sZ2O, addressgMuwEgp, addresshFGSgop, addressLnZAd12, uintibsUGZ4, {from: accounts[4]});
		const uintFAGuvZF = BigInt("20")
		const uintlP2WE00 = BigInt("1211")
		const uint256PXogeVS = await FairStockEquityHEO8xB.setStartTime.call(uintFAGuvZF, {from: accounts[4]});
		const uint256qqXJFF9 = await FairStockEquityHEO8xB.invest.call(uintlP2WE00, {from: accounts[5]});

		await expect(FairStockEquityHEO8xB.setStartTime.call(uintFAGuvZF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address4Rr7Ax = "0x0000000000000000000000000000000000000001"
		const addressn653ytJ = accounts[5]
		const addressq9eP0II = accounts[5]
		const addressqaX4xg3 = accounts[5]
		const uintMFEI8lk = BigInt("1016")
		const FairStockEquityHEO8xB = await FairStockEquity.new(address4Rr7Ax, addressn653ytJ, addressq9eP0II, addressqaX4xg3, uintMFEI8lk, {from: accounts[4]});
		const uintlKYoCfS = BigInt("1205")
		await FairStockEquityHEO8xB.withdrawPJ.call({from: accounts[4]});
		const uint256qqXJFF9 = await FairStockEquityHEO8xB.invest.call(uintlKYoCfS, {from: accounts[5]});

		await expect(FairStockEquityHEO8xB.withdrawPJ.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})