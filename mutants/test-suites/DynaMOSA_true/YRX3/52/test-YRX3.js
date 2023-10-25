const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3UoNnliM = await YRX3.new({from: accounts[4]});
		const uintQ8oHw9N = BigInt("1178")
		const addressXlUof5 = accounts[0]
//		const uint256S8Ara1 = await YRX3UoNnliM.withdraw.call(uintQ8oHw9N, {from: accounts[4]});
//		await YRX3UoNnliM.onlyRewardDistribution.call({from: accounts[2]});
//		const uint256KcDzEKH = await YRX3UoNnliM.balanceOf.call(addressXlUof5, {from: accounts[5]});

		await expect(YRX3UoNnliM.withdraw.call(uintQ8oHw9N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h0VaGq3 = await YRX3.new({from: accounts[1]});
		const uintXDMwOsb = BigInt("1915")
//		await YRX3h0VaGq3.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolJnkIjlt = await YRX3h0VaGq3.isOwner.call({from: accounts[0]});
//		const uint256oforE8L = await YRX3h0VaGq3.stake.call(uintXDMwOsb, {from: accounts[1]});

		await expect(YRX3h0VaGq3.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3nQxKUZS = await YRX3.new({from: accounts[3]});
		const addressKkoigQe = accounts[1]
//		await YRX3nQxKUZS.checkStart.call({from: accounts[1]});
//		const addressS4IBzJ8 = await YRX3nQxKUZS.setRewardDistribution.call(addressKkoigQe, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3nQxKUZS.renounceOwnership.call({from: accounts[1]});
//		const uint256rGFPTCj = await YRX3nQxKUZS.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(YRX3nQxKUZS.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3a388Ohp = await YRX3.new({from: accounts[0]});
		const boolaK2J509 = await YRX3a388Ohp.isOwner.call({from: accounts[1]});
//		await YRX3a388Ohp.notifyRewardAmount.call({from: accounts[5]});
//		const booljmMgso = await YRX3a388Ohp.isOwner.call({from: accounts[0]});

		assert.equal(boolaK2J509, false)
		await expect(YRX3a388Ohp.notifyRewardAmount.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3a2lApIS = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCLtThIb = accounts[5]
		const addresssuQgoXk = accounts[2]
		const uint256Nxlx0mw = await YRX3a2lApIS.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await YRX3a2lApIS.checkNextEpoch.call({from: accounts[2]});
		const addresstUQiEn1 = await YRX3a2lApIS.emergencyDrain.call(addressCLtThIb, {from: accounts[1]});
		const uint256ljFqLu5 = await YRX3a2lApIS.totalSupply.call({from: accounts[0]});
		const uint256cDcJ0uB = await YRX3a2lApIS.earned.call(addresssuQgoXk, {from: accounts[3]});
		await YRX3a2lApIS.exit.call({from: accounts[2]});
	});

	it('test for YRX3', async () => {
		const YRX3RDDAwd = await YRX3.new({from: accounts[0]});
		const addressuOq2eZ2 = accounts[0]
		const uintkPfUvWT = BigInt("829")
//		const addresswMh2fy = await YRX3RDDAwd.transferOwnership.call(addressuOq2eZ2, {from: accounts[1]});
//		const uint256Zevnpjp = await YRX3RDDAwd.withdraw.call(uintkPfUvWT, {from: accounts[2]});

		await expect(YRX3RDDAwd.transferOwnership.call(addressuOq2eZ2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h0VaGq3 = await YRX3.new({from: accounts[1]});
		const uintV7Uq3I8 = BigInt("1420")
		const uintyUkJl7w = BigInt("1915")
//		await YRX3h0VaGq3.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await YRX3h0VaGq3.exit.call({from: accounts[3]});
//		const boolJnkIjlt = await YRX3h0VaGq3.isOwner.call({from: accounts[0]});
//		const uint256YUxExK = await YRX3h0VaGq3.withdraw.call(uintV7Uq3I8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256oforE8L = await YRX3h0VaGq3.stake.call(uintyUkJl7w, {from: accounts[1]});

		await expect(YRX3h0VaGq3.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h0VaGq3 = await YRX3.new({from: accounts[1]});
		const uintih1PjcK = BigInt("1915")
//		await YRX3h0VaGq3.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolJnkIjlt = await YRX3h0VaGq3.isOwner.call({from: accounts[0]});
//		const addressMrh1p0P = await YRX3h0VaGq3.owner.call({from: accounts[4]});
//		const uint256oforE8L = await YRX3h0VaGq3.stake.call(uintih1PjcK, {from: accounts[1]});

		await expect(YRX3h0VaGq3.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h0VaGq3 = await YRX3.new({from: accounts[1]});
		const addressSAIfOwl = accounts[1]
		const uintMZNjwT = BigInt("1915")
//		await YRX3h0VaGq3.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressy37jT8D = await YRX3h0VaGq3.setRewardDistribution.call(addressSAIfOwl, {from: accounts[1]});
//		const boolJnkIjlt = await YRX3h0VaGq3.isOwner.call({from: accounts[0]});
//		const uint256oforE8L = await YRX3h0VaGq3.stake.call(uintMZNjwT, {from: accounts[1]});

		await expect(YRX3h0VaGq3.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h0VaGq3 = await YRX3.new({from: accounts[1]});
		const addressnGOvQt3 = accounts[5]
		const uintG9Io8T8 = BigInt("1941")
		const addressNjqOn7i = accounts[1]
		const uintjBFZjMO = BigInt("729")
//		await YRX3h0VaGq3.renounceOwnership.call({from: accounts[1]});
//		await YRX3h0VaGq3.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256F1oKjoo = await YRX3h0VaGq3.earned.call(addressnGOvQt3, {from: accounts[4]});
//		const boolJnkIjlt = await YRX3h0VaGq3.isOwner.call({from: accounts[0]});
//		const uint256sh2d5U9 = await YRX3h0VaGq3.rewardPerToken.call({from: accounts[1]});
//		const uint256oforE8L = await YRX3h0VaGq3.stake.call(uintG9Io8T8, {from: accounts[1]});
//		const uint256ulua9Xa = await YRX3h0VaGq3.balanceOf.call(addressNjqOn7i, {from: accounts[1]});
//		const uint256kjRcHkW = await YRX3h0VaGq3.withdraw.call(uintjBFZjMO, {from: accounts[3]});

		await expect(YRX3h0VaGq3.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h0VaGq3 = await YRX3.new({from: accounts[1]});
		const addressbuGgL8g = accounts[2]
		const addressYokQfRI = await YRX3h0VaGq3.transferOwnership.call(addressbuGgL8g, {from: accounts[1]});
//		await YRX3h0VaGq3.onlyOwner.call({from: accounts[0]});
//		const addressbrGRypf = await YRX3h0VaGq3.owner.call({from: accounts[2]});
//		await YRX3h0VaGq3.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3h0VaGq3.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})