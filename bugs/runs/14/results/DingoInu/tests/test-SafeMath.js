const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractgVTDqf = await SafeMath.new({from: accounts[2]});
		const bjlCHSRL = BigInt("336")
		const ac7nj88c = BigInt("131")
		const bNHemF4M = BigInt("1761")
		const aZKVekrV = BigInt("1730")
		const bn636c8Z = BigInt("1687")
		const aMfTVn0O = BigInt("749")
		const bs8WrNz = BigInt("704")
		const aoT8BoE = BigInt("21")
		const bfXfXhgE = BigInt("482")
		const acPd392 = BigInt("1256")
		const cYhqBVmg = await contractgVTDqf.safeSub.call(ac7nj88c, bjlCHSRL, {from: accounts[4]});
		const ceY69tx = await contractgVTDqf.safeMul.call(aZKVekrV, bNHemF4M, {from: accounts[3]});
		const cF9fCfTr = await contractgVTDqf.safeDiv.call(aMfTVn0O, bn636c8Z, {from: accounts[4]});
		const cf255PxV = await contractgVTDqf.safeAdd.call(aoT8BoE, bs8WrNz, {from: accounts[2]});
		const cM6nHl0r = await contractgVTDqf.safeAdd.call(acPd392, bfXfXhgE, {from: accounts[1]});

		await expect(contractgVTDqf.safeSub.call(ac7nj88c, bjlCHSRL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractfyjPMJx = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bmLaxAdx = BigInt("146")
		const au252j9m = BigInt("459")
		const bdCYurld = BigInt("380")
		const aOZiDEhK = BigInt("453")
		const bhgIjpac = BigInt("272")
		const afXm9lOC = BigInt("239")
		const boVzrrdr = BigInt("2018")
		const aOMWo3zq = BigInt("1265")
		const bOZIClg3 = BigInt("750")
		const aN4GrRNC = BigInt("186")
		const bJpiq6SJ = BigInt("1504")
		const aEgLlFU2 = BigInt("1908")
		const cnCUynsg = await contractfyjPMJx.safeAdd.call(au252j9m, bmLaxAdx, {from: accounts[4]});
		const cB9JFLGy = await contractfyjPMJx.safeSub.call(aOZiDEhK, bdCYurld, {from: accounts[1]});
		const cgWI5GxH = await contractfyjPMJx.safeAdd.call(afXm9lOC, bhgIjpac, {from: accounts[1]});
		const ccRinX1H = await contractfyjPMJx.safeMul.call(aOMWo3zq, boVzrrdr, {from: accounts[4]});
		const cSRAaOaj = await contractfyjPMJx.safeSub.call(aN4GrRNC, bOZIClg3, {from: accounts[0]});
		const cuaN3Yr1 = await contractfyjPMJx.safeMul.call(aEgLlFU2, bJpiq6SJ, {from: "0x0000000000000000000000000000000000000001"});
	});
})