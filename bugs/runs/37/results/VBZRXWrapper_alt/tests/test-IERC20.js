const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractZ61nvVN = await IERC20.new({from: accounts[4]});
		const amountEm7pdl = BigInt("2018")
		const spender61xRLB = accounts[3]
		const amounty7bEw6u = BigInt("372")
		const recipiento5cAMAW = accounts[1]
		const amount4WwADc = BigInt("435")
		const recipienthfzfQ1u = accounts[1]
		const nullOvsmaN0 = await contractZ61nvVN.approve.call(spender61xRLB, amountEm7pdl, {from: accounts[0]});
		const nullQsevn3E = await contractZ61nvVN.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const nullTLeDCNA = await contractZ61nvVN.transfer.call(recipiento5cAMAW, amounty7bEw6u, {from: accounts[2]});
		const nullqnI2IT = await contractZ61nvVN.transfer.call(recipienthfzfQ1u, amount4WwADc, {from: accounts[4]});
	});
})