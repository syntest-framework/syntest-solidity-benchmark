const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const stringtojHxo2 = "oIHbnfvUSJoX9NEtKHJUGbNTBe5G"
		const stringuoVAiFm = "IxKQBDd23iv6DngjixYaIIgkdmw5lF6TQFLoaM"
		const uintZ7CsbdV = BigInt("91")
		const ETFXPoolYysnSJX = await ETFXPool.new(stringtojHxo2, stringuoVAiFm, uintZ7CsbdV, {from: accounts[1]});
		const addressSMdF6bx = accounts[2]
		const uintzWsHEI = BigInt("722")
		const addressjVaUf74 = accounts[2]
		const addressXyKtnHW = accounts[4]
		const addressPMOxEIw = accounts[4]
		const uint256bc8Ciu = await ETFXPoolYysnSJX.balanceOf.call(addressSMdF6bx, {from: accounts[1]});
		const boolwropFRo = await ETFXPoolYysnSJX.transferFrom.call(addressXyKtnHW, addressjVaUf74, uintzWsHEI, {from: accounts[3]});
		const addressWAXhPBd = await ETFXPoolYysnSJX.owner.call({from: accounts[0]});
		const uint256XYbvfMa = await ETFXPoolYysnSJX.balanceOf.call(addressPMOxEIw, {from: accounts[2]});
		await ETFXPoolYysnSJX.exit.call({from: accounts[2]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolKsrsejW = await ETFXPool.new({from: accounts[0]});
		const uintozRyHoF = BigInt("1436")
		const addressHa8WtIf = accounts[4]
		const uintORRjsJe = BigInt("224")
		const addressz19Ojx = accounts[2]
		const addressQdX9yzE = accounts[0]
		const boolzHDbass = await ETFXPoolKsrsejW.increaseAllowance.call(addressHa8WtIf, uintozRyHoF, {from: accounts[2]});
		const addressupnaFzI = await ETFXPoolKsrsejW.owner.call({from: accounts[0]});
//		const boolao7rdd = await ETFXPoolKsrsejW.transfer.call(addressz19Ojx, uintORRjsJe, {from: accounts[5]});
//		await ETFXPoolKsrsejW.exit.call({from: accounts[5]});
//		const addressgiLsUOb = await ETFXPoolKsrsejW.transferOwnership.call(addressQdX9yzE, {from: accounts[0]});

		assert.equal(addressupnaFzI, 0x2c9c6786A5dc38eC9f51067a516Ff94fb3A7A9e4)
		assert.equal(boolzHDbass, true)
		await expect(ETFXPoolKsrsejW.transfer.call(addressz19Ojx, uintORRjsJe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolU7slQty = await ETFXPool.new({from: accounts[4]});
		const uintgTuTTrn = BigInt("931")
		const addressaHNePvk = accounts[3]
		const uintoqXa0z = BigInt("906")
		const uint256PhsYdDC = await ETFXPoolU7slQty.totalSupply.call({from: accounts[0]});
//		const uint256maDw2jd = await ETFXPoolU7slQty.stake.call(uintgTuTTrn, {from: accounts[0]});
//		const uint256LPHrrHe = await ETFXPoolU7slQty.earned.call(addressaHNePvk, {from: accounts[4]});
//		const uint256Bb3fsON = await ETFXPoolU7slQty.withdraw.call(uintoqXa0z, {from: accounts[4]});

		assert.equal(uint256PhsYdDC, BigInt("0"))
		await expect(ETFXPoolU7slQty.stake.call(uintgTuTTrn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolQFXYnc6 = await ETFXPool.new({from: accounts[0]});
		const addressRal8htk = accounts[2]
		const addressBymO6Vn = accounts[1]
		const addressHbMcKT = accounts[1]
		const addressdcJlb3Z = "0x0000000000000000000000000000000000000001"
		const uint256fTTSew7 = await ETFXPoolQFXYnc6.allowance.call(addressBymO6Vn, addressRal8htk, {from: accounts[2]});
		const uint256Wc3PM8I = await ETFXPoolQFXYnc6.allowance.call(addressdcJlb3Z, addressHbMcKT, {from: accounts[3]});
//		await ETFXPoolQFXYnc6.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256Wc3PM8I, BigInt("0"))
		assert.equal(uint256fTTSew7, BigInt("0"))
		await expect(ETFXPoolQFXYnc6.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolP4ImMVB = await ETFXPool.new({from: accounts[5]});
		const uint256HQftc0c = await ETFXPoolP4ImMVB.rewardPerToken.call({from: accounts[2]});
//		await ETFXPoolP4ImMVB.onlyOwner.call({from: accounts[2]});
//		const uint8cRcw9h4 = await ETFXPoolP4ImMVB.decimals.call({from: accounts[5]});

		assert.equal(uint256HQftc0c, BigInt("0"))
		await expect(ETFXPoolP4ImMVB.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGnaJsiW = await ETFXPool.new({from: accounts[3]});
		const uintaQbqT7y = BigInt("559")
		const addressklD2xEo = accounts[3]
		const addresspNYb8uI = accounts[0]
		const uintj4vxuoj = BigInt("1318")
		const addressnYnniX = accounts[2]
		const uintiE47glC = BigInt("1399")
		const addressuZWAdSw = accounts[2]
		const boolJ9XRRQ = await ETFXPoolGnaJsiW.approve.call(addressklD2xEo, uintaQbqT7y, {from: accounts[2]});
		const uint256xg70l4F = await ETFXPoolGnaJsiW.balanceOf.call(addresspNYb8uI, {from: accounts[0]});
		const boolsvgxjBL = await ETFXPoolGnaJsiW.approve.call(addressnYnniX, uintj4vxuoj, {from: accounts[2]});
		const booldCUuIca = await ETFXPoolGnaJsiW.approve.call(addressuZWAdSw, uintiE47glC, {from: accounts[0]});
//		await ETFXPoolGnaJsiW.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJ9XRRQ, true)
		assert.equal(booldCUuIca, true)
		assert.equal(boolsvgxjBL, true)
		assert.equal(uint256xg70l4F, BigInt("0"))
		await expect(ETFXPoolGnaJsiW.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleGKUfla = await ETFXPool.new({from: accounts[4]});
		const uintm5AJWgY = BigInt("190")
		const addressPnjQxIX = "0x0000000000000000000000000000000000000001"
//		const uint256gFXJquH = await ETFXPooleGKUfla.withdraw.call(uintm5AJWgY, {from: accounts[4]});
//		await ETFXPooleGKUfla.renounceOwnership.call({from: accounts[1]});
//		const uint8SCHHuG = await ETFXPooleGKUfla.decimals.call({from: accounts[1]});
//		const uint256RlERu3 = await ETFXPooleGKUfla.earned.call(addressPnjQxIX, {from: accounts[1]});

		await expect(ETFXPooleGKUfla.withdraw.call(uintm5AJWgY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolKsrsejW = await ETFXPool.new({from: accounts[0]});
		const uinthf6VI4 = BigInt("1436")
		const addressghdDTzc = accounts[4]
		const uintvEBObkM = BigInt("596")
		const addresshTVuZ8V = accounts[1]
		const addressjHe5kj = accounts[3]
		const uintH8Gwvd = BigInt("224")
		const addressEIJuysQ = accounts[2]
		const addresst27jdfK = accounts[0]
		const stringRibhIQI = await ETFXPoolKsrsejW.name.call({from: accounts[2]});
		const boolzHDbass = await ETFXPoolKsrsejW.increaseAllowance.call(addressghdDTzc, uinthf6VI4, {from: accounts[2]});
//		const boolGRhRZEI = await ETFXPoolKsrsejW.transferFrom.call(addressjHe5kj, addresshTVuZ8V, uintvEBObkM, {from: accounts[3]});
//		const addressupnaFzI = await ETFXPoolKsrsejW.owner.call({from: accounts[0]});
//		const boolao7rdd = await ETFXPoolKsrsejW.transfer.call(addressEIJuysQ, uintH8Gwvd, {from: accounts[5]});
//		const addressgiLsUOb = await ETFXPoolKsrsejW.transferOwnership.call(addresst27jdfK, {from: accounts[0]});

		assert.equal(boolzHDbass, true)
		assert.equal(stringRibhIQI, "ETFX-FARM")
		await expect(ETFXPoolKsrsejW.transferFrom.call(addressjHe5kj, addresshTVuZ8V, uintvEBObkM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolk3wMd8C = await ETFXPool.new({from: accounts[4]});
		const addressrRzk6ts = accounts[4]
		const addressWhRabbf = accounts[3]
		const addresscg5K6B3 = await ETFXPoolk3wMd8C.transferOwnership.call(addressrRzk6ts, {from: accounts[4]});
		const addresso1VuMrx = await ETFXPoolk3wMd8C.transferOwnership.call(addressWhRabbf, {from: accounts[4]});
		const uint8abICXCB = await ETFXPoolk3wMd8C.decimals.call({from: accounts[0]});

		assert.equal(uint8abICXCB, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolKsrsejW = await ETFXPool.new({from: accounts[0]});
		const uintfRlk3Ue = BigInt("1436")
		const addressnUvYNCU = accounts[4]
		const addresslpLe95c = accounts[0]
		const boolzHDbass = await ETFXPoolKsrsejW.increaseAllowance.call(addressnUvYNCU, uintfRlk3Ue, {from: accounts[2]});
		const addressupnaFzI = await ETFXPoolKsrsejW.owner.call({from: accounts[0]});
//		await ETFXPoolKsrsejW.exit.call({from: accounts[5]});
//		const addressgiLsUOb = await ETFXPoolKsrsejW.transferOwnership.call(addresslpLe95c, {from: accounts[0]});

		assert.equal(addressupnaFzI, 0x2c9c6786A5dc38eC9f51067a516Ff94fb3A7A9e4)
		assert.equal(boolzHDbass, true)
		await expect(ETFXPoolKsrsejW.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolP4ImMVB = await ETFXPool.new({from: accounts[5]});
		const uint256HQftc0c = await ETFXPoolP4ImMVB.rewardPerToken.call({from: accounts[2]});
		const stringYKtgoWD = await ETFXPoolP4ImMVB.symbol.call({from: accounts[5]});
//		await ETFXPoolP4ImMVB.onlyOwner.call({from: accounts[2]});
//		const addressNkAaAjO = await ETFXPoolP4ImMVB.owner.call({from: accounts[3]});
//		const uint8cRcw9h4 = await ETFXPoolP4ImMVB.decimals.call({from: accounts[5]});

		assert.equal(stringYKtgoWD, "FETFX")
		assert.equal(uint256HQftc0c, BigInt("0"))
		await expect(ETFXPoolP4ImMVB.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolkXxSDI = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLFjCex = BigInt("1135")
		const addresss1Qladg = accounts[3]
		const addressEwUF3Ng = await ETFXPoolkXxSDI.owner.call({from: accounts[3]});
		await ETFXPoolkXxSDI.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolkXxSDI.nonReentrant.call({from: accounts[3]});
		const addressmx0i5r3 = await ETFXPoolkXxSDI.owner.call({from: accounts[1]});
		const uint256QzAduBM = await ETFXPoolkXxSDI.totalSupply.call({from: accounts[4]});
		const boolmFRc4c = await ETFXPoolkXxSDI.decreaseAllowance.call(addresss1Qladg, uintLFjCex, {from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolyifUZng = await ETFXPool.new({from: accounts[4]});
		const addressgMQU86g = accounts[1]
		const addressMRU1Hpt = accounts[2]
		const uintl2D8xVK = BigInt("451")
		const uint8coGKtDC = await ETFXPoolyifUZng.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		await ETFXPoolyifUZng.renounceOwnership.call({from: accounts[4]});
//		const stringulkjjDW = await ETFXPoolyifUZng.symbol.call({from: accounts[4]});
//		const uint256qO2m22m = await ETFXPoolyifUZng.allowance.call(addressMRU1Hpt, addressgMQU86g, {from: accounts[5]});
//		await ETFXPoolyifUZng.getReward.call({from: accounts[0]});
//		const uint256p1MA7fZ = await ETFXPoolyifUZng.withdraw.call(uintl2D8xVK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8coGKtDC, BigInt("8"))
		await expect(ETFXPoolyifUZng.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolKsrsejW = await ETFXPool.new({from: accounts[0]});
		const uint5YgGnA = BigInt("1436")
		const addressWcjykW9 = accounts[4]
		const addresspzBFqCb = accounts[2]
		const uintd3TAxKu = BigInt("224")
		const addressexME92H = accounts[2]
		const uintYDtAaQo = BigInt("653")
		const addressn0JFfxB = accounts[0]
		const boolzHDbass = await ETFXPoolKsrsejW.increaseAllowance.call(addressWcjykW9, uint5YgGnA, {from: accounts[2]});
		const addressupnaFzI = await ETFXPoolKsrsejW.owner.call({from: accounts[0]});
//		await ETFXPoolKsrsejW.renounceOwnership.call({from: accounts[1]});
//		const addressZTjw9TX = await ETFXPoolKsrsejW.transferOwnership.call(addresspzBFqCb, {from: accounts[0]});
//		const boolao7rdd = await ETFXPoolKsrsejW.transfer.call(addressexME92H, uintd3TAxKu, {from: accounts[5]});
//		await ETFXPoolKsrsejW.exit.call({from: accounts[5]});
//		const uint256uAqcHN6 = await ETFXPoolKsrsejW.withdraw.call(uintYDtAaQo, {from: accounts[1]});
//		const addressgiLsUOb = await ETFXPoolKsrsejW.transferOwnership.call(addressn0JFfxB, {from: accounts[0]});

		assert.equal(addressupnaFzI, 0x2c9c6786A5dc38eC9f51067a516Ff94fb3A7A9e4)
		assert.equal(boolzHDbass, true)
		await expect(ETFXPoolKsrsejW.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGnaJsiW = await ETFXPool.new({from: accounts[3]});
		const uintxQQK2if = BigInt("559")
		const addresszNDGTw1 = accounts[3]
		const addressztocoex = accounts[0]
		const uinthPTSPN5 = BigInt("707")
		const addressOYBclYE = accounts[0]
		const uintivx6DAN = BigInt("1318")
		const addressV3uOf3B = accounts[2]
		const uintuQ1ElxL = BigInt("1399")
		const addressQq0KbJG = accounts[2]
		const boolJ9XRRQ = await ETFXPoolGnaJsiW.approve.call(addresszNDGTw1, uintxQQK2if, {from: accounts[2]});
		const uint256xg70l4F = await ETFXPoolGnaJsiW.balanceOf.call(addressztocoex, {from: accounts[0]});
//		const boolAjJjl2e = await ETFXPoolGnaJsiW.decreaseAllowance.call(addressOYBclYE, uinthPTSPN5, {from: accounts[3]});
//		const boolsvgxjBL = await ETFXPoolGnaJsiW.approve.call(addressV3uOf3B, uintivx6DAN, {from: accounts[2]});
//		const booldCUuIca = await ETFXPoolGnaJsiW.approve.call(addressQq0KbJG, uintuQ1ElxL, {from: accounts[0]});
//		await ETFXPoolGnaJsiW.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJ9XRRQ, true)
		assert.equal(uint256xg70l4F, BigInt("0"))
		await expect(ETFXPoolGnaJsiW.decreaseAllowance.call(addressOYBclYE, uinthPTSPN5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})