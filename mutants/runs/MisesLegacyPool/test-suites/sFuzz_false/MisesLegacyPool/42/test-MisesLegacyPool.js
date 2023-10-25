const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressII9FObu = accounts[5]
		const addressY9CNK3 = accounts[3]
		const uintPzSgcaY = BigInt("190")
		const uintZgLx064 = BigInt("491")
		const MisesLegacyPool5ccfJd = await MisesLegacyPool.new(addressII9FObu, addressY9CNK3, uintPzSgcaY, uintZgLx064, {from: accounts[2]});
		const addresslYVRNpV = accounts[4]
		const addressw9H9xGv = "0x0000000000000000000000000000000000000001"
		const uintOEMjVU3 = BigInt("1154")
		const addressY1zLFqk = accounts[5]
		const uint9afQKX = BigInt("763")
		const uint256kCNAzP = await MisesLegacyPool5ccfJd.earned.call(addresslYVRNpV, {from: "0x0000000000000000000000000000000000000001"});
		const addresstSKPccK = await MisesLegacyPool5ccfJd.updateReward.call(addressw9H9xGv, {from: accounts[2]});
		await MisesLegacyPool5ccfJd.getReward.call({from: accounts[3]});
		const uint25680ob2l = await MisesLegacyPool5ccfJd.withdraw.call(uintOEMjVU3, {from: accounts[0]});
		const uint256WETBCq = await MisesLegacyPool5ccfJd.earned.call(addressY1zLFqk, {from: accounts[1]});
		const uint256DAnnkC4 = await MisesLegacyPool5ccfJd.withdraw.call(uint9afQKX, {from: accounts[3]});

		assert.equal(uint256kCNAzP, BigInt("0"))
		await expect(MisesLegacyPool5ccfJd.updateReward.call(addressw9H9xGv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressefPEaNU = accounts[2]
		const address7eKzJV = accounts[4]
		const uintqBUHqah = BigInt("466")
		const uintFR1BXTo = BigInt("1174")
		const MisesLegacyPoolRWl3g6H = await MisesLegacyPool.new(addressefPEaNU, address7eKzJV, uintqBUHqah, uintFR1BXTo, {from: accounts[2]});
		const addressJrcIqec = accounts[2]
		await MisesLegacyPoolRWl3g6H.getReward.call({from: accounts[4]});
		await MisesLegacyPoolRWl3g6H.getReward.call({from: accounts[2]});
		const addressdd0tkF9 = await MisesLegacyPoolRWl3g6H.updateReward.call(addressJrcIqec, {from: accounts[4]});
		await MisesLegacyPoolRWl3g6H.exit.call({from: accounts[1]});

		await expect(MisesLegacyPoolRWl3g6H.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressREv9PlB = accounts[3]
		const addressPAwObE0 = accounts[4]
		const uintsOqMKSd = BigInt("151")
		const uintuq4peej = BigInt("88")
		const MisesLegacyPools1NggX8 = await MisesLegacyPool.new(addressREv9PlB, addressPAwObE0, uintsOqMKSd, uintuq4peej, {from: accounts[5]});
		const uinteHiMukB = BigInt("423")
		const uint256CfprExE = await MisesLegacyPools1NggX8.withdraw.call(uinteHiMukB, {from: accounts[4]});
		const uint256Je6r41V = await MisesLegacyPools1NggX8.rewardPerToken.call({from: accounts[2]});
		await MisesLegacyPools1NggX8.getReward.call({from: accounts[5]});
		await MisesLegacyPools1NggX8.exit.call({from: accounts[3]});
		const uint256zXvI810 = await MisesLegacyPools1NggX8.rewardPerToken.call({from: accounts[2]});
		const uint256pFa7A0t = await MisesLegacyPools1NggX8.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(MisesLegacyPools1NggX8.withdraw.call(uinteHiMukB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressxDlvQOT = accounts[2]
		const addressoGotTNz = accounts[4]
		const uintdDB4xSS = BigInt("1621")
		const uintqB53vYI = BigInt("856")
		const MisesLegacyPoolRKOXNn2 = await MisesLegacyPool.new(addressxDlvQOT, addressoGotTNz, uintdDB4xSS, uintqB53vYI, {from: accounts[4]});
		const uintmCdHg5A = BigInt("824")
		const uint256GGJwhlN = await MisesLegacyPoolRKOXNn2.rewardPerToken.call({from: accounts[0]});
		await MisesLegacyPoolRKOXNn2.exit.call({from: accounts[0]});
		const uint256NENhVX = await MisesLegacyPoolRKOXNn2.withdraw.call(uintmCdHg5A, {from: accounts[1]});
		const uint256vpTGjyt = await MisesLegacyPoolRKOXNn2.lastTimeRewardApplicable.call({from: accounts[4]});
		await MisesLegacyPoolRKOXNn2.exit.call({from: accounts[3]});

		assert.equal(uint256GGJwhlN, BigInt("0"))
		await expect(MisesLegacyPoolRKOXNn2.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressjcxMuvS = accounts[4]
		const addressFNyoLl = accounts[3]
		const uintoP7fjIn = BigInt("499")
		const uintSLEktqL = BigInt("796")
		const MisesLegacyPoolLuNu4yR = await MisesLegacyPool.new(addressjcxMuvS, addressFNyoLl, uintoP7fjIn, uintSLEktqL, {from: "0x0000000000000000000000000000000000000001"});
		const uintYNAMSW7 = BigInt("1141")
		const addressDh23x8Y = accounts[2]
		const address1qzKnk = accounts[1]
		const uint256XN83TV = await MisesLegacyPoolLuNu4yR.stake.call(uintYNAMSW7, {from: accounts[2]});
		const uint256TcEsdpf = await MisesLegacyPoolLuNu4yR.rewardPerToken.call({from: accounts[2]});
		await MisesLegacyPoolLuNu4yR.getReward.call({from: accounts[5]});
		const addressRxYbcSa = await MisesLegacyPoolLuNu4yR.updateReward.call(addressDh23x8Y, {from: accounts[4]});
		const addressHWCd6kX = await MisesLegacyPoolLuNu4yR.updateReward.call(address1qzKnk, {from: accounts[3]});
		const uint256q6srVCU = await MisesLegacyPoolLuNu4yR.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressLAhIDLe = accounts[0]
		const addressX2eI2y = accounts[2]
		const uintGcFJu9n = BigInt("365")
		const uintOgooB3 = BigInt("1279")
		const MisesLegacyPoolFH8NgLQ = await MisesLegacyPool.new(addressLAhIDLe, addressX2eI2y, uintGcFJu9n, uintOgooB3, {from: accounts[2]});
		const addresssYEdDCa = accounts[2]
		const uintl3A8TuO = BigInt("442")
		const uint2564z6xpg = await MisesLegacyPoolFH8NgLQ.earned.call(addresssYEdDCa, {from: accounts[2]});
		const uint256AReTrOf = await MisesLegacyPoolFH8NgLQ.stake.call(uintl3A8TuO, {from: accounts[0]});

		assert.equal(uint2564z6xpg, BigInt("0"))
		await expect(MisesLegacyPoolFH8NgLQ.stake.call(uintl3A8TuO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresscRO0HcO = accounts[0]
		const addressugXs2VO = accounts[2]
		const uintjrqTuxP = BigInt("365")
		const uintP3WfkC4 = BigInt("1279")
		const MisesLegacyPoolFH8NgLQ = await MisesLegacyPool.new(addresscRO0HcO, addressugXs2VO, uintjrqTuxP, uintP3WfkC4, {from: accounts[2]});
		const addressbzrZgVV = accounts[4]
		const uintIiESt4G = BigInt("44")
		const uint2564z6xpg = await MisesLegacyPoolFH8NgLQ.earned.call(addressbzrZgVV, {from: accounts[2]});
		const uint256lFuGTOy = await MisesLegacyPoolFH8NgLQ.notifyRewardAmount.call(uintIiESt4G, {from: accounts[1]});

		assert.equal(uint2564z6xpg, BigInt("0"))
		await expect(MisesLegacyPoolFH8NgLQ.notifyRewardAmount.call(uintIiESt4G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})