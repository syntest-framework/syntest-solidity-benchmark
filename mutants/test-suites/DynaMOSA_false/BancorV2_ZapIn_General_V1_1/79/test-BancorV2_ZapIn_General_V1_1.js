const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintHLDamqR = BigInt("582")
		const BancorV2_ZapIn_General_V1_1ueKIl4 = await BancorV2_ZapIn_General_V1_1.new(uintHLDamqR, {from: accounts[1]});
		const uintiKxwxnH = BigInt("1696")
//		await BancorV2_ZapIn_General_V1_1ueKIl4.toggleContractActive.call({from: accounts[0]});
//		const uint16lO2sjfK = await BancorV2_ZapIn_General_V1_1ueKIl4.set_new_goodwill.call(uintiKxwxnH, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1ueKIl4.nonReentrant.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1ueKIl4.nonReentrant.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1ueKIl4.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1ueKIl4.toggleContractActive.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintLV1NSml = BigInt("804")
		const BancorV2_ZapIn_General_V1_1LbMzv5h = await BancorV2_ZapIn_General_V1_1.new(uintLV1NSml, {from: accounts[0]});
		const addressL8tnpn = accounts[4]
		const addressZZIXQ2 = await BancorV2_ZapIn_General_V1_1LbMzv5h.owner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1LbMzv5h.nonReentrant.call({from: accounts[0]});
//		const addressMesQLNW = await BancorV2_ZapIn_General_V1_1LbMzv5h.toPayable.call(addressL8tnpn, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1LbMzv5h.onlyOwner.call({from: accounts[3]});

		assert.equal(addressZZIXQ2, 0x3Da84aCb297023ABdb6afAcC9d1a15D1ae6fb826)
		await expect(BancorV2_ZapIn_General_V1_1LbMzv5h.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintK6AwkYt = BigInt("396")
		const BancorV2_ZapIn_General_V1_1XZ0GGLO = await BancorV2_ZapIn_General_V1_1.new(uintK6AwkYt, {from: accounts[2]});
		const byteRbjMjGq = "0x1f"
		const addresshIPYgG6 = accounts[1]
		const addressXkgoMCh = accounts[1]
		const uintULUDvqD = BigInt("1040")
		const uintphnkKt7 = BigInt("441")
		const addressspoiZT = accounts[2]
		const addressZHcfRJ3 = accounts[1]
		const addressp54MI8c = accounts[5]
		const addressY3NUo3D = accounts[5]
		const byteqTfe9Wc = "0x0203151a110c"
		const addressZOCpuIT = accounts[3]
		const addressHSpNlJD = accounts[0]
		const uintg48FqN = BigInt("1909")
		const uintrhlxrG7 = BigInt("1962")
		const addressZZ95GvT = accounts[3]
		const addressbq0mX3e = accounts[3]
		const addressGJkXGo6 = accounts[0]
//		const uint256LpJzwWn = await BancorV2_ZapIn_General_V1_1XZ0GGLO.ZapInSingleSided.call(addressp54MI8c, addressZHcfRJ3, addressspoiZT, uintphnkKt7, uintULUDvqD, addressXkgoMCh, addresshIPYgG6, byteRbjMjGq, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1XZ0GGLO.toggleContractActive.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1XZ0GGLO.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1XZ0GGLO.nonReentrant.call({from: accounts[0]});
//		const addresso6uZ1Ij = await BancorV2_ZapIn_General_V1_1XZ0GGLO.toPayable.call(addressY3NUo3D, {from: accounts[1]});
//		const uint256qHsuCO = await BancorV2_ZapIn_General_V1_1XZ0GGLO.ZapInSingleSided.call(addressGJkXGo6, addressbq0mX3e, addressZZ95GvT, uintrhlxrG7, uintg48FqN, addressHSpNlJD, addressZOCpuIT, byteqTfe9Wc, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1XZ0GGLO.ZapInSingleSided.call(addressp54MI8c, addressZHcfRJ3, addressspoiZT, uintphnkKt7, uintULUDvqD, addressXkgoMCh, addresshIPYgG6, byteRbjMjGq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintklbJeNZ = BigInt("524")
		const BancorV2_ZapIn_General_V1_1uPsrnM = await BancorV2_ZapIn_General_V1_1.new(uintklbJeNZ, {from: accounts[1]});
		const addressl1RvlhA = accounts[5]
		const addressNcA2aGu = accounts[3]
//		await BancorV2_ZapIn_General_V1_1uPsrnM.withdraw.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1uPsrnM.onlyOwner.call({from: accounts[3]});
//		const addresshMWxKQ6 = await BancorV2_ZapIn_General_V1_1uPsrnM.transferOwnership.call(addressl1RvlhA, {from: accounts[3]});
//		const addressblL7D96 = await BancorV2_ZapIn_General_V1_1uPsrnM.transferOwnership.call(addressNcA2aGu, {from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1uPsrnM.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintkoFO90d = BigInt("1316")
		const BancorV2_ZapIn_General_V1_1O187pLC = await BancorV2_ZapIn_General_V1_1.new(uintkoFO90d, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1O187pLC.renounceOwnership.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1O187pLC.nonReentrant.call({from: accounts[5]});
//		const boolYy8mpKE = await BancorV2_ZapIn_General_V1_1O187pLC.isOwner.call({from: accounts[0]});
//		const boolRREGzXZ = await BancorV2_ZapIn_General_V1_1O187pLC.isOwner.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1O187pLC.toggleContractActive.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1O187pLC.toggleContractActive.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1O187pLC.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJ7SCKrQ = BigInt("1056")
		const BancorV2_ZapIn_General_V1_1WptQMU = await BancorV2_ZapIn_General_V1_1.new(uintJ7SCKrQ, {from: "0x0000000000000000000000000000000000000001"});
		const addressjCtulPR = accounts[2]
		const addressx0Pb0bV = accounts[3]
		const addressUa0ois6 = accounts[1]
		const addressLV5gHFr = await BancorV2_ZapIn_General_V1_1WptQMU.transferOwnership.call(addressjCtulPR, {from: accounts[1]});
		const addressMUY39wS = await BancorV2_ZapIn_General_V1_1WptQMU.transferOwnership.call(addressx0Pb0bV, {from: accounts[0]});
		const address3vQdbU = await BancorV2_ZapIn_General_V1_1WptQMU.owner.call({from: accounts[1]});
		const addressszyq7V = await BancorV2_ZapIn_General_V1_1WptQMU.transferOwnership.call(addressUa0ois6, {from: accounts[4]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintqTJct1W = BigInt("1602")
		const BancorV2_ZapIn_General_V1_1HkVbN90 = await BancorV2_ZapIn_General_V1_1.new(uintqTJct1W, {from: accounts[5]});
		const addressCuKSvzE = accounts[3]
//		const addresseZplVZ = await BancorV2_ZapIn_General_V1_1HkVbN90.inCaseTokengetsStuck.call(addressCuKSvzE, {from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1HkVbN90.stopInEmergency.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1HkVbN90.inCaseTokengetsStuck.call(addressCuKSvzE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})