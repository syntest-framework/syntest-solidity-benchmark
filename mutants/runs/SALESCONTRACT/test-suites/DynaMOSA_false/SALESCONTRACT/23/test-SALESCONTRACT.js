const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTeM9xBaJ = await SALESCONTRACT.new({from: accounts[2]});
		const uintjps66pk = BigInt("1169")
		const addressYfqsGNt = accounts[1]
		const uintUCVn4Gb = BigInt("1718")
		const addressQnfZy8 = accounts[4]
		const uintBLlD0R = BigInt("1663")
		await SALESCONTRACTeM9xBaJ.clearTokens.call({from: accounts[3]});
		const addressZ0lIT74 = await SALESCONTRACTeM9xBaJ._setSalesPool.call(addressYfqsGNt, uintjps66pk, {from: accounts[4]});
		const addressLvRdjMk = await SALESCONTRACTeM9xBaJ._setSalesPool.call(addressQnfZy8, uintUCVn4Gb, {from: accounts[3]});
		const uintRETbzt1 = await SALESCONTRACTeM9xBaJ._setStage.call(uintBLlD0R, {from: accounts[0]});

		await expect(SALESCONTRACTeM9xBaJ.clearTokens.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTgZCF0I = await SALESCONTRACT.new({from: accounts[3]});
		const addressQZa1n0i = accounts[2]
		const uintcwZqVx = BigInt("711")
		const addressiNTtslJ = accounts[5]
		const uintrLtfNid = BigInt("1550")
		const addressmipnLwZ = accounts[3]
		const uintPMHmzU = BigInt("1547")
		await SALESCONTRACTgZCF0I.ff.call({from: accounts[2]});
		const addressqIyevtf = await SALESCONTRACTgZCF0I.setToken.call(addressQZa1n0i, {from: accounts[1]});
		const addresseDCUxyF = await SALESCONTRACTgZCF0I._setSalesPool.call(addressiNTtslJ, uintcwZqVx, {from: accounts[0]});
		const addresshJXgAEa = await SALESCONTRACTgZCF0I._setSalesPool.call(addressmipnLwZ, uintrLtfNid, {from: accounts[2]});
		const uintBhsCKKT = await SALESCONTRACTgZCF0I._setStage.call(uintPMHmzU, {from: accounts[0]});

		await expect(SALESCONTRACTgZCF0I.ff.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTj0wvbtj = await SALESCONTRACT.new({from: accounts[4]});
		const addressW8Fxll = accounts[1]
		const addressFHueNIk = accounts[3]
		const addressofGW2r6 = accounts[5]
		const uintfodS6wE = BigInt("2000")
		const uintZxDFzFw = BigInt("177")
		const boolhc4e9Kf = await SALESCONTRACTj0wvbtj.tokenSale.call(addressW8Fxll, {from: accounts[4]});
		const boolPwcuxea = await SALESCONTRACTj0wvbtj.tokenSale.call(addressFHueNIk, {from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTj0wvbtj.ff.call({from: accounts[4]});
		const boolaTpDJMu = await SALESCONTRACTj0wvbtj.tokenSale.call(addressofGW2r6, {from: accounts[4]});
		const uintQEDmX5a = await SALESCONTRACTj0wvbtj._setStage.call(uintfodS6wE, {from: accounts[0]});
		const uintqaGMuJK = await SALESCONTRACTj0wvbtj._setStage.call(uintZxDFzFw, {from: accounts[3]});

		await expect(SALESCONTRACTj0wvbtj.tokenSale.call(addressW8Fxll, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpvUPQoT = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOICMMxf = accounts[1]
		const boolVQop5a4 = await SALESCONTRACTpvUPQoT.tokenSale.call(addressOICMMxf, {from: accounts[5]});
		await SALESCONTRACTpvUPQoT.clearTokens.call({from: accounts[5]});
		await SALESCONTRACTpvUPQoT.clearETH.call({from: accounts[0]});
		await SALESCONTRACTpvUPQoT.ff.call({from: accounts[1]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTZKdSzCF = await SALESCONTRACT.new({from: accounts[1]});
		const addressXgY4YTk = accounts[4]
		const uintc6FHmNP = BigInt("1928")
		const addresss1j5S3h = accounts[4]
		const addressUG5b1Y = await SALESCONTRACTZKdSzCF.setToken.call(addressXgY4YTk, {from: accounts[1]});
		await SALESCONTRACTZKdSzCF.clearETH.call({from: accounts[1]});
		await SALESCONTRACTZKdSzCF.clearTokens.call({from: accounts[4]});
		const addressdG6tum8 = await SALESCONTRACTZKdSzCF._setSalesPool.call(addresss1j5S3h, uintc6FHmNP, {from: accounts[1]});

		await expect(SALESCONTRACTZKdSzCF.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTO2dQBuM = await SALESCONTRACT.new({from: accounts[0]});
		const addressaa6DEn = accounts[1]
		const addressFkOpLX = accounts[0]
		await SALESCONTRACTO2dQBuM.clearTokens.call({from: accounts[0]});
		await SALESCONTRACTO2dQBuM.ff.call({from: "0x0000000000000000000000000000000000000001"});
		const boolBwhqg3 = await SALESCONTRACTO2dQBuM.tokenSale.call(addressaa6DEn, {from: accounts[1]});
		const addressJPvqwoE = await SALESCONTRACTO2dQBuM.setToken.call(addressFkOpLX, {from: accounts[1]});
		await SALESCONTRACTO2dQBuM.clearETH.call({from: accounts[0]});

		await expect(SALESCONTRACTO2dQBuM.clearTokens.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTYa0PvG1 = await SALESCONTRACT.new({from: accounts[3]});
		const uintOuSu3Tk = BigInt("176")
		const addressQK36TLX = accounts[3]
		const addressl0FiSn = await SALESCONTRACTYa0PvG1._setSalesPool.call(addressQK36TLX, uintOuSu3Tk, {from: accounts[3]});
		await SALESCONTRACTYa0PvG1.clearETH.call({from: accounts[3]});
		await SALESCONTRACTYa0PvG1.ff.call({from: accounts[2]});
		await SALESCONTRACTYa0PvG1.clearTokens.call({from: accounts[3]});

		await expect(SALESCONTRACTYa0PvG1.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTryPcjQ = await SALESCONTRACT.new({from: accounts[3]});
		const uintDuSLYQd = BigInt("846")
		const addressT7H4iew = "0x0000000000000000000000000000000000000002"
		const addressmbC556N = accounts[4]
		const uintAX92Wt1 = await SALESCONTRACTryPcjQ._setStage.call(uintDuSLYQd, {from: accounts[3]});
		const boolxWMeMMb = await SALESCONTRACTryPcjQ.tokenSale.call(addressT7H4iew, {from: accounts[5]});
		const addressBoKTohY = await SALESCONTRACTryPcjQ.setToken.call(addressmbC556N, {from: accounts[2]});

		await expect(SALESCONTRACTryPcjQ.tokenSale.call(addressT7H4iew, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})