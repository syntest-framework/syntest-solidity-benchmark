const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractcFnKf5h = await ERC20.new({from: accounts[4]});
		const spenderWF5dwm3 = accounts[0]
		const ownerlpYOF4 = accounts[1]
		const valuerMkIyVn = BigInt("1783")
		const tobKkufb6 = accounts[3]
		const nullaabwi4 = await contractcFnKf5h.allowance.call(ownerlpYOF4, spenderWF5dwm3, {from: accounts[4]});
		const nullJRadgZZ = await contractcFnKf5h.transfer.call(tobKkufb6, valuerMkIyVn, {from: accounts[2]});

		assert.equal(nullaabwi4, 0)
		await expect(contractcFnKf5h.transfer.call(tobKkufb6, valuerMkIyVn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractnG8SIa7 = await ERC20.new({from: accounts[4]});
		const valueiQhXkY8 = BigInt("863")
		const spenderr2foLL9 = accounts[0]
		const spenderxB60YmH = accounts[4]
		const ownerXbEYOV6 = accounts[1]
		const valueyLCY23M = BigInt("968")
		const toYOWMLr = accounts[0]
		const fromsqegiNy = accounts[4]
		const ownerf6uLft = accounts[3]
		const ownerkFN2GZo = accounts[3]
		const nullgiiXRw = await contractnG8SIa7.approve.call(spenderr2foLL9, valueiQhXkY8, {from: accounts[1]});
		const nulljwfzIX8 = await contractnG8SIa7.allowance.call(ownerXbEYOV6, spenderxB60YmH, {from: accounts[5]});
		const nullffnIjo = await contractnG8SIa7.transferFrom.call(fromsqegiNy, toYOWMLr, valueyLCY23M, {from: accounts[2]});
		const nullsjqVrTR = await contractnG8SIa7.balanceOf.call(ownerf6uLft, {from: accounts[2]});
		const nullC5CsfsD = await contractnG8SIa7.balanceOf.call(ownerkFN2GZo, {from: accounts[4]});

		assert.equal(nullgiiXRw, true)
		assert.equal(nulljwfzIX8, 0)
		await expect(contractnG8SIa7.transferFrom.call(fromsqegiNy, toYOWMLr, valueyLCY23M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractSogTsDx = await ERC20.new({from: accounts[1]});
		const spenderNiW9rnw = accounts[1]
		const owneroO3HyqF = accounts[5]
		const valueNY7xbTu = BigInt("1715")
		const tobp3g2VE = accounts[5]
		const fromVj5T2cW = accounts[1]
		const valueULjYVv1 = BigInt("1171")
		const toaqc2I1C = accounts[4]
		const fromJyp6FFA = accounts[3]
		const valuegvOVr1P = BigInt("1142")
		const spendergbKurX9 = accounts[1]
		const nullKsjFYJ = await contractSogTsDx.totalSupply.call({from: accounts[3]});
		const nullw3XqfPS = await contractSogTsDx.totalSupply.call({from: accounts[3]});
		const nullr6FygZm = await contractSogTsDx.allowance.call(owneroO3HyqF, spenderNiW9rnw, {from: accounts[1]});
		const nullzQ1GwbE = await contractSogTsDx.transferFrom.call(fromVj5T2cW, tobp3g2VE, valueNY7xbTu, {from: accounts[4]});
		const nullbiXjgxQ = await contractSogTsDx.transferFrom.call(fromJyp6FFA, toaqc2I1C, valueULjYVv1, {from: accounts[4]});
		const nulleuxWVF = await contractSogTsDx.approve.call(spendergbKurX9, valuegvOVr1P, {from: accounts[1]});

		assert.equal(nullKsjFYJ, 0)
		assert.equal(nullr6FygZm, 0)
		assert.equal(nullw3XqfPS, 0)
		await expect(contractSogTsDx.transferFrom.call(fromVj5T2cW, tobp3g2VE, valueNY7xbTu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractG5QIBX = await ERC20.new({from: accounts[3]});
		const addedValueAtCzzlP = BigInt("1563")
		const spenderhB5hAfI = "0x0000000000000000000000000000000000000001"
		const valuenS4DtUm = BigInt("1782")
		const toPORExfe = accounts[5]
		const ownerYSdH79R = accounts[2]
		const valueRq5YCwi = BigInt("888")
		const toWaVk2Gb = accounts[3]
		const valueoVjiID9 = BigInt("1002")
		const toXrNdkVm = accounts[3]
		const fromTpm6vNH = accounts[4]
		const nullc57Kh7S = await contractG5QIBX.increaseAllowance.call(spenderhB5hAfI, addedValueAtCzzlP, {from: accounts[3]});
		const nullidwF0lv = await contractG5QIBX.transfer.call(toPORExfe, valuenS4DtUm, {from: accounts[2]});
		const nullptrHoar = await contractG5QIBX.balanceOf.call(ownerYSdH79R, {from: accounts[1]});
		const nulls6Y5y3j = await contractG5QIBX.transfer.call(toWaVk2Gb, valueRq5YCwi, {from: accounts[0]});
		const null3mSnIg = await contractG5QIBX.transferFrom.call(fromTpm6vNH, toXrNdkVm, valueoVjiID9, {from: accounts[3]});

		assert.equal(nullc57Kh7S, true)
		await expect(contractG5QIBX.transfer.call(toPORExfe, valuenS4DtUm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractSvbtZlA = await ERC20.new({from: accounts[0]});
		const addedValueruTlKgR = BigInt("1310")
		const spenderXpvvJH = "0x0000000000000000000000000000000000000001"
		const valueKQueq43 = BigInt("1659")
		const spenderp7xASug = accounts[3]
		const valuewdJKLd0 = BigInt("1052")
		const spenderUwxOfIn = accounts[5]
		const spenderyVXh9CQ = accounts[5]
		const ownereshmgM = accounts[1]
		const subtractedValueLcXmEOX = BigInt("366")
		const spendertkmlmh = accounts[5]
		const nullWT3w0O = await contractSvbtZlA.increaseAllowance.call(spenderXpvvJH, addedValueruTlKgR, {from: accounts[2]});
		const nullDUCjaNU = await contractSvbtZlA.approve.call(spenderp7xASug, valueKQueq43, {from: accounts[4]});
		const nullnY1l2Lv = await contractSvbtZlA.approve.call(spenderUwxOfIn, valuewdJKLd0, {from: accounts[2]});
		const nulliJ9RZI6 = await contractSvbtZlA.allowance.call(ownereshmgM, spenderyVXh9CQ, {from: accounts[0]});
		const nullaADbwdb = await contractSvbtZlA.decreaseAllowance.call(spendertkmlmh, subtractedValueLcXmEOX, {from: accounts[1]});

		assert.equal(nullDUCjaNU, true)
		assert.equal(nullWT3w0O, true)
		assert.equal(nulliJ9RZI6, 0)
		assert.equal(nullnY1l2Lv, true)
		await expect(contractSvbtZlA.decreaseAllowance.call(spendertkmlmh, subtractedValueLcXmEOX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractoQg6ciR = await ERC20.new({from: accounts[5]});
		const valueH0RMflJ = BigInt("580")
		const spenderPvrcgD4 = accounts[3]
		const ownerhefOJ6Q = accounts[4]
		const ownerqH4ZcOL = accounts[2]
		const addedValueeAa5Rxt = BigInt("811")
		const spender2dIIhs = accounts[1]
		const addedValueUkKKtSh = BigInt("39")
		const spenderWffqH00 = accounts[4]
		const nullnClms9n = await contractoQg6ciR.approve.call(spenderPvrcgD4, valueH0RMflJ, {from: accounts[0]});
		const nullruuLado = await contractoQg6ciR.balanceOf.call(ownerhefOJ6Q, {from: accounts[2]});
		const nulloJd6nsm = await contractoQg6ciR.balanceOf.call(ownerqH4ZcOL, {from: accounts[3]});
		const nullYDs5j73 = await contractoQg6ciR.increaseAllowance.call(spender2dIIhs, addedValueeAa5Rxt, {from: accounts[3]});
		const nullo3vNTO1 = await contractoQg6ciR.increaseAllowance.call(spenderWffqH00, addedValueUkKKtSh, {from: accounts[4]});

		assert.equal(nullYDs5j73, true)
		assert.equal(nullnClms9n, true)
		assert.equal(nullo3vNTO1, true)
		assert.equal(nulloJd6nsm, 0)
		assert.equal(nullruuLado, 0)
	});

	it('test for ERC20', async () => {
		const contract1pkkHN = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuepvMkoRT = BigInt("419")
		const topLYvBtA = accounts[2]
		const valuech8f7z = BigInt("1255")
		const toSR9iLHz = accounts[3]
		const fromG0H1QUs = accounts[1]
		const spenderX5ewHbg = accounts[4]
		const ownerKoT63W4 = accounts[0]
		const valueEehRiNQ = BigInt("1431")
		const spenderEZsBV9C = accounts[3]
		const ownerDzRtYO = accounts[4]
		const nullU3jVJLl = await contract1pkkHN.transfer.call(topLYvBtA, valuepvMkoRT, {from: accounts[3]});
		const nullb74isGa = await contract1pkkHN.transferFrom.call(fromG0H1QUs, toSR9iLHz, valuech8f7z, {from: accounts[2]});
		const nullkl3GbJk = await contract1pkkHN.allowance.call(ownerKoT63W4, spenderX5ewHbg, {from: accounts[1]});
		const nullKMOphWj = await contract1pkkHN.approve.call(spenderEZsBV9C, valueEehRiNQ, {from: accounts[5]});
		const nullZrg3hyz = await contract1pkkHN.balanceOf.call(ownerDzRtYO, {from: accounts[4]});
	});
})