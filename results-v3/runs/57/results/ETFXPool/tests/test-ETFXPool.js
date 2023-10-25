const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolVL0t64y = await ETFXPool.new({from: accounts[4]});
		const addressvzgCnh6 = accounts[1]
		const uinteABdfBe = BigInt("1473")
		const addressdNrDzRg = accounts[3]
		const uint256zJg3bEk = await ETFXPoolVL0t64y.earned.call(addressvzgCnh6, {from: accounts[4]});
		await ETFXPoolVL0t64y.nonReentrant.call({from: accounts[5]});
		await ETFXPoolVL0t64y.getReward.call({from: accounts[3]});
		const booliSnNqVQ = await ETFXPoolVL0t64y.transfer.call(addressdNrDzRg, uinteABdfBe, {from: accounts[2]});

		await expect(ETFXPoolVL0t64y.earned.call(addressvzgCnh6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolNkW75c3 = await ETFXPool.new({from: accounts[2]});
		await ETFXPoolNkW75c3.renounceOwnership.call({from: accounts[5]});
		const addressqRb6ll = await ETFXPoolNkW75c3.owner.call({from: accounts[0]});
		const addresslRRtKRe = await ETFXPoolNkW75c3.owner.call({from: accounts[0]});
		await ETFXPoolNkW75c3.exit.call({from: accounts[2]});

		await expect(ETFXPoolNkW75c3.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolCF636AY = await ETFXPool.new({from: accounts[3]});
		const uintkFwBImJ = BigInt("1580")
		const addressfWMxz1s = accounts[5]
		const addressScKKW3r = accounts[5]
		await ETFXPoolCF636AY.getReward.call({from: accounts[0]});
		const boolElcOs1c = await ETFXPoolCF636AY.approve.call(addressfWMxz1s, uintkFwBImJ, {from: accounts[4]});
		const uint2565IJDPl = await ETFXPoolCF636AY.earned.call(addressScKKW3r, {from: accounts[5]});
		await ETFXPoolCF636AY.getReward.call({from: accounts[1]});

		await expect(ETFXPoolCF636AY.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringUIIMBS9 = "Iq3tJ2"
		const stringfGYb8oN = "Q8AIWFxAzXX3vDLlZCJV8N7jvsgvj7iNWTYHYpicwpve6ro9TNCG2aQOdGDDGNG1gyMi49fr3PTab8UMhhuTktCNdjO0mkXZG"
		const uintP9Xc5pG = BigInt("243")
		const ETFXPoolZpiHRPC = await ETFXPool.new(stringUIIMBS9, stringfGYb8oN, uintP9Xc5pG, {from: "0x0000000000000000000000000000000000000001"});
		const uintdviIqNU = BigInt("956")
		const addressdZqtHGf = accounts[0]
		const uintRH1hBYC = BigInt("1890")
		const addressuRVEZGl = accounts[4]
		const boolpX17sIz = await ETFXPoolZpiHRPC.decreaseAllowance.call(addressdZqtHGf, uintdviIqNU, {from: accounts[4]});
		const stringyyb7esX = await ETFXPoolZpiHRPC.name.call({from: accounts[2]});
		const uint256MR13ebu = await ETFXPoolZpiHRPC.rewardPerToken.call({from: accounts[3]});
		const addressWkGig85 = await ETFXPoolZpiHRPC.owner.call({from: accounts[4]});
		const boolAwocSN8 = await ETFXPoolZpiHRPC.transfer.call(addressuRVEZGl, uintRH1hBYC, {from: accounts[4]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUxpIfkD = await ETFXPool.new({from: accounts[2]});
		const addressjqmJtLv = "0x0000000000000000000000000000000000000001"
		const uintMJpEnBZ = BigInt("1211")
		const addressW5wZeLT = accounts[1]
		const uint2565KOJ0J = await ETFXPoolUxpIfkD.balanceOf.call(addressjqmJtLv, {from: accounts[2]});
		const boolXgjlFnx = await ETFXPoolUxpIfkD.transfer.call(addressW5wZeLT, uintMJpEnBZ, {from: accounts[0]});

		assert.equal(uint2565KOJ0J, BigInt("0"))
		await expect(ETFXPoolUxpIfkD.transfer.call(addressW5wZeLT, uintMJpEnBZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolemDef4M = await ETFXPool.new({from: accounts[2]});
		const uintMlWti88 = BigInt("1035")
		const uint8L9HsQ = BigInt("797")
		const addresso83bQi2 = accounts[0]
		const addressxlD8sZn = accounts[4]
		const uintVVg4Opi = BigInt("915")
		const uint256Yacj0za = await ETFXPoolemDef4M.stake.call(uintMlWti88, {from: "0x0000000000000000000000000000000000000001"});
		const boolE0sykgb = await ETFXPoolemDef4M.transferFrom.call(addressxlD8sZn, addresso83bQi2, uint8L9HsQ, {from: accounts[0]});
		const stringY5NlIMY = await ETFXPoolemDef4M.name.call({from: accounts[2]});
		const uint256Hhkfxuq = await ETFXPoolemDef4M.stake.call(uintVVg4Opi, {from: accounts[4]});

		await expect(ETFXPoolemDef4M.stake.call(uintMlWti88, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoola0EqAPX = await ETFXPool.new({from: accounts[3]});
		const uinthWol8ri = BigInt("1349")
		const addressuI2vF6m = accounts[2]
		const addressMrNKZ2N = accounts[3]
		const addressMrYlAbC = accounts[0]
		const boolaNJ6nPC = await ETFXPoola0EqAPX.increaseAllowance.call(addressuI2vF6m, uinthWol8ri, {from: "0x0000000000000000000000000000000000000001"});
		const addresssvHU8KP = await ETFXPoola0EqAPX.owner.call({from: accounts[3]});
		const uint256Uf6uU93 = await ETFXPoola0EqAPX.balanceOf.call(addressMrNKZ2N, {from: accounts[5]});
		const uint256YVe7wR = await ETFXPoola0EqAPX.earned.call(addressMrYlAbC, {from: accounts[4]});
		await ETFXPoola0EqAPX.nonReentrant.call({from: accounts[2]});

		assert.equal(addresssvHU8KP, 0x92186c03b82B3051a5499fba5bCc22Ede1976bC7)
		assert.equal(boolaNJ6nPC, true)
		assert.equal(uint256Uf6uU93, BigInt("0"))
		await expect(ETFXPoola0EqAPX.earned.call(addressMrYlAbC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool0vqFoK = await ETFXPool.new({from: accounts[4]});
		const uintIcE8bwb = BigInt("1966")
		const addresszbKtt9q = accounts[5]
		const uintIvxkCf = BigInt("282")
		const address0a3ka6 = accounts[3]
		const boolJMhdMct = await ETFXPool0vqFoK.increaseAllowance.call(addresszbKtt9q, uintIcE8bwb, {from: "0x0000000000000000000000000000000000000001"});
		const boolCWVzsCz = await ETFXPool0vqFoK.approve.call(address0a3ka6, uintIvxkCf, {from: accounts[4]});
		const uint256XmmvgZn = await ETFXPool0vqFoK.rewardPerToken.call({from: accounts[4]});

		assert.equal(boolCWVzsCz, true)
		assert.equal(boolJMhdMct, true)
		assert.equal(uint256XmmvgZn, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleKqLlwK = await ETFXPool.new({from: accounts[3]});
		const uintPQM4OB2 = BigInt("1951")
		const addresswnhpe5N = accounts[0]
		const addressANLYhRX = accounts[3]
		const addressr1rcjB8 = accounts[5]
		const uintBWOVFL9 = BigInt("1599")
		const boolNYwv2AU = await ETFXPooleKqLlwK.decreaseAllowance.call(addresswnhpe5N, uintPQM4OB2, {from: accounts[2]});
		await ETFXPooleKqLlwK.onlyOwner.call({from: accounts[3]});
		const uint256EjWqwC = await ETFXPooleKqLlwK.earned.call(addressANLYhRX, {from: accounts[3]});
		const uint256h8HRNQ = await ETFXPooleKqLlwK.earned.call(addressr1rcjB8, {from: accounts[0]});
		await ETFXPooleKqLlwK.renounceOwnership.call({from: accounts[4]});
		const uint2562FtlKC = await ETFXPooleKqLlwK.withdraw.call(uintBWOVFL9, {from: accounts[2]});

		await expect(ETFXPooleKqLlwK.decreaseAllowance.call(addresswnhpe5N, uintPQM4OB2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleKqLlwK = await ETFXPool.new({from: accounts[3]});
		const addressJHd8Sm2 = accounts[3]
		const addressHIhdKCH = accounts[6]
		const uintGIhz5e3 = BigInt("1599")
		await ETFXPooleKqLlwK.onlyOwner.call({from: accounts[3]});
		const uint256EjWqwC = await ETFXPooleKqLlwK.earned.call(addressJHd8Sm2, {from: accounts[3]});
		const uint256h8HRNQ = await ETFXPooleKqLlwK.earned.call(addressHIhdKCH, {from: accounts[0]});
		await ETFXPooleKqLlwK.renounceOwnership.call({from: accounts[4]});
		const uint2562FtlKC = await ETFXPooleKqLlwK.withdraw.call(uintGIhz5e3, {from: accounts[2]});

		await expect(ETFXPooleKqLlwK.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool0vqFoK = await ETFXPool.new({from: accounts[4]});
		const uintI8C2bfa = BigInt("297")
		const addressbVcNEfV = accounts[5]
		const boolJMhdMct = await ETFXPool0vqFoK.increaseAllowance.call(addressbVcNEfV, uintI8C2bfa, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPool0vqFoK.exit.call({from: accounts[0]});
		await ETFXPool0vqFoK.exit.call({from: accounts[2]});
		const uint256XmmvgZn = await ETFXPool0vqFoK.rewardPerToken.call({from: accounts[4]});

		assert.equal(boolJMhdMct, true)
		await expect(ETFXPool0vqFoK.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool0vqFoK = await ETFXPool.new({from: accounts[4]});
		const uintv5skSn4 = BigInt("297")
		const addressiTA5PdC = accounts[5]
		const boolJMhdMct = await ETFXPool0vqFoK.increaseAllowance.call(addressiTA5PdC, uintv5skSn4, {from: "0x0000000000000000000000000000000000000001"});
		const uint8la05S9 = await ETFXPool0vqFoK.decimals.call({from: accounts[1]});
		const uint256XmmvgZn = await ETFXPool0vqFoK.rewardPerToken.call({from: accounts[4]});

		assert.equal(boolJMhdMct, true)
		assert.equal(uint256XmmvgZn, BigInt("0"))
		assert.equal(uint8la05S9, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUxpIfkD = await ETFXPool.new({from: accounts[2]});
		const uintfBTj6JI = BigInt("1833")
		const addressqXyn8gb = accounts[0]
		const uinti7iZjeR = BigInt("1930")
		const uintLES7UzV = BigInt("1188")
		const addressQnW5C0P = accounts[1]
		const boolm9zT6Ol = await ETFXPoolUxpIfkD.approve.call(addressqXyn8gb, uintfBTj6JI, {from: accounts[1]});
		const uint256cizGYLV = await ETFXPoolUxpIfkD.withdraw.call(uinti7iZjeR, {from: accounts[1]});
		const boolXgjlFnx = await ETFXPoolUxpIfkD.transfer.call(addressQnW5C0P, uintLES7UzV, {from: accounts[0]});

		assert.equal(boolm9zT6Ol, true)
		await expect(ETFXPoolUxpIfkD.withdraw.call(uinti7iZjeR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolgHhUb6M = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintaKTfUzq = BigInt("685")
		const addressnqlPJUg = accounts[4]
		const addressJ8PCTJq = accounts[0]
		const addressmGjq7k4 = accounts[1]
		const stringEcegemA = await ETFXPoolgHhUb6M.symbol.call({from: accounts[5]});
		await ETFXPoolgHhUb6M.getReward.call({from: accounts[3]});
		const boolcVdfHx9 = await ETFXPoolgHhUb6M.increaseAllowance.call(addressnqlPJUg, uintaKTfUzq, {from: accounts[1]});
		const uint256wdZXgxy = await ETFXPoolgHhUb6M.allowance.call(addressmGjq7k4, addressJ8PCTJq, {from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUxpIfkD = await ETFXPool.new({from: accounts[2]});
		const uintDFeJBD = BigInt("1493")
		const addressb2H5BnY = accounts[2]
		const uinttrL3TCE = BigInt("1220")
		const addressqsZLp0j = accounts[1]
		const stringkAcMTjT = await ETFXPoolUxpIfkD.symbol.call({from: accounts[4]});
		const booldka5puF = await ETFXPoolUxpIfkD.increaseAllowance.call(addressb2H5BnY, uintDFeJBD, {from: accounts[3]});
		const boolXgjlFnx = await ETFXPoolUxpIfkD.transfer.call(addressqsZLp0j, uinttrL3TCE, {from: accounts[0]});
		const uint8jUMGIa = await ETFXPoolUxpIfkD.decimals.call({from: accounts[5]});

		assert.equal(booldka5puF, true)
		assert.equal(stringkAcMTjT, "FETFX")
		await expect(ETFXPoolUxpIfkD.transfer.call(addressqsZLp0j, uinttrL3TCE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPools5bEBXo = await ETFXPool.new({from: accounts[5]});
		const uintKzKDIek = BigInt("248")
		const addressVabq7V = accounts[1]
		const uintwmVkIZV = BigInt("534")
		const uintpkL0XIL = BigInt("892")
		const addressMecZmiZ = accounts[2]
		const stringFvjwYUZ = await ETFXPools5bEBXo.name.call({from: accounts[3]});
		await ETFXPools5bEBXo.nonReentrant.call({from: accounts[0]});
		const boollWl174m = await ETFXPools5bEBXo.approve.call(addressVabq7V, uintKzKDIek, {from: accounts[1]});
		const uint256oio6D4u = await ETFXPools5bEBXo.withdraw.call(uintwmVkIZV, {from: "0x0000000000000000000000000000000000000001"});
		const boolNcfKMZU = await ETFXPools5bEBXo.decreaseAllowance.call(addressMecZmiZ, uintpkL0XIL, {from: accounts[0]});

		assert.equal(stringFvjwYUZ, "ETFX-FARM")
		await expect(ETFXPools5bEBXo.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool0vqFoK = await ETFXPool.new({from: accounts[4]});
		const uintVFzyifg = BigInt("297")
		const addresssgIroaz = accounts[5]
		const uintZ2Fby3v = BigInt("327")
		const addresshBfm8TN = accounts[1]
		const addressrRaGXu = accounts[2]
		const boolJMhdMct = await ETFXPool0vqFoK.increaseAllowance.call(addresssgIroaz, uintVFzyifg, {from: "0x0000000000000000000000000000000000000001"});
		const boolxf6jS1C = await ETFXPool0vqFoK.transferFrom.call(addressrRaGXu, addresshBfm8TN, uintZ2Fby3v, {from: accounts[4]});
		const uint256XmmvgZn = await ETFXPool0vqFoK.rewardPerToken.call({from: accounts[4]});

		assert.equal(boolJMhdMct, true)
		await expect(ETFXPool0vqFoK.transferFrom.call(addressrRaGXu, addresshBfm8TN, uintZ2Fby3v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUxpIfkD = await ETFXPool.new({from: accounts[2]});
		const addresslNdsY51 = accounts[1]
		const addressyTlReoV = accounts[2]
		const uintnJzpAj = BigInt("1211")
		const addressX5Cv832 = accounts[2]
		const uint256XSuJR5W = await ETFXPoolUxpIfkD.allowance.call(addressyTlReoV, addresslNdsY51, {from: accounts[3]});
		const boolXgjlFnx = await ETFXPoolUxpIfkD.transfer.call(addressX5Cv832, uintnJzpAj, {from: accounts[0]});

		assert.equal(uint256XSuJR5W, BigInt("0"))
		await expect(ETFXPoolUxpIfkD.transfer.call(addressX5Cv832, uintnJzpAj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolQXwHFt = await ETFXPool.new({from: accounts[0]});
		const uintWIFqakq = BigInt("411")
		const addressB3nwYuv = "0x0000000000000000000000000000000000000001"
		const uintMD9yENY = BigInt("9")
		const addressAQ6syCh = accounts[0]
		const addressqaKpdoa = accounts[3]
		const addressJlT2Cae = await ETFXPoolQXwHFt.owner.call({from: accounts[1]});
		const boolLq4SW1D = await ETFXPoolQXwHFt.increaseAllowance.call(addressB3nwYuv, uintWIFqakq, {from: accounts[2]});
		await ETFXPoolQXwHFt.renounceOwnership.call({from: accounts[0]});
		const boollplEuOb = await ETFXPoolQXwHFt.decreaseAllowance.call(addressAQ6syCh, uintMD9yENY, {from: accounts[2]});
		const uint256uZGGn0l = await ETFXPoolQXwHFt.balanceOf.call(addressqaKpdoa, {from: accounts[1]});

		assert.equal(addressJlT2Cae, 0xB0150F910EA8F34d6f176AeB0ccdCd7735923573)
		assert.equal(boolLq4SW1D, true)
		await expect(ETFXPoolQXwHFt.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool0vqFoK = await ETFXPool.new({from: accounts[4]});
		const addressVDSv50s = accounts[1]
		const uintpEGUM0h = BigInt("1114")
		const addressiAp2pfv = accounts[0]
		const addressKDHxcY = "0x0000000000000000000000000000000000000001"
		const addressRUjsXV = await ETFXPool0vqFoK.transferOwnership.call(addressVDSv50s, {from: accounts[4]});
		const uint256XmmvgZn = await ETFXPool0vqFoK.rewardPerToken.call({from: accounts[4]});
		const uint256wXRNTif = await ETFXPool0vqFoK.totalSupply.call({from: accounts[5]});
		const boolUBs7gyG = await ETFXPool0vqFoK.transferFrom.call(addressKDHxcY, addressiAp2pfv, uintpEGUM0h, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256XmmvgZn, BigInt("0"))
		assert.equal(uint256wXRNTif, BigInt("0"))
		await expect(ETFXPool0vqFoK.transferFrom.call(addressKDHxcY, addressiAp2pfv, uintpEGUM0h, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})