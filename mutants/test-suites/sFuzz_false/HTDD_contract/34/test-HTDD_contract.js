const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractZKWepLm = await HTDD_contract.new({from: accounts[0]});
		const uintUms9Gon = BigInt("39")
		const addressoxvPnUv = accounts[3]
		const uinttev7Cqm = BigInt("1177")
		const addressZEKwvDk = accounts[2]
		const uintgrPlmlD = BigInt("1250")
		const addressknE77ZW = accounts[0]
		const uintNVZO5kZ = BigInt("474")
		const address4Y44rW = accounts[4]
		const booldReCWzd = await HTDD_contractZKWepLm.approve.call(addressoxvPnUv, uintUms9Gon, {from: accounts[2]});
		const boolcgNhPQ4 = await HTDD_contractZKWepLm.approve.call(addressZEKwvDk, uinttev7Cqm, {from: accounts[1]});
		const boolpr7m9Cm = await HTDD_contractZKWepLm.transfer.call(addressknE77ZW, uintgrPlmlD, {from: accounts[0]});
//		const boolcj53kKu = await HTDD_contractZKWepLm.transfer.call(address4Y44rW, uintNVZO5kZ, {from: accounts[1]});

		assert.equal(boolcgNhPQ4, true)
		assert.equal(booldReCWzd, true)
		assert.equal(boolpr7m9Cm, true)
		await expect(HTDD_contractZKWepLm.transfer.call(address4Y44rW, uintNVZO5kZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractm8ow5wV = await HTDD_contract.new({from: accounts[4]});
		const uinthMG3bOG = BigInt("1208")
		const addresskNPEyvQ = accounts[2]
		const addressZekI78w = accounts[5]
		const uintEJRvRWs = BigInt("1756")
		const addresshO1z4FS = accounts[1]
		const addresslWBcS00 = accounts[4]
//		const boolJtcD8KY = await HTDD_contractm8ow5wV.transferFrom.call(addressZekI78w, addresskNPEyvQ, uinthMG3bOG, {from: accounts[5]});
//		const boolSeAYkS = await HTDD_contractm8ow5wV.transferFrom.call(addresslWBcS00, addresshO1z4FS, uintEJRvRWs, {from: accounts[0]});

		await expect(HTDD_contractm8ow5wV.transferFrom.call(addressZekI78w, addresskNPEyvQ, uinthMG3bOG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractDD44gV = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const addressft74JVX = "0x0000000000000000000000000000000000000001"
		const addressbqGQMhD = accounts[3]
		const uintQSVBrqa = BigInt("1122")
		const addressGgVt4y = accounts[5]
		const uintxYEXWK1 = BigInt("259")
		const addressu9h8T4o = accounts[0]
		const addressGa4Qse = accounts[1]
		const addressrU8cFwE = "0x0000000000000000000000000000000000000001"
		const uintlUDklS1 = BigInt("781")
		const addressDMT0WO = accounts[4]
		const uintlcSQpI = BigInt("1194")
		const addressG5yfyN = accounts[3]
		const addressNFEub6 = accounts[3]
		const uint256FRnXrd3 = await HTDD_contractDD44gV.allowance.call(addressbqGQMhD, addressft74JVX, {from: accounts[0]});
		const boolRGNEUn3 = await HTDD_contractDD44gV.transfer.call(addressGgVt4y, uintQSVBrqa, {from: accounts[3]});
		const boolTBjgOT8 = await HTDD_contractDD44gV.approve.call(addressu9h8T4o, uintxYEXWK1, {from: accounts[2]});
		const uint256xlXD0xp = await HTDD_contractDD44gV.allowance.call(addressrU8cFwE, addressGa4Qse, {from: accounts[1]});
		const boolj02Xeep = await HTDD_contractDD44gV.approve.call(addressDMT0WO, uintlUDklS1, {from: accounts[2]});
		const boolPXQipkX = await HTDD_contractDD44gV.transferFrom.call(addressNFEub6, addressG5yfyN, uintlcSQpI, {from: accounts[4]});
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractFt4mTxb = await HTDD_contract.new({from: accounts[4]});
		const addressIUxqNBw = accounts[2]
		const addresstF3tomk = accounts[3]
		const addressMXMfRn = accounts[1]
		const addressGngGS1i = accounts[1]
		const addresssAVr0Yl = accounts[4]
		const addressDGLOhZ0 = accounts[1]
		const uintji1pUo3 = BigInt("66")
		const addressGPWoDHy = accounts[3]
		const uintlUh6tbZ = BigInt("1228")
		const addresshAbRj03 = accounts[5]
		const addressGkPUPrz = accounts[1]
		const uint256JLSoHNF = await HTDD_contractFt4mTxb.allowance.call(addresstF3tomk, addressIUxqNBw, {from: accounts[1]});
		const uint256BIRHCQ = await HTDD_contractFt4mTxb.allowance.call(addressGngGS1i, addressMXMfRn, {from: accounts[1]});
		const uint256kG3nU9d = await HTDD_contractFt4mTxb.allowance.call(addressDGLOhZ0, addresssAVr0Yl, {from: accounts[4]});
//		const boolF3KGlc4 = await HTDD_contractFt4mTxb.transfer.call(addressGPWoDHy, uintji1pUo3, {from: accounts[0]});
//		const boolcHFS39S = await HTDD_contractFt4mTxb.transferFrom.call(addressGkPUPrz, addresshAbRj03, uintlUh6tbZ, {from: accounts[0]});

		assert.equal(uint256BIRHCQ, BigInt("0"))
		assert.equal(uint256JLSoHNF, BigInt("0"))
		assert.equal(uint256kG3nU9d, BigInt("0"))
		await expect(HTDD_contractFt4mTxb.transfer.call(addressGPWoDHy, uintji1pUo3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})