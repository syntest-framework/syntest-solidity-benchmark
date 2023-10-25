const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractP99Gz1S = await ERC20.new({from: accounts[4]});
		const addedValueHSGOJH = BigInt("350")
		const spenderUvqLgOf = accounts[3]
		const subtractedValuevGKKv5A = BigInt("1547")
		const spenderKh8GeO0 = accounts[0]
		const valuel0ONkIS = BigInt("936")
		const toGdPKMlK = accounts[0]
		const addedValueWPHMjEB = BigInt("321")
		const spendernnJukpQ = accounts[5]
		const nullNt6dLQG = await contractP99Gz1S.increaseAllowance.call(spenderUvqLgOf, addedValueHSGOJH, {from: accounts[3]});
		const nullEsV841z = await contractP99Gz1S.decreaseAllowance.call(spenderKh8GeO0, subtractedValuevGKKv5A, {from: accounts[3]});
		const nullqoBpLNr = await contractP99Gz1S.transfer.call(toGdPKMlK, valuel0ONkIS, {from: accounts[0]});
		const nullHj7zR27 = await contractP99Gz1S.increaseAllowance.call(spendernnJukpQ, addedValueWPHMjEB, {from: accounts[0]});

		assert.equal(nullNt6dLQG, true)
		await expect(contractP99Gz1S.decreaseAllowance.call(spenderKh8GeO0, subtractedValuevGKKv5A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractrtoCXaP = await ERC20.new({from: accounts[3]});
		const spenderqJa9c53 = accounts[3]
		const ownervwngWGh = accounts[3]
		const spenderaTG674e = accounts[4]
		const ownergIzO3kC = accounts[0]
		const addedValuebiaaA00 = BigInt("1622")
		const spendermK9TPuF = accounts[2]
		const addedValueP9ttl9L = BigInt("352")
		const spenderVsS9TZ = accounts[4]
		const nullgy1n6oJ = await contractrtoCXaP.totalSupply.call({from: accounts[0]});
		const nullQpfNYl = await contractrtoCXaP.allowance.call(ownervwngWGh, spenderqJa9c53, {from: accounts[4]});
		const nullpEaDJ02 = await contractrtoCXaP.allowance.call(ownergIzO3kC, spenderaTG674e, {from: accounts[3]});
		const nullz4FCQMK = await contractrtoCXaP.increaseAllowance.call(spendermK9TPuF, addedValuebiaaA00, {from: accounts[0]});
		const nullgHgOVva = await contractrtoCXaP.increaseAllowance.call(spenderVsS9TZ, addedValueP9ttl9L, {from: accounts[3]});

		assert.equal(nullQpfNYl, 0)
		assert.equal(nullgHgOVva, true)
		assert.equal(nullgy1n6oJ, 0)
		assert.equal(nullpEaDJ02, 0)
		assert.equal(nullz4FCQMK, true)
	});

	it('test for ERC20', async () => {
		const contractybMdKUu = await ERC20.new({from: accounts[3]});
		const valueQ5l46WF = BigInt("1656")
		const spenderkALVE9 = accounts[0]
		const valueecBkuGN = BigInt("323")
		const tos8Ji2sh = accounts[3]
		const fromR42Oa5m = accounts[3]
		const addedValuesplhfcr = BigInt("252")
		const spenderLYVfi18 = accounts[2]
		const addedValueDppYbM0 = BigInt("98")
		const spenderZJtBhR = accounts[4]
		const valueU4skeFq = BigInt("466")
		const tosHg9zpR = accounts[3]
		const fromFrdo545 = "0x0000000000000000000000000000000000000001"
		const nullNxHdYTD = await contractybMdKUu.approve.call(spenderkALVE9, valueQ5l46WF, {from: accounts[2]});
		const nulloDziSVT = await contractybMdKUu.transferFrom.call(fromR42Oa5m, tos8Ji2sh, valueecBkuGN, {from: accounts[3]});
		const nullDgQfK68 = await contractybMdKUu.increaseAllowance.call(spenderLYVfi18, addedValuesplhfcr, {from: accounts[1]});
		const nullcd9i1HU = await contractybMdKUu.increaseAllowance.call(spenderZJtBhR, addedValueDppYbM0, {from: accounts[0]});
		const nullKx4lvi8 = await contractybMdKUu.transferFrom.call(fromFrdo545, tosHg9zpR, valueU4skeFq, {from: accounts[4]});

		assert.equal(nullNxHdYTD, true)
		await expect(contractybMdKUu.transferFrom.call(fromR42Oa5m, tos8Ji2sh, valueecBkuGN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractY6kgfXg = await ERC20.new({from: accounts[0]});
		const valuezLwCiqK = BigInt("796")
		const tokwKtw6S = accounts[4]
		const addedValuexpWhPDr = BigInt("25")
		const spenderHYskdPK = accounts[0]
		const spenderYEuLDo2 = "0x0000000000000000000000000000000000000001"
		const ownerDpuSyNW = "0x0000000000000000000000000000000000000001"
		const nulln2iz3L = await contractY6kgfXg.transfer.call(tokwKtw6S, valuezLwCiqK, {from: accounts[2]});
		const nullICNWdZt = await contractY6kgfXg.increaseAllowance.call(spenderHYskdPK, addedValuexpWhPDr, {from: accounts[1]});
		const nullwidqyns = await contractY6kgfXg.allowance.call(ownerDpuSyNW, spenderYEuLDo2, {from: accounts[0]});

		await expect(contractY6kgfXg.transfer.call(tokwKtw6S, valuezLwCiqK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractJmgHKZ5 = await ERC20.new({from: accounts[0]});
		const spenderYL0FQB2 = accounts[3]
		const ownerMj9oZH = accounts[1]
		const ownerIM5DI1 = accounts[0]
		const valueEZ7zTwa = BigInt("1668")
		const toHZeKIdf = accounts[1]
		const nullDeBuaqp = await contractJmgHKZ5.allowance.call(ownerMj9oZH, spenderYL0FQB2, {from: accounts[2]});
		const nulljyiX6ie = await contractJmgHKZ5.balanceOf.call(ownerIM5DI1, {from: accounts[5]});
		const nullJrjiwM = await contractJmgHKZ5.transfer.call(toHZeKIdf, valueEZ7zTwa, {from: accounts[1]});
		const nullMeGu2Dr = await contractJmgHKZ5.totalSupply.call({from: accounts[2]});

		assert.equal(nullDeBuaqp, 0)
		assert.equal(nulljyiX6ie, 0)
		await expect(contractJmgHKZ5.transfer.call(toHZeKIdf, valueEZ7zTwa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractu8uqDQy = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValueOeBjvr = BigInt("1074")
		const spenderVGxv20n = accounts[2]
		const valueFUb9pNb = BigInt("1231")
		const toDdeYTMt = accounts[0]
		const valuelra3gGX = BigInt("362")
		const toV5v62oK = accounts[0]
		const ownerBZJA7LL = accounts[2]
		const valueYyY3Ev9 = BigInt("1455")
		const toVJBsRM = accounts[2]
		const fromk0NLCe = accounts[2]
		const valueDSNSa6o = BigInt("1043")
		const spendervdyX63u = accounts[0]
		const nullqd7PSb8 = await contractu8uqDQy.increaseAllowance.call(spenderVGxv20n, addedValueOeBjvr, {from: accounts[4]});
		const nullqYt8pPK = await contractu8uqDQy.transfer.call(toDdeYTMt, valueFUb9pNb, {from: accounts[1]});
		const nullwBWrd3v = await contractu8uqDQy.transfer.call(toV5v62oK, valuelra3gGX, {from: accounts[2]});
		const nullQZ5neMe = await contractu8uqDQy.balanceOf.call(ownerBZJA7LL, {from: accounts[5]});
		const nullBjujw0B = await contractu8uqDQy.transferFrom.call(fromk0NLCe, toVJBsRM, valueYyY3Ev9, {from: accounts[2]});
		const nullHXqVu58 = await contractu8uqDQy.approve.call(spendervdyX63u, valueDSNSa6o, {from: accounts[4]});
	});
})