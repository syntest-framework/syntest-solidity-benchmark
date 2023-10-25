const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressLLyGIyZ = accounts[1]
		const addresssW8Rwre = accounts[0]
		const uint6Vo0dy = BigInt("563")
		const uinttkrQt89 = BigInt("1150")
		const MisesLegacyPoolq98GlNy = await MisesLegacyPool.new(addressLLyGIyZ, addresssW8Rwre, uint6Vo0dy, uinttkrQt89, {from: accounts[2]});
		const addressGnmb8TK = accounts[2]
		const addressVCXfbX = accounts[4]
		const uint256q8pGyoA = await MisesLegacyPoolq98GlNy.earned.call(addressGnmb8TK, {from: accounts[3]});
		await MisesLegacyPoolq98GlNy.getReward.call({from: accounts[4]});
		const addressjbZ7Zhc = await MisesLegacyPoolq98GlNy.updateReward.call(addressVCXfbX, {from: accounts[4]});
		const uint256fBDX5pS = await MisesLegacyPoolq98GlNy.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256q8pGyoA, BigInt("0"))
		await expect(MisesLegacyPoolq98GlNy.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressTbgrlH = accounts[2]
		const addressr1tX4Lp = accounts[1]
		const uintLboAEM = BigInt("1976")
		const uintosIH8BT = BigInt("860")
		const MisesLegacyPoold61f9hU = await MisesLegacyPool.new(addressTbgrlH, addressr1tX4Lp, uintLboAEM, uintosIH8BT, {from: accounts[4]});
		const uintSsmlvn = BigInt("1535")
		const addressHRqSPIS = "0x0000000000000000000000000000000000000001"
		const uintCzUHwfF = BigInt("72")
		const uint256PI17kjI = await MisesLegacyPoold61f9hU.notifyRewardAmount.call(uintSsmlvn, {from: accounts[5]});
		const addressOatJhlg = await MisesLegacyPoold61f9hU.updateReward.call(addressHRqSPIS, {from: accounts[1]});
		const uint256fPzTo4 = await MisesLegacyPoold61f9hU.notifyRewardAmount.call(uintCzUHwfF, {from: accounts[4]});

		await expect(MisesLegacyPoold61f9hU.notifyRewardAmount.call(uintSsmlvn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressUq1169h = accounts[2]
		const addresssiVLfdD = accounts[5]
		const uintuRIv3p = BigInt("532")
		const uintigircG = BigInt("468")
		const MisesLegacyPoolnOP6Xq6 = await MisesLegacyPool.new(addressUq1169h, addresssiVLfdD, uintuRIv3p, uintigircG, {from: accounts[3]});
		const uintDHwvdEh = BigInt("1290")
		const addressmJ1MtE = accounts[0]
		const uintTfEMXMj = BigInt("546")
		await MisesLegacyPoolnOP6Xq6.exit.call({from: accounts[4]});
		await MisesLegacyPoolnOP6Xq6.checkStart.call({from: accounts[3]});
		const uint256QkZSEvv = await MisesLegacyPoolnOP6Xq6.rewardPerToken.call({from: accounts[1]});
		const uint256I4vGaHx = await MisesLegacyPoolnOP6Xq6.withdraw.call(uintDHwvdEh, {from: accounts[3]});
		const uint256LYrfulH = await MisesLegacyPoolnOP6Xq6.earned.call(addressmJ1MtE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256suiJY6W = await MisesLegacyPoolnOP6Xq6.stake.call(uintTfEMXMj, {from: accounts[4]});

		await expect(MisesLegacyPoolnOP6Xq6.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressy7HIhyv = "0x0000000000000000000000000000000000000001"
		const addressg2Dg8OS = accounts[2]
		const uintoAMQ4Wg = BigInt("571")
		const uintLcSEvjg = BigInt("784")
		const MisesLegacyPool1RuiBF = await MisesLegacyPool.new(addressy7HIhyv, addressg2Dg8OS, uintoAMQ4Wg, uintLcSEvjg, {from: accounts[5]});
		const uintvHV51Dy = BigInt("1282")
		const uintOqpf6Nu = BigInt("340")
		const uintj3KHlCx = BigInt("1187")
		const uint256Sh0lB2i = await MisesLegacyPool1RuiBF.withdraw.call(uintvHV51Dy, {from: accounts[5]});
		const uint256GSINoXR = await MisesLegacyPool1RuiBF.rewardPerToken.call({from: accounts[1]});
		const uint256dAfCFAT = await MisesLegacyPool1RuiBF.withdraw.call(uintOqpf6Nu, {from: accounts[1]});
		const uint256snDFHJe = await MisesLegacyPool1RuiBF.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256mG8MVhi = await MisesLegacyPool1RuiBF.stake.call(uintj3KHlCx, {from: accounts[5]});

		await expect(MisesLegacyPool1RuiBF.withdraw.call(uintvHV51Dy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressUzzgeGI = accounts[1]
		const addressclfiggm = accounts[0]
		const uintqIOUxTn = BigInt("563")
		const uintSm70EZ = BigInt("1150")
		const MisesLegacyPoolq98GlNy = await MisesLegacyPool.new(addressUzzgeGI, addressclfiggm, uintqIOUxTn, uintSm70EZ, {from: accounts[2]});
		const addressKv0tUKE = accounts[2]
		const uintX4hrVNV = BigInt("872")
		const uint256q8pGyoA = await MisesLegacyPoolq98GlNy.earned.call(addressKv0tUKE, {from: accounts[3]});
		await MisesLegacyPoolq98GlNy.getReward.call({from: accounts[4]});
		const uint256RL1XD63 = await MisesLegacyPoolq98GlNy.stake.call(uintX4hrVNV, {from: accounts[1]});
		const uint256fBDX5pS = await MisesLegacyPoolq98GlNy.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256q8pGyoA, BigInt("0"))
		await expect(MisesLegacyPoolq98GlNy.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressSprj909 = accounts[2]
		const addressweHXa5W = accounts[2]
		const uintruL6HX9 = BigInt("1166")
		const uintpv4AR3S = BigInt("1402")
		const MisesLegacyPoolBOzuea = await MisesLegacyPool.new(addressSprj909, addressweHXa5W, uintruL6HX9, uintpv4AR3S, {from: "0x0000000000000000000000000000000000000001"});
		const addressYtzCiec = accounts[3]
		const uintCebEbzi = BigInt("1417")
		const uintz8vI9Bx = BigInt("1090")
		await MisesLegacyPoolBOzuea.exit.call({from: accounts[4]});
		const addressNp2FoqV = await MisesLegacyPoolBOzuea.updateReward.call(addressYtzCiec, {from: accounts[1]});
		const uint256T2CWOWW = await MisesLegacyPoolBOzuea.withdraw.call(uintCebEbzi, {from: accounts[3]});
		const uint256XvCX92W = await MisesLegacyPoolBOzuea.stake.call(uintz8vI9Bx, {from: accounts[4]});
	});
})