const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintDyQyXQm = BigInt("165")
		const BancorV2_ZapIn_General_V1_1WHbmKqS = await BancorV2_ZapIn_General_V1_1.new(uintDyQyXQm, {from: accounts[3]});
		const addressUifOSKx = "0x0000000000000000000000000000000000000001"
		const uintAaI3lgZ = BigInt("1441")
//		const address7Sstac = await BancorV2_ZapIn_General_V1_1WHbmKqS.inCaseTokengetsStuck.call(addressUifOSKx, {from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1WHbmKqS.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1WHbmKqS.stopInEmergency.call({from: accounts[5]});
//		const uint16hQVa5hg = await BancorV2_ZapIn_General_V1_1WHbmKqS.set_new_goodwill.call(uintAaI3lgZ, {from: accounts[2]});
//		const addressXa8Bvw6 = await BancorV2_ZapIn_General_V1_1WHbmKqS.owner.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1WHbmKqS.inCaseTokengetsStuck.call(addressUifOSKx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintrgWytzf = BigInt("196")
		const BancorV2_ZapIn_General_V1_1VFSqfb2 = await BancorV2_ZapIn_General_V1_1.new(uintrgWytzf, {from: accounts[5]});
		const addresslQySaTi = accounts[4]
		const addressp8dNpOs = accounts[2]
//		const addresssRkzYoe = await BancorV2_ZapIn_General_V1_1VFSqfb2.transferOwnership.call(addresslQySaTi, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1VFSqfb2.nonReentrant.call({from: accounts[1]});
//		const addressa6pB3Zq = await BancorV2_ZapIn_General_V1_1VFSqfb2.inCaseTokengetsStuck.call(addressp8dNpOs, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1VFSqfb2.transferOwnership.call(addresslQySaTi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintk6HzOa2 = BigInt("484")
		const BancorV2_ZapIn_General_V1_1bMjmVyg = await BancorV2_ZapIn_General_V1_1.new(uintk6HzOa2, {from: accounts[2]});
		const addresscC2PoVI = accounts[4]
		const addressSQc5Cbi = accounts[3]
		const addressosSZtvC = accounts[4]
//		await BancorV2_ZapIn_General_V1_1bMjmVyg.stopInEmergency.call({from: accounts[4]});
//		const addressfAEPSv = await BancorV2_ZapIn_General_V1_1bMjmVyg.transferOwnership.call(addresscC2PoVI, {from: accounts[4]});
//		const addressXCsQ8K = await BancorV2_ZapIn_General_V1_1bMjmVyg.inCaseTokengetsStuck.call(addressSQc5Cbi, {from: accounts[1]});
//		const addressXvnyop = await BancorV2_ZapIn_General_V1_1bMjmVyg.transferOwnership.call(addressosSZtvC, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1bMjmVyg.stopInEmergency.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintME1jXi = BigInt("196")
		const BancorV2_ZapIn_General_V1_1VFSqfb2 = await BancorV2_ZapIn_General_V1_1.new(uintME1jXi, {from: accounts[5]});
		const addressLNQ3YiO = accounts[4]
		const uintdaRbJyl = BigInt("349")
		const addressRqBKsub = accounts[2]
		const addressEMTjiQw = await BancorV2_ZapIn_General_V1_1VFSqfb2.owner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1VFSqfb2.nonReentrant.call({from: accounts[4]});
//		const addresssRkzYoe = await BancorV2_ZapIn_General_V1_1VFSqfb2.transferOwnership.call(addressLNQ3YiO, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1VFSqfb2.nonReentrant.call({from: accounts[1]});
//		const uint16qbzBVDY = await BancorV2_ZapIn_General_V1_1VFSqfb2.set_new_goodwill.call(uintdaRbJyl, {from: "0x0000000000000000000000000000000000000001"});
//		const addressa6pB3Zq = await BancorV2_ZapIn_General_V1_1VFSqfb2.inCaseTokengetsStuck.call(addressRqBKsub, {from: accounts[3]});

		assert.equal(addressEMTjiQw, 0x2B5b12c12332b8b9f82C12D2f272B5D9dC0A9461)
		await expect(BancorV2_ZapIn_General_V1_1VFSqfb2.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintOQSmcSj = BigInt("1370")
		const BancorV2_ZapIn_General_V1_1PSxTDLd = await BancorV2_ZapIn_General_V1_1.new(uintOQSmcSj, {from: accounts[1]});
		const bytem9Z4VXv = "0x091016051e0a1b161f131c100a0a1b030b070c0a101c15"
		const addressxpao0Fd = accounts[0]
		const addressWbGpfK0 = accounts[1]
		const uintfhxsbQW = BigInt("543")
		const uintwaIbTcf = BigInt("1830")
		const addressGiLk3jt = accounts[5]
		const addressfk5buoR = accounts[3]
		const addresskthWLOn = accounts[0]
//		const uint256jSWkwjX = await BancorV2_ZapIn_General_V1_1PSxTDLd.ZapInSingleSided.call(addresskthWLOn, addressfk5buoR, addressGiLk3jt, uintwaIbTcf, uintfhxsbQW, addressWbGpfK0, addressxpao0Fd, bytem9Z4VXv, {from: accounts[3]});
//		const addressilD6j9f = await BancorV2_ZapIn_General_V1_1PSxTDLd.owner.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1PSxTDLd.toggleContractActive.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1PSxTDLd.toggleContractActive.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1PSxTDLd.ZapInSingleSided.call(addresskthWLOn, addressfk5buoR, addressGiLk3jt, uintwaIbTcf, uintfhxsbQW, addressWbGpfK0, addressxpao0Fd, bytem9Z4VXv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintzjbqfai = BigInt("736")
		const BancorV2_ZapIn_General_V1_1BQ1Guo = await BancorV2_ZapIn_General_V1_1.new(uintzjbqfai, {from: accounts[0]});
		const uintWLNJ5Rr = BigInt("1044")
//		await BancorV2_ZapIn_General_V1_1BQ1Guo.toggleContractActive.call({from: accounts[0]});
//		const uint166PSsUl = await BancorV2_ZapIn_General_V1_1BQ1Guo.set_new_goodwill.call(uintWLNJ5Rr, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1BQ1Guo.onlyOwner.call({from: accounts[2]});
//		const address9eI5n2 = await BancorV2_ZapIn_General_V1_1BQ1Guo.owner.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1BQ1Guo.toggleContractActive.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintH3E6rMg = BigInt("1211")
		const BancorV2_ZapIn_General_V1_1KMabVXt = await BancorV2_ZapIn_General_V1_1.new(uintH3E6rMg, {from: "0x0000000000000000000000000000000000000001"});
		const addressFWDKZZV = await BancorV2_ZapIn_General_V1_1KMabVXt.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1KMabVXt.stopInEmergency.call({from: accounts[2]});
		const boolUDcYvVA = await BancorV2_ZapIn_General_V1_1KMabVXt.isOwner.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1KMabVXt.stopInEmergency.call({from: accounts[5]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintc5TW4do = BigInt("2030")
		const BancorV2_ZapIn_General_V1_1olS6Z5h = await BancorV2_ZapIn_General_V1_1.new(uintc5TW4do, {from: accounts[1]});
		const uintlQk2yXx = BigInt("1534")
		const bytempGEH7k = "0x0f0e1f1c"
		const addressVfNpxtU = accounts[4]
		const addresskjT4j79 = accounts[3]
		const uintGW7INia = BigInt("1007")
		const uintf2aOuAA = BigInt("1190")
		const addressZFyieBB = accounts[3]
		const addressLYYOf0 = "0x0000000000000000000000000000000000000001"
		const addressK13Rv7 = "0x0000000000000000000000000000000000000001"
		const uinteb07Te = BigInt("807")
		const uint16HqSXHj8 = await BancorV2_ZapIn_General_V1_1olS6Z5h.set_new_goodwill.call(uintlQk2yXx, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1olS6Z5h.nonReentrant.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1olS6Z5h.toggleContractActive.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1olS6Z5h.onlyOwner.call({from: accounts[3]});
//		const uint256jVaKCCR = await BancorV2_ZapIn_General_V1_1olS6Z5h.ZapInSingleSided.call(addressK13Rv7, addressLYYOf0, addressZFyieBB, uintf2aOuAA, uintGW7INia, addresskjT4j79, addressVfNpxtU, bytempGEH7k, {from: accounts[4]});
//		const uint16J78x8o = await BancorV2_ZapIn_General_V1_1olS6Z5h.set_new_goodwill.call(uinteb07Te, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1olS6Z5h.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinthp9zhma = BigInt("196")
		const BancorV2_ZapIn_General_V1_1VFSqfb2 = await BancorV2_ZapIn_General_V1_1.new(uinthp9zhma, {from: accounts[5]});
		const addressTAccV5R = accounts[6]
//		await BancorV2_ZapIn_General_V1_1VFSqfb2.renounceOwnership.call({from: accounts[5]});
//		const addressa6pB3Zq = await BancorV2_ZapIn_General_V1_1VFSqfb2.inCaseTokengetsStuck.call(addressTAccV5R, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1VFSqfb2.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintwm03lYH = BigInt("952")
		const BancorV2_ZapIn_General_V1_1Cg0DkUt = await BancorV2_ZapIn_General_V1_1.new(uintwm03lYH, {from: accounts[2]});
		const addressvz9JTuI = "0x0000000000000000000000000000000000000001"
		const addressqdvyY9v = accounts[5]
		const addressmqafDJS = accounts[0]
		const addressFgtRur = await BancorV2_ZapIn_General_V1_1Cg0DkUt.transferOwnership.call(addressvz9JTuI, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1Cg0DkUt.nonReentrant.call({from: accounts[5]});
//		const addressqq19ZkS = await BancorV2_ZapIn_General_V1_1Cg0DkUt.inCaseTokengetsStuck.call(addressqdvyY9v, {from: accounts[1]});
//		const addressbRPcmr4 = await BancorV2_ZapIn_General_V1_1Cg0DkUt.inCaseTokengetsStuck.call(addressmqafDJS, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1Cg0DkUt.nonReentrant.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})