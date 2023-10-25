const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardQYrxiab = await AavePoolReward.new({from: accounts[3]});
		const addressdypUiv8 = accounts[2]
		const uintTklifSM = BigInt("1965")
		const uintLyTuosj = BigInt("1386")
		const addressmiR7zZg = accounts[2]
		const uint256lOEoQpL = await AavePoolRewardQYrxiab.earned.call(addressdypUiv8, {from: accounts[1]});
		await AavePoolRewardQYrxiab.getReward.call({from: accounts[3]});
		const uint256XQgGOOZ = await AavePoolRewardQYrxiab.notifyRewardAmount.call(uintTklifSM, {from: accounts[2]});
		const uint256k5InkrE = await AavePoolRewardQYrxiab.notifyRewardAmount.call(uintLyTuosj, {from: accounts[2]});
		const addressW09DK0V = await AavePoolRewardQYrxiab.dev.call(addressmiR7zZg, {from: accounts[1]});

		assert.equal(uint256lOEoQpL, BigInt("0"))
		await expect(AavePoolRewardQYrxiab.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardAGLH0uS = await AavePoolReward.new({from: accounts[5]});
		const addressRBZPbdd = accounts[3]
		const addressyiWXqBQ = accounts[4]
		const addressZJtfvPS = accounts[0]
		const uintLqacRKc = BigInt("1899")
		const addresssAwg2Ye = accounts[2]
		const addresstSwUikW = await AavePoolRewardAGLH0uS.updateReward.call(addressRBZPbdd, {from: "0x0000000000000000000000000000000000000001"});
		const addresslQGiAQP = await AavePoolRewardAGLH0uS.updateReward.call(addressyiWXqBQ, {from: accounts[4]});
		const uint256zheApy = await AavePoolRewardAGLH0uS.earned.call(addressZJtfvPS, {from: accounts[5]});
		const uint256wSDOy3W = await AavePoolRewardAGLH0uS.withdraw.call(uintLqacRKc, {from: accounts[1]});
		const addressxjf5AKz = await AavePoolRewardAGLH0uS.updateReward.call(addresssAwg2Ye, {from: accounts[1]});

		await expect(AavePoolRewardAGLH0uS.updateReward.call(addressRBZPbdd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardizY6bHX = await AavePoolReward.new({from: accounts[1]});
		await AavePoolRewardizY6bHX.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256aZ2owYN = await AavePoolRewardizY6bHX.rewardPerToken.call({from: accounts[2]});
		const uint256YAi38nQ = await AavePoolRewardizY6bHX.rewardPerToken.call({from: accounts[3]});

		await expect(AavePoolRewardizY6bHX.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardg1BSIZ0 = await AavePoolReward.new({from: accounts[2]});
		const addressm4ynpqg = accounts[5]
		const uintNLY2xBq = BigInt("2019")
		await AavePoolRewardg1BSIZ0.getReward.call({from: accounts[1]});
		const addresseMZpgqH = await AavePoolRewardg1BSIZ0.dev.call(addressm4ynpqg, {from: accounts[1]});
		const uint256VFN3kzl = await AavePoolRewardg1BSIZ0.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256nPrhG4E = await AavePoolRewardg1BSIZ0.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256ebVG82b = await AavePoolRewardg1BSIZ0.rewardPerToken.call({from: accounts[5]});
		const uint256sdPrOjf = await AavePoolRewardg1BSIZ0.stake.call(uintNLY2xBq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardg1BSIZ0.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardCKVmteB = await AavePoolReward.new({from: accounts[2]});
		const uintQuPLkuJ = BigInt("174")
		await AavePoolRewardCKVmteB.getReward.call({from: accounts[2]});
		const uint256MnuObd6 = await AavePoolRewardCKVmteB.rewardPerToken.call({from: accounts[0]});
		const uint256lBIK7Wq = await AavePoolRewardCKVmteB.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256w992Ynd = await AavePoolRewardCKVmteB.stake.call(uintQuPLkuJ, {from: accounts[0]});
		const uint256Hi3xtB = await AavePoolRewardCKVmteB.rewardPerToken.call({from: accounts[0]});

		await expect(AavePoolRewardCKVmteB.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardyq9GNfe = await AavePoolReward.new({from: accounts[0]});
		const uintO2xxjxY = BigInt("1670")
		const uintm612WBB = BigInt("1031")
		const uintPNSLlpr = BigInt("1452")
		const uintBQdnmcg = BigInt("951")
		const uint256OOgCbf7 = await AavePoolRewardyq9GNfe.withdraw.call(uintO2xxjxY, {from: accounts[0]});
		await AavePoolRewardyq9GNfe.getReward.call({from: accounts[2]});
		const uint256URybhJa = await AavePoolRewardyq9GNfe.stake.call(uintm612WBB, {from: accounts[3]});
		const uint256i29LFT = await AavePoolRewardyq9GNfe.stake.call(uintPNSLlpr, {from: accounts[2]});
		const uint256QWt2FAe = await AavePoolRewardyq9GNfe.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256X9TitGz = await AavePoolRewardyq9GNfe.withdraw.call(uintBQdnmcg, {from: accounts[2]});

		await expect(AavePoolRewardyq9GNfe.withdraw.call(uintO2xxjxY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardCKVmteB = await AavePoolReward.new({from: accounts[2]});
		const uintbov9so = BigInt("977")
		const uintXrstBbT = BigInt("174")
		await AavePoolRewardCKVmteB.getReward.call({from: accounts[2]});
		const uint256MnuObd6 = await AavePoolRewardCKVmteB.rewardPerToken.call({from: accounts[0]});
		const uint256lBIK7Wq = await AavePoolRewardCKVmteB.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256OFRjUPV = await AavePoolRewardCKVmteB.notifyRewardAmount.call(uintbov9so, {from: accounts[2]});
		const uint256w992Ynd = await AavePoolRewardCKVmteB.stake.call(uintXrstBbT, {from: accounts[0]});
		const uint256Hi3xtB = await AavePoolRewardCKVmteB.rewardPerToken.call({from: accounts[0]});

		await expect(AavePoolRewardCKVmteB.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardBWglEB1 = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDN53wkd = accounts[0]
		const uintWySvmos = BigInt("1901")
		const addressnOYyVHt = accounts[0]
		const addressKhyWRyS = await AavePoolRewardBWglEB1.dev.call(addressDN53wkd, {from: accounts[0]});
		const uint256lFpit6V = await AavePoolRewardBWglEB1.notifyRewardAmount.call(uintWySvmos, {from: accounts[2]});
		const uint256n00qJhN = await AavePoolRewardBWglEB1.earned.call(addressnOYyVHt, {from: accounts[0]});
	});
})