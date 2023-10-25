const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractpi6Xaj = await ERC20.new({from: accounts[5]});
		const valuejvty4I0 = BigInt("1801")
		const toVKx2d52 = accounts[0]
		const fromFVqWcm4 = accounts[5]
		const ownerJSXvbwE = accounts[1]
		const ownersPTKe8q = accounts[1]
		const valueWRP002T = BigInt("1436")
		const towiBEvHx = accounts[0]
		const fromdbEzrCg = accounts[4]
		const nullkcxS5mO = await contractpi6Xaj.transferFrom.call(fromFVqWcm4, toVKx2d52, valuejvty4I0, {from: accounts[4]});
		const nulltUMUSyF = await contractpi6Xaj.balanceOf.call(ownerJSXvbwE, {from: accounts[3]});
		const nulliixPfW4 = await contractpi6Xaj.balanceOf.call(ownersPTKe8q, {from: accounts[3]});
		const nullljnAgm5 = await contractpi6Xaj.transferFrom.call(fromdbEzrCg, towiBEvHx, valueWRP002T, {from: accounts[5]});

		await expect(contractpi6Xaj.transferFrom.call(fromFVqWcm4, toVKx2d52, valuejvty4I0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractDy3R8x4 = await ERC20.new({from: accounts[2]});
		const addedValueuYYd0wc = BigInt("227")
		const spenderW1oJPe = accounts[2]
		const ownerw4fAOtb = accounts[4]
		const null1TZdQY = await contractDy3R8x4.increaseAllowance.call(spenderW1oJPe, addedValueuYYd0wc, {from: accounts[2]});
		const nullZsTbO9C = await contractDy3R8x4.balanceOf.call(ownerw4fAOtb, {from: accounts[4]});

		assert.equal(null1TZdQY, true)
		assert.equal(nullZsTbO9C, 0)
	});

	it('test for ERC20', async () => {
		const contractWgT82ZR = await ERC20.new({from: accounts[0]});
		const valueJVD0MF = BigInt("779")
		const tofPUVagO = accounts[0]
		const valueyz1hX8i = BigInt("1870")
		const toTqxbAoq = accounts[3]
		const fromdGBn0I = accounts[4]
		const valuesus4gsg = BigInt("1134")
		const toBZMIiMx = accounts[4]
		const valuebl6moqD = BigInt("816")
		const spenderBLCsL9M = accounts[1]
		const valuemtsLLiF = BigInt("1709")
		const toIRVfZz8 = accounts[2]
		const nully85lRaz = await contractWgT82ZR.totalSupply.call({from: accounts[0]});
		const nullA5vRwne = await contractWgT82ZR.transfer.call(tofPUVagO, valueJVD0MF, {from: accounts[3]});
		const nullrrWX7a = await contractWgT82ZR.transferFrom.call(fromdGBn0I, toTqxbAoq, valueyz1hX8i, {from: accounts[2]});
		const nullvAvqV3O = await contractWgT82ZR.transfer.call(toBZMIiMx, valuesus4gsg, {from: accounts[1]});
		const nullQ92jxG = await contractWgT82ZR.approve.call(spenderBLCsL9M, valuebl6moqD, {from: accounts[1]});
		const nullEiXHJJS = await contractWgT82ZR.transfer.call(toIRVfZz8, valuemtsLLiF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nully85lRaz, 0)
		await expect(contractWgT82ZR.transfer.call(tofPUVagO, valueJVD0MF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractvGGs6z = await ERC20.new({from: accounts[3]});
		const valueEXILWco = BigInt("1672")
		const spenderiJqgKSr = accounts[4]
		const spenderZUeVlLw = accounts[4]
		const ownerfKgrsH = accounts[4]
		const addedValueynpsQK = BigInt("1626")
		const spenderYzKV28l = accounts[0]
		const valueDkdcbX8 = BigInt("1837")
		const toWWO81y = "0x0000000000000000000000000000000000000001"
		const spenderf1T6ln = accounts[0]
		const ownerJDTQtq = accounts[0]
		const nullb5a4TQ = await contractvGGs6z.approve.call(spenderiJqgKSr, valueEXILWco, {from: accounts[3]});
		const nulluB6eih = await contractvGGs6z.allowance.call(ownerfKgrsH, spenderZUeVlLw, {from: accounts[1]});
		const nullxsIYF9d = await contractvGGs6z.increaseAllowance.call(spenderYzKV28l, addedValueynpsQK, {from: accounts[4]});
		const nullmoqG7sZ = await contractvGGs6z.transfer.call(toWWO81y, valueDkdcbX8, {from: accounts[2]});
		const nullPoK0C6u = await contractvGGs6z.allowance.call(ownerJDTQtq, spenderf1T6ln, {from: accounts[2]});

		assert.equal(nullb5a4TQ, true)
		assert.equal(nulluB6eih, 0)
		assert.equal(nullxsIYF9d, true)
		await expect(contractvGGs6z.transfer.call(toWWO81y, valueDkdcbX8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractQq0jIXD = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuecUrwg5H = BigInt("674")
		const spendergpwftbW = accounts[1]
		const valueRAGVh1 = BigInt("1181")
		const toDa19kWK = accounts[3]
		const fromgvHlHsJ = accounts[2]
		const ownerOgPyXJd = accounts[1]
		const nullMpQdOYF = await contractQq0jIXD.approve.call(spendergpwftbW, valuecUrwg5H, {from: accounts[3]});
		const nullm3Ypr7i = await contractQq0jIXD.transferFrom.call(fromgvHlHsJ, toDa19kWK, valueRAGVh1, {from: accounts[3]});
		const nullBDpges = await contractQq0jIXD.balanceOf.call(ownerOgPyXJd, {from: accounts[3]});
	});

	it('test for ERC20', async () => {
		const contractkkTiTas = await ERC20.new({from: accounts[2]});
		const addedValuesFeXLBm = BigInt("1125")
		const spenderE7E5mML = accounts[3]
		const spenderm2kNMUv = accounts[1]
		const ownerl0QTGwy = "0x0000000000000000000000000000000000000001"
		const subtractedValuex9Xdbg6 = BigInt("446")
		const spenderyL4jQge = accounts[2]
		const nullaVxK1BD = await contractkkTiTas.increaseAllowance.call(spenderE7E5mML, addedValuesFeXLBm, {from: accounts[0]});
		const nullQRC04p = await contractkkTiTas.allowance.call(ownerl0QTGwy, spenderm2kNMUv, {from: accounts[0]});
		const nullZtUfKV = await contractkkTiTas.decreaseAllowance.call(spenderyL4jQge, subtractedValuex9Xdbg6, {from: accounts[2]});

		assert.equal(nullQRC04p, 0)
		assert.equal(nullaVxK1BD, true)
		await expect(contractkkTiTas.decreaseAllowance.call(spenderyL4jQge, subtractedValuex9Xdbg6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})