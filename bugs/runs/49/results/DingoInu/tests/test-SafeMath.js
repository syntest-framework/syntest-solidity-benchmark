const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractTUEjsRi = await SafeMath.new({from: accounts[1]});
		const bkdBvd7Z = BigInt("1649")
		const a9fFrEy = BigInt("1907")
		const bKUetWB9 = BigInt("1543")
		const aW8n8zL4 = BigInt("1087")
		const bbT2pDiy = BigInt("1785")
		const aepWyt30 = BigInt("1795")
		const bToaRUhs = BigInt("2007")
		const aBTdl0D = BigInt("1638")
		const cB688cAq = await contractTUEjsRi.safeAdd.call(a9fFrEy, bkdBvd7Z, {from: accounts[3]});
		const cHjV4zH6 = await contractTUEjsRi.safeSub.call(aW8n8zL4, bKUetWB9, {from: accounts[2]});
		const cPBy6IW7 = await contractTUEjsRi.safeMul.call(aepWyt30, bbT2pDiy, {from: accounts[4]});
		const cz4DKfu2 = await contractTUEjsRi.safeSub.call(aBTdl0D, bToaRUhs, {from: accounts[0]});

		assert.equal(cB688cAq, 3556)
		await expect(contractTUEjsRi.safeSub.call(aW8n8zL4, bKUetWB9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractKbrGazY = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bF4o8MB = BigInt("1356")
		const aRdXkP6D = BigInt("447")
		const bAdCCnuU = BigInt("836")
		const auCGpF0u = BigInt("1789")
		const bulRJUh6 = BigInt("522")
		const aoMxeTWF = BigInt("1456")
		const cNUvp2JD = await contractKbrGazY.safeSub.call(aRdXkP6D, bF4o8MB, {from: accounts[0]});
		const ciY3kJm = await contractKbrGazY.safeSub.call(auCGpF0u, bAdCCnuU, {from: accounts[4]});
		const cOI4FZEc = await contractKbrGazY.safeAdd.call(aoMxeTWF, bulRJUh6, {from: accounts[4]});
	});
})