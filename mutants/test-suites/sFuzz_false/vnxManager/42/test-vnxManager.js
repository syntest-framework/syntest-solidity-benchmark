const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerYM9xWNM = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLqdAwZh = BigInt("1720")
		const addressjHc52NV = accounts[2]
		const addressgK5YGvY = accounts[3]
		const uintJOGDMAC = BigInt("1380")
		const addressgZ8qB2 = "0x0000000000000000000000000000000000000001"
		const addressgjmGlcW = await vnxManagerYM9xWNM.addBearer.call(addressjHc52NV, uintLqdAwZh, {from: accounts[3]});
		const addressCqXeb8j = await vnxManagerYM9xWNM.transferOwnership.call(addressgK5YGvY, {from: accounts[4]});
		await vnxManagerYM9xWNM.renounceOwnership.call({from: accounts[2]});
		const addressiP9aGK0 = await vnxManagerYM9xWNM.addBearer.call(addressgZ8qB2, uintJOGDMAC, {from: accounts[1]});
		await vnxManagerYM9xWNM.onlyAdmin.call({from: accounts[2]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerkdNz5iF = await vnxManager.new({from: accounts[5]});
		const uintuZrfppr = BigInt("1836")
		const stringg61wMJG = "jUtxJIb7UVpHRr0qc7WfzzoJ9FuWl7Ltomc4aQ5wttifwVEBMIe7Dnj95rr"
		const stringJn56hlv = "6D7LVS"
		const addressET1rVci = accounts[1]
		const addressfeyQs1q = accounts[2]
		const uintXJsDw7 = BigInt("516")
		const addressGkOhsdH = accounts[5]
//		const uint256UtCbnNZ = await vnxManagerkdNz5iF.addRole.call(stringg61wMJG, uintuZrfppr, {from: accounts[4]});
//		const uint256OBF3PBS = await vnxManagerkdNz5iF.addRootRole.call(stringJn56hlv, {from: accounts[1]});
//		const boolCZHFu9H = await vnxManagerkdNz5iF.transferContractOwnership.call(addressfeyQs1q, addressET1rVci, {from: accounts[2]});
//		await vnxManagerkdNz5iF.onlyOwner.call({from: accounts[0]});
//		const boolBDCYWKg = await vnxManagerkdNz5iF.hasRole.call(addressGkOhsdH, uintXJsDw7, {from: accounts[1]});

		await expect(vnxManagerkdNz5iF.addRole.call(stringg61wMJG, uintuZrfppr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagervRewb3w = await vnxManager.new({from: accounts[0]});
		const uintOO70a5J = BigInt("1438")
		const addressUTr8rvp = accounts[3]
		const stringO4abw4r = "XAIhSUyOSj6FngC2hUcM1NpkUDV6aSzzXy5P5DyWKodVmdYMo4EUOXhVwvHNnMSlA3zlgLa49eM1pcg6l6cBDgG14IA2arr"
//		await vnxManagervRewb3w.onlyAdmin.call({from: accounts[4]});
		await vnxManagervRewb3w.onlyAdmin.call({from: accounts[4]});
//		const addresseAM12CI = await vnxManagervRewb3w.addBearer.call(addressUTr8rvp, uintOO70a5J, {from: accounts[2]});
//		await vnxManagervRewb3w.onlyAdmin.call({from: accounts[1]});
//		const uint256ePtn6RN = await vnxManagervRewb3w.addRootRole.call(stringO4abw4r, {from: accounts[4]});

		await expect(vnxManagervRewb3w.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerQ0lv9Bm = await vnxManager.new({from: accounts[5]});
		const uintzhZAX6p = BigInt("973")
		const addressMbjSU2f = accounts[1]
		const stringMGztU6s = "exxIUR9Pbjh32H"
		const uintPqksjJO = BigInt("1803")
		const addressiYyO354 = accounts[1]
		const uinte6pohmw = BigInt("1589")
		const addresstRXiAL = accounts[1]
//		const addressofqEW7q = await vnxManagerQ0lv9Bm.addBearer.call(addressMbjSU2f, uintzhZAX6p, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Gx9wiZ = await vnxManagerQ0lv9Bm.totalRoles.call({from: accounts[4]});
//		const uint256rNiLGG8 = await vnxManagerQ0lv9Bm.addRootRole.call(stringMGztU6s, {from: accounts[1]});
//		const booltIGBSCf = await vnxManagerQ0lv9Bm.hasRole.call(addressiYyO354, uintPqksjJO, {from: accounts[3]});
//		const addressNC1a0Pv = await vnxManagerQ0lv9Bm.addBearer.call(addresstRXiAL, uinte6pohmw, {from: accounts[0]});
//		await vnxManagerQ0lv9Bm.renounceOwnership.call({from: accounts[2]});

		await expect(vnxManagerQ0lv9Bm.addBearer.call(addressMbjSU2f, uintzhZAX6p, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageroj7xIAU = await vnxManager.new({from: accounts[0]});
		const uintelONdri = BigInt("1804")
		const addressVQYHU8O = accounts[0]
		const stringEF6cTYw = "RcuTOWHvIzVPJrfgXlbRmjtfI4o9BSxdsRO1MlEEplKpb8F2sInIm3rwJ"
//		await vnxManageroj7xIAU.renounceOwnership.call({from: accounts[3]});
//		const addressxbuKWkA = await vnxManageroj7xIAU.addBearer.call(addressVQYHU8O, uintelONdri, {from: accounts[5]});
//		const uint256f6EQDFA = await vnxManageroj7xIAU.addRootRole.call(stringEF6cTYw, {from: accounts[3]});

		await expect(vnxManageroj7xIAU.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerVRxkH8l = await vnxManager.new({from: accounts[1]});
		const uint256TbsqEkS = await vnxManagerVRxkH8l.totalRoles.call({from: accounts[3]});

		assert.equal(uint256TbsqEkS, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerVRxkH8l = await vnxManager.new({from: accounts[1]});
		const uinttifkbNV = BigInt("821")
		const addressSAhgPGu = accounts[0]
		const boolZ1dyfc = await vnxManagerVRxkH8l.hasRole.call(addressSAhgPGu, uinttifkbNV, {from: accounts[2]});
//		await vnxManagerVRxkH8l.onlyOwner.call({from: accounts[4]});
//		const uint256TbsqEkS = await vnxManagerVRxkH8l.totalRoles.call({from: accounts[3]});

		assert.equal(boolZ1dyfc, false)
		await expect(vnxManagerVRxkH8l.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerVRxkH8l = await vnxManager.new({from: accounts[1]});
		const addressOvcpezC = accounts[1]
		const addressdPeuKG = accounts[1]
		const address6EleeT = accounts[5]
		const addressXDDm16D = "0x0000000000000000000000000000000000000001"
//		const boolSR5xj1i = await vnxManagerVRxkH8l.transferContractOwnership.call(addressdPeuKG, addressOvcpezC, {from: accounts[2]});
//		const uint256TbsqEkS = await vnxManagerVRxkH8l.totalRoles.call({from: accounts[3]});
//		const boolCpxwC1z = await vnxManagerVRxkH8l.transferContractOwnership.call(addressXDDm16D, address6EleeT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerVRxkH8l.transferContractOwnership.call(addressdPeuKG, addressOvcpezC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerVRxkH8l = await vnxManager.new({from: accounts[1]});
		const uintVYcLfGi = BigInt("946")
		const addressVr9YV5 = accounts[2]
		const uint256TbsqEkS = await vnxManagerVRxkH8l.totalRoles.call({from: accounts[3]});
//		const addressfFpR1Ts = await vnxManagerVRxkH8l.removeBearer.call(addressVr9YV5, uintVYcLfGi, {from: accounts[3]});
//		await vnxManagerVRxkH8l.onlyAdmin.call({from: accounts[0]});

		assert.equal(uint256TbsqEkS, BigInt("1"))
		await expect(vnxManagerVRxkH8l.removeBearer.call(addressVr9YV5, uintVYcLfGi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerVRxkH8l = await vnxManager.new({from: accounts[1]});
		const stringU5eyrVB = "Y4J79i8NzTBi4GA9CtIaHcjGis2LPdQuDsIo3btbcgmPaQ"
		const uint256TbsqEkS = await vnxManagerVRxkH8l.totalRoles.call({from: accounts[3]});
		const addressk56daiT = await vnxManagerVRxkH8l.owner.call({from: accounts[3]});
		const uint256WxM9gO = await vnxManagerVRxkH8l.addRootRole.call(stringU5eyrVB, {from: accounts[0]});

		assert.equal(addressk56daiT, 0xEaf126a322025ecAb09E7D0D80eb4C4b2037bD76)
		assert.equal(uint256TbsqEkS, BigInt("1"))
		assert.equal(uint256WxM9gO, BigInt("0"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerVRxkH8l = await vnxManager.new({from: accounts[1]});
//		await vnxManagerVRxkH8l.renounceOwnership.call({from: accounts[1]});
//		const uint256TbsqEkS = await vnxManagerVRxkH8l.totalRoles.call({from: accounts[3]});

		await expect(vnxManagerVRxkH8l.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerVRxkH8l = await vnxManager.new({from: accounts[1]});
		const addressLMsDT25 = accounts[2]
		const addressnmqS7oX = accounts[0]
		const uintM65TpUq = BigInt("439")
		const addressOCjnnPU = "0x0000000000000000000000000000000000000001"
		const uinti2FS6NR = BigInt("559")
		const stringFVfBHdD = "c8VbLvcy"
//		const boolxDUUnC7 = await vnxManagerVRxkH8l.transferContractOwnership.call(addressnmqS7oX, addressLMsDT25, {from: accounts[1]});
//		const uint256TbsqEkS = await vnxManagerVRxkH8l.totalRoles.call({from: accounts[3]});
//		const boolIQd0TD = await vnxManagerVRxkH8l.hasRole.call(addressOCjnnPU, uintM65TpUq, {from: accounts[5]});
//		const uint256zxiJLrI = await vnxManagerVRxkH8l.addRole.call(stringFVfBHdD, uinti2FS6NR, {from: accounts[2]});

		await expect(vnxManagerVRxkH8l.transferContractOwnership.call(addressnmqS7oX, addressLMsDT25, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerT5arEV = await vnxManager.new({from: accounts[1]});
		const uintvcxZUMD = BigInt("125")
		const addressG6HhSwN = "0x0000000000000000000000000000000000000001"
		const addresslwkBJWK = "0x0000000000000000000000000000000000000001"
		const boolpHIyCip = await vnxManagerT5arEV.hasRole.call(addressG6HhSwN, uintvcxZUMD, {from: accounts[2]});
		const addressgAqkU7 = await vnxManagerT5arEV.transferOwnership.call(addresslwkBJWK, {from: accounts[1]});
//		await vnxManagerT5arEV.onlyAdmin.call({from: accounts[3]});

		assert.equal(boolpHIyCip, false)
		await expect(vnxManagerT5arEV.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})