const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractmP2OK10 = await IERC20.new({from: accounts[3]});
		const _spenderObGpwg2 = accounts[3]
		const _ownerIEQtPB = accounts[3]
		const _spenderMwqsCSc = accounts[1]
		const _ownerOWchh6z = accounts[4]
		const _whoXsnlI5G = accounts[0]
		const _spenderV9DhM80 = "0x0000000000000000000000000000000000000001"
		const _ownerv4eZX7G = "0x0000000000000000000000000000000000000001"
		const nullKyAjWjq = await contractmP2OK10.allowance.call(_ownerIEQtPB, _spenderObGpwg2, {from: accounts[4]});
		const nullR9aouDI = await contractmP2OK10.allowance.call(_ownerOWchh6z, _spenderMwqsCSc, {from: accounts[2]});
		const nullN5okYXM = await contractmP2OK10.balanceOf.call(_whoXsnlI5G, {from: "0x0000000000000000000000000000000000000001"});
		const nullo96DoH1 = await contractmP2OK10.allowance.call(_ownerv4eZX7G, _spenderV9DhM80, {from: accounts[4]});
	});
})