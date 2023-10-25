const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractrW1rx1f = await ERC20.new({from: accounts[2]});
		const subtractedValueBOauKd7 = BigInt("566")
		const spenderSkOrhPu = accounts[1]
		const valuePXUryka = BigInt("1058")
		const toarzkrFq = accounts[4]
		const fromow16Fj = accounts[2]
		const spenderWyojO6t = accounts[3]
		const ownerUnVqRHb = accounts[3]
		const valuedQ4y2kO = BigInt("1337")
		const toeg9ZZJK = accounts[0]
		const nullOKaMIRA = await contractrW1rx1f.totalSupply.call({from: accounts[4]});
		const null0TlPAU = await contractrW1rx1f.decreaseAllowance.call(spenderSkOrhPu, subtractedValueBOauKd7, {from: accounts[3]});
		const nullqdSV2I = await contractrW1rx1f.transferFrom.call(fromow16Fj, toarzkrFq, valuePXUryka, {from: accounts[4]});
		const nullaXHkZeA = await contractrW1rx1f.allowance.call(ownerUnVqRHb, spenderWyojO6t, {from: accounts[3]});
		const nullr9WqOqE = await contractrW1rx1f.transfer.call(toeg9ZZJK, valuedQ4y2kO, {from: accounts[2]});

		assert.equal(nullOKaMIRA, 0)
		await expect(contractrW1rx1f.decreaseAllowance.call(spenderSkOrhPu, subtractedValueBOauKd7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractyhaSPJ9 = await ERC20.new({from: accounts[2]});
		const valueV1XGkx3 = BigInt("679")
		const toK9yncij = accounts[4]
		const spendermPvvt6Y = accounts[5]
		const ownerrepqlgg = accounts[0]
		const nullMYe35t0 = await contractyhaSPJ9.transfer.call(toK9yncij, valueV1XGkx3, {from: accounts[1]});
		const nullgegG4YG = await contractyhaSPJ9.allowance.call(ownerrepqlgg, spendermPvvt6Y, {from: accounts[0]});
		const nullrKwoZBR = await contractyhaSPJ9.totalSupply.call({from: accounts[3]});

		await expect(contractyhaSPJ9.transfer.call(toK9yncij, valueV1XGkx3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractmsh6dr = await ERC20.new({from: accounts[0]});
		const valueRQvjuFR = BigInt("1158")
		const spenderMM1SMv8 = accounts[1]
		const valueicnuF8l = BigInt("400")
		const toKkTr98q = accounts[0]
		const fromF5qlaBC = "0x0000000000000000000000000000000000000001"
		const valueBHpCjOS = BigInt("1275")
		const toLGorhCU = accounts[0]
		const fromGVTByX8 = accounts[3]
		const nullawOzZ0f = await contractmsh6dr.approve.call(spenderMM1SMv8, valueRQvjuFR, {from: accounts[1]});
		const nullh0KfSl = await contractmsh6dr.transferFrom.call(fromF5qlaBC, toKkTr98q, valueicnuF8l, {from: accounts[3]});
		const nullvKdYvH = await contractmsh6dr.transferFrom.call(fromGVTByX8, toLGorhCU, valueBHpCjOS, {from: accounts[1]});
		const nullJ5TDGbw = await contractmsh6dr.totalSupply.call({from: accounts[2]});

		assert.equal(nullawOzZ0f, true)
		await expect(contractmsh6dr.transferFrom.call(fromF5qlaBC, toKkTr98q, valueicnuF8l, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractDveeQiu = await ERC20.new({from: accounts[0]});
		const addedValueECUrmez = BigInt("246")
		const spenderfCaO7Xa = accounts[3]
		const addedValuePyv6lBB = BigInt("745")
		const spenderno3geS7 = accounts[3]
		const nullXLH03JU = await contractDveeQiu.increaseAllowance.call(spenderfCaO7Xa, addedValueECUrmez, {from: accounts[0]});
		const nullkIU2c5S = await contractDveeQiu.increaseAllowance.call(spenderno3geS7, addedValuePyv6lBB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullXLH03JU, true)
		assert.equal(nullkIU2c5S, true)
	});

	it('test for ERC20', async () => {
		const contractDD1WH53 = await ERC20.new({from: accounts[1]});
		const addedValueFFCfNVA = BigInt("1165")
		const spenderLhcAg5 = accounts[2]
		const owneraLkUlI7 = accounts[2]
		const spenderPW6naI = accounts[1]
		const ownerjjrQyZ9 = accounts[3]
		const nullkrsqkfT = await contractDD1WH53.increaseAllowance.call(spenderLhcAg5, addedValueFFCfNVA, {from: accounts[2]});
		const nulluIbKRmU = await contractDD1WH53.balanceOf.call(owneraLkUlI7, {from: accounts[4]});
		const nullyXVspAX = await contractDD1WH53.allowance.call(ownerjjrQyZ9, spenderPW6naI, {from: accounts[4]});

		assert.equal(nullkrsqkfT, true)
		assert.equal(nulluIbKRmU, 0)
		assert.equal(nullyXVspAX, 0)
	});

	it('test for ERC20', async () => {
		const contractVynSD2z = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const subtractedValueIuURtPP = BigInt("1877")
		const spender3ucw93 = accounts[2]
		const ownerubGuty = accounts[4]
		const valuelGBM6u3 = BigInt("549")
		const toAMOqZt5 = accounts[0]
		const fromBDgViDf = accounts[0]
		const addedValuem0yTOE = BigInt("1894")
		const spendervTsXo4 = "0x0000000000000000000000000000000000000001"
		const nullsr6fgZe = await contractVynSD2z.totalSupply.call({from: accounts[4]});
		const nullA7XJP01 = await contractVynSD2z.decreaseAllowance.call(spender3ucw93, subtractedValueIuURtPP, {from: accounts[4]});
		const nullOUtNKHs = await contractVynSD2z.balanceOf.call(ownerubGuty, {from: accounts[1]});
		const nulllNRlOr = await contractVynSD2z.transferFrom.call(fromBDgViDf, toAMOqZt5, valuelGBM6u3, {from: accounts[1]});
		const nullmwOjzSv = await contractVynSD2z.increaseAllowance.call(spendervTsXo4, addedValuem0yTOE, {from: accounts[1]});
	});
})