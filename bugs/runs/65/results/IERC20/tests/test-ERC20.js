const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractOPXEb59 = await ERC20.new({from: accounts[4]});
		const valueAhB5Nj = BigInt("909")
		const toErF1RVy = accounts[2]
		const ownerTGLqNoS = accounts[1]
		const valueAZf3xs = BigInt("261")
		const spendere2RJHw3 = accounts[2]
		const valuetFDf0lZ = BigInt("742")
		const todIewm5 = accounts[0]
		const fromedKYQVf = accounts[3]
		const nullSorZm40 = await contractOPXEb59.transfer.call(toErF1RVy, valueAhB5Nj, {from: accounts[0]});
		const nullWB3k7pT = await contractOPXEb59.balanceOf.call(ownerTGLqNoS, {from: accounts[5]});
		const nullvhisOD7 = await contractOPXEb59.approve.call(spendere2RJHw3, valueAZf3xs, {from: "0x0000000000000000000000000000000000000001"});
		const nullAl4gTRm = await contractOPXEb59.totalSupply.call({from: accounts[1]});
		const nullzComAg6 = await contractOPXEb59.transferFrom.call(fromedKYQVf, todIewm5, valuetFDf0lZ, {from: accounts[2]});

		await expect(contractOPXEb59.transfer.call(toErF1RVy, valueAhB5Nj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractUMOkJjh = await ERC20.new({from: accounts[4]});
		const ownercwRZlUy = accounts[1]
		const valuey8IyOYB = BigInt("1357")
		const spendersaP7nc4 = accounts[2]
		const addedValueIX1FmKn = BigInt("936")
		const spenderLgb8MqM = accounts[0]
		const spenderSbtashD = accounts[1]
		const owneryUGCsww = accounts[2]
		const addedValuej4uANm = BigInt("1948")
		const spenderKSO7DP = accounts[1]
		const nulld9ujRUf = await contractUMOkJjh.balanceOf.call(ownercwRZlUy, {from: accounts[3]});
		const nullOACoDm = await contractUMOkJjh.approve.call(spendersaP7nc4, valuey8IyOYB, {from: "0x0000000000000000000000000000000000000001"});
		const nullKV85Z3 = await contractUMOkJjh.increaseAllowance.call(spenderLgb8MqM, addedValueIX1FmKn, {from: accounts[0]});
		const nullRlHBtFz = await contractUMOkJjh.allowance.call(owneryUGCsww, spenderSbtashD, {from: accounts[3]});
		const nulls4Zeu1 = await contractUMOkJjh.increaseAllowance.call(spenderKSO7DP, addedValuej4uANm, {from: accounts[1]});

		assert.equal(nullKV85Z3, true)
		assert.equal(nullOACoDm, true)
		assert.equal(nullRlHBtFz, 0)
		assert.equal(nulld9ujRUf, 0)
		assert.equal(nulls4Zeu1, true)
	});

	it('test for ERC20', async () => {
		const contractwUKLLcX = await ERC20.new({from: accounts[3]});
		const subtractedValuekgyYmlU = BigInt("426")
		const spenderBkjKyMD = accounts[0]
		const valuePbl6krI = BigInt("40")
		const spenderbkseEkc = accounts[1]
		const addedValuehAPxrXm = BigInt("55")
		const spenderOdtUuK6 = accounts[0]
		const valueU7FlROz = BigInt("843")
		const spenderxUjxDZe = accounts[2]
		const nullycii2d8 = await contractwUKLLcX.decreaseAllowance.call(spenderBkjKyMD, subtractedValuekgyYmlU, {from: accounts[4]});
		const nullOkvdyGm = await contractwUKLLcX.approve.call(spenderbkseEkc, valuePbl6krI, {from: accounts[3]});
		const nullC0l6Fu = await contractwUKLLcX.increaseAllowance.call(spenderOdtUuK6, addedValuehAPxrXm, {from: accounts[5]});
		const nullQTU7Xtu = await contractwUKLLcX.approve.call(spenderxUjxDZe, valueU7FlROz, {from: accounts[4]});

		await expect(contractwUKLLcX.decreaseAllowance.call(spenderBkjKyMD, subtractedValuekgyYmlU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractqRuph9q = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerYwFSd4N = accounts[1]
		const subtractedValueDjt2iRo = BigInt("442")
		const spenderjIfCaYb = accounts[2]
		const valuelXw6v65 = BigInt("53")
		const toTr9ARr = accounts[2]
		const fromydPsKda = accounts[2]
		const nullFlX566 = await contractqRuph9q.balanceOf.call(ownerYwFSd4N, {from: accounts[1]});
		const nullHGzaxJk = await contractqRuph9q.decreaseAllowance.call(spenderjIfCaYb, subtractedValueDjt2iRo, {from: accounts[1]});
		const nullJirsZTA = await contractqRuph9q.transferFrom.call(fromydPsKda, toTr9ARr, valuelXw6v65, {from: accounts[3]});
		const nullu8Nt4A6 = await contractqRuph9q.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC20', async () => {
		const contractTl9MnVh = await ERC20.new({from: accounts[1]});
		const ownerrXT2ru8 = accounts[2]
		const valueujVwRma = BigInt("1645")
		const toLckshjs = accounts[3]
		const fromvDJFzyL = accounts[2]
		const ownero3RhGig = accounts[3]
		const valuedgpwZKN = BigInt("1961")
		const tosaWxYd2 = accounts[3]
		const fromlgwqPat = "0x0000000000000000000000000000000000000001"
		const nullEYhaE3J = await contractTl9MnVh.balanceOf.call(ownerrXT2ru8, {from: accounts[3]});
		const nullWAzsJ3H = await contractTl9MnVh.transferFrom.call(fromvDJFzyL, toLckshjs, valueujVwRma, {from: accounts[1]});
		const nulla4Iok8 = await contractTl9MnVh.balanceOf.call(ownero3RhGig, {from: accounts[4]});
		const nullnySuXlO = await contractTl9MnVh.transferFrom.call(fromlgwqPat, tosaWxYd2, valuedgpwZKN, {from: accounts[4]});

		assert.equal(nullEYhaE3J, 0)
		await expect(contractTl9MnVh.transferFrom.call(fromvDJFzyL, toLckshjs, valueujVwRma, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractD2Re93O = await ERC20.new({from: accounts[2]});
		const ownernR057xC = accounts[5]
		const valuerb3I8CE = BigInt("397")
		const toVZxYzU = accounts[3]
		const nullfr22qQz = await contractD2Re93O.balanceOf.call(ownernR057xC, {from: accounts[1]});
		const nullgicVQeQ = await contractD2Re93O.totalSupply.call({from: accounts[3]});
		const nullCwziP3D = await contractD2Re93O.transfer.call(toVZxYzU, valuerb3I8CE, {from: accounts[5]});

		assert.equal(nullfr22qQz, 0)
		assert.equal(nullgicVQeQ, 0)
		await expect(contractD2Re93O.transfer.call(toVZxYzU, valuerb3I8CE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})