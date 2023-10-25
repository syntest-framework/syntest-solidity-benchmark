const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerJq2aqvs = await vnxManager.new({from: accounts[4]});
		const uintcolEPAU = BigInt("1368")
		const addresslDoq3BQ = accounts[1]
		const addressLNj3i4w = accounts[2]
		const uintCZBIqDv = BigInt("1796")
		const addressBvfiTI = accounts[1]
		const addressdOWA675 = await vnxManagerJq2aqvs.removeBearer.call(addresslDoq3BQ, uintcolEPAU, {from: accounts[1]});
		await vnxManagerJq2aqvs.renounceOwnership.call({from: accounts[4]});
		const addressRVXME0 = await vnxManagerJq2aqvs.transferOwnership.call(addressLNj3i4w, {from: accounts[0]});
		const uint256iXxh6zq = await vnxManagerJq2aqvs.totalRoles.call({from: accounts[2]});
		const addressAR2mRu2 = await vnxManagerJq2aqvs.addBearer.call(addressBvfiTI, uintCZBIqDv, {from: accounts[3]});

		await expect(vnxManagerJq2aqvs.removeBearer.call(addresslDoq3BQ, uintcolEPAU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagermedHbqR = await vnxManager.new({from: accounts[2]});
		const uintG3uPOAA = BigInt("242")
		const addressRPRzoX7 = accounts[1]
		const boolqj40AJh = await vnxManagermedHbqR.isAdmin.call({from: accounts[2]});
		const boolsy9OqWT = await vnxManagermedHbqR.isAdmin.call({from: accounts[2]});
		const addressN3b7awD = await vnxManagermedHbqR.removeBearer.call(addressRPRzoX7, uintG3uPOAA, {from: accounts[0]});
		const boolMURFeGc = await vnxManagermedHbqR.isAdmin.call({from: accounts[2]});

		assert.equal(boolqj40AJh, true)
		assert.equal(boolsy9OqWT, true)
		await expect(vnxManagermedHbqR.removeBearer.call(addressRPRzoX7, uintG3uPOAA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxqqhyVg = await vnxManager.new({from: accounts[3]});
		const uintcvkzMN9 = BigInt("975")
		const stringYpi8Y8w = "YLfVR5zcrFBtMF3wim3FnOFUpMI6HuU5N9OB4VIXlaQKm3tm7rCDpNeMyoO7hhhOcJ7n2GciRKtYt"
		const uintA9sadt0 = BigInt("1863")
		const addressP8901Cp = accounts[3]
		const uint256FPzVDng = await vnxManagerxqqhyVg.addRole.call(stringYpi8Y8w, uintcvkzMN9, {from: accounts[3]});
		const boolbOMresL = await vnxManagerxqqhyVg.hasRole.call(addressP8901Cp, uintA9sadt0, {from: accounts[5]});
		const uint256kPm5u1 = await vnxManagerxqqhyVg.totalRoles.call({from: accounts[3]});
		const booleSG1ujM = await vnxManagerxqqhyVg.isOwner.call({from: accounts[4]});
		const boolnUQEBtg = await vnxManagerxqqhyVg.isOwner.call({from: accounts[0]});
		const uint256XVLaBdf = await vnxManagerxqqhyVg.totalRoles.call({from: accounts[4]});

		await expect(vnxManagerxqqhyVg.addRole.call(stringYpi8Y8w, uintcvkzMN9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxn4Eg2 = await vnxManager.new({from: accounts[2]});
		const uintc5yqrlZ = BigInt("702")
		const addressgFTRKyL = accounts[2]
		const addressXvPaMkt = await vnxManagerxn4Eg2.addBearer.call(addressgFTRKyL, uintc5yqrlZ, {from: accounts[1]});
		const booloN4juuC = await vnxManagerxn4Eg2.isAdmin.call({from: accounts[5]});
		const boolmcS0CnC = await vnxManagerxn4Eg2.isOwner.call({from: accounts[1]});

		await expect(vnxManagerxn4Eg2.addBearer.call(addressgFTRKyL, uintc5yqrlZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerE7imQAa = await vnxManager.new({from: accounts[3]});
		const addressd8KWPx1 = accounts[5]
		const addressDYOTUHa = accounts[5]
		const addressqNdFvUr = accounts[3]
		const stringQ9zQZr = "Ji7BlOOWVtODrNwnlUtUHGKRPpXuX6vdjnUJNyoh2BDWRSQwJXwPVzQpFrB96S2GjA1QORbMPa6mHkrUx3YBYF1"
		const addressl89ddfK = accounts[0]
		const addresszk1iHLG = accounts[5]
		const addressJJnYFPh = accounts[2]
		const addressfEL4QG = accounts[3]
		const addressnenKyBK = await vnxManagerE7imQAa.transferOwnership.call(addressd8KWPx1, {from: accounts[4]});
		const booleqDmHp = await vnxManagerE7imQAa.transferContractOwnership.call(addressqNdFvUr, addressDYOTUHa, {from: accounts[5]});
		const uint256QtqbMl = await vnxManagerE7imQAa.addRootRole.call(stringQ9zQZr, {from: accounts[1]});
		const boolIBcAdx = await vnxManagerE7imQAa.transferContractOwnership.call(addresszk1iHLG, addressl89ddfK, {from: accounts[2]});
		const boolTlc4Awe = await vnxManagerE7imQAa.isOwner.call({from: accounts[5]});
		const boolfvN8Vb = await vnxManagerE7imQAa.transferContractOwnership.call(addressfEL4QG, addressJJnYFPh, {from: accounts[2]});

		await expect(vnxManagerE7imQAa.transferOwnership.call(addressd8KWPx1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagervpsmGK = await vnxManager.new({from: accounts[0]});
		const address1b3Enj = accounts[3]
		const addresseBQ8955 = accounts[1]
		const uintBHZWpX = BigInt("133")
		const stringlUkoGH2 = "zEYIqBeibo5zALf"
		const addressAzWpmal = accounts[0]
		const addressifgjsUq = accounts[0]
		const boolyQP288h = await vnxManagervpsmGK.transferContractOwnership.call(addresseBQ8955, address1b3Enj, {from: accounts[2]});
		const uint256IYFImHW = await vnxManagervpsmGK.totalRoles.call({from: accounts[1]});
		const uint256EURcu5u = await vnxManagervpsmGK.addRole.call(stringlUkoGH2, uintBHZWpX, {from: accounts[3]});
		const boolZ9aWVhl = await vnxManagervpsmGK.transferContractOwnership.call(addressifgjsUq, addressAzWpmal, {from: accounts[4]});
		await vnxManagervpsmGK.renounceOwnership.call({from: accounts[0]});

		await expect(vnxManagervpsmGK.transferContractOwnership.call(addresseBQ8955, address1b3Enj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerJq2aqvs = await vnxManager.new({from: accounts[4]});
		const uintHGe0IDL = BigInt("1368")
		const addressXnc3kZv = accounts[1]
		const addressMVStkpc = accounts[2]
		const uintGSHo5d = BigInt("1796")
		const addressOdeia7O = accounts[1]
		await vnxManagerJq2aqvs.onlyAdmin.call({from: accounts[0]});
		const addressdOWA675 = await vnxManagerJq2aqvs.removeBearer.call(addressXnc3kZv, uintHGe0IDL, {from: accounts[1]});
		await vnxManagerJq2aqvs.renounceOwnership.call({from: accounts[4]});
		const addressRVXME0 = await vnxManagerJq2aqvs.transferOwnership.call(addressMVStkpc, {from: accounts[0]});
		const uint256iXxh6zq = await vnxManagerJq2aqvs.totalRoles.call({from: accounts[2]});
		const addressAR2mRu2 = await vnxManagerJq2aqvs.addBearer.call(addressOdeia7O, uintGSHo5d, {from: accounts[3]});

		await expect(vnxManagerJq2aqvs.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagermedHbqR = await vnxManager.new({from: accounts[2]});
		const uints2wms1C = BigInt("209")
		const addressgKTUBVj = accounts[1]
		const boolqj40AJh = await vnxManagermedHbqR.isAdmin.call({from: accounts[2]});
		const uint256Nu3P7CU = await vnxManagermedHbqR.totalRoles.call({from: accounts[2]});
		const boolsy9OqWT = await vnxManagermedHbqR.isAdmin.call({from: accounts[2]});
		const addressN3b7awD = await vnxManagermedHbqR.removeBearer.call(addressgKTUBVj, uints2wms1C, {from: accounts[0]});
		const boolMURFeGc = await vnxManagermedHbqR.isAdmin.call({from: accounts[2]});

		assert.equal(boolqj40AJh, true)
		assert.equal(boolsy9OqWT, true)
		assert.equal(uint256Nu3P7CU, BigInt("1"))
		await expect(vnxManagermedHbqR.removeBearer.call(addressgKTUBVj, uints2wms1C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerAoN1PCj = await vnxManager.new({from: accounts[1]});
		const uints1l0f2B = BigInt("749")
		const addressJw4Rdau = accounts[3]
		const uintNRIk7Mz = BigInt("1231")
		const addressz4gIot1 = accounts[0]
		const uintajFgokk = BigInt("1622")
		const addressjxf5qzC = accounts[2]
		const addressN0zwZKP = await vnxManagerAoN1PCj.owner.call({from: accounts[4]});
		const boolmzbng3 = await vnxManagerAoN1PCj.hasRole.call(addressJw4Rdau, uints1l0f2B, {from: accounts[3]});
		await vnxManagerAoN1PCj.renounceOwnership.call({from: accounts[3]});
		const addresswShW7hU = await vnxManagerAoN1PCj.addBearer.call(addressz4gIot1, uintNRIk7Mz, {from: accounts[3]});
		const addressjIazWt = await vnxManagerAoN1PCj.addBearer.call(addressjxf5qzC, uintajFgokk, {from: accounts[1]});

		assert.equal(addressN0zwZKP, 0x4a854fb01F6737c3ECc1F0394Ba3845F1fA7F914)
		assert.equal(boolmzbng3, false)
		await expect(vnxManagerAoN1PCj.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerkqlksbC = await vnxManager.new({from: accounts[1]});
		const addressYgagORD = accounts[4]
		const addressvtUPAi4 = accounts[1]
		const addressEOpQvEk = await vnxManagerkqlksbC.transferOwnership.call(addressYgagORD, {from: accounts[1]});
		const boolpMO5iHY = await vnxManagerkqlksbC.isOwner.call({from: accounts[1]});
		const addressF60Q6jY = await vnxManagerkqlksbC.transferOwnership.call(addressvtUPAi4, {from: accounts[1]});
		const uint256iCiCp6W = await vnxManagerkqlksbC.totalRoles.call({from: accounts[3]});

		assert.equal(boolpMO5iHY, true)
		assert.equal(uint256iCiCp6W, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagersAV2fAk = await vnxManager.new({from: accounts[2]});
		const uintZwMoL57 = BigInt("1822")
		const stringrq79US = "JmgFH5rpmkxwZLes34BAIfxhsd2qORVzHagA7u9U6kcW4AK2"
		const boolTzfyuC0 = await vnxManagersAV2fAk.isAdmin.call({from: accounts[1]});
		await vnxManagersAV2fAk.renounceOwnership.call({from: accounts[2]});
		await vnxManagersAV2fAk.renounceOwnership.call({from: accounts[5]});
		const uint256EbRmYi = await vnxManagersAV2fAk.addRole.call(stringrq79US, uintZwMoL57, {from: accounts[3]});

		assert.equal(boolTzfyuC0, false)
		await expect(vnxManagersAV2fAk.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerNP3KDhA = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdXELDtM = accounts[3]
		const addressTAesPG = accounts[2]
		const addresswO4SjW = await vnxManagerNP3KDhA.transferOwnership.call(addressdXELDtM, {from: accounts[4]});
		const boolrxecsnU = await vnxManagerNP3KDhA.isOwner.call({from: accounts[0]});
		const addressHaytJ7 = await vnxManagerNP3KDhA.transferOwnership.call(addressTAesPG, {from: accounts[4]});
		await vnxManagerNP3KDhA.onlyAdmin.call({from: accounts[2]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerxn4Eg2 = await vnxManager.new({from: accounts[2]});
		const addressjX9zHE = accounts[4]
		const addressTFhhObI = accounts[0]
		const uintL7VGp4K = BigInt("710")
		const addresszG2VK5A = accounts[2]
		const boolO3rBM8p = await vnxManagerxn4Eg2.transferContractOwnership.call(addressTFhhObI, addressjX9zHE, {from: accounts[2]});
		const addressXvPaMkt = await vnxManagerxn4Eg2.addBearer.call(addresszG2VK5A, uintL7VGp4K, {from: accounts[1]});
		await vnxManagerxn4Eg2.onlyAdmin.call({from: accounts[3]});
		await vnxManagerxn4Eg2.onlyOwner.call({from: accounts[2]});

		await expect(vnxManagerxn4Eg2.transferContractOwnership.call(addressTFhhObI, addressjX9zHE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxn4Eg2 = await vnxManager.new({from: accounts[2]});
		const addressg68jQuG = "0x0000000000000000000000000000000000000000"
		const addressWp45MZS = accounts[2]
		const addressFj8O2xs = accounts[5]
		const addressUzphdXI = accounts[1]
		const stringsD4qMtf = "HYkdze5CAbOOVkwNzmYGCnHKsYcTVcueSgWZvTZfuGmvpELADvY0XzWUgcRGs5j2nXmk"
		const uintHzAYXHe = BigInt("1999")
		const addresswfxySEx = "0x0000000000000000000000000000000000000001"
		const boolV9vvblR = await vnxManagerxn4Eg2.transferContractOwnership.call(addressWp45MZS, addressg68jQuG, {from: accounts[2]});
		await vnxManagerxn4Eg2.onlyOwner.call({from: accounts[1]});
		const boolfABC0wu = await vnxManagerxn4Eg2.transferContractOwnership.call(addressUzphdXI, addressFj8O2xs, {from: accounts[1]});
		const uint2561AjtWp = await vnxManagerxn4Eg2.addRootRole.call(stringsD4qMtf, {from: accounts[3]});
		const addressYSEZSvu = await vnxManagerxn4Eg2.removeBearer.call(addresswfxySEx, uintHzAYXHe, {from: accounts[0]});

		await expect(vnxManagerxn4Eg2.transferContractOwnership.call(addressWp45MZS, addressg68jQuG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxn4Eg2 = await vnxManager.new({from: accounts[2]});
		const uinthRMNPZJ = BigInt("1999")
		const addresszmXMITb = "0x00000000000000000000000000000000000000-1"
		const uintqKlkbau = BigInt("497")
		const addresstotW97v = accounts[4]
		const addressYSEZSvu = await vnxManagerxn4Eg2.removeBearer.call(addresszmXMITb, uinthRMNPZJ, {from: accounts[0]});
		const boolIAqLHQq = await vnxManagerxn4Eg2.hasRole.call(addresstotW97v, uintqKlkbau, {from: accounts[3]});
		await vnxManagerxn4Eg2.onlyOwner.call({from: accounts[2]});

		await expect(vnxManagerxn4Eg2.removeBearer.call(addresszmXMITb, uinthRMNPZJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})