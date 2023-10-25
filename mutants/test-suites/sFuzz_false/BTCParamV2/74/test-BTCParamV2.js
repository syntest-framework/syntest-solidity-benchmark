const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2ZhN9W8d = await BTCParamV2.new({from: accounts[3]});
		const uintMFM7GXH = BigInt("1952")
		const addressM7IkZd = accounts[4]
//		const uint256FaZ9U87 = await BTCParamV2ZhN9W8d.setBtcNetDiff.call(uintMFM7GXH, {from: accounts[3]});
//		const addressLlacOvW = await BTCParamV2ZhN9W8d.transferOwnership.call(addressM7IkZd, {from: accounts[1]});
//		await BTCParamV2ZhN9W8d.onlyParamSetter.call({from: accounts[0]});

		await expect(BTCParamV2ZhN9W8d.setBtcNetDiff.call(uintMFM7GXH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2htWvr6 = await BTCParamV2.new({from: accounts[2]});
//		await BTCParamV2htWvr6.onlyOwner.call({from: accounts[4]});
		await BTCParamV2htWvr6.onlyOwner.call({from: accounts[4]});

		await expect(BTCParamV2htWvr6.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2kxkBqze = await BTCParamV2.new({from: accounts[1]});
		const uintyFmtIkp = BigInt("1756")
//		const uint256QxLf7Eq = await BTCParamV2kxkBqze.btcIncomePerTPerSecInWei.call({from: accounts[4]});
//		await BTCParamV2kxkBqze.updateBtcPrice.call({from: accounts[4]});
//		const uint256phKFXJ7 = await BTCParamV2kxkBqze.setBtcBlockReward.call(uintyFmtIkp, {from: accounts[5]});
//		await BTCParamV2kxkBqze.onlyParamSetter.call({from: accounts[2]});

		await expect(BTCParamV2kxkBqze.btcIncomePerTPerSecInWei.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2F3YHZEI = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTnmwTWc = "0x0000000000000000000000000000000000000001"
		const uintgDei0J9 = BigInt("1961")
		const addressAiQbWw8 = "0x0000000000000000000000000000000000000001"
		const addresswIomKe = accounts[5]
		const address1Y0c7Z = accounts[5]
		const addressyohD03m = await BTCParamV2F3YHZEI.transferOwnership.call(addressTnmwTWc, {from: accounts[5]});
		const uint256gtCSOlY = await BTCParamV2F3YHZEI.setBtcNetDiff.call(uintgDei0J9, {from: accounts[3]});
		const addressGyw6VnR = await BTCParamV2F3YHZEI.setParamSetter.call(addressAiQbWw8, {from: accounts[3]});
		const address7iLIeq = await BTCParamV2F3YHZEI.addListener.call(addresswIomKe, {from: accounts[4]});
		const addressCnw2cze = await BTCParamV2F3YHZEI.addListener.call(address1Y0c7Z, {from: accounts[4]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2c5o0rYP = await BTCParamV2.new({from: accounts[4]});
		const addressQwWr17n = accounts[1]
		const uintblsaF5m = BigInt("1387")
		const addressVKPIVY6 = accounts[2]
//		const addressLNAscZ5 = await BTCParamV2c5o0rYP.transferOwnership.call(addressQwWr17n, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tcEEoau = await BTCParamV2c5o0rYP.setBtcNetDiff.call(uintblsaF5m, {from: accounts[3]});
//		const addressIbeNG4w = await BTCParamV2c5o0rYP.transferOwnership.call(addressVKPIVY6, {from: accounts[4]});

		await expect(BTCParamV2c5o0rYP.transferOwnership.call(addressQwWr17n, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2htWvr6 = await BTCParamV2.new({from: accounts[2]});
		const uint256lqMLu5q = await BTCParamV2htWvr6.btcPrice.call({from: "0x0000000000000000000000000000000000000001"});
//		await BTCParamV2htWvr6.onlyOwner.call({from: accounts[4]});
		await BTCParamV2htWvr6.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256lqMLu5q, BigInt("0"))
		await expect(BTCParamV2htWvr6.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2htWvr6 = await BTCParamV2.new({from: accounts[2]});
		const boolUQn9L8 = false
		const addressM0TZE1 = accounts[0]
		const uintnN9pgYw = BigInt("2044")
		const uintkcUYsL = BigInt("767")
		const addressqAgmizL = accounts[3]
		const addressx98HIGY = accounts[5]
//		const addressWqXQHl = await BTCParamV2htWvr6.initialize.call(addressx98HIGY, addressqAgmizL, uintkcUYsL, uintnN9pgYw, addressM0TZE1, boolUQn9L8, {from: accounts[2]});
//		await BTCParamV2htWvr6.onlyOwner.call({from: accounts[4]});

		await expect(BTCParamV2htWvr6.initialize.call(addressx98HIGY, addressqAgmizL, uintkcUYsL, uintnN9pgYw, addressM0TZE1, boolUQn9L8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})