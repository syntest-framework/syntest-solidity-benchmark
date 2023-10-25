const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeng7HmXnL = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintPGaVdc0 = BigInt("681")
		const addressw7bXBTR = accounts[0]
		const addressCAq0qXp = accounts[5]
		const uintfJ1Pw8 = BigInt("1573")
		const addressXVhyECg = accounts[1]
		const uintNXZJ5he = await CryptoSecureBankTokeng7HmXnL.onlyPayloadSize.call(uintPGaVdc0, {from: accounts[2]});
		const addresseR8q7YE = await CryptoSecureBankTokeng7HmXnL.removeBlackList.call(addressw7bXBTR, {from: accounts[0]});
		const addressuavbyxn = await CryptoSecureBankTokeng7HmXnL.setOwner2.call(addressCAq0qXp, {from: accounts[1]});
		const addressJeLgZmT = await CryptoSecureBankTokeng7HmXnL.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolyA60tmE = await CryptoSecureBankTokeng7HmXnL.transfer.call(addressXVhyECg, uintfJ1Pw8, {from: accounts[1]});

		await expect(CryptoSecureBankTokeng7HmXnL.onlyPayloadSize.call(uintPGaVdc0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHNQjXgO = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintD4WCjn = BigInt("933")
		const address4F2N9J = accounts[1]
		const uintln3uM1I = BigInt("1834")
		const addressc2udUkP = accounts[3]
		await CryptoSecureBankTokenHNQjXgO.pause.call({from: accounts[3]});
		const bool09x631 = await CryptoSecureBankTokenHNQjXgO.approve.call(address4F2N9J, uintD4WCjn, {from: accounts[4]});
		const boolQ5iQLe = await CryptoSecureBankTokenHNQjXgO.transfer.call(addressc2udUkP, uintln3uM1I, {from: accounts[4]});
		await CryptoSecureBankTokenHNQjXgO.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenHNQjXgO.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenPIURP5 = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressybg0kbp = accounts[5]
		const addressRyuThfW = accounts[5]
		const addressxs4KPaL = accounts[4]
		await CryptoSecureBankTokenPIURP5.unpause.call({from: accounts[0]});
		const boolHByybj = await CryptoSecureBankTokenPIURP5.getBlackListStatus.call(addressybg0kbp, {from: accounts[1]});
		const addressQJ8izd = await CryptoSecureBankTokenPIURP5.setOwner2.call(addressRyuThfW, {from: accounts[0]});
		await CryptoSecureBankTokenPIURP5.whenPaused.call({from: accounts[1]});
		const boolFPXttcM = await CryptoSecureBankTokenPIURP5.deprecate.call(addressxs4KPaL, {from: accounts[0]});

		await expect(CryptoSecureBankTokenPIURP5.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenObiro7i = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressl7weSpe = accounts[3]
		const uintwhdCYb = BigInt("786")
		const addressEV1zkK = await CryptoSecureBankTokenObiro7i.removeBlackList.call(addressl7weSpe, {from: accounts[0]});
		await CryptoSecureBankTokenObiro7i.whenPaused.call({from: accounts[4]});
		await CryptoSecureBankTokenObiro7i.whenNotPaused.call({from: accounts[5]});
		const uintgGbrQme = await CryptoSecureBankTokenObiro7i.onlyPayloadSize.call(uintwhdCYb, {from: accounts[0]});

		await expect(CryptoSecureBankTokenObiro7i.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentQ4RnMc = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressbLjc1GB = accounts[2]
		const addressRALMMBs = "0x0000000000000000000000000000000000000001"
		const addressjHwx2hV = accounts[2]
		const addressdjzQmlt = await CryptoSecureBankTokentQ4RnMc.transferOwnership.call(addressbLjc1GB, {from: accounts[1]});
		const addressMoCw9bs = await CryptoSecureBankTokentQ4RnMc.setOwner2.call(addressRALMMBs, {from: accounts[0]});
		const boolqWCioYc = await CryptoSecureBankTokentQ4RnMc.deprecate.call(addressjHwx2hV, {from: accounts[3]});
		await CryptoSecureBankTokentQ4RnMc.onlyOwner.call({from: accounts[5]});

		await expect(CryptoSecureBankTokentQ4RnMc.transferOwnership.call(addressbLjc1GB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennTpwEK = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyZUMbPa = BigInt("1042")
		const uintQAZZh75 = BigInt("84")
		const addressiNsPhl = accounts[3]
		const addressF7n0BeS = accounts[0]
		const addressrl0RP7R = accounts[1]
		const uintSzy8F8X = BigInt("1085")
		const addressy148s2t = accounts[1]
		const uintOzrBGA = await CryptoSecureBankTokennTpwEK.onlyPayloadSize.call(uintyZUMbPa, {from: accounts[2]});
		const booltRXC68W = await CryptoSecureBankTokennTpwEK.transfer.call(addressiNsPhl, uintQAZZh75, {from: accounts[3]});
		const addressnAs133j = await CryptoSecureBankTokennTpwEK.destroyBlackFunds.call(addressF7n0BeS, {from: accounts[3]});
		await CryptoSecureBankTokennTpwEK.whenNotPaused.call({from: accounts[1]});
		const boolwrf4yVF = await CryptoSecureBankTokennTpwEK.deprecate.call(addressrl0RP7R, {from: accounts[4]});
		const boole0vp0Mz = await CryptoSecureBankTokennTpwEK.approve.call(addressy148s2t, uintSzy8F8X, {from: accounts[3]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHNQjXgO = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresscjDZ5dh = accounts[0]
		const uintTc73chg = BigInt("1057")
		const uintqMyGSBg = BigInt("933")
		const addressvTRrW8p = accounts[1]
		const addressc4wsoLP = accounts[5]
		const uinthCjkWTk = BigInt("1834")
		const addressypSZ9TJ = accounts[3]
		const boolqSKYxSz = await CryptoSecureBankTokenHNQjXgO.getBlackListStatus.call(addresscjDZ5dh, {from: accounts[1]});
		const uintz5YpN5L = await CryptoSecureBankTokenHNQjXgO.onlyPayloadSize.call(uintTc73chg, {from: accounts[1]});
		await CryptoSecureBankTokenHNQjXgO.pause.call({from: accounts[3]});
		const bool09x631 = await CryptoSecureBankTokenHNQjXgO.approve.call(addressvTRrW8p, uintqMyGSBg, {from: accounts[4]});
		const addressk27NpG = await CryptoSecureBankTokenHNQjXgO.transferOwnership.call(addressc4wsoLP, {from: accounts[0]});
		const boolQ5iQLe = await CryptoSecureBankTokenHNQjXgO.transfer.call(addressypSZ9TJ, uinthCjkWTk, {from: accounts[4]});

		assert.equal(boolqSKYxSz, false)
		await expect(CryptoSecureBankTokenHNQjXgO.onlyPayloadSize.call(uintTc73chg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXGEbLuA = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressdqGkrU = accounts[0]
		const addressYbgVyeu = accounts[1]
		const uintTMppCkJ = await CryptoSecureBankTokenXGEbLuA.balanceOf.call(addressdqGkrU, {from: accounts[0]});
		const addressyRnNwTq = await CryptoSecureBankTokenXGEbLuA.setOwner2.call(addressYbgVyeu, {from: accounts[2]});
		await CryptoSecureBankTokenXGEbLuA.whenNotPaused.call({from: accounts[3]});

		assert.equal(uintTMppCkJ, BigInt("0"))
		await expect(CryptoSecureBankTokenXGEbLuA.setOwner2.call(addressYbgVyeu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHNQjXgO = await CryptoSecureBankToken.new({from: accounts[3]});
		const address0nrlAy = accounts[0]
		const addressU1i3KPp = accounts[4]
		const uintj4mNUrL = BigInt("901")
		const addresssIEWV2 = accounts[3]
		const uintaU9TM9B = await CryptoSecureBankTokenHNQjXgO.allowance.call(addressU1i3KPp, address0nrlAy, {from: accounts[4]});
		const bool09x631 = await CryptoSecureBankTokenHNQjXgO.approve.call(addresssIEWV2, uintj4mNUrL, {from: accounts[4]});
		await CryptoSecureBankTokenHNQjXgO.whenNotPaused.call({from: accounts[0]});

		assert.equal(bool09x631, true)
		assert.equal(uintaU9TM9B, BigInt("0"))
		await expect(CryptoSecureBankTokenHNQjXgO.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenh3k8l6F = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressy4Bt0yx = accounts[0]
		const addressXA4kgXu = accounts[2]
		const boolNm52yZI = await CryptoSecureBankTokenh3k8l6F.deprecate.call(addressy4Bt0yx, {from: accounts[4]});
		await CryptoSecureBankTokenh3k8l6F.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint7nLxoK = await CryptoSecureBankTokenh3k8l6F.balanceOf.call(addressXA4kgXu, {from: accounts[4]});
		await CryptoSecureBankTokenh3k8l6F.pause.call({from: accounts[5]});

		assert.equal(boolNm52yZI, true)
		await expect(CryptoSecureBankTokenh3k8l6F.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenTdQSKXP = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressRrpg5T1 = accounts[5]
		const addressSLVNWJf = accounts[4]
		const addressaWg9pCi = accounts[4]
		const addressgbWFEnv = accounts[1]
		const addressQuR1nqd = accounts[3]
		const addresslwRyr4d = await CryptoSecureBankTokenTdQSKXP.destroyBlackFunds.call(addressRrpg5T1, {from: accounts[1]});
		const uintCZcNzsz = await CryptoSecureBankTokenTdQSKXP.balanceOf.call(addressSLVNWJf, {from: "0x0000000000000000000000000000000000000001"});
		const uintRPY9R7k = await CryptoSecureBankTokenTdQSKXP.allowance.call(addressgbWFEnv, addressaWg9pCi, {from: accounts[4]});
		const boolW9pu58k = await CryptoSecureBankTokenTdQSKXP.getBlackListStatus.call(addressQuR1nqd, {from: accounts[2]});

		await expect(CryptoSecureBankTokenTdQSKXP.destroyBlackFunds.call(addressRrpg5T1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXGEbLuA = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressciiYFZs = accounts[4]
		const address5FyQhH = accounts[1]
		const addressjqF2vWU = accounts[1]
		const uintOHMtDc = BigInt("1355")
		const address7HqRa2 = accounts[2]
		const addressSlS04c5 = accounts[2]
		const uintd3SHy4f = await CryptoSecureBankTokenXGEbLuA.allowance.call(address5FyQhH, addressciiYFZs, {from: accounts[0]});
		const uintTMppCkJ = await CryptoSecureBankTokenXGEbLuA.balanceOf.call(addressjqF2vWU, {from: accounts[0]});
		const boolOyHiKhf = await CryptoSecureBankTokenXGEbLuA.transferFrom.call(addressSlS04c5, address7HqRa2, uintOHMtDc, {from: accounts[2]});

		assert.equal(uintTMppCkJ, BigInt("0"))
		assert.equal(uintd3SHy4f, BigInt("0"))
		await expect(CryptoSecureBankTokenXGEbLuA.transferFrom.call(addressSlS04c5, address7HqRa2, uintOHMtDc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHNQjXgO = await CryptoSecureBankToken.new({from: accounts[3]});
		const uint1E19sq = BigInt("882")
		const addressrPHNDvb = accounts[2]
		const uintqNyRpLj = BigInt("703")
		const bool09x631 = await CryptoSecureBankTokenHNQjXgO.approve.call(addressrPHNDvb, uint1E19sq, {from: accounts[4]});
		const boolPDaIH5 = await CryptoSecureBankTokenHNQjXgO.redeem.call(uintqNyRpLj, {from: accounts[3]});

		assert.equal(bool09x631, true)
		assert.equal(boolPDaIH5, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXGEbLuA = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressj8lx7yI = accounts[1]
		const addressSRGI3z9 = accounts[2]
		const uintTMppCkJ = await CryptoSecureBankTokenXGEbLuA.balanceOf.call(addressj8lx7yI, {from: accounts[0]});
		const addressFvZo6eB = await CryptoSecureBankTokenXGEbLuA.getOwner.call({from: accounts[4]});
		const boolbHQplWy = await CryptoSecureBankTokenXGEbLuA.deprecate.call(addressSRGI3z9, {from: accounts[0]});

		assert.equal(addressFvZo6eB, 0x4267FB62f8787652A21779011c6E09e8A6CB7C2d)
		assert.equal(uintTMppCkJ, BigInt("0"))
		await expect(CryptoSecureBankTokenXGEbLuA.deprecate.call(addressSRGI3z9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXGEbLuA = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresss81V5n = accounts[4]
		const address7dERZG = accounts[0]
		const addresssnacDTv = accounts[2]
		const uintd3SHy4f = await CryptoSecureBankTokenXGEbLuA.allowance.call(address7dERZG, addresss81V5n, {from: accounts[0]});
		const uintGRnMHIP = await CryptoSecureBankTokenXGEbLuA.totalSupply.call({from: accounts[0]});
		const uintTMppCkJ = await CryptoSecureBankTokenXGEbLuA.balanceOf.call(addresssnacDTv, {from: accounts[0]});

		assert.equal(uintGRnMHIP, BigInt("100000000000000000000000000"))
		assert.equal(uintTMppCkJ, BigInt("0"))
		assert.equal(uintd3SHy4f, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHNQjXgO = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintnCIEmWR = BigInt("901")
		const addressAWwEFv = accounts[3]
		const addressZDgw251 = accounts[0]
		const addresskeR1rso = accounts[3]
		const addressmimg6Ik = accounts[4]
		const uintoSWuWb = BigInt("1123")
		const addressiLEZNLy = accounts[3]
		const bool09x631 = await CryptoSecureBankTokenHNQjXgO.approve.call(addressAWwEFv, uintnCIEmWR, {from: accounts[4]});
		const uintyZyVgf2 = await CryptoSecureBankTokenHNQjXgO.allowance.call(addresskeR1rso, addressZDgw251, {from: accounts[1]});
		const uinteLCXVfq = await CryptoSecureBankTokenHNQjXgO.balanceOf.call(addressmimg6Ik, {from: accounts[0]});
		const boolfRmAKe9 = await CryptoSecureBankTokenHNQjXgO.transfer.call(addressiLEZNLy, uintoSWuWb, {from: accounts[3]});

		assert.equal(bool09x631, true)
		assert.equal(boolfRmAKe9, true)
		assert.equal(uinteLCXVfq, BigInt("0"))
		assert.equal(uintyZyVgf2, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHNQjXgO = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressAd3rSeE = accounts[2]
		const uintCREk5ab = BigInt("901")
		const addressrS13zl5 = accounts[3]
		const addressJmY3iQp = await CryptoSecureBankTokenHNQjXgO.transferOwnership.call(addressAd3rSeE, {from: accounts[3]});
		const bool09x631 = await CryptoSecureBankTokenHNQjXgO.approve.call(addressrS13zl5, uintCREk5ab, {from: accounts[4]});

		assert.equal(bool09x631, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenXGEbLuA = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressD0iDu3d = accounts[4]
		const addressI5DNJ4c = accounts[0]
		const addresshfIg9do = await CryptoSecureBankTokenXGEbLuA.addBlackList.call(addressD0iDu3d, {from: accounts[3]});
		const uintTMppCkJ = await CryptoSecureBankTokenXGEbLuA.balanceOf.call(addressI5DNJ4c, {from: accounts[0]});

		assert.equal(uintTMppCkJ, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHNQjXgO = await CryptoSecureBankToken.new({from: accounts[3]});
		const uinteFoGhPU = BigInt("895")
		const addressPlxioa9 = accounts[2]
		const uintUfJdfO = BigInt("142")
		const uintadOdSL = BigInt("149")
		const uintAIIYpxc = BigInt("126")
		const bool09x631 = await CryptoSecureBankTokenHNQjXgO.approve.call(addressPlxioa9, uinteFoGhPU, {from: accounts[4]});
		const uintdxP3B53 = await CryptoSecureBankTokenHNQjXgO.setParams.call(uintadOdSL, uintUfJdfO, {from: accounts[3]});
		const boolY6zEdLF = await CryptoSecureBankTokenHNQjXgO.redeem.call(uintAIIYpxc, {from: accounts[5]});

		assert.equal(bool09x631, true)
		await expect(CryptoSecureBankTokenHNQjXgO.setParams.call(uintadOdSL, uintUfJdfO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenHNQjXgO = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintim03MOl = BigInt("717")
		const addressoVBEnh0 = accounts[4]
		const addressCFgCHzD = accounts[1]
		const uintCCFr4T = BigInt("0")
		const addressDK7YBEF = accounts[2]
		const addresscH3mGq6 = accounts[1]
		const addressZV0ygAS = accounts[3]
		const boolfRmAKe9 = await CryptoSecureBankTokenHNQjXgO.transfer.call(addressoVBEnh0, uintim03MOl, {from: accounts[3]});
		const uintRGscQ0C = await CryptoSecureBankTokenHNQjXgO.balanceOf.call(addressCFgCHzD, {from: accounts[4]});
		const boolJoK5Lg = await CryptoSecureBankTokenHNQjXgO.transferFrom.call(addresscH3mGq6, addressDK7YBEF, uintCCFr4T, {from: accounts[4]});
		await CryptoSecureBankTokenHNQjXgO.whenPaused.call({from: accounts[1]});
		const uintDtVo0SU = await CryptoSecureBankTokenHNQjXgO.balanceOf.call(addressZV0ygAS, {from: accounts[2]});

		assert.equal(boolJoK5Lg, true)
		assert.equal(boolfRmAKe9, true)
		assert.equal(uintRGscQ0C, BigInt("0"))
		await expect(CryptoSecureBankTokenHNQjXgO.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})