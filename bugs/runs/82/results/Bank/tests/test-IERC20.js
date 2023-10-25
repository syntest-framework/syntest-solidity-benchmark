const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractOX87g3y = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuevYXC6gC = BigInt("336")
		const spenderXMGOYA8 = accounts[1]
		const valuewTpArGE = BigInt("1322")
		const touJqKOV5 = accounts[1]
		const fromhNmVcbJ = accounts[0]
		const valueudrOSHq = BigInt("1144")
		const tou7qknFt = accounts[4]
		const whoEsPz3MN = accounts[1]
		const who1yYHjU = accounts[2]
		const nullPS7af5j = await contractOX87g3y.approve.call(spenderXMGOYA8, valuevYXC6gC, {from: "0x0000000000000000000000000000000000000001"});
		const nullUf1Gpo = await contractOX87g3y.transferFrom.call(fromhNmVcbJ, touJqKOV5, valuewTpArGE, {from: "0x0000000000000000000000000000000000000001"});
		const nullyzuq7wQ = await contractOX87g3y.transfer.call(tou7qknFt, valueudrOSHq, {from: accounts[2]});
		const nulltRjnggN = await contractOX87g3y.balanceOf.call(whoEsPz3MN, {from: accounts[2]});
		const nullOJ9LTdM = await contractOX87g3y.balanceOf.call(who1yYHjU, {from: "0x0000000000000000000000000000000000000001"});
		const nullG338CFH = await contractOX87g3y.totalSupply.call({from: accounts[4]});
	});
})