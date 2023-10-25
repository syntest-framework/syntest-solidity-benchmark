const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressDnliMvf = accounts[3]
		const afiControllerzyTri0L = await afiController.new(addressDnliMvf, {from: accounts[1]});
		const addressijhBWoz = accounts[5]
		const uintVCzEGll = BigInt("1022")
		const addressjJat5uv = accounts[3]
		const uintib5yfor = BigInt("161")
		const addressFchDMwO = "0x0000000000000000000000000000000000000001"
		const uintzVsdaX = BigInt("13")
		const addressyAra1y0 = accounts[1]
		const addresseHw9NjB = accounts[5]
		const addressVIvn8PJ = accounts[5]
		const addresszEKH7P = accounts[2]
		const addressFYEGYIx = await afiControllerzyTri0L.withdrawAll.call(addressijhBWoz, {from: accounts[1]});
		const addressdOFIUEO = await afiControllerzyTri0L.earn.call(addressjJat5uv, uintVCzEGll, {from: accounts[2]});
		const addressyLQsbG5 = await afiControllerzyTri0L.withdraw.call(addressFchDMwO, uintib5yfor, {from: accounts[3]});
		const uintUpr0VaG = await afiControllerzyTri0L.setSplit.call(uintzVsdaX, {from: accounts[3]});
		const addressQgYhOWv = await afiControllerzyTri0L.revokeStrategy.call(addresseHw9NjB, addressyAra1y0, {from: accounts[2]});
		const addressrai12cf = await afiControllerzyTri0L.approveStrategy.call(addresszEKH7P, addressVIvn8PJ, {from: accounts[4]});

		await expect(afiControllerzyTri0L.withdrawAll.call(addressijhBWoz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressI7E6hv = accounts[3]
		const afiControllerdZY9RaH = await afiController.new(addressI7E6hv, {from: accounts[4]});
		const uinthpK0Cpe = BigInt("1258")
		const addressj5jqygS = accounts[5]
		const addressjZLx2lf = accounts[3]
		const uintwOYVzui = BigInt("809")
		const addressIAMZKdp = "0x0000000000000000000000000000000000000001"
		const addressNrmkksf = accounts[2]
		const address8IoM6O = accounts[5]
		const addressUc4IBzJ = accounts[1]
		const uintRjGEwR = await afiControllerdZY9RaH.getExpectedReturn.call(addressjZLx2lf, addressj5jqygS, uinthpK0Cpe, {from: accounts[4]});
		const uintAAMpfoe = await afiControllerdZY9RaH.setSplit.call(uintwOYVzui, {from: accounts[1]});
		const addressoAwQoxd = await afiControllerdZY9RaH.inCaseStrategyTokenGetStuck.call(addressNrmkksf, addressIAMZKdp, {from: accounts[4]});
		const addressm8idgWN = await afiControllerdZY9RaH.setStrategy.call(addressUc4IBzJ, address8IoM6O, {from: accounts[4]});

		await expect(afiControllerdZY9RaH.getExpectedReturn.call(addressjZLx2lf, addressj5jqygS, uinthpK0Cpe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressC9jTtvA = accounts[3]
		const afiControlleru13HEwK = await afiController.new(addressC9jTtvA, {from: accounts[3]});
		const uintFCiCouB = BigInt("1104")
		const addressQZdy6pj = accounts[3]
		const addressOKuzMN5 = accounts[1]
		const addressNycwM2 = "0x0000000000000000000000000000000000000001"
		const addressUHcKRCY = accounts[1]
		const addressSXIT7hH = await afiControlleru13HEwK.inCaseTokensGetStuck.call(addressQZdy6pj, uintFCiCouB, {from: accounts[0]});
		const addressePvNlXm = await afiControlleru13HEwK.setStrategy.call(addressNycwM2, addressOKuzMN5, {from: accounts[2]});
		const uintuHM8xkb = await afiControlleru13HEwK.balanceOf.call(addressUHcKRCY, {from: accounts[3]});

		await expect(afiControlleru13HEwK.inCaseTokensGetStuck.call(addressQZdy6pj, uintFCiCouB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZK3DOzG = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressZK3DOzG, {from: accounts[0]});
		const uintqTGHjm = BigInt("421")
		const addressHLjgjQs = accounts[3]
		const addressqYlaPjf = accounts[1]
		const uintWsoMxHh = await afiControllerjj5RFkr.setSplit.call(uintqTGHjm, {from: accounts[5]});
		const addressUfk388 = await afiControllerjj5RFkr.revokeStrategy.call(addressqYlaPjf, addressHLjgjQs, {from: accounts[0]});

		await expect(afiControllerjj5RFkr.setSplit.call(uintqTGHjm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbx0mwCZ = accounts[4]
		const afiControllern9PWhT0 = await afiController.new(addressbx0mwCZ, {from: accounts[4]});
		const addressSacNIji = accounts[0]
		const addressOrF69Xq = accounts[3]
		const addressTlDGMKc = accounts[2]
		const uintaU2nQSm = BigInt("768")
		const addressltPVe98 = accounts[2]
		const addressZvq5a9n = accounts[0]
		const addressOCDhotv = accounts[3]
		const uintjUCbMiG = BigInt("322")
		const addressgsKWgFC = "0x0000000000000000000000000000000000000001"
		const addressD23dFYP = await afiControllern9PWhT0.setConverter.call(addressTlDGMKc, addressOrF69Xq, addressSacNIji, {from: accounts[0]});
		const addressr989kh = await afiControllern9PWhT0.inCaseTokensGetStuck.call(addressltPVe98, uintaU2nQSm, {from: accounts[2]});
		const addressQbhmo5x = await afiControllern9PWhT0.setStrategy.call(addressOCDhotv, addressZvq5a9n, {from: accounts[3]});
		const addressYOekjsv = await afiControllern9PWhT0.earn.call(addressgsKWgFC, uintjUCbMiG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllern9PWhT0.setConverter.call(addressTlDGMKc, addressOrF69Xq, addressSacNIji, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressN8QKoWh = accounts[1]
		const afiControllercDSd5qW = await afiController.new(addressN8QKoWh, {from: accounts[4]});
		const addressCPaYyBS = accounts[4]
		const addressyI9EUy4 = accounts[0]
		const addressFGLWQFg = accounts[5]
		const addresstwaCPkE = accounts[1]
		const addressXPOWyU7 = accounts[4]
		const addressmVCcpoU = "0x0000000000000000000000000000000000000001"
		const addresswizsPR = "0x0000000000000000000000000000000000000001"
		const addressGIUganU = await afiControllercDSd5qW.inCaseStrategyTokenGetStuck.call(addressyI9EUy4, addressCPaYyBS, {from: accounts[5]});
		const addressDOyKAcT = await afiControllercDSd5qW.setGovernance.call(addressFGLWQFg, {from: accounts[0]});
		const addressDZeFiI6 = await afiControllercDSd5qW.revokeStrategy.call(addressXPOWyU7, addresstwaCPkE, {from: "0x0000000000000000000000000000000000000001"});
		const uintfwj2Yje = await afiControllercDSd5qW.balanceOf.call(addressmVCcpoU, {from: accounts[4]});
		const addressERjERD = await afiControllercDSd5qW.setStrategist.call(addresswizsPR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllercDSd5qW.inCaseStrategyTokenGetStuck.call(addressyI9EUy4, addressCPaYyBS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWUjjqZ4 = accounts[3]
		const afiControllerIqZjea5 = await afiController.new(addressWUjjqZ4, {from: accounts[2]});
		const addressYCKV5vn = accounts[4]
		const addressOJHzBbA = accounts[1]
		const addressezDtdzr = accounts[1]
		const addressH9lNZw = await afiControllerIqZjea5.setOneSplit.call(addressYCKV5vn, {from: accounts[2]});
		const addressk1ZX5YO = await afiControllerIqZjea5.revokeStrategy.call(addressezDtdzr, addressOJHzBbA, {from: accounts[0]});

		await expect(afiControllerIqZjea5.revokeStrategy.call(addressezDtdzr, addressOJHzBbA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxx3jkkd = accounts[0]
		const afiControllerls8aGr = await afiController.new(addressxx3jkkd, {from: accounts[4]});
		const addressfT617fs = accounts[3]
		const addressZ1jFZwz = accounts[1]
		const uintLIcS2yX = BigInt("490")
		const addressuyc1AHR = accounts[2]
		const uintHuAkOPV = BigInt("223")
		const addressB4OaFYS = accounts[1]
		const addressvU3AADo = accounts[0]
		const addressa9GsQqO = accounts[2]
		const addressNLjaxAz = accounts[2]
		const addressMj9fF3v = await afiControllerls8aGr.setVault.call(addressZ1jFZwz, addressfT617fs, {from: accounts[4]});
		const uintRCuqngz = await afiControllerls8aGr.setSplit.call(uintLIcS2yX, {from: accounts[0]});
		const addressM6k4AF = await afiControllerls8aGr.withdrawAll.call(addressuyc1AHR, {from: accounts[4]});
		const uinttN3xOvr = await afiControllerls8aGr.getExpectedReturn.call(addressvU3AADo, addressB4OaFYS, uintHuAkOPV, {from: accounts[2]});
		const addressGKCPKB = await afiControllerls8aGr.setStrategy.call(addressNLjaxAz, addressa9GsQqO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerls8aGr.setSplit.call(uintLIcS2yX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLzqnHkO = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressLzqnHkO, {from: accounts[0]});
		const addressCDZTHxO = accounts[1]
		const uintjLj1MA = BigInt("421")
		const addresszvA348N = accounts[3]
		const addressqiTk4bB = accounts[1]
		const addresstgUr98 = await afiControllerjj5RFkr.setStrategist.call(addressCDZTHxO, {from: accounts[3]});
		const uintWsoMxHh = await afiControllerjj5RFkr.setSplit.call(uintjLj1MA, {from: accounts[5]});
		const addressUfk388 = await afiControllerjj5RFkr.revokeStrategy.call(addressqiTk4bB, addresszvA348N, {from: accounts[0]});

		await expect(afiControllerjj5RFkr.setStrategist.call(addressCDZTHxO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxylUxX6 = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressxylUxX6, {from: accounts[0]});
		const addressesveuF8 = accounts[3]
		const addressAvNcmWr = accounts[1]
		const addressUfk388 = await afiControllerjj5RFkr.revokeStrategy.call(addressAvNcmWr, addressesveuF8, {from: accounts[0]});
	});

	it('test for afiController', async () => {
		const addressyfwBnIm = accounts[3]
		const afiControllerIqZjea5 = await afiController.new(addressyfwBnIm, {from: accounts[2]});
		const uintY1dgIH4 = BigInt("1427")
		const addressJZo8FIu = accounts[1]
		const addresspfvoBg = accounts[4]
		const addressi5PRS4 = accounts[4]
		const addressYI8v8VM = accounts[1]
		const uintUgr8yy = BigInt("108")
		const addressVraIYd2 = await afiControllerIqZjea5.inCaseTokensGetStuck.call(addressJZo8FIu, uintY1dgIH4, {from: accounts[2]});
		const addressH9lNZw = await afiControllerIqZjea5.setOneSplit.call(addresspfvoBg, {from: accounts[2]});
		const addressk1ZX5YO = await afiControllerIqZjea5.revokeStrategy.call(addressYI8v8VM, addressi5PRS4, {from: accounts[0]});
		const uintwu6edhy = await afiControllerIqZjea5.setSplit.call(uintUgr8yy, {from: accounts[2]});

		await expect(afiControllerIqZjea5.inCaseTokensGetStuck.call(addressJZo8FIu, uintY1dgIH4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPY3pPe6 = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressPY3pPe6, {from: accounts[0]});
		const uintUwZH0O5 = BigInt("1042")
		const addressSinBsU4 = accounts[3]
		const addressegluleo = accounts[3]
		const addressh66aw1z = accounts[2]
		const addresszEDsp6T = accounts[3]
		const addressDPXMQPL = accounts[1]
		const addressXiHCojW = accounts[5]
		const addressFzMuQvR = await afiControllerjj5RFkr.yearn.call(addressegluleo, addressSinBsU4, uintUwZH0O5, {from: accounts[1]});
		const addresstgUr98 = await afiControllerjj5RFkr.setStrategist.call(addressh66aw1z, {from: accounts[3]});
		const addressUfk388 = await afiControllerjj5RFkr.revokeStrategy.call(addressDPXMQPL, addresszEDsp6T, {from: accounts[0]});
		const addressR5g0Cdp = await afiControllerjj5RFkr.setStrategist.call(addressXiHCojW, {from: accounts[2]});

		await expect(afiControllerjj5RFkr.yearn.call(addressegluleo, addressSinBsU4, uintUwZH0O5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskzvSD4B = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addresskzvSD4B, {from: accounts[0]});
		const addresscrquTSc = accounts[3]
		const addressxKyZtg7 = accounts[2]
		const addressnlznNrd = accounts[1]
		const addressa6el7HN = accounts[5]
		const addressPbaTUcp = accounts[0]
		const addressCqIjDX = await afiControllerjj5RFkr.setStrategy.call(addressxKyZtg7, addresscrquTSc, {from: accounts[2]});
		const addresstgUr98 = await afiControllerjj5RFkr.setStrategist.call(addressnlznNrd, {from: accounts[3]});
		const addresssfDdQCt = await afiControllerjj5RFkr.revokeStrategy.call(addressPbaTUcp, addressa6el7HN, {from: accounts[5]});

		await expect(afiControllerjj5RFkr.setStrategy.call(addressxKyZtg7, addresscrquTSc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCi2hrgN = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressCi2hrgN, {from: accounts[0]});
		const uintlThkhGw = BigInt("1053")
		const addressotuYTQd = accounts[2]
		const uintFlXOSMh = BigInt("1094")
		const addressnCkD7bg = "0x0000000000000000000000000000000000000001"
		const addressC5gHrNr = accounts[0]
		const addressSsLPGqf = accounts[2]
		const addressVAe3y8x = await afiControllerjj5RFkr.withdraw.call(addressotuYTQd, uintlThkhGw, {from: accounts[3]});
		const uintVzvaPKI = await afiControllerjj5RFkr.getExpectedReturn.call(addressC5gHrNr, addressnCkD7bg, uintFlXOSMh, {from: accounts[1]});
		const addresstgUr98 = await afiControllerjj5RFkr.setStrategist.call(addressSsLPGqf, {from: accounts[3]});

		await expect(afiControllerjj5RFkr.withdraw.call(addressotuYTQd, uintlThkhGw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressRZBVGPQ = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressRZBVGPQ, {from: accounts[0]});
		const uintP6YJ95M = BigInt("220")
		const addressMcoIwuo = accounts[4]
		const addressy5Ac4ss = "0x0000000000000000000000000000000000000001"
		const addressTYVBvA0 = "0x0000000000000000000000000000000000000001"
		const addressjhOVZJP = accounts[1]
		const addressfURBsUr = accounts[5]
		const addressq3SzqJD = accounts[1]
		const addressVUgGKPV = await afiControllerjj5RFkr.yearn.call(addressy5Ac4ss, addressMcoIwuo, uintP6YJ95M, {from: accounts[0]});
		const addresstp7BH5o = await afiControllerjj5RFkr.setConverter.call(addressfURBsUr, addressjhOVZJP, addressTYVBvA0, {from: accounts[1]});
		const addresstgUr98 = await afiControllerjj5RFkr.setStrategist.call(addressq3SzqJD, {from: accounts[3]});

		await expect(afiControllerjj5RFkr.yearn.call(addressy5Ac4ss, addressMcoIwuo, uintP6YJ95M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLzp4gZm = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressLzp4gZm, {from: accounts[0]});
		const address65uBA5 = accounts[4]
		const addressUoGuQ6s = "0x0000000000000000000000000000000000000001"
		const addressxQoDTFI = accounts[3]
		const uintHy4PiQ7 = BigInt("387")
		const addressdWnfimX = accounts[1]
		const addresszSoHg0H = accounts[4]
		const addresszE5q13E = await afiControllerjj5RFkr.setGovernance.call(address65uBA5, {from: accounts[1]});
		const addressn62XVAQ = await afiControllerjj5RFkr.approveStrategy.call(addressxQoDTFI, addressUoGuQ6s, {from: accounts[4]});
		const uintWsoMxHh = await afiControllerjj5RFkr.setSplit.call(uintHy4PiQ7, {from: accounts[5]});
		const addressMtsedg1 = await afiControllerjj5RFkr.approveStrategy.call(addresszSoHg0H, addressdWnfimX, {from: accounts[3]});

		await expect(afiControllerjj5RFkr.setGovernance.call(address65uBA5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQwJm4yn = accounts[4]
		const afiControllereQM7Nu = await afiController.new(addressQwJm4yn, {from: accounts[4]});
		const addressPtbSGv2 = "0x0000000000000000000000000000000000000001"
		const addressLd9Zp30 = accounts[0]
		const addressxegXx7M = "0x0000000000000000000000000000000000000001"
		const addressQpgjjVn = accounts[0]
		const addressFRnqLfH = accounts[4]
		const uintVj5BbgJ = BigInt("1182")
		const uintjD8voMD = BigInt("53")
		const addressvuhNYy5 = accounts[1]
		const uintemAp0sV = await afiControllereQM7Nu.balanceOf.call(addressPtbSGv2, {from: accounts[4]});
		const addressSIhAPOX = await afiControllereQM7Nu.setConverter.call(addressQpgjjVn, addressxegXx7M, addressLd9Zp30, {from: accounts[3]});
		const addressoaZV9u6 = await afiControllereQM7Nu.setGovernance.call(addressFRnqLfH, {from: accounts[4]});
		const uint3v6eTv = await afiControllereQM7Nu.setSplit.call(uintVj5BbgJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintT8TBG5 = await afiControllereQM7Nu.setSplit.call(uintjD8voMD, {from: accounts[0]});
		const addressNn0BbV = await afiControllereQM7Nu.setStrategist.call(addressvuhNYy5, {from: accounts[3]});

		await expect(afiControllereQM7Nu.balanceOf.call(addressPtbSGv2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXfJGz9m = "0x0000000000000000000000000000000000000001"
		const afiControllerxEY272k = await afiController.new(addressXfJGz9m, {from: accounts[5]});
		const addresscp9QCBW = accounts[2]
		const addressyVcpLtM = accounts[0]
		const addressT1rr637 = accounts[1]
		const uintXg4UL5J = BigInt("11")
		const addressdFqiag = accounts[3]
		const uinteWz7Acz = BigInt("1929")
		const addressmBFtfML = await afiControllerxEY272k.setRewards.call(addresscp9QCBW, {from: accounts[0]});
		const addressZfMgZE = await afiControllerxEY272k.setStrategy.call(addressT1rr637, addressyVcpLtM, {from: accounts[3]});
		const addressxtssxuD = await afiControllerxEY272k.inCaseTokensGetStuck.call(addressdFqiag, uintXg4UL5J, {from: accounts[0]});
		const uintFYksZ9z = await afiControllerxEY272k.setSplit.call(uinteWz7Acz, {from: accounts[5]});

		await expect(afiControllerxEY272k.setRewards.call(addresscp9QCBW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLvgdsp = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressLvgdsp, {from: accounts[0]});
		const uintR8gSaV4 = BigInt("1808")
		const addresspcQV8hg = accounts[0]
		const addresslVi6Msw = accounts[2]
		const addressV9FxWyo = await afiControllerjj5RFkr.earn.call(addresspcQV8hg, uintR8gSaV4, {from: accounts[3]});
		const addresstgUr98 = await afiControllerjj5RFkr.setStrategist.call(addresslVi6Msw, {from: accounts[3]});

		await expect(afiControllerjj5RFkr.earn.call(addresspcQV8hg, uintR8gSaV4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxNEpVl = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressxNEpVl, {from: accounts[0]});
		const addresshCHOYIZ = accounts[2]
		const addresstlBWVxy = accounts[3]
		const addressAGRpAxe = accounts[4]
		const addressyldwWxB = await afiControllerjj5RFkr.approveStrategy.call(addresstlBWVxy, addresshCHOYIZ, {from: accounts[4]});
		const addresstgUr98 = await afiControllerjj5RFkr.setStrategist.call(addressAGRpAxe, {from: accounts[3]});

		await expect(afiControllerjj5RFkr.approveStrategy.call(addresstlBWVxy, addresshCHOYIZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfKpyHY = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressfKpyHY, {from: accounts[0]});
		const addressxtCGJ3J = accounts[0]
		const addressHvdZ6pc = accounts[3]
		const addressPLMMbLi = await afiControllerjj5RFkr.setStrategist.call(addressxtCGJ3J, {from: accounts[0]});
		const addresstgUr98 = await afiControllerjj5RFkr.setStrategist.call(addressHvdZ6pc, {from: accounts[3]});

		await expect(afiControllerjj5RFkr.setStrategist.call(addressHvdZ6pc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslcFdYwq = accounts[5]
		const afiControllerOrckJil = await afiController.new(addresslcFdYwq, {from: accounts[4]});
		const addressHUGfz8S = accounts[4]
		const addressziRG2s2 = accounts[3]
		const addressTLK0pBJ = accounts[3]
		const addressEu0QzP1 = accounts[1]
		const addressImnSaP6 = accounts[2]
		const addresstlNkewV = "0x0000000000000000000000000000000000000001"
		const addressUfUTXVY = accounts[2]
		const addressHIT5uvH = accounts[2]
		const addressnDUuTrP = await afiControllerOrckJil.revokeStrategy.call(addressziRG2s2, addressHUGfz8S, {from: accounts[4]});
		const addressXLd2xf = await afiControllerOrckJil.inCaseStrategyTokenGetStuck.call(addressEu0QzP1, addressTLK0pBJ, {from: accounts[4]});
		const addressnbtxzqR = await afiControllerOrckJil.setStrategy.call(addresstlNkewV, addressImnSaP6, {from: accounts[0]});
		const addressfyTulA4 = await afiControllerOrckJil.setVault.call(addressHIT5uvH, addressUfUTXVY, {from: accounts[2]});

		await expect(afiControllerOrckJil.inCaseStrategyTokenGetStuck.call(addressEu0QzP1, addressTLK0pBJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstEZh1hb = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addresstEZh1hb, {from: accounts[0]});
		const addressXETAEHi = accounts[5]
		const addressokKN4Tc = accounts[3]
		const addressvalHCoJ = accounts[2]
		const addressvNBuTd7 = accounts[3]
		const addressfO6LWa8 = accounts[3]
		const addressuLSuELw = accounts[3]
		const addressnViPMG = accounts[2]
		const addressEaTorLE = "0x0000000000000000000000000000000000000001"
		const addresseO0z4Vq = accounts[4]
		const addressSC6DJNY = await afiControllerjj5RFkr.setConverter.call(addressvalHCoJ, addressokKN4Tc, addressXETAEHi, {from: accounts[0]});
		const addressTxNHgzj = await afiControllerjj5RFkr.revokeStrategy.call(addressfO6LWa8, addressvNBuTd7, {from: "0x0000000000000000000000000000000000000001"});
		const addressmpzKC2 = await afiControllerjj5RFkr.setConverter.call(addressEaTorLE, addressnViPMG, addressuLSuELw, {from: accounts[5]});
		const addresstgUr98 = await afiControllerjj5RFkr.setStrategist.call(addresseO0z4Vq, {from: accounts[3]});

		await expect(afiControllerjj5RFkr.revokeStrategy.call(addressfO6LWa8, addressvNBuTd7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBoWQDXm = accounts[4]
		const afiControllerg6TwU8h = await afiController.new(addressBoWQDXm, {from: "0x0000000000000000000000000000000000000001"});
		const addressOmJqHnp = accounts[1]
		const uinttytHNo = BigInt("228")
		const addressCR7BbCr = accounts[4]
		const addressXMEe3Cs = accounts[2]
		const addressX6Rzz3v = accounts[2]
		const addressKgyS8H = accounts[2]
		const addressMTXOUBM = accounts[4]
		const addressjiw4QGk = accounts[4]
		const addressTdzZE0h = accounts[0]
		const addresshpwo8CH = accounts[1]
		const addressY9AxWkH = accounts[4]
		const uintNahBjB = await afiControllerg6TwU8h.balanceOf.call(addressOmJqHnp, {from: accounts[2]});
		const uintrV4Xv2 = await afiControllerg6TwU8h.getExpectedReturn.call(addressXMEe3Cs, addressCR7BbCr, uinttytHNo, {from: accounts[2]});
		const addressBdKh1qJ = await afiControllerg6TwU8h.setVault.call(addressKgyS8H, addressX6Rzz3v, {from: accounts[3]});
		const addressiTLUTK0 = await afiControllerg6TwU8h.inCaseStrategyTokenGetStuck.call(addressjiw4QGk, addressMTXOUBM, {from: "0x0000000000000000000000000000000000000001"});
		const address7XqfFB = await afiControllerg6TwU8h.setVault.call(addresshpwo8CH, addressTdzZE0h, {from: "0x0000000000000000000000000000000000000001"});
		const uintAEYOb1h = await afiControllerg6TwU8h.balanceOf.call(addressY9AxWkH, {from: accounts[2]});
	});

	it('test for afiController', async () => {
		const addressvSG3Wro = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressvSG3Wro, {from: accounts[0]});
		const addresslIdLyI = accounts[3]
		const addressZ3k87Yv = accounts[4]
		const addressQtSr4ZB = await afiControllerjj5RFkr.setGovernance.call(addresslIdLyI, {from: accounts[0]});
		const addresstgUr98 = await afiControllerjj5RFkr.setStrategist.call(addressZ3k87Yv, {from: accounts[3]});

		await expect(afiControllerjj5RFkr.setStrategist.call(addressZ3k87Yv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressI8YXSNU = "0x0000000000000000000000000000000000000001"
		const afiControllerxEY272k = await afiController.new(addressI8YXSNU, {from: accounts[5]});
		const addressKV3K8N = accounts[1]
		const addressPSzhgDT = accounts[4]
		const addresstApsjQX = accounts[3]
		const addressDBdKzDc = accounts[0]
		const addresstQvSQro = accounts[2]
		const addresso0Wqixd = await afiControllerxEY272k.setStrategy.call(addressPSzhgDT, addressKV3K8N, {from: accounts[5]});
		const addressmBFtfML = await afiControllerxEY272k.setRewards.call(addresstApsjQX, {from: accounts[0]});
		const addressZfMgZE = await afiControllerxEY272k.setStrategy.call(addresstQvSQro, addressDBdKzDc, {from: accounts[3]});

		await expect(afiControllerxEY272k.setStrategy.call(addressPSzhgDT, addressKV3K8N, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvi0y6Vv = accounts[3]
		const afiControllerID0wMzE = await afiController.new(addressvi0y6Vv, {from: accounts[2]});
		const addresspbV22fK = accounts[0]
		const uintfo8gZ5q = BigInt("728")
		const addresszXY4bsr = accounts[0]
		const addressc7zTlJ7 = accounts[0]
		const addresszv1zi9 = accounts[4]
		const uintoS2SnhT = BigInt("1178")
		const addresslmE0WXK = accounts[4]
		const uintrv93YLj = BigInt("1762")
		const addressYGDIojm = accounts[0]
		const uintT5cKU60 = BigInt("959")
		const addressg9PzMn4 = await afiControllerID0wMzE.setRewards.call(addresspbV22fK, {from: accounts[2]});
		const uinttEru6w9 = await afiControllerID0wMzE.getExpectedReturn.call(addressc7zTlJ7, addresszXY4bsr, uintfo8gZ5q, {from: accounts[4]});
		const addressaM76Q8 = await afiControllerID0wMzE.withdrawAll.call(addresszv1zi9, {from: accounts[1]});
		const addressMzCfmW = await afiControllerID0wMzE.withdraw.call(addresslmE0WXK, uintoS2SnhT, {from: accounts[3]});
		const addressH4UgiU6 = await afiControllerID0wMzE.inCaseTokensGetStuck.call(addressYGDIojm, uintrv93YLj, {from: accounts[0]});
		const uintDEYgcE = await afiControllerID0wMzE.setSplit.call(uintT5cKU60, {from: accounts[1]});

		await expect(afiControllerID0wMzE.getExpectedReturn.call(addressc7zTlJ7, addresszXY4bsr, uintfo8gZ5q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQrM5Sss = accounts[3]
		const afiControlleryuO1Fbm = await afiController.new(addressQrM5Sss, {from: accounts[1]});
		const uintLv8MbJf = BigInt("652")
		const uint8xnzyx = BigInt("1796")
		const addressrHLzQmT = accounts[0]
		const addressTENqxxf = accounts[3]
		const addressObJ1xoy = accounts[3]
		const addressWMjzxIS = accounts[1]
		const uintdwb6tnW = await afiControlleryuO1Fbm.setSplit.call(uintLv8MbJf, {from: accounts[1]});
		const addressUgBEetV = await afiControlleryuO1Fbm.earn.call(addressrHLzQmT, uint8xnzyx, {from: accounts[0]});
		const addressQ9kidNU = await afiControlleryuO1Fbm.setConverter.call(addressWMjzxIS, addressObJ1xoy, addressTENqxxf, {from: accounts[3]});

		await expect(afiControlleryuO1Fbm.earn.call(addressrHLzQmT, uint8xnzyx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressohZasSf = accounts[2]
		const afiControllerjj5RFkr = await afiController.new(addressohZasSf, {from: accounts[0]});
		const addressgFbsS0 = accounts[2]
		const addressdkIyHG = accounts[4]
		const addressK0xfZD = accounts[4]
		const uintqVrLrgA = BigInt("367")
		const addressEfXinB9 = await afiControllerjj5RFkr.setOneSplit.call(addressgFbsS0, {from: accounts[0]});
		const addressbOYLv1a = await afiControllerjj5RFkr.approveStrategy.call(addressK0xfZD, addressdkIyHG, {from: accounts[0]});
		const uintWsoMxHh = await afiControllerjj5RFkr.setSplit.call(uintqVrLrgA, {from: accounts[5]});

		await expect(afiControllerjj5RFkr.setSplit.call(uintqVrLrgA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})