const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardZ2112fO = await AavePoolReward.new({from: accounts[1]});
		const uintZOn5WYF = BigInt("1190")
		const uintRJ9EqKZ = BigInt("72")
//		const uint256jUrdEgU = await AavePoolRewardZ2112fO.notifyRewardAmount.call(uintZOn5WYF, {from: accounts[4]});
//		const uint256UGnkScO = await AavePoolRewardZ2112fO.stake.call(uintRJ9EqKZ, {from: accounts[2]});
//		await AavePoolRewardZ2112fO.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardZ2112fO.notifyRewardAmount.call(uintZOn5WYF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardJYFbnz8 = await AavePoolReward.new({from: accounts[2]});
		const uintka4YIPS = BigInt("741")
		const addressGDnuRpg = accounts[3]
		const uint256HiUiK5j = await AavePoolRewardJYFbnz8.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256LQpCzdn = await AavePoolRewardJYFbnz8.notifyRewardAmount.call(uintka4YIPS, {from: accounts[3]});
//		const uint2566lcohz = await AavePoolRewardJYFbnz8.earned.call(addressGDnuRpg, {from: accounts[3]});

		assert.equal(uint256HiUiK5j, BigInt("0"))
		await expect(AavePoolRewardJYFbnz8.notifyRewardAmount.call(uintka4YIPS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardJslumyp = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnL3HJ1n = accounts[3]
		const uintd0QdCaY = BigInt("106")
		const addresskMrR1fc = accounts[1]
		const uint256M09UGYu = await AavePoolRewardJslumyp.rewardPerToken.call({from: accounts[4]});
		const addresscn7qPEf = await AavePoolRewardJslumyp.updateReward.call(addressnL3HJ1n, {from: accounts[1]});
		await AavePoolRewardJslumyp.getReward.call({from: accounts[4]});
		const uint256Gq5qn1l = await AavePoolRewardJslumyp.stake.call(uintd0QdCaY, {from: accounts[0]});
		const uint256j5JIFd = await AavePoolRewardJslumyp.earned.call(addresskMrR1fc, {from: accounts[4]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolReward3AhcGZ = await AavePoolReward.new({from: accounts[0]});
		const uintaRsgijh = BigInt("84")
		const addressgjFQUCx = accounts[3]
		const uint256nFxaOt = await AavePoolReward3AhcGZ.notifyRewardAmount.call(uintaRsgijh, {from: accounts[0]});
		const uint256U3gVgNa = await AavePoolReward3AhcGZ.lastTimeRewardApplicable.call({from: accounts[2]});
//		await AavePoolReward3AhcGZ.exit.call({from: accounts[2]});
//		const uint2569o46Hx = await AavePoolReward3AhcGZ.earned.call(addressgjFQUCx, {from: accounts[0]});

		assert.equal(uint256U3gVgNa, BigInt("0"))
		await expect(AavePoolReward3AhcGZ.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardQifvS1n = await AavePoolReward.new({from: accounts[2]});
		const uintz1FtZgC = BigInt("533")
		const addressAaH0qt5 = accounts[5]
//		const uint256zp66h1Q = await AavePoolRewardQifvS1n.withdraw.call(uintz1FtZgC, {from: accounts[1]});
//		const uint256BDEngMr = await AavePoolRewardQifvS1n.earned.call(addressAaH0qt5, {from: accounts[3]});
//		await AavePoolRewardQifvS1n.exit.call({from: accounts[4]});

		await expect(AavePoolRewardQifvS1n.withdraw.call(uintz1FtZgC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewarddWbmoQw = await AavePoolReward.new({from: accounts[2]});
		const addressPHMfdTC = accounts[1]
		const addressII7xlXR = accounts[3]
		const uintLGmMI83 = BigInt("930")
		const uint256VBQAjz = await AavePoolRewarddWbmoQw.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addresseTnBFlN = await AavePoolRewarddWbmoQw.dev.call(addressPHMfdTC, {from: accounts[3]});
//		const addressGIqsGfK = await AavePoolRewarddWbmoQw.dev.call(addressII7xlXR, {from: accounts[2]});
//		const uint256MB3LqKY = await AavePoolRewarddWbmoQw.notifyRewardAmount.call(uintLGmMI83, {from: accounts[4]});

		assert.equal(uint256VBQAjz, BigInt("0"))
		await expect(AavePoolRewarddWbmoQw.dev.call(addressPHMfdTC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardDgb3hCR = await AavePoolReward.new({from: accounts[0]});
		const uintuKHMnHo = BigInt("990")
		const addressPMeghc7 = accounts[0]
		const addressHqj3FFk = accounts[0]
//		const uint256FG5A66l = await AavePoolRewardDgb3hCR.stake.call(uintuKHMnHo, {from: accounts[0]});
//		const addressVtxCani = await AavePoolRewardDgb3hCR.updateReward.call(addressPMeghc7, {from: accounts[2]});
//		const address91z2ny = await AavePoolRewardDgb3hCR.updateReward.call(addressHqj3FFk, {from: accounts[2]});

		await expect(AavePoolRewardDgb3hCR.stake.call(uintuKHMnHo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardD46BYNK = await AavePoolReward.new({from: accounts[5]});
		const addressgqa4Xsq = accounts[4]
		const uintWhskjVb = BigInt("1951")
//		const addressmiGUom = await AavePoolRewardD46BYNK.updateReward.call(addressgqa4Xsq, {from: accounts[4]});
//		await AavePoolRewardD46BYNK.getReward.call({from: accounts[0]});
//		const uint256QCug54n = await AavePoolRewardD46BYNK.withdraw.call(uintWhskjVb, {from: accounts[3]});

		await expect(AavePoolRewardD46BYNK.updateReward.call(addressgqa4Xsq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardDDGUyPw = await AavePoolReward.new({from: accounts[2]});
		const addresszYi36Z = accounts[2]
		const addressboT0nQe = accounts[4]
		const addressjQmuxhY = accounts[6]
		const addressXZ9Ilb = await AavePoolRewardDDGUyPw.dev.call(addresszYi36Z, {from: accounts[2]});
//		const addressrsGZ8eJ = await AavePoolRewardDDGUyPw.dev.call(addressboT0nQe, {from: "0x0000000000000000000000000000000000000001"});
//		const addressiad8aoR = await AavePoolRewardDDGUyPw.dev.call(addressjQmuxhY, {from: accounts[1]});

		await expect(AavePoolRewardDDGUyPw.dev.call(addressboT0nQe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})