const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerbAnqiu6 = await vnxManager.new({from: accounts[0]});
		const addressttp0nod = accounts[3]
		const addressKFY6fpr = accounts[3]
		const addressGWI0O87 = accounts[5]
		const addressC6GHtQS = "0x0000000000000000000000000000000000000001"
		const boolJLZHqK = await vnxManagerbAnqiu6.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const boolDQULZsm = await vnxManagerbAnqiu6.transferContractOwnership.call(addressKFY6fpr, addressttp0nod, {from: accounts[1]});
		const boolTZOmTsA = await vnxManagerbAnqiu6.transferContractOwnership.call(addressC6GHtQS, addressGWI0O87, {from: accounts[2]});

		assert.equal(boolJLZHqK, false)
		await expect(vnxManagerbAnqiu6.transferContractOwnership.call(addressKFY6fpr, addressttp0nod, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerNoVNKCM = await vnxManager.new({from: accounts[0]});
		const stringeIaVI2r = "ajiH5g82hiZS7LFbXU23db45PcKCJT4zeQhypHu2Yy6W8"
		const addressAHecRoO = accounts[4]
		const addressOBwqAOT = accounts[0]
		const boolh54hBy7 = await vnxManagerNoVNKCM.isOwner.call({from: accounts[4]});
		const uint256ziEtt7S = await vnxManagerNoVNKCM.addRootRole.call(stringeIaVI2r, {from: accounts[0]});
		const boolytuZALD = await vnxManagerNoVNKCM.transferContractOwnership.call(addressOBwqAOT, addressAHecRoO, {from: accounts[2]});
		await vnxManagerNoVNKCM.onlyAdmin.call({from: accounts[2]});
		const boolrk3DDxY = await vnxManagerNoVNKCM.isOwner.call({from: accounts[0]});

		assert.equal(boolh54hBy7, false)
		assert.equal(uint256ziEtt7S, BigInt("0"))
		await expect(vnxManagerNoVNKCM.transferContractOwnership.call(addressOBwqAOT, addressAHecRoO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagergoOoQWe = await vnxManager.new({from: accounts[0]});
		const addressOJ2hgVR = "0x0000000000000000000000000000000000000001"
		const addressDKjy09O = accounts[4]
		const addressQGhoqyO = await vnxManagergoOoQWe.transferOwnership.call(addressOJ2hgVR, {from: accounts[2]});
		const addressogB6z8I = await vnxManagergoOoQWe.transferOwnership.call(addressDKjy09O, {from: accounts[3]});

		await expect(vnxManagergoOoQWe.transferOwnership.call(addressOJ2hgVR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerdYbpEp1 = await vnxManager.new({from: accounts[3]});
		const uint256vHDFamO = await vnxManagerdYbpEp1.totalRoles.call({from: accounts[2]});
		await vnxManagerdYbpEp1.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256vHDFamO, BigInt("1"))
		await expect(vnxManagerdYbpEp1.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManager9lppQv = await vnxManager.new({from: accounts[1]});
		const uintlydO8Pp = BigInt("1151")
		const addressbgFKY8u = accounts[4]
		const uintiyXI3Hd = BigInt("226")
		const stringJZO8azE = "X1ACQ5hcA5SaG7glXtqsXYPJlgxpy4G9KJSYtAyLGFeuiB2K3AMDqwenIxMsUn98gXMsIJXJIFC4oFnPf"
		const addressZLT8JlK = await vnxManager9lppQv.addBearer.call(addressbgFKY8u, uintlydO8Pp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256O7bmiS = await vnxManager9lppQv.addRole.call(stringJZO8azE, uintiyXI3Hd, {from: accounts[5]});
		const boolEmclni = await vnxManager9lppQv.isOwner.call({from: accounts[4]});

		await expect(vnxManager9lppQv.addBearer.call(addressbgFKY8u, uintlydO8Pp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManager6Zpncg = await vnxManager.new({from: accounts[1]});
		const uintpdskhpR = BigInt("71")
		const addressYrJQYtc = accounts[2]
		await vnxManager6Zpncg.onlyOwner.call({from: accounts[4]});
		const boolm6tarU7 = await vnxManager6Zpncg.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const addressIYyeyR5 = await vnxManager6Zpncg.addBearer.call(addressYrJQYtc, uintpdskhpR, {from: accounts[4]});
		const boolqKyAyW5 = await vnxManager6Zpncg.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManager6Zpncg.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerNoVNKCM = await vnxManager.new({from: accounts[0]});
		const stringeIaVI2r = "ajiH5g82hiZS7LFbXU23db45PcKCJT4zeQhypHu2Yy6W8"
		const uintmb0ZMHC = BigInt("124")
		const stringQodMewh = "puGvK7BMm"
		const addresseFTdAGz = accounts[4]
		const addresse7iK0Oo = accounts[1]
		const boolh54hBy7 = await vnxManagerNoVNKCM.isOwner.call({from: accounts[4]});
		const uint256ziEtt7S = await vnxManagerNoVNKCM.addRootRole.call(stringeIaVI2r, {from: accounts[0]});
		const uint256j3oK2n = await vnxManagerNoVNKCM.addRole.call(stringQodMewh, uintmb0ZMHC, {from: "0x0000000000000000000000000000000000000001"});
		const boolytuZALD = await vnxManagerNoVNKCM.transferContractOwnership.call(addresse7iK0Oo, addresseFTdAGz, {from: accounts[2]});
		await vnxManagerNoVNKCM.onlyAdmin.call({from: accounts[2]});
		const boolrk3DDxY = await vnxManagerNoVNKCM.isOwner.call({from: accounts[0]});

		assert.equal(boolh54hBy7, false)
		assert.equal(uint256ziEtt7S, BigInt("0"))
		await expect(vnxManagerNoVNKCM.addRole.call(stringQodMewh, uintmb0ZMHC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagereInmZpb = await vnxManager.new({from: accounts[2]});
		const addressSwiylSi = accounts[4]
		const address6Lw9Zt = accounts[4]
		const uintzIW9Kgx = BigInt("593")
		const addressfZm4sW2 = accounts[5]
		const boolHogjDou = await vnxManagereInmZpb.transferContractOwnership.call(address6Lw9Zt, addressSwiylSi, {from: accounts[2]});
		const boolnWYY0w3 = await vnxManagereInmZpb.hasRole.call(addressfZm4sW2, uintzIW9Kgx, {from: accounts[1]});

		await expect(vnxManagereInmZpb.transferContractOwnership.call(address6Lw9Zt, addressSwiylSi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagereInmZpb = await vnxManager.new({from: accounts[2]});
		const uintqN4XwtY = BigInt("226")
		const addressQseF1hl = accounts[4]
		const stringXfoXy6B = "Zx6czFmVhFGbBvSW6LlJNbIOKGjdjLzu9s6jT4KQWdYer7eBOya4r8llobR1WrMB3AR56qCKYWOz"
		const boolBmCD2ac = await vnxManagereInmZpb.isOwner.call({from: accounts[0]});
		const boolnWYY0w3 = await vnxManagereInmZpb.hasRole.call(addressQseF1hl, uintqN4XwtY, {from: accounts[1]});
		const addressVUJiGRw = await vnxManagereInmZpb.owner.call({from: accounts[2]});
		const uint256jGKaz6E = await vnxManagereInmZpb.addRootRole.call(stringXfoXy6B, {from: accounts[0]});

		assert.equal(addressVUJiGRw, 0x70e443Eb101f152cd98C8fc7bA817d2DA3B10A40)
		assert.equal(boolBmCD2ac, false)
		assert.equal(boolnWYY0w3, false)
		assert.equal(uint256jGKaz6E, BigInt("0"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerHVoapZp = await vnxManager.new({from: accounts[2]});
		const addressjfz5yIq = accounts[0]
		const addressrHnFUqN = accounts[3]
		const addressFxvcqrL = await vnxManagerHVoapZp.transferOwnership.call(addressjfz5yIq, {from: accounts[2]});
		const addressxXOo2mf = await vnxManagerHVoapZp.transferOwnership.call(addressrHnFUqN, {from: accounts[5]});

		await expect(vnxManagerHVoapZp.transferOwnership.call(addressrHnFUqN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagereInmZpb = await vnxManager.new({from: accounts[2]});
		const uintI6QgkLX = BigInt("594")
		const addressoOimjyf = accounts[4]
		const stringwc3FRq = "qHnplclnF3KvcWRWYKd8zqtNj84YT3TmB8RkPQdleU7puFHYsP4XcIfxd3"
		const uintdbzhaCV = BigInt("53")
		const addressHCvj1gm = accounts[4]
		const boolnWYY0w3 = await vnxManagereInmZpb.hasRole.call(addressoOimjyf, uintI6QgkLX, {from: accounts[1]});
		const uint256U8qjrGz = await vnxManagereInmZpb.addRootRole.call(stringwc3FRq, {from: accounts[0]});
		const address16fGOV = await vnxManagereInmZpb.removeBearer.call(addressHCvj1gm, uintdbzhaCV, {from: accounts[3]});

		assert.equal(boolnWYY0w3, false)
		assert.equal(uint256U8qjrGz, BigInt("0"))
		await expect(vnxManagereInmZpb.removeBearer.call(addressHCvj1gm, uintdbzhaCV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerVNHn0R = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintY1ejOun = BigInt("964")
		const addressOYnXcvM = accounts[2]
		const addresswXQnFx0 = accounts[1]
		const addressmrOKltG = accounts[3]
		const addressG4SCf9U = accounts[3]
		const bool5Tw4nQ = await vnxManagerVNHn0R.hasRole.call(addressOYnXcvM, uintY1ejOun, {from: accounts[2]});
		const boolHrkt8tZ = await vnxManagerVNHn0R.transferContractOwnership.call(addressmrOKltG, addresswXQnFx0, {from: accounts[0]});
		const addressQKOj4x4 = await vnxManagerVNHn0R.transferOwnership.call(addressG4SCf9U, {from: accounts[3]});
		await vnxManagerVNHn0R.renounceOwnership.call({from: accounts[0]});
		await vnxManagerVNHn0R.onlyAdmin.call({from: accounts[3]});
	});

	it('test for vnxManager', async () => {
		const vnxManagereInmZpb = await vnxManager.new({from: accounts[2]});
		const uintuN6kQj2 = BigInt("0")
		const addressDz6liJh = accounts[2]
		const uintGPm8nb8 = BigInt("1328")
		const addressao81po = accounts[4]
		const addressFsxQhCI = await vnxManagereInmZpb.addBearer.call(addressDz6liJh, uintuN6kQj2, {from: accounts[5]});
		const boolnWYY0w3 = await vnxManagereInmZpb.hasRole.call(addressao81po, uintGPm8nb8, {from: accounts[1]});

		await expect(vnxManagereInmZpb.addBearer.call(addressDz6liJh, uintuN6kQj2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})