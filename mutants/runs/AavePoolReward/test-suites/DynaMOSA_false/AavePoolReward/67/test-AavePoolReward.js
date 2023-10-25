const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardDPTZc5V = await AavePoolReward.new({from: accounts[2]});
		const addressZgkwT1y = accounts[0]
		const uintYt8qJwn = BigInt("1964")
		const addressR3mQoqY = accounts[2]
		const uint256dAt6Avz = await AavePoolRewardDPTZc5V.earned.call(addressZgkwT1y, {from: accounts[0]});
		const uint256FRxCQXT = await AavePoolRewardDPTZc5V.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256tq5HjVG = await AavePoolRewardDPTZc5V.notifyRewardAmount.call(uintYt8qJwn, {from: accounts[3]});
		const uint256mYG8Lqo = await AavePoolRewardDPTZc5V.earned.call(addressR3mQoqY, {from: accounts[2]});

		assert.equal(uint256FRxCQXT, BigInt("0"))
		assert.equal(uint256dAt6Avz, BigInt("0"))
		await expect(AavePoolRewardDPTZc5V.notifyRewardAmount.call(uintYt8qJwn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardnZI5WPM = await AavePoolReward.new({from: accounts[4]});
		const addressNYpZjD = accounts[3]
		const addressP73B8KV = accounts[4]
		const uintKe5RrFA = BigInt("1051")
		const uintQQjvjl = BigInt("386")
		const uint256zkyiX5 = await AavePoolRewardnZI5WPM.earned.call(addressNYpZjD, {from: accounts[4]});
		const addresspmZ8ZV = await AavePoolRewardnZI5WPM.updateReward.call(addressP73B8KV, {from: accounts[3]});
		const uint256rHwx7UP = await AavePoolRewardnZI5WPM.rewardPerToken.call({from: accounts[1]});
		const uint256xP16Kj0 = await AavePoolRewardnZI5WPM.notifyRewardAmount.call(uintKe5RrFA, {from: accounts[2]});
		const uint256tt4IYun = await AavePoolRewardnZI5WPM.notifyRewardAmount.call(uintQQjvjl, {from: accounts[1]});
		await AavePoolRewardnZI5WPM.getReward.call({from: accounts[0]});

		assert.equal(uint256zkyiX5, BigInt("0"))
		await expect(AavePoolRewardnZI5WPM.updateReward.call(addressP73B8KV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardfKwUstG = await AavePoolReward.new({from: accounts[4]});
		const addressxR4Df4Z = accounts[4]
		const uintAhBNI40 = BigInt("229")
		await AavePoolRewardfKwUstG.getReward.call({from: accounts[4]});
		const addresshMoeGc0 = await AavePoolRewardfKwUstG.dev.call(addressxR4Df4Z, {from: accounts[0]});
		const uint256uWNU5a = await AavePoolRewardfKwUstG.withdraw.call(uintAhBNI40, {from: accounts[3]});
		const uint256J7tAeqD = await AavePoolRewardfKwUstG.rewardPerToken.call({from: accounts[1]});

		await expect(AavePoolRewardfKwUstG.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardmc7TlT = await AavePoolReward.new({from: accounts[4]});
		await AavePoolRewardmc7TlT.getReward.call({from: accounts[4]});
		await AavePoolRewardmc7TlT.exit.call({from: accounts[2]});

		await expect(AavePoolRewardmc7TlT.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardmc7TlT = await AavePoolReward.new({from: accounts[4]});
		const uintJJsskqs = BigInt("1448")
		const addressIwp4S6N = accounts[1]
		const addressx2PRwZe = accounts[4]
		await AavePoolRewardmc7TlT.getReward.call({from: accounts[4]});
		const uint256epc9nuc = await AavePoolRewardmc7TlT.stake.call(uintJJsskqs, {from: accounts[1]});
		await AavePoolRewardmc7TlT.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressNeRbMGS = await AavePoolRewardmc7TlT.dev.call(addressIwp4S6N, {from: accounts[3]});
		const uint256fTOyX6b = await AavePoolRewardmc7TlT.earned.call(addressx2PRwZe, {from: accounts[2]});
		await AavePoolRewardmc7TlT.exit.call({from: accounts[0]});

		await expect(AavePoolRewardmc7TlT.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardmc7TlT = await AavePoolReward.new({from: accounts[4]});
		const uintkx5erj1 = BigInt("31")
		const uintZdyfszO = BigInt("1353")
		await AavePoolRewardmc7TlT.getReward.call({from: accounts[4]});
		const uint256WuCWEap = await AavePoolRewardmc7TlT.withdraw.call(uintkx5erj1, {from: accounts[3]});
		const uint256QavYHvC = await AavePoolRewardmc7TlT.rewardPerToken.call({from: accounts[4]});
		await AavePoolRewardmc7TlT.exit.call({from: accounts[2]});
		const uint256abfnWv8 = await AavePoolRewardmc7TlT.stake.call(uintZdyfszO, {from: accounts[3]});

		await expect(AavePoolRewardmc7TlT.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardWOYLMg = await AavePoolReward.new({from: accounts[4]});
		const uintdU5U4Q8 = BigInt("1636")
		const uintzMHWC4 = BigInt("1291")
		const uint256w0E2Bu2 = await AavePoolRewardWOYLMg.rewardPerToken.call({from: accounts[3]});
		await AavePoolRewardWOYLMg.getReward.call({from: accounts[0]});
		const uint256I7s69nC = await AavePoolRewardWOYLMg.notifyRewardAmount.call(uintdU5U4Q8, {from: accounts[4]});
		const uint256JFWiHbC = await AavePoolRewardWOYLMg.notifyRewardAmount.call(uintzMHWC4, {from: accounts[4]});

		assert.equal(uint256w0E2Bu2, BigInt("0"))
		await expect(AavePoolRewardWOYLMg.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardufaVDhC = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshualOdd = accounts[2]
		const uintu4QT9h0 = BigInt("463")
		const uintrRnTLH9 = BigInt("1571")
		const uint256uiEHGJj = await AavePoolRewardufaVDhC.earned.call(addresshualOdd, {from: accounts[0]});
		const uint256BXmIWL = await AavePoolRewardufaVDhC.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256U2xUtLx = await AavePoolRewardufaVDhC.notifyRewardAmount.call(uintu4QT9h0, {from: accounts[0]});
		const uint256fXeSSNk = await AavePoolRewardufaVDhC.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256SAZNnhO = await AavePoolRewardufaVDhC.notifyRewardAmount.call(uintrRnTLH9, {from: accounts[1]});
	});
})