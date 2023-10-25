const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RIThIcntH = await RIT.new({from: accounts[2]});
		const uintXT2im1f = BigInt("1118")
		const address2dlEvM = accounts[4]
		const addresss6xqJV = accounts[4]
		const uintskqSLgY = BigInt("134")
		const addresspab0uqD = accounts[0]
		const uintCB2iVJt = BigInt("1812")
		const addressFHnW6l = accounts[1]
		const addressEv12p5B = accounts[1]
		const addressLFUX1kB = accounts[2]
		const uintaZ4yO8I = BigInt("2006")
		const addressh4R33Wt = accounts[0]
		const addresscjlHeY8 = accounts[2]
		const uint8c1karJ2 = await RIThIcntH.decimals.call({from: accounts[1]});
//		const boolcvDTQU = await RIThIcntH.transferFrom.call(addresss6xqJV, address2dlEvM, uintXT2im1f, {from: accounts[4]});
//		const boolqmxcgQ = await RIThIcntH.approve.call(addresspab0uqD, uintskqSLgY, {from: accounts[1]});
//		const boolZIC3cqb = await RIThIcntH.transferFrom.call(addressEv12p5B, addressFHnW6l, uintCB2iVJt, {from: accounts[0]});
//		const uint256q41HvgI = await RIThIcntH.balanceOf.call(addressLFUX1kB, {from: accounts[0]});
//		const boolO9x8e0p = await RIThIcntH.transferFrom.call(addresscjlHeY8, addressh4R33Wt, uintaZ4yO8I, {from: accounts[0]});

		assert.equal(uint8c1karJ2, BigInt("18"))
		await expect(RIThIcntH.transferFrom.call(addresss6xqJV, address2dlEvM, uintXT2im1f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZhKa8E = await RIT.new({from: accounts[3]});
		const uintubOBvTq = BigInt("1906")
		const uintEzL2GcP = BigInt("450")
		const addressL4aEvt = accounts[3]
		const addressndz3kHF = "0x0000000000000000000000000000000000000001"
		const uintx9V6K7l = BigInt("1052")
		const addressMDUiNxV = accounts[5]
		const uint8MXKwiL2 = await RITZhKa8E.decimals.call({from: accounts[4]});
//		const uint256bYbSH5P = await RITZhKa8E._burn.call(uintubOBvTq, {from: accounts[0]});
//		const string0y2B9q = await RITZhKa8E.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolUO94IdP = await RITZhKa8E.transferFrom.call(addressndz3kHF, addressL4aEvt, uintEzL2GcP, {from: accounts[4]});
//		const boolTnGiqYu = await RITZhKa8E.approve.call(addressMDUiNxV, uintx9V6K7l, {from: accounts[1]});

		assert.equal(uint8MXKwiL2, BigInt("18"))
		await expect(RITZhKa8E._burn.call(uintubOBvTq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITzM8xbfg = await RIT.new({from: accounts[2]});
		const addressHE9W8aQ = accounts[1]
		const uintCbJjDHU = BigInt("553")
		const addressK0kNcIb = accounts[1]
		const uintqhGYW7U = BigInt("1968")
		const addresswu2OhjA = accounts[3]
		const uint256JKt41jf = await RITzM8xbfg.balanceOf.call(addressHE9W8aQ, {from: accounts[4]});
		const boolqNcI5uJ = await RITzM8xbfg.increaseAllowance.call(addressK0kNcIb, uintCbJjDHU, {from: accounts[3]});
//		const boollMpCPfX = await RITzM8xbfg.decreaseAllowance.call(addresswu2OhjA, uintqhGYW7U, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolqNcI5uJ, true)
		assert.equal(uint256JKt41jf, BigInt("0"))
		await expect(RITzM8xbfg.decreaseAllowance.call(addresswu2OhjA, uintqhGYW7U, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITS684P8 = await RIT.new({from: accounts[0]});
		const addressgquLgvT = accounts[5]
		const addressleKC8Bh = accounts[2]
		const uint256Mxbyj9S = await RITS684P8.allowance.call(addressleKC8Bh, addressgquLgvT, {from: accounts[3]});
		const uint8HKZBYrQ = await RITS684P8.decimals.call({from: accounts[1]});
		const uint8g5ASWeW = await RITS684P8.decimals.call({from: accounts[4]});

		assert.equal(uint256Mxbyj9S, BigInt("0"))
		assert.equal(uint8HKZBYrQ, BigInt("18"))
		assert.equal(uint8g5ASWeW, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITEgFekz9 = await RIT.new({from: accounts[4]});
		const uintmr6aPn1 = BigInt("244")
		const addresspg82tTf = accounts[2]
		const stringPBEAWMh = await RITEgFekz9.symbol.call({from: accounts[3]});
		const uint256yeP1Ka = await RITEgFekz9.totalSupply.call({from: accounts[5]});
//		const bool3UJOKe = await RITEgFekz9.transfer.call(addresspg82tTf, uintmr6aPn1, {from: accounts[1]});
//		const uint8sA55tap = await RITEgFekz9.decimals.call({from: accounts[0]});

		assert.equal(stringPBEAWMh, "RIT 2.0")
		assert.equal(uint256yeP1Ka, BigInt("500000000000000000000000000"))
		await expect(RITEgFekz9.transfer.call(addresspg82tTf, uintmr6aPn1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITweOdhBg = await RIT.new({from: accounts[1]});
		const uintBoCYUPh = BigInt("1240")
		const addresshgFziwF = "0x0000000000000000000000000000000000000001"
		const uintqeq5l1 = BigInt("64")
		const addressE7YiJH = accounts[4]
		const uint256lvDBXwL = await RITweOdhBg.totalSupply.call({from: accounts[2]});
		const boolX4oLYey = await RITweOdhBg.approve.call(addresshgFziwF, uintBoCYUPh, {from: accounts[3]});
//		const boolmaW6bU = await RITweOdhBg.transfer.call(addressE7YiJH, uintqeq5l1, {from: accounts[1]});

		assert.equal(boolX4oLYey, true)
		assert.equal(uint256lvDBXwL, BigInt("500000000000000000000000000"))
		await expect(RITweOdhBg.transfer.call(addressE7YiJH, uintqeq5l1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITzM8xbfg = await RIT.new({from: accounts[2]});
		const address27VqLp = accounts[1]
		const uintDmmcXgl = BigInt("553")
		const addressAgPxskn = accounts[1]
		const uintDSWkAwo = BigInt("1968")
		const addressaFDrg76 = accounts[3]
		const stringiewlQaY = await RITzM8xbfg.name.call({from: accounts[0]});
		const uint256JKt41jf = await RITzM8xbfg.balanceOf.call(address27VqLp, {from: accounts[4]});
		const boolqNcI5uJ = await RITzM8xbfg.increaseAllowance.call(addressAgPxskn, uintDmmcXgl, {from: accounts[3]});
//		const boollMpCPfX = await RITzM8xbfg.decreaseAllowance.call(addressaFDrg76, uintDSWkAwo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolqNcI5uJ, true)
		assert.equal(stringiewlQaY, "Real Estate Investment Token")
		assert.equal(uint256JKt41jf, BigInt("0"))
		await expect(RITzM8xbfg.decreaseAllowance.call(addressaFDrg76, uintDSWkAwo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITA2o0N5T = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressH539CLB = accounts[3]
		const addressnlecn9 = "0x0000000000000000000000000000000000000001"
		const addressTIBFc3b = accounts[0]
		const addresszYc58w7 = accounts[3]
		const stringjNztrhI = await RITA2o0N5T.name.call({from: accounts[4]});
		const uint256jTwyaC = await RITA2o0N5T.balanceOf.call(addressH539CLB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eC6J4na = await RITA2o0N5T.balanceOf.call(addressnlecn9, {from: accounts[2]});
		const uint256EqzHOXy = await RITA2o0N5T.allowance.call(addresszYc58w7, addressTIBFc3b, {from: "0x0000000000000000000000000000000000000001"});
	});
})