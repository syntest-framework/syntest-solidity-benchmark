const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintNS2pr3z = BigInt("1556")
		const BancorV2_ZapIn_General_V1_1ztbdTBP = await BancorV2_ZapIn_General_V1_1.new(uintNS2pr3z, {from: accounts[1]});
		const addressl7n6VGO = accounts[2]
//		await BancorV2_ZapIn_General_V1_1ztbdTBP.onlyOwner.call({from: accounts[2]});
//		const addressrXKSJJc = await BancorV2_ZapIn_General_V1_1ztbdTBP.inCaseTokengetsStuck.call(addressl7n6VGO, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1ztbdTBP.nonReentrant.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1ztbdTBP.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintY9agEZW = BigInt("1752")
		const BancorV2_ZapIn_General_V1_1OIBghi = await BancorV2_ZapIn_General_V1_1.new(uintY9agEZW, {from: accounts[4]});
		const addressoA8LYDM = accounts[1]
		const address0Pz2IE = accounts[4]
//		await BancorV2_ZapIn_General_V1_1OIBghi.renounceOwnership.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1OIBghi.withdraw.call({from: accounts[0]});
//		const addressQdyHevM = await BancorV2_ZapIn_General_V1_1OIBghi.inCaseTokengetsStuck.call(addressoA8LYDM, {from: accounts[0]});
//		const addressEjzEZxj = await BancorV2_ZapIn_General_V1_1OIBghi.transferOwnership.call(address0Pz2IE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1OIBghi.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintYb06A0D = BigInt("1367")
		const BancorV2_ZapIn_General_V1_1IhtpVNT = await BancorV2_ZapIn_General_V1_1.new(uintYb06A0D, {from: accounts[5]});
		const addressGnxL0R5 = accounts[0]
		const addressu9HL5Cz = await BancorV2_ZapIn_General_V1_1IhtpVNT.owner.call({from: accounts[1]});
		const addresscvCbKcu = await BancorV2_ZapIn_General_V1_1IhtpVNT.owner.call({from: accounts[1]});
//		const addressWXGAtDb = await BancorV2_ZapIn_General_V1_1IhtpVNT.inCaseTokengetsStuck.call(addressGnxL0R5, {from: accounts[1]});
//		const addressAb0JADR = await BancorV2_ZapIn_General_V1_1IhtpVNT.owner.call({from: accounts[3]});

		assert.equal(addresscvCbKcu, 0xe4DF22274Bb0012cb01b131ce27962be61a9a92B)
		assert.equal(addressu9HL5Cz, 0xe4DF22274Bb0012cb01b131ce27962be61a9a92B)
		await expect(BancorV2_ZapIn_General_V1_1IhtpVNT.inCaseTokengetsStuck.call(addressGnxL0R5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintMTAoKVa = BigInt("1327")
		const BancorV2_ZapIn_General_V1_1pWthWmc = await BancorV2_ZapIn_General_V1_1.new(uintMTAoKVa, {from: accounts[0]});
		const uintB12dxJ3 = BigInt("83")
		const uint16jnT6cr0 = await BancorV2_ZapIn_General_V1_1pWthWmc.set_new_goodwill.call(uintB12dxJ3, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1pWthWmc.stopInEmergency.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1pWthWmc.stopInEmergency.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1pWthWmc.nonReentrant.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1pWthWmc.stopInEmergency.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintbBrzYsV = BigInt("1992")
		const BancorV2_ZapIn_General_V1_1P56ChYE = await BancorV2_ZapIn_General_V1_1.new(uintbBrzYsV, {from: accounts[1]});
		const bytecEm2i5d = "0x15011a0f08082000190f0b0e05"
		const addressN5w7yz = accounts[3]
		const addressOYqHBCk = accounts[2]
		const uinteglHBgL = BigInt("1753")
		const uintvAequBu = BigInt("470")
		const address7Pm0Kk = "0x0000000000000000000000000000000000000001"
		const address4OG2sV = accounts[1]
		const addresspp8XsgK = accounts[2]
		const uintn7cX9ra = BigInt("217")
//		const uint256jtTCDT = await BancorV2_ZapIn_General_V1_1P56ChYE.ZapInSingleSided.call(addresspp8XsgK, address4OG2sV, address7Pm0Kk, uintvAequBu, uinteglHBgL, addressOYqHBCk, addressN5w7yz, bytecEm2i5d, {from: accounts[3]});
//		const addressyNBPyQW = await BancorV2_ZapIn_General_V1_1P56ChYE.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint16JoEDaqs = await BancorV2_ZapIn_General_V1_1P56ChYE.set_new_goodwill.call(uintn7cX9ra, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1P56ChYE.onlyOwner.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1P56ChYE.ZapInSingleSided.call(addresspp8XsgK, address4OG2sV, address7Pm0Kk, uintvAequBu, uinteglHBgL, addressOYqHBCk, addressN5w7yz, bytecEm2i5d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintiSemiAM = BigInt("1868")
		const BancorV2_ZapIn_General_V1_1Jn4tPV0 = await BancorV2_ZapIn_General_V1_1.new(uintiSemiAM, {from: "0x0000000000000000000000000000000000000001"});
		const addressVqB9KZP = accounts[1]
		const addresssZe1x2I = await BancorV2_ZapIn_General_V1_1Jn4tPV0.toPayable.call(addressVqB9KZP, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1Jn4tPV0.toggleContractActive.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1Jn4tPV0.onlyOwner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1Jn4tPV0.nonReentrant.call({from: accounts[1]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintH5yQlKp = BigInt("1992")
		const BancorV2_ZapIn_General_V1_1P56ChYE = await BancorV2_ZapIn_General_V1_1.new(uintH5yQlKp, {from: accounts[1]});
		const byteSTrjo5 = "0x15011a0f08082000190f0b0e05"
		const addressqzUEbmw = accounts[3]
		const addressUUSO03h = accounts[2]
		const uintBog8HtW = BigInt("1753")
		const uintXDhNe12 = BigInt("512")
		const addressdjvPb5A = "0x0000000000000000000000000000000000000002"
		const addressLlFNyrN = accounts[1]
		const addressag1WHc = accounts[2]
//		await BancorV2_ZapIn_General_V1_1P56ChYE.toggleContractActive.call({from: accounts[1]});
//		const uint256jtTCDT = await BancorV2_ZapIn_General_V1_1P56ChYE.ZapInSingleSided.call(addressag1WHc, addressLlFNyrN, addressdjvPb5A, uintXDhNe12, uintBog8HtW, addressUUSO03h, addressqzUEbmw, byteSTrjo5, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1P56ChYE.toggleContractActive.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintqPuAsZ = BigInt("1992")
		const BancorV2_ZapIn_General_V1_1P56ChYE = await BancorV2_ZapIn_General_V1_1.new(uintqPuAsZ, {from: accounts[1]});
		const addressN72Q4O0 = accounts[4]
		const uintf185uVv = BigInt("168")
//		const addresshqSBxgc = await BancorV2_ZapIn_General_V1_1P56ChYE.inCaseTokengetsStuck.call(addressN72Q4O0, {from: accounts[1]});
//		const uint16JoEDaqs = await BancorV2_ZapIn_General_V1_1P56ChYE.set_new_goodwill.call(uintf185uVv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1P56ChYE.inCaseTokengetsStuck.call(addressN72Q4O0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZBogweP = BigInt("1992")
		const BancorV2_ZapIn_General_V1_1P56ChYE = await BancorV2_ZapIn_General_V1_1.new(uintZBogweP, {from: accounts[1]});
		const uintLpfBeIr = BigInt("173")
//		await BancorV2_ZapIn_General_V1_1P56ChYE.withdraw.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1P56ChYE.onlyOwner.call({from: accounts[3]});
//		const uint16JoEDaqs = await BancorV2_ZapIn_General_V1_1P56ChYE.set_new_goodwill.call(uintLpfBeIr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1P56ChYE.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintiu3fyqa = BigInt("1992")
		const BancorV2_ZapIn_General_V1_1P56ChYE = await BancorV2_ZapIn_General_V1_1.new(uintiu3fyqa, {from: accounts[1]});
		const addressBDPggOJ = accounts[1]
		const uintGWsJXcQ = BigInt("202")
		const addresssWG4kOg = await BancorV2_ZapIn_General_V1_1P56ChYE.transferOwnership.call(addressBDPggOJ, {from: accounts[1]});
//		const uint16JoEDaqs = await BancorV2_ZapIn_General_V1_1P56ChYE.set_new_goodwill.call(uintGWsJXcQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1P56ChYE.set_new_goodwill.call(uintGWsJXcQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})