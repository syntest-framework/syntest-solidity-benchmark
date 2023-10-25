const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3tGmzAju = await YRX3.new({from: accounts[3]});
		const uintYsGrb01 = BigInt("1266")
		const addressfFihphV = accounts[2]
		await YRX3tGmzAju.checkStart.call({from: accounts[0]});
		const uint256wOEmRG = await YRX3tGmzAju.stake.call(uintYsGrb01, {from: accounts[0]});
		const boolNMMFSW6 = await YRX3tGmzAju.isOwner.call({from: accounts[2]});
		const addressWEYnN1w = await YRX3tGmzAju.transferOwnership.call(addressfFihphV, {from: accounts[1]});
		await YRX3tGmzAju.onlyRewardDistribution.call({from: accounts[1]});

		await expect(YRX3tGmzAju.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3xsgCxBk = await YRX3.new({from: accounts[4]});
		const uintilDbMcZ = BigInt("1323")
		const addressR8WPKwk = accounts[3]
		const addresssobW7fo = accounts[1]
		const addresssH8MCmb = accounts[4]
		await YRX3xsgCxBk.notifyRewardAmount.call({from: "0x0000000000000000000000000000000000000001"});
		await YRX3xsgCxBk.getReward.call({from: accounts[4]});
		const uint256Ts3cT1 = await YRX3xsgCxBk.withdraw.call(uintilDbMcZ, {from: accounts[1]});
		const addressap1XuEG = await YRX3xsgCxBk.emergencyDrain.call(addressR8WPKwk, {from: accounts[4]});
		const addressucPtcrJ = await YRX3xsgCxBk.transferOwnership.call(addresssobW7fo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tv9Sym = await YRX3xsgCxBk.earned.call(addresssH8MCmb, {from: accounts[0]});

		await expect(YRX3xsgCxBk.notifyRewardAmount.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3wGoCCd2 = await YRX3.new({from: accounts[3]});
		const addressbUiVigu = accounts[1]
		const uint256KBxpi11 = await YRX3wGoCCd2.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await YRX3wGoCCd2.renounceOwnership.call({from: accounts[2]});
		const addressURzHsyZ = await YRX3wGoCCd2.toPayable.call(addressbUiVigu, {from: accounts[1]});
		const boolIzMYYFO = await YRX3wGoCCd2.isOwner.call({from: accounts[1]});
		await YRX3wGoCCd2.exit.call({from: accounts[4]});

		assert.equal(uint256KBxpi11, BigInt("0"))
		await expect(YRX3wGoCCd2.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3hWKupHF = await YRX3.new({from: accounts[3]});
		const addressBscy3mY = accounts[1]
		const uintpNz2yy = BigInt("406")
		const addressLV6Luuz = accounts[1]
		const uint256hNowe4p = await YRX3hWKupHF.rewardPerToken.call({from: accounts[2]});
		const uint256lKJRIhC = await YRX3hWKupHF.earned.call(addressBscy3mY, {from: accounts[4]});
		const uint256Zk03gtb = await YRX3hWKupHF.stake.call(uintpNz2yy, {from: accounts[4]});
		const uint256TioNe0T = await YRX3hWKupHF.balanceOf.call(addressLV6Luuz, {from: accounts[3]});
		const boolFP29maR = await YRX3hWKupHF.isOwner.call({from: accounts[4]});

		assert.equal(uint256hNowe4p, BigInt("0"))
		assert.equal(uint256lKJRIhC, BigInt("0"))
		await expect(YRX3hWKupHF.stake.call(uintpNz2yy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3oRvPMcc = await YRX3.new({from: accounts[3]});
		const uintjczMzi = BigInt("1756")
		const uint256t7GHZ8V = await YRX3oRvPMcc.withdraw.call(uintjczMzi, {from: accounts[0]});
		const uint256fuEInJk = await YRX3oRvPMcc.lastTimeRewardApplicable.call({from: accounts[5]});
		await YRX3oRvPMcc.exit.call({from: accounts[5]});

		await expect(YRX3oRvPMcc.withdraw.call(uintjczMzi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3hWKupHF = await YRX3.new({from: accounts[3]});
		const addressFHXKcnD = accounts[1]
		const uintRhvbrEo = BigInt("594")
		const uintYQNmObs = BigInt("406")
		const addresss7xuqSF = accounts[1]
		await YRX3hWKupHF.exit.call({from: accounts[3]});
		const uint256hNowe4p = await YRX3hWKupHF.rewardPerToken.call({from: accounts[2]});
		const uint256lKJRIhC = await YRX3hWKupHF.earned.call(addressFHXKcnD, {from: accounts[4]});
		const uint256csrM2J = await YRX3hWKupHF.withdraw.call(uintRhvbrEo, {from: accounts[2]});
		const uint256Zk03gtb = await YRX3hWKupHF.stake.call(uintYQNmObs, {from: accounts[4]});
		const uint256TioNe0T = await YRX3hWKupHF.balanceOf.call(addresss7xuqSF, {from: accounts[3]});
		const boolFP29maR = await YRX3hWKupHF.isOwner.call({from: accounts[4]});

		await expect(YRX3hWKupHF.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3wksyQRP = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVuRtaVq = accounts[2]
		const addressU5wbf6H = accounts[2]
		const uint256VjT404S = await YRX3wksyQRP.earned.call(addressVuRtaVq, {from: accounts[0]});
		await YRX3wksyQRP.checkStart.call({from: accounts[2]});
		await YRX3wksyQRP.checkStart.call({from: accounts[0]});
		const uint256tgJ2QY2 = await YRX3wksyQRP.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256Za1PI6I = await YRX3wksyQRP.balanceOf.call(addressU5wbf6H, {from: accounts[0]});
	});

	it('test for YRX3', async () => {
		const YRX3hWKupHF = await YRX3.new({from: accounts[3]});
		const uint43ED7F = BigInt("606")
		const addressSZNYyec = accounts[1]
		const uintMIOdGgF = BigInt("399")
		const addressedC4Ax3 = accounts[1]
		const addressddG5P8a = accounts[0]
		await YRX3hWKupHF.getReward.call({from: accounts[1]});
		const uint256DHt4CmU = await YRX3hWKupHF.withdraw.call(uint43ED7F, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lKJRIhC = await YRX3hWKupHF.earned.call(addressSZNYyec, {from: accounts[4]});
		const uint256Zk03gtb = await YRX3hWKupHF.stake.call(uintMIOdGgF, {from: accounts[4]});
		const uint256TioNe0T = await YRX3hWKupHF.balanceOf.call(addressedC4Ax3, {from: accounts[3]});
		const addressxQ4Ed8m = await YRX3hWKupHF.updateReward.call(addressddG5P8a, {from: accounts[4]});
		const boolFP29maR = await YRX3hWKupHF.isOwner.call({from: accounts[4]});

		await expect(YRX3hWKupHF.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3NG6tAR2 = await YRX3.new({from: accounts[1]});
		const addressVV6kdQa = accounts[1]
		const uintljxnWM0 = BigInt("1438")
		const uint256UvbHZLx = await YRX3NG6tAR2.earned.call(addressVV6kdQa, {from: accounts[3]});
		await YRX3NG6tAR2.renounceOwnership.call({from: accounts[1]});
		const uint256TnkiF1a = await YRX3NG6tAR2.withdraw.call(uintljxnWM0, {from: accounts[2]});

		assert.equal(uint256UvbHZLx, BigInt("0"))
		await expect(YRX3NG6tAR2.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3hWKupHF = await YRX3.new({from: accounts[3]});
		const addressG9sbvMt = accounts[2]
		const addressuSx5RD = accounts[1]
		const addressYhOQFb = accounts[1]
		const uintPlQ0MZE = BigInt("399")
		const addressYg4P2K2 = accounts[4]
		const addressojc9t2x = accounts[2]
		const addressTMYtWC1 = accounts[0]
		const uintKa1sCFk = BigInt("799")
		const addresst9NL1kP = accounts[1]
		const uint256zLUsenN = await YRX3hWKupHF.earned.call(addressG9sbvMt, {from: accounts[0]});
		const addressjwYUvmc = await YRX3hWKupHF.transferOwnership.call(addressuSx5RD, {from: accounts[3]});
		await YRX3hWKupHF.getReward.call({from: accounts[1]});
		const uint256lKJRIhC = await YRX3hWKupHF.earned.call(addressYhOQFb, {from: accounts[4]});
		const uint256Zk03gtb = await YRX3hWKupHF.stake.call(uintPlQ0MZE, {from: accounts[4]});
		const addressKOtuOX = await YRX3hWKupHF.emergencyDrain.call(addressYg4P2K2, {from: accounts[3]});
		const uint256TioNe0T = await YRX3hWKupHF.balanceOf.call(addressojc9t2x, {from: accounts[3]});
		const addressxQ4Ed8m = await YRX3hWKupHF.updateReward.call(addressTMYtWC1, {from: accounts[4]});
		await YRX3hWKupHF.getReward.call({from: accounts[2]});
		const uint256EeuHgh1 = await YRX3hWKupHF.stake.call(uintKa1sCFk, {from: "0x0000000000000000000000000000000000000001"});
		const addressFrPxRMd = await YRX3hWKupHF.emergencyDrain.call(addresst9NL1kP, {from: accounts[3]});
		const boolFP29maR = await YRX3hWKupHF.isOwner.call({from: accounts[4]});

		assert.equal(uint256zLUsenN, BigInt("0"))
		await expect(YRX3hWKupHF.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3iMaDXLV = await YRX3.new({from: accounts[1]});
		const addressZOirZVC = accounts[4]
		const addressrzKLDCY = accounts[5]
		const uintN7dANVw = BigInt("1487")
		await YRX3iMaDXLV.getReward.call({from: accounts[4]});
		const addressaLLz9Cq = await YRX3iMaDXLV.setRewardDistribution.call(addressZOirZVC, {from: accounts[1]});
		const uint256xJNlwUZ = await YRX3iMaDXLV.earned.call(addressrzKLDCY, {from: accounts[1]});
		const uint256lFIm1yZ = await YRX3iMaDXLV.stake.call(uintN7dANVw, {from: accounts[3]});
		await YRX3iMaDXLV.notifyRewardAmount.call({from: accounts[0]});

		await expect(YRX3iMaDXLV.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3hWKupHF = await YRX3.new({from: accounts[3]});
		const addressTPxf7DF = accounts[2]
		const addressuIX6HkP = accounts[1]
		const uintUdBFCxy = BigInt("399")
		const addresseoSdiYx = accounts[1]
		const addressFSsxnt = accounts[0]
		const uintvb7FaWk = BigInt("791")
		const uint256zLUsenN = await YRX3hWKupHF.earned.call(addressTPxf7DF, {from: accounts[0]});
		await YRX3hWKupHF.getReward.call({from: accounts[1]});
		const addressRy0fcLd = await YRX3hWKupHF.owner.call({from: accounts[4]});
		const uint256lKJRIhC = await YRX3hWKupHF.earned.call(addressuIX6HkP, {from: accounts[4]});
		const uint256Zk03gtb = await YRX3hWKupHF.stake.call(uintUdBFCxy, {from: accounts[4]});
		const uint256TioNe0T = await YRX3hWKupHF.balanceOf.call(addresseoSdiYx, {from: accounts[3]});
		const addressxQ4Ed8m = await YRX3hWKupHF.updateReward.call(addressFSsxnt, {from: accounts[4]});
		const uint256EeuHgh1 = await YRX3hWKupHF.stake.call(uintvb7FaWk, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZDU3aN9 = await YRX3hWKupHF.totalSupply.call({from: accounts[1]});
		const boolFP29maR = await YRX3hWKupHF.isOwner.call({from: accounts[4]});

		assert.equal(uint256zLUsenN, BigInt("0"))
		await expect(YRX3hWKupHF.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})