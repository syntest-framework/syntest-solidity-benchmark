const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const BazOClYehM = await Baz.new({from: accounts[5]});
		const intPnt1U28 = BigInt("1738")
		const intREXv3kF = BigInt("-926")
		const intOlQ3qx = BigInt("26")
		const int2tfmHv = BigInt("530")
		const intB1qiX1 = BigInt("685")
		const intV6hBRxQ = BigInt("-1691")
		const boolaD69K9H = await BazOClYehM.echidna_all_states.call({from: "0x0000000000000000000000000000000000000001"});
		const int256y4zUjZ = await BazOClYehM.baz.call(intOlQ3qx, intREXv3kF, intPnt1U28, {from: accounts[4]});
		const int256iBfabxR = await BazOClYehM.baz.call(intV6hBRxQ, intB1qiX1, int2tfmHv, {from: accounts[4]});

		assert.equal(boolaD69K9H, true)
		assert.equal(int256iBfabxR, BigInt("5"))
		assert.equal(int256y4zUjZ, BigInt("5"))
	});

	it('test for Baz', async () => {
		const BazSg1YcUw = await Baz.new({from: accounts[4]});
		const intjLVDDTU = BigInt("-833")
		const intA8ep1tY = BigInt("634")
		const intFxkjnVn = BigInt("-872")
		const into9dtM9n = BigInt("-359")
		const intq0VrFja = BigInt("-1241")
		const intco0UTQG = BigInt("1393")
		const intUhjvHeW = BigInt("-300")
		const intWS1QEdg = BigInt("-677")
		const int4OboqR = BigInt("-672")
		const int256HmJWJbp = await BazSg1YcUw.baz.call(intFxkjnVn, intA8ep1tY, intjLVDDTU, {from: accounts[2]});
		const int256CYcDgw8 = await BazSg1YcUw.baz.call(intco0UTQG, intq0VrFja, into9dtM9n, {from: accounts[0]});
		const int256UpFHjYl = await BazSg1YcUw.baz.call(int4OboqR, intWS1QEdg, intUhjvHeW, {from: accounts[0]});

		assert.equal(int256CYcDgw8, BigInt("1"))
		assert.equal(int256HmJWJbp, BigInt("3"))
		assert.equal(int256UpFHjYl, BigInt("1"))
	});

	it('test for Baz', async () => {
		const BazFxmddAo = await Baz.new({from: accounts[0]});
		const intUKs9dIA = BigInt("-925")
		const intPaY7DQG = BigInt("983")
		const intaVSYGb0 = BigInt("1831")
		const intBlPNMCs = BigInt("-913")
		const intGAyvB7J = BigInt("792")
		const intf35Vgjd = BigInt("-711")
		const intl8883N4 = BigInt("1930")
		const intyhh6gE = BigInt("-1675")
		const intLmJBKmb = BigInt("-683")
		const int256VCX86od = await BazFxmddAo.baz.call(intaVSYGb0, intPaY7DQG, intUKs9dIA, {from: accounts[3]});
		const int256Na6jmj = await BazFxmddAo.baz.call(intf35Vgjd, intGAyvB7J, intBlPNMCs, {from: accounts[3]});
		const boolqRhFkCM = await BazFxmddAo.echidna_all_states.call({from: accounts[4]});
		const int256LrluLOB = await BazFxmddAo.baz.call(intLmJBKmb, intyhh6gE, intl8883N4, {from: accounts[4]});

		assert.equal(boolqRhFkCM, true)
		assert.equal(int256LrluLOB, BigInt("5"))
		assert.equal(int256Na6jmj, BigInt("3"))
		assert.equal(int256VCX86od, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazttGGDaX = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intdkdmNLZ = BigInt("-19")
		const intZHE6E2B = BigInt("1641")
		const intxztC2BF = BigInt("-1936")
		const int256NCZAsPw = await BazttGGDaX.baz.call(intxztC2BF, intZHE6E2B, intdkdmNLZ, {from: accounts[2]});
		const boolBd4SS8l = await BazttGGDaX.echidna_all_states.call({from: accounts[2]});
	});
})