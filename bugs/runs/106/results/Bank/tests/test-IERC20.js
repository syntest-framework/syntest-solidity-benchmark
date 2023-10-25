const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractCJad9iK = await IERC20.new({from: accounts[1]});
		const valueCQYei73 = BigInt("1681")
		const toRXReBnO = accounts[3]
		const valueUjxMzuI = BigInt("549")
		const spenderx5TneLU = accounts[3]
		const valueFKRefxK = BigInt("1727")
		const spenderzwz8vRe = accounts[2]
		const spenderT3LXTGF = accounts[2]
		const ownertbvlt7u = accounts[5]
		const nullJQjQ5L9 = await contractCJad9iK.transfer.call(toRXReBnO, valueCQYei73, {from: "0x0000000000000000000000000000000000000001"});
		const nullbE6npK8 = await contractCJad9iK.approve.call(spenderx5TneLU, valueUjxMzuI, {from: accounts[0]});
		const nullmSiwi02 = await contractCJad9iK.approve.call(spenderzwz8vRe, valueFKRefxK, {from: accounts[1]});
		const nullpNgpJA = await contractCJad9iK.allowance.call(ownertbvlt7u, spenderT3LXTGF, {from: accounts[1]});
	});
})