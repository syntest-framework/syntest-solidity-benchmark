const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardlQF8vR5 = await SLTDETHlpReward.new({from: accounts[1]});
		const addressUcRuN2v = accounts[0]
		const addressDc2ZTBY = await SLTDETHlpRewardlQF8vR5.updateReward.call(addressUcRuN2v, {from: accounts[3]});
		await SLTDETHlpRewardlQF8vR5.onlyOwner.call({from: accounts[5]});
		const uint256YyloLIZ = await SLTDETHlpRewardlQF8vR5.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256lbE3KvQ = await SLTDETHlpRewardlQF8vR5.rewardPerToken.call({from: accounts[0]});

		await expect(SLTDETHlpRewardlQF8vR5.updateReward.call(addressUcRuN2v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjS238Cy = await SLTDETHlpReward.new({from: accounts[1]});
		const addressYZYVtN0 = accounts[4]
		const uinttxMxroq = BigInt("325")
		await SLTDETHlpRewardjS238Cy.getReward.call({from: accounts[5]});
		const addressb9vQkQ5 = await SLTDETHlpRewardjS238Cy.updateReward.call(addressYZYVtN0, {from: accounts[5]});
		await SLTDETHlpRewardjS238Cy.onlyOwner.call({from: accounts[2]});
		await SLTDETHlpRewardjS238Cy.exit.call({from: accounts[2]});
		const uint256BCOf5gy = await SLTDETHlpRewardjS238Cy.stake.call(uinttxMxroq, {from: accounts[1]});

		await expect(SLTDETHlpRewardjS238Cy.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcKwTRzs = await SLTDETHlpReward.new({from: accounts[3]});
		const addresskJrDyTn = accounts[0]
		const uintuWxAZFZ = BigInt("245")
		const uint256ySSgZLc = await SLTDETHlpRewardcKwTRzs.balanceOf.call(addresskJrDyTn, {from: accounts[4]});
		const uint256Z8Y7hD = await SLTDETHlpRewardcKwTRzs.withdraw.call(uintuWxAZFZ, {from: accounts[2]});

		assert.equal(uint256ySSgZLc, BigInt("0"))
		await expect(SLTDETHlpRewardcKwTRzs.withdraw.call(uintuWxAZFZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardbtKer2 = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCtgL1lK = BigInt("1679")
		const addressI1T6nw0 = accounts[2]
		const uint256cKTse32 = await SLTDETHlpRewardbtKer2.withdraw.call(uintCtgL1lK, {from: accounts[1]});
		const addressG8bdyyj = await SLTDETHlpRewardbtKer2.setRewardDistribution.call(addressI1T6nw0, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardbtKer2.getReward.call({from: accounts[4]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardHr974bx = await SLTDETHlpReward.new({from: accounts[0]});
		const addressueVOnES = await SLTDETHlpRewardHr974bx.owner.call({from: accounts[1]});
		await SLTDETHlpRewardHr974bx.onlyRewardDistribution.call({from: accounts[0]});

		assert.equal(addressueVOnES, 0x32bcc99A084A094979786F7D205A9A3DDfD72E2b)
		await expect(SLTDETHlpRewardHr974bx.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardnUDDFd3 = await SLTDETHlpReward.new({from: accounts[1]});
		const uintEBLBEaP = BigInt("626")
		const addressv5SDBIW = accounts[3]
		const addressZup8hfU = accounts[3]
		const uint256E9k75Qp = await SLTDETHlpRewardnUDDFd3.stake.call(uintEBLBEaP, {from: accounts[1]});
		const uint256WDTJAV4 = await SLTDETHlpRewardnUDDFd3.remainingReward.call({from: accounts[5]});
		const uint256stSIVI2 = await SLTDETHlpRewardnUDDFd3.earned.call(addressv5SDBIW, {from: accounts[2]});
		const uint256sqN1evm = await SLTDETHlpRewardnUDDFd3.earned.call(addressZup8hfU, {from: accounts[3]});

		await expect(SLTDETHlpRewardnUDDFd3.stake.call(uintEBLBEaP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardF1oxY3y = await SLTDETHlpReward.new({from: accounts[2]});
		const uintjscZnG1 = BigInt("1532")
		const uintM0ldEmq = BigInt("64")
		await SLTDETHlpRewardF1oxY3y.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256o6SgFW = await SLTDETHlpRewardF1oxY3y.totalSupply.call({from: accounts[0]});
		const uint256WM421i3 = await SLTDETHlpRewardF1oxY3y.notifyRewardAmount.call(uintjscZnG1, {from: accounts[5]});
		const uint256aNQKPdU = await SLTDETHlpRewardF1oxY3y.withdraw.call(uintM0ldEmq, {from: accounts[2]});
		const uint256kiDJ27w = await SLTDETHlpRewardF1oxY3y.remainingReward.call({from: accounts[2]});
		await SLTDETHlpRewardF1oxY3y.exit.call({from: accounts[2]});

		await expect(SLTDETHlpRewardF1oxY3y.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardKJGZh4c = await SLTDETHlpReward.new({from: accounts[1]});
		const addressB1oEqY8 = accounts[4]
		const uintOxhVcor = BigInt("885")
		const addressPfkXpTN = accounts[3]
		const addresshc8UKyB = await SLTDETHlpRewardKJGZh4c.setStakeAddress.call(addressB1oEqY8, {from: accounts[0]});
		const uint256ZkPOx1Y = await SLTDETHlpRewardKJGZh4c.withdraw.call(uintOxhVcor, {from: accounts[2]});
		const uint256zyoYc7J = await SLTDETHlpRewardKJGZh4c.balanceOf.call(addressPfkXpTN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardKJGZh4c.setStakeAddress.call(addressB1oEqY8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcKwTRzs = await SLTDETHlpReward.new({from: accounts[3]});
		const uintsYMcMw = BigInt("1382")
		await SLTDETHlpRewardcKwTRzs.exit.call({from: accounts[2]});
		const uint256Z8Y7hD = await SLTDETHlpRewardcKwTRzs.withdraw.call(uintsYMcMw, {from: accounts[2]});

		await expect(SLTDETHlpRewardcKwTRzs.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardcKwTRzs = await SLTDETHlpReward.new({from: accounts[3]});
		const uintbsvdAQL = BigInt("1485")
		const addressUplm6V = accounts[5]
		const uint2568LBZCQ = await SLTDETHlpRewardcKwTRzs.remainingReward.call({from: accounts[1]});
		const uint256Z8Y7hD = await SLTDETHlpRewardcKwTRzs.withdraw.call(uintbsvdAQL, {from: accounts[2]});
		const uint256ycSjtG = await SLTDETHlpRewardcKwTRzs.earned.call(addressUplm6V, {from: accounts[2]});

		await expect(SLTDETHlpRewardcKwTRzs.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjS238Cy = await SLTDETHlpReward.new({from: accounts[1]});
		const addresshkDrhtc = accounts[2]
		const uintkmreloY = BigInt("688")
		const uintLZRpYx6 = BigInt("280")
		const addressL7z4bwz = await SLTDETHlpRewardjS238Cy.setRewardDistribution.call(addresshkDrhtc, {from: accounts[1]});
		const uint256niJDWA = await SLTDETHlpRewardjS238Cy.stake.call(uintkmreloY, {from: accounts[2]});
		const uint256cdtdbN = await SLTDETHlpRewardjS238Cy.stake.call(uintLZRpYx6, {from: accounts[4]});
		await SLTDETHlpRewardjS238Cy.exit.call({from: accounts[2]});

		await expect(SLTDETHlpRewardjS238Cy.stake.call(uintkmreloY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjS238Cy = await SLTDETHlpReward.new({from: accounts[1]});
		const uintOFWzdvb = BigInt("451")
		const addressvzlgs0j = accounts[5]
		const uint256K7zovv3 = await SLTDETHlpRewardjS238Cy.notifyRewardAmount.call(uintOFWzdvb, {from: accounts[1]});
		const uint256ryHJYq7 = await SLTDETHlpRewardjS238Cy.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardjS238Cy.getReward.call({from: accounts[5]});
		const addressIbLLHwm = await SLTDETHlpRewardjS238Cy.setStakeAddress.call(addressvzlgs0j, {from: accounts[2]});

		assert.equal(uint256ryHJYq7, BigInt("0"))
		await expect(SLTDETHlpRewardjS238Cy.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjS238Cy = await SLTDETHlpReward.new({from: accounts[1]});
		const addressGKALIaM = accounts[2]
		await SLTDETHlpRewardjS238Cy.getReward.call({from: accounts[5]});
		const addresswmXIPWo = await SLTDETHlpRewardjS238Cy.transferOwnership.call(addressGKALIaM, {from: accounts[1]});

		await expect(SLTDETHlpRewardjS238Cy.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardNMPgzl6 = await SLTDETHlpReward.new({from: accounts[1]});
		const uinttph5RWQ = BigInt("900")
		const uint256v3sBK2V = await SLTDETHlpRewardNMPgzl6.setStartTime.call(uinttph5RWQ, {from: accounts[1]});
		const uint256Tfij64w = await SLTDETHlpRewardNMPgzl6.totalSupply.call({from: accounts[3]});
		await SLTDETHlpRewardNMPgzl6.renounceOwnership.call({from: accounts[4]});
		const boolvvIU69W = await SLTDETHlpRewardNMPgzl6.isOwner.call({from: accounts[4]});

		assert.equal(uint256Tfij64w, BigInt("0"))
		await expect(SLTDETHlpRewardNMPgzl6.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardctJEKTK = await SLTDETHlpReward.new({from: accounts[2]});
		const addressFIoiaL3 = accounts[0]
		const addressmZDZBdE = accounts[0]
		const addressjPZcFIr = await SLTDETHlpRewardctJEKTK.setStakeAddress.call(addressFIoiaL3, {from: accounts[2]});
		const uint256D5zmtn = await SLTDETHlpRewardctJEKTK.earned.call(addressmZDZBdE, {from: accounts[1]});
		await SLTDETHlpRewardctJEKTK.exit.call({from: accounts[5]});
		const uint256gBHawEl = await SLTDETHlpRewardctJEKTK.remainingReward.call({from: accounts[2]});

		assert.equal(uint256D5zmtn, BigInt("0"))
		await expect(SLTDETHlpRewardctJEKTK.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjS238Cy = await SLTDETHlpReward.new({from: accounts[1]});
		const uintruutIGq = BigInt("432")
		await SLTDETHlpRewardjS238Cy.renounceOwnership.call({from: accounts[1]});
		const uint256K7zovv3 = await SLTDETHlpRewardjS238Cy.notifyRewardAmount.call(uintruutIGq, {from: accounts[1]});
		const uint256ryHJYq7 = await SLTDETHlpRewardjS238Cy.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HoXThwN = await SLTDETHlpRewardjS238Cy.totalSupply.call({from: accounts[0]});

		await expect(SLTDETHlpRewardjS238Cy.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})