const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintvxKKANP = BigInt("294")
		const BancorV2_ZapIn_General_V1_1dh9VgJy = await BancorV2_ZapIn_General_V1_1.new(uintvxKKANP, {from: accounts[3]});
		const addressmJTn59L = accounts[4]
		const addresshhrVkjP = accounts[1]
		const boolE0jmxb7 = await BancorV2_ZapIn_General_V1_1dh9VgJy.isOwner.call({from: accounts[3]});
//		const addressiDvudSi = await BancorV2_ZapIn_General_V1_1dh9VgJy.inCaseTokengetsStuck.call(addressmJTn59L, {from: accounts[5]});
//		const addressgKrz3ly = await BancorV2_ZapIn_General_V1_1dh9VgJy.transferOwnership.call(addresshhrVkjP, {from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1dh9VgJy.stopInEmergency.call({from: accounts[2]});

		assert.equal(boolE0jmxb7, true)
		await expect(BancorV2_ZapIn_General_V1_1dh9VgJy.inCaseTokengetsStuck.call(addressmJTn59L, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJuf6fg0 = BigInt("79")
		const BancorV2_ZapIn_General_V1_1hThXEaW = await BancorV2_ZapIn_General_V1_1.new(uintJuf6fg0, {from: accounts[3]});
		const addressf0hS6ga = accounts[1]
		const addressYSnQ5Jh = accounts[4]
//		await BancorV2_ZapIn_General_V1_1hThXEaW.stopInEmergency.call({from: accounts[5]});
//		const addressXHrfsTa = await BancorV2_ZapIn_General_V1_1hThXEaW.owner.call({from: accounts[3]});
//		const addressWKTlZQj = await BancorV2_ZapIn_General_V1_1hThXEaW.inCaseTokengetsStuck.call(addressf0hS6ga, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1hThXEaW.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressYpyRGT = await BancorV2_ZapIn_General_V1_1hThXEaW.inCaseTokengetsStuck.call(addressYSnQ5Jh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1hThXEaW.stopInEmergency.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintWWXDVJ = BigInt("572")
		const BancorV2_ZapIn_General_V1_1PHdVBqy = await BancorV2_ZapIn_General_V1_1.new(uintWWXDVJ, {from: accounts[0]});
		const bytewxPRcP = "0x0e0b150f10090f15041b081a091d1819091d0618030f15"
		const addressBnYU9Ft = "0x0000000000000000000000000000000000000001"
		const addressu9ZOnf0 = accounts[3]
		const uintFConYxB = BigInt("121")
		const uintUGc4gSm = BigInt("259")
		const addressMRAV0Nw = accounts[4]
		const addressnkg81VE = accounts[0]
		const addressy7gyVon = accounts[1]
		const booloAI81Ak = await BancorV2_ZapIn_General_V1_1PHdVBqy.isOwner.call({from: accounts[5]});
		const addressRpg2ZWF = await BancorV2_ZapIn_General_V1_1PHdVBqy.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256X2To0bF = await BancorV2_ZapIn_General_V1_1PHdVBqy.ZapInSingleSided.call(addressy7gyVon, addressnkg81VE, addressMRAV0Nw, uintUGc4gSm, uintFConYxB, addressu9ZOnf0, addressBnYU9Ft, bytewxPRcP, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1PHdVBqy.renounceOwnership.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1PHdVBqy.renounceOwnership.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1PHdVBqy.onlyOwner.call({from: accounts[4]});

		assert.equal(addressRpg2ZWF, 0xF68566F470c84c86E3A8dc54A09F538aaF1678A3)
		assert.equal(booloAI81Ak, false)
		await expect(BancorV2_ZapIn_General_V1_1PHdVBqy.ZapInSingleSided.call(addressy7gyVon, addressnkg81VE, addressMRAV0Nw, uintUGc4gSm, uintFConYxB, addressu9ZOnf0, addressBnYU9Ft, bytewxPRcP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintdy0dwZa = BigInt("1344")
		const BancorV2_ZapIn_General_V1_1CFezyP7 = await BancorV2_ZapIn_General_V1_1.new(uintdy0dwZa, {from: "0x0000000000000000000000000000000000000001"});
		const addressVfyUksr = accounts[4]
		const addresss0ueF4L = await BancorV2_ZapIn_General_V1_1CFezyP7.owner.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1CFezyP7.stopInEmergency.call({from: accounts[1]});
		const addressosnOP9K = await BancorV2_ZapIn_General_V1_1CFezyP7.inCaseTokengetsStuck.call(addressVfyUksr, {from: accounts[0]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintP0Kl4eK = BigInt("1924")
		const BancorV2_ZapIn_General_V1_1NdDcR4t = await BancorV2_ZapIn_General_V1_1.new(uintP0Kl4eK, {from: accounts[4]});
		const uintApE4Vnt = BigInt("1319")
		const addressISVVWYY = await BancorV2_ZapIn_General_V1_1NdDcR4t.owner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1NdDcR4t.toggleContractActive.call({from: accounts[4]});
//		const uint16nhYsIn8 = await BancorV2_ZapIn_General_V1_1NdDcR4t.set_new_goodwill.call(uintApE4Vnt, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1NdDcR4t.onlyOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1NdDcR4t.renounceOwnership.call({from: accounts[3]});

		assert.equal(addressISVVWYY, 0xe76C7d78f135985CA156A42892Beee9e1765c9Ae)
		await expect(BancorV2_ZapIn_General_V1_1NdDcR4t.toggleContractActive.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintkJlTVnS = BigInt("554")
		const BancorV2_ZapIn_General_V1_1vjkyCPs = await BancorV2_ZapIn_General_V1_1.new(uintkJlTVnS, {from: accounts[1]});
		const addressgbVdR8M = "0x0000000000000000000000000000000000000001"
		const addressS5dv26A = accounts[1]
//		const addressxkUrgL9 = await BancorV2_ZapIn_General_V1_1vjkyCPs.inCaseTokengetsStuck.call(addressgbVdR8M, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1vjkyCPs.nonReentrant.call({from: accounts[5]});
//		const addressv2X7Jqi = await BancorV2_ZapIn_General_V1_1vjkyCPs.inCaseTokengetsStuck.call(addressS5dv26A, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1vjkyCPs.toggleContractActive.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1vjkyCPs.inCaseTokengetsStuck.call(addressgbVdR8M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintC59YnCb = BigInt("107")
		const BancorV2_ZapIn_General_V1_1BMSqWq = await BancorV2_ZapIn_General_V1_1.new(uintC59YnCb, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1BMSqWq.renounceOwnership.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1BMSqWq.onlyOwner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1BMSqWq.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintueNdHA = BigInt("1354")
		const BancorV2_ZapIn_General_V1_1pKFX260 = await BancorV2_ZapIn_General_V1_1.new(uintueNdHA, {from: accounts[5]});
		const addressUIhIBU = accounts[4]
//		await BancorV2_ZapIn_General_V1_1pKFX260.withdraw.call({from: accounts[5]});
//		const address7SHReE = await BancorV2_ZapIn_General_V1_1pKFX260.transferOwnership.call(addressUIhIBU, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1pKFX260.withdraw.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintjOQcwjI = BigInt("1354")
		const BancorV2_ZapIn_General_V1_1pKFX260 = await BancorV2_ZapIn_General_V1_1.new(uintjOQcwjI, {from: accounts[5]});
		const addressJPJqEUI = accounts[0]
		const addressDTYnQsh = accounts[3]
		const addressPY5qzPU = await BancorV2_ZapIn_General_V1_1pKFX260.transferOwnership.call(addressJPJqEUI, {from: accounts[5]});
//		const address7SHReE = await BancorV2_ZapIn_General_V1_1pKFX260.transferOwnership.call(addressDTYnQsh, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1pKFX260.transferOwnership.call(addressDTYnQsh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintzi8OW8 = BigInt("1354")
		const BancorV2_ZapIn_General_V1_1pKFX260 = await BancorV2_ZapIn_General_V1_1.new(uintzi8OW8, {from: accounts[5]});
		const uintBtPuw6 = BigInt("1814")
		const addressgHFnRlO = accounts[4]
		const uint16oA2If5z = await BancorV2_ZapIn_General_V1_1pKFX260.set_new_goodwill.call(uintBtPuw6, {from: accounts[5]});
//		const address7SHReE = await BancorV2_ZapIn_General_V1_1pKFX260.transferOwnership.call(addressgHFnRlO, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1pKFX260.transferOwnership.call(addressgHFnRlO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})