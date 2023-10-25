const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOVgj4T1P = await FrogDAO.new({from: accounts[1]});
		const uintASsWYrP = BigInt("832")
		const addressoXkpWak = accounts[3]
		const uintkSw3KZ0 = BigInt("1631")
		const uint5g4ZW2 = BigInt("1771")
		const uintUYR00IP = BigInt("1081")
		const addressbt4Id6C = accounts[4]
		const boolAfIBHW = await FrogDAOVgj4T1P.transfer.call(addressoXkpWak, uintASsWYrP, {from: accounts[0]});
		const uintYGVaNds = await FrogDAOVgj4T1P.safeSub.call(uint5g4ZW2, uintkSw3KZ0, {from: accounts[3]});
		const boolRKguNi1 = await FrogDAOVgj4T1P.approve.call(addressbt4Id6C, uintUYR00IP, {from: accounts[0]});

		await expect(FrogDAOVgj4T1P.transfer.call(addressoXkpWak, uintASsWYrP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOEopIUrU = await FrogDAO.new({from: accounts[2]});
		const uintGTZBVlv = BigInt("1214")
		const addressrcIVmlV = accounts[2]
		const uintC5Eg9X = BigInt("147")
		const uinti2yQEQ = BigInt("1261")
		const uintzbRDQO3 = BigInt("1953")
		const uintdC8Ctax = BigInt("938")
		const uintqWvmPNd = BigInt("717")
		const uintNLfktqq = BigInt("545")
		const boolDUfQehj = await FrogDAOEopIUrU.approve.call(addressrcIVmlV, uintGTZBVlv, {from: accounts[3]});
		const uintut5IOUn = await FrogDAOEopIUrU.safeSub.call(uinti2yQEQ, uintC5Eg9X, {from: accounts[4]});
		const uintlr8x1p3 = await FrogDAOEopIUrU.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintvzk9UnR = await FrogDAOEopIUrU.safeDiv.call(uintdC8Ctax, uintzbRDQO3, {from: accounts[2]});
		const uintK0fDHoQ = await FrogDAOEopIUrU.safeMul.call(uintNLfktqq, uintqWvmPNd, {from: accounts[2]});

		assert.equal(boolDUfQehj, true)
		assert.equal(uintK0fDHoQ, BigInt("390765"))
		assert.equal(uintlr8x1p3, BigInt("1000000000000000000000000"))
		assert.equal(uintut5IOUn, BigInt("1114"))
		assert.equal(uintvzk9UnR, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOB6G7cSF = await FrogDAO.new({from: accounts[0]});
		const addressvPTPJxh = accounts[2]
		const addressGalWIc3 = accounts[5]
		const addresskguXJXy = accounts[5]
		const addressKxwtJSQ = accounts[2]
		const uintYMF4r9X = await FrogDAOB6G7cSF.allowance.call(addressGalWIc3, addressvPTPJxh, {from: accounts[5]});
		const uintgtI62Xt = await FrogDAOB6G7cSF.balanceOf.call(addresskguXJXy, {from: accounts[2]});
		const uintDOT5oiH = await FrogDAOB6G7cSF.balanceOf.call(addressKxwtJSQ, {from: accounts[4]});

		assert.equal(uintDOT5oiH, BigInt("0"))
		assert.equal(uintYMF4r9X, BigInt("0"))
		assert.equal(uintgtI62Xt, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOcr5j876 = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintP1594B1 = BigInt("1657")
		const address0zNHOY = accounts[1]
		const addressjVXYxV = accounts[5]
		const uintqGDfcB1 = BigInt("964")
		const addressScVPC1k = accounts[2]
		const addresswhqATG6 = accounts[3]
		const addressDQRcQAM = accounts[4]
		const addresscLi6uU = accounts[1]
		const addressmMz08YV = accounts[1]
		const bool8tynC7 = await FrogDAOcr5j876.transfer.call(address0zNHOY, uintP1594B1, {from: accounts[0]});
		const uintJ2qzLpF = await FrogDAOcr5j876.balanceOf.call(addressjVXYxV, {from: accounts[4]});
		const boolhUWRO6h = await FrogDAOcr5j876.transfer.call(addressScVPC1k, uintqGDfcB1, {from: accounts[4]});
		const uintuVCMGW = await FrogDAOcr5j876.allowance.call(addressDQRcQAM, addresswhqATG6, {from: accounts[1]});
		const uintSaMALAf = await FrogDAOcr5j876.allowance.call(addressmMz08YV, addresscLi6uU, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOuD7eYe = await FrogDAO.new({from: accounts[4]});
		const uintIy4v5bz = BigInt("1321")
		const addressD1obXCz = accounts[3]
		const addressqSHmg4P = accounts[4]
		const uintsENx69E = BigInt("983")
		const addressUk265O = accounts[0]
		const uintm4OJmZc = BigInt("671")
		const uintajW4FP3 = BigInt("275")
		const uintppOkyPG = BigInt("1339")
		const uinta4BHEZF = BigInt("1536")
		const boolLRHeSvb = await FrogDAOuD7eYe.transferFrom.call(addressqSHmg4P, addressD1obXCz, uintIy4v5bz, {from: accounts[0]});
		const uintDp2VkZi = await FrogDAOuD7eYe.totalSupply.call({from: accounts[0]});
		const boolFMvoxG = await FrogDAOuD7eYe.approve.call(addressUk265O, uintsENx69E, {from: accounts[4]});
		const uintT972tcY = await FrogDAOuD7eYe.safeAdd.call(uintajW4FP3, uintm4OJmZc, {from: accounts[2]});
		const uintoxhUyVu = await FrogDAOuD7eYe.safeSub.call(uinta4BHEZF, uintppOkyPG, {from: accounts[1]});

		await expect(FrogDAOuD7eYe.transferFrom.call(addressqSHmg4P, addressD1obXCz, uintIy4v5bz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOEGpiVN7 = await FrogDAO.new({from: accounts[0]});
		const addressYDn6hKH = accounts[4]
		const addressH69kLs = accounts[1]
		const uintC2tOnt7 = BigInt("495")
		const uintFybYxW8 = BigInt("215")
		const uintx0nkjmE = BigInt("1133")
		const uintM7dvk9G = BigInt("485")
		const uintgduhLX9 = BigInt("1078")
		const uintVd2V9U = BigInt("760")
		const uintkjlpOjL = await FrogDAOEGpiVN7.allowance.call(addressH69kLs, addressYDn6hKH, {from: accounts[3]});
		const uintLXr7yE = await FrogDAOEGpiVN7.safeDiv.call(uintFybYxW8, uintC2tOnt7, {from: accounts[4]});
		const uintI8wiW5R = await FrogDAOEGpiVN7.safeAdd.call(uintM7dvk9G, uintx0nkjmE, {from: accounts[4]});
		const uintIUHiAw5 = await FrogDAOEGpiVN7.safeMul.call(uintVd2V9U, uintgduhLX9, {from: accounts[3]});

		assert.equal(uintI8wiW5R, BigInt("1618"))
		assert.equal(uintIUHiAw5, BigInt("819280"))
		assert.equal(uintLXr7yE, BigInt("0"))
		assert.equal(uintkjlpOjL, BigInt("0"))
	});
})