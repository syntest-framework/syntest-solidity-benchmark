const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerowjNsXf = await vnxManager.new({from: accounts[5]});
		const addressvVFLXWb = accounts[4]
		const uintL8hfE3L = BigInt("655")
		const addressQLATGYv = accounts[2]
		const uintj7gByl = BigInt("1582")
		const addressbsduoPH = accounts[1]
		const uintFdaZ35i = BigInt("556")
		const addressbsDW8pG = accounts[0]
//		const addressscLko3 = await vnxManagerowjNsXf.transferOwnership.call(addressvVFLXWb, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZI9OazS = await vnxManagerowjNsXf.owner.call({from: accounts[4]});
//		const addressDASa0WT = await vnxManagerowjNsXf.addBearer.call(addressQLATGYv, uintL8hfE3L, {from: accounts[5]});
//		const addressZgblQMX = await vnxManagerowjNsXf.addBearer.call(addressbsduoPH, uintj7gByl, {from: accounts[4]});
//		const addressBrUgW8X = await vnxManagerowjNsXf.removeBearer.call(addressbsDW8pG, uintFdaZ35i, {from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerowjNsXf.transferOwnership.call(addressvVFLXWb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerUeC5HQI = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const boolefOP5T9 = await vnxManagerUeC5HQI.isOwner.call({from: accounts[4]});
		const boolSdfUiUe = await vnxManagerUeC5HQI.isOwner.call({from: accounts[5]});
	});

	it('test for vnxManager', async () => {
		const vnxManagery9szFuu = await vnxManager.new({from: accounts[2]});
		const uint256G0UwtG = await vnxManagery9szFuu.totalRoles.call({from: accounts[3]});
//		await vnxManagery9szFuu.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256G0UwtG, BigInt("1"))
		await expect(vnxManagery9szFuu.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerAMPmVqF = await vnxManager.new({from: accounts[0]});
		const uintaeDwU9A = BigInt("125")
		const addressX3P0OdM = accounts[5]
		const addressJOGLYix = accounts[1]
		const addressoXtlNT = accounts[0]
		const boolnC2U836 = await vnxManagerAMPmVqF.isAdmin.call({from: accounts[2]});
//		const addressLgaKxJy = await vnxManagerAMPmVqF.removeBearer.call(addressX3P0OdM, uintaeDwU9A, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNRlZk0I = await vnxManagerAMPmVqF.transferContractOwnership.call(addressoXtlNT, addressJOGLYix, {from: accounts[0]});
//		await vnxManagerAMPmVqF.onlyAdmin.call({from: accounts[4]});

		assert.equal(boolnC2U836, false)
		await expect(vnxManagerAMPmVqF.removeBearer.call(addressX3P0OdM, uintaeDwU9A, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwSxxWL = await vnxManager.new({from: accounts[2]});
		const uintGFWZl0 = BigInt("1488")
		const stringi8utbN8 = "j16epggmRLz8sLZsB3XvyPValWcCx4TOsOwJntav5dFiY4PLo3KB2RFgWiwXWb5YYRwThk6jo8raXauhLJ8tenln9"
		const uintr7N3g49 = BigInt("1709")
		const stringkILATx0 = "sRCBD2tIfFE3JDOg2ixkOh3kC1X15VQBFTkprhqFI3z"
		const stringYRZojn = "6m1MYjxVoUK6f"
		const addresstHa3JC4 = accounts[3]
		const addresso903tvK = accounts[5]
//		const uint256fPtRO9 = await vnxManagerwSxxWL.addRole.call(stringi8utbN8, uintGFWZl0, {from: accounts[4]});
//		const boollt0m7VO = await vnxManagerwSxxWL.isAdmin.call({from: accounts[0]});
//		const uint256qK2CmXd = await vnxManagerwSxxWL.addRole.call(stringkILATx0, uintr7N3g49, {from: accounts[2]});
//		const uint256EoNk2QG = await vnxManagerwSxxWL.addRootRole.call(stringYRZojn, {from: accounts[5]});
//		const boolRShp5WB = await vnxManagerwSxxWL.transferContractOwnership.call(addresso903tvK, addresstHa3JC4, {from: accounts[2]});

		await expect(vnxManagerwSxxWL.addRole.call(stringi8utbN8, uintGFWZl0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxYnRg7s = await vnxManager.new({from: accounts[2]});
		const uintTalLLr5 = BigInt("1616")
		const addressb1aqky = accounts[5]
		const addresssrgAh4N = accounts[0]
		const addressnIBK468 = accounts[2]
		const uintgFNtkH = BigInt("1653")
		const addressAV1KkO = accounts[3]
		const boolylIqQLu = await vnxManagerxYnRg7s.hasRole.call(addressb1aqky, uintTalLLr5, {from: accounts[1]});
//		const boolmnqj9Za = await vnxManagerxYnRg7s.transferContractOwnership.call(addressnIBK468, addresssrgAh4N, {from: accounts[2]});
//		await vnxManagerxYnRg7s.onlyOwner.call({from: accounts[0]});
//		const boolyaqhPr7 = await vnxManagerxYnRg7s.hasRole.call(addressAV1KkO, uintgFNtkH, {from: accounts[4]});

		assert.equal(boolylIqQLu, false)
		await expect(vnxManagerxYnRg7s.transferContractOwnership.call(addressnIBK468, addresssrgAh4N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwpN8yu9 = await vnxManager.new({from: accounts[3]});
		const addresskrzbSRQ = accounts[0]
		const addresspGq9b9o = accounts[0]
//		const boolAN0wQ4x = await vnxManagerwpN8yu9.transferContractOwnership.call(addresspGq9b9o, addresskrzbSRQ, {from: "0x0000000000000000000000000000000000000001"});
//		await vnxManagerwpN8yu9.onlyOwner.call({from: accounts[5]});
//		const boolmUjAdCe = await vnxManagerwpN8yu9.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerwpN8yu9.transferContractOwnership.call(addresspGq9b9o, addresskrzbSRQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxYnRg7s = await vnxManager.new({from: accounts[2]});
		const uintI26rtvB = BigInt("1616")
		const addressi8ueeuT = accounts[5]
		const uintBYn1yVW = BigInt("1653")
		const addressjSIwRlW = accounts[3]
		const uintYQQBb5O = BigInt("148")
		const addresslHm9oYh = accounts[2]
		const boolylIqQLu = await vnxManagerxYnRg7s.hasRole.call(addressi8ueeuT, uintI26rtvB, {from: accounts[1]});
		const addressdDiZeze = await vnxManagerxYnRg7s.owner.call({from: accounts[2]});
//		await vnxManagerxYnRg7s.onlyOwner.call({from: accounts[0]});
//		const boolyaqhPr7 = await vnxManagerxYnRg7s.hasRole.call(addressjSIwRlW, uintBYn1yVW, {from: accounts[4]});
//		const addressgpzcIVe = await vnxManagerxYnRg7s.addBearer.call(addresslHm9oYh, uintYQQBb5O, {from: accounts[0]});
//		const boolXwKVhdZ = await vnxManagerxYnRg7s.isAdmin.call({from: accounts[4]});

		assert.equal(addressdDiZeze, 0x1D4DB39e62823488D58A2AD9dcAf1C633C2bE802)
		assert.equal(boolylIqQLu, false)
		await expect(vnxManagerxYnRg7s.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerAMPmVqF = await vnxManager.new({from: accounts[0]});
		const uintCvvo4u8 = BigInt("198")
		const addresssqBVYVv = accounts[4]
		const uintwv5EEAZ = BigInt("181")
		const addressJAXctYv = accounts[0]
		const uintECltxnU = BigInt("125")
		const addressLrr1GmE = accounts[6]
		const uintSkw5vHl = BigInt("725")
		const addressd4CVitG = "0x0000000000000000000000000000000000000001"
		const addressopbz0Cj = accounts[1]
		const addressllfdqMp = accounts[0]
//		const addressLm1iuOH = await vnxManagerAMPmVqF.addBearer.call(addresssqBVYVv, uintCvvo4u8, {from: accounts[0]});
//		const boolnC2U836 = await vnxManagerAMPmVqF.isAdmin.call({from: accounts[2]});
//		const boolXIGylEQ = await vnxManagerAMPmVqF.hasRole.call(addressJAXctYv, uintwv5EEAZ, {from: accounts[0]});
//		const addressLgaKxJy = await vnxManagerAMPmVqF.removeBearer.call(addressLrr1GmE, uintECltxnU, {from: "0x0000000000000000000000000000000000000001"});
//		const boolxxBNSyQ = await vnxManagerAMPmVqF.hasRole.call(addressd4CVitG, uintSkw5vHl, {from: accounts[5]});
//		const uint256f0NXJzx = await vnxManagerAMPmVqF.totalRoles.call({from: accounts[0]});
//		const boolNRlZk0I = await vnxManagerAMPmVqF.transferContractOwnership.call(addressllfdqMp, addressopbz0Cj, {from: accounts[0]});

		await expect(vnxManagerAMPmVqF.addBearer.call(addresssqBVYVv, uintCvvo4u8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerAMPmVqF = await vnxManager.new({from: accounts[0]});
		const uintTKYOJOF = BigInt("130")
		const addressT6Htvjl = accounts[6]
		const uintA3peHvp = BigInt("98")
		const addressQv8zKcP = accounts[2]
//		await vnxManagerAMPmVqF.renounceOwnership.call({from: accounts[0]});
//		const boolnC2U836 = await vnxManagerAMPmVqF.isAdmin.call({from: accounts[2]});
//		const addressLgaKxJy = await vnxManagerAMPmVqF.removeBearer.call(addressT6Htvjl, uintTKYOJOF, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAfy41P = await vnxManagerAMPmVqF.hasRole.call(addressQv8zKcP, uintA3peHvp, {from: accounts[1]});
//		await vnxManagerAMPmVqF.onlyAdmin.call({from: accounts[2]});
//		await vnxManagerAMPmVqF.onlyAdmin.call({from: accounts[4]});

		await expect(vnxManagerAMPmVqF.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxYnRg7s = await vnxManager.new({from: accounts[2]});
		const uintflBXh8I = BigInt("1616")
		const addressYHH7uUv = accounts[6]
		const addresscJ6xscG = accounts[1]
		const boolylIqQLu = await vnxManagerxYnRg7s.hasRole.call(addressYHH7uUv, uintflBXh8I, {from: accounts[1]});
		const addressWW6en5S = await vnxManagerxYnRg7s.transferOwnership.call(addresscJ6xscG, {from: accounts[2]});
//		await vnxManagerxYnRg7s.onlyAdmin.call({from: accounts[2]});
//		await vnxManagerxYnRg7s.onlyOwner.call({from: accounts[0]});

		assert.equal(boolylIqQLu, false)
		await expect(vnxManagerxYnRg7s.onlyAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxYnRg7s = await vnxManager.new({from: accounts[2]});
		const addressfs8RxON = "0x0000000000000000000000000000000000000000"
		const addressOmAdAj0 = accounts[2]
		const addressMOU04vD = accounts[0]
		const addresslY9r4ol = accounts[4]
//		const boolkPIg7j9 = await vnxManagerxYnRg7s.transferContractOwnership.call(addressOmAdAj0, addressfs8RxON, {from: accounts[2]});
//		const boolmnqj9Za = await vnxManagerxYnRg7s.transferContractOwnership.call(addresslY9r4ol, addressMOU04vD, {from: accounts[2]});

		await expect(vnxManagerxYnRg7s.transferContractOwnership.call(addressOmAdAj0, addressfs8RxON, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})