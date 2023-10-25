const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractyMDspcA = await IERC20.new({from: accounts[0]});
		const valuebPqqNkT = BigInt("1667")
		const spenderNbvgXy = accounts[5]
		const valuezHxcwvU = BigInt("230")
		const spenderI9NsrsP = accounts[2]
		const valueQ8dREWf = BigInt("1017")
		const toJSDCA2y = accounts[2]
		const who9eivmR = accounts[4]
		const valuezO2Hbo0 = BigInt("1337")
		const spenderuhJvWdw = accounts[4]
		const nullVA97G5m = await contractyMDspcA.approve.call(spenderNbvgXy, valuebPqqNkT, {from: accounts[0]});
		const nullGyefBWR = await contractyMDspcA.approve.call(spenderI9NsrsP, valuezHxcwvU, {from: accounts[0]});
		const nullJ1vlKKg = await contractyMDspcA.transfer.call(toJSDCA2y, valueQ8dREWf, {from: accounts[4]});
		const nullX9BXyvd = await contractyMDspcA.balanceOf.call(who9eivmR, {from: accounts[5]});
		const nullb1XpSni = await contractyMDspcA.approve.call(spenderuhJvWdw, valuezO2Hbo0, {from: accounts[0]});
	});
})