const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintSYnEdX5 = BigInt("233")
		const BancorV2_ZapIn_General_V1_1llvnjgV = await BancorV2_ZapIn_General_V1_1.new(uintSYnEdX5, {from: accounts[1]});
		const uintiQHGZfx = BigInt("238")
//		await BancorV2_ZapIn_General_V1_1llvnjgV.nonReentrant.call({from: accounts[4]});
//		const uint16ZAAmG6d = await BancorV2_ZapIn_General_V1_1llvnjgV.set_new_goodwill.call(uintiQHGZfx, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1llvnjgV.onlyOwner.call({from: accounts[0]});
//		const boolXt07lqr = await BancorV2_ZapIn_General_V1_1llvnjgV.isOwner.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1llvnjgV.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintsSOHkz = BigInt("6")
		const BancorV2_ZapIn_General_V1_1aOevCPs = await BancorV2_ZapIn_General_V1_1.new(uintsSOHkz, {from: accounts[5]});
		const addressmcMfiOn = await BancorV2_ZapIn_General_V1_1aOevCPs.owner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1aOevCPs.toggleContractActive.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1aOevCPs.onlyOwner.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1aOevCPs.toggleContractActive.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1aOevCPs.onlyOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1aOevCPs.withdraw.call({from: accounts[2]});

		assert.equal(addressmcMfiOn, 0xbF4723e5E5C23B0E9e5A9e123ED7d4d673750354)
		await expect(BancorV2_ZapIn_General_V1_1aOevCPs.toggleContractActive.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintznP4XG6 = BigInt("453")
		const BancorV2_ZapIn_General_V1_1deBtduF = await BancorV2_ZapIn_General_V1_1.new(uintznP4XG6, {from: "0x0000000000000000000000000000000000000001"});
		const addressX27KIdc = accounts[3]
		const addressLRPK3u = accounts[2]
		const addressTWbcJth = accounts[0]
		const addressz8WC6Nv = await BancorV2_ZapIn_General_V1_1deBtduF.inCaseTokengetsStuck.call(addressX27KIdc, {from: accounts[4]});
		const boolCkx8QtM = await BancorV2_ZapIn_General_V1_1deBtduF.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1deBtduF.renounceOwnership.call({from: accounts[1]});
		const addresst5aIFVh = await BancorV2_ZapIn_General_V1_1deBtduF.inCaseTokengetsStuck.call(addressLRPK3u, {from: accounts[0]});
		const addressdChgeh0 = await BancorV2_ZapIn_General_V1_1deBtduF.toPayable.call(addressTWbcJth, {from: accounts[1]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintxik0v2u = BigInt("429")
		const BancorV2_ZapIn_General_V1_1sL3IbdM = await BancorV2_ZapIn_General_V1_1.new(uintxik0v2u, {from: accounts[3]});
		const byteu9jitI1 = "0x130f04101e1e181402100c1707090509100f0b021f16"
		const addresse9GpSjz = "0x0000000000000000000000000000000000000001"
		const addressimiLr6B = accounts[0]
		const uinto4MKIPW = BigInt("814")
		const uinteFnUyo = BigInt("1922")
		const addressujX0Mdg = accounts[2]
		const addressC9U5TmO = accounts[2]
		const addresszapbRW = accounts[3]
		const addressAfPEK6v = accounts[3]
		const addressDDmIeRg = accounts[3]
		const addressiV8F7R = accounts[3]
		const uintQQ0xQV = BigInt("1401")
//		const uint256ruJ3dtB = await BancorV2_ZapIn_General_V1_1sL3IbdM.ZapInSingleSided.call(addresszapbRW, addressC9U5TmO, addressujX0Mdg, uinteFnUyo, uinto4MKIPW, addressimiLr6B, addresse9GpSjz, byteu9jitI1, {from: accounts[4]});
//		const addressdnbL2Z3 = await BancorV2_ZapIn_General_V1_1sL3IbdM.inCaseTokengetsStuck.call(addressAfPEK6v, {from: accounts[1]});
//		const addressvLeAl3d = await BancorV2_ZapIn_General_V1_1sL3IbdM.inCaseTokengetsStuck.call(addressDDmIeRg, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1sL3IbdM.stopInEmergency.call({from: accounts[2]});
//		const addressWeoHzbI = await BancorV2_ZapIn_General_V1_1sL3IbdM.transferOwnership.call(addressiV8F7R, {from: accounts[3]});
//		const uint16R6ReqOc = await BancorV2_ZapIn_General_V1_1sL3IbdM.set_new_goodwill.call(uintQQ0xQV, {from: accounts[3]});
//		const boolk3PeFOh = await BancorV2_ZapIn_General_V1_1sL3IbdM.isOwner.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1sL3IbdM.ZapInSingleSided.call(addresszapbRW, addressC9U5TmO, addressujX0Mdg, uinteFnUyo, uinto4MKIPW, addressimiLr6B, addresse9GpSjz, byteu9jitI1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintM6kI77z = BigInt("1640")
		const BancorV2_ZapIn_General_V1_1UaewdXw = await BancorV2_ZapIn_General_V1_1.new(uintM6kI77z, {from: accounts[4]});
		const bytewkE97Q = "0x1b1e"
		const addressjh8A75 = accounts[2]
		const addressUCmkA38 = accounts[0]
		const uintgMenVNi = BigInt("330")
		const uintkGdHS0U = BigInt("1594")
		const addresskHUDxFO = accounts[5]
		const addressN3btEh = accounts[5]
		const addressSUjA4Do = accounts[0]
		const bytepOsNap3 = "0x071104181c"
		const addressuMz5VVt = accounts[0]
		const addresseoo3DG0 = accounts[1]
		const uintieH6FdC = BigInt("534")
		const uintCDimLuf = BigInt("1682")
		const addressqt5QW5 = accounts[4]
		const addressXWunSwm = accounts[2]
		const addressKc8OGHA = accounts[3]
		const addresshFVtlpW = accounts[2]
		const addressshSlnu = await BancorV2_ZapIn_General_V1_1UaewdXw.owner.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1UaewdXw.toggleContractActive.call({from: accounts[4]});
//		const uint2569tsFor = await BancorV2_ZapIn_General_V1_1UaewdXw.ZapInSingleSided.call(addressSUjA4Do, addressN3btEh, addresskHUDxFO, uintkGdHS0U, uintgMenVNi, addressUCmkA38, addressjh8A75, bytewkE97Q, {from: accounts[3]});
//		const uint256W6hrVdn = await BancorV2_ZapIn_General_V1_1UaewdXw.ZapInSingleSided.call(addressKc8OGHA, addressXWunSwm, addressqt5QW5, uintCDimLuf, uintieH6FdC, addresseoo3DG0, addressuMz5VVt, bytepOsNap3, {from: accounts[0]});
//		const addresscpz4Sy5 = await BancorV2_ZapIn_General_V1_1UaewdXw.inCaseTokengetsStuck.call(addresshFVtlpW, {from: accounts[3]});

		assert.equal(addressshSlnu, 0xA2D6D63C2e214a2C157F97ACc11d99EF0C6dd78e)
		await expect(BancorV2_ZapIn_General_V1_1UaewdXw.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintFDCIdwq = BigInt("246")
		const BancorV2_ZapIn_General_V1_1A6uf67z = await BancorV2_ZapIn_General_V1_1.new(uintFDCIdwq, {from: accounts[2]});
		const addressSp24IH0 = accounts[4]
		const addresssU6Lb3 = await BancorV2_ZapIn_General_V1_1A6uf67z.transferOwnership.call(addressSp24IH0, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1A6uf67z.stopInEmergency.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1A6uf67z.stopInEmergency.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintnSaChFK = BigInt("1640")
		const BancorV2_ZapIn_General_V1_1UaewdXw = await BancorV2_ZapIn_General_V1_1.new(uintnSaChFK, {from: accounts[4]});
		const bytef2h7n7Z = "0x1b1e"
		const addressgzGb3Dm = accounts[2]
		const addressYZ4zxp2 = accounts[0]
		const uintvN4o3cV = BigInt("330")
		const uint1DaYPO = BigInt("1594")
		const addressyToAraM = accounts[5]
		const addressx9wM5zV = accounts[5]
		const addressBJ4TMJp = accounts[0]
		const byteUVRnbl = "0x071104181c"
		const addressT9sfaPY = accounts[0]
		const addressNnk7KE1 = accounts[1]
		const uintnb7fcXB = BigInt("534")
		const uintHzCZC7u = BigInt("1682")
		const addressK0CEET9 = accounts[4]
		const addresseAYxHaZ = accounts[2]
		const addressH2XqC02 = accounts[3]
		const addressdlpqkKX = accounts[2]
		const addressshSlnu = await BancorV2_ZapIn_General_V1_1UaewdXw.owner.call({from: accounts[1]});
		const boolaTVGrMQ = await BancorV2_ZapIn_General_V1_1UaewdXw.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1UaewdXw.renounceOwnership.call({from: accounts[4]});
//		const uint2569tsFor = await BancorV2_ZapIn_General_V1_1UaewdXw.ZapInSingleSided.call(addressBJ4TMJp, addressx9wM5zV, addressyToAraM, uint1DaYPO, uintvN4o3cV, addressYZ4zxp2, addressgzGb3Dm, bytef2h7n7Z, {from: accounts[3]});
//		const uint256W6hrVdn = await BancorV2_ZapIn_General_V1_1UaewdXw.ZapInSingleSided.call(addressH2XqC02, addresseAYxHaZ, addressK0CEET9, uintHzCZC7u, uintnb7fcXB, addressNnk7KE1, addressT9sfaPY, byteUVRnbl, {from: accounts[0]});
//		const addresscpz4Sy5 = await BancorV2_ZapIn_General_V1_1UaewdXw.inCaseTokengetsStuck.call(addressdlpqkKX, {from: accounts[3]});

		assert.equal(addressshSlnu, 0xA2D6D63C2e214a2C157F97ACc11d99EF0C6dd78e)
		assert.equal(boolaTVGrMQ, false)
		await expect(BancorV2_ZapIn_General_V1_1UaewdXw.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintAL0IW1 = BigInt("429")
		const BancorV2_ZapIn_General_V1_1sL3IbdM = await BancorV2_ZapIn_General_V1_1.new(uintAL0IW1, {from: accounts[3]});
		const uintOAYVDz = BigInt("264")
		const byteiOLtIB = "0x130f04101e1e181402100c1707090509100f0b021f16"
		const addressHj4u3W8 = "0x0000000000000000000000000000000000000001"
		const addressi1qgnPi = accounts[0]
		const uintnXWXcjN = BigInt("814")
		const uintAqdqGlV = BigInt("1922")
		const address443YwQ = accounts[2]
		const addressGdKGW0K = accounts[2]
		const addressDM1hbmb = accounts[3]
		const addresscr9T2Ui = accounts[5]
		const addressKcWqaQM = accounts[3]
		const addresssKX1CQV = accounts[3]
		const uintmPf8wAz = BigInt("1401")
		const uintA0nCPX = BigInt("1047")
		const uint16zckq739 = await BancorV2_ZapIn_General_V1_1sL3IbdM.set_new_goodwill.call(uintOAYVDz, {from: accounts[3]});
//		const uint256ruJ3dtB = await BancorV2_ZapIn_General_V1_1sL3IbdM.ZapInSingleSided.call(addressDM1hbmb, addressGdKGW0K, address443YwQ, uintAqdqGlV, uintnXWXcjN, addressi1qgnPi, addressHj4u3W8, byteiOLtIB, {from: accounts[4]});
//		const addressdnbL2Z3 = await BancorV2_ZapIn_General_V1_1sL3IbdM.inCaseTokengetsStuck.call(addresscr9T2Ui, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1sL3IbdM.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1sL3IbdM.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressvLeAl3d = await BancorV2_ZapIn_General_V1_1sL3IbdM.inCaseTokengetsStuck.call(addressKcWqaQM, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1sL3IbdM.stopInEmergency.call({from: accounts[2]});
//		const addressWeoHzbI = await BancorV2_ZapIn_General_V1_1sL3IbdM.transferOwnership.call(addresssKX1CQV, {from: accounts[3]});
//		const uint16R6ReqOc = await BancorV2_ZapIn_General_V1_1sL3IbdM.set_new_goodwill.call(uintmPf8wAz, {from: accounts[3]});
//		const uint16pLG5HqH = await BancorV2_ZapIn_General_V1_1sL3IbdM.set_new_goodwill.call(uintA0nCPX, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1sL3IbdM.stopInEmergency.call({from: accounts[4]});
//		const boolk3PeFOh = await BancorV2_ZapIn_General_V1_1sL3IbdM.isOwner.call({from: accounts[1]});
//		const addressVh7NTl1 = await BancorV2_ZapIn_General_V1_1sL3IbdM.owner.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1sL3IbdM.ZapInSingleSided.call(addressDM1hbmb, addressGdKGW0K, address443YwQ, uintAqdqGlV, uintnXWXcjN, addressi1qgnPi, addressHj4u3W8, byteiOLtIB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintkdHXUo = BigInt("243")
		const BancorV2_ZapIn_General_V1_1X9GrzzB = await BancorV2_ZapIn_General_V1_1.new(uintkdHXUo, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1X9GrzzB.withdraw.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1X9GrzzB.withdraw.call({from: accounts[0]});
//		const boolGGZ2eY = await BancorV2_ZapIn_General_V1_1X9GrzzB.isOwner.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1X9GrzzB.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintjiD7lAr = BigInt("1640")
		const BancorV2_ZapIn_General_V1_1UaewdXw = await BancorV2_ZapIn_General_V1_1.new(uintjiD7lAr, {from: accounts[4]});
		const address9b7576 = accounts[4]
		const byteYR41Sa = "0x1b1e"
		const addresskKQnzDP = accounts[2]
		const addressgNwGgLn = accounts[1]
		const uintliqAamt = BigInt("320")
		const uintC6mxEJh = BigInt("1594")
		const addresssXQIlnG = accounts[5]
		const address7UTbK6 = accounts[5]
		const addressn7s2Vbx = accounts[0]
		const byteMiOPDmr = "0x071104181c"
		const addresslMqSDrx = accounts[0]
		const addressmNzOS5r = accounts[1]
		const uintpwFMEjZ = BigInt("534")
		const uintQ2vZhZr = BigInt("1682")
		const addressb9Uhmgb = accounts[4]
		const addressuq48BoZ = accounts[2]
		const addressRb3wZKn = accounts[3]
		const addressURo5i6P = accounts[2]
//		const addressVEpDJxF = await BancorV2_ZapIn_General_V1_1UaewdXw.inCaseTokengetsStuck.call(address9b7576, {from: accounts[4]});
//		const addresszqupsJn = await BancorV2_ZapIn_General_V1_1UaewdXw.owner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1UaewdXw.toggleContractActive.call({from: accounts[4]});
//		const uint2569tsFor = await BancorV2_ZapIn_General_V1_1UaewdXw.ZapInSingleSided.call(addressn7s2Vbx, address7UTbK6, addresssXQIlnG, uintC6mxEJh, uintliqAamt, addressgNwGgLn, addresskKQnzDP, byteYR41Sa, {from: accounts[3]});
//		const uint256W6hrVdn = await BancorV2_ZapIn_General_V1_1UaewdXw.ZapInSingleSided.call(addressRb3wZKn, addressuq48BoZ, addressb9Uhmgb, uintQ2vZhZr, uintpwFMEjZ, addressmNzOS5r, addresslMqSDrx, byteMiOPDmr, {from: accounts[0]});
//		const addresscpz4Sy5 = await BancorV2_ZapIn_General_V1_1UaewdXw.inCaseTokengetsStuck.call(addressURo5i6P, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1UaewdXw.inCaseTokengetsStuck.call(address9b7576, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})