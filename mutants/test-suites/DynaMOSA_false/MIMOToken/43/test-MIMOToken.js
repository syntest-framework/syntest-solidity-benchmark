const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenVvFXvHj = await MIMOToken.new({from: accounts[4]});
		const uintQ7KPm9d = BigInt("1540")
		const addressMdW32bk = accounts[0]
		const uintF8M6Fu = BigInt("1871")
		const addressBFzBtLg = accounts[3]
		const uint256g6TnuVw = await MIMOTokenVvFXvHj.getFee.call(uintQ7KPm9d, {from: accounts[2]});
		const uintObNPb8k = await MIMOTokenVvFXvHj.balanceOf.call(addressMdW32bk, {from: accounts[3]});
		const booljLaoYmY = await MIMOTokenVvFXvHj.approve.call(addressBFzBtLg, uintF8M6Fu, {from: accounts[3]});

		assert.equal(booljLaoYmY, true)
		assert.equal(uint256g6TnuVw, BigInt("50000000000000000"))
		assert.equal(uintObNPb8k, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenf924OhS = await MIMOToken.new({from: accounts[3]});
		const uintNHQmeER = BigInt("785")
		const addressjm8Hctc = accounts[2]
		const uintq8ZC2pj = BigInt("422")
		const addressU2Fj1va = accounts[1]
		const addresspV08xkc = "0x0000000000000000000000000000000000000001"
//		const boolOihsq2t = await MIMOTokenf924OhS.transfer.call(addressjm8Hctc, uintNHQmeER, {from: accounts[3]});
//		const boolfqUi8D7 = await MIMOTokenf924OhS.transferFrom.call(addresspV08xkc, addressU2Fj1va, uintq8ZC2pj, {from: accounts[0]});

		await expect(MIMOTokenf924OhS.transfer.call(addressjm8Hctc, uintNHQmeER, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenDQh2NQ = await MIMOToken.new({from: accounts[0]});
		const uintkpVrbo6 = BigInt("1086")
		const uintjGg0xAZ = BigInt("1031")
		const uintkQ9Bol = BigInt("1432")
		const addressjytDTsb = accounts[0]
		const addressuFOsslo = accounts[4]
		const uint256Er76fI0 = await MIMOTokenDQh2NQ.setFeeRate.call(uintkpVrbo6, {from: accounts[2]});
		const uint256b9nxpRT = await MIMOTokenDQh2NQ.setFeeRate.call(uintjGg0xAZ, {from: accounts[2]});
//		const booludkyMc = await MIMOTokenDQh2NQ.transferFrom.call(addressuFOsslo, addressjytDTsb, uintkQ9Bol, {from: accounts[2]});

		await expect(MIMOTokenDQh2NQ.transferFrom.call(addressuFOsslo, addressjytDTsb, uintkQ9Bol, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenxo5Bcui = await MIMOToken.new({from: accounts[1]});
		const uinthb0qP7h = BigInt("507")
		const uintDsZlNS1 = BigInt("1918")
		const addressSJBfJcC = accounts[1]
		const addressxIBpJ6p = accounts[4]
		const uintjAjiAMz = BigInt("81")
		const addresslCF5uzm = accounts[3]
		const addressQlTRfD5 = accounts[2]
		const uint256csIKHLV = await MIMOTokenxo5Bcui.setFeeRate.call(uinthb0qP7h, {from: accounts[5]});
		const uint256gn7Flzs = await MIMOTokenxo5Bcui.setFeeRate.call(uintDsZlNS1, {from: accounts[0]});
		const uintUYjQasH = await MIMOTokenxo5Bcui.allowance.call(addressxIBpJ6p, addressSJBfJcC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolhzpjS7C = await MIMOTokenxo5Bcui.transferFrom.call(addressQlTRfD5, addresslCF5uzm, uintjAjiAMz, {from: accounts[2]});

		assert.equal(uintUYjQasH, BigInt("0"))
		await expect(MIMOTokenxo5Bcui.transferFrom.call(addressQlTRfD5, addresslCF5uzm, uintjAjiAMz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenJ5Sc9TF = await MIMOToken.new({from: accounts[0]});
		const uintpYyvvIK = BigInt("1721")
		const uintf6OnTq = BigInt("929")
		const uinttgxvvF = await MIMOTokenJ5Sc9TF.totalSupply.call({from: accounts[4]});
		const uint256oZsVf44 = await MIMOTokenJ5Sc9TF.getFee.call(uintpYyvvIK, {from: accounts[1]});
		const uintw1NPCyZ = await MIMOTokenJ5Sc9TF.totalSupply.call({from: accounts[5]});
		const uint256YKZXgRr = await MIMOTokenJ5Sc9TF.getFee.call(uintf6OnTq, {from: accounts[4]});

		assert.equal(uint256YKZXgRr, BigInt("50000000000000000"))
		assert.equal(uint256oZsVf44, BigInt("50000000000000000"))
		assert.equal(uinttgxvvF, BigInt("16000000000000000000000000"))
		assert.equal(uintw1NPCyZ, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenEbxHIsZ = await MIMOToken.new({from: accounts[3]});
		const uintU8mDP1L = BigInt("1799")
		const uintcyo6PxX = BigInt("1394")
		const addressuuFUtlI = accounts[1]
		const uintFVSgZSU = BigInt("606")
		const uint256ySpSuMG = await MIMOTokenEbxHIsZ.setMinFee.call(uintU8mDP1L, {from: accounts[4]});
//		const boolAvefpEp = await MIMOTokenEbxHIsZ.transfer.call(addressuuFUtlI, uintcyo6PxX, {from: accounts[5]});
//		const uint256UPyrdlx = await MIMOTokenEbxHIsZ.setFeeRate.call(uintFVSgZSU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MIMOTokenEbxHIsZ.transfer.call(addressuuFUtlI, uintcyo6PxX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})