const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerD8Q4zVi = await vnxManager.new({from: accounts[0]});
		const addressTR8hF02 = accounts[3]
		const uintqkOVgP7 = BigInt("1216")
		const addressbXp9z9v = accounts[0]
		const addressXOOJewA = accounts[5]
		const addressjyFpaxC = accounts[5]
		const uintDqlrc3U = BigInt("1442")
		const addressXppZP53 = "0x0000000000000000000000000000000000000001"
		const boolw4t3XcM = await vnxManagerD8Q4zVi.isOwner.call({from: accounts[3]});
		const addressc13dkxc = await vnxManagerD8Q4zVi.transferOwnership.call(addressTR8hF02, {from: accounts[4]});
		const addressVfjOC58 = await vnxManagerD8Q4zVi.addBearer.call(addressbXp9z9v, uintqkOVgP7, {from: accounts[5]});
		const booly39wO8B = await vnxManagerD8Q4zVi.transferContractOwnership.call(addressjyFpaxC, addressXOOJewA, {from: accounts[4]});
		const addressNftJ9ZS = await vnxManagerD8Q4zVi.addBearer.call(addressXppZP53, uintDqlrc3U, {from: accounts[0]});

		assert.equal(boolw4t3XcM, false)
		await expect(vnxManagerD8Q4zVi.transferOwnership.call(addressTR8hF02, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageroHYb6K = await vnxManager.new({from: accounts[0]});
		const uintWtO7HEa = BigInt("265")
		const addresszVhHH84 = "0x0000000000000000000000000000000000000001"
		const uintCiQgKqT = BigInt("30")
		const addressxuf0YVU = accounts[3]
		const addressxBsihGS = accounts[5]
		const addressRAg8Gm2 = accounts[5]
		const addressBvEu1Vk = await vnxManageroHYb6K.removeBearer.call(addresszVhHH84, uintWtO7HEa, {from: accounts[4]});
		const address612nE1 = await vnxManageroHYb6K.addBearer.call(addressxuf0YVU, uintCiQgKqT, {from: accounts[2]});
		const boolp4gRvK6 = await vnxManageroHYb6K.isOwner.call({from: accounts[1]});
		const boolow6oM8j = await vnxManageroHYb6K.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolGllqxCn = await vnxManageroHYb6K.transferContractOwnership.call(addressRAg8Gm2, addressxBsihGS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManageroHYb6K.removeBearer.call(addresszVhHH84, uintWtO7HEa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlS3GDHm = await vnxManager.new({from: accounts[2]});
		const addressjPoDqSy = accounts[1]
		const addressCupluze = accounts[2]
		const uintmPfvkm7 = BigInt("163")
		const addressiKSaPS4 = accounts[3]
		const uintHVp2F3M = BigInt("838")
		const addresskGFnnu = accounts[4]
		const addressD7Nok2i = accounts[3]
		const booldeWJV61 = await vnxManagerlS3GDHm.transferContractOwnership.call(addressCupluze, addressjPoDqSy, {from: accounts[2]});
		const boolEbR91fc = await vnxManagerlS3GDHm.hasRole.call(addressiKSaPS4, uintmPfvkm7, {from: accounts[1]});
		const address85zYx9 = await vnxManagerlS3GDHm.addBearer.call(addresskGFnnu, uintHVp2F3M, {from: accounts[2]});
		const addressINJHqI = await vnxManagerlS3GDHm.transferOwnership.call(addressD7Nok2i, {from: accounts[4]});
		await vnxManagerlS3GDHm.onlyAdmin.call({from: accounts[0]});

		await expect(vnxManagerlS3GDHm.transferContractOwnership.call(addressCupluze, addressjPoDqSy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerShaBhHv = await vnxManager.new({from: accounts[3]});
		const uintD4pXPJo = BigInt("186")
		const stringchY4pS = "qiqjZWawPHSfbDuGBeDuq3CQMXtiQhdKt37cHfAKdGoXpQfxfDwqYtf8M8ioz"
		const uint256OZ6vCwG = await vnxManagerShaBhHv.addRole.call(stringchY4pS, uintD4pXPJo, {from: accounts[0]});
		await vnxManagerShaBhHv.onlyAdmin.call({from: accounts[1]});
		await vnxManagerShaBhHv.onlyAdmin.call({from: accounts[0]});

		await expect(vnxManagerShaBhHv.addRole.call(stringchY4pS, uintD4pXPJo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerOsCCHpc = await vnxManager.new({from: accounts[3]});
		const stringKZjNv5 = "t9SRb5sX41n3lct2GcsRdSkcvTdVO6j5VliBMTBVMlg0KNLgk2HfzvcNPslilB2JiblaICzeuPYwj4EgkwrfsUbHipOy"
		const uint256d4O1Z5Y = await vnxManagerOsCCHpc.totalRoles.call({from: accounts[4]});
		const uint256liWm1PT = await vnxManagerOsCCHpc.totalRoles.call({from: "0x0000000000000000000000000000000000000001"});
		const boollVymDB3 = await vnxManagerOsCCHpc.isAdmin.call({from: accounts[1]});
		const uint256iVBg6Ip = await vnxManagerOsCCHpc.addRootRole.call(stringKZjNv5, {from: accounts[3]});

		assert.equal(boollVymDB3, false)
		assert.equal(uint256d4O1Z5Y, BigInt("1"))
		assert.equal(uint256iVBg6Ip, BigInt("0"))
		assert.equal(uint256liWm1PT, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagertBXI17v = await vnxManager.new({from: accounts[0]});
		const uintf2jqR5 = BigInt("1183")
		const addressKhYB4ZL = accounts[0]
		const uintQMRrOR0 = BigInt("1356")
		const addressxzD9cT6 = accounts[1]
		await vnxManagertBXI17v.renounceOwnership.call({from: accounts[0]});
		const addressuuHyy1v = await vnxManagertBXI17v.removeBearer.call(addressKhYB4ZL, uintf2jqR5, {from: "0x0000000000000000000000000000000000000001"});
		const addressWEFvVlW = await vnxManagertBXI17v.addBearer.call(addressxzD9cT6, uintQMRrOR0, {from: accounts[1]});

		await expect(vnxManagertBXI17v.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerShaBhHv = await vnxManager.new({from: accounts[3]});
		await vnxManagerShaBhHv.onlyAdmin.call({from: accounts[1]});
		await vnxManagerShaBhHv.onlyAdmin.call({from: accounts[0]});

		await expect(vnxManagerShaBhHv.onlyAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhXt95aD = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGiL6bng = accounts[2]
		const addressWhn7SO = accounts[1]
		await vnxManagerhXt95aD.onlyAdmin.call({from: accounts[1]});
		const addressLw5nCm0 = await vnxManagerhXt95aD.transferOwnership.call(addressGiL6bng, {from: accounts[4]});
		const addresszdoNgyP = await vnxManagerhXt95aD.transferOwnership.call(addressWhn7SO, {from: accounts[3]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerShaBhHv = await vnxManager.new({from: accounts[3]});
		const addressNIhbM6m = await vnxManagerShaBhHv.owner.call({from: accounts[5]});
		await vnxManagerShaBhHv.onlyAdmin.call({from: accounts[1]});
		await vnxManagerShaBhHv.onlyAdmin.call({from: accounts[0]});

		assert.equal(addressNIhbM6m, 0xd083b0938eb3e076d916e87FE37015a94bd4445c)
		await expect(vnxManagerShaBhHv.onlyAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerShaBhHv = await vnxManager.new({from: accounts[3]});
		const uintWluVtdA = BigInt("905")
		const addressXnV6un = accounts[1]
		const addressaXrmAbP = await vnxManagerShaBhHv.addBearer.call(addressXnV6un, uintWluVtdA, {from: accounts[0]});
		await vnxManagerShaBhHv.onlyAdmin.call({from: accounts[1]});

		await expect(vnxManagerShaBhHv.addBearer.call(addressXnV6un, uintWluVtdA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerShaBhHv = await vnxManager.new({from: accounts[3]});
		const addressL19Yawb = accounts[1]
		const addressv1WW1s4 = accounts[4]
		const boolf5UfBkv = await vnxManagerShaBhHv.transferContractOwnership.call(addressv1WW1s4, addressL19Yawb, {from: accounts[0]});
		await vnxManagerShaBhHv.onlyAdmin.call({from: accounts[1]});
		await vnxManagerShaBhHv.onlyAdmin.call({from: accounts[0]});

		await expect(vnxManagerShaBhHv.transferContractOwnership.call(addressv1WW1s4, addressL19Yawb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerzKdFBki = await vnxManager.new({from: accounts[2]});
		const addressCvHuRW = accounts[0]
		const stringNWBguIZ = "rlCaqrNFmxwm6zZSWku6If4HHHBJnpCt7vwuUNNabINVez4"
		const boolcLHgJRp = await vnxManagerzKdFBki.isOwner.call({from: accounts[3]});
		const booljd7lcKZ = await vnxManagerzKdFBki.isOwner.call({from: accounts[4]});
		const addressbq4nuqK = await vnxManagerzKdFBki.transferOwnership.call(addressCvHuRW, {from: accounts[2]});
		const uint256ZHDYEpL = await vnxManagerzKdFBki.addRootRole.call(stringNWBguIZ, {from: accounts[2]});
		await vnxManagerzKdFBki.onlyOwner.call({from: accounts[1]});
		const boolHrjFQS = await vnxManagerzKdFBki.isAdmin.call({from: accounts[0]});

		assert.equal(boolcLHgJRp, false)
		assert.equal(booljd7lcKZ, false)
		assert.equal(uint256ZHDYEpL, BigInt("0"))
		await expect(vnxManagerzKdFBki.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})