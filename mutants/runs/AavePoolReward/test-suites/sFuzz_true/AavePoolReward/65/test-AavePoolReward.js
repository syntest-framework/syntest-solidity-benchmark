const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardccQzn6f = await AavePoolReward.new({from: accounts[1]});
		const addressqxFERot = accounts[1]
		const uintJ9KyJO = BigInt("1223")
		const uintHZH2Hd = BigInt("1284")
		const uintVLsrobo = BigInt("749")
		const uint256RIDmRL = await AavePoolRewardccQzn6f.earned.call(addressqxFERot, {from: accounts[2]});
		await AavePoolRewardccQzn6f.exit.call({from: accounts[2]});
		const uint256Y8ZrUfa = await AavePoolRewardccQzn6f.stake.call(uintJ9KyJO, {from: accounts[2]});
		const uint256MFpd9ot = await AavePoolRewardccQzn6f.stake.call(uintHZH2Hd, {from: accounts[4]});
		const uint256opo27X = await AavePoolRewardccQzn6f.notifyRewardAmount.call(uintVLsrobo, {from: accounts[3]});

		assert.equal(uint256RIDmRL, BigInt("0"))
		await expect(AavePoolRewardccQzn6f.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardbaLBkkn = await AavePoolReward.new({from: accounts[1]});
		const addressPCzIv2X = accounts[4]
		const addressYeDVrCp = accounts[5]
		const addressC0nGipG = accounts[3]
		const uint256si9mm6A = await AavePoolRewardbaLBkkn.earned.call(addressPCzIv2X, {from: "0x0000000000000000000000000000000000000001"});
		const addressyUjTKLN = await AavePoolRewardbaLBkkn.updateReward.call(addressYeDVrCp, {from: accounts[0]});
		const uint256IEtuoqM = await AavePoolRewardbaLBkkn.earned.call(addressC0nGipG, {from: accounts[3]});
		const uint256EDY9d2h = await AavePoolRewardbaLBkkn.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256f8Gwdwj = await AavePoolRewardbaLBkkn.rewardPerToken.call({from: accounts[1]});
		await AavePoolRewardbaLBkkn.getReward.call({from: accounts[0]});

		assert.equal(uint256si9mm6A, BigInt("0"))
		await expect(AavePoolRewardbaLBkkn.updateReward.call(addressYeDVrCp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardY7OOs6W = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressf7FOnrN = accounts[1]
		const addressggRsWvi = await AavePoolRewardY7OOs6W.updateReward.call(addressf7FOnrN, {from: accounts[4]});
		const uint256ZB8KtqX = await AavePoolRewardY7OOs6W.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardRIaF611 = await AavePoolReward.new({from: accounts[0]});
		const uintP42bK52 = BigInt("1296")
		const uintv8mw7lJ = BigInt("1613")
		const addresst8DyhZO = accounts[1]
		const uintIYHYNiB = BigInt("11")
		const uint256FygmONM = await AavePoolRewardRIaF611.withdraw.call(uintP42bK52, {from: accounts[4]});
		const uint256QsWazWT = await AavePoolRewardRIaF611.rewardPerToken.call({from: accounts[1]});
		const uint256SAk0NFf = await AavePoolRewardRIaF611.stake.call(uintv8mw7lJ, {from: accounts[4]});
		const uint256tfxjih9 = await AavePoolRewardRIaF611.earned.call(addresst8DyhZO, {from: accounts[4]});
		const uint256fU4fWUd = await AavePoolRewardRIaF611.stake.call(uintIYHYNiB, {from: accounts[2]});

		await expect(AavePoolRewardRIaF611.withdraw.call(uintP42bK52, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardj5AWwj = await AavePoolReward.new({from: accounts[2]});
		const uintlC0uC69 = BigInt("43")
		const uintTZI7zNB = BigInt("1255")
		const uintchizJCq = BigInt("1031")
		const uint256ki3YzvF = await AavePoolRewardj5AWwj.notifyRewardAmount.call(uintlC0uC69, {from: accounts[3]});
		const uint256OQsoTAP = await AavePoolRewardj5AWwj.notifyRewardAmount.call(uintTZI7zNB, {from: accounts[0]});
		await AavePoolRewardj5AWwj.exit.call({from: accounts[1]});
		const uint256cwdHj3C = await AavePoolRewardj5AWwj.withdraw.call(uintchizJCq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardj5AWwj.notifyRewardAmount.call(uintlC0uC69, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardeUUEeaw = await AavePoolReward.new({from: accounts[5]});
		const uintiZHXJH = BigInt("667")
		const uintIOzWNR = BigInt("1341")
		const uintjY3tqps = BigInt("305")
		const uint256WQOUEnL = await AavePoolRewardeUUEeaw.stake.call(uintiZHXJH, {from: accounts[4]});
		const uint256a0OEOqY = await AavePoolRewardeUUEeaw.withdraw.call(uintIOzWNR, {from: accounts[3]});
		const uint256s8cImiL = await AavePoolRewardeUUEeaw.notifyRewardAmount.call(uintjY3tqps, {from: accounts[1]});

		await expect(AavePoolRewardeUUEeaw.stake.call(uintiZHXJH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardpk0Rcl = await AavePoolReward.new({from: accounts[4]});
		const addressLqMc5RT = accounts[0]
		const addressI4R8EqP = accounts[4]
		const uintqczi9Xp = BigInt("787")
		const uintOfN562F = BigInt("1870")
		const uints0adGeA = BigInt("1457")
		const uint256uEDfwZ = await AavePoolRewardpk0Rcl.earned.call(addressLqMc5RT, {from: accounts[4]});
		const addressh2Q99mO = await AavePoolRewardpk0Rcl.dev.call(addressI4R8EqP, {from: accounts[3]});
		const uint256EdlTNMB = await AavePoolRewardpk0Rcl.withdraw.call(uintqczi9Xp, {from: accounts[0]});
		const uint256R0hMtjh = await AavePoolRewardpk0Rcl.withdraw.call(uintOfN562F, {from: accounts[0]});
		const uint256RAngwHE = await AavePoolRewardpk0Rcl.stake.call(uints0adGeA, {from: accounts[2]});

		assert.equal(uint256uEDfwZ, BigInt("0"))
		await expect(AavePoolRewardpk0Rcl.dev.call(addressI4R8EqP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardyFZUsX = await AavePoolReward.new({from: accounts[3]});
		const addresswWVGEfW = accounts[0]
		const addresszim6wST = accounts[0]
		const uint256EPCCsiT = await AavePoolRewardyFZUsX.earned.call(addresswWVGEfW, {from: accounts[2]});
		const uint256waTmJh = await AavePoolRewardyFZUsX.lastTimeRewardApplicable.call({from: accounts[5]});
		await AavePoolRewardyFZUsX.getReward.call({from: accounts[2]});
		const uint256UYPe61 = await AavePoolRewardyFZUsX.rewardPerToken.call({from: accounts[0]});
		const addressbknifO = await AavePoolRewardyFZUsX.dev.call(addresszim6wST, {from: accounts[3]});

		assert.equal(uint256EPCCsiT, BigInt("0"))
		assert.equal(uint256waTmJh, BigInt("0"))
		await expect(AavePoolRewardyFZUsX.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardeUUEeaw = await AavePoolReward.new({from: accounts[5]});
		const uintjpjCvM = BigInt("1606")
		const uintK4la5W = BigInt("1341")
		const uint256TMe32n = await AavePoolRewardeUUEeaw.notifyRewardAmount.call(uintjpjCvM, {from: accounts[5]});
		const uint256a0OEOqY = await AavePoolRewardeUUEeaw.withdraw.call(uintK4la5W, {from: accounts[3]});

		await expect(AavePoolRewardeUUEeaw.withdraw.call(uintK4la5W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})