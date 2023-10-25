const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintUxzp5bS = BigInt("1415")
		const BancorV2_ZapIn_General_V1_1GA0uDOS = await BancorV2_ZapIn_General_V1_1.new(uintUxzp5bS, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1GA0uDOS.toggleContractActive.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1GA0uDOS.nonReentrant.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1GA0uDOS.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintObuaYgh = BigInt("1794")
		const BancorV2_ZapIn_General_V1_1Imk09uh = await BancorV2_ZapIn_General_V1_1.new(uintObuaYgh, {from: accounts[5]});
		const addressOYv98DQ = accounts[4]
		const bytelD10FKI = "0x0b0e1e0e0205191c0c0f120d1013131c100d0a081807"
		const addressqxZ7cZT = accounts[2]
		const addresspuM7TRq = accounts[2]
		const uintA4PMH4 = BigInt("964")
		const uintM7xq9uS = BigInt("69")
		const addressrd2xNtE = accounts[0]
		const addressOLo6SNK = accounts[1]
		const addresssvCLZr9 = accounts[0]
		await BancorV2_ZapIn_General_V1_1Imk09uh.renounceOwnership.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1Imk09uh.toggleContractActive.call({from: accounts[3]});
		const addressS3zqrhw = await BancorV2_ZapIn_General_V1_1Imk09uh.inCaseTokengetsStuck.call(addressOYv98DQ, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1Imk09uh.nonReentrant.call({from: accounts[1]});
		const uint256mRIaH8 = await BancorV2_ZapIn_General_V1_1Imk09uh.ZapInSingleSided.call(addresssvCLZr9, addressOLo6SNK, addressrd2xNtE, uintM7xq9uS, uintA4PMH4, addresspuM7TRq, addressqxZ7cZT, bytelD10FKI, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1Imk09uh.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintwRbJYWD = BigInt("481")
		const BancorV2_ZapIn_General_V1_1tOoKZL = await BancorV2_ZapIn_General_V1_1.new(uintwRbJYWD, {from: accounts[0]});
		const addressX0j5Up5 = accounts[3]
		const addressL3lOUe5 = accounts[0]
		const uintnwcNXQ3 = BigInt("1107")
		const addressF8vy26N = accounts[5]
		const addressbguA8Qm = await BancorV2_ZapIn_General_V1_1tOoKZL.transferOwnership.call(addressX0j5Up5, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1tOoKZL.stopInEmergency.call({from: accounts[3]});
		const address4olwaH = await BancorV2_ZapIn_General_V1_1tOoKZL.toPayable.call(addressL3lOUe5, {from: accounts[4]});
		const uint164neXps = await BancorV2_ZapIn_General_V1_1tOoKZL.set_new_goodwill.call(uintnwcNXQ3, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1tOoKZL.renounceOwnership.call({from: accounts[3]});
		const addressIiCZhzC = await BancorV2_ZapIn_General_V1_1tOoKZL.inCaseTokengetsStuck.call(addressF8vy26N, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1tOoKZL.stopInEmergency.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinthTq9ftK = BigInt("1805")
		const BancorV2_ZapIn_General_V1_1V0BM210 = await BancorV2_ZapIn_General_V1_1.new(uinthTq9ftK, {from: accounts[2]});
		const addressZaMxQN8 = accounts[3]
		const addressEbCpSjU = accounts[4]
		const address9eq7Qx = await BancorV2_ZapIn_General_V1_1V0BM210.inCaseTokengetsStuck.call(addressZaMxQN8, {from: accounts[2]});
		const addressqoWDqm = await BancorV2_ZapIn_General_V1_1V0BM210.transferOwnership.call(addressEbCpSjU, {from: accounts[1]});
		const boolPRh8RH = await BancorV2_ZapIn_General_V1_1V0BM210.isOwner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1V0BM210.onlyOwner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1V0BM210.renounceOwnership.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1V0BM210.inCaseTokengetsStuck.call(addressZaMxQN8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintkX6a3WC = BigInt("764")
		const BancorV2_ZapIn_General_V1_1iVaG0Hx = await BancorV2_ZapIn_General_V1_1.new(uintkX6a3WC, {from: accounts[1]});
		const addressUtDzQNu = await BancorV2_ZapIn_General_V1_1iVaG0Hx.owner.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1iVaG0Hx.withdraw.call({from: accounts[3]});
		const boolPFVzm7s = await BancorV2_ZapIn_General_V1_1iVaG0Hx.isOwner.call({from: accounts[4]});

		assert.equal(addressUtDzQNu, 0x7686313499641343C9C97b55A256A6dd0F91Db0c)
		await expect(BancorV2_ZapIn_General_V1_1iVaG0Hx.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintmZg7lB8 = BigInt("335")
		const BancorV2_ZapIn_General_V1_1UIECA8r = await BancorV2_ZapIn_General_V1_1.new(uintmZg7lB8, {from: accounts[2]});
		const uintAdGCssa = BigInt("1195")
		const bytenL9Wl5L = "0x020a1b14001e040a0b080d0520111d0710070903"
		const addressDPZcMGo = accounts[4]
		const addressTvRDAja = accounts[1]
		const uintKvQbu64 = BigInt("1084")
		const uinti5WR60Y = BigInt("89")
		const addressWHB7Fph = accounts[0]
		const addressRCWPdAK = accounts[1]
		const addressC6P2raS = accounts[3]
		const uint16wu4g4Bs = await BancorV2_ZapIn_General_V1_1UIECA8r.set_new_goodwill.call(uintAdGCssa, {from: accounts[2]});
		const uint256RozyAMD = await BancorV2_ZapIn_General_V1_1UIECA8r.ZapInSingleSided.call(addressC6P2raS, addressRCWPdAK, addressWHB7Fph, uinti5WR60Y, uintKvQbu64, addressTvRDAja, addressDPZcMGo, bytenL9Wl5L, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1UIECA8r.ZapInSingleSided.call(addressC6P2raS, addressRCWPdAK, addressWHB7Fph, uinti5WR60Y, uintKvQbu64, addressTvRDAja, addressDPZcMGo, bytenL9Wl5L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintwem4ao = BigInt("1958")
		const BancorV2_ZapIn_General_V1_1CbLaR5T = await BancorV2_ZapIn_General_V1_1.new(uintwem4ao, {from: "0x0000000000000000000000000000000000000001"});
		const addresspbNIpc = accounts[5]
		const booldzpPpf = await BancorV2_ZapIn_General_V1_1CbLaR5T.isOwner.call({from: accounts[3]});
		const boolZnlfPDx = await BancorV2_ZapIn_General_V1_1CbLaR5T.isOwner.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1CbLaR5T.stopInEmergency.call({from: accounts[2]});
		const addressoZVMZnh = await BancorV2_ZapIn_General_V1_1CbLaR5T.inCaseTokengetsStuck.call(addresspbNIpc, {from: accounts[4]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZ2nBPOh = BigInt("335")
		const BancorV2_ZapIn_General_V1_1UIECA8r = await BancorV2_ZapIn_General_V1_1.new(uintZ2nBPOh, {from: accounts[2]});
		const uintxjOnHmI = BigInt("1195")
		const byteYr2Hnep = "0x020a1b14001e040a0b080d0520111d0710070903"
		const addressNzaUDdf = accounts[4]
		const addressLAwqRIh = accounts[1]
		const uintzp4Nug = BigInt("1084")
		const uintLV6oCPY = BigInt("89")
		const addressHp6yqs7 = accounts[0]
		const addresscTaAUHT = accounts[1]
		const addressCoPsSP2 = accounts[3]
		const addressYMwkqQO = "0x0000000000000000000000000000000000000001"
		const addressFshvrR = accounts[2]
		const uint16wu4g4Bs = await BancorV2_ZapIn_General_V1_1UIECA8r.set_new_goodwill.call(uintxjOnHmI, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1UIECA8r.withdraw.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1UIECA8r.stopInEmergency.call({from: accounts[0]});
		const uint256RozyAMD = await BancorV2_ZapIn_General_V1_1UIECA8r.ZapInSingleSided.call(addressCoPsSP2, addresscTaAUHT, addressHp6yqs7, uintLV6oCPY, uintzp4Nug, addressLAwqRIh, addressNzaUDdf, byteYr2Hnep, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1UIECA8r.toggleContractActive.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1UIECA8r.onlyOwner.call({from: accounts[3]});
		const addressVne3Xqy = await BancorV2_ZapIn_General_V1_1UIECA8r.transferOwnership.call(addressYMwkqQO, {from: accounts[0]});
		const addressdpuJM2x = await BancorV2_ZapIn_General_V1_1UIECA8r.inCaseTokengetsStuck.call(addressFshvrR, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1UIECA8r.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintrZftigz = BigInt("335")
		const BancorV2_ZapIn_General_V1_1UIECA8r = await BancorV2_ZapIn_General_V1_1.new(uintrZftigz, {from: accounts[2]});
		const uintJlepnOu = BigInt("1221")
		await BancorV2_ZapIn_General_V1_1UIECA8r.renounceOwnership.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1UIECA8r.nonReentrant.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1UIECA8r.toggleContractActive.call({from: accounts[4]});
		const uint16wu4g4Bs = await BancorV2_ZapIn_General_V1_1UIECA8r.set_new_goodwill.call(uintJlepnOu, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1UIECA8r.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})