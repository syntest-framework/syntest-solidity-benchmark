const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3ZSxMsfV = await YRX3.new({from: accounts[4]});
		await YRX3ZSxMsfV.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await YRX3ZSxMsfV.checkNextEpoch.call({from: accounts[0]});
		await YRX3ZSxMsfV.checkNextEpoch.call({from: accounts[0]});

		await expect(YRX3ZSxMsfV.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3yzKnUg0 = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspL4HlRI = accounts[2]
		const uintWlBBqgR = BigInt("930")
		const addressE3xjLj5 = await YRX3yzKnUg0.updateReward.call(addresspL4HlRI, {from: accounts[0]});
		const uint256uv01gdr = await YRX3yzKnUg0.withdraw.call(uintWlBBqgR, {from: accounts[1]});
	});

	it('test for YRX3', async () => {
		const YRX3baSyA7Y = await YRX3.new({from: accounts[2]});
		const uintX5Wuyvl = BigInt("1575")
		const uint256fNP66Dt = await YRX3baSyA7Y.withdraw.call(uintX5Wuyvl, {from: accounts[0]});
		await YRX3baSyA7Y.checkStart.call({from: accounts[4]});
		const uint256GE93WJs = await YRX3baSyA7Y.totalSupply.call({from: accounts[4]});
		await YRX3baSyA7Y.renounceOwnership.call({from: accounts[2]});

		await expect(YRX3baSyA7Y.withdraw.call(uintX5Wuyvl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jsmEMzJ = await YRX3.new({from: accounts[1]});
		const addressgwudJ7p = accounts[0]
		const addressMMb4q5Y = "0x0000000000000000000000000000000000000001"
		const bool6l9aSd = await YRX3jsmEMzJ.isOwner.call({from: accounts[1]});
		const addressaCvPmy2 = await YRX3jsmEMzJ.emergencyDrain.call(addressgwudJ7p, {from: accounts[1]});
		await YRX3jsmEMzJ.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const addressCpdqEVK = await YRX3jsmEMzJ.toPayable.call(addressMMb4q5Y, {from: accounts[5]});
		const boolizzFivL = await YRX3jsmEMzJ.isOwner.call({from: accounts[1]});

		assert.equal(bool6l9aSd, true)
		await expect(YRX3jsmEMzJ.emergencyDrain.call(addressgwudJ7p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uJVuyCO = await YRX3.new({from: accounts[4]});
		const addresskcckLrX = accounts[4]
		const uintbHSEbh = BigInt("744")
		const uint256TVYStyt = await YRX3uJVuyCO.earned.call(addresskcckLrX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ASrNpnL = await YRX3uJVuyCO.stake.call(uintbHSEbh, {from: accounts[3]});
		await YRX3uJVuyCO.checkStart.call({from: accounts[3]});

		assert.equal(uint256TVYStyt, BigInt("0"))
		await expect(YRX3uJVuyCO.stake.call(uintbHSEbh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3z0wQOR = await YRX3.new({from: accounts[2]});
		const uintzzyBuiW = BigInt("1019")
		const addressC8oIbt7 = accounts[4]
		const uintyFkRNil = BigInt("1239")
		await YRX3z0wQOR.getReward.call({from: accounts[2]});
		const uint256Awg2L7n = await YRX3z0wQOR.stake.call(uintzzyBuiW, {from: accounts[3]});
		await YRX3z0wQOR.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressrOy2lz9 = await YRX3z0wQOR.setRewardDistribution.call(addressC8oIbt7, {from: accounts[3]});
		const uint256JOIpoNU = await YRX3z0wQOR.stake.call(uintyFkRNil, {from: accounts[2]});

		await expect(YRX3z0wQOR.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uJVuyCO = await YRX3.new({from: accounts[4]});
		const addressRz2FLWe = accounts[5]
		const uintEfMnWWL = BigInt("744")
		const uint256KiNDg5G = await YRX3uJVuyCO.rewardPerToken.call({from: accounts[3]});
		const addressa2TH5sb = await YRX3uJVuyCO.setRewardDistribution.call(addressRz2FLWe, {from: accounts[5]});
		const uint256ASrNpnL = await YRX3uJVuyCO.stake.call(uintEfMnWWL, {from: accounts[3]});
		await YRX3uJVuyCO.checkStart.call({from: accounts[3]});

		assert.equal(uint256KiNDg5G, BigInt("0"))
		await expect(YRX3uJVuyCO.setRewardDistribution.call(addressRz2FLWe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3lYOvZsO = await YRX3.new({from: accounts[5]});
		const addressgJv4k4E = accounts[1]
		const addressw8X01QL = accounts[1]
		const uint256VhuR3a9 = await YRX3lYOvZsO.earned.call(addressgJv4k4E, {from: accounts[3]});
		const uint256YfolCnJ = await YRX3lYOvZsO.totalSupply.call({from: accounts[1]});
		const addressVEjBfZL = await YRX3lYOvZsO.transferOwnership.call(addressw8X01QL, {from: accounts[5]});
		await YRX3lYOvZsO.renounceOwnership.call({from: accounts[1]});
		const uint256iEff52I = await YRX3lYOvZsO.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256VhuR3a9, BigInt("0"))
		assert.equal(uint256YfolCnJ, BigInt("0"))
		await expect(YRX3lYOvZsO.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3pl9F3AH = await YRX3.new({from: accounts[0]});
		const uintr6D9Kxu = BigInt("618")
		await YRX3pl9F3AH.exit.call({from: accounts[2]});
		await YRX3pl9F3AH.onlyOwner.call({from: accounts[2]});
		await YRX3pl9F3AH.exit.call({from: accounts[2]});
		const uint256NP9bkrg = await YRX3pl9F3AH.totalSupply.call({from: accounts[4]});
		const uint256b5UylmB = await YRX3pl9F3AH.withdraw.call(uintr6D9Kxu, {from: accounts[4]});

		await expect(YRX3pl9F3AH.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uJVuyCO = await YRX3.new({from: accounts[4]});
		const addressZzmZ8UB = "0x0000000000000000000000000000000000000001"
		const addressiiCIiIi = await YRX3uJVuyCO.owner.call({from: accounts[3]});
		const uint256wna3LVF = await YRX3uJVuyCO.totalSupply.call({from: accounts[3]});
		const address55HMkz = await YRX3uJVuyCO.toPayable.call(addressZzmZ8UB, {from: accounts[3]});
		await YRX3uJVuyCO.getReward.call({from: accounts[3]});
		await YRX3uJVuyCO.getReward.call({from: accounts[5]});

		assert.equal(addressiiCIiIi, 0x894fCF98978cB39Fd05A5cb3488D2Ec41a145613)
		assert.equal(uint256wna3LVF, BigInt("0"))
		await expect(YRX3uJVuyCO.toPayable.call(addressZzmZ8UB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uJVuyCO = await YRX3.new({from: accounts[4]});
		await YRX3uJVuyCO.renounceOwnership.call({from: accounts[4]});
		await YRX3uJVuyCO.getReward.call({from: accounts[5]});
		const uint256QdBQiKd = await YRX3uJVuyCO.totalSupply.call({from: accounts[5]});

		await expect(YRX3uJVuyCO.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uJVuyCO = await YRX3.new({from: accounts[4]});
		const addresspf1BQWa = accounts[1]
		const uinttw4ai9D = BigInt("744")
		const uint256ZHgajF0 = await YRX3uJVuyCO.totalSupply.call({from: accounts[2]});
		const uint256NN24PL6 = await YRX3uJVuyCO.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressc7BbbLf = await YRX3uJVuyCO.setRewardDistribution.call(addresspf1BQWa, {from: accounts[4]});
		const uint256ASrNpnL = await YRX3uJVuyCO.stake.call(uinttw4ai9D, {from: accounts[3]});

		assert.equal(uint256NN24PL6, BigInt("0"))
		assert.equal(uint256ZHgajF0, BigInt("0"))
		await expect(YRX3uJVuyCO.stake.call(uinttw4ai9D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})