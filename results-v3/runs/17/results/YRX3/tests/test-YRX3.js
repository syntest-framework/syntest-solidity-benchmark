const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3Zf8LSFE = await YRX3.new({from: accounts[5]});
		const addressQcPZi1 = "0x0000000000000000000000000000000000000001"
		const addresshxNPdgF = accounts[4]
		const addressLW6UQ6n = await YRX3Zf8LSFE.updateReward.call(addressQcPZi1, {from: accounts[5]});
		const uint256nUJLKtc = await YRX3Zf8LSFE.balanceOf.call(addresshxNPdgF, {from: accounts[4]});
		const uint256DCmM20F = await YRX3Zf8LSFE.totalSupply.call({from: accounts[2]});

		await expect(YRX3Zf8LSFE.updateReward.call(addressQcPZi1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JPdIWzX = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uint90RNGt = BigInt("177")
		const addressjrnYsKk = accounts[2]
		const uint2564V2zxW = await YRX3JPdIWzX.withdraw.call(uint90RNGt, {from: "0x0000000000000000000000000000000000000001"});
		const addressJSPZVr = await YRX3JPdIWzX.transferOwnership.call(addressjrnYsKk, {from: accounts[2]});
		const uint256cg6d6Zx = await YRX3JPdIWzX.totalSupply.call({from: accounts[0]});
	});

	it('test for YRX3', async () => {
		const YRX3EvTtPKs = await YRX3.new({from: accounts[3]});
		const addressh7fiyVz = accounts[3]
		const addresshcnzupj = accounts[2]
		const uint256vygUL01 = await YRX3EvTtPKs.rewardPerToken.call({from: accounts[1]});
		const addresslBNBXhF = await YRX3EvTtPKs.toPayable.call(addressh7fiyVz, {from: accounts[3]});
		await YRX3EvTtPKs.exit.call({from: accounts[1]});
		const addressxpniiL = await YRX3EvTtPKs.setRewardDistribution.call(addresshcnzupj, {from: accounts[1]});

		assert.equal(uint256vygUL01, BigInt("0"))
		await expect(YRX3EvTtPKs.toPayable.call(addressh7fiyVz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3xDqSEL7 = await YRX3.new({from: accounts[2]});
		const addressrpTqv3s = accounts[1]
		const boolZzMy9kk = await YRX3xDqSEL7.isOwner.call({from: accounts[2]});
		await YRX3xDqSEL7.checkStart.call({from: accounts[2]});
		const addressn45YH95 = await YRX3xDqSEL7.setRewardDistribution.call(addressrpTqv3s, {from: accounts[0]});

		assert.equal(boolZzMy9kk, true)
		await expect(YRX3xDqSEL7.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3YeKR57B = await YRX3.new({from: accounts[0]});
		const addressg0JQW7k = accounts[0]
		const uinto8aMq1c = BigInt("757")
		await YRX3YeKR57B.getReward.call({from: accounts[3]});
		const addressP08cDxY = await YRX3YeKR57B.emergencyDrain.call(addressg0JQW7k, {from: accounts[2]});
		const uint256yIPGz1L = await YRX3YeKR57B.withdraw.call(uinto8aMq1c, {from: accounts[4]});
		await YRX3YeKR57B.exit.call({from: accounts[0]});
		await YRX3YeKR57B.checkNextEpoch.call({from: accounts[3]});

		await expect(YRX3YeKR57B.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3xYWeUKS = await YRX3.new({from: accounts[2]});
		const uintOV6oy2 = BigInt("798")
		const uint256UNA8tY3 = await YRX3xYWeUKS.stake.call(uintOV6oy2, {from: accounts[1]});
		await YRX3xYWeUKS.renounceOwnership.call({from: accounts[3]});
		await YRX3xYWeUKS.checkNextEpoch.call({from: accounts[0]});

		await expect(YRX3xYWeUKS.stake.call(uintOV6oy2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3NkqyD1H = await YRX3.new({from: accounts[4]});
		const addressKGFjexh = accounts[5]
		const uintvqLMgXX = BigInt("930")
		const addressSiwAPF7 = accounts[0]
		const uint256ZcheSL2 = await YRX3NkqyD1H.earned.call(addressKGFjexh, {from: accounts[0]});
		await YRX3NkqyD1H.renounceOwnership.call({from: accounts[4]});
		const boolDY87UCh = await YRX3NkqyD1H.isOwner.call({from: accounts[3]});
		const uint256vkkqQfQ = await YRX3NkqyD1H.stake.call(uintvqLMgXX, {from: accounts[0]});
		const addressAAp5VpE = await YRX3NkqyD1H.emergencyDrain.call(addressSiwAPF7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ZcheSL2, BigInt("0"))
		await expect(YRX3NkqyD1H.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3YeKR57B = await YRX3.new({from: accounts[0]});
		const uintzPw1EJ8 = BigInt("757")
		await YRX3YeKR57B.getReward.call({from: accounts[3]});
		const uint256yIPGz1L = await YRX3YeKR57B.withdraw.call(uintzPw1EJ8, {from: accounts[4]});
		await YRX3YeKR57B.exit.call({from: accounts[0]});
		await YRX3YeKR57B.checkNextEpoch.call({from: accounts[3]});

		await expect(YRX3YeKR57B.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3xYWeUKS = await YRX3.new({from: accounts[2]});
		const uintNWpfu0w = BigInt("832")
		await YRX3xYWeUKS.getReward.call({from: accounts[4]});
		await YRX3xYWeUKS.renounceOwnership.call({from: accounts[4]});
		const uint256UNA8tY3 = await YRX3xYWeUKS.stake.call(uintNWpfu0w, {from: accounts[1]});
		const uint256dmyktUy = await YRX3xYWeUKS.lastTimeRewardApplicable.call({from: accounts[3]});
		await YRX3xYWeUKS.renounceOwnership.call({from: accounts[3]});
		await YRX3xYWeUKS.checkNextEpoch.call({from: accounts[0]});

		await expect(YRX3xYWeUKS.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3qZIikNa = await YRX3.new({from: accounts[3]});
		const uintcU5T0cX = BigInt("443")
		await YRX3qZIikNa.exit.call({from: accounts[2]});
		await YRX3qZIikNa.onlyOwner.call({from: accounts[3]});
		const uint256sr0UiqC = await YRX3qZIikNa.stake.call(uintcU5T0cX, {from: accounts[3]});

		await expect(YRX3qZIikNa.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h6yna0J = await YRX3.new({from: accounts[2]});
		const addressQdWCE7K = accounts[5]
		const uintsx3WTwR = BigInt("279")
		const addressIc7iTEf = "0x0000000000000000000000000000000000000001"
		const uintYKRRG2X = BigInt("1863")
		const addressDH31aJW = await YRX3h6yna0J.transferOwnership.call(addressQdWCE7K, {from: accounts[2]});
		const uint256xLV3sHO = await YRX3h6yna0J.rewardPerToken.call({from: accounts[1]});
		const uint256xFYaV9b = await YRX3h6yna0J.withdraw.call(uintsx3WTwR, {from: accounts[2]});
		const uint256Du3PNAE = await YRX3h6yna0J.earned.call(addressIc7iTEf, {from: accounts[1]});
		const uint256om4bH1b = await YRX3h6yna0J.stake.call(uintYKRRG2X, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256xLV3sHO, BigInt("0"))
		await expect(YRX3h6yna0J.withdraw.call(uintsx3WTwR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3qZIikNa = await YRX3.new({from: accounts[3]});
		const uintEQ6zbN = BigInt("420")
		const uintty4aGB = BigInt("1989")
		const addresswbfWDFh = await YRX3qZIikNa.owner.call({from: accounts[1]});
		const uint256sr0UiqC = await YRX3qZIikNa.stake.call(uintEQ6zbN, {from: accounts[3]});
		const uint256ILwRPPS = await YRX3qZIikNa.withdraw.call(uintty4aGB, {from: accounts[4]});

		assert.equal(addresswbfWDFh, 0x66179f8441449b0Ae6A2c9BC0619546e7D191231)
		await expect(YRX3qZIikNa.stake.call(uintEQ6zbN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3qZIikNa = await YRX3.new({from: accounts[3]});
		const addressPp9zW88 = accounts[4]
		const uintZwZqJtx = BigInt("1789")
		const addressyTe3TiX = await YRX3qZIikNa.setRewardDistribution.call(addressPp9zW88, {from: accounts[3]});
		await YRX3qZIikNa.renounceOwnership.call({from: accounts[5]});
		const uint256sr0UiqC = await YRX3qZIikNa.stake.call(uintZwZqJtx, {from: accounts[3]});

		await expect(YRX3qZIikNa.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})