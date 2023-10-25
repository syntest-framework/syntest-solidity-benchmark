const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinthtV3JEn = BigInt("477")
		const BancorV2_ZapIn_General_V1_1ebn68e5 = await BancorV2_ZapIn_General_V1_1.new(uinthtV3JEn, {from: accounts[2]});
		const uintQ945SbZ = BigInt("1958")
//		const uint16ddL3U2C = await BancorV2_ZapIn_General_V1_1ebn68e5.set_new_goodwill.call(uintQ945SbZ, {from: accounts[0]});
//		const boolZkaLPR = await BancorV2_ZapIn_General_V1_1ebn68e5.isOwner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1ebn68e5.set_new_goodwill.call(uintQ945SbZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintrBJg5l = BigInt("4")
		const BancorV2_ZapIn_General_V1_1JOlQxhx = await BancorV2_ZapIn_General_V1_1.new(uintrBJg5l, {from: accounts[0]});
		const byteCodctgE = "0x061c1c0a0f0a070e09"
		const addresswKMzzqA = accounts[4]
		const addresskf7Jktr = accounts[2]
		const uintASVqdDq = BigInt("1894")
		const uintXjL4KKA = BigInt("330")
		const addressj4rzoHS = accounts[1]
		const addressEaVr60b = accounts[0]
		const addresseO1dqAN = accounts[3]
		const byteDaujgAv = "0x120b"
		const address6H5YbY = accounts[1]
		const addresswj8u6lF = accounts[3]
		const uintnNMtteq = BigInt("1550")
		const uintqXcgH52 = BigInt("1590")
		const addressLqUsG6H = accounts[1]
		const addressz2L9BCZ = accounts[0]
		const addressqaG87pe = accounts[1]
//		await BancorV2_ZapIn_General_V1_1JOlQxhx.toggleContractActive.call({from: accounts[0]});
//		const uint256cnqmani = await BancorV2_ZapIn_General_V1_1JOlQxhx.ZapInSingleSided.call(addresseO1dqAN, addressEaVr60b, addressj4rzoHS, uintXjL4KKA, uintASVqdDq, addresskf7Jktr, addresswKMzzqA, byteCodctgE, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1JOlQxhx.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256AirNTiE = await BancorV2_ZapIn_General_V1_1JOlQxhx.ZapInSingleSided.call(addressqaG87pe, addressz2L9BCZ, addressLqUsG6H, uintqXcgH52, uintnNMtteq, addresswj8u6lF, address6H5YbY, byteDaujgAv, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1JOlQxhx.toggleContractActive.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintutWhcft = BigInt("1012")
		const BancorV2_ZapIn_General_V1_1A0HN4dN = await BancorV2_ZapIn_General_V1_1.new(uintutWhcft, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1A0HN4dN.withdraw.call({from: accounts[0]});
		const addressKYxoKOQ = await BancorV2_ZapIn_General_V1_1A0HN4dN.owner.call({from: accounts[0]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintmLOR1r1 = BigInt("1406")
		const BancorV2_ZapIn_General_V1_1JDJrcg = await BancorV2_ZapIn_General_V1_1.new(uintmLOR1r1, {from: accounts[2]});
		const byteVNipt1k = "0x10111a1c0d02111d050d051711161a1414111f16101019151d070320"
		const addressMGG0J4J = accounts[2]
		const addressMDSlQX7 = accounts[1]
		const uintfnNVu0g = BigInt("1912")
		const uintlwCUy4W = BigInt("20")
		const addressAc7zByZ = accounts[2]
		const addressYLjPAM = accounts[0]
		const addressbooUyv = accounts[0]
		const addresstkJEe2b = await BancorV2_ZapIn_General_V1_1JDJrcg.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressQ4a3TaF = await BancorV2_ZapIn_General_V1_1JDJrcg.owner.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1JDJrcg.renounceOwnership.call({from: accounts[4]});
//		const uint256xOIAzp = await BancorV2_ZapIn_General_V1_1JDJrcg.ZapInSingleSided.call(addressbooUyv, addressYLjPAM, addressAc7zByZ, uintlwCUy4W, uintfnNVu0g, addressMDSlQX7, addressMGG0J4J, byteVNipt1k, {from: accounts[1]});

		assert.equal(addressQ4a3TaF, 0x7d49526B50622C7B23d8C0579161108E65ed794E)
		assert.equal(addresstkJEe2b, 0x7d49526B50622C7B23d8C0579161108E65ed794E)
		await expect(BancorV2_ZapIn_General_V1_1JDJrcg.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintsC9D4Ys = BigInt("1679")
		const BancorV2_ZapIn_General_V1_1BRKgl9H = await BancorV2_ZapIn_General_V1_1.new(uintsC9D4Ys, {from: accounts[1]});
		const addressPFBCuBy = accounts[1]
//		const addressLNWjMW = await BancorV2_ZapIn_General_V1_1BRKgl9H.inCaseTokengetsStuck.call(addressPFBCuBy, {from: accounts[1]});
//		const addressHEFzoQ9 = await BancorV2_ZapIn_General_V1_1BRKgl9H.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolnUBDK40 = await BancorV2_ZapIn_General_V1_1BRKgl9H.isOwner.call({from: accounts[4]});
//		const boolMCyg1Go = await BancorV2_ZapIn_General_V1_1BRKgl9H.isOwner.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1BRKgl9H.nonReentrant.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1BRKgl9H.stopInEmergency.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1BRKgl9H.inCaseTokengetsStuck.call(addressPFBCuBy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintd5bOIlZ = BigInt("1887")
		const BancorV2_ZapIn_General_V1_1kZlFPf = await BancorV2_ZapIn_General_V1_1.new(uintd5bOIlZ, {from: accounts[0]});
		const addressXD6okkR = accounts[2]
//		await BancorV2_ZapIn_General_V1_1kZlFPf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresswsWXU08 = await BancorV2_ZapIn_General_V1_1kZlFPf.toPayable.call(addressXD6okkR, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1kZlFPf.onlyOwner.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1kZlFPf.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintv9Fbbid = BigInt("1959")
		const BancorV2_ZapIn_General_V1_1hlBZBwD = await BancorV2_ZapIn_General_V1_1.new(uintv9Fbbid, {from: accounts[3]});
		const uintnnYwdT = BigInt("892")
		const addressciG2ssj = accounts[0]
		const addressVfTRv0a = accounts[4]
		const uint16PalLFC = await BancorV2_ZapIn_General_V1_1hlBZBwD.set_new_goodwill.call(uintnnYwdT, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1hlBZBwD.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresstDI7bfE = await BancorV2_ZapIn_General_V1_1hlBZBwD.inCaseTokengetsStuck.call(addressciG2ssj, {from: accounts[4]});
//		const address6acbBC = await BancorV2_ZapIn_General_V1_1hlBZBwD.inCaseTokengetsStuck.call(addressVfTRv0a, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1hlBZBwD.withdraw.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1hlBZBwD.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintHGcP2Tl = BigInt("1811")
		const BancorV2_ZapIn_General_V1_1it154RY = await BancorV2_ZapIn_General_V1_1.new(uintHGcP2Tl, {from: accounts[0]});
		const addressRFkUDr2 = accounts[0]
		const addressr2QNiY = accounts[0]
		const addressUaL82x = await BancorV2_ZapIn_General_V1_1it154RY.transferOwnership.call(addressRFkUDr2, {from: accounts[0]});
//		const addressmnreo5i = await BancorV2_ZapIn_General_V1_1it154RY.toPayable.call(addressr2QNiY, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1it154RY.nonReentrant.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1it154RY.toPayable.call(addressr2QNiY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintdR7Yxxb = BigInt("4")
		const BancorV2_ZapIn_General_V1_1JOlQxhx = await BancorV2_ZapIn_General_V1_1.new(uintdR7Yxxb, {from: accounts[0]});
		const byteE3b1ubq = "0x061c1c0a0f0a070e09"
		const addressBAlOYwD = accounts[4]
		const addresshStjsjJ = accounts[2]
		const uintzIQ2lh = BigInt("1894")
		const uinteS27lS6 = BigInt("330")
		const addresspl1t3CQ = accounts[2]
		const addressyI2WoEh = accounts[0]
		const addressNNByVwA = accounts[3]
//		await BancorV2_ZapIn_General_V1_1JOlQxhx.withdraw.call({from: accounts[0]});
//		const uint256cnqmani = await BancorV2_ZapIn_General_V1_1JOlQxhx.ZapInSingleSided.call(addressNNByVwA, addressyI2WoEh, addresspl1t3CQ, uinteS27lS6, uintzIQ2lh, addresshStjsjJ, addressBAlOYwD, byteE3b1ubq, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1JOlQxhx.stopInEmergency.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1JOlQxhx.withdraw.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintY4md6cp = BigInt("477")
		const BancorV2_ZapIn_General_V1_1ebn68e5 = await BancorV2_ZapIn_General_V1_1.new(uintY4md6cp, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1ebn68e5.renounceOwnership.call({from: accounts[2]});
//		const boolZkaLPR = await BancorV2_ZapIn_General_V1_1ebn68e5.isOwner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1ebn68e5.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})