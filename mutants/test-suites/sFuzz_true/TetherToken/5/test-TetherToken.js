const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintgIOxOU = BigInt("237")
		const stringGQpnxJn = "YbtGZoEnkhxUfrxbWsrIfdprMqpapoTLJ8rxgCXTD1m3zNoduFGXJVsOYutY4aZr"
		const stringePkE4g4 = "lKB5rawg7jHZnCPJgunIZz8D9VhQSLQVDQYTOladUS2CTX72i8hYR3rgLSL5YLuwDwPnkkFtDisVE933WJ"
		const uintVoD4Od = BigInt("276")
		const TetherTokenhqEreMZ = await TetherToken.new(uintgIOxOU, stringGQpnxJn, stringePkE4g4, uintVoD4Od, {from: accounts[4]});
		const addresstQ3IczH = accounts[1]
		const uintIHbeBVb = BigInt("260")
		const addressgiaDpH6 = "0x0000000000000000000000000000000000000001"
		const uintn4lyPPm = BigInt("949")
		const uintuTVz4i8 = BigInt("1506")
//		const addressu6e5OEW = await TetherTokenhqEreMZ.deprecate.call(addresstQ3IczH, {from: accounts[1]});
//		const addressL0Y7DLW = await TetherTokenhqEreMZ.transfer.call(addressgiaDpH6, uintIHbeBVb, {from: "0x0000000000000000000000000000000000000001"});
//		const uintnHUP27l = await TetherTokenhqEreMZ.totalSupply.call({from: accounts[1]});
//		const uintDlfoslq = await TetherTokenhqEreMZ.totalSupply.call({from: accounts[4]});
//		const uintL8pu9nB = await TetherTokenhqEreMZ.setParams.call(uintuTVz4i8, uintn4lyPPm, {from: accounts[2]});

		await expect(TetherTokenhqEreMZ.deprecate.call(addresstQ3IczH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintLlKPWrB = BigInt("1023")
		const stringm1FfYLo = "kRMpzjM55O1NbL76oi"
		const stringAe0mxRf = "YooAHlxlYf1rBpLQo8y19CuOUrHo"
		const uintq5MXS0b = BigInt("124")
		const TetherTokenzkjGgQY = await TetherToken.new(uintLlKPWrB, stringm1FfYLo, stringAe0mxRf, uintq5MXS0b, {from: accounts[2]});
		const uintvMEjpaE = BigInt("218")
		const addressazSc8yR = accounts[5]
		const addresswHrf0S = accounts[1]
		const uintVRiuccF = BigInt("884")
		const addressbmS1EIe = accounts[0]
		const addressJgybnA5 = accounts[5]
		const uintVbFmyF2 = BigInt("810")
		const addressaq5uOYQ = accounts[4]
//		const addressKfmXsDB = await TetherTokenzkjGgQY.transfer.call(addressazSc8yR, uintvMEjpaE, {from: accounts[4]});
//		const addressHSemJRT = await TetherTokenzkjGgQY.deprecate.call(addresswHrf0S, {from: accounts[5]});
//		const addressjxSC5dD = await TetherTokenzkjGgQY.transferFrom.call(addressJgybnA5, addressbmS1EIe, uintVRiuccF, {from: accounts[0]});
//		const addressKUqg4au = await TetherTokenzkjGgQY.approve.call(addressaq5uOYQ, uintVbFmyF2, {from: accounts[2]});
//		const uintcNHJzXP = await TetherTokenzkjGgQY.totalSupply.call({from: accounts[3]});

		await expect(TetherTokenzkjGgQY.transfer.call(addressazSc8yR, uintvMEjpaE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintXkqkCv0 = BigInt("810")
		const stringZ9L0y1S = "TIS3kGAgvXZFTwpPZYuOdct62FYLEpq"
		const stringP6l2zIw = "TqfwBdORAuINcIzm68f3SzMvF9jvcdTMrdrzdQtPk8FIT0fC1DzhFNCBxbxbGM51GawHnVK"
		const uintuZKiaW = BigInt("1801")
		const TetherToken35Ub8E = await TetherToken.new(uintXkqkCv0, stringZ9L0y1S, stringP6l2zIw, uintuZKiaW, {from: accounts[4]});
		const uintTM8ckr6 = BigInt("1837")
		const uintbHBCEJI = BigInt("2015")
		const addresszMhl24l = accounts[0]
//		const uintFHVk00V = await TetherToken35Ub8E.issue.call(uintTM8ckr6, {from: accounts[0]});
//		const addressU4TQJAc = await TetherToken35Ub8E.approve.call(addresszMhl24l, uintbHBCEJI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherToken35Ub8E.issue.call(uintTM8ckr6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintjkGCZz4 = BigInt("529")
		const stringsvwqlr1 = "BWIoybtBKatQlmOHToAfkF5s5Lc1cq3"
		const stringMtiO3co = "IwEf7o7ABMx83smLwuAn39iPKKKen85ecJOTKOl4KdPcBqJ9bkmp4exnkA"
		const uintQGUgi3k = BigInt("1277")
		const TetherTokenw4KU78C = await TetherToken.new(uintjkGCZz4, stringsvwqlr1, stringMtiO3co, uintQGUgi3k, {from: accounts[3]});
		const uintI9LXGP9 = BigInt("945")
		const uintuBWASCm = BigInt("878")
		const addressNSe3U5J = accounts[3]
		const uintn0qVXJc = BigInt("46")
		const addressA0d983e = accounts[4]
		const addressvnccdz = accounts[4]
		const uinthKCck3x = BigInt("1686")
//		const uintoUfsoWD = await TetherTokenw4KU78C.redeem.call(uintI9LXGP9, {from: accounts[5]});
//		const addressQ9UqJVA = await TetherTokenw4KU78C.approve.call(addressNSe3U5J, uintuBWASCm, {from: accounts[4]});
//		const addresscnR0CUY = await TetherTokenw4KU78C.transfer.call(addressA0d983e, uintn0qVXJc, {from: accounts[2]});
//		const addressScGocpJ = await TetherTokenw4KU78C.deprecate.call(addressvnccdz, {from: "0x0000000000000000000000000000000000000001"});
//		const uintobEinzA = await TetherTokenw4KU78C.redeem.call(uinthKCck3x, {from: accounts[0]});

		await expect(TetherTokenw4KU78C.redeem.call(uintI9LXGP9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uint0dkyQJ = BigInt("607")
		const stringimQFo4l = "Nvk7uHBfM9scWBaoyhZUv34oe44ll4HvizZLdZIfsbZsMbOEM8OWo7CHiHpqLTQKK6xP6paIL87KYYwq5PncIU5PHLfm2D"
		const stringsXwodz = "Aq5zifRbdeuqOapMlEsxhNkX5X3VBE"
		const uintPSyyeEr = BigInt("595")
		const TetherTokenvd80Qzt = await TetherToken.new(uint0dkyQJ, stringimQFo4l, stringsXwodz, uintPSyyeEr, {from: accounts[4]});
		const uintfC11135 = BigInt("1107")
		const addressVKvJzwc = accounts[1]
		const addressKb8X3wG = accounts[2]
		const addressEGcI268 = await TetherTokenvd80Qzt.approve.call(addressVKvJzwc, uintfC11135, {from: accounts[1]});
//		const addressu4UXrCU = await TetherTokenvd80Qzt.deprecate.call(addressKb8X3wG, {from: accounts[3]});

		await expect(TetherTokenvd80Qzt.deprecate.call(addressKb8X3wG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintR2cDjy = BigInt("775")
		const stringR91MLsw = "S1syHvEuKyXibtaWFm2MR86FmK5AM"
		const stringnN3Myar = "MjOWhIz9siHjwXZsoYmoOwQeUeNoAg149wCuO04VTIRcA439zatwZJS5WUmizWNDDtAQRW4DZLTjFbJt"
		const uintfZ7teaI = BigInt("1565")
		const TetherTokenBouR8ua = await TetherToken.new(uintR2cDjy, stringR91MLsw, stringnN3Myar, uintfZ7teaI, {from: accounts[3]});
		const addressNMMyxo6 = accounts[4]
		const addressxpxpq3a = accounts[1]
		const addressdhReOeg = accounts[3]
		const uintPiATnM = BigInt("43")
		const uintaYoFjbY = BigInt("2017")
		const uintH5dErp = BigInt("585")
		const addressB8hckCj = await TetherTokenBouR8ua.deprecate.call(addressNMMyxo6, {from: accounts[3]});
//		const addressyFtnMQb = await TetherTokenBouR8ua.deprecate.call(addressxpxpq3a, {from: accounts[2]});
//		const uintEasN28 = await TetherTokenBouR8ua.balanceOf.call(addressdhReOeg, {from: accounts[0]});
//		const uintrrnlVGb = await TetherTokenBouR8ua.setParams.call(uintaYoFjbY, uintPiATnM, {from: accounts[2]});
//		const uinttKhEgKI = await TetherTokenBouR8ua.totalSupply.call({from: accounts[2]});
//		const uintIpaQ4mo = await TetherTokenBouR8ua.issue.call(uintH5dErp, {from: accounts[4]});

		await expect(TetherTokenBouR8ua.deprecate.call(addressxpxpq3a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintz76wnUD = BigInt("518")
		const stringFfWBUi = "2VEjWh83DpG5HRAHmnnfWFfqsDQxKlBi6v"
		const stringFJNsWL0 = "e8FbNwsLwg753bPrzqRve2LVrC1SyjD3Let0iUjaIzqtuoTYLMvxVgm4s6vCbkS5y"
		const uintLCFcuGm = BigInt("1283")
		const TetherTokendWVSHhq = await TetherToken.new(uintz76wnUD, stringFfWBUi, stringFJNsWL0, uintLCFcuGm, {from: accounts[0]});
		const uintRCuhcw2 = BigInt("1624")
		const addressc2Sowlz = accounts[4]
		const addressTe80kN = "0x0000000000000000000000000000000000000001"
		const addressaFTYZkK = accounts[1]
		const addressosi79sW = accounts[2]
//		const addressQSMW89G = await TetherTokendWVSHhq.transferFrom.call(addressTe80kN, addressc2Sowlz, uintRCuhcw2, {from: accounts[2]});
//		const uintJDkTjn9 = await TetherTokendWVSHhq.balanceOf.call(addressaFTYZkK, {from: accounts[1]});
//		const uintYDGRdFw = await TetherTokendWVSHhq.balanceOf.call(addressosi79sW, {from: accounts[5]});

		await expect(TetherTokendWVSHhq.transferFrom.call(addressTe80kN, addressc2Sowlz, uintRCuhcw2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintDFctKur = BigInt("157")
		const stringxXKPNXG = "5WFkelxiiyUM7kasoaYRiEr1fdw547EAeRaDs"
		const stringd3dRIQw = "V8fvhsOdaN3sEpTugh1LKfyygHS4RRiH5zWph"
		const uintC4eeERx = BigInt("1662")
		const TetherTokengD2hoGp = await TetherToken.new(uintDFctKur, stringxXKPNXG, stringd3dRIQw, uintC4eeERx, {from: accounts[2]});
		const uintFl9V0n = BigInt("979")
		const uintKPiavem = BigInt("792")
		const addressMiwzjV = accounts[2]
		const addressqoA5dRE = accounts[1]
		const uintxllDQO7 = BigInt("1064")
		const addressLMM8zRl = accounts[1]
		const addresscGAIar = accounts[3]
//		const uintGbEnMGY = await TetherTokengD2hoGp.redeem.call(uintFl9V0n, {from: accounts[2]});
//		const addressioepDEy = await TetherTokengD2hoGp.transferFrom.call(addressqoA5dRE, addressMiwzjV, uintKPiavem, {from: accounts[3]});
//		const addressl7NFyXx = await TetherTokengD2hoGp.transferFrom.call(addresscGAIar, addressLMM8zRl, uintxllDQO7, {from: accounts[4]});

		await expect(TetherTokengD2hoGp.redeem.call(uintFl9V0n, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintoZHLDON = BigInt("810")
		const stringZ9L0y1S = "TIS3kGAgvXZFTwpPZYuOdct62FYLEpq"
		const stringP6l2zIw = "TqfwBdORAuINcIzm68f3SzMvF9jvcdTMrdrzdQtPk8FIT0fC1DzhFNCBxbxbGM51GawHnVK"
		const uintI2bNcLt = BigInt("1801")
		const TetherToken35Ub8E = await TetherToken.new(uintoZHLDON, stringZ9L0y1S, stringP6l2zIw, uintI2bNcLt, {from: accounts[4]});
		const addressjdBhJP8 = accounts[3]
		const uintubLJjQ = BigInt("573")
		const addressKFG3wP = accounts[3]
		const addressvPaMGS = accounts[2]
		const uintxcBcF1I = BigInt("1837")
		const uintikK5TY9 = BigInt("2015")
		const addressnh9THQA = accounts[0]
		const uintoth1nSy = BigInt("1295")
		const uintUWOirCF = await TetherToken35Ub8E.balanceOf.call(addressjdBhJP8, {from: accounts[3]});
//		const addressqhi3NIQ = await TetherToken35Ub8E.transferFrom.call(addressvPaMGS, addressKFG3wP, uintubLJjQ, {from: accounts[4]});
//		const uintFHVk00V = await TetherToken35Ub8E.issue.call(uintxcBcF1I, {from: accounts[0]});
//		const addressU4TQJAc = await TetherToken35Ub8E.approve.call(addressnh9THQA, uintikK5TY9, {from: "0x0000000000000000000000000000000000000001"});
//		const uintA44minx = await TetherToken35Ub8E.redeem.call(uintoth1nSy, {from: accounts[3]});

		assert.equal(uintUWOirCF, BigInt("0"))
		await expect(TetherToken35Ub8E.transferFrom.call(addressvPaMGS, addressKFG3wP, uintubLJjQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintux68Xlt = BigInt("498")
		const stringIgygCtR = "QS8sVBtdgb5z0QS9USGAOT2HdQ9anUKtRJ80z6Dx2QZrVN1Wp2jYT1NdtUtJOpp9Q2gxWLKxradkGFppcrkewMUtUmbLrJP"
		const stringIzMRSD7 = "6Mrm3RqU0oca429qf8yqxz"
		const uintcmcZoI8 = BigInt("647")
		const TetherTokengqaGSg5 = await TetherToken.new(uintux68Xlt, stringIgygCtR, stringIzMRSD7, uintcmcZoI8, {from: accounts[1]});
		const addressAekU45j = "0x0000000000000000000000000000000000000001"
		const addresseBT9I9o = accounts[4]
		const uint0bUQAo = BigInt("959")
		const uinteLvDAFS = await TetherTokengqaGSg5.allowance.call(addresseBT9I9o, addressAekU45j, {from: accounts[1]});
//		const uintmcUz5YP = await TetherTokengqaGSg5.issue.call(uint0bUQAo, {from: accounts[5]});

		assert.equal(uinteLvDAFS, BigInt("0"))
		await expect(TetherTokengqaGSg5.issue.call(uint0bUQAo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpfW0RFk = BigInt("648")
		const stringH0YQxBr = "vAFJuS31nbeu1bQLd7LOaueI5XwB1CWvchGlcGWqHgEkLowGaRS"
		const stringmCKnXaQ = "QnsLhoISLTY1Ge69WOPLyU"
		const uintDlEHIgr = BigInt("127")
		const TetherTokengDJ4hoa = await TetherToken.new(uintpfW0RFk, stringH0YQxBr, stringmCKnXaQ, uintDlEHIgr, {from: accounts[4]});
		const uintfpizOhi = BigInt("63")
		const uintmvdmTCu = BigInt("331")
//		const uintSJHeYfJ = await TetherTokengDJ4hoa.setParams.call(uintmvdmTCu, uintfpizOhi, {from: accounts[4]});
//		const uintrZMADTz = await TetherTokengDJ4hoa.totalSupply.call({from: accounts[1]});

		await expect(TetherTokengDJ4hoa.setParams.call(uintmvdmTCu, uintfpizOhi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintyDpXmX = BigInt("648")
		const stringH0YQxBr = "vAFJuS31nbeu1bQLd7LOaueI5XwB1CWvchGlcGWqHgEkLowGaRS"
		const stringmCKnXaQ = "QnsLhoISLTY1Ge69WOPLyU"
		const uintow1U6r = BigInt("127")
		const TetherTokengDJ4hoa = await TetherToken.new(uintyDpXmX, stringH0YQxBr, stringmCKnXaQ, uintow1U6r, {from: accounts[4]});
		const addressObYZCGK = accounts[5]
		const uintujnu8Ty = await TetherTokengDJ4hoa.balanceOf.call(addressObYZCGK, {from: accounts[3]});
		const uintrZMADTz = await TetherTokengDJ4hoa.totalSupply.call({from: accounts[1]});

		assert.equal(uintrZMADTz, BigInt("648"))
		assert.equal(uintujnu8Ty, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintkq47AHv = BigInt("810")
		const stringZ9L0y1S = "TIS3kGAgvXZFTwpPZYuOdct62FYLEpq"
		const stringP6l2zIw = "TqfwBdORAuINcIzm68f3SzMvF9jvcdTMrdrzdQtPk8FIT0fC1DzhFNCBxbxbGM51GawHnVK"
		const uintYDPMzRu = BigInt("1801")
		const TetherToken35Ub8E = await TetherToken.new(uintkq47AHv, stringZ9L0y1S, stringP6l2zIw, uintYDPMzRu, {from: accounts[4]});
		const uintxlia24D = BigInt("2015")
		const addressjL2Apal = accounts[1]
		const uintdwsYKwJ = BigInt("549")
		const addressU4TQJAc = await TetherToken35Ub8E.approve.call(addressjL2Apal, uintxlia24D, {from: "0x0000000000000000000000000000000000000001"});
		const uintcCobYug = await TetherToken35Ub8E.issue.call(uintdwsYKwJ, {from: accounts[4]});
	});

	it('test for TetherToken', async () => {
		const uintHWwnG4b = BigInt("810")
		const stringZ9L0y1S = "TIS3kGAgvXZFTwpPZYuOdct62FYLEpq"
		const stringP6l2zIw = "TqfwBdORAuINcIzm68f3SzMvF9jvcdTMrdrzdQtPk8FIT0fC1DzhFNCBxbxbGM51GawHnVK"
		const uintw3cQlQ = BigInt("1801")
		const TetherToken35Ub8E = await TetherToken.new(uintHWwnG4b, stringZ9L0y1S, stringP6l2zIw, uintw3cQlQ, {from: accounts[4]});
		const uintfCdOnsC = BigInt("752")
		const uintSBgS6T1 = BigInt("2015")
		const addressvm0wEkq = accounts[0]
		const addresscvzFdWY = accounts[4]
		const addressiVTBW4N = accounts[4]
		const uintcnNgncR = await TetherToken35Ub8E.redeem.call(uintfCdOnsC, {from: accounts[4]});
		const addressU4TQJAc = await TetherToken35Ub8E.approve.call(addressvm0wEkq, uintSBgS6T1, {from: "0x0000000000000000000000000000000000000001"});
		const uintmyc07R1 = await TetherToken35Ub8E.allowance.call(addressiVTBW4N, addresscvzFdWY, {from: accounts[0]});

		assert.equal(uintmyc07R1, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintAGryCVK = BigInt("35")
		const stringuWgpvDJ = "eeM7IF58r"
		const stringLhjSkIS = "qeMivIt1OsnSVz5ZdGEJOn9VXJs4DYCXPTT2Uu6KSWXrKao1a0l5"
		const uintcVT3MJH = BigInt("917")
		const TetherTokenHSVFCKr = await TetherToken.new(uintAGryCVK, stringuWgpvDJ, stringLhjSkIS, uintcVT3MJH, {from: "0x0000000000000000000000000000000000000001"});
		const address7GuR8t = accounts[5]
		const addressNK0flub = accounts[3]
		const uintcNXNnR7 = await TetherTokenHSVFCKr.balanceOf.call(address7GuR8t, {from: accounts[5]});
		const uint1KI61h = await TetherTokenHSVFCKr.balanceOf.call(addressNK0flub, {from: accounts[5]});
	});
})