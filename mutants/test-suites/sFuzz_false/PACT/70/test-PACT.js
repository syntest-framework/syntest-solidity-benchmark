const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTi6PgNEU = await PACT.new({from: accounts[3]});
		const addressH4AZf0d = accounts[0]
		const addressqLYCENU = accounts[2]
		const uintyf7iaeF = BigInt("169")
		const addressjsVujUF = accounts[4]
		const uintkYtibis = BigInt("1637")
		const addressiQp00hO = "0x0000000000000000000000000000000000000001"
		const stringDu78ER = await PACTi6PgNEU.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uintm0JpHO = await PACTi6PgNEU.allowance.call(addressqLYCENU, addressH4AZf0d, {from: accounts[1]});
		const boolfjPInvg = await PACTi6PgNEU.approve.call(addressjsVujUF, uintyf7iaeF, {from: accounts[5]});
		const boolELr7XmH = await PACTi6PgNEU.approve.call(addressiQp00hO, uintkYtibis, {from: accounts[2]});

		assert.equal(boolELr7XmH, true)
		assert.equal(boolfjPInvg, true)
		assert.equal(stringDu78ER, "PACT")
		assert.equal(uintm0JpHO, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTteM9NNV = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVUhV43e = accounts[2]
		const uintZsOgzg = BigInt("495")
		const addressGCY8k2D = accounts[1]
		const addressaxGwDwd = accounts[0]
		const addresszFfVEQ4 = "0x0000000000000000000000000000000000000001"
		const boolPGP75XG = await PACTteM9NNV.setupRewards.call(addressVUhV43e, {from: accounts[2]});
		const boolulgWqKK = await PACTteM9NNV.transfer.call(addressGCY8k2D, uintZsOgzg, {from: accounts[1]});
		const boolIAXfjg = await PACTteM9NNV.setupRewards.call(addressaxGwDwd, {from: accounts[2]});
		const boolDpHYLL = await PACTteM9NNV.setupFarming.call(addresszFfVEQ4, {from: accounts[5]});
		const stringRmbaYyF = await PACTteM9NNV.symbol.call({from: accounts[0]});
	});

	it('test for PACT', async () => {
		const PACTfsl8hqt = await PACT.new({from: accounts[3]});
		const addressDPz5Q8U = accounts[3]
		const addressEn490MM = accounts[4]
		const addressYGrmTS4 = accounts[3]
		const addressVRkz8u = accounts[3]
		const uintk9X5D9u = await PACTfsl8hqt.totalSupply.call({from: accounts[2]});
		const uintxBkHOn = await PACTfsl8hqt.allowance.call(addressEn490MM, addressDPz5Q8U, {from: accounts[2]});
//		const boolmaAb6p = await PACTfsl8hqt.setupBasePool.call(addressYGrmTS4, {from: accounts[5]});
//		const booln4wDcEv = await PACTfsl8hqt.setupRewards.call(addressVRkz8u, {from: accounts[5]});

		assert.equal(uintk9X5D9u, BigInt("1000000000000000000000000000"))
		assert.equal(uintxBkHOn, BigInt("0"))
		await expect(PACTfsl8hqt.setupBasePool.call(addressYGrmTS4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTPu3PCZH = await PACT.new({from: accounts[1]});
		const addressTdzJJ2Y = accounts[1]
		const addressDRpsXu1 = accounts[0]
		const uintfxBydp = BigInt("145")
		const addresscuXuvPe = accounts[1]
		const uintZW0Kru7 = BigInt("111")
		const addressHKf2xtH = accounts[1]
		const uintiX3D3rE = await PACTPu3PCZH.balanceOf.call(addressTdzJJ2Y, {from: accounts[2]});
		const uintVQkhEeg = await PACTPu3PCZH.balanceOf.call(addressDRpsXu1, {from: accounts[2]});
		const boolkxUEhxv = await PACTPu3PCZH.approve.call(addresscuXuvPe, uintfxBydp, {from: accounts[1]});
//		const boolX65Ipn = await PACTPu3PCZH.burn.call(addressHKf2xtH, uintZW0Kru7, {from: accounts[4]});

		assert.equal(boolkxUEhxv, true)
		assert.equal(uintVQkhEeg, BigInt("0"))
		assert.equal(uintiX3D3rE, BigInt("0"))
		await expect(PACTPu3PCZH.burn.call(addressHKf2xtH, uintZW0Kru7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTt9faqbQ = await PACT.new({from: accounts[2]});
		const addressghiVLH = accounts[0]
		const addressa9VQyyZ = accounts[2]
		const uint8GGI6CtJ = await PACTt9faqbQ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uintKvE8ef2 = await PACTt9faqbQ.balanceOf.call(addressghiVLH, {from: accounts[4]});
//		const boolvyvvRr = await PACTt9faqbQ.setupReserve.call(addressa9VQyyZ, {from: accounts[1]});

		assert.equal(uint8GGI6CtJ, BigInt("18"))
		assert.equal(uintKvE8ef2, BigInt("0"))
		await expect(PACTt9faqbQ.setupReserve.call(addressa9VQyyZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTr5Ay9va = await PACT.new({from: accounts[1]});
		const uintUVB2Fii = BigInt("127")
		const addressBl9ce0I = accounts[3]
		const uintm1n40qA = BigInt("1931")
		const addressxIlg4L = accounts[3]
		const addressebxyv50 = accounts[1]
		const addressTJr5Woc = accounts[4]
//		const boolA3OpxGP = await PACTr5Ay9va.transfer.call(addressBl9ce0I, uintUVB2Fii, {from: accounts[4]});
//		const stringRErq41O = await PACTr5Ay9va.name.call({from: accounts[3]});
//		const uint8AbMed1 = await PACTr5Ay9va.decimals.call({from: accounts[0]});
//		const boolTaGO6Oh = await PACTr5Ay9va.transferFrom.call(addressebxyv50, addressxIlg4L, uintm1n40qA, {from: accounts[2]});
//		const boolCk07LqV = await PACTr5Ay9va.setupBasePool.call(addressTJr5Woc, {from: accounts[0]});

		await expect(PACTr5Ay9va.transfer.call(addressBl9ce0I, uintUVB2Fii, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTmLZZmbZ = await PACT.new({from: accounts[2]});
		const uintm3jiT7T = BigInt("986")
		const addressOh8yqme = accounts[5]
		const addressmjlnC0r = accounts[4]
		const uinte7tiTTA = BigInt("383")
		const addressFlFyGs = accounts[3]
		const addressdWgK356 = accounts[4]
		const addressDPcVXHa = "0x0000000000000000000000000000000000000001"
		const addressTfefCfY = accounts[5]
		const addressx3ThORN = "0x0000000000000000000000000000000000000001"
//		const boolTZQPbpi = await PACTmLZZmbZ.transferFrom.call(addressmjlnC0r, addressOh8yqme, uintm3jiT7T, {from: accounts[1]});
//		const boolRsaif9l = await PACTmLZZmbZ.transfer.call(addressFlFyGs, uinte7tiTTA, {from: accounts[4]});
//		const boolBfmgCkM = await PACTmLZZmbZ.setupRewards.call(addressdWgK356, {from: accounts[0]});
//		const uintVZ0ZTPO = await PACTmLZZmbZ.allowance.call(addressTfefCfY, addressDPcVXHa, {from: accounts[2]});
//		const bool3DoWUi = await PACTmLZZmbZ.setupRewards.call(addressx3ThORN, {from: accounts[4]});

		await expect(PACTmLZZmbZ.transferFrom.call(addressmjlnC0r, addressOh8yqme, uintm3jiT7T, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTt9faqbQ = await PACT.new({from: accounts[2]});
		const addresstIUiG1i = accounts[0]
		const addressUB025uU = accounts[0]
		const addresshnm6Mwp = accounts[2]
		const uint8GGI6CtJ = await PACTt9faqbQ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolMcAEJb5 = await PACTt9faqbQ.setupFarming.call(addresstIUiG1i, {from: accounts[1]});
//		const uintKvE8ef2 = await PACTt9faqbQ.balanceOf.call(addressUB025uU, {from: accounts[4]});
//		const boolvyvvRr = await PACTt9faqbQ.setupReserve.call(addresshnm6Mwp, {from: accounts[1]});

		assert.equal(uint8GGI6CtJ, BigInt("18"))
		await expect(PACTt9faqbQ.setupFarming.call(addresstIUiG1i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTt9faqbQ = await PACT.new({from: accounts[2]});
		const addressNegjP2E = accounts[0]
		const addressTloQGKq = accounts[3]
		const addressVhq3yCr = accounts[3]
		const uintsa3KDnL = BigInt("1361")
		const addressQBErUiE = "0x0000000000000000000000000000000000000001"
		const uint8GGI6CtJ = await PACTt9faqbQ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uintKvE8ef2 = await PACTt9faqbQ.balanceOf.call(addressNegjP2E, {from: accounts[4]});
//		const boolGILZk4 = await PACTt9faqbQ.setupRewards.call(addressTloQGKq, {from: accounts[1]});
//		const boolvyvvRr = await PACTt9faqbQ.setupReserve.call(addressVhq3yCr, {from: accounts[1]});
//		const boolUzgoHwF = await PACTt9faqbQ.transfer.call(addressQBErUiE, uintsa3KDnL, {from: accounts[5]});

		assert.equal(uint8GGI6CtJ, BigInt("18"))
		assert.equal(uintKvE8ef2, BigInt("0"))
		await expect(PACTt9faqbQ.setupRewards.call(addressTloQGKq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTt9faqbQ = await PACT.new({from: accounts[2]});
		const addressV28qTGk = accounts[4]
		const stringsPpvtEB = await PACTt9faqbQ.name.call({from: accounts[3]});
//		const boolvyvvRr = await PACTt9faqbQ.setupReserve.call(addressV28qTGk, {from: accounts[1]});

		assert.equal(stringsPpvtEB, "P2PB2B community token")
		await expect(PACTt9faqbQ.setupReserve.call(addressV28qTGk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTt9faqbQ = await PACT.new({from: accounts[2]});
		const addressua8We9N = accounts[3]
		const uintTxxdrGE = BigInt("34")
		const addresss52SAFj = accounts[2]
		const addressytlxLPz = accounts[4]
		const stringP5R0ote = await PACTt9faqbQ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolshQJhOe = await PACTt9faqbQ.setupTeam.call(addressua8We9N, {from: accounts[5]});
//		const boolMXZrgvM = await PACTt9faqbQ.burn.call(addresss52SAFj, uintTxxdrGE, {from: accounts[1]});
//		const boolvyvvRr = await PACTt9faqbQ.setupReserve.call(addressytlxLPz, {from: accounts[1]});

		assert.equal(stringP5R0ote, "PACT")
		await expect(PACTt9faqbQ.setupTeam.call(addressua8We9N, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})