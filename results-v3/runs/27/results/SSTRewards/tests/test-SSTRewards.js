const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsv1O0IUR = await SSTRewards.new({from: accounts[1]});
		const addressc1ZWl5H = accounts[2]
		const uintqZ80IEu = BigInt("985")
		await SSTRewardsv1O0IUR.checkStart.call({from: accounts[0]});
		const uint256lSMwOvz = await SSTRewardsv1O0IUR.earned.call(addressc1ZWl5H, {from: accounts[1]});
		const uint256qJTnb0U = await SSTRewardsv1O0IUR.lastTimeRewardApplicable.call({from: accounts[0]});
		await SSTRewardsv1O0IUR.checkStart.call({from: accounts[2]});
		await SSTRewardsv1O0IUR.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256MyQXYVX = await SSTRewardsv1O0IUR.notifyRewardAmount.call(uintqZ80IEu, {from: accounts[3]});

		await expect(SSTRewardsv1O0IUR.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsxNLElQk = await SSTRewards.new({from: accounts[5]});
		const uinteAzNFSA = BigInt("106")
		const addressCTMcfjs = accounts[1]
		const uint256jhK4hPw = await SSTRewardsxNLElQk.withdraw.call(uinteAzNFSA, {from: accounts[1]});
		const uint256LhyxWUf = await SSTRewardsxNLElQk.earned.call(addressCTMcfjs, {from: accounts[0]});
		const uint256f1qgnaA = await SSTRewardsxNLElQk.rewardPerToken.call({from: accounts[2]});
		const uint25612fY7g = await SSTRewardsxNLElQk.totalSupply.call({from: accounts[5]});

		await expect(SSTRewardsxNLElQk.withdraw.call(uinteAzNFSA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsWQ1tQGz = await SSTRewards.new({from: accounts[4]});
		await SSTRewardsWQ1tQGz.exit.call({from: accounts[1]});
		await SSTRewardsWQ1tQGz.getReward.call({from: accounts[2]});

		await expect(SSTRewardsWQ1tQGz.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsmvuNJ33 = await SSTRewards.new({from: accounts[2]});
		const uinthWvNlbh = BigInt("288")
		const addressjlSMcQj = accounts[3]
		const addressdrLzaqw = accounts[5]
		const addressl8vvZsq = accounts[3]
		const uint256ApwUZjb = await SSTRewardsmvuNJ33.stake.call(uinthWvNlbh, {from: accounts[0]});
		const uint256gUCef3H = await SSTRewardsmvuNJ33.balanceOf.call(addressjlSMcQj, {from: accounts[0]});
		const addresstVoIBlV = await SSTRewardsmvuNJ33.updateReward.call(addressdrLzaqw, {from: accounts[2]});
		const uint256heli6Em = await SSTRewardsmvuNJ33.totalSupply.call({from: accounts[3]});
		const uint256sKWwb0I = await SSTRewardsmvuNJ33.balanceOf.call(addressl8vvZsq, {from: accounts[4]});

		await expect(SSTRewardsmvuNJ33.stake.call(uinthWvNlbh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsWQ1tQGz = await SSTRewards.new({from: accounts[4]});
		await SSTRewardsWQ1tQGz.getReward.call({from: accounts[2]});

		await expect(SSTRewardsWQ1tQGz.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsx1e9KVt = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVqK3e2c = BigInt("1639")
		const addresshwrugYu = accounts[5]
		const uint256SZaS0lE = await SSTRewardsx1e9KVt.rewardPerToken.call({from: accounts[1]});
		const uint256H5Ehgme = await SSTRewardsx1e9KVt.withdraw.call(uintVqK3e2c, {from: "0x0000000000000000000000000000000000000001"});
		const addresstbsyIcH = await SSTRewardsx1e9KVt.updateReward.call(addresshwrugYu, {from: accounts[5]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsWQ1tQGz = await SSTRewards.new({from: accounts[4]});
		const uintXzdkdV3 = BigInt("2012")
		const uint256irn2Kmh = await SSTRewardsWQ1tQGz.rewardPerToken.call({from: accounts[0]});
		const uint256QJmBPSY = await SSTRewardsWQ1tQGz.notifyRewardAmount.call(uintXzdkdV3, {from: accounts[3]});
		await SSTRewardsWQ1tQGz.getReward.call({from: accounts[2]});

		assert.equal(uint256irn2Kmh, BigInt("0"))
		await expect(SSTRewardsWQ1tQGz.notifyRewardAmount.call(uintXzdkdV3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})