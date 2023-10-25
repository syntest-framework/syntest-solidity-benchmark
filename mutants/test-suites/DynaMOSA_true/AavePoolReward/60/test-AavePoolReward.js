const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardjVL4741 = await AavePoolReward.new({from: accounts[0]});
		const uinthqfrbcX = BigInt("706")
//		const uint256CMJmjoP = await AavePoolRewardjVL4741.notifyRewardAmount.call(uinthqfrbcX, {from: accounts[4]});
//		const uint256LjuPQu8 = await AavePoolRewardjVL4741.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256xqN5AWc = await AavePoolRewardjVL4741.rewardPerToken.call({from: accounts[3]});
//		const uint256s7UyCGi = await AavePoolRewardjVL4741.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(AavePoolRewardjVL4741.notifyRewardAmount.call(uinthqfrbcX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardeaAx6he = await AavePoolReward.new({from: accounts[1]});
		const addressQLQFO9z = accounts[3]
		const uintdRlAig = BigInt("1807")
		const uintOQgfJQl = BigInt("352")
//		await AavePoolRewardeaAx6he.exit.call({from: accounts[4]});
//		const uint256kMlICYs = await AavePoolRewardeaAx6he.earned.call(addressQLQFO9z, {from: accounts[1]});
//		await AavePoolRewardeaAx6he.getReward.call({from: accounts[0]});
//		await AavePoolRewardeaAx6he.getReward.call({from: accounts[1]});
//		const uint256QGuPMuz = await AavePoolRewardeaAx6he.withdraw.call(uintdRlAig, {from: accounts[1]});
//		const uint256GUKw0C0 = await AavePoolRewardeaAx6he.notifyRewardAmount.call(uintOQgfJQl, {from: accounts[3]});

		await expect(AavePoolRewardeaAx6he.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardGXp8388 = await AavePoolReward.new({from: accounts[2]});
		const uintk3GgL0T = BigInt("1769")
		const uintHpjj7Lu = BigInt("148")
		const uintFY61bp0 = BigInt("1216")
//		await AavePoolRewardGXp8388.getReward.call({from: accounts[1]});
//		const uint256XIz06MH = await AavePoolRewardGXp8388.notifyRewardAmount.call(uintk3GgL0T, {from: accounts[5]});
//		const uint256dwSA5UZ = await AavePoolRewardGXp8388.stake.call(uintHpjj7Lu, {from: accounts[4]});
//		const uint256ItGFeof = await AavePoolRewardGXp8388.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256Y3gduU5 = await AavePoolRewardGXp8388.stake.call(uintFY61bp0, {from: accounts[2]});

		await expect(AavePoolRewardGXp8388.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardnaJ8wst = await AavePoolReward.new({from: accounts[0]});
		const uintmxmEqzl = BigInt("1606")
		const uintP2hJsD8 = BigInt("1625")
//		const uint2560ZXKNT = await AavePoolRewardnaJ8wst.stake.call(uintmxmEqzl, {from: accounts[1]});
//		const uint256nUbRHk = await AavePoolRewardnaJ8wst.withdraw.call(uintP2hJsD8, {from: accounts[3]});

		await expect(AavePoolRewardnaJ8wst.stake.call(uintmxmEqzl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardHzvneHG = await AavePoolReward.new({from: accounts[2]});
		const uintzzaUe4H = BigInt("1039")
		const uintOsghQny = BigInt("159")
		const uintPX7hMJS = BigInt("1391")
//		const uint256MtQZVuH = await AavePoolRewardHzvneHG.withdraw.call(uintzzaUe4H, {from: accounts[4]});
//		const uint256D8EGf5K = await AavePoolRewardHzvneHG.rewardPerToken.call({from: accounts[5]});
//		const uint256esK8P2a = await AavePoolRewardHzvneHG.withdraw.call(uintOsghQny, {from: accounts[4]});
//		const uint256tTOs7Y = await AavePoolRewardHzvneHG.stake.call(uintPX7hMJS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardHzvneHG.withdraw.call(uintzzaUe4H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardE94RAly = await AavePoolReward.new({from: accounts[4]});
		const addressEnsJ3zi = accounts[4]
		const uintQQQSbHi = BigInt("1364")
//		const addressGGn0af3 = await AavePoolRewardE94RAly.dev.call(addressEnsJ3zi, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ybMrets = await AavePoolRewardE94RAly.rewardPerToken.call({from: accounts[1]});
//		const uint256AdbrrLn = await AavePoolRewardE94RAly.notifyRewardAmount.call(uintQQQSbHi, {from: accounts[3]});
//		const uint256KUs71ua = await AavePoolRewardE94RAly.rewardPerToken.call({from: accounts[1]});

		await expect(AavePoolRewardE94RAly.dev.call(addressEnsJ3zi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardiPcdWZW = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		await AavePoolRewardiPcdWZW.getReward.call({from: accounts[3]});
		await AavePoolRewardiPcdWZW.getReward.call({from: accounts[4]});
		const uint256cz1QOlM = await AavePoolRewardiPcdWZW.rewardPerToken.call({from: accounts[0]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardjnR50yq = await AavePoolReward.new({from: accounts[2]});
		const addressMsXIHfw = accounts[1]
		const uintX8YXnET = BigInt("1590")
//		const addressmYsvXTP = await AavePoolRewardjnR50yq.updateReward.call(addressMsXIHfw, {from: accounts[1]});
//		const uint256AZKvToB = await AavePoolRewardjnR50yq.notifyRewardAmount.call(uintX8YXnET, {from: accounts[1]});
//		const uint256HXob8XL = await AavePoolRewardjnR50yq.rewardPerToken.call({from: accounts[3]});

		await expect(AavePoolRewardjnR50yq.updateReward.call(addressMsXIHfw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardnaJ8wst = await AavePoolReward.new({from: accounts[0]});
		const uintPeCVl8 = BigInt("1260")
		const addressO6TwWZz = accounts[2]
		const uintwztQwQq = BigInt("1476")
		const uint256nwcp5ZK = await AavePoolRewardnaJ8wst.notifyRewardAmount.call(uintPeCVl8, {from: accounts[0]});
//		await AavePoolRewardnaJ8wst.getReward.call({from: accounts[2]});
//		const addresshCKMxf4 = await AavePoolRewardnaJ8wst.updateReward.call(addressO6TwWZz, {from: accounts[4]});
//		const uint2560ZXKNT = await AavePoolRewardnaJ8wst.stake.call(uintwztQwQq, {from: accounts[1]});

		await expect(AavePoolRewardnaJ8wst.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardnaJ8wst = await AavePoolReward.new({from: accounts[0]});
		const addressgrZZvlS = accounts[1]
		const uintllN9ag9 = BigInt("1590")
		const addressAdllyhb = await AavePoolRewardnaJ8wst.dev.call(addressgrZZvlS, {from: accounts[0]});
//		const uint2560ZXKNT = await AavePoolRewardnaJ8wst.stake.call(uintllN9ag9, {from: accounts[1]});
//		const uint256LARoBQZ = await AavePoolRewardnaJ8wst.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(AavePoolRewardnaJ8wst.stake.call(uintllN9ag9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})