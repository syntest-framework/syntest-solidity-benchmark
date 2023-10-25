const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressrGKHwm = accounts[2]
		const ControllerwxSeVYL = await Controller.new(addressrGKHwm, {from: accounts[1]});
		const uintWJLx5S = BigInt("737")
		const addressMrZOBqv = accounts[2]
		const addressZuiXiU3 = accounts[1]
		const addressPD9jMqr = accounts[1]
		const addressfQUwMlS = accounts[5]
		const addressMG1O7ez = accounts[2]
		const addressVC9MMpK = accounts[2]
		const uintMmesUPl = BigInt("1778")
		const addressP4Bl2In = "0x0000000000000000000000000000000000000001"
		const addresscgkf2O0 = await ControllerwxSeVYL.withdraw.call(addressMrZOBqv, uintWJLx5S, {from: accounts[2]});
		const addressEvYG4gJ = await ControllerwxSeVYL.inCaseStrategyTokenGetStuck.call(addressPD9jMqr, addressZuiXiU3, {from: accounts[3]});
		const uintWYWuA6 = await ControllerwxSeVYL.balanceOf.call(addressfQUwMlS, {from: accounts[0]});
		const addressZTE4SZq = await ControllerwxSeVYL.setVault.call(addressVC9MMpK, addressMG1O7ez, {from: accounts[5]});
		const address7U866F = await ControllerwxSeVYL.earn.call(addressP4Bl2In, uintMmesUPl, {from: accounts[3]});

		await expect(ControllerwxSeVYL.withdraw.call(addressMrZOBqv, uintWJLx5S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTkZFXIC = accounts[0]
		const ControllerwuqEUB = await Controller.new(addressTkZFXIC, {from: accounts[3]});
		const uintc4JtMzc = BigInt("1806")
		const addresssW9moJw = accounts[1]
		const addressYvJc3P6 = accounts[1]
		const uintpu28qfR = BigInt("1254")
		const addresslqvWKQL = accounts[3]
		const addressi84nyfn = accounts[4]
		const uintX6Nh2G = BigInt("1352")
		const addresszCSSjw = accounts[3]
		const addresszgWjZ7e = accounts[4]
		const addressv61v5sV = "0x0000000000000000000000000000000000000001"
		const addressUnBG9Ua = accounts[0]
		const addressokji5Wp = accounts[2]
		const uinthZEa7NB = await ControllerwuqEUB.getExpectedReturn.call(addressYvJc3P6, addresssW9moJw, uintc4JtMzc, {from: accounts[0]});
		const addressoJ7nvsG = await ControllerwuqEUB.yearn.call(addressi84nyfn, addresslqvWKQL, uintpu28qfR, {from: accounts[0]});
		const address6f9v4A = await ControllerwuqEUB.withdraw.call(addresszCSSjw, uintX6Nh2G, {from: accounts[1]});
		const addressbil9eC8 = await ControllerwuqEUB.revokeStrategy.call(addressv61v5sV, addresszgWjZ7e, {from: accounts[1]});
		const addressNaxmOxO = await ControllerwuqEUB.revokeStrategy.call(addressokji5Wp, addressUnBG9Ua, {from: accounts[3]});

		await expect(ControllerwuqEUB.getExpectedReturn.call(addressYvJc3P6, addresssW9moJw, uintc4JtMzc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressi5BVo6R = "0x0000000000000000000000000000000000000001"
		const ControllerAs9850i = await Controller.new(addressi5BVo6R, {from: accounts[2]});
		const addressI1CJ9TP = accounts[2]
		const addresspX8jUn3 = accounts[2]
		const addressPaoIdu5 = accounts[4]
		const uintYW4j5UD = BigInt("531")
		const addresso44J8wj = "0x0000000000000000000000000000000000000001"
		const addressQsdMad2 = await ControllerAs9850i.inCaseStrategyTokenGetStuck.call(addresspX8jUn3, addressI1CJ9TP, {from: accounts[4]});
		const addressIji4hx = await ControllerAs9850i.setGovernance.call(addressPaoIdu5, {from: accounts[2]});
		const addressQ7tPNiy = await ControllerAs9850i.inCaseTokensGetStuck.call(addresso44J8wj, uintYW4j5UD, {from: accounts[2]});

		await expect(ControllerAs9850i.inCaseStrategyTokenGetStuck.call(addresspX8jUn3, addressI1CJ9TP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKMtnZXR = accounts[1]
		const ControllerEAWeVjQ = await Controller.new(addressKMtnZXR, {from: accounts[5]});
		const addressblqeTwv = accounts[0]
		const addressfmf0slc = accounts[3]
		const uintcU8BsdQ = BigInt("1195")
		const addresssDjpb0G = accounts[1]
		const addressXirttL = accounts[3]
		const addresss6QKXqZ = accounts[3]
		const addressPe3O8wd = accounts[1]
		const uintOAMENlH = BigInt("1094")
		const addressXAy4u30 = await ControllerEAWeVjQ.revokeStrategy.call(addressfmf0slc, addressblqeTwv, {from: accounts[1]});
		const uintxKKRQf2 = await ControllerEAWeVjQ.getExpectedReturn.call(addressXirttL, addresssDjpb0G, uintcU8BsdQ, {from: accounts[0]});
		const addressE1wt6IM = await ControllerEAWeVjQ.revokeStrategy.call(addressPe3O8wd, addresss6QKXqZ, {from: accounts[5]});
		const uinttzs2Q60 = await ControllerEAWeVjQ.setSplit.call(uintOAMENlH, {from: accounts[0]});

		await expect(ControllerEAWeVjQ.revokeStrategy.call(addressfmf0slc, addressblqeTwv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVMJh9zI = accounts[0]
		const Controllers5q6PZG = await Controller.new(addressVMJh9zI, {from: accounts[4]});
		const uintdbfWpv = BigInt("779")
		const addressMNc7yJU = accounts[0]
		const addressaJafN9u = accounts[1]
		const addressTE6iYQf = accounts[3]
		const addressag2iWMu = accounts[4]
		const addressEXYC2AL = accounts[1]
		const uintTYpAISl = BigInt("557")
		const addresscah1led = accounts[3]
		const addressMkYRfl6 = accounts[3]
		const addressNNBAgbf = await Controllers5q6PZG.earn.call(addressMNc7yJU, uintdbfWpv, {from: "0x0000000000000000000000000000000000000001"});
		const addressD7pRpI = await Controllers5q6PZG.approveStrategy.call(addressTE6iYQf, addressaJafN9u, {from: accounts[0]});
		const addressiFTpYCW = await Controllers5q6PZG.approveStrategy.call(addressEXYC2AL, addressag2iWMu, {from: accounts[4]});
		const addresskiX6aol = await Controllers5q6PZG.yearn.call(addressMkYRfl6, addresscah1led, uintTYpAISl, {from: accounts[1]});

		await expect(Controllers5q6PZG.earn.call(addressMNc7yJU, uintdbfWpv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqiVdLYF = accounts[2]
		const Controlleru9RTTRT = await Controller.new(addressqiVdLYF, {from: accounts[0]});
		const addressFuJfJc = accounts[4]
		const addressHYYiWcJ = "0x0000000000000000000000000000000000000001"
		const addressvRPKoQD = accounts[2]
		const addressKOLRMP = accounts[3]
		const addressNlYlpzN = accounts[1]
		const addressUrDOhuR = await Controlleru9RTTRT.setStrategist.call(addressFuJfJc, {from: accounts[4]});
		const addressDnedgO = await Controlleru9RTTRT.revokeStrategy.call(addressvRPKoQD, addressHYYiWcJ, {from: accounts[5]});
		const addressxrHuQgJ = await Controlleru9RTTRT.setGovernance.call(addressKOLRMP, {from: accounts[0]});
		const addressOcDbFdg = await Controlleru9RTTRT.withdrawAll.call(addressNlYlpzN, {from: accounts[3]});

		await expect(Controlleru9RTTRT.setStrategist.call(addressFuJfJc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUNLSxVG = accounts[4]
		const ControllermwfFQ8a = await Controller.new(addressUNLSxVG, {from: accounts[2]});
		const uintNBeXpiV = BigInt("250")
		const addressQPml5AM = "0x0000000000000000000000000000000000000001"
		const addresslwX2w3f = accounts[5]
		const addressEmYTPEh = accounts[0]
		const uintCwnNWET = BigInt("257")
		const addressEmrmYuX = accounts[0]
		const uintxbjWWEs = BigInt("1807")
		const address2VqO88 = accounts[4]
		const addressCRGKmVM = accounts[1]
		const addressGey22ka = await ControllermwfFQ8a.inCaseTokensGetStuck.call(addressQPml5AM, uintNBeXpiV, {from: accounts[3]});
		const addressK2KSjI = await ControllermwfFQ8a.setRewards.call(addresslwX2w3f, {from: "0x0000000000000000000000000000000000000001"});
		const uintTUMsZF = await ControllermwfFQ8a.balanceOf.call(addressEmYTPEh, {from: accounts[2]});
		const addressopSOX4 = await ControllermwfFQ8a.earn.call(addressEmrmYuX, uintCwnNWET, {from: accounts[3]});
		const uintEWk0HSr = await ControllermwfFQ8a.getExpectedReturn.call(addressCRGKmVM, address2VqO88, uintxbjWWEs, {from: accounts[0]});

		await expect(ControllermwfFQ8a.inCaseTokensGetStuck.call(addressQPml5AM, uintNBeXpiV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBe21sPv = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressBe21sPv, {from: accounts[2]});
		const addressO74dRMc = accounts[0]
		const addressiOnKx8K = accounts[4]
		const addressWq9iF0N = accounts[4]
		const addressVZckvh1 = await ControllerusYOj6b.setConverter.call(addressWq9iF0N, addressiOnKx8K, addressO74dRMc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerusYOj6b.setConverter.call(addressWq9iF0N, addressiOnKx8K, addressO74dRMc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressU0Rua14 = accounts[2]
		const Controlleru9RTTRT = await Controller.new(addressU0Rua14, {from: accounts[0]});
		const addressaM5p8fu = accounts[3]
		const addressQhLdQ3v = accounts[4]
		const addressQuBKG6 = accounts[4]
		const addresscMyQ045 = "0x0000000000000000000000000000000000000001"
		const addressMyhlHwP = accounts[2]
		const addresso81rvP8 = accounts[2]
		const addressBUO3u1B = await Controlleru9RTTRT.setStrategy.call(addressQhLdQ3v, addressaM5p8fu, {from: accounts[3]});
		const addressUrDOhuR = await Controlleru9RTTRT.setStrategist.call(addressQuBKG6, {from: accounts[4]});
		const addressDnedgO = await Controlleru9RTTRT.revokeStrategy.call(addressMyhlHwP, addresscMyQ045, {from: accounts[5]});
		const addressOcDbFdg = await Controlleru9RTTRT.withdrawAll.call(addresso81rvP8, {from: accounts[3]});

		await expect(Controlleru9RTTRT.setStrategy.call(addressQhLdQ3v, addressaM5p8fu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrFh96D = accounts[1]
		const ControllerLbSzqMe = await Controller.new(addressrFh96D, {from: accounts[0]});
		const uintxh2i2TZ = BigInt("375")
		const addressuKbzZOg = accounts[1]
		const addresss9dj0Qd = accounts[4]
		const addressco5UISG = accounts[5]
		const addressfTGZdQr = accounts[2]
		const addressnGm2Ur = "0x0000000000000000000000000000000000000001"
		const addressHcVV0uN = accounts[1]
		const addressExKeYdr = accounts[4]
		const addressyjFFifl = accounts[3]
		const addressKHjtytt = await ControllerLbSzqMe.yearn.call(addresss9dj0Qd, addressuKbzZOg, uintxh2i2TZ, {from: accounts[3]});
		const addresslp3i6cg = await ControllerLbSzqMe.setConverter.call(addressnGm2Ur, addressfTGZdQr, addressco5UISG, {from: "0x0000000000000000000000000000000000000001"});
		const addressbLza2Pq = await ControllerLbSzqMe.approveStrategy.call(addressExKeYdr, addressHcVV0uN, {from: accounts[1]});
		const addressY8YJovH = await ControllerLbSzqMe.setGovernance.call(addressyjFFifl, {from: accounts[4]});

		await expect(ControllerLbSzqMe.yearn.call(addresss9dj0Qd, addressuKbzZOg, uintxh2i2TZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressk1Epci2 = accounts[2]
		const Controlleru9RTTRT = await Controller.new(addressk1Epci2, {from: accounts[0]});
		const address4j3Ock = accounts[2]
		const addressy7jH85P = accounts[4]
		const addressMlxoSOj = "0x0000000000000000000000000000000000000001"
		const addressKWNnqqx = accounts[2]
		const addressCSzAUJd = accounts[2]
		const addressYvELSYu = await Controlleru9RTTRT.setOneSplit.call(address4j3Ock, {from: accounts[1]});
		const addressUrDOhuR = await Controlleru9RTTRT.setStrategist.call(addressy7jH85P, {from: accounts[4]});
		const addressDnedgO = await Controlleru9RTTRT.revokeStrategy.call(addressKWNnqqx, addressMlxoSOj, {from: accounts[5]});
		const addressOcDbFdg = await Controlleru9RTTRT.withdrawAll.call(addressCSzAUJd, {from: accounts[3]});

		await expect(Controlleru9RTTRT.setOneSplit.call(address4j3Ock, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIqqNnZM = accounts[2]
		const Controlleru9RTTRT = await Controller.new(addressIqqNnZM, {from: accounts[0]});
		const addresspRzhkzk = accounts[4]
		const addressOcDbFdg = await Controlleru9RTTRT.withdrawAll.call(addresspRzhkzk, {from: accounts[3]});

		await expect(Controlleru9RTTRT.withdrawAll.call(addresspRzhkzk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKSW36C3 = accounts[2]
		const Controlleru9RTTRT = await Controller.new(addressKSW36C3, {from: accounts[0]});
		const addressfK2ENI = accounts[2]
		const addressRzGAVj4 = accounts[0]
		const addressztbcCOq = accounts[5]
		const addressbuW8pp0 = await Controlleru9RTTRT.approveStrategy.call(addressRzGAVj4, addressfK2ENI, {from: accounts[2]});
		const addressOcDbFdg = await Controlleru9RTTRT.withdrawAll.call(addressztbcCOq, {from: accounts[3]});

		await expect(Controlleru9RTTRT.approveStrategy.call(addressRzGAVj4, addressfK2ENI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYnJnDG = accounts[2]
		const Controlleru9RTTRT = await Controller.new(addressYnJnDG, {from: accounts[0]});
		const addressWC5L1j2 = accounts[0]
		const uintIypfXkw = BigInt("1693")
		const addressG6MTWse = accounts[3]
		const addressUSsAmbz = accounts[5]
		const addressXrNNpuL = accounts[5]
		const addressNCod8E = await Controlleru9RTTRT.setGovernance.call(addressWC5L1j2, {from: "0x0000000000000000000000000000000000000001"});
		const uintlHVnjt = await Controlleru9RTTRT.getExpectedReturn.call(addressUSsAmbz, addressG6MTWse, uintIypfXkw, {from: accounts[2]});
		const addressOcDbFdg = await Controlleru9RTTRT.withdrawAll.call(addressXrNNpuL, {from: accounts[3]});

		await expect(Controlleru9RTTRT.setGovernance.call(addressWC5L1j2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressW5YVEYu = accounts[4]
		const ControllerqPCNdsO = await Controller.new(addressW5YVEYu, {from: accounts[2]});
		const uintej1Dbq = BigInt("72")
		const addressPyXEt1J = accounts[2]
		const addresswNercE = accounts[2]
		const addressWfBvYco = accounts[4]
		const uintOZfdhML = BigInt("669")
		const addresslvHQMG = accounts[3]
		const addressFLBCLHg = accounts[1]
		const addresszbqWpBe = await ControllerqPCNdsO.inCaseTokensGetStuck.call(addressPyXEt1J, uintej1Dbq, {from: accounts[2]});
		const addresszyu5CEp = await ControllerqPCNdsO.inCaseStrategyTokenGetStuck.call(addressWfBvYco, addresswNercE, {from: accounts[1]});
		const addressv3wQuW = await ControllerqPCNdsO.yearn.call(addressFLBCLHg, addresslvHQMG, uintOZfdhML, {from: accounts[1]});

		await expect(ControllerqPCNdsO.inCaseTokensGetStuck.call(addressPyXEt1J, uintej1Dbq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressq9l4EMV = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressq9l4EMV, {from: accounts[2]});
		const addressTK7GxKa = "0x0000000000000000000000000000000000000001"
		const addressGUieQxe = accounts[1]
		const addressNSPaIPF = accounts[5]
		const addresswpmWfZr = accounts[4]
		const uintWBwy57d = await ControllerusYOj6b.balanceOf.call(addressTK7GxKa, {from: accounts[0]});
		const addressVZckvh1 = await ControllerusYOj6b.setConverter.call(addresswpmWfZr, addressNSPaIPF, addressGUieQxe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerusYOj6b.balanceOf.call(addressTK7GxKa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMJ1aBT = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressMJ1aBT, {from: accounts[2]});
		const uintbw0zlt = BigInt("1064")
		const uints5kXboP = BigInt("1548")
		const addressSFVCIUI = accounts[6]
		const uintl2a1stp = await ControllerusYOj6b.setSplit.call(uintbw0zlt, {from: accounts[1]});
		const addressl8I6Y5a = await ControllerusYOj6b.withdraw.call(addressSFVCIUI, uints5kXboP, {from: accounts[0]});

		await expect(ControllerusYOj6b.setSplit.call(uintbw0zlt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressg3BkKnK = accounts[1]
		const ControllerjmCqdEE = await Controller.new(addressg3BkKnK, {from: "0x0000000000000000000000000000000000000001"});
		const addressoS6WRkp = accounts[3]
		const addressT1EDBb4 = accounts[1]
		const addresszy8j4cJ = accounts[3]
		const uintBAAR4eN = BigInt("462")
		const addresskAJjdcy = "0x0000000000000000000000000000000000000001"
		const uintbO5a2Ep = BigInt("1445")
		const addresssJgUBVG = accounts[1]
		const addressYwN4gRj = accounts[0]
		const addressRSFQiLk = accounts[5]
		const addressTRxfsLM = accounts[0]
		const addressSzmbHDj = accounts[3]
		const addressSojFQLS = await ControllerjmCqdEE.setStrategist.call(addressoS6WRkp, {from: accounts[3]});
		const addressVpFvwDZ = await ControllerjmCqdEE.setVault.call(addresszy8j4cJ, addressT1EDBb4, {from: accounts[5]});
		const addressuXayS3I = await ControllerjmCqdEE.inCaseTokensGetStuck.call(addresskAJjdcy, uintBAAR4eN, {from: accounts[1]});
		const uintUA04JVY = await ControllerjmCqdEE.setSplit.call(uintbO5a2Ep, {from: accounts[0]});
		const addressk32npwy = await ControllerjmCqdEE.setConverter.call(addressRSFQiLk, addressYwN4gRj, addresssJgUBVG, {from: accounts[4]});
		const addressrZap1cy = await ControllerjmCqdEE.setStrategy.call(addressSzmbHDj, addressTRxfsLM, {from: accounts[2]});
	});

	it('test for Controller', async () => {
		const addressVMPVtuK = accounts[0]
		const ControlleretaURbd = await Controller.new(addressVMPVtuK, {from: accounts[2]});
		const addressliMySl = accounts[4]
		const addressKrKYbIc = accounts[4]
		const addressYPKLgsY = accounts[3]
		const addressoogECRq = accounts[2]
		const addresspt0Vjoc = accounts[2]
		const addresshl6wZBW = accounts[5]
		const addressbqSYaT0 = accounts[1]
		const addressNDPKme7 = await ControlleretaURbd.approveStrategy.call(addressKrKYbIc, addressliMySl, {from: accounts[2]});
		const addresstPCmVTp = await ControlleretaURbd.setVault.call(addressoogECRq, addressYPKLgsY, {from: accounts[5]});
		const addresswwLK8m8 = await ControlleretaURbd.setConverter.call(addressbqSYaT0, addresshl6wZBW, addresspt0Vjoc, {from: accounts[4]});

		await expect(ControlleretaURbd.setVault.call(addressoogECRq, addressYPKLgsY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressORQINWs = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressORQINWs, {from: accounts[2]});
		const uintvCIU1gF = BigInt("1847")
		const addressH4ckURO = accounts[2]
		const addressiDYJ4H = accounts[1]
		const addressLjcppFM = accounts[4]
		const addressoqca6r6 = accounts[4]
		const addressbc7f0Z2 = accounts[4]
		const uintTq7tUZ = BigInt("1532")
		const addressFaiJuX9 = accounts[6]
		const addressewWl4tR = await ControllerusYOj6b.yearn.call(addressiDYJ4H, addressH4ckURO, uintvCIU1gF, {from: accounts[2]});
		const addressHoKDAlr = await ControllerusYOj6b.setStrategy.call(addressoqca6r6, addressLjcppFM, {from: accounts[4]});
		const addressNMcpIJ = await ControllerusYOj6b.setGovernance.call(addressbc7f0Z2, {from: accounts[0]});
		const addressl8I6Y5a = await ControllerusYOj6b.withdraw.call(addressFaiJuX9, uintTq7tUZ, {from: accounts[0]});

		await expect(ControllerusYOj6b.yearn.call(addressiDYJ4H, addressH4ckURO, uintvCIU1gF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqBIaFiG = accounts[4]
		const ControllerhSeJh9R = await Controller.new(addressqBIaFiG, {from: accounts[3]});
		const address6GiSA3 = accounts[1]
		const uintki8jTV = BigInt("1388")
		const addressdPz3rxV = accounts[5]
		const addressl7QB19N = await ControllerhSeJh9R.setRewards.call(address6GiSA3, {from: accounts[3]});
		const addressJlePJRN = await ControllerhSeJh9R.earn.call(addressdPz3rxV, uintki8jTV, {from: accounts[0]});

		await expect(ControllerhSeJh9R.earn.call(addressdPz3rxV, uintki8jTV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address5umuXf = accounts[4]
		const ControllerusYOj6b = await Controller.new(address5umuXf, {from: accounts[2]});
		const addressWjgDNOu = accounts[1]
		const addressKhlI4wQ = accounts[4]
		const uintMhG8Fpl = BigInt("1532")
		const addressjsq7EA = accounts[6]
		const addressttsyK4k = await ControllerusYOj6b.setStrategist.call(addressWjgDNOu, {from: accounts[2]});
		const addressNMcpIJ = await ControllerusYOj6b.setGovernance.call(addressKhlI4wQ, {from: accounts[0]});
		const addressl8I6Y5a = await ControllerusYOj6b.withdraw.call(addressjsq7EA, uintMhG8Fpl, {from: accounts[0]});

		await expect(ControllerusYOj6b.setGovernance.call(addressKhlI4wQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressll78W1W = accounts[3]
		const Controller942kkH = await Controller.new(addressll78W1W, {from: accounts[1]});
		const addressbelxnoQ = accounts[2]
		const addressuq2Ejfm = accounts[2]
		const addresspwwLrIk = accounts[1]
		const addressB6xKEH = accounts[3]
		const addressH0vUvGj = accounts[2]
		const addressvtb5hTA = await Controller942kkH.setStrategy.call(addressuq2Ejfm, addressbelxnoQ, {from: accounts[1]});
		const addressu9V0t1i = await Controller942kkH.setStrategy.call(addressB6xKEH, addresspwwLrIk, {from: "0x0000000000000000000000000000000000000001"});
		const addressQGWX56W = await Controller942kkH.setRewards.call(addressH0vUvGj, {from: accounts[2]});

		await expect(Controller942kkH.setStrategy.call(addressuq2Ejfm, addressbelxnoQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslcuouu = accounts[4]
		const ControllerusYOj6b = await Controller.new(addresslcuouu, {from: accounts[2]});
		const addressSHGL3fa = accounts[4]
		const addressuijWCi = accounts[0]
		const uintRGmSw6x = BigInt("1548")
		const addressdmWEVXp = accounts[6]
		const addressIOtrRBF = await ControllerusYOj6b.setVault.call(addressuijWCi, addressSHGL3fa, {from: accounts[2]});
		const addressl8I6Y5a = await ControllerusYOj6b.withdraw.call(addressdmWEVXp, uintRGmSw6x, {from: accounts[0]});

		await expect(ControllerusYOj6b.withdraw.call(addressdmWEVXp, uintRGmSw6x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressD3WfkY7 = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressD3WfkY7, {from: accounts[2]});
		const addresskTd4qz4 = accounts[4]
		const addressyXpSM4Y = accounts[1]
		const addressWqa392G = accounts[2]
		const addressXLuNaoD = accounts[2]
		const uintiWqy5K6 = BigInt("1065")
		const addressMi6XTty = accounts[2]
		const addressE46pMq = await ControllerusYOj6b.inCaseStrategyTokenGetStuck.call(addressyXpSM4Y, addresskTd4qz4, {from: accounts[2]});
		const addressbxPDdd3 = await ControllerusYOj6b.inCaseStrategyTokenGetStuck.call(addressXLuNaoD, addressWqa392G, {from: accounts[0]});
		const uintl2a1stp = await ControllerusYOj6b.setSplit.call(uintiWqy5K6, {from: accounts[1]});
		const addressy1qHmQM = await ControllerusYOj6b.setGovernance.call(addressMi6XTty, {from: accounts[3]});

		await expect(ControllerusYOj6b.inCaseStrategyTokenGetStuck.call(addressyXpSM4Y, addresskTd4qz4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXGJpnf4 = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressXGJpnf4, {from: accounts[2]});
		const addressoFOBm3Y = "0x0000000000000000000000000000000000000001"
		const addressVAf1Sz = accounts[2]
		const uintipu1pAt = BigInt("127")
		const addressC0Zp9Kq = accounts[4]
		const addresspqtdkV7 = accounts[4]
		const addressuhqkW4t = accounts[4]
		const address4TLp7q = await ControllerusYOj6b.revokeStrategy.call(addressVAf1Sz, addressoFOBm3Y, {from: accounts[2]});
		const uintGUXLksB = await ControllerusYOj6b.getExpectedReturn.call(addresspqtdkV7, addressC0Zp9Kq, uintipu1pAt, {from: "0x0000000000000000000000000000000000000001"});
		const addressNMcpIJ = await ControllerusYOj6b.setGovernance.call(addressuhqkW4t, {from: accounts[0]});

		await expect(ControllerusYOj6b.getExpectedReturn.call(addresspqtdkV7, addressC0Zp9Kq, uintipu1pAt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMBhopPL = accounts[3]
		const ControllerQjaEOE5 = await Controller.new(addressMBhopPL, {from: accounts[2]});
		const addressXOUkWgZ = accounts[2]
		const addressL9qjXsH = accounts[2]
		const addresslmHUUpY = "0x0000000000000000000000000000000000000001"
		const addressGfXPbFS = accounts[2]
		const addressIPfQ6PV = accounts[4]
		const addressfUm2Njv = accounts[1]
		const addresstPQkLQW = accounts[3]
		const addressuW6bwQg = accounts[2]
		const addressE1IBpz9 = await ControllerQjaEOE5.setConverter.call(addresslmHUUpY, addressL9qjXsH, addressXOUkWgZ, {from: accounts[2]});
		const addressxqW4Lfd = await ControllerQjaEOE5.setStrategy.call(addressIPfQ6PV, addressGfXPbFS, {from: "0x0000000000000000000000000000000000000001"});
		const addressy1Xw9l = await ControllerQjaEOE5.setVault.call(addresstPQkLQW, addressfUm2Njv, {from: accounts[0]});
		const addressm7DrOzk = await ControllerQjaEOE5.setOneSplit.call(addressuW6bwQg, {from: accounts[2]});

		await expect(ControllerQjaEOE5.setStrategy.call(addressIPfQ6PV, addressGfXPbFS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressSKhd1f0 = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressSKhd1f0, {from: accounts[2]});
		const uintZACB6pr = BigInt("611")
		const uintmIdnfgX = BigInt("1483")
		const addressjt95WFM = accounts[1]
		const addressvQSKvl = accounts[4]
		const addressJZVwLg3 = accounts[5]
		const uintxEg6Uae = await ControllerusYOj6b.setSplit.call(uintZACB6pr, {from: accounts[2]});
		const addressKk8Rmt4 = await ControllerusYOj6b.inCaseTokensGetStuck.call(addressjt95WFM, uintmIdnfgX, {from: accounts[0]});
		const addressYhFckf8 = await ControllerusYOj6b.setGovernance.call(addressvQSKvl, {from: accounts[3]});
		const addressNMcpIJ = await ControllerusYOj6b.setGovernance.call(addressJZVwLg3, {from: accounts[0]});

		await expect(ControllerusYOj6b.inCaseTokensGetStuck.call(addressjt95WFM, uintmIdnfgX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressmiXL5t = "0x0000000000000000000000000000000000000001"
		const ControllerRNOAxs = await Controller.new(addressmiXL5t, {from: accounts[3]});
		const addressQjDYkqt = accounts[1]
		const addressHM6Lh94 = accounts[0]
		const addresszikyuUw = accounts[4]
		const uintLqy8ch = BigInt("130")
		const addresseQhpgTz = accounts[1]
		const addressoDuZdiB = accounts[2]
		const addresstWrYXm = accounts[1]
		const addressyfYarpq = accounts[3]
		const addressJrIhJk8 = accounts[0]
		const uint6QedbH = BigInt("1468")
		const addressu23pmi1 = accounts[5]
		const addressfsDFExH = accounts[3]
		const addressn2L9OU7 = await ControllerRNOAxs.setOneSplit.call(addressQjDYkqt, {from: accounts[3]});
		const addresslnTFRM = await ControllerRNOAxs.revokeStrategy.call(addresszikyuUw, addressHM6Lh94, {from: accounts[1]});
		const addressJE36Y9r = await ControllerRNOAxs.inCaseTokensGetStuck.call(addresseQhpgTz, uintLqy8ch, {from: accounts[2]});
		const addressQilcTTm = await ControllerRNOAxs.setVault.call(addresstWrYXm, addressoDuZdiB, {from: "0x0000000000000000000000000000000000000001"});
		const addressrHPOB5t = await ControllerRNOAxs.setVault.call(addressJrIhJk8, addressyfYarpq, {from: accounts[1]});
		const uintbcJjlvI = await ControllerRNOAxs.getExpectedReturn.call(addressfsDFExH, addressu23pmi1, uint6QedbH, {from: accounts[4]});

		await expect(ControllerRNOAxs.revokeStrategy.call(addresszikyuUw, addressHM6Lh94, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqwM4gsO = accounts[2]
		const Controlleru9RTTRT = await Controller.new(addressqwM4gsO, {from: accounts[0]});
		const addressDuCsJMI = accounts[3]
		const addressmfRrVNJ = accounts[4]
		const addressvdwWiBG = accounts[4]
		const addressPHi8gb8 = accounts[2]
		const addressbEx7JnY = accounts[3]
		const addresspfVjmbU = await Controlleru9RTTRT.setGovernance.call(addressDuCsJMI, {from: accounts[0]});
		const addressHBqHfA = await Controlleru9RTTRT.setVault.call(addressvdwWiBG, addressmfRrVNJ, {from: accounts[4]});
		const addressLm5zygb = await Controlleru9RTTRT.setGovernance.call(addressPHi8gb8, {from: accounts[5]});
		const addressYvELSYu = await Controlleru9RTTRT.setOneSplit.call(addressbEx7JnY, {from: accounts[1]});

		await expect(Controlleru9RTTRT.setVault.call(addressvdwWiBG, addressmfRrVNJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVHC4vXn = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressVHC4vXn, {from: accounts[2]});
		const addressXScq63u = accounts[2]
		const addressx4q8OyM = accounts[5]
		const addressIxKCPpf = "0x0000000000000000000000000000000000000001"
		const addressRwRIe05 = await ControllerusYOj6b.withdrawAll.call(addressXScq63u, {from: accounts[2]});
		const addressNMcpIJ = await ControllerusYOj6b.setGovernance.call(addressx4q8OyM, {from: accounts[0]});
		const addressowPki3J = await ControllerusYOj6b.withdrawAll.call(addressIxKCPpf, {from: accounts[0]});

		await expect(ControllerusYOj6b.withdrawAll.call(addressXScq63u, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})