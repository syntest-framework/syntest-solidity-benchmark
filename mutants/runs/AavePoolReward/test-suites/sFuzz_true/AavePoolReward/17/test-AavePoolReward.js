const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardWF1lpv = await AavePoolReward.new({from: accounts[4]});
		const uintSzLVa4Y = BigInt("1588")
		const addressbMWNvQC = accounts[0]
		const uintLiIXgl = BigInt("412")
		const uintr4QCYqH = BigInt("612")
		const uintCzD9YFY = BigInt("1998")
		const uint256I9TuSPK = await AavePoolRewardWF1lpv.notifyRewardAmount.call(uintSzLVa4Y, {from: accounts[4]});
		const addresswnzcYMB = await AavePoolRewardWF1lpv.dev.call(addressbMWNvQC, {from: accounts[4]});
		const uint256sNdf2ej = await AavePoolRewardWF1lpv.stake.call(uintLiIXgl, {from: accounts[3]});
		const uint256M29i0I = await AavePoolRewardWF1lpv.stake.call(uintr4QCYqH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256t7HHVu = await AavePoolRewardWF1lpv.notifyRewardAmount.call(uintCzD9YFY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardWF1lpv.stake.call(uintLiIXgl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardUSwdTAI = await AavePoolReward.new({from: accounts[4]});
		const uintnxUI2Jy = BigInt("1971")
		const uintMXmBBmr = BigInt("1586")
		const uint256Apr7VMH = await AavePoolRewardUSwdTAI.notifyRewardAmount.call(uintnxUI2Jy, {from: accounts[1]});
		const uint256aOLTZ3b = await AavePoolRewardUSwdTAI.rewardPerToken.call({from: accounts[2]});
		const uint256PrLvGi = await AavePoolRewardUSwdTAI.withdraw.call(uintMXmBBmr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardUSwdTAI.notifyRewardAmount.call(uintnxUI2Jy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardJyMysy7 = await AavePoolReward.new({from: accounts[4]});
		const addressZA4ZBV = accounts[0]
		const uintMWAG5gV = BigInt("265")
		const addressv5hZyYZ = await AavePoolRewardJyMysy7.dev.call(addressZA4ZBV, {from: accounts[1]});
		const uint256yCLhozP = await AavePoolRewardJyMysy7.notifyRewardAmount.call(uintMWAG5gV, {from: accounts[4]});
		const uint256Yfb8UT9 = await AavePoolRewardJyMysy7.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(AavePoolRewardJyMysy7.dev.call(addressZA4ZBV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardg6jdJhP = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintORFhZuV = BigInt("1653")
		const uintkyAXDjP = BigInt("1703")
		const addressWPSJEE5 = accounts[3]
		const uintMGXyNkj = BigInt("68")
		const uint256VUF4wW = await AavePoolRewardg6jdJhP.rewardPerToken.call({from: accounts[2]});
		const uint256a3gS90f = await AavePoolRewardg6jdJhP.notifyRewardAmount.call(uintORFhZuV, {from: accounts[0]});
		const uint256GY1p8TQ = await AavePoolRewardg6jdJhP.withdraw.call(uintkyAXDjP, {from: accounts[3]});
		const uint256PpakCXF = await AavePoolRewardg6jdJhP.earned.call(addressWPSJEE5, {from: accounts[2]});
		const uint256RTjgWCc = await AavePoolRewardg6jdJhP.withdraw.call(uintMGXyNkj, {from: accounts[0]});
		await AavePoolRewardg6jdJhP.exit.call({from: accounts[3]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardY0hHiy5 = await AavePoolReward.new({from: accounts[0]});
		const addressPko42b5 = accounts[1]
		const addresstI0H9B = await AavePoolRewardY0hHiy5.updateReward.call(addressPko42b5, {from: accounts[4]});
		await AavePoolRewardY0hHiy5.exit.call({from: accounts[4]});
		await AavePoolRewardY0hHiy5.exit.call({from: accounts[3]});

		await expect(AavePoolRewardY0hHiy5.updateReward.call(addressPko42b5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardUSwdTAI = await AavePoolReward.new({from: accounts[4]});
		const uint0Jbi1s = BigInt("1971")
		const uintFdh4Ova = BigInt("1586")
		await AavePoolRewardUSwdTAI.exit.call({from: accounts[1]});
		const uint256Apr7VMH = await AavePoolRewardUSwdTAI.notifyRewardAmount.call(uint0Jbi1s, {from: accounts[1]});
		const uint256PrLvGi = await AavePoolRewardUSwdTAI.withdraw.call(uintFdh4Ova, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardUSwdTAI.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardUSwdTAI = await AavePoolReward.new({from: accounts[4]});
		const uintBJr7ERe = BigInt("1586")
		const uint256aOLTZ3b = await AavePoolRewardUSwdTAI.rewardPerToken.call({from: accounts[2]});
		const uint256PrLvGi = await AavePoolRewardUSwdTAI.withdraw.call(uintBJr7ERe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256aOLTZ3b, BigInt("0"))
		await expect(AavePoolRewardUSwdTAI.withdraw.call(uintBJr7ERe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})