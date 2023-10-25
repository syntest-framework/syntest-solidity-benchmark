const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsZfXs0Q4 = await JGNRewards.new({from: accounts[3]});
		const addressvptdxdj = accounts[5]
//		await JGNRewardsZfXs0Q4.checkStart.call({from: accounts[4]});
//		await JGNRewardsZfXs0Q4.getReward.call({from: accounts[3]});
//		const addresse61ZY3Z = await JGNRewardsZfXs0Q4.updateReward.call(addressvptdxdj, {from: accounts[4]});

		await expect(JGNRewardsZfXs0Q4.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsouCgs7E = await JGNRewards.new({from: accounts[0]});
		const uintUWqLb3D = BigInt("1879")
		const addressZ5TmMhx = accounts[3]
		const uintP0a1FZa = BigInt("1881")
		const uintCxUrEHZ = BigInt("39")
//		await JGNRewardsouCgs7E.getReward.call({from: accounts[5]});
//		const uint256JPqJz3z = await JGNRewardsouCgs7E.withdraw.call(uintUWqLb3D, {from: "0x0000000000000000000000000000000000000001"});
//		const addresskkhuz1D = await JGNRewardsouCgs7E.updateReward.call(addressZ5TmMhx, {from: accounts[0]});
//		const uint256IXpwJDz = await JGNRewardsouCgs7E.withdraw.call(uintP0a1FZa, {from: accounts[1]});
//		const uint256aGcsUUf = await JGNRewardsouCgs7E.withdraw.call(uintCxUrEHZ, {from: accounts[1]});

		await expect(JGNRewardsouCgs7E.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsr0DPMZt = await JGNRewards.new({from: accounts[4]});
		const uintZWWo0EY = BigInt("753")
//		await JGNRewardsr0DPMZt.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256sLUEyjq = await JGNRewardsr0DPMZt.stake.call(uintZWWo0EY, {from: accounts[1]});
//		const uint256njYD6kG = await JGNRewardsr0DPMZt.rewardPerToken.call({from: accounts[2]});
//		const uint256r7mRaEZ = await JGNRewardsr0DPMZt.rewardPerToken.call({from: accounts[3]});
//		const uint256xyRNQmX = await JGNRewardsr0DPMZt.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(JGNRewardsr0DPMZt.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewards1vPnOn = await JGNRewards.new({from: accounts[2]});
		const addressiuSAt7N = "0x0000000000000000000000000000000000000001"
		const uintP4G2ioS = BigInt("549")
		const addressqKeU33E = accounts[5]
		const uintdBRLLmR = BigInt("437")
		const uint256LJm5uXP = await JGNRewards1vPnOn.balanceOf.call(addressiuSAt7N, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zsGv2vO = await JGNRewards1vPnOn.stake.call(uintP4G2ioS, {from: accounts[3]});
//		const uint256WwcUDrl = await JGNRewards1vPnOn.balanceOf.call(addressqKeU33E, {from: accounts[2]});
//		const uint256Ma0hHiX = await JGNRewards1vPnOn.stake.call(uintdBRLLmR, {from: accounts[4]});
//		await JGNRewards1vPnOn.getReward.call({from: accounts[0]});
//		const uint256HcvjIkM = await JGNRewards1vPnOn.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256LJm5uXP, BigInt("0"))
		await expect(JGNRewards1vPnOn.stake.call(uintP4G2ioS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsOyspYxt = await JGNRewards.new({from: accounts[2]});
		const uintVbdWPP4 = BigInt("157")
		const uintKhSOlHB = BigInt("1967")
//		const uint256V3Aw70j = await JGNRewardsOyspYxt.notifyRewardAmount.call(uintVbdWPP4, {from: accounts[2]});
//		const uint256TgUVsP = await JGNRewardsOyspYxt.withdraw.call(uintKhSOlHB, {from: accounts[3]});
//		await JGNRewardsOyspYxt.getReward.call({from: accounts[3]});

		await expect(JGNRewardsOyspYxt.notifyRewardAmount.call(uintVbdWPP4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardszmvyShY = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardszmvyShY.getReward.call({from: accounts[2]});
		const uint256ydGlO48 = await JGNRewardszmvyShY.totalSupply.call({from: accounts[1]});
	});
})