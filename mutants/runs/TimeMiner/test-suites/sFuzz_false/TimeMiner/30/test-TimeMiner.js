const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinertO2RJYQ = await TimeMiner.new({from: accounts[4]});
		const addressz4yNLqY = accounts[2]
		const uintYxbcEMh = BigInt("660")
		const uintye4vvPa = BigInt("373")
		const uintgWHQbt = BigInt("1271")
		const addressbaKJwfW = "0x0000000000000000000000000000000000000001"
		const booliOCEt5D = true
		const uint256BJD2pMw = await TimeMinertO2RJYQ.allInfoFor.call(addressz4yNLqY, {from: accounts[3]});
		const uint256SH2l5Zd = await TimeMinertO2RJYQ.setPrizeFromNewAddress.call(uintye4vvPa, uintYxbcEMh, {from: accounts[5]});
		const uint256OoDTJG6 = await TimeMinertO2RJYQ.changePreSalePriceIfToHigh.call(uintgWHQbt, {from: accounts[1]});
		await TimeMinertO2RJYQ.preSaleFinished.call({from: accounts[4]});
		const boolWh0JJF = await TimeMinertO2RJYQ.isWhitelisted.call(addressbaKJwfW, {from: accounts[4]});
		const booliZBA2QV = await TimeMinertO2RJYQ.setStableCoinSystem.call(booliOCEt5D, {from: accounts[1]});

		await expect(TimeMinertO2RJYQ.allInfoFor.call(addressz4yNLqY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereuy9Duv = await TimeMiner.new({from: accounts[0]});
		const addressAdZxzXa = accounts[1]
		const boolrMr4hZX = true
		const addressTAglgEI = "0x0000000000000000000000000000000000000001"
		const boolx3xIPNL = await TimeMinereuy9Duv.isWhitelisted.call(addressAdZxzXa, {from: accounts[0]});
		const addresstfJJOuq = await TimeMinereuy9Duv.whitelist.call(addressTAglgEI, boolrMr4hZX, {from: accounts[1]});

		assert.equal(boolx3xIPNL, false)
		await expect(TimeMinereuy9Duv.whitelist.call(addressTAglgEI, boolrMr4hZX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerljOaVg8 = await TimeMiner.new({from: accounts[3]});
		const uintrx9vQsd = BigInt("313")
		const uintU0jAcwm = BigInt("1911")
		const uint256Pqlu1Qa = await TimeMinerljOaVg8.changePreSalePriceIfToHigh.call(uintrx9vQsd, {from: accounts[3]});
		const uint256hXf0DEA = await TimeMinerljOaVg8.changePreSalePriceIfToHigh.call(uintU0jAcwm, {from: accounts[2]});
		const boolwWpoyK8 = await TimeMinerljOaVg8.infoStableSystem.call({from: accounts[5]});

		await expect(TimeMinerljOaVg8.changePreSalePriceIfToHigh.call(uintU0jAcwm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerFKbOLR3 = await TimeMiner.new({from: accounts[2]});
		const uintxH4rOlU = BigInt("329")
		const addressIB5R4d = accounts[1]
		const uintT1e6u0u = BigInt("1636")
		const addressEWCwI3N = accounts[1]
		const addresswlnesD = accounts[2]
		const addressXPSNQxw = accounts[2]
		const uint256kh9V2R4 = await TimeMinerFKbOLR3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolsHNcK3 = await TimeMinerFKbOLR3.approve.call(addressIB5R4d, uintxH4rOlU, {from: accounts[0]});
		const boolKzGLf8n = await TimeMinerFKbOLR3.transfer.call(addressEWCwI3N, uintT1e6u0u, {from: accounts[4]});
		const boolue9axY6 = await TimeMinerFKbOLR3.isWhitelisted.call(addresswlnesD, {from: accounts[2]});
		const uint256VkBlDHC = await TimeMinerFKbOLR3.balanceOfTokenCirculation.call(addressXPSNQxw, {from: accounts[1]});
		const boolcOuLd0V = await TimeMinerFKbOLR3.infoStableSystem.call({from: accounts[5]});

		assert.equal(boolsHNcK3, true)
		assert.equal(uint256kh9V2R4, BigInt("24000000"))
		await expect(TimeMinerFKbOLR3.transfer.call(addressEWCwI3N, uintT1e6u0u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPtYC6be = await TimeMiner.new({from: accounts[4]});
		const addressLxk9lrR = accounts[3]
		const addressra0ynVi = accounts[0]
		const addressBfrEgl7 = accounts[3]
		const addressvd4R5sP = accounts[4]
		const boolyzasI3 = false
		const addressruDLDIp = accounts[0]
		const uint256bCQqDQE = await TimeMinerPtYC6be.allowance.call(addressra0ynVi, addressLxk9lrR, {from: accounts[1]});
		const boolxfuxC56 = await TimeMinerPtYC6be.isWhitelisted.call(addressBfrEgl7, {from: accounts[3]});
		const uint256qxkg9t9 = await TimeMinerPtYC6be.balanceOfTokenCirculation.call(addressvd4R5sP, {from: accounts[2]});
		const addressYPiqSzJ = await TimeMinerPtYC6be.whitelist.call(addressruDLDIp, boolyzasI3, {from: accounts[2]});
		await TimeMinerPtYC6be.preSaleFinished.call({from: accounts[1]});

		assert.equal(boolxfuxC56, false)
		assert.equal(uint256bCQqDQE, BigInt("0"))
		assert.equal(uint256qxkg9t9, BigInt("24000000"))
		await expect(TimeMinerPtYC6be.whitelist.call(addressruDLDIp, boolyzasI3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerLIfJTek = await TimeMiner.new({from: accounts[1]});
		const addressM5RrlKi = accounts[5]
		const bool4q1A2h = true
		const uintyGf9Wqc = BigInt("1284")
		const boolJztwG6n = await TimeMinerLIfJTek.isWhitelisted.call(addressM5RrlKi, {from: accounts[2]});
		const boolip6zLiY = await TimeMinerLIfJTek.setStableCoinSystem.call(bool4q1A2h, {from: accounts[1]});
		const uint256mT8WWRI = await TimeMinerLIfJTek.changePreSalePriceIfToHigh.call(uintyGf9Wqc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJztwG6n, false)
		await expect(TimeMinerLIfJTek.changePreSalePriceIfToHigh.call(uintyGf9Wqc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerXipCCOC = await TimeMiner.new({from: accounts[0]});
		const addressDM0fBzT = accounts[5]
		const addressIDIaXRN = accounts[4]
		const uintGaEbKBR = BigInt("1768")
		const addressLl4rlH = accounts[1]
		const uintnj0vIQ5 = BigInt("530")
		const boolAnXfMPr = await TimeMinerXipCCOC.isWhitelisted.call(addressDM0fBzT, {from: accounts[1]});
		const uint256Q4Y2086 = await TimeMinerXipCCOC.balanceOfTokenCirculation.call(addressIDIaXRN, {from: accounts[4]});
		const boolABULz5m = await TimeMinerXipCCOC.infoStableSystem.call({from: accounts[4]});
		const boolsudTZ4w = await TimeMinerXipCCOC.approve.call(addressLl4rlH, uintGaEbKBR, {from: accounts[1]});
		const uint256tq8N0nT = await TimeMinerXipCCOC.changePreSalePriceIfToHigh.call(uintnj0vIQ5, {from: accounts[3]});

		assert.equal(boolAnXfMPr, false)
		assert.equal(boolsudTZ4w, true)
		assert.equal(uint256Q4Y2086, BigInt("0"))
		await expect(TimeMinerXipCCOC.changePreSalePriceIfToHigh.call(uintnj0vIQ5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereuy9Duv = await TimeMiner.new({from: accounts[0]});
		const address8VfgCQ = accounts[2]
		const boolrMr4hZX = true
		const addressIDG3P03 = "0x0000000000000000000000000000000000000001"
		const boolx3xIPNL = await TimeMinereuy9Duv.isWhitelisted.call(address8VfgCQ, {from: accounts[0]});
		await TimeMinereuy9Duv.preSaleFinished.call({from: accounts[0]});
		const addresstfJJOuq = await TimeMinereuy9Duv.whitelist.call(addressIDG3P03, boolrMr4hZX, {from: accounts[1]});

		assert.equal(boolx3xIPNL, false)
		await expect(TimeMinereuy9Duv.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerLIfJTek = await TimeMiner.new({from: accounts[1]});
		const addressBDBPZ4h = accounts[6]
		const bool4q1A2h = true
		const uintGP8SF6h = BigInt("623")
		const addressUjgjzLb = "0x0000000000000000000000000000000000000001"
		const addresslFWCp3J = accounts[3]
		const uintN9LLK8b = BigInt("1284")
		const boolJztwG6n = await TimeMinerLIfJTek.isWhitelisted.call(addressBDBPZ4h, {from: accounts[2]});
		const boolip6zLiY = await TimeMinerLIfJTek.setStableCoinSystem.call(bool4q1A2h, {from: accounts[1]});
		const booltUgF4h = await TimeMinerLIfJTek.transferFrom.call(addresslFWCp3J, addressUjgjzLb, uintGP8SF6h, {from: accounts[2]});
		const uint256mT8WWRI = await TimeMinerLIfJTek.changePreSalePriceIfToHigh.call(uintN9LLK8b, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJztwG6n, false)
		await expect(TimeMinerLIfJTek.transferFrom.call(addresslFWCp3J, addressUjgjzLb, uintGP8SF6h, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereuy9Duv = await TimeMiner.new({from: accounts[0]});
		const addresswPsKyhS = accounts[2]
		const uintI1ecY2D = BigInt("1624")
		const uintMQ3QVR9 = BigInt("975")
		const uintJ2y5OR0 = BigInt("2010")
		const addressmn8idZD = accounts[1]
		const boolrMr4hZX = true
		const addresstlMcCq3 = "0x0000000000000000000000000000000000000001"
		const boolx3xIPNL = await TimeMinereuy9Duv.isWhitelisted.call(addresswPsKyhS, {from: accounts[0]});
		const uint256SvggJ7R = await TimeMinereuy9Duv.setPrizeFromNewAddress.call(uintMQ3QVR9, uintI1ecY2D, {from: accounts[5]});
		const boolP680DM6 = await TimeMinereuy9Duv.transfer.call(addressmn8idZD, uintJ2y5OR0, {from: accounts[4]});
		const addresstfJJOuq = await TimeMinereuy9Duv.whitelist.call(addresstlMcCq3, boolrMr4hZX, {from: accounts[1]});

		assert.equal(boolx3xIPNL, false)
		await expect(TimeMinereuy9Duv.setPrizeFromNewAddress.call(uintMQ3QVR9, uintI1ecY2D, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereuy9Duv = await TimeMiner.new({from: accounts[0]});
		const uintDlOPqh6 = BigInt("1344")
		const addressHxfPnB = accounts[2]
		const uintrOnsBIO = BigInt("1380")
		const addressG8Vd3j = accounts[3]
		const addressh3YxEj8 = accounts[0]
		const uint256bGJXYJb = await TimeMinereuy9Duv.changePreSalePriceIfToHigh.call(uintDlOPqh6, {from: accounts[0]});
		const boolx3xIPNL = await TimeMinereuy9Duv.isWhitelisted.call(addressHxfPnB, {from: accounts[0]});
		const boolbOuXdoy = await TimeMinereuy9Duv.transfer.call(addressG8Vd3j, uintrOnsBIO, {from: accounts[0]});
		const uint256R8znwoq = await TimeMinereuy9Duv.allInfoFor.call(addressh3YxEj8, {from: accounts[4]});
		await TimeMinereuy9Duv.preSaleFinished.call({from: accounts[0]});

		assert.equal(boolbOuXdoy, true)
		assert.equal(boolx3xIPNL, false)
		await expect(TimeMinereuy9Duv.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinertLnfdEl = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressyg9Gaai = accounts[5]
		const uintdJY7uI = BigInt("885")
		const addressgWJisTM = accounts[1]
		const uint256wCKd51I = await TimeMinertLnfdEl.allInfoFor.call(addressyg9Gaai, {from: accounts[2]});
		const boolpdW1zdL = await TimeMinertLnfdEl.transfer.call(addressgWJisTM, uintdJY7uI, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TimeMiner', async () => {
		const TimeMinereuy9Duv = await TimeMiner.new({from: accounts[0]});
		const uint8EiZou = BigInt("643")
		const boolrMr4hZX = false
		const address33Ry0F = "0x0000000000000000000000000000000000000002"
		const uintNeaDotp = await TimeMinereuy9Duv.preSale.call(uint8EiZou, {from: accounts[1]});
		const addresstfJJOuq = await TimeMinereuy9Duv.whitelist.call(address33Ry0F, boolrMr4hZX, {from: accounts[1]});

		await expect(TimeMinereuy9Duv.preSale.call(uint8EiZou, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})