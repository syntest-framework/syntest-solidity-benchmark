const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractZDKEMrG = await IERC20.new({from: accounts[2]});
		const _valuen2hyTH2 = BigInt("1740")
		const _spenderxvAdwLM = accounts[4]
		const _whomUb0f4s = accounts[3]
		const _spendervEZsyp = accounts[0]
		const _ownerMpsb5AR = accounts[3]
		const _whoAB9ujoH = accounts[4]
		const nullPutb1nO = await contractZDKEMrG.approve.call(_spenderxvAdwLM, _valuen2hyTH2, {from: accounts[0]});
		const nullZuWhfEH = await contractZDKEMrG.balanceOf.call(_whomUb0f4s, {from: accounts[2]});
		const nullE8N5zFK = await contractZDKEMrG.allowance.call(_ownerMpsb5AR, _spendervEZsyp, {from: accounts[2]});
		const nullywX1NTs = await contractZDKEMrG.balanceOf.call(_whoAB9ujoH, {from: accounts[0]});
	});
})