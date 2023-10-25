const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerK9lyxVp = await vnxManager.new({from: accounts[0]});
		const addressuAITGS8 = accounts[3]
		const addressbkzgETp = accounts[4]
		const uintQb7naV = BigInt("30")
		const stringZeUIVvm = "zXoMEE4WlKhxyWCJzwRfNpCvnZeVD2kTxpKjMfDa"
		const uint256pww3td3 = await vnxManagerK9lyxVp.totalRoles.call({from: accounts[5]});
		const boolzykJmtg = await vnxManagerK9lyxVp.isAdmin.call({from: accounts[2]});
//		const boolXbbRXDS = await vnxManagerK9lyxVp.transferContractOwnership.call(addressbkzgETp, addressuAITGS8, {from: accounts[0]});
//		await vnxManagerK9lyxVp.renounceOwnership.call({from: accounts[1]});
//		const uint256H8z3NTj = await vnxManagerK9lyxVp.addRole.call(stringZeUIVvm, uintQb7naV, {from: accounts[5]});

		assert.equal(boolzykJmtg, false)
		assert.equal(uint256pww3td3, BigInt("1"))
		await expect(vnxManagerK9lyxVp.transferContractOwnership.call(addressbkzgETp, addressuAITGS8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlMhWnog = await vnxManager.new({from: accounts[3]});
		const stringUIaf5lN = "CHF2PvE8aEpgNWOB9tsenUzzxS7qVXzWM5bdn"
		const uintSriYdgF = BigInt("1386")
		const addressPwTZelo = accounts[2]
		const uint256njbv6wI = await vnxManagerlMhWnog.addRootRole.call(stringUIaf5lN, {from: accounts[2]});
//		const addressaAwMvC = await vnxManagerlMhWnog.removeBearer.call(addressPwTZelo, uintSriYdgF, {from: accounts[5]});
//		await vnxManagerlMhWnog.renounceOwnership.call({from: accounts[5]});
//		await vnxManagerlMhWnog.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256njbv6wI, BigInt("0"))
		await expect(vnxManagerlMhWnog.removeBearer.call(addressPwTZelo, uintSriYdgF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagernJ9Dhfi = await vnxManager.new({from: accounts[4]});
		const uintPJa48H = BigInt("824")
		const string7UMqkm = "UYhOFEXRm4qfmF7pvG"
		const addressS7lqcux = accounts[1]
		const boolcH9sVg = await vnxManagernJ9Dhfi.isOwner.call({from: accounts[2]});
//		const uint256df9aCXO = await vnxManagernJ9Dhfi.addRole.call(string7UMqkm, uintPJa48H, {from: accounts[0]});
//		const addresswFrcQEz = await vnxManagernJ9Dhfi.transferOwnership.call(addressS7lqcux, {from: accounts[2]});

		assert.equal(boolcH9sVg, false)
		await expect(vnxManagernJ9Dhfi.addRole.call(string7UMqkm, uintPJa48H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerjBhDHxy = await vnxManager.new({from: accounts[0]});
		const stringQRUvOZi = "LiqWJa2vDciNJkTrohjVP3hbHOFtNVDW8piCUNrb9EbIT"
		const addresszY24hxP = accounts[3]
		const addressSN44iE4 = accounts[4]
		const uintUe3a572 = BigInt("343")
		const stringUUyHBWO = "WTE7UaYJgBNd4KgN2MERe9RY681hAr5Sq3QHme4W7jRrQtSXxxA8zgrNrRzv3JD4rBuBAyagS7zq"
		const uint256ltkj9ZS = await vnxManagerjBhDHxy.addRootRole.call(stringQRUvOZi, {from: accounts[0]});
//		const boolRq5ky9 = await vnxManagerjBhDHxy.transferContractOwnership.call(addressSN44iE4, addresszY24hxP, {from: accounts[2]});
//		const uint256YMM7lzr = await vnxManagerjBhDHxy.addRole.call(stringUUyHBWO, uintUe3a572, {from: accounts[1]});
//		const boolFbmW9Fu = await vnxManagerjBhDHxy.isOwner.call({from: accounts[4]});

		assert.equal(uint256ltkj9ZS, BigInt("0"))
		await expect(vnxManagerjBhDHxy.transferContractOwnership.call(addressSN44iE4, addresszY24hxP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagercydNGah = await vnxManager.new({from: accounts[3]});
		const uint256DoiwQJ4 = await vnxManagercydNGah.totalRoles.call({from: accounts[4]});
//		await vnxManagercydNGah.renounceOwnership.call({from: accounts[4]});
//		await vnxManagercydNGah.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256DoiwQJ4, BigInt("1"))
		await expect(vnxManagercydNGah.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerHDjh99I = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKv16Kl = accounts[2]
		const addressr9Czzp = accounts[3]
		const uintY1MvfIx = BigInt("544")
		const stringKonUbI6 = "E3l8y4iAsUK42nCFUCgGJPzfzG9dphHZ19ekgh58Kgi3JQjqLDJBQscxdAr54KRM15M4s"
		const boolUrWAovK = await vnxManagerHDjh99I.transferContractOwnership.call(addressr9Czzp, addressKv16Kl, {from: accounts[4]});
		const uint256mvSyWiZ = await vnxManagerHDjh99I.addRole.call(stringKonUbI6, uintY1MvfIx, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for vnxManager', async () => {
		const vnxManagerlMhWnog = await vnxManager.new({from: accounts[3]});
		const stringUIaf5lN = "CHF2PvE8aEpgNWOB9tsenUzzxS7qVXzWM5bdn"
		const uintKbsLSiS = BigInt("1386")
		const addressscl2cqh = accounts[3]
		const uint256njbv6wI = await vnxManagerlMhWnog.addRootRole.call(stringUIaf5lN, {from: accounts[2]});
		const boolwj42YrA = await vnxManagerlMhWnog.isOwner.call({from: accounts[3]});
//		await vnxManagerlMhWnog.renounceOwnership.call({from: accounts[3]});
//		const addressaAwMvC = await vnxManagerlMhWnog.removeBearer.call(addressscl2cqh, uintKbsLSiS, {from: accounts[5]});
//		await vnxManagerlMhWnog.renounceOwnership.call({from: accounts[5]});
//		await vnxManagerlMhWnog.renounceOwnership.call({from: accounts[0]});
//		await vnxManagerlMhWnog.onlyOwner.call({from: accounts[2]});

		assert.equal(boolwj42YrA, true)
		assert.equal(uint256njbv6wI, BigInt("0"))
		await expect(vnxManagerlMhWnog.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlMhWnog = await vnxManager.new({from: accounts[3]});
		const stringUIaf5lN = "CHF2PvE8aEpgNWOB9tsenUzzxS7qVXzWM5bdn"
		const uintCIBBBaN = BigInt("1386")
		const addressHV2zZLB = accounts[3]
		const uint256njbv6wI = await vnxManagerlMhWnog.addRootRole.call(stringUIaf5lN, {from: accounts[2]});
//		await vnxManagerlMhWnog.onlyAdmin.call({from: accounts[0]});
//		const addressaAwMvC = await vnxManagerlMhWnog.removeBearer.call(addressHV2zZLB, uintCIBBBaN, {from: accounts[5]});
//		await vnxManagerlMhWnog.onlyOwner.call({from: accounts[0]});
//		await vnxManagerlMhWnog.renounceOwnership.call({from: accounts[5]});
//		await vnxManagerlMhWnog.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256njbv6wI, BigInt("0"))
		await expect(vnxManagerlMhWnog.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlMhWnog = await vnxManager.new({from: accounts[3]});
		const stringUIaf5lN = "CHF2PvE8aEpgNWOB9tsenUzzxS7qVXzWM5bdn"
		const uintvhtGxx = BigInt("989")
		const addressoCGb8X7 = accounts[2]
		const addressBPov2n2 = accounts[2]
		const uint256njbv6wI = await vnxManagerlMhWnog.addRootRole.call(stringUIaf5lN, {from: accounts[2]});
//		const addressu7LRyWr = await vnxManagerlMhWnog.addBearer.call(addressoCGb8X7, uintvhtGxx, {from: accounts[4]});
//		const booll4CkjeB = await vnxManagerlMhWnog.isOwner.call({from: accounts[5]});
//		const addressTXcQ4y = await vnxManagerlMhWnog.transferOwnership.call(addressBPov2n2, {from: accounts[1]});
//		await vnxManagerlMhWnog.renounceOwnership.call({from: accounts[5]});
//		const boolRmlHKaL = await vnxManagerlMhWnog.isAdmin.call({from: accounts[3]});
//		await vnxManagerlMhWnog.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256njbv6wI, BigInt("0"))
		await expect(vnxManagerlMhWnog.addBearer.call(addressoCGb8X7, uintvhtGxx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlMhWnog = await vnxManager.new({from: accounts[3]});
		const stringUIaf5lN = "CHF2PvE8aEpgNWOB9tsenUzzxS7qVXzWM5bdn"
		const uintFo4V2cc = BigInt("1386")
		const addresse0AB6r9 = accounts[2]
		const uintMzMlKwU = BigInt("924")
		const stringTFWwf7a = "OwZN3vc7riBdFNoyzB91IvodKr5YGaMPWhDgrOiKnOMLOjas6Cf"
		const uintMugJmJt = BigInt("966")
		const addressMwceisv = accounts[3]
		const uint256njbv6wI = await vnxManagerlMhWnog.addRootRole.call(stringUIaf5lN, {from: accounts[2]});
		const addressHFXcZOI = await vnxManagerlMhWnog.owner.call({from: accounts[5]});
//		const addressaAwMvC = await vnxManagerlMhWnog.removeBearer.call(addresse0AB6r9, uintFo4V2cc, {from: accounts[5]});
//		const uint256KUessF = await vnxManagerlMhWnog.addRole.call(stringTFWwf7a, uintMzMlKwU, {from: accounts[1]});
//		const addressMrE5ojl = await vnxManagerlMhWnog.addBearer.call(addressMwceisv, uintMugJmJt, {from: accounts[2]});
//		await vnxManagerlMhWnog.renounceOwnership.call({from: accounts[5]});
//		const boolLoK16Uc = await vnxManagerlMhWnog.isAdmin.call({from: accounts[0]});
//		await vnxManagerlMhWnog.onlyOwner.call({from: accounts[2]});

		assert.equal(addressHFXcZOI, 0x4750ACE5Cf60C5CE64C612320924240547C14315)
		assert.equal(uint256njbv6wI, BigInt("0"))
		await expect(vnxManagerlMhWnog.removeBearer.call(addresse0AB6r9, uintFo4V2cc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlMhWnog = await vnxManager.new({from: accounts[3]});
		const addressLteP00r = accounts[3]
		const uintOtIl7Rz = BigInt("1386")
		const addressMJ2adb1 = accounts[2]
		const addressutyE7D = await vnxManagerlMhWnog.transferOwnership.call(addressLteP00r, {from: accounts[3]});
		const uint256FzUkWEm = await vnxManagerlMhWnog.totalRoles.call({from: accounts[2]});
//		const addressaAwMvC = await vnxManagerlMhWnog.removeBearer.call(addressMJ2adb1, uintOtIl7Rz, {from: accounts[5]});
//		await vnxManagerlMhWnog.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256FzUkWEm, BigInt("1"))
		await expect(vnxManagerlMhWnog.removeBearer.call(addressMJ2adb1, uintOtIl7Rz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlMhWnog = await vnxManager.new({from: accounts[3]});
		const uintfK4bXND = BigInt("0")
		const addressfNBJAj = accounts[2]
		const stringvdlUlFK = "bZVvS4ClGE7o4"
//		const addressaAwMvC = await vnxManagerlMhWnog.removeBearer.call(addressfNBJAj, uintfK4bXND, {from: accounts[5]});
//		const uint2563ZQcbE = await vnxManagerlMhWnog.addRootRole.call(stringvdlUlFK, {from: accounts[1]});

		await expect(vnxManagerlMhWnog.removeBearer.call(addressfNBJAj, uintfK4bXND, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})