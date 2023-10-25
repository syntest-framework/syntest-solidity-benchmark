const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenPLPa47H = await MIMOToken.new({from: accounts[4]});
		const uintt6PTUP = BigInt("2044")
		const addressrSb4YHB = "0x0000000000000000000000000000000000000001"
		const addressE7R9D87 = accounts[1]
		const addressbltUbMA = accounts[3]
		const addressiOXuiLx = accounts[1]
		const addressdipL2Ip = accounts[0]
		const boolfaaLx2x = await MIMOTokenPLPa47H.transfer.call(addressrSb4YHB, uintt6PTUP, {from: accounts[4]});
		const uintOZXmqoB = await MIMOTokenPLPa47H.allowance.call(addressbltUbMA, addressE7R9D87, {from: accounts[4]});
		const uintBFqnFj8 = await MIMOTokenPLPa47H.allowance.call(addressdipL2Ip, addressiOXuiLx, {from: accounts[1]});

		await expect(MIMOTokenPLPa47H.transfer.call(addressrSb4YHB, uintt6PTUP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenVxWg0j7 = await MIMOToken.new({from: accounts[5]});
		const addressNxPfQLB = accounts[3]
		const addressE44wj2W = accounts[5]
		const addressO74wNun = accounts[3]
		const uintsF2ilYY = await MIMOTokenVxWg0j7.totalSupply.call({from: accounts[1]});
		const uintAb9wnjd = await MIMOTokenVxWg0j7.allowance.call(addressE44wj2W, addressNxPfQLB, {from: accounts[5]});
		const uintgvbXDDJ = await MIMOTokenVxWg0j7.balanceOf.call(addressO74wNun, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintAb9wnjd, BigInt("0"))
		assert.equal(uintgvbXDDJ, BigInt("0"))
		assert.equal(uintsF2ilYY, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenKAeICU2 = await MIMOToken.new({from: accounts[0]});
		const uintgaOagAR = BigInt("1763")
		const addresshUcwMyz = accounts[2]
		const uintQlKF6NB = BigInt("1316")
		const addressGP3BuCh = accounts[3]
		const boolUnEM3Or = await MIMOTokenKAeICU2.approve.call(addresshUcwMyz, uintgaOagAR, {from: accounts[1]});
		const boolYJc9eki = await MIMOTokenKAeICU2.transfer.call(addressGP3BuCh, uintQlKF6NB, {from: accounts[4]});

		assert.equal(boolUnEM3Or, true)
		await expect(MIMOTokenKAeICU2.transfer.call(addressGP3BuCh, uintQlKF6NB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokennucGIkk = await MIMOToken.new({from: accounts[3]});
		const uintqmpoVI4 = BigInt("388")
		const uintN8XnfE = BigInt("109")
		const uintz8anu5j = BigInt("346")
		const uint256IYfl4P = await MIMOTokennucGIkk.setFeeRate.call(uintqmpoVI4, {from: accounts[3]});
		const uint256tEcG0G9 = await MIMOTokennucGIkk.setFeeRate.call(uintN8XnfE, {from: accounts[4]});
		const uint256gLDomNm = await MIMOTokennucGIkk.setMinFee.call(uintz8anu5j, {from: accounts[0]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenAtADe3P = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintX8FRxUP = BigInt("833")
		const uintTxBq1T = BigInt("270")
		const addressYH5Ca0E = accounts[4]
		const uint256OssKtSj = await MIMOTokenAtADe3P.setFeeRate.call(uintX8FRxUP, {from: accounts[4]});
		const boolhg8gttF = await MIMOTokenAtADe3P.transfer.call(addressYH5Ca0E, uintTxBq1T, {from: accounts[3]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenpGnpqjy = await MIMOToken.new({from: accounts[4]});
		const uintsg9k0Pi = BigInt("1951")
		const uint256PxOYrKU = await MIMOTokenpGnpqjy.getFee.call(uintsg9k0Pi, {from: accounts[2]});
		const uintw9LVlDU = await MIMOTokenpGnpqjy.totalSupply.call({from: accounts[2]});
		const uintBlOztco = await MIMOTokenpGnpqjy.totalSupply.call({from: accounts[0]});
		const uintGMx61Cl = await MIMOTokenpGnpqjy.totalSupply.call({from: accounts[5]});

		assert.equal(uint256PxOYrKU, BigInt("50000000000000000"))
		assert.equal(uintBlOztco, BigInt("16000000000000000000000000"))
		assert.equal(uintGMx61Cl, BigInt("16000000000000000000000000"))
		assert.equal(uintw9LVlDU, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenZWxhiuD = await MIMOToken.new({from: accounts[0]});
		const addressq1wN6MU = "0x0000000000000000000000000000000000000001"
		const addressd2uNsUd = accounts[3]
		const addressitXnHTt = accounts[2]
		const uinta5y6dIs = BigInt("713")
		const addresseIR9CzE = accounts[1]
		const addressEx74X3W = accounts[5]
		const uintawZqceu = await MIMOTokenZWxhiuD.balanceOf.call(addressq1wN6MU, {from: accounts[0]});
		const uintVhRV7eG = await MIMOTokenZWxhiuD.allowance.call(addressitXnHTt, addressd2uNsUd, {from: accounts[1]});
		const uintzLXg1N = await MIMOTokenZWxhiuD.totalSupply.call({from: accounts[1]});
		const uintPVHURg7 = await MIMOTokenZWxhiuD.totalSupply.call({from: accounts[1]});
		const bool6lEuSs = await MIMOTokenZWxhiuD.transferFrom.call(addressEx74X3W, addresseIR9CzE, uinta5y6dIs, {from: accounts[5]});

		assert.equal(uintPVHURg7, BigInt("16000000000000000000000000"))
		assert.equal(uintVhRV7eG, BigInt("0"))
		assert.equal(uintawZqceu, BigInt("0"))
		assert.equal(uintzLXg1N, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenZWxhiuD.transferFrom.call(addressEx74X3W, addresseIR9CzE, uinta5y6dIs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenPLPa47H = await MIMOToken.new({from: accounts[4]});
		const uintsmULJPZ = BigInt("2058")
		const addressBSn45n = "0x0000000000000000000000000000000000000000"
		const addressLsnCWHp = accounts[1]
		const boolfaaLx2x = await MIMOTokenPLPa47H.transfer.call(addressBSn45n, uintsmULJPZ, {from: accounts[4]});
		const uintdHvnXNq = await MIMOTokenPLPa47H.balanceOf.call(addressLsnCWHp, {from: accounts[3]});

		await expect(MIMOTokenPLPa47H.transfer.call(addressBSn45n, uintsmULJPZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})