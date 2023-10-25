const FairStockEquity = artifacts.require("FairStockEquity");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FairStockEquity', (accounts) => {
	it('test for FairStockEquity', async () => {
		const addressVnuk7BB = accounts[0]
		const addressFzeVps0 = accounts[1]
		const addressXYPpbvh = accounts[3]
		const addressbhOZOL0 = "0x0000000000000000000000000000000000000001"
		const uintqxnDEW1 = BigInt("836")
		const FairStockEquityQRJ2TYy = await FairStockEquity.new(addressVnuk7BB, addressFzeVps0, addressXYPpbvh, addressbhOZOL0, uintqxnDEW1, {from: "0x0000000000000000000000000000000000000001"});
		const uintIPK1Ods = BigInt("1699")
		const uintOyEYM3Q = BigInt("33")
		const addressEPvkFBE = accounts[2]
		const uint256BClAFLD = await FairStockEquityQRJ2TYy.invest.call(uintIPK1Ods, {from: accounts[4]});
		const addresssA2Q2DN = await FairStockEquityQRJ2TYy.depositLPT.call(addressEPvkFBE, uintOyEYM3Q, {from: accounts[2]});
	});

	it('test for FairStockEquity', async () => {
		const addressz8vJ9Ar = accounts[4]
		const addresslmtqY6d = accounts[0]
		const addresslUcRpUp = accounts[3]
		const addresslY4D4KH = accounts[3]
		const uintOKUP5zw = BigInt("647")
		const FairStockEquitypLR53ir = await FairStockEquity.new(addressz8vJ9Ar, addresslmtqY6d, addresslUcRpUp, addresslY4D4KH, uintOKUP5zw, {from: accounts[3]});
		const uintPWjpJa9 = BigInt("1908")
		const uintlbOJpCV = BigInt("1033")
		const addressiUBXUPO = accounts[2]
		const uintNxKGdkq = BigInt("579")
		const uintxqrg0PQ = BigInt("425")
		const addressk6MsJFd = await FairStockEquitypLR53ir.setModule.call(addressiUBXUPO, uintlbOJpCV, uintPWjpJa9, {from: accounts[0]});
		await FairStockEquitypLR53ir.withdrawPJ.call({from: accounts[4]});
		const uint256wCCNuB6 = await FairStockEquitypLR53ir.getCostAmount.call(uintNxKGdkq, {from: accounts[0]});
		const uint256x5nuvcJ = await FairStockEquitypLR53ir.depositBonus.call(uintxqrg0PQ, {from: accounts[3]});
		await FairStockEquitypLR53ir.checkStart.call({from: accounts[3]});

		await expect(FairStockEquitypLR53ir.setModule.call(addressiUBXUPO, uintlbOJpCV, uintPWjpJa9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressY0B2XMN = accounts[5]
		const addressvDZJ1MH = accounts[0]
		const addresstubL1Pj = accounts[5]
		const addresshvZI6xE = "0x0000000000000000000000000000000000000001"
		const uintWZOUxi = BigInt("830")
		const FairStockEquityY7rFk5s = await FairStockEquity.new(addressY0B2XMN, addressvDZJ1MH, addresstubL1Pj, addresshvZI6xE, uintWZOUxi, {from: accounts[3]});
		const uintAwUB2ya = BigInt("1881")
		await FairStockEquityY7rFk5s.withdrawBonus.call({from: accounts[1]});
		const uint256NAhl3Q9 = await FairStockEquityY7rFk5s.setStartTime.call(uintAwUB2ya, {from: accounts[3]});

		await expect(FairStockEquityY7rFk5s.withdrawBonus.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvXpHVtp = accounts[4]
		const addressiMoGRF = accounts[1]
		const addresseRoNuBQ = accounts[0]
		const addressHwmxyrY = "0x0000000000000000000000000000000000000001"
		const uintC2HA0GU = BigInt("1832")
		const FairStockEquitynCaInRG = await FairStockEquity.new(addressvXpHVtp, addressiMoGRF, addresseRoNuBQ, addressHwmxyrY, uintC2HA0GU, {from: accounts[0]});
		const uintWScPyJw = BigInt("1980")
		const addressWDffPPY = "0x0000000000000000000000000000000000000001"
		const uintMoKyDFx = BigInt("2045")
		const uintJNCm4JK = BigInt("1467")
		const addressEEoy7i4 = "0x0000000000000000000000000000000000000001"
		const uintpB7Eyfw = BigInt("105")
		const uintMtVy9kS = BigInt("682")
		const addressXGxxQIW = await FairStockEquitynCaInRG.withdrawLPT.call(addressWDffPPY, uintWScPyJw, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquitynCaInRG.withdrawBonus.call({from: accounts[1]});
		const addressGLQYckg = await FairStockEquitynCaInRG.withdrawBonusCallback.call(addressEEoy7i4, uintJNCm4JK, uintMoKyDFx, {from: accounts[1]});
		await FairStockEquitynCaInRG.withdrawMT.call({from: accounts[4]});
		const uint256Xtyuy2J = await FairStockEquitynCaInRG.setGasFeeForCallback.call(uintpB7Eyfw, {from: accounts[0]});
		const uint256OYZnNLV = await FairStockEquitynCaInRG.setGasFeeForCallback.call(uintMtVy9kS, {from: accounts[4]});

		await expect(FairStockEquitynCaInRG.withdrawLPT.call(addressWDffPPY, uintWScPyJw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressg1keogU = "0x0000000000000000000000000000000000000001"
		const addressTeSFiZ = accounts[3]
		const addressRtIXKX = accounts[4]
		const addresssEitTFK = accounts[1]
		const uintb2zH62k = BigInt("1171")
		const FairStockEquityEXdcvMG = await FairStockEquity.new(addressg1keogU, addressTeSFiZ, addressRtIXKX, addresssEitTFK, uintb2zH62k, {from: accounts[2]});
		const boolaBYFdbH = false
		const addressuk1mwD8 = accounts[1]
		const uintmYFMCn = BigInt("957")
		const addressUsBTlmU = accounts[0]
		const uint7mtJpP = BigInt("963")
		const addressHwRxVWm = await FairStockEquityEXdcvMG.setLPT.call(addressuk1mwD8, boolaBYFdbH, {from: accounts[2]});
		const uint256YcvZ5B = await FairStockEquityEXdcvMG.invest.call(uintmYFMCn, {from: accounts[4]});
		const addresskp0Fz9R = await FairStockEquityEXdcvMG.setDataSource.call(addressUsBTlmU, {from: accounts[2]});
		const uint256xcWhaFa = await FairStockEquityEXdcvMG.bonus.call(uint7mtJpP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityEXdcvMG.invest.call(uintmYFMCn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressPQBKcUd = accounts[2]
		const addressjpoAuGs = "0x0000000000000000000000000000000000000001"
		const addressBCv6MNZ = accounts[2]
		const addressfBfPN3G = accounts[2]
		const uintEHYvVZz = BigInt("529")
		const FairStockEquityTw2ROXp = await FairStockEquity.new(addressPQBKcUd, addressjpoAuGs, addressBCv6MNZ, addressfBfPN3G, uintEHYvVZz, {from: accounts[1]});
		const uintAsf1Zw4 = BigInt("1765")
		const uintpnQ4SOs = BigInt("1977")
		const uintjUWyGZq = BigInt("1969")
		const uintW6MJkiU = BigInt("1740")
		const uintwnTIXl2 = BigInt("1845")
		const uintICrilEq = BigInt("681")
		const uintasUQLfK = BigInt("1054")
		const uint256bIT7Y6w = await FairStockEquityTw2ROXp.reduceShare.call(uintAsf1Zw4, {from: accounts[1]});
		const uint256imvzAzf = await FairStockEquityTw2ROXp.reduceShare.call(uintpnQ4SOs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WAns85J = await FairStockEquityTw2ROXp.setDegree.call(uintasUQLfK, uintICrilEq, uintwnTIXl2, uintW6MJkiU, uintjUWyGZq, {from: accounts[3]});

		await expect(FairStockEquityTw2ROXp.reduceShare.call(uintAsf1Zw4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresslI7VxEw = accounts[3]
		const addressKVTg5MI = accounts[2]
		const addressoLH22NK = accounts[3]
		const addresszglrnI = accounts[3]
		const uintJdfyZWq = BigInt("1416")
		const FairStockEquitypvOZTk5 = await FairStockEquity.new(addresslI7VxEw, addressKVTg5MI, addressoLH22NK, addresszglrnI, uintJdfyZWq, {from: accounts[1]});
		const uintOlw7dUy = BigInt("2007")
		const uinttj0RcrC = BigInt("1494")
		const uintOVhV408 = BigInt("231")
		const uintkH6aRe2 = BigInt("1883")
		const uintfgPDU5J = BigInt("549")
		const uintBTLext = BigInt("1690")
		const uintOXOwSKq = BigInt("206")
		const uint256HnsmU4u = await FairStockEquitypvOZTk5.setProfitPercentBonus.call(uintOlw7dUy, {from: accounts[0]});
		const uint256jVpXQGs = await FairStockEquitypvOZTk5.invest.call(uinttj0RcrC, {from: accounts[3]});
		const uint256yOW7mkG = await FairStockEquitypvOZTk5.setDegree.call(uintOXOwSKq, uintBTLext, uintfgPDU5J, uintkH6aRe2, uintOVhV408, {from: accounts[5]});

		await expect(FairStockEquitypvOZTk5.setProfitPercentBonus.call(uintOlw7dUy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressvT7dBeZ = accounts[4]
		const addressvCq88OE = accounts[1]
		const addressEPc0cnP = accounts[0]
		const addresscVad6sy = "0x0000000000000000000000000000000000000001"
		const uintt9Oei7f = BigInt("1832")
		const FairStockEquitynCaInRG = await FairStockEquity.new(addressvT7dBeZ, addressvCq88OE, addressEPc0cnP, addresscVad6sy, uintt9Oei7f, {from: accounts[0]});
		const uintEKJMqR = BigInt("1980")
		const addressU89e9vp = accounts[4]
		const uintx5tk4IU = BigInt("2045")
		const uintux0Aksz = BigInt("1467")
		const addressujGijGS = "0x0000000000000000000000000000000000000001"
		const uintEmMIPKt = BigInt("105")
		const uintq9RN8Lf = BigInt("671")
		await FairStockEquitynCaInRG.withdrawMT.call({from: accounts[2]});
		const addressXGxxQIW = await FairStockEquitynCaInRG.withdrawLPT.call(addressU89e9vp, uintEKJMqR, {from: "0x0000000000000000000000000000000000000001"});
		await FairStockEquitynCaInRG.withdrawBonus.call({from: accounts[1]});
		const addressGLQYckg = await FairStockEquitynCaInRG.withdrawBonusCallback.call(addressujGijGS, uintux0Aksz, uintx5tk4IU, {from: accounts[1]});
		await FairStockEquitynCaInRG.withdrawMT.call({from: accounts[4]});
		const uint256Xtyuy2J = await FairStockEquitynCaInRG.setGasFeeForCallback.call(uintEmMIPKt, {from: accounts[0]});
		const uint256OYZnNLV = await FairStockEquitynCaInRG.setGasFeeForCallback.call(uintq9RN8Lf, {from: accounts[4]});

		await expect(FairStockEquitynCaInRG.withdrawMT.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressT2OohwP = accounts[5]
		const addressQVWN8v = accounts[0]
		const addresslDzWewU = accounts[5]
		const addressS6GjEWj = "0x0000000000000000000000000000000000000001"
		const uintxCsxC1k = BigInt("830")
		const FairStockEquityY7rFk5s = await FairStockEquity.new(addressT2OohwP, addressQVWN8v, addresslDzWewU, addressS6GjEWj, uintxCsxC1k, {from: accounts[3]});
		const uinty0nM8wH = BigInt("1881")
		const uint256NAhl3Q9 = await FairStockEquityY7rFk5s.setStartTime.call(uinty0nM8wH, {from: accounts[3]});
	});

	it('test for FairStockEquity', async () => {
		const addressrgh8c6U = accounts[4]
		const addressHrbGBTQ = accounts[5]
		const addressVReeiXz = accounts[1]
		const address0j2s2g = accounts[3]
		const uintt3aTQsr = BigInt("478")
		const FairStockEquityYwNpLJ4 = await FairStockEquity.new(addressrgh8c6U, addressHrbGBTQ, addressVReeiXz, address0j2s2g, uintt3aTQsr, {from: accounts[1]});
		const uint5Z0R2i = BigInt("1654")
		const boolLkbVXC = true
		const addressU0mCZsd = accounts[1]
		const uintKbGFqAs = BigInt("270")
		const uintGgxEW3 = BigInt("142")
		const uintjW8Zyb = BigInt("1485")
		const addressMCf9ggP = accounts[2]
		const uintvduIb5E = BigInt("1541")
		const addressztKEnqJ = accounts[1]
		await FairStockEquityYwNpLJ4.onlyDataSource.call({from: accounts[2]});
		const uint256wlkkwJ2 = await FairStockEquityYwNpLJ4.setProfitPercentMT.call(uint5Z0R2i, {from: accounts[3]});
		const addressnFZFfN0 = await FairStockEquityYwNpLJ4.setLPT.call(addressU0mCZsd, boolLkbVXC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IpePdTe = await FairStockEquityYwNpLJ4.setProfitPercentPJ.call(uintKbGFqAs, {from: accounts[4]});
		const addressTDrMum = await FairStockEquityYwNpLJ4.setModule.call(addressMCf9ggP, uintjW8Zyb, uintGgxEW3, {from: accounts[5]});
		const addressdtOclqs = await FairStockEquityYwNpLJ4.withdrawLPT.call(addressztKEnqJ, uintvduIb5E, {from: accounts[0]});

		await expect(FairStockEquityYwNpLJ4.onlyDataSource.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressYOJelG = accounts[5]
		const addresszgOBA9u = accounts[0]
		const addressuqC5LZQ = accounts[5]
		const addressPPWWvTL = "0x0000000000000000000000000000000000000001"
		const uintLpqkuu = BigInt("830")
		const FairStockEquityY7rFk5s = await FairStockEquity.new(addressYOJelG, addresszgOBA9u, addressuqC5LZQ, addressPPWWvTL, uintLpqkuu, {from: accounts[3]});
		const uintjfAD0SN = BigInt("486")
		const uint256NAhl3Q9 = await FairStockEquityY7rFk5s.setStartTime.call(uintjfAD0SN, {from: accounts[3]});

		await expect(FairStockEquityY7rFk5s.setStartTime.call(uintjfAD0SN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const address4JsdMv = "0x0000000000000000000000000000000000000001"
		const addressolfABR0 = accounts[3]
		const addressbyHas9p = accounts[4]
		const addressk2R7PXO = accounts[1]
		const uintfu0NjiG = BigInt("1171")
		const FairStockEquityEXdcvMG = await FairStockEquity.new(address4JsdMv, addressolfABR0, addressbyHas9p, addressk2R7PXO, uintfu0NjiG, {from: accounts[2]});
		const uintBbwFGpV = BigInt("1878")
		const uintlfIlEAp = BigInt("1331")
		const uintxvtLPpO = BigInt("1673")
		const uintUbxTuZa = BigInt("1608")
		const addressbKbuA4Y = accounts[5]
		const boolaBYFdbH = false
		const addressn0qnOFl = accounts[1]
		const uintRfTTwZZ = BigInt("962")
		const addressZ26A0qF = accounts[0]
		const uintVtVMn9Y = BigInt("963")
		const addressvrlyx2v = await FairStockEquityEXdcvMG.business.call(addressbKbuA4Y, uintUbxTuZa, uintxvtLPpO, uintlfIlEAp, uintBbwFGpV, {from: accounts[1]});
		const addressHwRxVWm = await FairStockEquityEXdcvMG.setLPT.call(addressn0qnOFl, boolaBYFdbH, {from: accounts[2]});
		const uint256YcvZ5B = await FairStockEquityEXdcvMG.invest.call(uintRfTTwZZ, {from: accounts[4]});
		const addresskp0Fz9R = await FairStockEquityEXdcvMG.setDataSource.call(addressZ26A0qF, {from: accounts[2]});
		const uint256xcWhaFa = await FairStockEquityEXdcvMG.bonus.call(uintVtVMn9Y, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityEXdcvMG.business.call(addressbKbuA4Y, uintUbxTuZa, uintxvtLPpO, uintlfIlEAp, uintBbwFGpV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressZqMk9XU = "0x0000000000000000000000000000000000000001"
		const addresskk3mn8R = accounts[3]
		const addressJn9NQbZ = accounts[4]
		const addresseMc6HFc = accounts[1]
		const uintRvqx1Ep = BigInt("1171")
		const FairStockEquityEXdcvMG = await FairStockEquity.new(addressZqMk9XU, addresskk3mn8R, addressJn9NQbZ, addresseMc6HFc, uintRvqx1Ep, {from: accounts[2]});
		const boolaBYFdbH = false
		const addressgmMigNz = accounts[1]
		const uintEym1Yz = BigInt("963")
		const addressHwRxVWm = await FairStockEquityEXdcvMG.setLPT.call(addressgmMigNz, boolaBYFdbH, {from: accounts[2]});
		const uint256xcWhaFa = await FairStockEquityEXdcvMG.bonus.call(uintEym1Yz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FairStockEquityEXdcvMG.bonus.call(uintEym1Yz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressK2T878h = "0x0000000000000000000000000000000000000001"
		const addresstg73xkJ = accounts[3]
		const addressVDkBzB4 = accounts[4]
		const addressmx6hY1N = accounts[1]
		const uintkiu89mf = BigInt("1171")
		const FairStockEquityEXdcvMG = await FairStockEquity.new(addressK2T878h, addresstg73xkJ, addressVDkBzB4, addressmx6hY1N, uintkiu89mf, {from: accounts[2]});
		const boolaBYFdbH = false
		const addressC0emsIY = accounts[3]
		const uintEWjtmIE = BigInt("438")
		const uintAsW4Xx0 = BigInt("778")
		const addressqHmHN69 = accounts[0]
		const uinteTiEYNl = BigInt("963")
		const uintdXFTb6 = BigInt("132")
		const uintMpfet6a = BigInt("1833")
		const uintAOnCG26 = BigInt("715")
		const uintYvXub2f = BigInt("1146")
		const uintOtlkzfr = BigInt("1146")
		const addresseVnsipe = accounts[2]
		const addressHwRxVWm = await FairStockEquityEXdcvMG.setLPT.call(addressC0emsIY, boolaBYFdbH, {from: accounts[2]});
		const uint256H5XsJpE = await FairStockEquityEXdcvMG.depositBonus.call(uintEWjtmIE, {from: accounts[3]});
		const uint256YcvZ5B = await FairStockEquityEXdcvMG.invest.call(uintAsW4Xx0, {from: accounts[4]});
		const addresskp0Fz9R = await FairStockEquityEXdcvMG.setDataSource.call(addressqHmHN69, {from: accounts[2]});
		const uint256xcWhaFa = await FairStockEquityEXdcvMG.bonus.call(uinteTiEYNl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qvK60jE = await FairStockEquityEXdcvMG.reduceShare.call(uintdXFTb6, {from: "0x0000000000000000000000000000000000000001"});
		const addressp5FU0Iv = await FairStockEquityEXdcvMG.business.call(addresseVnsipe, uintOtlkzfr, uintYvXub2f, uintAOnCG26, uintMpfet6a, {from: accounts[3]});

		await expect(FairStockEquityEXdcvMG.depositBonus.call(uintEWjtmIE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressCYyi1if = accounts[2]
		const addressirOTWXG = "0x0000000000000000000000000000000000000001"
		const addressjvg6s4 = accounts[1]
		const addressWzmVfDW = accounts[3]
		const uintXUp7NMW = BigInt("1457")
		const FairStockEquityEny9n0e = await FairStockEquity.new(addressCYyi1if, addressirOTWXG, addressjvg6s4, addressWzmVfDW, uintXUp7NMW, {from: accounts[4]});
		const uintnShhwmW = BigInt("890")
		const addressdoV0pJ = accounts[1]
		const uintp0MHmHN = BigInt("1650")
		const addressjtTlAuo = await FairStockEquityEny9n0e.depositLPT.call(addressdoV0pJ, uintnShhwmW, {from: accounts[0]});
		const uint256AJtldEv = await FairStockEquityEny9n0e.invest.call(uintp0MHmHN, {from: accounts[1]});

		await expect(FairStockEquityEny9n0e.depositLPT.call(addressdoV0pJ, uintnShhwmW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressT0HKbL8 = "0x0000000000000000000000000000000000000001"
		const addressPel4kt6 = accounts[3]
		const addressQwVxk1 = accounts[4]
		const addressxAwbSqc = accounts[1]
		const uintFCPJaqa = BigInt("1171")
		const FairStockEquityEXdcvMG = await FairStockEquity.new(addressT0HKbL8, addressPel4kt6, addressQwVxk1, addressxAwbSqc, uintFCPJaqa, {from: accounts[2]});
		const uintEa36Cif = BigInt("1935")
		const uintAwmOABL = BigInt("949")
		const uint256Eimr3yu = await FairStockEquityEXdcvMG.setProfitPercentPJ.call(uintEa36Cif, {from: accounts[2]});
		await FairStockEquityEXdcvMG.f.call({from: accounts[1]});
		const uint256YcvZ5B = await FairStockEquityEXdcvMG.invest.call(uintAwmOABL, {from: accounts[4]});

		await expect(FairStockEquityEXdcvMG.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressBmGqRet = "0x0000000000000000000000000000000000000001"
		const addressZlWFpVi = accounts[3]
		const addressajZazR1 = accounts[4]
		const addressWTatL3s = accounts[1]
		const uintBIEYs6D = BigInt("1171")
		const FairStockEquityEXdcvMG = await FairStockEquity.new(addressBmGqRet, addressZlWFpVi, addressajZazR1, addressWTatL3s, uintBIEYs6D, {from: accounts[2]});
		const uintKQvW8EC = BigInt("210")
		const uint4Mh1yo = BigInt("99")
		const addressImbaSnd = accounts[2]
		const uintfDcVl5P = BigInt("507")
		const uintnEyQ9GL = BigInt("730")
		const uintY5KHW6h = BigInt("112")
		const uintnjYJv3 = BigInt("26")
		const addressnpA0exk = accounts[4]
		const uintq0UEgIP = BigInt("981")
		const addressfIr1CyB = await FairStockEquityEXdcvMG.setModule.call(addressImbaSnd, uint4Mh1yo, uintKQvW8EC, {from: accounts[2]});
		const addressW3iav9S = await FairStockEquityEXdcvMG.business.call(addressnpA0exk, uintnjYJv3, uintY5KHW6h, uintnEyQ9GL, uintfDcVl5P, {from: accounts[1]});
		const uint256YcvZ5B = await FairStockEquityEXdcvMG.invest.call(uintq0UEgIP, {from: accounts[4]});

		await expect(FairStockEquityEXdcvMG.business.call(addressnpA0exk, uintnjYJv3, uintY5KHW6h, uintnEyQ9GL, uintfDcVl5P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressX6Gaumi = "0x0000000000000000000000000000000000000001"
		const addressKvSRWUm = accounts[3]
		const addresssS7JEcI = accounts[4]
		const addressJVfG08 = accounts[1]
		const uint7Yd8gS = BigInt("1171")
		const FairStockEquityEXdcvMG = await FairStockEquity.new(addressX6Gaumi, addressKvSRWUm, addresssS7JEcI, addressJVfG08, uint7Yd8gS, {from: accounts[2]});
		const uintaRXpeia = BigInt("1044")
		const uintNdsio45 = BigInt("1934")
		const addressYPlR9tg = accounts[4]
		const uintnLVeNQl = BigInt("1368")
		const addressmafg3dc = await FairStockEquityEXdcvMG.withdrawBonusCallback.call(addressYPlR9tg, uintNdsio45, uintaRXpeia, {from: accounts[1]});
		const uint256YcvZ5B = await FairStockEquityEXdcvMG.invest.call(uintnLVeNQl, {from: accounts[4]});
		await FairStockEquityEXdcvMG.checkStart.call({from: accounts[1]});

		await expect(FairStockEquityEXdcvMG.withdrawBonusCallback.call(addressYPlR9tg, uintNdsio45, uintaRXpeia, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addresso0KAhGc = accounts[5]
		const addressv8XbnNa = accounts[2]
		const addressba3AZbR = accounts[4]
		const addressM430am = accounts[0]
		const uintJRVlCi5 = BigInt("749")
		const FairStockEquityunujHT1 = await FairStockEquity.new(addresso0KAhGc, addressv8XbnNa, addressba3AZbR, addressM430am, uintJRVlCi5, {from: accounts[3]});
		const uintiqreucN = BigInt("894")
		const uintmIM7iLa = BigInt("1859")
		const addressnaoIOYI = accounts[0]
		const uintqpxAIQg = BigInt("1440")
		const addressotqcTsv = await FairStockEquityunujHT1.withdrawMTCallback.call(addressnaoIOYI, uintmIM7iLa, uintiqreucN, {from: accounts[0]});
		const uint256bR7vzU = await FairStockEquityunujHT1.setProfitPercentMT.call(uintqpxAIQg, {from: accounts[2]});
		await FairStockEquityunujHT1.withdrawMT.call({from: accounts[0]});

		await expect(FairStockEquityunujHT1.withdrawMTCallback.call(addressnaoIOYI, uintmIM7iLa, uintiqreucN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressfxD99Oj = "0x0000000000000000000000000000000000000001"
		const addressRliY7Cu = accounts[3]
		const addressldXCcf7 = accounts[4]
		const addressd5LMcVG = accounts[1]
		const uintS8o1QO = BigInt("1171")
		const FairStockEquityEXdcvMG = await FairStockEquity.new(addressfxD99Oj, addressRliY7Cu, addressldXCcf7, addressd5LMcVG, uintS8o1QO, {from: accounts[2]});
		const uintbAaA7wc = BigInt("983")
		const uintupJtElH = BigInt("2022")
		const uint81iZcE = BigInt("507")
		const uintRjAeI9l = BigInt("730")
		const uintyMDAUip = BigInt("101")
		const uintUqgZjLn = BigInt("8")
		const addressblevjgq = accounts[4]
		const uint256SJmuE9k = await FairStockEquityEXdcvMG.bonus.call(uintbAaA7wc, {from: accounts[1]});
		const uint256Loq7d6 = await FairStockEquityEXdcvMG.getCostAmount.call(uintupJtElH, {from: accounts[3]});
		const addressW3iav9S = await FairStockEquityEXdcvMG.business.call(addressblevjgq, uintUqgZjLn, uintyMDAUip, uintRjAeI9l, uint81iZcE, {from: accounts[1]});

		await expect(FairStockEquityEXdcvMG.bonus.call(uintbAaA7wc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FairStockEquity', async () => {
		const addressOuDeSal = "0x0000000000000000000000000000000000000001"
		const addressWgeWQJs = accounts[3]
		const addressxeGmGso = accounts[4]
		const addressCqfWhvT = accounts[1]
		const uintVEPageF = BigInt("1171")
		const FairStockEquityEXdcvMG = await FairStockEquity.new(addressOuDeSal, addressWgeWQJs, addressxeGmGso, addressCqfWhvT, uintVEPageF, {from: accounts[2]});
		const uints8JTh4k = BigInt("485")
		const uintpcKNHCO = BigInt("730")
		const uintpeF10uI = BigInt("101")
		const uintyIvaqyd = BigInt("0")
		const addresss22MX9y = accounts[4]
		const uintO3Cyy4r = BigInt("1827")
		const uintQtJukL9 = BigInt("1098")
		const uintKxMRuAs = BigInt("1870")
		const uintKGKE0WP = BigInt("874")
		const uintmdHoUZ = BigInt("1090")
		const uintgWuTHO = BigInt("1414")
		const addressW3iav9S = await FairStockEquityEXdcvMG.business.call(addresss22MX9y, uintyIvaqyd, uintpeF10uI, uintpcKNHCO, uints8JTh4k, {from: accounts[1]});
		const uint256uygmqD = await FairStockEquityEXdcvMG.setDegree.call(uintmdHoUZ, uintKGKE0WP, uintKxMRuAs, uintQtJukL9, uintO3Cyy4r, {from: accounts[4]});
		const uint256g91Azas = await FairStockEquityEXdcvMG.setProfitPercentPJ.call(uintgWuTHO, {from: accounts[4]});
		await FairStockEquityEXdcvMG.checkStart.call({from: accounts[1]});

		await expect(FairStockEquityEXdcvMG.business.call(addresss22MX9y, uintyIvaqyd, uintpeF10uI, uintpcKNHCO, uints8JTh4k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})