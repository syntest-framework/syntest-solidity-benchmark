const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractXvZX0no = await ERC20.new({from: accounts[4]});
		const spenderhYYi9CV = accounts[5]
		const ownerf9t6xpj = accounts[0]
		const valuejjs8Wk = BigInt("133")
		const toS2N4Sts = accounts[0]
		const fromtTY7HgK = accounts[3]
		const ownerFL8ZWZR = accounts[3]
		const valuefJqLuhU = BigInt("296")
		const spenderkm7rekd = accounts[1]
		const nullr6oVa15 = await contractXvZX0no.allowance.call(ownerf9t6xpj, spenderhYYi9CV, {from: accounts[4]});
		const nullljoP8hU = await contractXvZX0no.transferFrom.call(fromtTY7HgK, toS2N4Sts, valuejjs8Wk, {from: accounts[3]});
		const nullQkD5L5Z = await contractXvZX0no.balanceOf.call(ownerFL8ZWZR, {from: accounts[4]});
		const nullTlYRtbK = await contractXvZX0no.approve.call(spenderkm7rekd, valuefJqLuhU, {from: accounts[1]});

		assert.equal(nullr6oVa15, 0)
		await expect(contractXvZX0no.transferFrom.call(fromtTY7HgK, toS2N4Sts, valuejjs8Wk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractoSUkiUZ = await ERC20.new({from: accounts[0]});
		const spenderWG7xGvz = accounts[0]
		const ownerGJVr3Qw = accounts[3]
		const owners47zMTS = accounts[2]
		const addedValueBCEVVxo = BigInt("1678")
		const spenderKjZJaTy = accounts[1]
		const valuebB66S1M = BigInt("1550")
		const tojfSWcPf = "0x0000000000000000000000000000000000000001"
		const fromSReKzCK = accounts[4]
		const valueuRBqU5J = BigInt("524")
		const spenderRRn10V1 = accounts[2]
		const nullmOyR97i = await contractoSUkiUZ.allowance.call(ownerGJVr3Qw, spenderWG7xGvz, {from: accounts[4]});
		const nullEuNAPHk = await contractoSUkiUZ.balanceOf.call(owners47zMTS, {from: accounts[1]});
		const nullswZj0oJ = await contractoSUkiUZ.increaseAllowance.call(spenderKjZJaTy, addedValueBCEVVxo, {from: accounts[3]});
		const nullUvWAdUu = await contractoSUkiUZ.transferFrom.call(fromSReKzCK, tojfSWcPf, valuebB66S1M, {from: accounts[3]});
		const nullQiRlJpR = await contractoSUkiUZ.approve.call(spenderRRn10V1, valueuRBqU5J, {from: accounts[3]});

		assert.equal(nullEuNAPHk, 0)
		assert.equal(nullmOyR97i, 0)
		assert.equal(nullswZj0oJ, true)
		await expect(contractoSUkiUZ.transferFrom.call(fromSReKzCK, tojfSWcPf, valuebB66S1M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractPGSOxv1 = await ERC20.new({from: accounts[2]});
		const owneroSIi2qK = accounts[1]
		const addedValuewrB0uJt = BigInt("647")
		const spenderzbfgzne = accounts[1]
		const subtractedValue7Q3Ydm = BigInt("1945")
		const spenderSN3wkp = accounts[2]
		const nullGfRWXo = await contractPGSOxv1.balanceOf.call(owneroSIi2qK, {from: accounts[4]});
		const nullXCL9Hu = await contractPGSOxv1.increaseAllowance.call(spenderzbfgzne, addedValuewrB0uJt, {from: accounts[1]});
		const nulldG0UT4i = await contractPGSOxv1.decreaseAllowance.call(spenderSN3wkp, subtractedValue7Q3Ydm, {from: accounts[2]});

		assert.equal(nullGfRWXo, 0)
		assert.equal(nullXCL9Hu, true)
		await expect(contractPGSOxv1.decreaseAllowance.call(spenderSN3wkp, subtractedValue7Q3Ydm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractIdfAz4g = await ERC20.new({from: accounts[3]});
		const ownerNxV0NUL = accounts[1]
		const valueXNtnqr = BigInt("1729")
		const spenderiIsUxXL = accounts[1]
		const spendermqMJjVi = accounts[2]
		const ownerMbDlPoF = accounts[4]
		const valueur6kC01 = BigInt("29")
		const towppZjQ = "0x0000000000000000000000000000000000000001"
		const fromixwA7EX = accounts[4]
		const valueXmQa8g6 = BigInt("740")
		const spendert4dvXsN = accounts[0]
		const valueNnD7LHI = BigInt("1732")
		const todYcrTHI = accounts[0]
		const fromihacoy = "0x0000000000000000000000000000000000000001"
		const nullt2chB9l = await contractIdfAz4g.balanceOf.call(ownerNxV0NUL, {from: accounts[0]});
		const nullC56LXKJ = await contractIdfAz4g.approve.call(spenderiIsUxXL, valueXNtnqr, {from: accounts[5]});
		const nullmJ7g5wd = await contractIdfAz4g.allowance.call(ownerMbDlPoF, spendermqMJjVi, {from: accounts[2]});
		const nulliSa9WSK = await contractIdfAz4g.transferFrom.call(fromixwA7EX, towppZjQ, valueur6kC01, {from: accounts[3]});
		const nullnTNE1Vo = await contractIdfAz4g.approve.call(spendert4dvXsN, valueXmQa8g6, {from: accounts[3]});
		const nullGQFo8tf = await contractIdfAz4g.transferFrom.call(fromihacoy, todYcrTHI, valueNnD7LHI, {from: accounts[5]});

		assert.equal(nullC56LXKJ, true)
		assert.equal(nullmJ7g5wd, 0)
		assert.equal(nullt2chB9l, 0)
		await expect(contractIdfAz4g.transferFrom.call(fromixwA7EX, towppZjQ, valueur6kC01, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractmgabcPh = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderfVxxYlD = accounts[0]
		const ownerlmvNBJ6 = "0x0000000000000000000000000000000000000001"
		const valuesiYCLLy = BigInt("374")
		const spenderapCEUPP = accounts[0]
		const nullSafNM6 = await contractmgabcPh.allowance.call(ownerlmvNBJ6, spenderfVxxYlD, {from: accounts[4]});
		const nullk2T8gJW = await contractmgabcPh.approve.call(spenderapCEUPP, valuesiYCLLy, {from: accounts[2]});
	});

	it('test for ERC20', async () => {
		const contracth1g7g1q = await ERC20.new({from: accounts[0]});
		const valuezNiWLiY = BigInt("1649")
		const spendervYjH2HY = accounts[4]
		const owneruQWFEPK = accounts[2]
		const valueyEsYIwY = BigInt("1007")
		const tof22XjHE = accounts[1]
		const owneryvckAD6 = accounts[4]
		const nullI0GOlyE = await contracth1g7g1q.approve.call(spendervYjH2HY, valuezNiWLiY, {from: accounts[0]});
		const nulllwHlRGH = await contracth1g7g1q.balanceOf.call(owneruQWFEPK, {from: accounts[4]});
		const nullDuBCYV2 = await contracth1g7g1q.transfer.call(tof22XjHE, valueyEsYIwY, {from: accounts[4]});
		const nullAgopwoc = await contracth1g7g1q.balanceOf.call(owneryvckAD6, {from: accounts[1]});

		assert.equal(nullI0GOlyE, true)
		assert.equal(nulllwHlRGH, 0)
		await expect(contracth1g7g1q.transfer.call(tof22XjHE, valueyEsYIwY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractA8z9foZ = await ERC20.new({from: accounts[0]});
		const addedValueAYGaB98 = BigInt("530")
		const spendermPhPbDM = accounts[1]
		const valueh9vKCaV = BigInt("1919")
		const spenderjGZplWb = accounts[2]
		const subtractedValueEUSzfus = BigInt("77")
		const spenderGpOcwC5 = accounts[4]
		const valueKss09cm = BigInt("1535")
		const tolT9DfHe = accounts[0]
		const nulljLzgrN = await contractA8z9foZ.increaseAllowance.call(spendermPhPbDM, addedValueAYGaB98, {from: "0x0000000000000000000000000000000000000001"});
		const nullhHGBah5 = await contractA8z9foZ.approve.call(spenderjGZplWb, valueh9vKCaV, {from: "0x0000000000000000000000000000000000000001"});
		const nullQFbcNAh = await contractA8z9foZ.totalSupply.call({from: accounts[2]});
		const nullLPLOzqv = await contractA8z9foZ.decreaseAllowance.call(spenderGpOcwC5, subtractedValueEUSzfus, {from: accounts[2]});
		const nullk7UfJNu = await contractA8z9foZ.transfer.call(tolT9DfHe, valueKss09cm, {from: accounts[3]});

		assert.equal(nullQFbcNAh, 0)
		assert.equal(nullhHGBah5, true)
		assert.equal(nulljLzgrN, true)
		await expect(contractA8z9foZ.decreaseAllowance.call(spenderGpOcwC5, subtractedValueEUSzfus, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})