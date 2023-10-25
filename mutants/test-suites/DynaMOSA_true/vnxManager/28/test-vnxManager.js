const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerAb1UlAJ = await vnxManager.new({from: accounts[4]});
		const uintp9OxWDh = BigInt("978")
		const stringoWZ0khV = "zCAog1jXLKd0DTTfddgeNwGSG44IRUL2qpl4V7YrEfBusj"
		const addressb1fiqLY = "0x0000000000000000000000000000000000000001"
		const addressKTSIrtb = accounts[1]
//		const uint256Q2ybudJ = await vnxManagerAb1UlAJ.addRole.call(stringoWZ0khV, uintp9OxWDh, {from: accounts[3]});
//		const boolHioaVIm = await vnxManagerAb1UlAJ.isOwner.call({from: accounts[3]});
//		const boolPFHMokn = await vnxManagerAb1UlAJ.transferContractOwnership.call(addressKTSIrtb, addressb1fiqLY, {from: accounts[2]});
//		const uint256PpuvN0O = await vnxManagerAb1UlAJ.totalRoles.call({from: accounts[2]});
//		const uint256zKm3WKy = await vnxManagerAb1UlAJ.totalRoles.call({from: accounts[0]});
//		const boolkgUUwR = await vnxManagerAb1UlAJ.isOwner.call({from: accounts[4]});

		await expect(vnxManagerAb1UlAJ.addRole.call(stringoWZ0khV, uintp9OxWDh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerAaQu0B = await vnxManager.new({from: accounts[2]});
		const addressWwGGdme = accounts[4]
		const addressRVH1lyD = accounts[5]
		const uintevp1HWH = BigInt("621")
		const addressqLMVIA8 = accounts[3]
//		const boolucQOKbp = await vnxManagerAaQu0B.transferContractOwnership.call(addressRVH1lyD, addressWwGGdme, {from: accounts[4]});
//		const boolqX0RV6G = await vnxManagerAaQu0B.hasRole.call(addressqLMVIA8, uintevp1HWH, {from: accounts[0]});

		await expect(vnxManagerAaQu0B.transferContractOwnership.call(addressRVH1lyD, addressWwGGdme, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerraUrnw = await vnxManager.new({from: accounts[0]});
		const stringLjAUIxm = "zyZ5pj22XWDtk4Nd7ScWt3B2NEG5MNk1tS2krQWld4eR1zf86vXhLatgY1OrjDjjvTucM"
//		await vnxManagerraUrnw.onlyAdmin.call({from: accounts[5]});
//		const uint256cS24j4s = await vnxManagerraUrnw.addRootRole.call(stringLjAUIxm, {from: accounts[0]});
//		const addresscjNmqct = await vnxManagerraUrnw.owner.call({from: accounts[4]});

		await expect(vnxManagerraUrnw.onlyAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwuKuZRb = await vnxManager.new({from: accounts[0]});
		const addressKM2F3w8 = accounts[1]
		const addressUZa1KPP = accounts[1]
		const uintXOkAGO = BigInt("1376")
		const stringYBXQY1Q = "P7pW491nZyIVoOJF20Oecegs9S4TkeySO"
		const addressqpRWWOf = await vnxManagerwuKuZRb.transferOwnership.call(addressKM2F3w8, {from: accounts[0]});
//		const addressWjNzAI3 = await vnxManagerwuKuZRb.transferOwnership.call(addressUZa1KPP, {from: accounts[2]});
//		const boolzSETYKI = await vnxManagerwuKuZRb.isAdmin.call({from: accounts[3]});
//		await vnxManagerwuKuZRb.renounceOwnership.call({from: accounts[2]});
//		const uint256xAtWijs = await vnxManagerwuKuZRb.addRole.call(stringYBXQY1Q, uintXOkAGO, {from: accounts[2]});

		await expect(vnxManagerwuKuZRb.transferOwnership.call(addressUZa1KPP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerS803xPW = await vnxManager.new({from: accounts[0]});
		const uintj68lPKB = BigInt("593")
		const addressfvyYF55 = accounts[2]
		const addressPE8IKiJ = accounts[0]
		const addresstqVwiiZ = accounts[2]
//		const addresskGNQkxK = await vnxManagerS803xPW.removeBearer.call(addressfvyYF55, uintj68lPKB, {from: accounts[3]});
//		const addresszO8DyUA = await vnxManagerS803xPW.transferOwnership.call(addressPE8IKiJ, {from: accounts[3]});
//		const addressEoVz2rq = await vnxManagerS803xPW.transferOwnership.call(addresstqVwiiZ, {from: accounts[2]});

		await expect(vnxManagerS803xPW.removeBearer.call(addressfvyYF55, uintj68lPKB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerdVlRM5Z = await vnxManager.new({from: accounts[4]});
		const stringr9X9lkc = "SH1UPG0zaviA8A2s15"
		const uintTad3Dq5 = BigInt("134")
		const addressk0tTqss = accounts[5]
		const uintxZC9d4T = BigInt("953")
		const addressopcnUv6 = accounts[4]
		const stringLTgNLl5 = "OOqLuv5o6WwwHQFqV"
		const uint256mWWsN2I = await vnxManagerdVlRM5Z.addRootRole.call(stringr9X9lkc, {from: accounts[5]});
//		const addressXFoLDTx = await vnxManagerdVlRM5Z.addBearer.call(addressk0tTqss, uintTad3Dq5, {from: "0x0000000000000000000000000000000000000001"});
//		const addressE0uI8B6 = await vnxManagerdVlRM5Z.removeBearer.call(addressopcnUv6, uintxZC9d4T, {from: accounts[5]});
//		await vnxManagerdVlRM5Z.onlyOwner.call({from: accounts[1]});
//		const uint256FJggQ2Q = await vnxManagerdVlRM5Z.addRootRole.call(stringLTgNLl5, {from: accounts[3]});
//		const boolzw4luur = await vnxManagerdVlRM5Z.isAdmin.call({from: accounts[3]});

		assert.equal(uint256mWWsN2I, BigInt("0"))
		await expect(vnxManagerdVlRM5Z.addBearer.call(addressk0tTqss, uintTad3Dq5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerR7jJcaB = await vnxManager.new({from: accounts[3]});
		const uintOrZHOjl = BigInt("1925")
		const addressNLVTa96 = accounts[3]
		const addressRO0bsSI = accounts[2]
		const addresskEQyNwi = accounts[4]
		const boolH73ZHOJ = await vnxManagerR7jJcaB.hasRole.call(addressNLVTa96, uintOrZHOjl, {from: accounts[4]});
		const boolIKxsry = await vnxManagerR7jJcaB.isOwner.call({from: accounts[2]});
		const uint2566RW6eZ = await vnxManagerR7jJcaB.totalRoles.call({from: accounts[2]});
		const boolEFIF4dr = await vnxManagerR7jJcaB.isAdmin.call({from: accounts[1]});
//		const boolSD1rNEs = await vnxManagerR7jJcaB.transferContractOwnership.call(addresskEQyNwi, addressRO0bsSI, {from: accounts[3]});

		assert.equal(boolEFIF4dr, false)
		assert.equal(boolH73ZHOJ, false)
		assert.equal(boolIKxsry, false)
		assert.equal(uint2566RW6eZ, BigInt("1"))
		await expect(vnxManagerR7jJcaB.transferContractOwnership.call(addresskEQyNwi, addressRO0bsSI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerS803xPW = await vnxManager.new({from: accounts[0]});
		const uintMz7Vt1H = BigInt("640")
		const address42CC0X = accounts[3]
		const addressxTlpIfw = accounts[0]
		const addressfsptFOX = await vnxManagerS803xPW.owner.call({from: accounts[3]});
//		await vnxManagerS803xPW.renounceOwnership.call({from: accounts[3]});
//		const addresskGNQkxK = await vnxManagerS803xPW.removeBearer.call(address42CC0X, uintMz7Vt1H, {from: accounts[3]});
//		const addresszO8DyUA = await vnxManagerS803xPW.transferOwnership.call(addressxTlpIfw, {from: accounts[3]});
//		await vnxManagerS803xPW.onlyAdmin.call({from: accounts[0]});
//		const boolB9CKcrl = await vnxManagerS803xPW.isAdmin.call({from: accounts[2]});

		assert.equal(addressfsptFOX, 0x908A7fd4D567aCC19fe98ae057f350e7526694bB)
		await expect(vnxManagerS803xPW.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManageralTxPCK = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiPsO9Wc = accounts[0]
		await vnxManageralTxPCK.onlyAdmin.call({from: accounts[4]});
		const boolKpLMLdU = await vnxManageralTxPCK.isAdmin.call({from: accounts[1]});
		await vnxManageralTxPCK.renounceOwnership.call({from: accounts[3]});
		await vnxManageralTxPCK.onlyAdmin.call({from: accounts[1]});
		const addressfChRDos = await vnxManageralTxPCK.transferOwnership.call(addressiPsO9Wc, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for vnxManager', async () => {
		const vnxManagerR7jJcaB = await vnxManager.new({from: accounts[3]});
		const uintNMUFe95 = BigInt("1012")
		const addressaXc9c5 = accounts[2]
		const addressV6OX3eE = accounts[4]
		const addressC9qfJlG = accounts[5]
//		await vnxManagerR7jJcaB.renounceOwnership.call({from: accounts[3]});
//		await vnxManagerR7jJcaB.onlyAdmin.call({from: accounts[2]});
//		const addressbNNTI2w = await vnxManagerR7jJcaB.removeBearer.call(addressaXc9c5, uintNMUFe95, {from: accounts[2]});
//		const boolSD1rNEs = await vnxManagerR7jJcaB.transferContractOwnership.call(addressC9qfJlG, addressV6OX3eE, {from: accounts[3]});

		await expect(vnxManagerR7jJcaB.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})