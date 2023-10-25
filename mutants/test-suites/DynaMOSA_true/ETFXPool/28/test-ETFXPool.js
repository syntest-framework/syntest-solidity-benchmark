const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolTQeTb1o = await ETFXPool.new({from: accounts[3]});
		const uintEXbQXmm = BigInt("1316")
		const addressMgcoP4i = accounts[2]
		const stringAIhkRhI = await ETFXPoolTQeTb1o.symbol.call({from: accounts[1]});
//		await ETFXPoolTQeTb1o.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolTQeTb1o.exit.call({from: accounts[0]});
//		const boolp3xiGJp = await ETFXPoolTQeTb1o.decreaseAllowance.call(addressMgcoP4i, uintEXbQXmm, {from: accounts[3]});
//		const stringpGjrLpC = await ETFXPoolTQeTb1o.name.call({from: accounts[4]});

		assert.equal(stringAIhkRhI, "FETFX")
		await expect(ETFXPoolTQeTb1o.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolixo6Wf = await ETFXPool.new({from: accounts[2]});
		const uintLbutrSY = BigInt("574")
		const addressPLUtzV2 = accounts[2]
//		const boolvVhLxUZ = await ETFXPoolixo6Wf.decreaseAllowance.call(addressPLUtzV2, uintLbutrSY, {from: accounts[1]});
//		await ETFXPoolixo6Wf.onlyOwner.call({from: accounts[2]});
//		const addressX4Gn9me = await ETFXPoolixo6Wf.owner.call({from: accounts[0]});
//		const uint256Feff2vp = await ETFXPoolixo6Wf.totalSupply.call({from: accounts[0]});
//		await ETFXPoolixo6Wf.renounceOwnership.call({from: accounts[0]});

		await expect(ETFXPoolixo6Wf.decreaseAllowance.call(addressPLUtzV2, uintLbutrSY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringwtFVIRV = "LazQrCHB164QQCv8EZVClXwnG0uGKsIPsdH"
		const stringSoU6U1m = "cw7a0wztH6Grs669ciuJAd9EY19VH5QWw2sOY4myUACuXKzFcYxeehBFbD6aL8eXsKGdPeXVm8s57wpwzVs0e2"
		const uintlJ0tHHq = BigInt("4")
		const ETFXPooleIow2us = await ETFXPool.new(stringwtFVIRV, stringSoU6U1m, uintlJ0tHHq, {from: accounts[3]});
		const uintsiiHBMi = BigInt("263")
		const addressZL7o8D = accounts[4]
		const addressngU7BSc = accounts[3]
		const boolFEfuBWa = await ETFXPooleIow2us.transfer.call(addressZL7o8D, uintsiiHBMi, {from: accounts[1]});
		await ETFXPooleIow2us.renounceOwnership.call({from: accounts[0]});
		await ETFXPooleIow2us.nonReentrant.call({from: accounts[3]});
		const addressGrNH6QC = await ETFXPooleIow2us.transferOwnership.call(addressngU7BSc, {from: accounts[2]});
		await ETFXPooleIow2us.renounceOwnership.call({from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVjyb1PJ = await ETFXPool.new({from: accounts[3]});
		const uint256I74h7yd = await ETFXPoolVjyb1PJ.rewardPerToken.call({from: accounts[4]});
//		await ETFXPoolVjyb1PJ.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256I74h7yd, BigInt("0"))
		await expect(ETFXPoolVjyb1PJ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUAqXlVF = await ETFXPool.new({from: accounts[2]});
		const uintueyc7N4 = BigInt("639")
		const addressiBkLj33 = accounts[2]
		const addressF37vT59 = accounts[3]
		const addressBFLD1X = accounts[2]
//		const boolBSndsK = await ETFXPoolUAqXlVF.transfer.call(addressiBkLj33, uintueyc7N4, {from: accounts[3]});
//		const uint256mMwsfR2 = await ETFXPoolUAqXlVF.allowance.call(addressBFLD1X, addressF37vT59, {from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolUAqXlVF.nonReentrant.call({from: accounts[3]});

		await expect(ETFXPoolUAqXlVF.transfer.call(addressiBkLj33, uintueyc7N4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPnGhGsd = await ETFXPool.new({from: accounts[3]});
		const addresspxM641I = accounts[3]
		const address92lrDT = accounts[1]
		const uint256lgNVhzl = await ETFXPoolPnGhGsd.allowance.call(address92lrDT, addresspxM641I, {from: accounts[2]});
		const stringb8BopGH = await ETFXPoolPnGhGsd.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolPnGhGsd.getReward.call({from: accounts[5]});
//		await ETFXPoolPnGhGsd.exit.call({from: accounts[2]});

		assert.equal(stringb8BopGH, "FETFX")
		assert.equal(uint256lgNVhzl, BigInt("0"))
		await expect(ETFXPoolPnGhGsd.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolC6ljQR = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintN8MKgIz = BigInt("833")
		const uintW1FemjW = BigInt("2010")
		const addresstAkhEQ7 = accounts[3]
		const uintXB5YKjr = BigInt("91")
		const addressCOQP024 = accounts[2]
		const uint256tjwFpc7 = await ETFXPoolC6ljQR.rewardPerToken.call({from: accounts[0]});
		const uint256KKmTrBf = await ETFXPoolC6ljQR.stake.call(uintN8MKgIz, {from: accounts[4]});
		const booloTKkOk = await ETFXPoolC6ljQR.decreaseAllowance.call(addresstAkhEQ7, uintW1FemjW, {from: accounts[4]});
		const uint256MXL8WOH = await ETFXPoolC6ljQR.stake.call(uintXB5YKjr, {from: accounts[3]});
		const uint256kswcsO = await ETFXPoolC6ljQR.earned.call(addressCOQP024, {from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTQeTb1o = await ETFXPool.new({from: accounts[3]});
		const uintYLzj6r9 = BigInt("1316")
		const addressu2kjnH5 = accounts[2]
		const stringAIhkRhI = await ETFXPoolTQeTb1o.symbol.call({from: accounts[1]});
//		await ETFXPoolTQeTb1o.exit.call({from: accounts[0]});
//		const boolp3xiGJp = await ETFXPoolTQeTb1o.decreaseAllowance.call(addressu2kjnH5, uintYLzj6r9, {from: accounts[3]});
//		const stringpGjrLpC = await ETFXPoolTQeTb1o.name.call({from: accounts[4]});

		assert.equal(stringAIhkRhI, "FETFX")
		await expect(ETFXPoolTQeTb1o.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVjyb1PJ = await ETFXPool.new({from: accounts[3]});
		const addressHo2yWj4 = accounts[5]
		const addressAammXrW = "0x0000000000000000000000000000000000000001"
		const uint256EN1ufkP = await ETFXPoolVjyb1PJ.allowance.call(addressAammXrW, addressHo2yWj4, {from: accounts[5]});
		const uint256bNGL877 = await ETFXPoolVjyb1PJ.totalSupply.call({from: accounts[2]});
		const uint256I74h7yd = await ETFXPoolVjyb1PJ.rewardPerToken.call({from: accounts[4]});
		const uint8ME1qWiI = await ETFXPoolVjyb1PJ.decimals.call({from: accounts[1]});
//		await ETFXPoolVjyb1PJ.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256EN1ufkP, BigInt("0"))
		assert.equal(uint256I74h7yd, BigInt("0"))
		assert.equal(uint256bNGL877, BigInt("0"))
		assert.equal(uint8ME1qWiI, BigInt("8"))
		await expect(ETFXPoolVjyb1PJ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolixo6Wf = await ETFXPool.new({from: accounts[2]});
		const uintLKMsdYS = BigInt("630")
		const uintRxI1E6 = BigInt("574")
		const addresseYEr6J = accounts[2]
		const addressNS06tBK = accounts[2]
//		const uint256vfj2U9W = await ETFXPoolixo6Wf.withdraw.call(uintLKMsdYS, {from: accounts[4]});
//		const boolvVhLxUZ = await ETFXPoolixo6Wf.decreaseAllowance.call(addresseYEr6J, uintRxI1E6, {from: accounts[1]});
//		await ETFXPoolixo6Wf.onlyOwner.call({from: accounts[5]});
//		const addressX4Gn9me = await ETFXPoolixo6Wf.owner.call({from: accounts[0]});
//		const uint256Feff2vp = await ETFXPoolixo6Wf.totalSupply.call({from: accounts[0]});
//		const addressQnmb1Mm = await ETFXPoolixo6Wf.transferOwnership.call(addressNS06tBK, {from: accounts[1]});
//		await ETFXPoolixo6Wf.renounceOwnership.call({from: accounts[0]});

		await expect(ETFXPoolixo6Wf.withdraw.call(uintLKMsdYS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPnGhGsd = await ETFXPool.new({from: accounts[3]});
		const addressOAIaJYp = accounts[3]
		const addressF5TNtZ9 = accounts[1]
		const addressmKi9r4O = accounts[4]
		const uintanmggg9 = BigInt("59")
		const addressogVUxcX = accounts[2]
		const uint256lgNVhzl = await ETFXPoolPnGhGsd.allowance.call(addressF5TNtZ9, addressOAIaJYp, {from: accounts[2]});
		const stringb8BopGH = await ETFXPoolPnGhGsd.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressYZ1SQWe = await ETFXPoolPnGhGsd.transferOwnership.call(addressmKi9r4O, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256uVaURP9 = await ETFXPoolPnGhGsd.withdraw.call(uintanmggg9, {from: accounts[4]});
//		await ETFXPoolPnGhGsd.getReward.call({from: accounts[5]});
//		const uint256oZYM0fH = await ETFXPoolPnGhGsd.earned.call(addressogVUxcX, {from: accounts[4]});
//		await ETFXPoolPnGhGsd.exit.call({from: accounts[2]});

		assert.equal(stringb8BopGH, "FETFX")
		assert.equal(uint256lgNVhzl, BigInt("0"))
		await expect(ETFXPoolPnGhGsd.transferOwnership.call(addressmKi9r4O, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPnGhGsd = await ETFXPool.new({from: accounts[3]});
		const addressvotmV0V = accounts[3]
		const addressNMa4tlP = accounts[2]
		const addressHNRmK5h = accounts[4]
		const address8JKZ48 = accounts[0]
		const uint256lgNVhzl = await ETFXPoolPnGhGsd.allowance.call(addressNMa4tlP, addressvotmV0V, {from: accounts[2]});
		const addressacKcolm = await ETFXPoolPnGhGsd.transferOwnership.call(addressHNRmK5h, {from: accounts[3]});
//		const uint256HamXVk = await ETFXPoolPnGhGsd.earned.call(address8JKZ48, {from: accounts[2]});
//		const stringb8BopGH = await ETFXPoolPnGhGsd.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolPnGhGsd.getReward.call({from: accounts[5]});
//		await ETFXPoolPnGhGsd.exit.call({from: accounts[2]});

		assert.equal(uint256lgNVhzl, BigInt("0"))
		await expect(ETFXPoolPnGhGsd.earned.call(address8JKZ48, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVjyb1PJ = await ETFXPool.new({from: accounts[3]});
		const uinteJvuIdN = BigInt("459")
		const addressW39vRdD = accounts[2]
		const uint256I74h7yd = await ETFXPoolVjyb1PJ.rewardPerToken.call({from: accounts[4]});
		const boolLqd969 = await ETFXPoolVjyb1PJ.approve.call(addressW39vRdD, uinteJvuIdN, {from: accounts[1]});
//		await ETFXPoolVjyb1PJ.onlyOwner.call({from: accounts[1]});

		assert.equal(boolLqd969, true)
		assert.equal(uint256I74h7yd, BigInt("0"))
		await expect(ETFXPoolVjyb1PJ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVjyb1PJ = await ETFXPool.new({from: accounts[3]});
		const addresstQKiMHJ = accounts[2]
		const uintBWPAKu = BigInt("1659")
		const addressvUpb7s4 = accounts[2]
		const addressd6HiQqV = accounts[2]
		const uint256I74h7yd = await ETFXPoolVjyb1PJ.rewardPerToken.call({from: accounts[4]});
		const addressabMWCwM = await ETFXPoolVjyb1PJ.transferOwnership.call(addresstQKiMHJ, {from: accounts[3]});
//		const boolqaMLsmj = await ETFXPoolVjyb1PJ.transferFrom.call(addressd6HiQqV, addressvUpb7s4, uintBWPAKu, {from: accounts[5]});
//		await ETFXPoolVjyb1PJ.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256I74h7yd, BigInt("0"))
		await expect(ETFXPoolVjyb1PJ.transferFrom.call(addressd6HiQqV, addressvUpb7s4, uintBWPAKu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVjyb1PJ = await ETFXPool.new({from: accounts[3]});
		const uinttxmyIm1 = BigInt("1977")
//		const uint256nhnZwa = await ETFXPoolVjyb1PJ.stake.call(uinttxmyIm1, {from: accounts[4]});
//		await ETFXPoolVjyb1PJ.onlyOwner.call({from: accounts[2]});
//		const uint256I74h7yd = await ETFXPoolVjyb1PJ.rewardPerToken.call({from: accounts[4]});

		await expect(ETFXPoolVjyb1PJ.stake.call(uinttxmyIm1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPnGhGsd = await ETFXPool.new({from: accounts[3]});
		const uintJ3DjD8U = BigInt("936")
		const addressAxL1m1G = accounts[2]
		const uinthXb1Pbf = BigInt("1142")
		const stringb8BopGH = await ETFXPoolPnGhGsd.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolI8gDFv4 = await ETFXPoolPnGhGsd.increaseAllowance.call(addressAxL1m1G, uintJ3DjD8U, {from: accounts[1]});
//		const uint256O5corfB = await ETFXPoolPnGhGsd.withdraw.call(uinthXb1Pbf, {from: accounts[2]});
//		await ETFXPoolPnGhGsd.getReward.call({from: accounts[5]});
//		await ETFXPoolPnGhGsd.exit.call({from: accounts[2]});

		assert.equal(boolI8gDFv4, true)
		assert.equal(stringb8BopGH, "FETFX")
		await expect(ETFXPoolPnGhGsd.withdraw.call(uinthXb1Pbf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPnGhGsd = await ETFXPool.new({from: accounts[3]});
		const addresspWAWsZK = accounts[3]
		const addressDjaYe94 = accounts[1]
		const stringssKdvE = await ETFXPoolPnGhGsd.name.call({from: accounts[3]});
		const uint256uJ9RFqz = await ETFXPoolPnGhGsd.totalSupply.call({from: accounts[5]});
		const uint256lgNVhzl = await ETFXPoolPnGhGsd.allowance.call(addressDjaYe94, addresspWAWsZK, {from: accounts[2]});
//		await ETFXPoolPnGhGsd.exit.call({from: accounts[2]});

		assert.equal(stringssKdvE, "ETFX-FARM")
		assert.equal(uint256lgNVhzl, BigInt("0"))
		assert.equal(uint256uJ9RFqz, BigInt("0"))
		await expect(ETFXPoolPnGhGsd.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVjyb1PJ = await ETFXPool.new({from: accounts[3]});
		const uint256I74h7yd = await ETFXPoolVjyb1PJ.rewardPerToken.call({from: accounts[4]});
		const addressKRQsm93 = await ETFXPoolVjyb1PJ.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressKRQsm93, 0x0a4ae49E2C83f5d8948Ee348F546d3bCdb246EF0)
		assert.equal(uint256I74h7yd, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolVjyb1PJ = await ETFXPool.new({from: accounts[3]});
//		await ETFXPoolVjyb1PJ.renounceOwnership.call({from: accounts[3]});
//		const uint256I74h7yd = await ETFXPoolVjyb1PJ.rewardPerToken.call({from: accounts[4]});

		await expect(ETFXPoolVjyb1PJ.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})