const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contracttQS7QW = await ERC20.new({from: accounts[5]});
		const valueJwKHecR = BigInt("488")
		const toslxP2dw = accounts[3]
		const valueYuMQXoV = BigInt("798")
		const spendereUp8a26 = accounts[2]
		const addedValuewfprk3t = BigInt("809")
		const spenderiAbLcPl = accounts[0]
		const nulliFQHCRR = await contracttQS7QW.transfer.call(toslxP2dw, valueJwKHecR, {from: accounts[0]});
		const null7x1TBl = await contracttQS7QW.approve.call(spendereUp8a26, valueYuMQXoV, {from: accounts[2]});
		const nullLZHqKC = await contracttQS7QW.increaseAllowance.call(spenderiAbLcPl, addedValuewfprk3t, {from: accounts[1]});

		await expect(contracttQS7QW.transfer.call(toslxP2dw, valueJwKHecR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractziEtt7S = await ERC20.new({from: accounts[3]});
		const spenderiz0ZrVG = accounts[0]
		const ownerd1BvNoI = accounts[4]
		const addedValueuqM5win = BigInt("1428")
		const spenderv4hBy7x = accounts[3]
		const nullQnqoOoQ = await contractziEtt7S.totalSupply.call({from: accounts[5]});
		const nullAuYYyPx = await contractziEtt7S.allowance.call(ownerd1BvNoI, spenderiz0ZrVG, {from: accounts[0]});
		const nullAXkWvgS = await contractziEtt7S.increaseAllowance.call(spenderv4hBy7x, addedValueuqM5win, {from: accounts[3]});

		assert.equal(nullAXkWvgS, true)
		assert.equal(nullAuYYyPx, 0)
		assert.equal(nullQnqoOoQ, 0)
	});

	it('test for ERC20', async () => {
		const contractLRaGhoq = await ERC20.new({from: accounts[3]});
		const valueaSRnUdh = BigInt("79")
		const toIVRmkSr = "0x0000000000000000000000000000000000000001"
		const fromk2b4Aft = accounts[0]
		const spenderDFamOj = accounts[2]
		const ownerCV38TuE = accounts[4]
		const valueUVxuv1 = BigInt("1304")
		const toMpXILm = accounts[1]
		const fromuJGxWY = accounts[3]
		const valueTbBuiky = BigInt("261")
		const toepBmBcg = accounts[3]
		const fromX0rMOf = accounts[4]
		const spenderRFbCJ9s = accounts[2]
		const ownerXw3aW2n = accounts[2]
		const nullUFwU9vt = await contractLRaGhoq.transferFrom.call(fromk2b4Aft, toIVRmkSr, valueaSRnUdh, {from: accounts[0]});
		const nullji7oDEm = await contractLRaGhoq.allowance.call(ownerCV38TuE, spenderDFamOj, {from: accounts[2]});
		const nullfEp1nuo = await contractLRaGhoq.transferFrom.call(fromuJGxWY, toMpXILm, valueUVxuv1, {from: accounts[2]});
		const nullKBH1yLu = await contractLRaGhoq.transferFrom.call(fromX0rMOf, toepBmBcg, valueTbBuiky, {from: "0x0000000000000000000000000000000000000001"});
		const nullk8XIBS = await contractLRaGhoq.allowance.call(ownerXw3aW2n, spenderRFbCJ9s, {from: accounts[3]});

		await expect(contractLRaGhoq.transferFrom.call(fromk2b4Aft, toIVRmkSr, valueaSRnUdh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracteK9wqCy = await ERC20.new({from: accounts[0]});
		const spenderHV8j6iw = accounts[4]
		const ownerWcQsGS9 = accounts[5]
		const addedValueI8VIY35 = BigInt("1861")
		const spenderon8bZC5 = accounts[2]
		const addedValuehucMN3J = BigInt("1808")
		const spenderB0WNPr3 = accounts[5]
		const valueGSq1mA1 = BigInt("592")
		const spenderjarU7AZ = accounts[0]
		const valueM5B3yvG = BigInt("1683")
		const spenderGJ75fr3 = accounts[4]
		const nullH90GkVS = await contracteK9wqCy.allowance.call(ownerWcQsGS9, spenderHV8j6iw, {from: accounts[1]});
		const nullJuoJutm = await contracteK9wqCy.increaseAllowance.call(spenderon8bZC5, addedValueI8VIY35, {from: accounts[4]});
		const nullOP67Puo = await contracteK9wqCy.increaseAllowance.call(spenderB0WNPr3, addedValuehucMN3J, {from: accounts[2]});
		const nullDDgDqEG = await contracteK9wqCy.approve.call(spenderjarU7AZ, valueGSq1mA1, {from: accounts[0]});
		const nulloeyR5y6 = await contracteK9wqCy.approve.call(spenderGJ75fr3, valueM5B3yvG, {from: accounts[0]});

		assert.equal(nullDDgDqEG, true)
		assert.equal(nullH90GkVS, 0)
		assert.equal(nullJuoJutm, true)
		assert.equal(nullOP67Puo, true)
		assert.equal(nulloeyR5y6, true)
	});

	it('test for ERC20', async () => {
		const contractwZtFg1b = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueiqmVRBJ = BigInt("1606")
		const toIm35PuG = accounts[4]
		const valuemUKJfb7 = BigInt("839")
		const tohRQtUxA = "0x0000000000000000000000000000000000000001"
		const valueanod1l2 = BigInt("1742")
		const toocJQBk8 = accounts[5]
		const valueIqqOkqD = BigInt("876")
		const spenderjRoNOYJ = accounts[1]
		const spenderngQ2Stu = accounts[2]
		const ownerdEjmlFB = accounts[4]
		const nulllah0SS0 = await contractwZtFg1b.totalSupply.call({from: accounts[4]});
		const nullhB5WUK7 = await contractwZtFg1b.transfer.call(toIm35PuG, valueiqmVRBJ, {from: accounts[2]});
		const nullyBDqWf = await contractwZtFg1b.transfer.call(tohRQtUxA, valuemUKJfb7, {from: accounts[1]});
		const nullnU9TtkM = await contractwZtFg1b.transfer.call(toocJQBk8, valueanod1l2, {from: accounts[5]});
		const nullHY6shIk = await contractwZtFg1b.approve.call(spenderjRoNOYJ, valueIqqOkqD, {from: accounts[4]});
		const nullDTBfcyZ = await contractwZtFg1b.allowance.call(ownerdEjmlFB, spenderngQ2Stu, {from: accounts[0]});
	});

	it('test for ERC20', async () => {
		const contractK2TcLIL = await ERC20.new({from: accounts[3]});
		const value9axWqo = BigInt("438")
		const spenderYPyDFG = accounts[3]
		const subtractedValueKuryF2c = BigInt("1498")
		const spenderQGYfaIS = "0x0000000000000000000000000000000000000001"
		const addedValuehRhjFf = BigInt("92")
		const spenderhPJ2mkr = accounts[3]
		const subtractedValuemG7GZpX = BigInt("886")
		const spenderwv6GiBa = accounts[0]
		const valueUEUDi4t = BigInt("150")
		const to7N120D = accounts[1]
		const fromq8dkrP = accounts[1]
		const valueDL9Dh8 = BigInt("1697")
		const spendere0HP8Js = accounts[3]
		const nulld1rGmu = await contractK2TcLIL.approve.call(spenderYPyDFG, value9axWqo, {from: accounts[5]});
		const nullZOr64yt = await contractK2TcLIL.decreaseAllowance.call(spenderQGYfaIS, subtractedValueKuryF2c, {from: accounts[3]});
		const nullj16eD2e = await contractK2TcLIL.increaseAllowance.call(spenderhPJ2mkr, addedValuehRhjFf, {from: accounts[1]});
		const nullSI5oe3 = await contractK2TcLIL.decreaseAllowance.call(spenderwv6GiBa, subtractedValuemG7GZpX, {from: accounts[1]});
		const nulluHFR8Gq = await contractK2TcLIL.transferFrom.call(fromq8dkrP, to7N120D, valueUEUDi4t, {from: accounts[4]});
		const nullcJ8ViQZ = await contractK2TcLIL.approve.call(spendere0HP8Js, valueDL9Dh8, {from: accounts[2]});

		assert.equal(nulld1rGmu, true)
		await expect(contractK2TcLIL.decreaseAllowance.call(spenderQGYfaIS, subtractedValueKuryF2c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractfR9Utii = await ERC20.new({from: accounts[0]});
		const valueQEd0EfY = BigInt("1932")
		const spenderx98gJUk = "0x0000000000000000000000000000000000000001"
		const owneraVfH1R = accounts[1]
		const ownerfbLQ3JQ = "0x0000000000000000000000000000000000000001"
		const spenderlz1zkFx = accounts[0]
		const ownerDsTNJIi = accounts[0]
		const nullo9OkPE5 = await contractfR9Utii.approve.call(spenderx98gJUk, valueQEd0EfY, {from: accounts[5]});
		const nullcoIGxpC = await contractfR9Utii.balanceOf.call(owneraVfH1R, {from: accounts[2]});
		const nullZVgupVx = await contractfR9Utii.balanceOf.call(ownerfbLQ3JQ, {from: accounts[2]});
		const nulla6RqHMj = await contractfR9Utii.allowance.call(ownerDsTNJIi, spenderlz1zkFx, {from: accounts[2]});

		assert.equal(nullZVgupVx, 0)
		assert.equal(nulla6RqHMj, 0)
		assert.equal(nullcoIGxpC, 0)
		assert.equal(nullo9OkPE5, true)
	});
})