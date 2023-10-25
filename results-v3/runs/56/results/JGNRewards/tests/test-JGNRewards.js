const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsxc0YjD = await JGNRewards.new({from: accounts[3]});
		const uintyoz8xMd = BigInt("338")
		const uintI5siHK = BigInt("82")
		const uinttI9mYBd = BigInt("1698")
		const uint256ieLaiFI = await JGNRewardsxc0YjD.stake.call(uintyoz8xMd, {from: accounts[1]});
		const uint256pqRCBA = await JGNRewardsxc0YjD.withdraw.call(uintI5siHK, {from: accounts[1]});
		const uint256JwQPkiW = await JGNRewardsxc0YjD.stake.call(uinttI9mYBd, {from: accounts[2]});

		await expect(JGNRewardsxc0YjD.stake.call(uintyoz8xMd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardscq3pwTF = await JGNRewards.new({from: accounts[3]});
		const uintL73c4BB = BigInt("1048")
		const uintecudydK = BigInt("1889")
		const uint256kojDrwT = await JGNRewardscq3pwTF.withdraw.call(uintL73c4BB, {from: accounts[2]});
		await JGNRewardscq3pwTF.exit.call({from: accounts[3]});
		const uint256cdUwf4P = await JGNRewardscq3pwTF.rewardPerToken.call({from: accounts[1]});
		const uint256uiXEz2g = await JGNRewardscq3pwTF.notifyRewardAmount.call(uintecudydK, {from: accounts[2]});
		await JGNRewardscq3pwTF.exit.call({from: accounts[0]});
		await JGNRewardscq3pwTF.exit.call({from: accounts[1]});

		await expect(JGNRewardscq3pwTF.withdraw.call(uintL73c4BB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsenmUTlk = await JGNRewards.new({from: accounts[3]});
		const uintIDf5ur7 = BigInt("1603")
		const addressrOgnOx = accounts[4]
		await JGNRewardsenmUTlk.getReward.call({from: accounts[2]});
		const uint256TIQ5WER = await JGNRewardsenmUTlk.withdraw.call(uintIDf5ur7, {from: accounts[0]});
		const uint256A1Twxc9 = await JGNRewardsenmUTlk.balanceOf.call(addressrOgnOx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsenmUTlk.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardspP6R2K9 = await JGNRewards.new({from: accounts[1]});
		const addressarw77Jf = accounts[5]
		const addressnBRIFux = accounts[4]
		const uintkiXHCB4 = BigInt("1730")
		const addressbXGfe97 = await JGNRewardspP6R2K9.updateReward.call(addressarw77Jf, {from: accounts[2]});
		const uint256VrZLdXl = await JGNRewardspP6R2K9.earned.call(addressnBRIFux, {from: accounts[5]});
		await JGNRewardspP6R2K9.checkStart.call({from: accounts[1]});
		const uint256ONkMpvb = await JGNRewardspP6R2K9.withdraw.call(uintkiXHCB4, {from: accounts[2]});
		const uint256INcBHb6 = await JGNRewardspP6R2K9.totalSupply.call({from: accounts[4]});

		await expect(JGNRewardspP6R2K9.updateReward.call(addressarw77Jf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsEhFVqYE = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZVnzXbi = BigInt("828")
		const uintwHkex1b = BigInt("1656")
		const addresst3co4Si = accounts[1]
		const addressfRmXqK = accounts[1]
		const uint256Y4TUTq8 = await JGNRewardsEhFVqYE.withdraw.call(uintZVnzXbi, {from: accounts[1]});
		const uint256m83ylZx = await JGNRewardsEhFVqYE.notifyRewardAmount.call(uintwHkex1b, {from: accounts[5]});
		const uint256Ohu0Fja = await JGNRewardsEhFVqYE.earned.call(addresst3co4Si, {from: accounts[4]});
		const uint256VO4cQX2 = await JGNRewardsEhFVqYE.balanceOf.call(addressfRmXqK, {from: accounts[2]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsuYBsvu7 = await JGNRewards.new({from: accounts[2]});
		const uintXuVv4BH = BigInt("65")
		const uintO2GgMVm = BigInt("30")
		const addressl3ktqw9 = "0x0000000000000000000000000000000000000001"
		const uintUe16mLA = BigInt("1911")
		const uint256XIRX1B1 = await JGNRewardsuYBsvu7.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256VnwREff = await JGNRewardsuYBsvu7.notifyRewardAmount.call(uintXuVv4BH, {from: accounts[4]});
		const uint256jTQZoJO = await JGNRewardsuYBsvu7.withdraw.call(uintO2GgMVm, {from: accounts[4]});
		const uint256YoS15ij = await JGNRewardsuYBsvu7.earned.call(addressl3ktqw9, {from: accounts[4]});
		const uint256RMnA0a = await JGNRewardsuYBsvu7.stake.call(uintUe16mLA, {from: accounts[0]});

		assert.equal(uint256XIRX1B1, BigInt("0"))
		await expect(JGNRewardsuYBsvu7.notifyRewardAmount.call(uintXuVv4BH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsenmUTlk = await JGNRewards.new({from: accounts[3]});
		const uintPWHXyiT = BigInt("1603")
		const addressh2MwfhO = accounts[5]
		await JGNRewardsenmUTlk.getReward.call({from: accounts[2]});
		await JGNRewardsenmUTlk.exit.call({from: accounts[3]});
		const uint256TIQ5WER = await JGNRewardsenmUTlk.withdraw.call(uintPWHXyiT, {from: accounts[0]});
		const uint256A1Twxc9 = await JGNRewardsenmUTlk.balanceOf.call(addressh2MwfhO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsenmUTlk.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})