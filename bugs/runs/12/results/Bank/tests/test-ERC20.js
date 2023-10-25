const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractIvOLcjk = await ERC20.new({from: accounts[0]});
		const spenderDD9CQYZ = accounts[1]
		const ownerhY5V3E = accounts[1]
		const subtractedValueagVPJw2 = BigInt("409")
		const spendervnNMgiC = accounts[2]
		const ownerdyFq9Q = accounts[3]
		const valueKxMGkho = BigInt("692")
		const toJwBiat = "0x0000000000000000000000000000000000000001"
		const nulla9e9Vjw = await contractIvOLcjk.allowance.call(ownerhY5V3E, spenderDD9CQYZ, {from: accounts[4]});
		const nullJ5DfKje = await contractIvOLcjk.decreaseAllowance.call(spendervnNMgiC, subtractedValueagVPJw2, {from: accounts[1]});
		const nullOLVO8rA = await contractIvOLcjk.balanceOf.call(ownerdyFq9Q, {from: accounts[3]});
		const nullQntPnzx = await contractIvOLcjk.transfer.call(toJwBiat, valueKxMGkho, {from: accounts[1]});

		assert.equal(nulla9e9Vjw, 0)
		await expect(contractIvOLcjk.decreaseAllowance.call(spendervnNMgiC, subtractedValueagVPJw2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractHuxYETH = await ERC20.new({from: accounts[0]});
		const addedValueINjf9vQ = BigInt("1798")
		const spenderDo7g1Os = accounts[1]
		const addedValueIMAclXB = BigInt("1902")
		const spenderMBtZ4HR = accounts[0]
		const ownerTjMcHQk = accounts[4]
		const nulldiuRn4H = await contractHuxYETH.increaseAllowance.call(spenderDo7g1Os, addedValueINjf9vQ, {from: accounts[3]});
		const nullGdOjfWY = await contractHuxYETH.increaseAllowance.call(spenderMBtZ4HR, addedValueIMAclXB, {from: "0x0000000000000000000000000000000000000001"});
		const nullKIH3F14 = await contractHuxYETH.balanceOf.call(ownerTjMcHQk, {from: accounts[0]});

		assert.equal(nullGdOjfWY, true)
		assert.equal(nullKIH3F14, 0)
		assert.equal(nulldiuRn4H, true)
	});

	it('test for ERC20', async () => {
		const contractbWHTPiN = await ERC20.new({from: accounts[1]});
		const valueLyjIdkA = BigInt("1696")
		const tofuJQkCO = accounts[4]
		const spenderNHVsmqU = accounts[3]
		const ownerGY5oZgW = accounts[4]
		const valueNgPnGkm = BigInt("1192")
		const tos4v9JX2 = accounts[5]
		const valueayJvVq4 = BigInt("1761")
		const toXAefJ7S = accounts[4]
		const nulle1ny4at = await contractbWHTPiN.transfer.call(tofuJQkCO, valueLyjIdkA, {from: accounts[0]});
		const nullcbCtJHV = await contractbWHTPiN.allowance.call(ownerGY5oZgW, spenderNHVsmqU, {from: accounts[1]});
		const nullh8Wxq4E = await contractbWHTPiN.transfer.call(tos4v9JX2, valueNgPnGkm, {from: accounts[3]});
		const nullWKON70P = await contractbWHTPiN.transfer.call(toXAefJ7S, valueayJvVq4, {from: accounts[5]});

		await expect(contractbWHTPiN.transfer.call(tofuJQkCO, valueLyjIdkA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractFtTQPVN = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueQ2Z0rOa = BigInt("1447")
		const tohLAwwV = accounts[0]
		const fromNKiCAwA = accounts[3]
		const valuetu0Mjxp = BigInt("446")
		const spenderyEwkjsR = "0x0000000000000000000000000000000000000001"
		const spenderpGitjpW = accounts[2]
		const ownerWDT03Mo = accounts[0]
		const ownerrPRRWt6 = accounts[3]
		const ownerqW7fNtZ = accounts[3]
		const nullCQe8miQ = await contractFtTQPVN.transferFrom.call(fromNKiCAwA, tohLAwwV, valueQ2Z0rOa, {from: accounts[4]});
		const nullYCwwbip = await contractFtTQPVN.approve.call(spenderyEwkjsR, valuetu0Mjxp, {from: accounts[1]});
		const nulls8ylLQV = await contractFtTQPVN.allowance.call(ownerWDT03Mo, spenderpGitjpW, {from: accounts[4]});
		const nullrPHkop7 = await contractFtTQPVN.balanceOf.call(ownerrPRRWt6, {from: "0x0000000000000000000000000000000000000001"});
		const nullgjRULoC = await contractFtTQPVN.balanceOf.call(ownerqW7fNtZ, {from: accounts[3]});
	});

	it('test for ERC20', async () => {
		const contractoG5F7il = await ERC20.new({from: accounts[1]});
		const spenderacubcbT = accounts[0]
		const ownerdgvRXQa = "0x0000000000000000000000000000000000000001"
		const valueWLt2efa = BigInt("1769")
		const toAC9YccM = accounts[2]
		const fromNTLhaKb = accounts[2]
		const addedValueZGL25zW = BigInt("158")
		const spenderwQ9iwVG = accounts[3]
		const nullIcb58c0 = await contractoG5F7il.allowance.call(ownerdgvRXQa, spenderacubcbT, {from: accounts[1]});
		const nulln48GJ4j = await contractoG5F7il.transferFrom.call(fromNTLhaKb, toAC9YccM, valueWLt2efa, {from: accounts[3]});
		const nullxBh9y6p = await contractoG5F7il.totalSupply.call({from: accounts[5]});
		const nullgCAXXF3 = await contractoG5F7il.increaseAllowance.call(spenderwQ9iwVG, addedValueZGL25zW, {from: accounts[0]});

		assert.equal(nullIcb58c0, 0)
		await expect(contractoG5F7il.transferFrom.call(fromNTLhaKb, toAC9YccM, valueWLt2efa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractPxFKJkV = await ERC20.new({from: accounts[5]});
		const ownernHg7Gcb = accounts[0]
		const ownerUcQzcj = accounts[3]
		const ownerAIJ0p6B = accounts[2]
		const nullp6278N = await contractPxFKJkV.totalSupply.call({from: accounts[2]});
		const nullSBQ7CqM = await contractPxFKJkV.balanceOf.call(ownernHg7Gcb, {from: accounts[0]});
		const nullTeHqQi = await contractPxFKJkV.balanceOf.call(ownerUcQzcj, {from: accounts[2]});
		const nullVW2sxF = await contractPxFKJkV.balanceOf.call(ownerAIJ0p6B, {from: accounts[3]});

		assert.equal(nullSBQ7CqM, 0)
		assert.equal(nullTeHqQi, 0)
		assert.equal(nullVW2sxF, 0)
		assert.equal(nullp6278N, 0)
	});

	it('test for ERC20', async () => {
		const contract7K0csD = await ERC20.new({from: accounts[1]});
		const valuenoChtuy = BigInt("1566")
		const spenderJg3zLM = accounts[0]
		const spenderQ7mgpz = accounts[3]
		const ownerN9Yyj4z = accounts[4]
		const valuef5vZVsq = BigInt("1192")
		const tobwbRpi9 = accounts[5]
		const addedValuegwF8CCS = BigInt("519")
		const spenderac1iKui = "0x0000000000000000000000000000000000000001"
		const valueDgOlHiv = BigInt("1206")
		const toZPmi44 = accounts[4]
		const nullL6YU0gd = await contract7K0csD.approve.call(spenderJg3zLM, valuenoChtuy, {from: accounts[4]});
		const nullvyZnANV = await contract7K0csD.allowance.call(ownerN9Yyj4z, spenderQ7mgpz, {from: accounts[1]});
		const nullrJ7rhVa = await contract7K0csD.transfer.call(tobwbRpi9, valuef5vZVsq, {from: accounts[3]});
		const nullrLGK8mC = await contract7K0csD.increaseAllowance.call(spenderac1iKui, addedValuegwF8CCS, {from: accounts[1]});
		const nullJmg0Yd2 = await contract7K0csD.totalSupply.call({from: accounts[2]});
		const nullVDi0Iz5 = await contract7K0csD.transfer.call(toZPmi44, valueDgOlHiv, {from: accounts[5]});

		assert.equal(nullL6YU0gd, true)
		assert.equal(nullvyZnANV, 0)
		await expect(contract7K0csD.transfer.call(tobwbRpi9, valuef5vZVsq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})