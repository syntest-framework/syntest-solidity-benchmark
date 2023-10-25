const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenwewVgnJ = await ThriftToken.new({from: accounts[1]});
		const uintI5JuKzH = BigInt("286")
		const addresseSl3F5Y = accounts[3]
		const addresszp2ToC1 = accounts[3]
		const uint1Dvofl = BigInt("1683")
		const addressiW8QKMX = accounts[2]
		const uintwCahjXz = BigInt("1067")
		const addressq7D9kmi = accounts[2]
		const boolvlhmLuP = await ThriftTokenwewVgnJ.approve.call(addresseSl3F5Y, uintI5JuKzH, {from: accounts[0]});
//		const addresstdSGFuj = await ThriftTokenwewVgnJ.transferOwnership.call(addresszp2ToC1, {from: accounts[4]});
//		const boolHa2nGso = await ThriftTokenwewVgnJ.decreaseApproval.call(addressiW8QKMX, uint1Dvofl, {from: accounts[3]});
//		const boolaE824n = await ThriftTokenwewVgnJ.approve.call(addressq7D9kmi, uintwCahjXz, {from: accounts[0]});

		assert.equal(boolvlhmLuP, true)
		await expect(ThriftTokenwewVgnJ.transferOwnership.call(addresszp2ToC1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenMvb5rYC = await ThriftToken.new({from: accounts[2]});
		const addressgqAPx7f = accounts[4]
		const addressVA1Ii8y = accounts[1]
		const addressTMzWLee = accounts[3]
		const uintBJ17Jck = BigInt("920")
		const addressiigbarv = accounts[3]
		const addressF6nsLSn = accounts[0]
		const uint2568VSn8f = await ThriftTokenMvb5rYC.balanceOf.call(addressgqAPx7f, {from: accounts[2]});
		const uint256DtsUibU = await ThriftTokenMvb5rYC.allowance.call(addressTMzWLee, addressVA1Ii8y, {from: accounts[3]});
//		const booldHQzR4t = await ThriftTokenMvb5rYC.transfer.call(addressiigbarv, uintBJ17Jck, {from: accounts[0]});
//		const uint256IwyJzPN = await ThriftTokenMvb5rYC.transferableTokens.call(addressF6nsLSn, {from: accounts[1]});

		assert.equal(uint2568VSn8f, BigInt("0"))
		assert.equal(uint256DtsUibU, BigInt("0"))
		await expect(ThriftTokenMvb5rYC.transfer.call(addressiigbarv, uintBJ17Jck, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenuk5rVv1 = await ThriftToken.new({from: accounts[1]});
		const uintWLNrQ52 = BigInt("1225")
		const addressQQA2CZS = accounts[3]
		const addressz3phez0 = accounts[2]
		const uintMBrGRiU = BigInt("295")
		const addressk8I2mP = accounts[2]
//		const boolCEjD8NZ = await ThriftTokenuk5rVv1.transferFrom.call(addressz3phez0, addressQQA2CZS, uintWLNrQ52, {from: accounts[0]});
//		const boolmH19zh = await ThriftTokenuk5rVv1.decreaseApproval.call(addressk8I2mP, uintMBrGRiU, {from: accounts[3]});

		await expect(ThriftTokenuk5rVv1.transferFrom.call(addressz3phez0, addressQQA2CZS, uintWLNrQ52, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenazEFZMR = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressD2wONC6 = accounts[3]
		const addressk9qPsVM = accounts[2]
		const uintia6tA1 = BigInt("565")
		const addressrDsrwKH = accounts[2]
		const addressm4LpitT = accounts[3]
		const addressCWXO8Zl = accounts[4]
		const addresstMfzp3t = await ThriftTokenazEFZMR.transferOwnership.call(addressD2wONC6, {from: accounts[2]});
		const uint256IsU4Mmy = await ThriftTokenazEFZMR.balanceOf.call(addressk9qPsVM, {from: accounts[3]});
		const boolOjrL2MR = await ThriftTokenazEFZMR.decreaseApproval.call(addressrDsrwKH, uintia6tA1, {from: accounts[2]});
		const uint256bKAPoUY = await ThriftTokenazEFZMR.allowance.call(addressCWXO8Zl, addressm4LpitT, {from: accounts[5]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenC2c1EA7 = await ThriftToken.new({from: accounts[5]});
		const uintwrzQDDN = BigInt("403")
		const addressJiIJ8N = accounts[0]
		const addresslSmPnnC = accounts[1]
		const uintyBu0APj = BigInt("1104")
		const addressz2lntlq = accounts[0]
		const uintGZxVt7p = BigInt("1323")
		const addresspXmiCGQ = accounts[2]
		const uinthaE26jM = BigInt("176")
		const addressElBWoJN = accounts[0]
		const booltvPWgGH = await ThriftTokenC2c1EA7.decreaseApproval.call(addressJiIJ8N, uintwrzQDDN, {from: accounts[2]});
//		const addressgwUV0ed = await ThriftTokenC2c1EA7.transferOwnership.call(addresslSmPnnC, {from: accounts[1]});
//		const boolDDPLcEO = await ThriftTokenC2c1EA7.decreaseApproval.call(addressz2lntlq, uintyBu0APj, {from: accounts[2]});
//		const booldJ0Fztj = await ThriftTokenC2c1EA7.approve.call(addresspXmiCGQ, uintGZxVt7p, {from: accounts[3]});
//		const boolpjQVr1M = await ThriftTokenC2c1EA7.increaseApproval.call(addressElBWoJN, uinthaE26jM, {from: accounts[1]});

		assert.equal(booltvPWgGH, true)
		await expect(ThriftTokenC2c1EA7.transferOwnership.call(addresslSmPnnC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenx0Zp4M4 = await ThriftToken.new({from: accounts[2]});
		const uinthsFB2jv = BigInt("1186")
		const addressDpgBflP = accounts[3]
		const uintfy6Dl5L = BigInt("1342")
		const addressrHOBrdb = accounts[2]
		const addressGxsMPm6 = accounts[0]
		const uintgNiYHM9 = BigInt("47")
		const addressDK3QXXf = accounts[3]
		const addressiU54jx = accounts[0]
		const addressjkPOw45 = accounts[3]
		const uintUgcGsxb = BigInt("1029")
		const addressdwhpdU5 = "0x0000000000000000000000000000000000000001"
		const boolc1iYYPf = await ThriftTokenx0Zp4M4.increaseApproval.call(addressDpgBflP, uinthsFB2jv, {from: accounts[4]});
		const boolihs0djA = await ThriftTokenx0Zp4M4.approve.call(addressrHOBrdb, uintfy6Dl5L, {from: accounts[1]});
		const addressjoVnLJd = await ThriftTokenx0Zp4M4.transferOwnership.call(addressGxsMPm6, {from: accounts[2]});
//		const boolZYg4mfz = await ThriftTokenx0Zp4M4.transferFrom.call(addressiU54jx, addressDK3QXXf, uintgNiYHM9, {from: accounts[1]});
//		const uint256cxstNtX = await ThriftTokenx0Zp4M4.balanceOf.call(addressjkPOw45, {from: accounts[5]});
//		const boolR0q9hTy = await ThriftTokenx0Zp4M4.transfer.call(addressdwhpdU5, uintUgcGsxb, {from: accounts[4]});

		assert.equal(boolc1iYYPf, true)
		assert.equal(boolihs0djA, true)
		await expect(ThriftTokenx0Zp4M4.transferFrom.call(addressiU54jx, addressDK3QXXf, uintgNiYHM9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})