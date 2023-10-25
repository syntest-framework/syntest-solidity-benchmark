const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3VCzc86y = await YRX3.new({from: accounts[4]});
		const addressggVrvZI = accounts[1]
		const uintxKUaPbS = BigInt("1304")
		const addressV7twje7 = accounts[0]
		const uintGIEVPk = BigInt("34")
//		const addressVS0uYtW = await YRX3VCzc86y.updateReward.call(addressggVrvZI, {from: accounts[2]});
//		const uint256nVav66J = await YRX3VCzc86y.withdraw.call(uintxKUaPbS, {from: accounts[1]});
//		const uint256fHhQg4B = await YRX3VCzc86y.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressIsoMB0x = await YRX3VCzc86y.transferOwnership.call(addressV7twje7, {from: accounts[5]});
//		const uint256t9iArwp = await YRX3VCzc86y.stake.call(uintGIEVPk, {from: accounts[2]});

		await expect(YRX3VCzc86y.updateReward.call(addressggVrvZI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3iwHDpk4 = await YRX3.new({from: accounts[2]});
		const addresspvZirj0 = accounts[2]
		const uint256qqCqVrs = await YRX3iwHDpk4.lastTimeRewardApplicable.call({from: accounts[0]});
//		await YRX3iwHDpk4.getReward.call({from: accounts[3]});
//		const uint256ma9FVNx = await YRX3iwHDpk4.balanceOf.call(addresspvZirj0, {from: accounts[4]});

		assert.equal(uint256qqCqVrs, BigInt("0"))
		await expect(YRX3iwHDpk4.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Tjad0X = await YRX3.new({from: accounts[2]});
		const uintWfCC7QB = BigInt("582")
		const uintUKl7Kfv = BigInt("748")
		const uintk9go1Uk = BigInt("1903")
//		await YRX3Tjad0X.exit.call({from: accounts[1]});
//		const uint256TQYgFow = await YRX3Tjad0X.withdraw.call(uintWfCC7QB, {from: accounts[1]});
//		const uint256Ea5efJA = await YRX3Tjad0X.withdraw.call(uintUKl7Kfv, {from: accounts[4]});
//		const uint256INOrNgv = await YRX3Tjad0X.withdraw.call(uintk9go1Uk, {from: accounts[2]});

		await expect(YRX3Tjad0X.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3oVQx9mu = await YRX3.new({from: accounts[3]});
		const uint256cqyra4G = await YRX3oVQx9mu.totalSupply.call({from: accounts[4]});
//		await YRX3oVQx9mu.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256cqyra4G, BigInt("0"))
		await expect(YRX3oVQx9mu.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3pFwYqK = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintom9FhXw = BigInt("1000")
		const uintpwDuYDz = BigInt("1500")
		const uint256hMfELm2 = await YRX3pFwYqK.withdraw.call(uintom9FhXw, {from: "0x0000000000000000000000000000000000000001"});
		await YRX3pFwYqK.onlyRewardDistribution.call({from: accounts[1]});
		const uint256uy9iiK5 = await YRX3pFwYqK.stake.call(uintpwDuYDz, {from: accounts[3]});
		const uint256l5IkPdh = await YRX3pFwYqK.rewardPerToken.call({from: accounts[5]});
		await YRX3pFwYqK.checkNextEpoch.call({from: accounts[5]});
	});

	it('test for YRX3', async () => {
		const YRX3q1MJv4B = await YRX3.new({from: accounts[3]});
		const uintoCbYCpk = BigInt("1618")
		const uintadZwGdm = BigInt("408")
//		const uint256HRJdSrT = await YRX3q1MJv4B.stake.call(uintoCbYCpk, {from: accounts[0]});
//		const uint256Y1Jf2ET = await YRX3q1MJv4B.withdraw.call(uintadZwGdm, {from: accounts[3]});

		await expect(YRX3q1MJv4B.stake.call(uintoCbYCpk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3q1MJv4B = await YRX3.new({from: accounts[3]});
		const uintOxACbQ = BigInt("409")
//		const uint256Y1Jf2ET = await YRX3q1MJv4B.withdraw.call(uintOxACbQ, {from: accounts[3]});

		await expect(YRX3q1MJv4B.withdraw.call(uintOxACbQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3BkYznBt = await YRX3.new({from: accounts[1]});
		const addresslM5Eni = accounts[2]
//		await YRX3BkYznBt.notifyRewardAmount.call({from: accounts[3]});
//		await YRX3BkYznBt.checkNextEpoch.call({from: accounts[3]});
//		const uint256d4Ey9sm = await YRX3BkYznBt.earned.call(addresslM5Eni, {from: accounts[3]});

		await expect(YRX3BkYznBt.notifyRewardAmount.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3q1MJv4B = await YRX3.new({from: accounts[3]});
		const uintMYJGM1O = BigInt("428")
		const addressDsxxxpQ = await YRX3q1MJv4B.owner.call({from: accounts[0]});
//		const uint256Y1Jf2ET = await YRX3q1MJv4B.withdraw.call(uintMYJGM1O, {from: accounts[3]});

		assert.equal(addressDsxxxpQ, 0x28706e2997515058D3b7F1172aBf03f466936462)
		await expect(YRX3q1MJv4B.withdraw.call(uintMYJGM1O, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3q1MJv4B = await YRX3.new({from: accounts[3]});
		const addressqZihfxH = accounts[4]
		const uintQnY8lH3 = BigInt("1618")
		const addresspLd1gDK = await YRX3q1MJv4B.transferOwnership.call(addressqZihfxH, {from: accounts[3]});
//		const uint256HRJdSrT = await YRX3q1MJv4B.stake.call(uintQnY8lH3, {from: accounts[0]});

		await expect(YRX3q1MJv4B.stake.call(uintQnY8lH3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3lEyyOzn = await YRX3.new({from: accounts[4]});
		const addressu7auc8Q = accounts[4]
		const addressym8v8RL = accounts[4]
		const addressRMvh3QZ = await YRX3lEyyOzn.setRewardDistribution.call(addressu7auc8Q, {from: accounts[4]});
//		await YRX3lEyyOzn.notifyRewardAmount.call({from: accounts[1]});
//		await YRX3lEyyOzn.exit.call({from: accounts[0]});
//		const addressQO4EUja = await YRX3lEyyOzn.emergencyDrain.call(addressym8v8RL, {from: accounts[3]});
//		await YRX3lEyyOzn.exit.call({from: accounts[1]});
//		await YRX3lEyyOzn.onlyOwner.call({from: accounts[3]});

		await expect(YRX3lEyyOzn.notifyRewardAmount.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3NlwEaw = await YRX3.new({from: accounts[4]});
//		await YRX3NlwEaw.renounceOwnership.call({from: accounts[4]});
//		await YRX3NlwEaw.getReward.call({from: accounts[1]});

		await expect(YRX3NlwEaw.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})