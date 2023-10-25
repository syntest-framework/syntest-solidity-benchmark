const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractK45FI0w = await ERC20.new({from: accounts[2]});
		const valueQEGmXrm = BigInt("1380")
		const spenderHaEcAdK = accounts[0]
		const addedValuefrdOua = BigInt("58")
		const spenderQGYqlU = accounts[0]
		const valuem0gC9zT = BigInt("1358")
		const tom9nDtcX = accounts[5]
		const nullNQOO6yS = await contractK45FI0w.totalSupply.call({from: accounts[1]});
		const nulloW1Kqa2 = await contractK45FI0w.totalSupply.call({from: accounts[0]});
		const nullftr4Erq = await contractK45FI0w.approve.call(spenderHaEcAdK, valueQEGmXrm, {from: accounts[3]});
		const nulli8FqlgK = await contractK45FI0w.increaseAllowance.call(spenderQGYqlU, addedValuefrdOua, {from: accounts[0]});
		const nullqbXkzkp = await contractK45FI0w.transfer.call(tom9nDtcX, valuem0gC9zT, {from: accounts[0]});

		assert.equal(nullNQOO6yS, 0)
		assert.equal(nullftr4Erq, true)
		assert.equal(nulli8FqlgK, true)
		assert.equal(nulloW1Kqa2, 0)
		await expect(contractK45FI0w.transfer.call(tom9nDtcX, valuem0gC9zT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractsRkTmS = await ERC20.new({from: accounts[2]});
		const spenderEWN4XGB = accounts[2]
		const ownerEhv8lG = accounts[0]
		const valuePrX7Rbf = BigInt("1086")
		const tojkwQtYK = accounts[0]
		const ownerzrwUwvO = accounts[3]
		const nullZj00N2L = await contractsRkTmS.allowance.call(ownerEhv8lG, spenderEWN4XGB, {from: accounts[1]});
		const nullgUNNV8Q = await contractsRkTmS.transfer.call(tojkwQtYK, valuePrX7Rbf, {from: accounts[4]});
		const nullwv1VuX6 = await contractsRkTmS.balanceOf.call(ownerzrwUwvO, {from: accounts[5]});

		assert.equal(nullZj00N2L, 0)
		await expect(contractsRkTmS.transfer.call(tojkwQtYK, valuePrX7Rbf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractQKbqKTE = await ERC20.new({from: accounts[0]});
		const valuesJ2QwcI = BigInt("1834")
		const toFsDkTxy = accounts[4]
		const fromlnkcLUB = accounts[1]
		const valueoArC3XT = BigInt("680")
		const spenderjZmKsZ = accounts[4]
		const valueENVUlOK = BigInt("12")
		const spenderBj1FGrP = accounts[5]
		const owneraJ3RF9V = accounts[2]
		const nulldr11N6p = await contractQKbqKTE.transferFrom.call(fromlnkcLUB, toFsDkTxy, valuesJ2QwcI, {from: accounts[2]});
		const nullzvVK8jc = await contractQKbqKTE.approve.call(spenderjZmKsZ, valueoArC3XT, {from: accounts[3]});
		const nulltO1bqYX = await contractQKbqKTE.approve.call(spenderBj1FGrP, valueENVUlOK, {from: accounts[3]});
		const nullk5LzC5K = await contractQKbqKTE.balanceOf.call(owneraJ3RF9V, {from: accounts[2]});

		await expect(contractQKbqKTE.transferFrom.call(fromlnkcLUB, toFsDkTxy, valuesJ2QwcI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractZU8ieg2 = await ERC20.new({from: accounts[3]});
		const ownerLWsxj6M = accounts[0]
		const valueqCH10om = BigInt("832")
		const toCmexc3 = accounts[0]
		const fromn6o8lBi = accounts[4]
		const valueOziCl1H = BigInt("649")
		const toeejKpWo = accounts[1]
		const fromUgxXZ4x = accounts[4]
		const nulls26SKxY = await contractZU8ieg2.balanceOf.call(ownerLWsxj6M, {from: accounts[3]});
		const nullmrRgUmh = await contractZU8ieg2.transferFrom.call(fromn6o8lBi, toCmexc3, valueqCH10om, {from: accounts[2]});
		const nullXhAPYry = await contractZU8ieg2.transferFrom.call(fromUgxXZ4x, toeejKpWo, valueOziCl1H, {from: accounts[4]});

		assert.equal(nulls26SKxY, 0)
		await expect(contractZU8ieg2.transferFrom.call(fromn6o8lBi, toCmexc3, valueqCH10om, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractdc8HGP = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderILABm5 = accounts[4]
		const owneroOxUnjV = accounts[4]
		const addedValuexTJRN5 = BigInt("1201")
		const spenderay0EXyP = accounts[3]
		const valueNZvd5hM = BigInt("488")
		const toUE503sV = accounts[2]
		const from8CtmJm = accounts[3]
		const ownerlat8rgY = "0x0000000000000000000000000000000000000001"
		const nullsBat4sZ = await contractdc8HGP.allowance.call(owneroOxUnjV, spenderILABm5, {from: accounts[4]});
		const nullCZyfhvO = await contractdc8HGP.increaseAllowance.call(spenderay0EXyP, addedValuexTJRN5, {from: accounts[1]});
		const nullwxHag57 = await contractdc8HGP.transferFrom.call(from8CtmJm, toUE503sV, valueNZvd5hM, {from: accounts[3]});
		const nullPWWFkE = await contractdc8HGP.balanceOf.call(ownerlat8rgY, {from: accounts[5]});
	});

	it('test for ERC20', async () => {
		const contractATtLLL4 = await ERC20.new({from: accounts[2]});
		const subtractedValuenASCh5H = BigInt("626")
		const spenderH71J2lH = accounts[4]
		const valueBO3LVGY = BigInt("300")
		const spenderYtkfspy = accounts[4]
		const ownerLOVw32J = accounts[2]
		const nullE0hQlG3 = await contractATtLLL4.decreaseAllowance.call(spenderH71J2lH, subtractedValuenASCh5H, {from: accounts[3]});
		const nulltfqSxTQ = await contractATtLLL4.approve.call(spenderYtkfspy, valueBO3LVGY, {from: accounts[5]});
		const nullRA8L5h = await contractATtLLL4.balanceOf.call(ownerLOVw32J, {from: "0x0000000000000000000000000000000000000001"});
		const nulligQEvP8 = await contractATtLLL4.totalSupply.call({from: accounts[2]});
		const nullFLuLLiC = await contractATtLLL4.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractATtLLL4.decreaseAllowance.call(spenderH71J2lH, subtractedValuenASCh5H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})