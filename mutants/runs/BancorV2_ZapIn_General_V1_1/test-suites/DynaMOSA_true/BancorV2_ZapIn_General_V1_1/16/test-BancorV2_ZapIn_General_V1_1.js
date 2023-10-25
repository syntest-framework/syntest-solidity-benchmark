const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZgdHsdY = BigInt("227")
		const BancorV2_ZapIn_General_V1_1BMDOtyL = await BancorV2_ZapIn_General_V1_1.new(uintZgdHsdY, {from: accounts[4]});
		const uintqjRwIwi = BigInt("113")
		const uint16jiV85x3 = await BancorV2_ZapIn_General_V1_1BMDOtyL.set_new_goodwill.call(uintqjRwIwi, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1BMDOtyL.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1BMDOtyL.renounceOwnership.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1BMDOtyL.set_new_goodwill.call(uintqjRwIwi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintAJb4Qsd = BigInt("134")
		const BancorV2_ZapIn_General_V1_1JmBnOKg = await BancorV2_ZapIn_General_V1_1.new(uintAJb4Qsd, {from: accounts[1]});
		const addressNIbd9Nc = "0x0000000000000000000000000000000000000001"
		const addresslGRMYGS = await BancorV2_ZapIn_General_V1_1JmBnOKg.toPayable.call(addressNIbd9Nc, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1JmBnOKg.stopInEmergency.call({from: accounts[0]});
		const boolTAUSroF = await BancorV2_ZapIn_General_V1_1JmBnOKg.isOwner.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1JmBnOKg.toPayable.call(addressNIbd9Nc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinth8AUxvc = BigInt("1533")
		const BancorV2_ZapIn_General_V1_1pcPEBeH = await BancorV2_ZapIn_General_V1_1.new(uinth8AUxvc, {from: accounts[2]});
		const addressiDSRkH = accounts[2]
		const addresskHCToWN = await BancorV2_ZapIn_General_V1_1pcPEBeH.owner.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1pcPEBeH.withdraw.call({from: accounts[3]});
		const addressjTfm3jo = await BancorV2_ZapIn_General_V1_1pcPEBeH.transferOwnership.call(addressiDSRkH, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1pcPEBeH.toggleContractActive.call({from: accounts[1]});
		const addressXtj2Ubh = await BancorV2_ZapIn_General_V1_1pcPEBeH.owner.call({from: accounts[4]});

		assert.equal(addresskHCToWN, 0x54fA2f001e850BdF42145C5F3eD5B5c11592a4B4)
		await expect(BancorV2_ZapIn_General_V1_1pcPEBeH.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintmr7gA4Y = BigInt("770")
		const BancorV2_ZapIn_General_V1_1proh7XN = await BancorV2_ZapIn_General_V1_1.new(uintmr7gA4Y, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1proh7XN.onlyOwner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1proh7XN.toggleContractActive.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1proh7XN.renounceOwnership.call({from: accounts[2]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uint568Ixt = BigInt("247")
		const BancorV2_ZapIn_General_V1_1rzOgs71 = await BancorV2_ZapIn_General_V1_1.new(uint568Ixt, {from: accounts[1]});
		const uintWkC4pXK = BigInt("1178")
		const addressZh7hSz9 = await BancorV2_ZapIn_General_V1_1rzOgs71.owner.call({from: accounts[2]});
		const uint16R3gsmD = await BancorV2_ZapIn_General_V1_1rzOgs71.set_new_goodwill.call(uintWkC4pXK, {from: accounts[1]});
		const boolCd9OT8n = await BancorV2_ZapIn_General_V1_1rzOgs71.isOwner.call({from: accounts[2]});

		assert.equal(addressZh7hSz9, 0x6190F60758A7b1003cC7Fd48F99d35035f36BAb9)
		assert.equal(boolCd9OT8n, false)
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintLnqX74j = BigInt("446")
		const BancorV2_ZapIn_General_V1_1cVC69gT = await BancorV2_ZapIn_General_V1_1.new(uintLnqX74j, {from: accounts[0]});
		const byteUB0sxm = "0x0e051a07110d11201a201e1a1c1b021f040809091a"
		const addresskhygrPX = accounts[1]
		const addressuks8e5M = accounts[4]
		const uintoO9ll2u = BigInt("691")
		const uintjlTgqmP = BigInt("583")
		const addressU9jZYc = accounts[0]
		const addressLs41tr = accounts[2]
		const addressMCjLK1N = accounts[3]
		const bytefNzMSsB = "0x1c0206191d0919130d1d1f0a121d0605021f120f1d"
		const addressUaH8v5k = accounts[4]
		const addressmqI5ajx = accounts[3]
		const uintxxrlWn2 = BigInt("1900")
		const uintXANWpSb = BigInt("1247")
		const addressZ6mU1Uu = "0x0000000000000000000000000000000000000001"
		const addressR7F5zjB = accounts[4]
		const addressZrklPb = accounts[2]
		const uintU60YvV = BigInt("693")
		const addressGG3sgLR = accounts[5]
		const byteGMTYiQn = "0x1a1e0d0b00131402160904061409020301181b160208"
		const addressHSFuYa3 = accounts[0]
		const addressudxSOP3 = accounts[2]
		const uintk6f71Zh = BigInt("1632")
		const uintgNmIlia = BigInt("1923")
		const addressrDErYhm = accounts[3]
		const addressxiDzFSu = accounts[5]
		const addresst0QpxBp = accounts[4]
		const addressJ7xQMdW = await BancorV2_ZapIn_General_V1_1cVC69gT.owner.call({from: accounts[1]});
		const uint256IEhgWZ = await BancorV2_ZapIn_General_V1_1cVC69gT.ZapInSingleSided.call(addressMCjLK1N, addressLs41tr, addressU9jZYc, uintjlTgqmP, uintoO9ll2u, addressuks8e5M, addresskhygrPX, byteUB0sxm, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1cVC69gT.onlyOwner.call({from: accounts[5]});
		const uint256xRHDf5W = await BancorV2_ZapIn_General_V1_1cVC69gT.ZapInSingleSided.call(addressZrklPb, addressR7F5zjB, addressZ6mU1Uu, uintXANWpSb, uintxxrlWn2, addressmqI5ajx, addressUaH8v5k, bytefNzMSsB, {from: accounts[3]});
		const uint16FftQzY7 = await BancorV2_ZapIn_General_V1_1cVC69gT.set_new_goodwill.call(uintU60YvV, {from: accounts[0]});
		const addressCeHa4Wt = await BancorV2_ZapIn_General_V1_1cVC69gT.inCaseTokengetsStuck.call(addressGG3sgLR, {from: accounts[2]});
		const uint256FOmbHVx = await BancorV2_ZapIn_General_V1_1cVC69gT.ZapInSingleSided.call(addresst0QpxBp, addressxiDzFSu, addressrDErYhm, uintgNmIlia, uintk6f71Zh, addressudxSOP3, addressHSFuYa3, byteGMTYiQn, {from: accounts[0]});

		assert.equal(addressJ7xQMdW, 0x07198dF1DcD37d5a25E985dd2d46fA1EcbbB2CbE)
		await expect(BancorV2_ZapIn_General_V1_1cVC69gT.ZapInSingleSided.call(addressMCjLK1N, addressLs41tr, addressU9jZYc, uintjlTgqmP, uintoO9ll2u, addressuks8e5M, addresskhygrPX, byteUB0sxm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintSc6CcEg = BigInt("1228")
		const BancorV2_ZapIn_General_V1_1a6VKnRg = await BancorV2_ZapIn_General_V1_1.new(uintSc6CcEg, {from: accounts[2]});
		const addressBw3Ee4C = "0x0000000000000000000000000000000000000001"
		const addressU9XfMOg = accounts[0]
		const addressyz2DXKf = await BancorV2_ZapIn_General_V1_1a6VKnRg.inCaseTokengetsStuck.call(addressBw3Ee4C, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1a6VKnRg.onlyOwner.call({from: accounts[0]});
		const addresss8W6uTf = await BancorV2_ZapIn_General_V1_1a6VKnRg.inCaseTokengetsStuck.call(addressU9XfMOg, {from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1a6VKnRg.nonReentrant.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1a6VKnRg.inCaseTokengetsStuck.call(addressBw3Ee4C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintbzra19L = BigInt("1687")
		const BancorV2_ZapIn_General_V1_1ZesNzr4 = await BancorV2_ZapIn_General_V1_1.new(uintbzra19L, {from: accounts[1]});
		const uintZNMBcB6 = BigInt("857")
		const addressIZAZmy = accounts[3]
		await BancorV2_ZapIn_General_V1_1ZesNzr4.withdraw.call({from: accounts[1]});
		const uint16cg6SKj = await BancorV2_ZapIn_General_V1_1ZesNzr4.set_new_goodwill.call(uintZNMBcB6, {from: accounts[4]});
		const addressWtHvkNE = await BancorV2_ZapIn_General_V1_1ZesNzr4.transferOwnership.call(addressIZAZmy, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1ZesNzr4.nonReentrant.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1ZesNzr4.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintnL7xSW8 = BigInt("158")
		const BancorV2_ZapIn_General_V1_1O4wpno = await BancorV2_ZapIn_General_V1_1.new(uintnL7xSW8, {from: accounts[5]});
		const addressEw9K2jQ = accounts[2]
		const addressqfWi4Dk = accounts[4]
		const addressQubCwF3 = await BancorV2_ZapIn_General_V1_1O4wpno.owner.call({from: accounts[0]});
		const addressJQ8h5xy = await BancorV2_ZapIn_General_V1_1O4wpno.transferOwnership.call(addressEw9K2jQ, {from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1O4wpno.nonReentrant.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1O4wpno.stopInEmergency.call({from: accounts[0]});
		const addressUhbpk2n = await BancorV2_ZapIn_General_V1_1O4wpno.transferOwnership.call(addressqfWi4Dk, {from: accounts[4]});

		assert.equal(addressQubCwF3, 0x931023a90177a039D72e933E7A61145708b4601F)
		await expect(BancorV2_ZapIn_General_V1_1O4wpno.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintzihqu9z = BigInt("467")
		const BancorV2_ZapIn_General_V1_1MeEF0ME = await BancorV2_ZapIn_General_V1_1.new(uintzihqu9z, {from: accounts[4]});
		const bool8LxJQx = await BancorV2_ZapIn_General_V1_1MeEF0ME.isOwner.call({from: accounts[5]});
		await BancorV2_ZapIn_General_V1_1MeEF0ME.renounceOwnership.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1MeEF0ME.nonReentrant.call({from: accounts[4]});

		assert.equal(bool8LxJQx, false)
		await expect(BancorV2_ZapIn_General_V1_1MeEF0ME.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintydzYwH0 = BigInt("467")
		const BancorV2_ZapIn_General_V1_1MeEF0ME = await BancorV2_ZapIn_General_V1_1.new(uintydzYwH0, {from: accounts[4]});
		const byterJuBIj7 = "0x13071a061d0d1a0e1414091b0913061c051a201a"
		const addressMhjaV11 = accounts[2]
		const addresszskeSvw = accounts[3]
		const uintX1Uzwy0 = BigInt("287")
		const uints5GcZx2 = BigInt("545")
		const addressij0NvfD = accounts[0]
		const addressKJG6dsN = accounts[0]
		const addressFq3CzhX = accounts[2]
		await BancorV2_ZapIn_General_V1_1MeEF0ME.toggleContractActive.call({from: accounts[4]});
		const uint256ETP1wQ = await BancorV2_ZapIn_General_V1_1MeEF0ME.ZapInSingleSided.call(addressFq3CzhX, addressKJG6dsN, addressij0NvfD, uints5GcZx2, uintX1Uzwy0, addresszskeSvw, addressMhjaV11, byterJuBIj7, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1MeEF0ME.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})