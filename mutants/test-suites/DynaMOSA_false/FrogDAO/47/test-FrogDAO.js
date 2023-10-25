const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAObcWFL72 = await FrogDAO.new({from: accounts[4]});
		const uintINszLVU = BigInt("719")
		const addresszBVxDpY = accounts[3]
		const uintMRCOnhl = BigInt("1054")
		const addressCkZo3T = accounts[4]
		const uintEFfedTm = BigInt("1208")
		const uintWn22yfn = BigInt("344")
		const addressw5NfScb = accounts[0]
		const addressSdoVup5 = accounts[3]
		const uintvcnRCIq = BigInt("1753")
		const uintWtEXKlX = BigInt("51")
		const boolaZetEiW = await FrogDAObcWFL72.approve.call(addresszBVxDpY, uintINszLVU, {from: accounts[1]});
		const boolJ6VWz4a = await FrogDAObcWFL72.approve.call(addressCkZo3T, uintMRCOnhl, {from: accounts[2]});
		const uintPADJ3gY = await FrogDAObcWFL72.safeAdd.call(uintWn22yfn, uintEFfedTm, {from: accounts[1]});
		const uintllsKSGJ = await FrogDAObcWFL72.allowance.call(addressSdoVup5, addressw5NfScb, {from: accounts[0]});
//		const uintYP1eUn = await FrogDAObcWFL72.safeSub.call(uintWtEXKlX, uintvcnRCIq, {from: accounts[4]});

		assert.equal(boolJ6VWz4a, true)
		assert.equal(boolaZetEiW, true)
		assert.equal(uintPADJ3gY, BigInt("1552"))
		assert.equal(uintllsKSGJ, BigInt("0"))
		await expect(FrogDAObcWFL72.safeSub.call(uintWtEXKlX, uintvcnRCIq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOAX7qKcW = await FrogDAO.new({from: accounts[0]});
		const uintfF627Pa = BigInt("20")
		const addressV5nlrXQ = accounts[5]
		const addressqfp0RqN = accounts[2]
		const addresszOkJ4cH = accounts[3]
		const uintVIZ7EEz = BigInt("2014")
		const uintlYQQCnS = BigInt("416")
		const uintDBKbbvx = BigInt("2011")
		const uintZZwGQb = BigInt("969")
//		const booluP4BoYU = await FrogDAOAX7qKcW.transfer.call(addressV5nlrXQ, uintfF627Pa, {from: accounts[2]});
//		const uintwHMvgjf = await FrogDAOAX7qKcW.allowance.call(addresszOkJ4cH, addressqfp0RqN, {from: accounts[1]});
//		const uintOPkHFmW = await FrogDAOAX7qKcW.safeDiv.call(uintlYQQCnS, uintVIZ7EEz, {from: accounts[0]});
//		const uintY5MWVnr = await FrogDAOAX7qKcW.totalSupply.call({from: accounts[4]});
//		const uintp2MBNYB = await FrogDAOAX7qKcW.safeDiv.call(uintZZwGQb, uintDBKbbvx, {from: accounts[4]});

		await expect(FrogDAOAX7qKcW.transfer.call(addressV5nlrXQ, uintfF627Pa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOcJB66sI = await FrogDAO.new({from: accounts[0]});
		const uintMWYEh0K = BigInt("1812")
		const addressU9gR6LD = accounts[2]
		const addresss0rEgWj = accounts[4]
		const uintmp8Qvpj = BigInt("1510")
		const addresskajheC = "0x0000000000000000000000000000000000000001"
		const addressFXg6K3b = accounts[0]
		const addressFcFmHtc = accounts[5]
//		const boolLc3UEet = await FrogDAOcJB66sI.transferFrom.call(addresss0rEgWj, addressU9gR6LD, uintMWYEh0K, {from: accounts[1]});
//		const uintH5QoNpu = await FrogDAOcJB66sI.totalSupply.call({from: accounts[4]});
//		const boolIxNmPg6 = await FrogDAOcJB66sI.approve.call(addresskajheC, uintmp8Qvpj, {from: accounts[5]});
//		const uintUSAOf3p = await FrogDAOcJB66sI.allowance.call(addressFcFmHtc, addressFXg6K3b, {from: "0x0000000000000000000000000000000000000001"});
//		const uintDUmQJ1S = await FrogDAOcJB66sI.totalSupply.call({from: accounts[0]});

		await expect(FrogDAOcJB66sI.transferFrom.call(addresss0rEgWj, addressU9gR6LD, uintMWYEh0K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOYZmSjvK = await FrogDAO.new({from: accounts[2]});
		const uintldiSNAf = BigInt("1597")
		const uintovn5jcC = BigInt("1140")
		const uinthxF0872 = BigInt("644")
		const uintAv5xGrr = BigInt("50")
		const uintfzjLbHy = BigInt("856")
		const addressi9Z8Vlk = accounts[1]
		const uintsikUnsB = BigInt("624")
		const uintlN3Mb0M = BigInt("232")
		const uintfrFjw3t = BigInt("1054")
		const addressXHkiwSo = accounts[2]
		const uintHvFttf = await FrogDAOYZmSjvK.safeDiv.call(uintovn5jcC, uintldiSNAf, {from: accounts[0]});
		const uintyxUGBzf = await FrogDAOYZmSjvK.safeMul.call(uintAv5xGrr, uinthxF0872, {from: accounts[3]});
		const boolAaQ6fbE = await FrogDAOYZmSjvK.approve.call(addressi9Z8Vlk, uintfzjLbHy, {from: accounts[1]});
		const uintV67cy72 = await FrogDAOYZmSjvK.totalSupply.call({from: accounts[5]});
		const uintYh3e24S = await FrogDAOYZmSjvK.safeDiv.call(uintlN3Mb0M, uintsikUnsB, {from: accounts[1]});
		const bool4UOZWT = await FrogDAOYZmSjvK.approve.call(addressXHkiwSo, uintfrFjw3t, {from: accounts[1]});

		assert.equal(bool4UOZWT, true)
		assert.equal(boolAaQ6fbE, true)
		assert.equal(uintHvFttf, BigInt("0"))
		assert.equal(uintV67cy72, BigInt("1000000000000000000000000"))
		assert.equal(uintYh3e24S, BigInt("0"))
		assert.equal(uintyxUGBzf, BigInt("32200"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOrcmc2CF = await FrogDAO.new({from: accounts[2]});
		const addressK9S3GFD = accounts[0]
		const addressVHyoaDs = accounts[4]
		const uintNAcIyr8 = BigInt("111")
		const addressUXW8flK = accounts[5]
		const uinti9QJZJ = await FrogDAOrcmc2CF.balanceOf.call(addressK9S3GFD, {from: accounts[1]});
		const uintyOzEC9P = await FrogDAOrcmc2CF.balanceOf.call(addressVHyoaDs, {from: accounts[2]});
//		const boolzjhhwFZ = await FrogDAOrcmc2CF.transfer.call(addressUXW8flK, uintNAcIyr8, {from: accounts[4]});

		assert.equal(uinti9QJZJ, BigInt("0"))
		assert.equal(uintyOzEC9P, BigInt("0"))
		await expect(FrogDAOrcmc2CF.transfer.call(addressUXW8flK, uintNAcIyr8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOeTG4QT = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiHVlakR = "0x0000000000000000000000000000000000000001"
		const uintt5bT3s = BigInt("501")
		const addressZZRuAAS = accounts[4]
		const uintBB25XlV = BigInt("85")
		const uintwr7Dplo = BigInt("864")
		const uintOr6ATp4 = BigInt("147")
		const uintx7L5P3g = BigInt("845")
		const uintM05H2Kc = BigInt("13")
		const addresstlwLTx7 = "0x0000000000000000000000000000000000000001"
		const uintWvFqVWL = await FrogDAOeTG4QT.balanceOf.call(addressiHVlakR, {from: accounts[5]});
		const booloVNwtj = await FrogDAOeTG4QT.approve.call(addressZZRuAAS, uintt5bT3s, {from: accounts[4]});
		const uintTqc1L1A = await FrogDAOeTG4QT.safeAdd.call(uintwr7Dplo, uintBB25XlV, {from: accounts[1]});
		const uinthFantdM = await FrogDAOeTG4QT.safeMul.call(uintx7L5P3g, uintOr6ATp4, {from: accounts[4]});
		const boolUHAQwQS = await FrogDAOeTG4QT.approve.call(addresstlwLTx7, uintM05H2Kc, {from: accounts[3]});
	});
})