const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStaking3mG6mq = await SLTDStaking.new({from: accounts[3]});
		const addressIwTAYg = "0x0000000000000000000000000000000000000001"
		const addressY987Aev = accounts[4]
		const addressqxAswHl = await SLTDStaking3mG6mq.owner.call({from: accounts[0]});
		const addressRq8DzSP = await SLTDStaking3mG6mq.setSLTD.call(addressY987Aev, addressIwTAYg, {from: accounts[3]});
		await SLTDStaking3mG6mq.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressqxAswHl, 0x7E4DC3259B584C826a3196484eDDE71280F68c9b)
		await expect(SLTDStaking3mG6mq.setSLTD.call(addressY987Aev, addressIwTAYg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnhFPTvo = await SLTDStaking.new({from: accounts[4]});
		const addressVPx0rwU = accounts[2]
		const addressQYm3e3D = accounts[5]
		const uintP2xQ5H = BigInt("1279")
		const uintbSRMXQs = BigInt("342")
		const uint256jecDPPT = await SLTDStakingnhFPTvo.lastTimeRewardApplicable.call({from: accounts[0]});
		const addresseWZi3Ew = await SLTDStakingnhFPTvo.transferOwnership.call(addressVPx0rwU, {from: accounts[3]});
		const uint256MCfgBGJ = await SLTDStakingnhFPTvo.earned.call(addressQYm3e3D, {from: "0x0000000000000000000000000000000000000001"});
		const uint256weuVVkD = await SLTDStakingnhFPTvo.withdraw.call(uintP2xQ5H, {from: accounts[0]});
		const uint256b7sa9aC = await SLTDStakingnhFPTvo.stake.call(uintbSRMXQs, {from: accounts[4]});

		assert.equal(uint256jecDPPT, BigInt("0"))
		await expect(SLTDStakingnhFPTvo.transferOwnership.call(addressVPx0rwU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingz1ymesU = await SLTDStaking.new({from: accounts[1]});
		const uintBopnM7O = BigInt("1103")
		const addresshBoHln = accounts[1]
		const addresstKjGgN = accounts[1]
		const addressOxAZhLw = accounts[4]
		const addressXghIzlH = accounts[2]
		const address5Tq6Xe = accounts[1]
		const addressjUcXoy9 = accounts[0]
		const addressZwHUgF3 = accounts[3]
		const uint256Ufz2Cpp = await SLTDStakingz1ymesU.withdraw.call(uintBopnM7O, {from: accounts[2]});
		const addressxYYJI9B = await SLTDStakingz1ymesU.setSLTD.call(addresstKjGgN, addresshBoHln, {from: accounts[4]});
		const addressAfepcqV = await SLTDStakingz1ymesU.setSLTD.call(addressXghIzlH, addressOxAZhLw, {from: accounts[0]});
		const uint256lrIzMpd = await SLTDStakingz1ymesU.balanceOf.call(address5Tq6Xe, {from: accounts[3]});
		const addressjWsbpVN = await SLTDStakingz1ymesU.updateReward.call(addressjUcXoy9, {from: accounts[3]});
		const addressOgPKo7T = await SLTDStakingz1ymesU.setRewardDistribution.call(addressZwHUgF3, {from: accounts[5]});

		await expect(SLTDStakingz1ymesU.withdraw.call(uintBopnM7O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingq1txRq1 = await SLTDStaking.new({from: accounts[0]});
		const uintSv8wi6 = BigInt("839")
		const addressgsBMvj = accounts[2]
		const addresstEw10Z = accounts[0]
		const addressrW9jfgD = accounts[0]
		const addressZlRl3o2 = accounts[3]
		const addresssceZOX = accounts[5]
		const uint256bdb1TyA = await SLTDStakingq1txRq1.stake.call(uintSv8wi6, {from: "0x0000000000000000000000000000000000000001"});
		const address5b01WC = await SLTDStakingq1txRq1.setSLTD.call(addresstEw10Z, addressgsBMvj, {from: "0x0000000000000000000000000000000000000001"});
		const boolPNJVpcu = await SLTDStakingq1txRq1.isOwner.call({from: accounts[4]});
		const uint256vLkyUt = await SLTDStakingq1txRq1.balanceOf.call(addressrW9jfgD, {from: accounts[2]});
		const addressAlFk7tu = await SLTDStakingq1txRq1.setSLTD.call(addresssceZOX, addressZlRl3o2, {from: accounts[1]});

		await expect(SLTDStakingq1txRq1.stake.call(uintSv8wi6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnPM8FQU = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNvCvwO7 = "0x0000000000000000000000000000000000000001"
		const addressx4FZMph = accounts[3]
		const addresswtUc8vC = accounts[3]
		const uintkN4vI8V = BigInt("1483")
		const uintNDSshLS = BigInt("1246")
		await SLTDStakingnPM8FQU.onlyOwner.call({from: accounts[3]});
		const addressaClQYC = await SLTDStakingnPM8FQU.setSLTD.call(addressx4FZMph, addressNvCvwO7, {from: accounts[4]});
		const addressUXE5wkZ = await SLTDStakingnPM8FQU.setRewardDistribution.call(addresswtUc8vC, {from: accounts[4]});
		const uint256m8JHoEO = await SLTDStakingnPM8FQU.withdraw.call(uintkN4vI8V, {from: accounts[2]});
		const uint256D6MjlAG = await SLTDStakingnPM8FQU.stake.call(uintNDSshLS, {from: accounts[1]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingGxpL2EM = await SLTDStaking.new({from: accounts[2]});
		const uintJE4fZjv = BigInt("1206")
		const addressya4ejy = accounts[1]
		const uint256UNodopB = await SLTDStakingGxpL2EM.rewardPerToken.call({from: accounts[2]});
		await SLTDStakingGxpL2EM.exit.call({from: accounts[4]});
		const boolItxXqkg = await SLTDStakingGxpL2EM.isOwner.call({from: accounts[3]});
		const uint256YdxpDEm = await SLTDStakingGxpL2EM.withdraw.call(uintJE4fZjv, {from: accounts[0]});
		const addressAIw0LqT = await SLTDStakingGxpL2EM.setRewardDistribution.call(addressya4ejy, {from: accounts[5]});

		assert.equal(uint256UNodopB, BigInt("0"))
		await expect(SLTDStakingGxpL2EM.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking3mG6mq = await SLTDStaking.new({from: accounts[3]});
		const addressih2onqd = "0x0000000000000000000000000000000000000001"
		const addresskYFwRu2 = accounts[4]
		await SLTDStaking3mG6mq.onlyRewardDistribution.call({from: accounts[3]});
		await SLTDStaking3mG6mq.exit.call({from: accounts[3]});
		const addressqxAswHl = await SLTDStaking3mG6mq.owner.call({from: accounts[0]});
		const addressRq8DzSP = await SLTDStaking3mG6mq.setSLTD.call(addresskYFwRu2, addressih2onqd, {from: accounts[3]});
		await SLTDStaking3mG6mq.renounceOwnership.call({from: accounts[0]});

		await expect(SLTDStaking3mG6mq.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking3mG6mq = await SLTDStaking.new({from: accounts[3]});
		const addressg5crGnr = "0x0000000000000000000000000000000000000001"
		const addressojcFH5q = accounts[4]
		const addressqxAswHl = await SLTDStaking3mG6mq.owner.call({from: accounts[0]});
		await SLTDStaking3mG6mq.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRq8DzSP = await SLTDStaking3mG6mq.setSLTD.call(addressojcFH5q, addressg5crGnr, {from: accounts[3]});

		assert.equal(addressqxAswHl, 0x7E4DC3259B584C826a3196484eDDE71280F68c9b)
		await expect(SLTDStaking3mG6mq.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingi2GvEqN = await SLTDStaking.new({from: accounts[3]});
		const addresssaz3vQv = accounts[2]
		const addressJm6szyk = accounts[3]
		const addressLQnMqaa = await SLTDStakingi2GvEqN.setRewardDistribution.call(addresssaz3vQv, {from: accounts[3]});
		const uint256kGtjVnL = await SLTDStakingi2GvEqN.earned.call(addressJm6szyk, {from: accounts[3]});
		await SLTDStakingi2GvEqN.getReward.call({from: accounts[0]});

		assert.equal(uint256kGtjVnL, BigInt("0"))
		await expect(SLTDStakingi2GvEqN.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingi2GvEqN = await SLTDStaking.new({from: accounts[3]});
		const addressWsyTgQB = accounts[0]
		const uintfYxnCM3 = BigInt("897")
		const addressS8fLlfc = await SLTDStakingi2GvEqN.transferOwnership.call(addressWsyTgQB, {from: accounts[3]});
		const uint256eFRQmT = await SLTDStakingi2GvEqN.withdraw.call(uintfYxnCM3, {from: accounts[1]});

		await expect(SLTDStakingi2GvEqN.withdraw.call(uintfYxnCM3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingi2GvEqN = await SLTDStaking.new({from: accounts[3]});
		const uintsK1rWyV = BigInt("882")
		const uint256OQLaqQN = await SLTDStakingi2GvEqN.rewardPerToken.call({from: accounts[1]});
		await SLTDStakingi2GvEqN.renounceOwnership.call({from: accounts[3]});
		const uint256eFRQmT = await SLTDStakingi2GvEqN.withdraw.call(uintsK1rWyV, {from: accounts[1]});

		assert.equal(uint256OQLaqQN, BigInt("0"))
		await expect(SLTDStakingi2GvEqN.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})