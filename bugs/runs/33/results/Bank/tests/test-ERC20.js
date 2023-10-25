const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractdFes6aS = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValuenQu25rj = BigInt("1747")
		const spenderhoLnUZp = accounts[4]
		const addedValued6H8j0 = BigInt("1104")
		const spenderUvoCp1p = accounts[4]
		const valueOO88oB = BigInt("894")
		const spendereHBxMCy = accounts[5]
		const nullDHmYo0 = await contractdFes6aS.increaseAllowance.call(spenderhoLnUZp, addedValuenQu25rj, {from: accounts[2]});
		const nulleP2mNAR = await contractdFes6aS.increaseAllowance.call(spenderUvoCp1p, addedValued6H8j0, {from: accounts[0]});
		const nullCwVKidF = await contractdFes6aS.approve.call(spendereHBxMCy, valueOO88oB, {from: accounts[3]});
	});

	it('test for ERC20', async () => {
		const contractyzkHw5D = await ERC20.new({from: accounts[1]});
		const valuev7HsxW = BigInt("300")
		const spenderhpolFAP = "0x0000000000000000000000000000000000000001"
		const valuehVuJUo = BigInt("986")
		const spenderqazZXmY = accounts[4]
		const valueY0vfEE3 = BigInt("1170")
		const tooyptu82 = accounts[0]
		const fromRGIU9pI = accounts[2]
		const subtractedValuex7EMGU5 = BigInt("979")
		const spenderPouqmv = accounts[0]
		const valuekGfYXKk = BigInt("1016")
		const toCbE084i = accounts[3]
		const fromx8UBNvL = accounts[2]
		const nullASv9PO = await contractyzkHw5D.approve.call(spenderhpolFAP, valuev7HsxW, {from: accounts[2]});
		const nullkALhskT = await contractyzkHw5D.approve.call(spenderqazZXmY, valuehVuJUo, {from: accounts[5]});
		const nullqrnFi50 = await contractyzkHw5D.transferFrom.call(fromRGIU9pI, tooyptu82, valueY0vfEE3, {from: accounts[1]});
		const nullm8qPoM9 = await contractyzkHw5D.decreaseAllowance.call(spenderPouqmv, subtractedValuex7EMGU5, {from: accounts[5]});
		const nullacYhBj5 = await contractyzkHw5D.transferFrom.call(fromx8UBNvL, toCbE084i, valuekGfYXKk, {from: accounts[3]});

		assert.equal(nullASv9PO, true)
		assert.equal(nullkALhskT, true)
		await expect(contractyzkHw5D.transferFrom.call(fromRGIU9pI, tooyptu82, valueY0vfEE3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractUeq4pnQ = await ERC20.new({from: accounts[0]});
		const spenderoCi7nnz = accounts[3]
		const ownerodgcfQk = accounts[2]
		const addedValuekKKRhc = BigInt("47")
		const spenderQHBI8M6 = accounts[0]
		const ownergd18UVK = accounts[0]
		const subtractedValueT6K5AQy = BigInt("496")
		const spenderYr9ArIE = "0x0000000000000000000000000000000000000001"
		const valuettGd8Pu = BigInt("551")
		const spenderk2TfOIU = accounts[4]
		const nullvlmj4ZW = await contractUeq4pnQ.allowance.call(ownerodgcfQk, spenderoCi7nnz, {from: accounts[5]});
		const nullYEruvEA = await contractUeq4pnQ.increaseAllowance.call(spenderQHBI8M6, addedValuekKKRhc, {from: accounts[4]});
		const nullkRQZdXQ = await contractUeq4pnQ.balanceOf.call(ownergd18UVK, {from: "0x0000000000000000000000000000000000000001"});
		const nullPQFn9zD = await contractUeq4pnQ.decreaseAllowance.call(spenderYr9ArIE, subtractedValueT6K5AQy, {from: accounts[5]});
		const nullHeUUlFt = await contractUeq4pnQ.approve.call(spenderk2TfOIU, valuettGd8Pu, {from: accounts[2]});

		assert.equal(nullYEruvEA, true)
		assert.equal(nullkRQZdXQ, 0)
		assert.equal(nullvlmj4ZW, 0)
		await expect(contractUeq4pnQ.decreaseAllowance.call(spenderYr9ArIE, subtractedValueT6K5AQy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractp92mdSP = await ERC20.new({from: accounts[2]});
		const valuedR5GT94 = BigInt("1720")
		const touslS9Pr = accounts[0]
		const addedValuefstsdgC = BigInt("1156")
		const spenderirnaSh = accounts[4]
		const valueo6iLn2f = BigInt("1784")
		const toAtRvEaj = accounts[4]
		const addedValuewSTNXlq = BigInt("1013")
		const spenderyZ4lx6p = "0x0000000000000000000000000000000000000001"
		const valueLatmqtv = BigInt("1676")
		const toKn3iO46 = "0x0000000000000000000000000000000000000001"
		const nullLJQkZwZ = await contractp92mdSP.transfer.call(touslS9Pr, valuedR5GT94, {from: accounts[1]});
		const nullIcSXY9 = await contractp92mdSP.increaseAllowance.call(spenderirnaSh, addedValuefstsdgC, {from: accounts[3]});
		const nullGOatHsv = await contractp92mdSP.transfer.call(toAtRvEaj, valueo6iLn2f, {from: accounts[3]});
		const nullEWSK1Px = await contractp92mdSP.increaseAllowance.call(spenderyZ4lx6p, addedValuewSTNXlq, {from: accounts[0]});
		const nullVgxztQf = await contractp92mdSP.transfer.call(toKn3iO46, valueLatmqtv, {from: accounts[1]});
		const nullz9uuYP4 = await contractp92mdSP.totalSupply.call({from: accounts[3]});

		await expect(contractp92mdSP.transfer.call(touslS9Pr, valuedR5GT94, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractOZBbm2h = await ERC20.new({from: accounts[0]});
		const valueZsIbjHB = BigInt("1653")
		const toK60QZ2L = accounts[4]
		const subtractedValueh1fmxJT = BigInt("1350")
		const spenderTda7oXp = accounts[1]
		const nullpEAg6XA = await contractOZBbm2h.totalSupply.call({from: accounts[4]});
		const nullaDJOW7q = await contractOZBbm2h.transfer.call(toK60QZ2L, valueZsIbjHB, {from: "0x0000000000000000000000000000000000000001"});
		const nullImQpPxX = await contractOZBbm2h.decreaseAllowance.call(spenderTda7oXp, subtractedValueh1fmxJT, {from: accounts[5]});

		assert.equal(nullpEAg6XA, 0)
		await expect(contractOZBbm2h.transfer.call(toK60QZ2L, valueZsIbjHB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})