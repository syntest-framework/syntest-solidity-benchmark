const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolU6vDUAT = await ETFXPool.new({from: accounts[0]});
		const uintURnEhhn = BigInt("1168")
		const addressMpTYkMA = accounts[5]
		const uintRR5ptws = BigInt("667")
		const boolSzMs5BX = await ETFXPoolU6vDUAT.decreaseAllowance.call(addressMpTYkMA, uintURnEhhn, {from: accounts[4]});
		const uint256IHYoqly = await ETFXPoolU6vDUAT.stake.call(uintRR5ptws, {from: accounts[4]});
		await ETFXPoolU6vDUAT.renounceOwnership.call({from: accounts[1]});
		await ETFXPoolU6vDUAT.renounceOwnership.call({from: accounts[1]});

		await expect(ETFXPoolU6vDUAT.decreaseAllowance.call(addressMpTYkMA, uintURnEhhn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolumlYbZ = await ETFXPool.new({from: accounts[2]});
		const uintSgwd6X8 = BigInt("1453")
		const addressCIHbN2F = accounts[2]
		const uintD0LRbrS = BigInt("1832")
		const addressKunlh4D = accounts[1]
		const uintlaTswqS = BigInt("1426")
		const address7mH6Lu = accounts[2]
		const boollieII6 = await ETFXPoolumlYbZ.increaseAllowance.call(addressCIHbN2F, uintSgwd6X8, {from: accounts[5]});
		const uint8cJXqgrg = await ETFXPoolumlYbZ.decimals.call({from: accounts[0]});
		const uint8EDqAteW = await ETFXPoolumlYbZ.decimals.call({from: accounts[3]});
		const boolaTdsBvC = await ETFXPoolumlYbZ.approve.call(addressKunlh4D, uintD0LRbrS, {from: accounts[3]});
		const boolnh5wdTQ = await ETFXPoolumlYbZ.approve.call(address7mH6Lu, uintlaTswqS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaTdsBvC, true)
		assert.equal(boollieII6, true)
		assert.equal(boolnh5wdTQ, true)
		assert.equal(uint8EDqAteW, BigInt("8"))
		assert.equal(uint8cJXqgrg, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolnxUkl6J = await ETFXPool.new({from: accounts[4]});
		const stringJ4CK7k = await ETFXPoolnxUkl6J.symbol.call({from: accounts[3]});
		const uint8kfgqJU = await ETFXPoolnxUkl6J.decimals.call({from: accounts[4]});

		assert.equal(stringJ4CK7k, "FETFX")
		assert.equal(uint8kfgqJU, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolog0blv = await ETFXPool.new({from: accounts[5]});
		const uintojvOkSJ = BigInt("164")
		const uintpR1qeRJ = BigInt("740")
		const addresseEC7hnE = accounts[2]
		const uint8w2pWkDk = await ETFXPoolog0blv.decimals.call({from: accounts[3]});
		const uint256N6wmLgt = await ETFXPoolog0blv.withdraw.call(uintojvOkSJ, {from: accounts[0]});
		const boolHFR2P6I = await ETFXPoolog0blv.approve.call(addresseEC7hnE, uintpR1qeRJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8w2pWkDk, BigInt("8"))
		await expect(ETFXPoolog0blv.withdraw.call(uintojvOkSJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBL0dUxY = await ETFXPool.new({from: accounts[0]});
		const uintwLJWxi6 = BigInt("1272")
		const addressBNLVV6H = accounts[5]
		const addressaVvLRdS = accounts[1]
		const uintwFkY2ar = BigInt("1003")
		const addressQWHYE6b = accounts[0]
		const addressrD0oqvU = accounts[0]
		const stringJn6gF7A = await ETFXPoolBL0dUxY.symbol.call({from: accounts[0]});
		const boolZIMxVN9 = await ETFXPoolBL0dUxY.transferFrom.call(addressaVvLRdS, addressBNLVV6H, uintwLJWxi6, {from: accounts[0]});
		const boolcwkU50R = await ETFXPoolBL0dUxY.transfer.call(addressQWHYE6b, uintwFkY2ar, {from: accounts[1]});
		const addressMhLMPiZ = await ETFXPoolBL0dUxY.transferOwnership.call(addressrD0oqvU, {from: accounts[1]});
		const stringBxiYXBs = await ETFXPoolBL0dUxY.symbol.call({from: accounts[0]});

		assert.equal(stringJn6gF7A, "FETFX")
		await expect(ETFXPoolBL0dUxY.transferFrom.call(addressaVvLRdS, addressBNLVV6H, uintwLJWxi6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTKLabEe = await ETFXPool.new({from: accounts[0]});
		const addressdi7LrJZ = accounts[4]
		const stringE22wFGN = await ETFXPoolTKLabEe.name.call({from: accounts[0]});
		const uint256WtIG9oF = await ETFXPoolTKLabEe.earned.call(addressdi7LrJZ, {from: accounts[1]});

		assert.equal(stringE22wFGN, "ETFX-FARM")
		await expect(ETFXPoolTKLabEe.earned.call(addressdi7LrJZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolYyRgiGh = await ETFXPool.new({from: accounts[5]});
		const uintbqCJVDp = BigInt("1081")
		const addressB00gOFe = accounts[2]
		const uintsWGUyrD = BigInt("862")
		const addressF9jNqNP = accounts[4]
		await ETFXPoolYyRgiGh.nonReentrant.call({from: accounts[5]});
		const uint256UuQ4ag = await ETFXPoolYyRgiGh.totalSupply.call({from: accounts[2]});
		const boolTXaUmx = await ETFXPoolYyRgiGh.decreaseAllowance.call(addressB00gOFe, uintbqCJVDp, {from: accounts[0]});
		const boolctW93mx = await ETFXPoolYyRgiGh.decreaseAllowance.call(addressF9jNqNP, uintsWGUyrD, {from: accounts[2]});
		const uint256HMWfs1m = await ETFXPoolYyRgiGh.totalSupply.call({from: accounts[3]});

		await expect(ETFXPoolYyRgiGh.nonReentrant.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvigIIi = await ETFXPool.new({from: accounts[4]});
		const uintRBtmVYA = BigInt("324")
		const addressj9TYknn = "0x0000000000000000000000000000000000000001"
		const uintrOlqSI4 = BigInt("2037")
		const addresseC7eBie = "0x0000000000000000000000000000000000000001"
		await ETFXPoolvigIIi.getReward.call({from: accounts[1]});
		const boolbXbda0O = await ETFXPoolvigIIi.transfer.call(addressj9TYknn, uintRBtmVYA, {from: "0x0000000000000000000000000000000000000001"});
		const addressKHekMiL = await ETFXPoolvigIIi.owner.call({from: accounts[0]});
		const boolFLN7Pu3 = await ETFXPoolvigIIi.transfer.call(addresseC7eBie, uintrOlqSI4, {from: accounts[3]});

		await expect(ETFXPoolvigIIi.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolzKPDxM = await ETFXPool.new({from: accounts[5]});
		const uintdPOqCp = BigInt("746")
		const addressmDznt20 = accounts[4]
		const addressojKjk23 = accounts[0]
		const uintJd8J0SF = BigInt("891")
		const addressdPW6puS = accounts[1]
		const addressjJuhmi9 = accounts[3]
		const boolxdVD49 = await ETFXPoolzKPDxM.increaseAllowance.call(addressmDznt20, uintdPOqCp, {from: accounts[3]});
		const stringyqaJoXx = await ETFXPoolzKPDxM.name.call({from: accounts[1]});
		await ETFXPoolzKPDxM.renounceOwnership.call({from: accounts[0]});
		const addresscFUx727 = await ETFXPoolzKPDxM.transferOwnership.call(addressojKjk23, {from: accounts[4]});
		const boolsiobQXz = await ETFXPoolzKPDxM.transferFrom.call(addressjJuhmi9, addressdPW6puS, uintJd8J0SF, {from: accounts[1]});

		assert.equal(boolxdVD49, true)
		assert.equal(stringyqaJoXx, "ETFX-FARM")
		await expect(ETFXPoolzKPDxM.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBL0dUxY = await ETFXPool.new({from: accounts[0]});
		const uintIBIf29 = BigInt("1995")
		const uintJ7ELZUh = BigInt("1272")
		const addressuFLVdWq = accounts[6]
		const addresspvShgv1 = accounts[1]
		const uintj748NW4 = BigInt("1003")
		const addressUAOVrej = accounts[0]
		const addressl0TjehW = accounts[0]
		const stringJn6gF7A = await ETFXPoolBL0dUxY.symbol.call({from: accounts[0]});
		const addressSqYOg7h = await ETFXPoolBL0dUxY.owner.call({from: accounts[1]});
		const uint256nW4IiCD = await ETFXPoolBL0dUxY.stake.call(uintIBIf29, {from: "0x0000000000000000000000000000000000000001"});
		const boolZIMxVN9 = await ETFXPoolBL0dUxY.transferFrom.call(addresspvShgv1, addressuFLVdWq, uintJ7ELZUh, {from: accounts[0]});
		const boolcwkU50R = await ETFXPoolBL0dUxY.transfer.call(addressUAOVrej, uintj748NW4, {from: accounts[1]});
		const addressMhLMPiZ = await ETFXPoolBL0dUxY.transferOwnership.call(addressl0TjehW, {from: accounts[1]});
		const stringBxiYXBs = await ETFXPoolBL0dUxY.symbol.call({from: accounts[0]});

		assert.equal(addressSqYOg7h, 0xef8245a3FD65346dC868B892593eCcA706b2f39e)
		assert.equal(stringJn6gF7A, "FETFX")
		await expect(ETFXPoolBL0dUxY.stake.call(uintIBIf29, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTKLabEe = await ETFXPool.new({from: accounts[0]});
		const uintWJ4RMSe = BigInt("529")
		const addressaCwiNPL = accounts[2]
		const addressiyab0mc = accounts[4]
		const addressQQ7iRMS = accounts[4]
		const boolWiek0Uc = await ETFXPoolTKLabEe.transfer.call(addressaCwiNPL, uintWJ4RMSe, {from: accounts[0]});
		const addressevoQJuD = await ETFXPoolTKLabEe.transferOwnership.call(addressiyab0mc, {from: accounts[0]});
		const stringE22wFGN = await ETFXPoolTKLabEe.name.call({from: accounts[0]});
		const uint256WtIG9oF = await ETFXPoolTKLabEe.earned.call(addressQQ7iRMS, {from: accounts[1]});

		await expect(ETFXPoolTKLabEe.transfer.call(addressaCwiNPL, uintWJ4RMSe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolU6vDUAT = await ETFXPool.new({from: accounts[0]});
		const addressTGk8rmL = accounts[0]
		const uintQahQki5 = BigInt("1168")
		const addressuNWA0Da = accounts[5]
		const uintlIdTpy = BigInt("667")
		const uintaqqzse = BigInt("522")
		const addressFunOIm5 = accounts[2]
		const addressB3NdVBc = await ETFXPoolU6vDUAT.transferOwnership.call(addressTGk8rmL, {from: accounts[0]});
		const boolSzMs5BX = await ETFXPoolU6vDUAT.decreaseAllowance.call(addressuNWA0Da, uintQahQki5, {from: accounts[4]});
		const uint256IHYoqly = await ETFXPoolU6vDUAT.stake.call(uintlIdTpy, {from: accounts[4]});
		await ETFXPoolU6vDUAT.renounceOwnership.call({from: accounts[1]});
		const boolm4VVpX8 = await ETFXPoolU6vDUAT.decreaseAllowance.call(addressFunOIm5, uintaqqzse, {from: accounts[3]});

		await expect(ETFXPoolU6vDUAT.decreaseAllowance.call(addressuNWA0Da, uintQahQki5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTKLabEe = await ETFXPool.new({from: accounts[0]});
		const stringE22wFGN = await ETFXPoolTKLabEe.name.call({from: accounts[0]});
		const uint2567aSGrf = await ETFXPoolTKLabEe.rewardPerToken.call({from: accounts[0]});

		assert.equal(stringE22wFGN, "ETFX-FARM")
		assert.equal(uint2567aSGrf, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTKLabEe = await ETFXPool.new({from: accounts[0]});
		const stringE22wFGN = await ETFXPoolTKLabEe.name.call({from: accounts[0]});
		await ETFXPoolTKLabEe.exit.call({from: accounts[2]});

		assert.equal(stringE22wFGN, "ETFX-FARM")
		await expect(ETFXPoolTKLabEe.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTKLabEe = await ETFXPool.new({from: accounts[0]});
		const addresskCxaeML = accounts[0]
		const addressRDIRKSu = accounts[4]
		const stringE22wFGN = await ETFXPoolTKLabEe.name.call({from: accounts[0]});
		const uint256qJnOWXK = await ETFXPoolTKLabEe.allowance.call(addressRDIRKSu, addresskCxaeML, {from: accounts[3]});
		await ETFXPoolTKLabEe.renounceOwnership.call({from: accounts[1]});

		assert.equal(stringE22wFGN, "ETFX-FARM")
		assert.equal(uint256qJnOWXK, BigInt("0"))
		await expect(ETFXPoolTKLabEe.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooltYpgysc = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOSnCKc2 = accounts[5]
		const uintbE8b8tq = BigInt("1438")
		await ETFXPooltYpgysc.onlyOwner.call({from: accounts[1]});
		await ETFXPooltYpgysc.renounceOwnership.call({from: accounts[0]});
		const uint256yshNqPo = await ETFXPooltYpgysc.balanceOf.call(addressOSnCKc2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Jl1oK2o = await ETFXPooltYpgysc.stake.call(uintbE8b8tq, {from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const stringRglDa6s = "35DpAWPdzqRdsiMbMs0NLq1bgXYLy7XyMNV5AkbnsJiLQZLyiSQteXh7L153cb6YJwU1MxDnPuG"
		const stringP43lbaR = "I7fBudlK6hzVO371sB2MgfiE9aaMnIvCEuUlaXe2Ds8hKHXm"
		const uintt6sESg8 = BigInt("77")
		const ETFXPoolju6v1h = await ETFXPool.new(stringRglDa6s, stringP43lbaR, uintt6sESg8, {from: accounts[0]});
		const uintKnx5NA = BigInt("1578")
		const addressmxOx161 = accounts[2]
		await ETFXPoolju6v1h.renounceOwnership.call({from: accounts[3]});
		const bool2bUvil = await ETFXPoolju6v1h.decreaseAllowance.call(addressmxOx161, uintKnx5NA, {from: accounts[2]});
		await ETFXPoolju6v1h.onlyOwner.call({from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTKLabEe = await ETFXPool.new({from: accounts[0]});
		const uint2567aSGrf = await ETFXPoolTKLabEe.rewardPerToken.call({from: accounts[0]});
		await ETFXPoolTKLabEe.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint2567aSGrf, BigInt("0"))
		await expect(ETFXPoolTKLabEe.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})