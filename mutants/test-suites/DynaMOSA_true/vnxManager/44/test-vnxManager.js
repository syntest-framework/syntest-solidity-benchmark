const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerRweoKBn = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addresseG504Is = accounts[0]
		const addressBJOkQHn = accounts[2]
		const uintYQjy9ar = BigInt("583")
		const addressjmgKEOD = accounts[0]
		const stringg5vO2cr = "ZGO2c8fke"
		const boolpze8dmG = await vnxManagerRweoKBn.isOwner.call({from: accounts[0]});
		const boolCtEwEXK = await vnxManagerRweoKBn.transferContractOwnership.call(addressBJOkQHn, addresseG504Is, {from: accounts[3]});
		const boolfSWEmm = await vnxManagerRweoKBn.hasRole.call(addressjmgKEOD, uintYQjy9ar, {from: accounts[3]});
		const boolQTmm8K1 = await vnxManagerRweoKBn.isAdmin.call({from: accounts[2]});
		await vnxManagerRweoKBn.onlyAdmin.call({from: accounts[0]});
		const uint256EuRYnWo = await vnxManagerRweoKBn.addRootRole.call(stringg5vO2cr, {from: accounts[3]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerY0IMybP = await vnxManager.new({from: accounts[1]});
		const uintEV3exy = BigInt("125")
		const addresssJ8UDA5 = accounts[4]
		const addressmPkwEq = accounts[5]
		const addressQxDqUz = accounts[1]
		const uint256QFe67Tw = await vnxManagerY0IMybP.totalRoles.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256heRIsdm = await vnxManagerY0IMybP.totalRoles.call({from: accounts[0]});
		const uint256iYmcnJl = await vnxManagerY0IMybP.totalRoles.call({from: accounts[3]});
//		const addressZmU3wY5 = await vnxManagerY0IMybP.removeBearer.call(addresssJ8UDA5, uintEV3exy, {from: accounts[2]});
//		const boolbIwgfry = await vnxManagerY0IMybP.transferContractOwnership.call(addressQxDqUz, addressmPkwEq, {from: accounts[5]});

		assert.equal(uint256QFe67Tw, BigInt("1"))
		assert.equal(uint256heRIsdm, BigInt("1"))
		assert.equal(uint256iYmcnJl, BigInt("1"))
		await expect(vnxManagerY0IMybP.removeBearer.call(addresssJ8UDA5, uintEV3exy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageraIq7SEb = await vnxManager.new({from: accounts[5]});
		const uintgKhnKfq = BigInt("398")
		const stringGm2oWc1 = "GUPiZtemybsQWc9QyBLodcGGicgox7ytx2DnQ1TxE9LJp4mrYboDEa7"
		const uinthjgvhoe = BigInt("1638")
		const addressa20xXA = accounts[2]
//		await vnxManageraIq7SEb.renounceOwnership.call({from: accounts[4]});
//		const uint256C6Q4tNc = await vnxManageraIq7SEb.addRole.call(stringGm2oWc1, uintgKhnKfq, {from: accounts[4]});
//		const addressZK6ZNZF = await vnxManageraIq7SEb.addBearer.call(addressa20xXA, uinthjgvhoe, {from: accounts[4]});

		await expect(vnxManageraIq7SEb.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagervTHOfFv = await vnxManager.new({from: accounts[2]});
		const addressHmT9ZS1 = accounts[4]
		const addressNuThDp6 = await vnxManagervTHOfFv.transferOwnership.call(addressHmT9ZS1, {from: accounts[2]});
//		await vnxManagervTHOfFv.onlyAdmin.call({from: accounts[0]});

		await expect(vnxManagervTHOfFv.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerzVuBuum = await vnxManager.new({from: accounts[4]});
		const stringhy9TU8 = "hc9gnPoTpeI"
		const addressMo4lqKA = await vnxManagerzVuBuum.owner.call({from: accounts[0]});
		const boolc5EUOIC = await vnxManagerzVuBuum.isAdmin.call({from: accounts[1]});
		const booll0yMjBZ = await vnxManagerzVuBuum.isOwner.call({from: accounts[1]});
//		await vnxManagerzVuBuum.onlyAdmin.call({from: accounts[3]});
//		const uint256HKeyBaS = await vnxManagerzVuBuum.addRootRole.call(stringhy9TU8, {from: accounts[1]});

		assert.equal(addressMo4lqKA, 0xf0Fe0f43811A01bB2D7b8b1c0769D112EB5ff88f)
		assert.equal(boolc5EUOIC, false)
		assert.equal(booll0yMjBZ, false)
		await expect(vnxManagerzVuBuum.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerS93GZ7K = await vnxManager.new({from: accounts[3]});
		const addressCOIfJq = "0x0000000000000000000000000000000000000001"
		const addressnoWOFdZ = accounts[1]
		const uintvvS42sZ = BigInt("1161")
		const addresszSyVE5O = accounts[0]
		const addressTNl6skn = "0x0000000000000000000000000000000000000001"
		const addresssZLmXqW = "0x0000000000000000000000000000000000000001"
		const uintCYwhWPO = BigInt("957")
		const addressS1f6tsb = accounts[2]
		const addressh9iGH8F = accounts[0]
//		const boolpSxDuqw = await vnxManagerS93GZ7K.transferContractOwnership.call(addressnoWOFdZ, addressCOIfJq, {from: accounts[0]});
//		const addressorJMKKq = await vnxManagerS93GZ7K.addBearer.call(addresszSyVE5O, uintvvS42sZ, {from: accounts[2]});
//		const boolsRh3lKZ = await vnxManagerS93GZ7K.transferContractOwnership.call(addresssZLmXqW, addressTNl6skn, {from: accounts[0]});
//		const addressOWd9M3s = await vnxManagerS93GZ7K.addBearer.call(addressS1f6tsb, uintCYwhWPO, {from: accounts[1]});
//		const addresszwZYIrO = await vnxManagerS93GZ7K.transferOwnership.call(addressh9iGH8F, {from: accounts[1]});

		await expect(vnxManagerS93GZ7K.transferContractOwnership.call(addressnoWOFdZ, addressCOIfJq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerY0IMybP = await vnxManager.new({from: accounts[1]});
		const uinttHGzZBK = BigInt("2039")
		const stringekKZRbD = "6Q8Nj5lq9nNLJoOk85kPoCbotxNjiskD053kk4yy"
		const stringiY9cZa = "NkcGT5TyIu9MDj04Ge1sf53GraOAfesZkDxbyejNmm8Jaav8AXfLWnQdC29rV05"
		const uintRnTHljS = BigInt("125")
		const addresse3jLWLh = accounts[4]
		const addressKK1ynZf = accounts[5]
		const addressqfn4d6Z = accounts[1]
		const uint256QFe67Tw = await vnxManagerY0IMybP.totalRoles.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256heRIsdm = await vnxManagerY0IMybP.totalRoles.call({from: accounts[0]});
		const bools3ENXl = await vnxManagerY0IMybP.isOwner.call({from: accounts[0]});
		const uint256iYmcnJl = await vnxManagerY0IMybP.totalRoles.call({from: accounts[3]});
//		const uint256ZAMQ3Z = await vnxManagerY0IMybP.addRole.call(stringekKZRbD, uinttHGzZBK, {from: accounts[3]});
//		const uint256aX1ALz9 = await vnxManagerY0IMybP.addRootRole.call(stringiY9cZa, {from: accounts[1]});
//		const addressZmU3wY5 = await vnxManagerY0IMybP.removeBearer.call(addresse3jLWLh, uintRnTHljS, {from: accounts[2]});
//		const boolbIwgfry = await vnxManagerY0IMybP.transferContractOwnership.call(addressqfn4d6Z, addressKK1ynZf, {from: accounts[5]});

		assert.equal(bools3ENXl, false)
		assert.equal(uint256QFe67Tw, BigInt("1"))
		assert.equal(uint256heRIsdm, BigInt("1"))
		assert.equal(uint256iYmcnJl, BigInt("1"))
		await expect(vnxManagerY0IMybP.addRole.call(stringekKZRbD, uinttHGzZBK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageraIq7SEb = await vnxManager.new({from: accounts[5]});
		const uintybGct8y = BigInt("1874")
		const addressnr8cCc = accounts[0]
		const uintkeSETr = BigInt("1638")
		const addressIK4um4E = accounts[2]
		const uintt8rICCO = BigInt("440")
		const addressrrdVPRg = accounts[4]
//		const addresstIeoFPx = await vnxManageraIq7SEb.addBearer.call(addressnr8cCc, uintybGct8y, {from: accounts[5]});
//		await vnxManageraIq7SEb.renounceOwnership.call({from: accounts[4]});
//		const uint256ooyQQv = await vnxManageraIq7SEb.totalRoles.call({from: accounts[4]});
//		const addressZK6ZNZF = await vnxManageraIq7SEb.addBearer.call(addressIK4um4E, uintkeSETr, {from: accounts[4]});
//		const boollz5aAL = await vnxManageraIq7SEb.hasRole.call(addressrrdVPRg, uintt8rICCO, {from: accounts[5]});

		await expect(vnxManageraIq7SEb.addBearer.call(addressnr8cCc, uintybGct8y, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerEBI9P6E = await vnxManager.new({from: accounts[2]});
		const addressZTldrO6 = accounts[1]
		const addressTOcXgL = "0x0000000000000000000000000000000000000001"
//		const bool3zXmM7 = await vnxManagerEBI9P6E.transferContractOwnership.call(addressTOcXgL, addressZTldrO6, {from: accounts[2]});
//		await vnxManagerEBI9P6E.renounceOwnership.call({from: accounts[2]});
//		await vnxManagerEBI9P6E.renounceOwnership.call({from: accounts[0]});

		await expect(vnxManagerEBI9P6E.transferContractOwnership.call(addressTOcXgL, addressZTldrO6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerEBI9P6E = await vnxManager.new({from: accounts[2]});
		const addresso4RLOU = accounts[1]
		const addressh9CjTBw = "0x0000000000000000000000000000000000000000"
//		const bool3zXmM7 = await vnxManagerEBI9P6E.transferContractOwnership.call(addressh9CjTBw, addresso4RLOU, {from: accounts[2]});
//		const boolo7fZ4LF = await vnxManagerEBI9P6E.isAdmin.call({from: accounts[0]});
//		await vnxManagerEBI9P6E.renounceOwnership.call({from: accounts[0]});

		await expect(vnxManagerEBI9P6E.transferContractOwnership.call(addressh9CjTBw, addresso4RLOU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerEBI9P6E = await vnxManager.new({from: accounts[2]});
		const stringwTfwhnv = "M6VPwa1IwKaR46GIfU7mjqvYOdG5N3mTQA2fgi9hTr0gvMYhzrFqX1"
		const uintWg5XtG = BigInt("417")
		const addressNJ7VjSA = accounts[5]
//		await vnxManagerEBI9P6E.renounceOwnership.call({from: accounts[2]});
//		const uint256XVVMQC = await vnxManagerEBI9P6E.addRootRole.call(stringwTfwhnv, {from: accounts[2]});
//		await vnxManagerEBI9P6E.onlyAdmin.call({from: accounts[1]});
//		const addressZLI7eBL = await vnxManagerEBI9P6E.addBearer.call(addressNJ7VjSA, uintWg5XtG, {from: accounts[1]});

		await expect(vnxManagerEBI9P6E.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerkymX1Wz = await vnxManager.new({from: accounts[5]});
		const addressbfPhdA = "0x0000000000000000000000000000000000000000"
		const addressohHxjUk = accounts[2]
//		const boolIlX62eW = await vnxManagerkymX1Wz.transferContractOwnership.call(addressohHxjUk, addressbfPhdA, {from: accounts[5]});

		await expect(vnxManagerkymX1Wz.transferContractOwnership.call(addressohHxjUk, addressbfPhdA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})