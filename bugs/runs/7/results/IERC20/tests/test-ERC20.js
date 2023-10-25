const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractMy0d5Z3 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValueEspdBMh = BigInt("1619")
		const spendernE96yMn = accounts[3]
		const nullf3i3wXN = await contractMy0d5Z3.totalSupply.call({from: accounts[1]});
		const nullmllIwce = await contractMy0d5Z3.increaseAllowance.call(spendernE96yMn, addedValueEspdBMh, {from: accounts[4]});
	});

	it('test for ERC20', async () => {
		const contractWgRmP0m = await ERC20.new({from: accounts[3]});
		const addedValueWbbVDl6 = BigInt("1199")
		const spenderag4w7rE = accounts[2]
		const spendermVVDeG3 = accounts[4]
		const ownerE5TvqBH = accounts[1]
		const valueOuXip9H = BigInt("1192")
		const spenderayy5fj = accounts[0]
		const valueLQQQ2i = BigInt("2002")
		const toksCMiif = accounts[0]
		const nullRLUU3si = await contractWgRmP0m.increaseAllowance.call(spenderag4w7rE, addedValueWbbVDl6, {from: accounts[1]});
		const nullUauTYoJ = await contractWgRmP0m.allowance.call(ownerE5TvqBH, spendermVVDeG3, {from: accounts[3]});
		const nullGZizwfq = await contractWgRmP0m.approve.call(spenderayy5fj, valueOuXip9H, {from: accounts[0]});
		const nulllEUnEKc = await contractWgRmP0m.transfer.call(toksCMiif, valueLQQQ2i, {from: accounts[0]});

		assert.equal(nullGZizwfq, true)
		assert.equal(nullRLUU3si, true)
		assert.equal(nullUauTYoJ, 0)
		await expect(contractWgRmP0m.transfer.call(toksCMiif, valueLQQQ2i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractQq9PI7H = await ERC20.new({from: accounts[1]});
		const valueM9ghKd = BigInt("434")
		const topEBVEl = accounts[0]
		const fromrsuVZRl = accounts[2]
		const addedValueUnCjOnG = BigInt("914")
		const spenderLcz9moR = accounts[1]
		const valuew9j1Ba = BigInt("1487")
		const toqR4ZKT = accounts[1]
		const fromGpsU7vm = accounts[1]
		const nullmOiOED = await contractQq9PI7H.transferFrom.call(fromrsuVZRl, topEBVEl, valueM9ghKd, {from: accounts[2]});
		const nullRqOHW3N = await contractQq9PI7H.increaseAllowance.call(spenderLcz9moR, addedValueUnCjOnG, {from: accounts[5]});
		const nulle4aK0q9 = await contractQq9PI7H.transferFrom.call(fromGpsU7vm, toqR4ZKT, valuew9j1Ba, {from: accounts[3]});

		await expect(contractQq9PI7H.transferFrom.call(fromrsuVZRl, topEBVEl, valueM9ghKd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractKXEXNOJ = await ERC20.new({from: accounts[5]});
		const ownerzG0w66y = accounts[1]
		const valueEojsGxZ = BigInt("1501")
		const spenderhpw1Ok5 = accounts[2]
		const ownerJZOwc1v = accounts[4]
		const nullVUfepMa = await contractKXEXNOJ.balanceOf.call(ownerzG0w66y, {from: accounts[0]});
		const nullL0oE4wE = await contractKXEXNOJ.approve.call(spenderhpw1Ok5, valueEojsGxZ, {from: accounts[1]});
		const nulliVaMYIa = await contractKXEXNOJ.balanceOf.call(ownerJZOwc1v, {from: accounts[2]});
		const nullQ6HWdyt = await contractKXEXNOJ.totalSupply.call({from: accounts[0]});

		assert.equal(nullL0oE4wE, true)
		assert.equal(nullQ6HWdyt, 0)
		assert.equal(nullVUfepMa, 0)
		assert.equal(nulliVaMYIa, 0)
	});

	it('test for ERC20', async () => {
		const contractGPl2LTr = await ERC20.new({from: accounts[0]});
		const owneriyNkPY2 = accounts[3]
		const subtractedValuedG6Qr7E = BigInt("292")
		const spenderXobTlC = accounts[3]
		const valueFIG5ymM = BigInt("1478")
		const tojQ8DTgt = accounts[3]
		const frommC3NXkR = "0x0000000000000000000000000000000000000001"
		const owneryXbwCX0 = accounts[4]
		const ownerQW8zHfB = accounts[4]
		const nullf7VQVeH = await contractGPl2LTr.balanceOf.call(owneriyNkPY2, {from: accounts[3]});
		const nullBPGYK88 = await contractGPl2LTr.decreaseAllowance.call(spenderXobTlC, subtractedValuedG6Qr7E, {from: accounts[3]});
		const nullNknaYE2 = await contractGPl2LTr.transferFrom.call(frommC3NXkR, tojQ8DTgt, valueFIG5ymM, {from: accounts[0]});
		const nullPwgzP75 = await contractGPl2LTr.balanceOf.call(owneryXbwCX0, {from: accounts[5]});
		const nullvXNMTVf = await contractGPl2LTr.balanceOf.call(ownerQW8zHfB, {from: accounts[2]});

		assert.equal(nullf7VQVeH, 0)
		await expect(contractGPl2LTr.decreaseAllowance.call(spenderXobTlC, subtractedValuedG6Qr7E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})