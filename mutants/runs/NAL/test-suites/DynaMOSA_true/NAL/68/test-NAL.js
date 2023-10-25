const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const addresssE6tT2d = accounts[3]
		const uintRNdZKKU = BigInt("1211")
		const addresshTEhm9x = "0x0000000000000000000000000000000000000001"
		const addressUp75gTi = accounts[4]
		const uintDNurhVa = BigInt("552")
		const uinte0ZIU0q = BigInt("317")
		const addressvPN3ur9 = accounts[0]
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addresssE6tT2d, {from: accounts[0]});
		const boolSimacv = await NALanug4Nn.transferFrom.call(addressUp75gTi, addresshTEhm9x, uintRNdZKKU, {from: accounts[5]});
		const boolZC9DZrW = await NALanug4Nn.lock.call(addressvPN3ur9, uinte0ZIU0q, uintDNurhVa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(NALanug4Nn.transferFrom.call(addressUp75gTi, addresshTEhm9x, uintRNdZKKU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringyM0VPcM = "prNW9cRHi6gHZrBu2pcD3kIfqnS7Ck6CeEgUayCXPy3XPm8sOGlrZctZXpcjsGy7n4jgR1aW5RA8YA7mYFjLKy0pj2"
		const stringhml73g3 = "5AA7p"
		const uintPeLAEOk = BigInt("186")
		const NALGqThpX = await NAL.new(stringyM0VPcM, stringhml73g3, uintPeLAEOk, {from: accounts[5]});
		const uintEeSP9vg = BigInt("241")
		const addresss9jnvAd = accounts[4]
		const uintCPU4YWU = BigInt("1021")
		const addressAAi34tS = "0x0000000000000000000000000000000000000001"
		const addressSRt1O1s = accounts[5]
		const uintVGqvoNs = BigInt("445")
		const addressEARC8B = accounts[2]
		const addressHGFKxeq = accounts[3]
		const addressk8HNPmg = accounts[5]
		const boolNOTkKI1 = await NALGqThpX.transfer.call(addresss9jnvAd, uintEeSP9vg, {from: accounts[2]});
		const boolzowk9om = await NALGqThpX.transferFrom.call(addressSRt1O1s, addressAAi34tS, uintCPU4YWU, {from: accounts[4]});
		await NALGqThpX.whenNotPaused.call({from: accounts[3]});
		const boolSXKNXL = await NALGqThpX.transferFrom.call(addressHGFKxeq, addressEARC8B, uintVGqvoNs, {from: accounts[0]});
		const addressFwdGtMU = await NALGqThpX.notFrozen.call(addressk8HNPmg, {from: accounts[1]});
		await NALGqThpX.renounceAdmin.call({from: accounts[4]});
	});

	it('test for NAL', async () => {
		const NALE16Fqzy = await NAL.new({from: accounts[4]});
		const uintb3dtrVG = BigInt("917")
		const uintkW8DscZ = BigInt("591")
		const addressyapwAb = accounts[3]
		const addressc5CTatg = accounts[3]
		await NALE16Fqzy.onlyAdmin.call({from: accounts[5]});
		const boolXV3I6e5 = await NALE16Fqzy.lock.call(addressyapwAb, uintkW8DscZ, uintb3dtrVG, {from: accounts[2]});
		const boolGKzC4ZC = await NALE16Fqzy.isAdmin.call(addressc5CTatg, {from: accounts[5]});

		await expect(NALE16Fqzy.onlyAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALMCFYOcz = await NAL.new({from: accounts[3]});
		const uinttlZAow9 = BigInt("1807")
		const addresscJCmeex = "0x0000000000000000000000000000000000000001"
		const uintd3cxyOY = BigInt("1663")
		const addressyCYqhb5 = accounts[5]
		const uintzxNkc2f = BigInt("95")
		const addressnJXzoy1 = accounts[3]
		const boolrLuClHm = await NALMCFYOcz.increaseAllowance.call(addresscJCmeex, uinttlZAow9, {from: accounts[2]});
		await NALMCFYOcz.pause.call({from: accounts[3]});
		const addressr0RLM5h = await NALMCFYOcz.burnFrom.call(addressyCYqhb5, uintd3cxyOY, {from: accounts[3]});
		const boolKk23gx5 = await NALMCFYOcz.decreaseAllowance.call(addressnJXzoy1, uintzxNkc2f, {from: accounts[0]});

		assert.equal(boolrLuClHm, true)
		await expect(NALMCFYOcz.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const addressUQjg2l = accounts[3]
		const addresszDIfTwd = accounts[1]
		const uintfoWgGSV = BigInt("1211")
		const addressvXksGzz = "0x0000000000000000000000000000000000000002"
		const addresso2tp6G = accounts[4]
		const uinta06u4J0 = BigInt("552")
		const uintpUfMSh8 = BigInt("317")
		const addressJH4s9WB = accounts[0]
		const uintYqFhQVB = BigInt("676")
		const addressnFYpYC = accounts[0]
		const addresszIIqui2 = accounts[4]
		const addressJbLasRM = "0x0000000000000000000000000000000000000001"
		const uintGaY6RXA = BigInt("843")
		const addressTmon40c = accounts[2]
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addressUQjg2l, {from: accounts[0]});
		const boolWzYzYoR = await NALanug4Nn.freezeAccount.call(addresszDIfTwd, {from: accounts[3]});
		const boolSimacv = await NALanug4Nn.transferFrom.call(addresso2tp6G, addressvXksGzz, uintfoWgGSV, {from: accounts[5]});
		const boolZC9DZrW = await NALanug4Nn.lock.call(addressJH4s9WB, uintpUfMSh8, uinta06u4J0, {from: "0x0000000000000000000000000000000000000001"});
		const boolGjNERkh = await NALanug4Nn.transferFrom.call(addresszIIqui2, addressnFYpYC, uintYqFhQVB, {from: accounts[5]});
		const addressuykp8eG = await NALanug4Nn.notFrozen.call(addressJbLasRM, {from: accounts[4]});
		const boolmRxx8aW = await NALanug4Nn.decreaseAllowance.call(addressTmon40c, uintGaY6RXA, {from: accounts[2]});

		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(NALanug4Nn.freezeAccount.call(addresszDIfTwd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALMCFYOcz = await NAL.new({from: accounts[3]});
		const uintEKPIGQP = BigInt("1807")
		const addressrp3gZDr = "0x0000000000000000000000000000000000000001"
		const uintGoVvuge = BigInt("1680")
		const addressPKbIqou = accounts[4]
		const uintI7fs4lO = BigInt("1663")
		const addressrxPowMd = accounts[5]
		const uint8qXEF8 = BigInt("99")
		const address60a1c4 = accounts[3]
		const boolrLuClHm = await NALMCFYOcz.increaseAllowance.call(addressrp3gZDr, uintEKPIGQP, {from: accounts[2]});
		const boolwVevZ1z = await NALMCFYOcz.transfer.call(addressPKbIqou, uintGoVvuge, {from: accounts[5]});
		const uint8lAWE4oV = await NALMCFYOcz.decimals.call({from: accounts[1]});
		await NALMCFYOcz.pause.call({from: accounts[3]});
		const addressr0RLM5h = await NALMCFYOcz.burnFrom.call(addressrxPowMd, uintI7fs4lO, {from: accounts[3]});
		const boolKk23gx5 = await NALMCFYOcz.decreaseAllowance.call(address60a1c4, uint8qXEF8, {from: accounts[0]});

		assert.equal(boolrLuClHm, true)
		await expect(NALMCFYOcz.transfer.call(addressPKbIqou, uintGoVvuge, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const uinteJyPSVR = BigInt("1999")
		const addressvDRRNa = accounts[2]
		const addressooXmUzp = accounts[3]
		const uintkAFmUq = BigInt("1211")
		const addressnndOL2D = "0x0000000000000000000000000000000000000001"
		const addresszYmswV4 = accounts[4]
		const uintTblFyX = BigInt("552")
		const uintKx2FPzT = BigInt("317")
		const addressMCPhbTu = accounts[0]
		const booljqHPWn = await NALanug4Nn.decreaseAllowance.call(addressvDRRNa, uinteJyPSVR, {from: accounts[3]});
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addressooXmUzp, {from: accounts[0]});
		const boolSimacv = await NALanug4Nn.transferFrom.call(addresszYmswV4, addressnndOL2D, uintkAFmUq, {from: accounts[5]});
		const boolZC9DZrW = await NALanug4Nn.lock.call(addressMCPhbTu, uintKx2FPzT, uintTblFyX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALanug4Nn.decreaseAllowance.call(addressvDRRNa, uinteJyPSVR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const addresskvRwDeQ = accounts[3]
		const uintOkgMBrE = BigInt("1631")
		const uintCQ9LcqM = BigInt("1876")
		const addresscXKEdS = accounts[5]
		const uinta8wbYgL = BigInt("1211")
		const addressYFBy6mZ = "0x0000000000000000000000000000000000000001"
		const addressYEUlvZx = accounts[4]
		const uintfubvBwd = BigInt("552")
		const uintu0lQ4iu = BigInt("317")
		const addressTWnBlq = accounts[1]
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addresskvRwDeQ, {from: accounts[0]});
		const stringOIi4dlm = await NALanug4Nn.symbol.call({from: accounts[1]});
		const boolTCF3TU = await NALanug4Nn.lock.call(addresscXKEdS, uintCQ9LcqM, uintOkgMBrE, {from: accounts[0]});
		const boolSimacv = await NALanug4Nn.transferFrom.call(addressYEUlvZx, addressYFBy6mZ, uinta8wbYgL, {from: accounts[5]});
		const boolZC9DZrW = await NALanug4Nn.lock.call(addressTWnBlq, uintu0lQ4iu, uintfubvBwd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringOIi4dlm, "NAL")
		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(NALanug4Nn.lock.call(addresscXKEdS, uintCQ9LcqM, uintOkgMBrE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwYIEOgQ = await NAL.new({from: accounts[2]});
		const addresssWCvKbz = accounts[4]
		const uintlrbjXPC = BigInt("2046")
		const addressM24tfiU = accounts[3]
		const addressayG7VbF = accounts[0]
		const uint8cOdcPmo = await NALwYIEOgQ.decimals.call({from: accounts[2]});
		const booldD3j8cV = await NALwYIEOgQ.isOwner.call(addresssWCvKbz, {from: accounts[4]});
		const boolwhtbZt = await NALwYIEOgQ.transferFrom.call(addressayG7VbF, addressM24tfiU, uintlrbjXPC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldD3j8cV, false)
		assert.equal(uint8cOdcPmo, BigInt("18"))
		await expect(NALwYIEOgQ.transferFrom.call(addressayG7VbF, addressM24tfiU, uintlrbjXPC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwYIEOgQ = await NAL.new({from: accounts[2]});
		const addressofYBOIl = accounts[5]
		const uintZdCPk7H = BigInt("873")
		const addressf8Cppba = accounts[3]
		const uintqRcm7aq = BigInt("2046")
		const addressKacTZX = accounts[3]
		const addressJO3fVME = accounts[0]
		const uint8cOdcPmo = await NALwYIEOgQ.decimals.call({from: accounts[2]});
		const booldD3j8cV = await NALwYIEOgQ.isOwner.call(addressofYBOIl, {from: accounts[4]});
		const boolqnvs36y = await NALwYIEOgQ.approve.call(addressf8Cppba, uintZdCPk7H, {from: accounts[1]});
		const boolwhtbZt = await NALwYIEOgQ.transferFrom.call(addressJO3fVME, addressKacTZX, uintqRcm7aq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldD3j8cV, false)
		assert.equal(boolqnvs36y, true)
		assert.equal(uint8cOdcPmo, BigInt("18"))
		await expect(NALwYIEOgQ.transferFrom.call(addressJO3fVME, addressKacTZX, uintqRcm7aq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUPOkUT8 = await NAL.new({from: accounts[1]});
		const uintMX6c1Pw = BigInt("1706")
		const addressZn7J6xe = accounts[0]
		const addressvOkSqTs = accounts[3]
		const stringhyVKCL6 = await NALUPOkUT8.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await NALUPOkUT8.renounceAdmin.call({from: accounts[4]});
		const booloMOrf5O = await NALUPOkUT8.transferFrom.call(addressvOkSqTs, addressZn7J6xe, uintMX6c1Pw, {from: accounts[4]});

		assert.equal(stringhyVKCL6, "NAL")
		await expect(NALUPOkUT8.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const uintGqo4WJN = BigInt("739")
		const addressFJ7sQVw = "0x0000000000000000000000000000000000000001"
		const addressIhOdzLn = accounts[3]
		const uintgbkXQWo = BigInt("481")
		const addressCkF4CZ9 = accounts[0]
		const uintAfAndhD = BigInt("1211")
		const addressiUpYxi3 = "0x0000000000000000000000000000000000000001"
		const addressQAygvGG = accounts[4]
		const boolWK3hdHh = await NALanug4Nn.transfer.call(addressFJ7sQVw, uintGqo4WJN, {from: accounts[0]});
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addressIhOdzLn, {from: accounts[0]});
		const boolTnOrv2Z = await NALanug4Nn.approve.call(addressCkF4CZ9, uintgbkXQWo, {from: accounts[5]});
		const boolSimacv = await NALanug4Nn.transferFrom.call(addressQAygvGG, addressiUpYxi3, uintAfAndhD, {from: accounts[5]});

		assert.equal(boolTnOrv2Z, true)
		assert.equal(boolWK3hdHh, true)
		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(NALanug4Nn.transferFrom.call(addressQAygvGG, addressiUpYxi3, uintAfAndhD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const addressNgCF1tf = accounts[3]
		const uintwmKIPsd = BigInt("598")
		const addressnXmwjwN = accounts[4]
		const uintjLIGkUB = BigInt("1461")
		const addressbApFxdJ = accounts[4]
		const uintAG63z0C = BigInt("552")
		const uintLHZEMSP = BigInt("317")
		const addressHH1sX4Z = accounts[0]
		const boolQiYUsZm = await NALanug4Nn.isOwner.call(addressNgCF1tf, {from: accounts[3]});
		const boolbtnQ0Vn = await NALanug4Nn.paused.call({from: accounts[4]});
		const uint256TvYKJap = await NALanug4Nn.burn.call(uintwmKIPsd, {from: accounts[2]});
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addressnXmwjwN, {from: accounts[0]});
		const boolr2ZJR24 = await NALanug4Nn.transfer.call(addressbApFxdJ, uintjLIGkUB, {from: accounts[1]});
		const boolZC9DZrW = await NALanug4Nn.lock.call(addressHH1sX4Z, uintLHZEMSP, uintAG63z0C, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pVm0jib = await NALanug4Nn.totalSupply.call({from: accounts[3]});

		assert.equal(boolQiYUsZm, false)
		assert.equal(boolbtnQ0Vn, false)
		await expect(NALanug4Nn.burn.call(uintwmKIPsd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const addressnoialxr = accounts[3]
		const uintM8j5JD = BigInt("221")
		const addressA09yTds = accounts[1]
		const uintOhPaNLi = BigInt("1211")
		const addressflaFm4Y = "0x0000000000000000000000000000000000000001"
		const addressHSOcduH = accounts[4]
		const uintKa8jCXo = BigInt("552")
		const uintsc3l4j = BigInt("317")
		const addressqdjbRRX = accounts[1]
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addressnoialxr, {from: accounts[0]});
		const boolj8LX5nL = await NALanug4Nn.unlock.call(addressA09yTds, uintM8j5JD, {from: accounts[0]});
		const boolSimacv = await NALanug4Nn.transferFrom.call(addressHSOcduH, addressflaFm4Y, uintOhPaNLi, {from: accounts[5]});
		const boolZC9DZrW = await NALanug4Nn.lock.call(addressqdjbRRX, uintsc3l4j, uintKa8jCXo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256s72Qbyf, BigInt("0"))
		await expect(NALanug4Nn.unlock.call(addressA09yTds, uintM8j5JD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const addressqjcHVKC = accounts[1]
		const addresstyGw5NB = accounts[4]
		const uintye97o5I = BigInt("1392")
		const addressNgooRBr = accounts[2]
		const boolstx8c9 = await NALanug4Nn.freezeAccount.call(addressqjcHVKC, {from: accounts[0]});
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addresstyGw5NB, {from: accounts[0]});
		const boolMBbbE7g = await NALanug4Nn.increaseAllowance.call(addressNgooRBr, uintye97o5I, {from: accounts[0]});

		assert.equal(boolMBbbE7g, true)
		assert.equal(boolstx8c9, true)
		assert.equal(uint256s72Qbyf, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALUPOkUT8 = await NAL.new({from: accounts[1]});
		const stringrr2DBCS = await NALUPOkUT8.name.call({from: "0x0000000000000000000000000000000000000001"});
		await NALUPOkUT8.renounceAdmin.call({from: accounts[4]});

		assert.equal(stringrr2DBCS, "Personal Token")
		await expect(NALUPOkUT8.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALXDglUQS = await NAL.new({from: accounts[4]});
		const addressepjXJgg = accounts[3]
		const addresslykSOxr = accounts[0]
		const uintup1cJbM = BigInt("1659")
		const addresspbZMegc = accounts[3]
		const address4duqLR = accounts[4]
		const uintEqhz8Kf = BigInt("193")
		const addressxqgSQX = accounts[5]
		const uintClfQZn5 = BigInt("1374")
		const addressfngBMHG = accounts[1]
		const uint256VqcXtr = await NALXDglUQS.allowance.call(addresslykSOxr, addressepjXJgg, {from: accounts[4]});
		const boolx09Rpnw = await NALXDglUQS.transferFrom.call(address4duqLR, addresspbZMegc, uintup1cJbM, {from: accounts[4]});
		const boolSfFFbVC = await NALXDglUQS.transfer.call(addressxqgSQX, uintEqhz8Kf, {from: accounts[3]});
		const boolHu6RmI = await NALXDglUQS.increaseAllowance.call(addressfngBMHG, uintClfQZn5, {from: accounts[1]});
		await NALXDglUQS.renounceAdmin.call({from: accounts[2]});

		assert.equal(uint256VqcXtr, BigInt("0"))
		await expect(NALXDglUQS.transferFrom.call(address4duqLR, addresspbZMegc, uintup1cJbM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const uintliBjkh5 = BigInt("1211")
		const addressK5Y1kZv = "0x0000000000000000000000000000000000000001"
		const addressJpOSYqG = accounts[5]
		const uint256iH6gaeo = await NALanug4Nn.totalSupply.call({from: accounts[4]});
		const boolSimacv = await NALanug4Nn.transferFrom.call(addressJpOSYqG, addressK5Y1kZv, uintliBjkh5, {from: accounts[5]});

		assert.equal(uint256iH6gaeo, BigInt("2000000000000000000000000000"))
		await expect(NALanug4Nn.transferFrom.call(addressJpOSYqG, addressK5Y1kZv, uintliBjkh5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const addressHnXpAzb = accounts[5]
		const addressCrEWWJO = accounts[4]
		const addressd6d8S6d = accounts[4]
		const address0ZjlzT = await NALanug4Nn.upgradeTo.call(addressHnXpAzb, {from: accounts[0]});
		const uint256PaQnz0h = await NALanug4Nn.balanceOf.call(addressCrEWWJO, {from: accounts[0]});
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addressd6d8S6d, {from: accounts[0]});

		assert.equal(uint256PaQnz0h, BigInt("0"))
		assert.equal(uint256s72Qbyf, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const addressEP3KQXJ = accounts[1]
		const uintcW7rmfT = BigInt("552")
		const uintKka2IQ1 = BigInt("317")
		const addressJaHs3Rv = accounts[2]
		const boolGHZVaIk = await NALanug4Nn.unfreezeAccount.call(addressEP3KQXJ, {from: accounts[0]});
		const boolZC9DZrW = await NALanug4Nn.lock.call(addressJaHs3Rv, uintKka2IQ1, uintcW7rmfT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALanug4Nn.unfreezeAccount.call(addressEP3KQXJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALE65ENi9 = await NAL.new({from: accounts[4]});
		const addresssY76247 = accounts[5]
		const addressxMlNtpE = accounts[0]
		const addressIbuGPRE = accounts[0]
		const addressolo5x7l = await NALE65ENi9.addAdmin.call(addresssY76247, {from: accounts[4]});
		await NALE65ENi9.whenNotPaused.call({from: accounts[2]});
		const uint256B3JuhWF = await NALE65ENi9.allowance.call(addressIbuGPRE, addressxMlNtpE, {from: accounts[2]});
		const uint8aOwUccH = await NALE65ENi9.decimals.call({from: accounts[3]});

		await expect(NALE65ENi9.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const uintVNJwiWX = BigInt("1067")
		const addressMD4etKR = accounts[0]
		const addressFJu1MTq = accounts[4]
		const addressZNaFnpp = accounts[4]
		const boolHh95f4D = await NALanug4Nn.increaseAllowance.call(addressMD4etKR, uintVNJwiWX, {from: accounts[2]});
		const addressRoNhn8S = await NALanug4Nn.removeAdmin.call(addressFJu1MTq, {from: accounts[0]});
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addressZNaFnpp, {from: accounts[0]});

		assert.equal(boolHh95f4D, true)
		await expect(NALanug4Nn.removeAdmin.call(addressFJu1MTq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const uintAqXbjvR = BigInt("1676")
		const addressRg4BOk4 = accounts[2]
		const addressgeqIkij = accounts[0]
		const addressBUmxqi3 = accounts[4]
		const boolSQScTnD = await NALanug4Nn.increaseAllowance.call(addressRg4BOk4, uintAqXbjvR, {from: accounts[5]});
		const boolIU6rdYl = await NALanug4Nn.isOwner.call(addressgeqIkij, {from: accounts[0]});
		const uint256s72Qbyf = await NALanug4Nn.balanceOf.call(addressBUmxqi3, {from: accounts[0]});

		assert.equal(boolIU6rdYl, true)
		assert.equal(boolSQScTnD, true)
		assert.equal(uint256s72Qbyf, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALQZu9XXO = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintI82akTT = BigInt("652")
		const addressZcrhhwb = accounts[3]
		const addressaQ7OtVp = accounts[0]
		const addresswy7nGVu = accounts[4]
		const addressf9jZFWn = accounts[0]
		const addressFO94ckA = accounts[3]
		const boolqFctqhR = await NALQZu9XXO.transferFrom.call(addressaQ7OtVp, addressZcrhhwb, uintI82akTT, {from: accounts[2]});
		const uint256tq5gvA = await NALQZu9XXO.allowance.call(addressf9jZFWn, addresswy7nGVu, {from: accounts[2]});
		const uint8phvzKz0 = await NALQZu9XXO.decimals.call({from: accounts[5]});
		const addressoR9cVNd = await NALQZu9XXO.addAdmin.call(addressFO94ckA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const addressAXNTdSu = accounts[2]
		await NALanug4Nn.renounceAdmin.call({from: accounts[0]});
		await NALanug4Nn.unpause.call({from: accounts[0]});
		const boolGHZVaIk = await NALanug4Nn.unfreezeAccount.call(addressAXNTdSu, {from: accounts[0]});

		await expect(NALanug4Nn.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALanug4Nn = await NAL.new({from: accounts[0]});
		const uinte2RzF5j = BigInt("632")
		const uintBHqJtr1 = BigInt("1021")
		const addressmmIXQZ0 = accounts[0]
		const uintfgRCCCr = BigInt("1501")
		const addresspwtb8Hg = accounts[3]
		const addressNoGxGKq = accounts[1]
		const addresshyiaC31 = accounts[1]
		const boolUYItxTm = await NALanug4Nn.lock.call(addressmmIXQZ0, uintBHqJtr1, uinte2RzF5j, {from: accounts[0]});
		const boolLFsGK7P = await NALanug4Nn.transferFrom.call(addressNoGxGKq, addresspwtb8Hg, uintfgRCCCr, {from: accounts[3]});
		const boolGHZVaIk = await NALanug4Nn.unfreezeAccount.call(addresshyiaC31, {from: accounts[0]});

		assert.equal(boolUYItxTm, true)
		await expect(NALanug4Nn.transferFrom.call(addressNoGxGKq, addresspwtb8Hg, uintfgRCCCr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})