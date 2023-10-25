const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinthI0P9eS = BigInt("1823")
		const BancorV2_ZapIn_General_V1_1QdDBzOw = await BancorV2_ZapIn_General_V1_1.new(uinthI0P9eS, {from: accounts[3]});
		const addressWlFRywT = accounts[4]
		const addressEqF5SGu = accounts[2]
		const addressTYVo65u = accounts[5]
//		const addressRuSXV2h = await BancorV2_ZapIn_General_V1_1QdDBzOw.inCaseTokengetsStuck.call(addressWlFRywT, {from: accounts[4]});
//		const addresspXVaNh0 = await BancorV2_ZapIn_General_V1_1QdDBzOw.transferOwnership.call(addressEqF5SGu, {from: accounts[5]});
//		const addressrZpC4TC = await BancorV2_ZapIn_General_V1_1QdDBzOw.transferOwnership.call(addressTYVo65u, {from: accounts[3]});
//		const addressYySvKaS = await BancorV2_ZapIn_General_V1_1QdDBzOw.owner.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1QdDBzOw.inCaseTokengetsStuck.call(addressWlFRywT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinty5yA0vl = BigInt("612")
		const BancorV2_ZapIn_General_V1_1vx4HiOG = await BancorV2_ZapIn_General_V1_1.new(uinty5yA0vl, {from: accounts[4]});
		const addressSjhdOkI = accounts[4]
		const addressVWmf7yW = accounts[2]
//		const addressyw2EvEg = await BancorV2_ZapIn_General_V1_1vx4HiOG.toPayable.call(addressSjhdOkI, {from: accounts[2]});
//		const addressiKsWzGO = await BancorV2_ZapIn_General_V1_1vx4HiOG.toPayable.call(addressVWmf7yW, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1vx4HiOG.toggleContractActive.call({from: accounts[1]});
//		const boolZNDLnfU = await BancorV2_ZapIn_General_V1_1vx4HiOG.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1vx4HiOG.toPayable.call(addressSjhdOkI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintdKDjQqg = BigInt("1864")
		const BancorV2_ZapIn_General_V1_1EhFbStv = await BancorV2_ZapIn_General_V1_1.new(uintdKDjQqg, {from: accounts[1]});
		const addressRtCd54c = accounts[5]
		const addressJGKpoBd = accounts[1]
		const addressCyrrUw1 = accounts[1]
		const uintkgx2YWI = BigInt("367")
//		const addressWPTFja4 = await BancorV2_ZapIn_General_V1_1EhFbStv.inCaseTokengetsStuck.call(addressRtCd54c, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1EhFbStv.toggleContractActive.call({from: accounts[3]});
//		const addressuyCMHzk = await BancorV2_ZapIn_General_V1_1EhFbStv.inCaseTokengetsStuck.call(addressJGKpoBd, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1EhFbStv.renounceOwnership.call({from: accounts[3]});
//		const addressUIxEydk = await BancorV2_ZapIn_General_V1_1EhFbStv.toPayable.call(addressCyrrUw1, {from: accounts[4]});
//		const uint16DB0WCZY = await BancorV2_ZapIn_General_V1_1EhFbStv.set_new_goodwill.call(uintkgx2YWI, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1EhFbStv.inCaseTokengetsStuck.call(addressRtCd54c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintKB9EGx = BigInt("564")
		const BancorV2_ZapIn_General_V1_1ER8EZnU = await BancorV2_ZapIn_General_V1_1.new(uintKB9EGx, {from: "0x0000000000000000000000000000000000000001"});
		const addressREPb48q = accounts[2]
		await BancorV2_ZapIn_General_V1_1ER8EZnU.renounceOwnership.call({from: accounts[2]});
		const boolG0tpkvh = await BancorV2_ZapIn_General_V1_1ER8EZnU.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressTaOMK5u = await BancorV2_ZapIn_General_V1_1ER8EZnU.toPayable.call(addressREPb48q, {from: accounts[1]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJTLmM5 = BigInt("1604")
		const BancorV2_ZapIn_General_V1_1OvXL0Sb = await BancorV2_ZapIn_General_V1_1.new(uintJTLmM5, {from: accounts[3]});
		const addressX1fSJmg = "0x0000000000000000000000000000000000000001"
		const addressFGDbAdl = await BancorV2_ZapIn_General_V1_1OvXL0Sb.owner.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1OvXL0Sb.renounceOwnership.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1OvXL0Sb.nonReentrant.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1OvXL0Sb.nonReentrant.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1OvXL0Sb.toggleContractActive.call({from: accounts[3]});
//		const addressocM0HMi = await BancorV2_ZapIn_General_V1_1OvXL0Sb.transferOwnership.call(addressX1fSJmg, {from: accounts[3]});

		assert.equal(addressFGDbAdl, 0xD5BCfaAA4c9d8da796f99cF9f72D7b955E988415)
		await expect(BancorV2_ZapIn_General_V1_1OvXL0Sb.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintwY3phw1 = BigInt("1396")
		const BancorV2_ZapIn_General_V1_1oOpCfeC = await BancorV2_ZapIn_General_V1_1.new(uintwY3phw1, {from: accounts[0]});
		const bytew1ACpiy = "0x0c080d1301030b1805120e19010818191e1d18190b0f1e07"
		const addressz613HmF = accounts[4]
		const addressyNxLNIU = accounts[5]
		const uintQS3kZ9O = BigInt("1023")
		const uintux7jUXS = BigInt("1687")
		const addressENrL3Hy = accounts[1]
		const addresseLIKXVI = "0x0000000000000000000000000000000000000001"
		const addresssw6bond = accounts[3]
		const uintOmfa6wE = BigInt("1913")
//		const uint256MmTnIQS = await BancorV2_ZapIn_General_V1_1oOpCfeC.ZapInSingleSided.call(addresssw6bond, addresseLIKXVI, addressENrL3Hy, uintux7jUXS, uintQS3kZ9O, addressyNxLNIU, addressz613HmF, bytew1ACpiy, {from: "0x0000000000000000000000000000000000000001"});
//		const uint16trgwIkM = await BancorV2_ZapIn_General_V1_1oOpCfeC.set_new_goodwill.call(uintOmfa6wE, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1oOpCfeC.ZapInSingleSided.call(addresssw6bond, addresseLIKXVI, addressENrL3Hy, uintux7jUXS, uintQS3kZ9O, addressyNxLNIU, addressz613HmF, bytew1ACpiy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintTOVydzR = BigInt("723")
		const BancorV2_ZapIn_General_V1_1LTYGsIZ = await BancorV2_ZapIn_General_V1_1.new(uintTOVydzR, {from: accounts[0]});
		const bytetbpHyPS = "0x1903161a1a130f20080f1114"
		const addressASvMcc = accounts[3]
		const addressrt4sD18 = accounts[2]
		const uintBrqyaSU = BigInt("1685")
		const uintvdLqE2r = BigInt("1364")
		const addressT34xIMO = accounts[1]
		const addressswRNcH = accounts[4]
		const addresse90xjMO = accounts[2]
		const addressXm3pF1I = accounts[5]
		const address5B2xm5 = accounts[4]
//		await BancorV2_ZapIn_General_V1_1LTYGsIZ.renounceOwnership.call({from: accounts[0]});
//		const uint256zyB1WrF = await BancorV2_ZapIn_General_V1_1LTYGsIZ.ZapInSingleSided.call(addresse90xjMO, addressswRNcH, addressT34xIMO, uintvdLqE2r, uintBrqyaSU, addressrt4sD18, addressASvMcc, bytetbpHyPS, {from: accounts[4]});
//		const addressaL3146N = await BancorV2_ZapIn_General_V1_1LTYGsIZ.inCaseTokengetsStuck.call(addressXm3pF1I, {from: accounts[2]});
//		const addressUGQaU4y = await BancorV2_ZapIn_General_V1_1LTYGsIZ.inCaseTokengetsStuck.call(address5B2xm5, {from: accounts[2]});
//		const addressVQgrJEI = await BancorV2_ZapIn_General_V1_1LTYGsIZ.owner.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1LTYGsIZ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintHpnNF6R = BigInt("1396")
		const BancorV2_ZapIn_General_V1_1oOpCfeC = await BancorV2_ZapIn_General_V1_1.new(uintHpnNF6R, {from: accounts[0]});
		const addresst5rh3Rb = accounts[1]
		const addressP5dFzIX = accounts[0]
		const addressozDskIr = await BancorV2_ZapIn_General_V1_1oOpCfeC.transferOwnership.call(addresst5rh3Rb, {from: accounts[0]});
		const addressvaBCUA = await BancorV2_ZapIn_General_V1_1oOpCfeC.transferOwnership.call(addressP5dFzIX, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1oOpCfeC.stopInEmergency.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1oOpCfeC.stopInEmergency.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintd7xZLY = BigInt("1628")
		const BancorV2_ZapIn_General_V1_1ENuwwfs = await BancorV2_ZapIn_General_V1_1.new(uintd7xZLY, {from: accounts[3]});
		const addressuibrimT = "0x0000000000000000000000000000000000000001"
//		await BancorV2_ZapIn_General_V1_1ENuwwfs.toggleContractActive.call({from: accounts[3]});
//		const addressThXldS1 = await BancorV2_ZapIn_General_V1_1ENuwwfs.transferOwnership.call(addressuibrimT, {from: accounts[1]});
//		const booljmaHyEU = await BancorV2_ZapIn_General_V1_1ENuwwfs.isOwner.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1ENuwwfs.renounceOwnership.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1ENuwwfs.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinthzPFQZM = BigInt("1396")
		const BancorV2_ZapIn_General_V1_1oOpCfeC = await BancorV2_ZapIn_General_V1_1.new(uinthzPFQZM, {from: accounts[0]});
		const uintjC4tzVw = BigInt("1046")
		const uintvYdfnMp = BigInt("1149")
		const address2qnZgl = accounts[1]
		const uint16ZokANVv = await BancorV2_ZapIn_General_V1_1oOpCfeC.set_new_goodwill.call(uintjC4tzVw, {from: accounts[0]});
//		const uint16trgwIkM = await BancorV2_ZapIn_General_V1_1oOpCfeC.set_new_goodwill.call(uintvYdfnMp, {from: accounts[1]});
//		const addressozDskIr = await BancorV2_ZapIn_General_V1_1oOpCfeC.transferOwnership.call(address2qnZgl, {from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1oOpCfeC.set_new_goodwill.call(uintvYdfnMp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})