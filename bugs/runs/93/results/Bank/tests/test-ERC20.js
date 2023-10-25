const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractfFsXs50 = await ERC20.new({from: accounts[3]});
		const spendermXKMQac = accounts[3]
		const ownerjQOxsfo = accounts[2]
		const ownerDv3J7Ro = "0x0000000000000000000000000000000000000001"
		const valueDkI8w1N = BigInt("2015")
		const spenderPT0aQH = accounts[4]
		const valueBTaZvAZ = BigInt("1318")
		const spenderZSkf4dC = accounts[1]
		const valueHWSfeN = BigInt("211")
		const spenderFyveB5d = accounts[5]
		const nullNAN6ugR = await contractfFsXs50.allowance.call(ownerjQOxsfo, spendermXKMQac, {from: accounts[2]});
		const nullsKWakwB = await contractfFsXs50.balanceOf.call(ownerDv3J7Ro, {from: accounts[4]});
		const nullyHAstId = await contractfFsXs50.approve.call(spenderPT0aQH, valueDkI8w1N, {from: accounts[1]});
		const nullxH6bQVk = await contractfFsXs50.approve.call(spenderZSkf4dC, valueBTaZvAZ, {from: accounts[1]});
		const null87EIUz = await contractfFsXs50.approve.call(spenderFyveB5d, valueHWSfeN, {from: accounts[3]});

		assert.equal(null87EIUz, true)
		assert.equal(nullNAN6ugR, 0)
		assert.equal(nullsKWakwB, 0)
		assert.equal(nullxH6bQVk, true)
		assert.equal(nullyHAstId, true)
	});

	it('test for ERC20', async () => {
		const contractr5roMoK = await ERC20.new({from: accounts[0]});
		const addedValueN7YKQwq = BigInt("1475")
		const spenderun3hnbz = accounts[2]
		const valuezfMWPOV = BigInt("1572")
		const towePNJAc = accounts[4]
		const fromp1tyhlL = "0x0000000000000000000000000000000000000001"
		const valueP03IBYG = BigInt("1848")
		const tofJvPweE = accounts[1]
		const nulljN4HeUz = await contractr5roMoK.increaseAllowance.call(spenderun3hnbz, addedValueN7YKQwq, {from: accounts[5]});
		const nullMkJYD84 = await contractr5roMoK.totalSupply.call({from: accounts[5]});
		const nullmxPF5Vg = await contractr5roMoK.transferFrom.call(fromp1tyhlL, towePNJAc, valuezfMWPOV, {from: accounts[4]});
		const nullP4VqW8a = await contractr5roMoK.transfer.call(tofJvPweE, valueP03IBYG, {from: accounts[0]});

		assert.equal(nullMkJYD84, 0)
		assert.equal(nulljN4HeUz, true)
		await expect(contractr5roMoK.transferFrom.call(fromp1tyhlL, towePNJAc, valuezfMWPOV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractTYhS6kI = await ERC20.new({from: accounts[4]});
		const subtractedValuedyIMaTC = BigInt("524")
		const spendersj5Szws = accounts[2]
		const nullACvxX9R = await contractTYhS6kI.decreaseAllowance.call(spendersj5Szws, subtractedValuedyIMaTC, {from: accounts[0]});
		const nullX8zelz7 = await contractTYhS6kI.totalSupply.call({from: accounts[2]});

		await expect(contractTYhS6kI.decreaseAllowance.call(spendersj5Szws, subtractedValuedyIMaTC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractq0ivs5V = await ERC20.new({from: accounts[3]});
		const spendereP8x5f = accounts[0]
		const owneriB1VvJ = accounts[2]
		const valuemkAa5aY = BigInt("240")
		const toyLJHlMc = accounts[4]
		const valuew4cElRi = BigInt("511")
		const toG6W9344 = accounts[3]
		const subtractedValueOb30fnO = BigInt("2039")
		const spendertCPjyFZ = accounts[4]
		const nullA5fVB8L = await contractq0ivs5V.allowance.call(owneriB1VvJ, spendereP8x5f, {from: accounts[1]});
		const nulls6xYRZn = await contractq0ivs5V.transfer.call(toyLJHlMc, valuemkAa5aY, {from: accounts[2]});
		const nullpt49gyc = await contractq0ivs5V.transfer.call(toG6W9344, valuew4cElRi, {from: accounts[1]});
		const nullayFKFD = await contractq0ivs5V.decreaseAllowance.call(spendertCPjyFZ, subtractedValueOb30fnO, {from: accounts[2]});

		assert.equal(nullA5fVB8L, 0)
		await expect(contractq0ivs5V.transfer.call(toyLJHlMc, valuemkAa5aY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractFAcQuPJ = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueseiyrh = BigInt("1572")
		const totBPyEbu = accounts[5]
		const fromJJ1DfkE = accounts[0]
		const valuemoU7yDD = BigInt("1197")
		const toGuP5UAb = accounts[2]
		const fromd4YWQC3 = accounts[4]
		const valueEyALXh5 = BigInt("1597")
		const toipu7RsG = accounts[0]
		const fromZeVKhWz = accounts[0]
		const valuepQQWLQ = BigInt("65")
		const spenderL7M21M7 = "0x0000000000000000000000000000000000000001"
		const nullIe1PizA = await contractFAcQuPJ.transferFrom.call(fromJJ1DfkE, totBPyEbu, valueseiyrh, {from: accounts[3]});
		const nullzrdSJJ = await contractFAcQuPJ.transferFrom.call(fromd4YWQC3, toGuP5UAb, valuemoU7yDD, {from: accounts[4]});
		const nulljfBc6Qb = await contractFAcQuPJ.transferFrom.call(fromZeVKhWz, toipu7RsG, valueEyALXh5, {from: accounts[2]});
		const nullRVSz9K7 = await contractFAcQuPJ.approve.call(spenderL7M21M7, valuepQQWLQ, {from: accounts[0]});
	});
})