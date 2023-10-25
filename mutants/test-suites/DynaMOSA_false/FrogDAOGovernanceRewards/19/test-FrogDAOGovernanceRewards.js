const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQPSrwzt = accounts[1]
		const FrogDAOGovernanceRewardsYaWNm7W = await FrogDAOGovernanceRewards.new(addressQPSrwzt, {from: accounts[1]});
		const addressEuEPwO0 = accounts[3]
		const addressQj86Kuc = accounts[1]
		const uint256QWcrhzW = await FrogDAOGovernanceRewardsYaWNm7W.earned.call(addressEuEPwO0, {from: accounts[3]});
//		const addressn0WoRQs = await FrogDAOGovernanceRewardsYaWNm7W.updateReward.call(addressQj86Kuc, {from: accounts[2]});
//		await FrogDAOGovernanceRewardsYaWNm7W.renounceDevAddr.call({from: accounts[1]});

		assert.equal(uint256QWcrhzW, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsYaWNm7W.updateReward.call(addressQj86Kuc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressKFY534j = accounts[4]
		const FrogDAOGovernanceRewardsnFmEXeX = await FrogDAOGovernanceRewards.new(addressKFY534j, {from: accounts[1]});
		const addressApz7LBH = "0x0000000000000000000000000000000000000001"
		const addressJPFs87E = accounts[5]
		const addressJsq0qwX = accounts[5]
		const addressFHKcsyq = accounts[0]
//		const addressVUtc1P2 = await FrogDAOGovernanceRewardsnFmEXeX.transferDevAddr.call(addressApz7LBH, {from: accounts[2]});
//		const uint256jA3ZBXT = await FrogDAOGovernanceRewardsnFmEXeX.earned.call(addressJPFs87E, {from: accounts[3]});
//		const uint256iwA62Yy = await FrogDAOGovernanceRewardsnFmEXeX.earned.call(addressJsq0qwX, {from: accounts[4]});
//		const address3PYaAo = await FrogDAOGovernanceRewardsnFmEXeX.transferDevAddr.call(addressFHKcsyq, {from: accounts[0]});
//		const uint256EQvB1tI = await FrogDAOGovernanceRewardsnFmEXeX.devFundAvailable.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsnFmEXeX.transferDevAddr.call(addressApz7LBH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresssoleE9U = accounts[5]
		const FrogDAOGovernanceRewardslJTUxNH = await FrogDAOGovernanceRewards.new(addresssoleE9U, {from: accounts[0]});
		const addressCV77vZX = accounts[4]
		const uintvGGbihP = BigInt("1422")
		const uint256SNbHFob = await FrogDAOGovernanceRewardslJTUxNH.rewardPerToken.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardslJTUxNH.renounceDevAddr.call({from: accounts[4]});
//		const addressL94bqNV = await FrogDAOGovernanceRewardslJTUxNH.updateReward.call(addressCV77vZX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256XZQkSf = await FrogDAOGovernanceRewardslJTUxNH.devFundAvailable.call({from: accounts[3]});
//		const uint256snNsQlb = await FrogDAOGovernanceRewardslJTUxNH.stake.call(uintvGGbihP, {from: accounts[2]});

		assert.equal(uint256SNbHFob, BigInt("0"))
		await expect(FrogDAOGovernanceRewardslJTUxNH.renounceDevAddr.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressJZYgYFl = accounts[3]
		const FrogDAOGovernanceRewardsoeK9WJm = await FrogDAOGovernanceRewards.new(addressJZYgYFl, {from: accounts[4]});
		const addressUZ0bxRv = accounts[4]
		const addressiMpMBCG = accounts[3]
		const addressRY87OZ8 = accounts[1]
//		await FrogDAOGovernanceRewardsoeK9WJm.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresstuliuv6 = await FrogDAOGovernanceRewardsoeK9WJm.updateReward.call(addressUZ0bxRv, {from: accounts[0]});
//		const addressJUWHIEW = await FrogDAOGovernanceRewardsoeK9WJm.transferDevAddr.call(addressiMpMBCG, {from: accounts[1]});
//		const uint256U5fNFV = await FrogDAOGovernanceRewardsoeK9WJm.earned.call(addressRY87OZ8, {from: accounts[4]});
//		const uint256sutzXAK = await FrogDAOGovernanceRewardsoeK9WJm.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsoeK9WJm.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressRrXbdi = accounts[1]
		const FrogDAOGovernanceRewardsjTMFdvs = await FrogDAOGovernanceRewards.new(addressRrXbdi, {from: "0x0000000000000000000000000000000000000001"});
		const uintxc4OgUJ = BigInt("967")
		await FrogDAOGovernanceRewardsjTMFdvs.checkStart.call({from: accounts[2]});
		const uint256fBDMIf3 = await FrogDAOGovernanceRewardsjTMFdvs.withdrawDevFund.call(uintxc4OgUJ, {from: accounts[0]});
		await FrogDAOGovernanceRewardsjTMFdvs.exit.call({from: accounts[1]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgp0O7ac = accounts[2]
		const FrogDAOGovernanceRewardsBCf45CM = await FrogDAOGovernanceRewards.new(addressgp0O7ac, {from: accounts[5]});
		const uintbHr0Is = BigInt("1873")
//		const uint25687sZ54 = await FrogDAOGovernanceRewardsBCf45CM.notifyRewardAmount.call(uintbHr0Is, {from: accounts[4]});
//		const uint256oWdvIpU = await FrogDAOGovernanceRewardsBCf45CM.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsBCf45CM.exit.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsBCf45CM.notifyRewardAmount.call(uintbHr0Is, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressK3F3IpX = accounts[1]
		const FrogDAOGovernanceRewardst25De7z = await FrogDAOGovernanceRewards.new(addressK3F3IpX, {from: accounts[1]});
		const uintA6FkSpe = BigInt("562")
		const uintk6NDeY = BigInt("549")
		const uint256urCYT60 = await FrogDAOGovernanceRewardst25De7z.devFundAvailable.call({from: accounts[3]});
//		const uint256Lib8upP = await FrogDAOGovernanceRewardst25De7z.withdraw.call(uintA6FkSpe, {from: accounts[1]});
//		const uint256jfe7Xqn = await FrogDAOGovernanceRewardst25De7z.rewardPerToken.call({from: accounts[4]});
//		const uint256jhT2BQB = await FrogDAOGovernanceRewardst25De7z.withdrawDevFund.call(uintk6NDeY, {from: accounts[2]});

		assert.equal(uint256urCYT60, BigInt("0"))
		await expect(FrogDAOGovernanceRewardst25De7z.withdraw.call(uintA6FkSpe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const address4Ltr2f = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsQO5eSq4 = await FrogDAOGovernanceRewards.new(address4Ltr2f, {from: accounts[4]});
		const uintrW5WNt9 = BigInt("1404")
		const uintiXK4u6I = BigInt("1240")
		const uintxTOae04 = BigInt("103")
		const uint256BhucIiX = await FrogDAOGovernanceRewardsQO5eSq4.rewardPerToken.call({from: accounts[4]});
//		const uint256D5i3B0S = await FrogDAOGovernanceRewardsQO5eSq4.stake.call(uintrW5WNt9, {from: accounts[0]});
//		const uint256GFcIs8 = await FrogDAOGovernanceRewardsQO5eSq4.notifyRewardAmount.call(uintiXK4u6I, {from: accounts[2]});
//		const uint256rXFaqJF = await FrogDAOGovernanceRewardsQO5eSq4.stake.call(uintxTOae04, {from: accounts[3]});

		assert.equal(uint256BhucIiX, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsQO5eSq4.stake.call(uintrW5WNt9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressjjgQyrN = accounts[1]
		const FrogDAOGovernanceRewardst25De7z = await FrogDAOGovernanceRewards.new(addressjjgQyrN, {from: accounts[1]});
		const addressu2ih650 = accounts[3]
		const uintA6dmv0j = BigInt("1770")
		const uint0RvDmV = BigInt("562")
		const uintsPdkurN = BigInt("580")
		const uint256Xt7TdcE = await FrogDAOGovernanceRewardst25De7z.earned.call(addressu2ih650, {from: accounts[0]});
		const uint256urCYT60 = await FrogDAOGovernanceRewardst25De7z.devFundAvailable.call({from: accounts[3]});
//		const uint256EkYxoDR = await FrogDAOGovernanceRewardst25De7z.withdrawDevFund.call(uintA6dmv0j, {from: accounts[2]});
//		const uint256Lib8upP = await FrogDAOGovernanceRewardst25De7z.withdraw.call(uint0RvDmV, {from: accounts[1]});
//		await FrogDAOGovernanceRewardst25De7z.exit.call({from: accounts[0]});
//		const uint256jhT2BQB = await FrogDAOGovernanceRewardst25De7z.withdrawDevFund.call(uintsPdkurN, {from: accounts[2]});

		assert.equal(uint256Xt7TdcE, BigInt("0"))
		assert.equal(uint256urCYT60, BigInt("0"))
		await expect(FrogDAOGovernanceRewardst25De7z.withdrawDevFund.call(uintA6dmv0j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressV2NzWWU = accounts[1]
		const FrogDAOGovernanceRewardsKzWv4VQ = await FrogDAOGovernanceRewards.new(addressV2NzWWU, {from: accounts[5]});
		const uinthhtGmra = BigInt("591")
		const addresscW8q3Cj = accounts[1]
		const addressHWlfg2H = accounts[0]
//		const uint256dIgQFh9 = await FrogDAOGovernanceRewardsKzWv4VQ.notifyRewardAmount.call(uinthhtGmra, {from: accounts[5]});
//		const uint256KhvkbAS = await FrogDAOGovernanceRewardsKzWv4VQ.earned.call(addresscW8q3Cj, {from: accounts[2]});
//		const uint256WuKvCpR = await FrogDAOGovernanceRewardsKzWv4VQ.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256CV4E6m = await FrogDAOGovernanceRewardsKzWv4VQ.earned.call(addressHWlfg2H, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsKzWv4VQ.notifyRewardAmount.call(uinthhtGmra, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresswIMDITY = accounts[1]
		const FrogDAOGovernanceRewardsYaWNm7W = await FrogDAOGovernanceRewards.new(addresswIMDITY, {from: accounts[1]});
		const uintrVdKdgt = BigInt("1766")
		const addressflEvryu = accounts[1]
		const addressBYtFjP = accounts[3]
//		const uint256WDdr1Cf = await FrogDAOGovernanceRewardsYaWNm7W.withdrawDevFund.call(uintrVdKdgt, {from: accounts[1]});
//		const uint256T474NE1 = await FrogDAOGovernanceRewardsYaWNm7W.rewardPerToken.call({from: accounts[2]});
//		const addressQhw0bHy = await FrogDAOGovernanceRewardsYaWNm7W.transferDevAddr.call(addressflEvryu, {from: accounts[5]});
//		const uint256QWcrhzW = await FrogDAOGovernanceRewardsYaWNm7W.earned.call(addressBYtFjP, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsYaWNm7W.withdrawDevFund.call(uintrVdKdgt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})