const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractBUTby2r = await ERC20.new({from: accounts[3]});
		const valueaVgrh4y = BigInt("208")
		const torBmbQfY = accounts[5]
		const valueC0QUbZH = BigInt("1928")
		const spendernIYxSwL = "0x0000000000000000000000000000000000000001"
		const valuetEEwA6V = BigInt("798")
		const toMxObyc4 = accounts[1]
		const fromUu700v9 = accounts[0]
		const subtractedValueMf374hM = BigInt("1806")
		const spenderWkMy524 = accounts[1]
		const nulluYxCurQ = await contractBUTby2r.transfer.call(torBmbQfY, valueaVgrh4y, {from: accounts[3]});
		const nullCHNDQ4c = await contractBUTby2r.approve.call(spendernIYxSwL, valueC0QUbZH, {from: accounts[1]});
		const nullARIX2IB = await contractBUTby2r.transferFrom.call(fromUu700v9, toMxObyc4, valuetEEwA6V, {from: accounts[1]});
		const nullujqQelp = await contractBUTby2r.decreaseAllowance.call(spenderWkMy524, subtractedValueMf374hM, {from: accounts[4]});

		await expect(contractBUTby2r.transfer.call(torBmbQfY, valueaVgrh4y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractdZrt9Wy = await ERC20.new({from: accounts[0]});
		const addedValueHvbfRkH = BigInt("785")
		const spenderxtbgjm = accounts[2]
		const valueO31iIU4 = BigInt("1773")
		const toWd7L0hQ = accounts[5]
		const fromd3ogDIx = "0x0000000000000000000000000000000000000001"
		const ownertcp0T8W = accounts[4]
		const ownerRptjad5 = accounts[3]
		const nullXzigArS = await contractdZrt9Wy.increaseAllowance.call(spenderxtbgjm, addedValueHvbfRkH, {from: accounts[5]});
		const nullV5N53e = await contractdZrt9Wy.totalSupply.call({from: accounts[5]});
		const nullEscVQy = await contractdZrt9Wy.transferFrom.call(fromd3ogDIx, toWd7L0hQ, valueO31iIU4, {from: accounts[0]});
		const nullMYaahRa = await contractdZrt9Wy.balanceOf.call(ownertcp0T8W, {from: accounts[1]});
		const nullopalPnJ = await contractdZrt9Wy.balanceOf.call(ownerRptjad5, {from: accounts[1]});

		assert.equal(nullV5N53e, 0)
		assert.equal(nullXzigArS, true)
		await expect(contractdZrt9Wy.transferFrom.call(fromd3ogDIx, toWd7L0hQ, valueO31iIU4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractn6w3jN1 = await ERC20.new({from: accounts[0]});
		const ownervjkEhU = accounts[0]
		const valueI1cy68 = BigInt("1782")
		const spenderfmcmRvx = accounts[0]
		const spender7ZLm8Q = accounts[3]
		const ownerY79ikEn = "0x0000000000000000000000000000000000000001"
		const valuecCrUmpf = BigInt("1768")
		const toozCy3Di = accounts[1]
		const nullKwW1BCg = await contractn6w3jN1.balanceOf.call(ownervjkEhU, {from: accounts[4]});
		const nullPuJ2lgL = await contractn6w3jN1.approve.call(spenderfmcmRvx, valueI1cy68, {from: accounts[4]});
		const nullTm6mxW0 = await contractn6w3jN1.allowance.call(ownerY79ikEn, spender7ZLm8Q, {from: accounts[3]});
		const nullQQrrUTY = await contractn6w3jN1.transfer.call(toozCy3Di, valuecCrUmpf, {from: accounts[3]});

		assert.equal(nullKwW1BCg, 0)
		assert.equal(nullPuJ2lgL, true)
		assert.equal(nullTm6mxW0, 0)
		await expect(contractn6w3jN1.transfer.call(toozCy3Di, valuecCrUmpf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractz0kuSrc = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderOTw4he = accounts[3]
		const ownerBu5rvX2 = accounts[2]
		const valuej150sT0 = BigInt("382")
		const tofEhzuYl = accounts[0]
		const fromIjT6Edn = accounts[1]
		const valuebQOBxnA = BigInt("586")
		const spenderhapgWIO = accounts[1]
		const ownersA1kwsL = accounts[1]
		const valueMT17Aoc = BigInt("1654")
		const tou6hjVtr = accounts[3]
		const nullbP3mKk7 = await contractz0kuSrc.allowance.call(ownerBu5rvX2, spenderOTw4he, {from: accounts[3]});
		const nullcsK4126 = await contractz0kuSrc.transferFrom.call(fromIjT6Edn, tofEhzuYl, valuej150sT0, {from: accounts[5]});
		const nulleUvoQuV = await contractz0kuSrc.approve.call(spenderhapgWIO, valuebQOBxnA, {from: accounts[1]});
		const nullGAaAEod = await contractz0kuSrc.balanceOf.call(ownersA1kwsL, {from: accounts[4]});
		const nullVXatbgq = await contractz0kuSrc.transfer.call(tou6hjVtr, valueMT17Aoc, {from: accounts[3]});
	});

	it('test for ERC20', async () => {
		const contractouB9R1 = await ERC20.new({from: accounts[1]});
		const subtractedValuemJUFYPy = BigInt("905")
		const spenderb5xVhSv = accounts[0]
		const valueprpl19E = BigInt("1173")
		const spenderpInf1Y = accounts[2]
		const valuekcyQShN = BigInt("801")
		const toWLdKVSb = accounts[1]
		const spenderlWeywkg = accounts[4]
		const ownervwYaG8 = "0x0000000000000000000000000000000000000001"
		const valueA0YEnN4 = BigInt("1960")
		const tomNz6lbt = accounts[4]
		const fromUdyaNzJ = accounts[0]
		const nullKjWqaAH = await contractouB9R1.decreaseAllowance.call(spenderb5xVhSv, subtractedValuemJUFYPy, {from: accounts[1]});
		const nulley6wjBK = await contractouB9R1.approve.call(spenderpInf1Y, valueprpl19E, {from: accounts[3]});
		const nullA7eFbV = await contractouB9R1.transfer.call(toWLdKVSb, valuekcyQShN, {from: accounts[4]});
		const nullX8zSBNS = await contractouB9R1.allowance.call(ownervwYaG8, spenderlWeywkg, {from: accounts[4]});
		const nullVyqlUTj = await contractouB9R1.transferFrom.call(fromUdyaNzJ, tomNz6lbt, valueA0YEnN4, {from: accounts[5]});

		await expect(contractouB9R1.decreaseAllowance.call(spenderb5xVhSv, subtractedValuemJUFYPy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})