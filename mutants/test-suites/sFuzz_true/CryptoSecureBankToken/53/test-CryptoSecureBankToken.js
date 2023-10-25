const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEoGpeGE = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressWmNS8CB = accounts[2]
		const addressASs3F5J = accounts[3]
		const uintqRt5p9V = BigInt("1852")
		const addressXwDo9Rc = accounts[3]
//		const addressqWivtM = await CryptoSecureBankTokenEoGpeGE.destroyBlackFunds.call(addressWmNS8CB, {from: "0x0000000000000000000000000000000000000001"});
//		const addressIKdiDYh = await CryptoSecureBankTokenEoGpeGE.setOwner2.call(addressASs3F5J, {from: accounts[1]});
//		await CryptoSecureBankTokenEoGpeGE.unpause.call({from: accounts[2]});
//		const boolHQWafpl = await CryptoSecureBankTokenEoGpeGE.transfer.call(addressXwDo9Rc, uintqRt5p9V, {from: accounts[4]});

		await expect(CryptoSecureBankTokenEoGpeGE.destroyBlackFunds.call(addressWmNS8CB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintXonsdIQ = BigInt("287")
		const addresspfTnPnA = "0x0000000000000000000000000000000000000001"
		const addresslnZS3O4 = accounts[0]
		const uintcIDQpUA = BigInt("1822")
		const addressiunuft8 = "0x0000000000000000000000000000000000000001"
		const addressonaOcER = accounts[1]
//		const boolg933cBk = await CryptoSecureBankTokennyceBE.transferFrom.call(addresslnZS3O4, addresspfTnPnA, uintXonsdIQ, {from: accounts[0]});
//		const boolM9MeAow = await CryptoSecureBankTokennyceBE.transferFrom.call(addressonaOcER, addressiunuft8, uintcIDQpUA, {from: accounts[2]});

		await expect(CryptoSecureBankTokennyceBE.transferFrom.call(addresslnZS3O4, addresspfTnPnA, uintXonsdIQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenhBZD87 = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGfSSHBS = BigInt("1827")
		const addressULQRXuv = accounts[4]
		const addressyb3kpNQ = accounts[0]
		await CryptoSecureBankTokenhBZD87.whenPaused.call({from: accounts[2]});
		const uintLnUxR7F = await CryptoSecureBankTokenhBZD87.onlyPayloadSize.call(uintGfSSHBS, {from: accounts[2]});
		const boolzDyFkdD = await CryptoSecureBankTokenhBZD87.deprecate.call(addressULQRXuv, {from: accounts[1]});
		const addressRcoa42O = await CryptoSecureBankTokenhBZD87.destroyBlackFunds.call(addressyb3kpNQ, {from: accounts[0]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwIhE3Ub = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintGsnHPjx = BigInt("2028")
		const addresskJwPSC = accounts[0]
		const uint34Q9uT = BigInt("609")
		const addresswDB4LiW = accounts[3]
		const addressGW41pg5 = accounts[3]
//		await CryptoSecureBankTokenwIhE3Ub.whenPaused.call({from: accounts[3]});
//		const boolRvMFfCy = await CryptoSecureBankTokenwIhE3Ub.transfer.call(addresskJwPSC, uintGsnHPjx, {from: accounts[0]});
//		await CryptoSecureBankTokenwIhE3Ub.pause.call({from: accounts[3]});
//		const addressC84m5b = await CryptoSecureBankTokenwIhE3Ub.getOwner.call({from: accounts[2]});
//		const boolPSoltfV = await CryptoSecureBankTokenwIhE3Ub.approve.call(addresswDB4LiW, uint34Q9uT, {from: accounts[3]});
//		const uintci8trhk = await CryptoSecureBankTokenwIhE3Ub.balanceOf.call(addressGW41pg5, {from: accounts[5]});

		await expect(CryptoSecureBankTokenwIhE3Ub.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressRyoRZSM = accounts[3]
		const uintO6paojK = BigInt("186")
		const addresseYPHzOG = accounts[1]
		const uintUU0jxso = BigInt("287")
		const addressQmjgsEJ = "0x0000000000000000000000000000000000000001"
		const addressF9lZl9 = accounts[0]
		const uintDjC7Zo7 = BigInt("1822")
		const addressa95JXsC = "0x0000000000000000000000000000000000000001"
		const addressiwkFaAo = accounts[2]
		const boolKTGkcN = await CryptoSecureBankTokennyceBE.getBlackListStatus.call(addressRyoRZSM, {from: accounts[0]});
		const boolXP9RgJC = await CryptoSecureBankTokennyceBE.approve.call(addresseYPHzOG, uintO6paojK, {from: accounts[5]});
//		const boolg933cBk = await CryptoSecureBankTokennyceBE.transferFrom.call(addressF9lZl9, addressQmjgsEJ, uintUU0jxso, {from: accounts[0]});
//		const boolM9MeAow = await CryptoSecureBankTokennyceBE.transferFrom.call(addressiwkFaAo, addressa95JXsC, uintDjC7Zo7, {from: accounts[2]});

		assert.equal(boolKTGkcN, false)
		assert.equal(boolXP9RgJC, true)
		await expect(CryptoSecureBankTokennyceBE.transferFrom.call(addressF9lZl9, addressQmjgsEJ, uintUU0jxso, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressCAfG2ey = accounts[5]
		const addressvCmnaUi = accounts[3]
		const uintBvCkP7J = BigInt("157")
		const addresspHOUAlg = accounts[4]
		const uintMNVJcOb = BigInt("1822")
		const addressYbfxD7M = "0x0000000000000000000000000000000000000001"
		const addressvMS6VUD = accounts[1]
		const uintBPnmz81 = await CryptoSecureBankTokennyceBE.allowance.call(addressvCmnaUi, addressCAfG2ey, {from: accounts[1]});
		const boolA1MgdzZ = await CryptoSecureBankTokennyceBE.approve.call(addresspHOUAlg, uintBvCkP7J, {from: accounts[2]});
//		const boolM9MeAow = await CryptoSecureBankTokennyceBE.transferFrom.call(addressvMS6VUD, addressYbfxD7M, uintMNVJcOb, {from: accounts[2]});

		assert.equal(boolA1MgdzZ, true)
		assert.equal(uintBPnmz81, BigInt("0"))
		await expect(CryptoSecureBankTokennyceBE.transferFrom.call(addressvMS6VUD, addressYbfxD7M, uintMNVJcOb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintCH7W90U = BigInt("666")
		const addressaHUGuy = accounts[4]
		const uintBJa8FRU = BigInt("287")
		const addressK1uiTLW = "0x0000000000000000000000000000000000000001"
		const addressCFcUCa6 = accounts[1]
//		const boolW23fBf7 = await CryptoSecureBankTokennyceBE.transfer.call(addressaHUGuy, uintCH7W90U, {from: accounts[4]});
//		const boolg933cBk = await CryptoSecureBankTokennyceBE.transferFrom.call(addressCFcUCa6, addressK1uiTLW, uintBJa8FRU, {from: accounts[0]});

		await expect(CryptoSecureBankTokennyceBE.transfer.call(addressaHUGuy, uintCH7W90U, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressM869zS8 = accounts[5]
		const addressCnKuROx = accounts[6]
		const addressXze1OmX = accounts[4]
		const uintOW17fA7 = BigInt("1104")
		const uintUBahVbE = BigInt("157")
		const addresscgCabW0 = accounts[4]
//		const addresso3Lo6l5 = await CryptoSecureBankTokennyceBE.transferOwnership.call(addressM869zS8, {from: "0x0000000000000000000000000000000000000001"});
//		const uintBPnmz81 = await CryptoSecureBankTokennyceBE.allowance.call(addressXze1OmX, addressCnKuROx, {from: accounts[1]});
//		const boolXqFTwhX = await CryptoSecureBankTokennyceBE.redeem.call(uintOW17fA7, {from: accounts[2]});
//		await CryptoSecureBankTokennyceBE.pause.call({from: accounts[2]});
//		const boolA1MgdzZ = await CryptoSecureBankTokennyceBE.approve.call(addresscgCabW0, uintUBahVbE, {from: accounts[2]});

		await expect(CryptoSecureBankTokennyceBE.transferOwnership.call(addressM869zS8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresswwZnxs0 = accounts[0]
		const uintPwosxgK = BigInt("1821")
		const addressWbg8Bs8 = "0x0000000000000000000000000000000000000001"
		const addressrsLQYvC = accounts[2]
		const uints32NCSU = await CryptoSecureBankTokennyceBE.balanceOf.call(addresswwZnxs0, {from: accounts[2]});
//		await CryptoSecureBankTokennyceBE.pause.call({from: accounts[0]});
//		const boolM9MeAow = await CryptoSecureBankTokennyceBE.transferFrom.call(addressrsLQYvC, addressWbg8Bs8, uintPwosxgK, {from: accounts[2]});

		assert.equal(uints32NCSU, BigInt("0"))
		await expect(CryptoSecureBankTokennyceBE.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressuGKOEoB = accounts[3]
		const addressYRXoYHQ = accounts[1]
		const uinttfesvBM = BigInt("161")
		const addressFNvWnAF = accounts[4]
		const uintA5HPMGD = await CryptoSecureBankTokennyceBE.allowance.call(addressYRXoYHQ, addressuGKOEoB, {from: "0x0000000000000000000000000000000000000001"});
		const addressGHJCEOd = await CryptoSecureBankTokennyceBE.getOwner.call({from: accounts[2]});
		const boolA1MgdzZ = await CryptoSecureBankTokennyceBE.approve.call(addressFNvWnAF, uinttfesvBM, {from: accounts[2]});

		assert.equal(addressGHJCEOd, 0x29FB1f6F7Bf92A820E1075d6B40922B0f9a8F4CC)
		assert.equal(boolA1MgdzZ, true)
		assert.equal(uintA5HPMGD, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenLufylCI = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintHO2NIDZ = BigInt("1501")
		const addressQIHpQ0v = accounts[2]
		const addresspUwiqKS = accounts[3]
		const addressFOdz40C = accounts[5]
		const addressRFlFOpJ = accounts[1]
		const addresspsAya6x = accounts[3]
//		await CryptoSecureBankTokenLufylCI.pause.call({from: accounts[0]});
//		const boolJQdzQzJ = await CryptoSecureBankTokenLufylCI.transferFrom.call(addresspUwiqKS, addressQIHpQ0v, uintHO2NIDZ, {from: accounts[0]});
//		const addresshtktDuY = await CryptoSecureBankTokenLufylCI.setOwner2.call(addressFOdz40C, {from: accounts[5]});
//		const addresshV9y2Vo = await CryptoSecureBankTokenLufylCI.getOwner.call({from: accounts[1]});
//		const uintQbXMOO6 = await CryptoSecureBankTokenLufylCI.allowance.call(addresspsAya6x, addressRFlFOpJ, {from: accounts[5]});

		await expect(CryptoSecureBankTokenLufylCI.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressA9jmdvf = accounts[0]
		const uintohbchsu = BigInt("1822")
		const addressJerTxB = "0x0000000000000000000000000000000000000001"
		const addressBeusEPG = accounts[1]
		const uintVGMfGFJ = BigInt("1851")
		const addressa8IVEo7 = accounts[0]
//		const addressqD9gmdY = await CryptoSecureBankTokennyceBE.destroyBlackFunds.call(addressA9jmdvf, {from: accounts[1]});
//		const boolM9MeAow = await CryptoSecureBankTokennyceBE.transferFrom.call(addressBeusEPG, addressJerTxB, uintohbchsu, {from: accounts[2]});
//		const boolsmz1FiI = await CryptoSecureBankTokennyceBE.approve.call(addressa8IVEo7, uintVGMfGFJ, {from: accounts[0]});

		await expect(CryptoSecureBankTokennyceBE.destroyBlackFunds.call(addressA9jmdvf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressZLzW1Dp = accounts[6]
		const addressl1AAl8j = accounts[5]
		const addresse3US21U = accounts[1]
		const addressJXztk8b = accounts[1]
		const uintBPnmz81 = await CryptoSecureBankTokennyceBE.allowance.call(addressl1AAl8j, addressZLzW1Dp, {from: accounts[1]});
		const uintOAMohSq = await CryptoSecureBankTokennyceBE.allowance.call(addressJXztk8b, addresse3US21U, {from: accounts[3]});
		const uintSE9wjsK = await CryptoSecureBankTokennyceBE.totalSupply.call({from: accounts[5]});

		assert.equal(uintBPnmz81, BigInt("0"))
		assert.equal(uintOAMohSq, BigInt("0"))
		assert.equal(uintSE9wjsK, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressaABuZ3J = accounts[2]
		const addressmbQucWl = "0x0000000000000000000000000000000000000001"
		const addressu0O2qXc = accounts[4]
		const uintJs5D1hu = BigInt("126")
		const addressFQqhhqA = accounts[5]
		const addressSiCx0gJ = await CryptoSecureBankTokennyceBE.addBlackList.call(addressaABuZ3J, {from: accounts[1]});
		const uintI6pHGdg = await CryptoSecureBankTokennyceBE.allowance.call(addressu0O2qXc, addressmbQucWl, {from: "0x0000000000000000000000000000000000000001"});
//		const boolW23fBf7 = await CryptoSecureBankTokennyceBE.transfer.call(addressFQqhhqA, uintJs5D1hu, {from: accounts[4]});

		assert.equal(uintI6pHGdg, BigInt("0"))
		await expect(CryptoSecureBankTokennyceBE.transfer.call(addressFQqhhqA, uintJs5D1hu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenaLztAv6 = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintqCwo5qT = BigInt("490")
		const addressyMRfoef = accounts[0]
		const addressqtkSi6w = accounts[3]
		const uintUJdK1NQ = BigInt("1658")
		const addressotyurZq = "0x0000000000000000000000000000000000000001"
		const addressVoZnKbL = "0x0000000000000000000000000000000000000001"
		const addressL8nNmD9 = accounts[4]
		const addressyItpmJt = accounts[2]
		const booltSxwulZ = await CryptoSecureBankTokenaLztAv6.approve.call(addressyMRfoef, uintqCwo5qT, {from: accounts[2]});
		const addressnhdwj9 = await CryptoSecureBankTokenaLztAv6.setOwner2.call(addressqtkSi6w, {from: accounts[3]});
//		const boolpFtj05 = await CryptoSecureBankTokenaLztAv6.transferFrom.call(addressVoZnKbL, addressotyurZq, uintUJdK1NQ, {from: accounts[0]});
//		const uintACawjFW = await CryptoSecureBankTokenaLztAv6.allowance.call(addressyItpmJt, addressL8nNmD9, {from: accounts[4]});

		assert.equal(booltSxwulZ, true)
		await expect(CryptoSecureBankTokenaLztAv6.transferFrom.call(addressVoZnKbL, addressotyurZq, uintUJdK1NQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenlxSjVLI = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintYIAEwWf = BigInt("515")
		const addressDPeYT6 = accounts[1]
		const addressk9CmDS = accounts[2]
		const addresssg8yuTH = accounts[2]
		const boolhS5FnOw = await CryptoSecureBankTokenlxSjVLI.approve.call(addressDPeYT6, uintYIAEwWf, {from: accounts[3]});
		const addressE8a4vT = await CryptoSecureBankTokenlxSjVLI.transferOwnership.call(addressk9CmDS, {from: accounts[2]});
//		await CryptoSecureBankTokenlxSjVLI.whenPaused.call({from: accounts[3]});
//		const addressdaOf0qZ = await CryptoSecureBankTokenlxSjVLI.removeBlackList.call(addresssg8yuTH, {from: accounts[2]});
//		await CryptoSecureBankTokenlxSjVLI.whenPaused.call({from: accounts[0]});

		assert.equal(boolhS5FnOw, true)
		await expect(CryptoSecureBankTokenlxSjVLI.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintq9cm515 = BigInt("897")
		const uints8UmxpA = BigInt("1448")
		const uinttGCUmMj = BigInt("253")
		const address30wiQu = accounts[4]
//		const uintYEyCaWo = await CryptoSecureBankTokennyceBE.setParams.call(uints8UmxpA, uintq9cm515, {from: accounts[1]});
//		const boolA1MgdzZ = await CryptoSecureBankTokennyceBE.approve.call(address30wiQu, uinttGCUmMj, {from: accounts[2]});

		await expect(CryptoSecureBankTokennyceBE.setParams.call(uints8UmxpA, uintq9cm515, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const addresshtmOmMx = accounts[3]
		const uintNVT99zV = BigInt("318")
		const addressKwOY32P = "0x0000000000000000000000000000000000000001"
		const addressSJD8Bqf = accounts[3]
		const addressHEZsl6 = await CryptoSecureBankTokennyceBE.removeBlackList.call(addresshtmOmMx, {from: accounts[1]});
		const boolUqCzxHy = await CryptoSecureBankTokennyceBE.approve.call(addressKwOY32P, uintNVT99zV, {from: accounts[0]});
		const uintFOQmyMu = await CryptoSecureBankTokennyceBE.balanceOf.call(addressSJD8Bqf, {from: accounts[3]});

		assert.equal(boolUqCzxHy, true)
		assert.equal(uintFOQmyMu, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintNpIVbad = BigInt("0")
		const addressBhJsbVf = accounts[5]
		const boolW23fBf7 = await CryptoSecureBankTokennyceBE.transfer.call(addressBhJsbVf, uintNpIVbad, {from: accounts[4]});

		assert.equal(boolW23fBf7, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintizqC2WY = BigInt("338")
		const uintJJosdtd = BigInt("157")
		const addressCfBqJXe = accounts[4]
		const boolSXsaJh8 = await CryptoSecureBankTokennyceBE.redeem.call(uintizqC2WY, {from: accounts[1]});
//		await CryptoSecureBankTokennyceBE.pause.call({from: accounts[0]});
//		const boolA1MgdzZ = await CryptoSecureBankTokennyceBE.approve.call(addressCfBqJXe, uintJJosdtd, {from: accounts[2]});

		assert.equal(boolSXsaJh8, true)
		await expect(CryptoSecureBankTokennyceBE.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennyceBE = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressHkqcoF = accounts[5]
		const uintIE3ie1x = BigInt("27")
		const addressHwg7Wlt = accounts[6]
		const boolUGpmcYY = await CryptoSecureBankTokennyceBE.deprecate.call(addressHkqcoF, {from: accounts[1]});
//		const boolW23fBf7 = await CryptoSecureBankTokennyceBE.transfer.call(addressHwg7Wlt, uintIE3ie1x, {from: accounts[4]});

		assert.equal(boolUGpmcYY, true)
		await expect(CryptoSecureBankTokennyceBE.transfer.call(addressHwg7Wlt, uintIE3ie1x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})