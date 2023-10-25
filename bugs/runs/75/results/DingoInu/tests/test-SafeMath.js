const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractjEJns7 = await SafeMath.new({from: accounts[0]});
		const bUgaFZa = BigInt("1371")
		const albMzsI = BigInt("527")
		const bdMaAMIf = BigInt("912")
		const aMd5GkVI = BigInt("757")
		const bLuQGhK2 = BigInt("665")
		const abtN58Sc = BigInt("348")
		const bgwaanmZ = BigInt("1471")
		const axF8zQRZ = BigInt("1821")
		const bRbDznTg = BigInt("547")
		const afkZzcbK = BigInt("326")
		const cnlfuQZW = await contractjEJns7.safeSub.call(albMzsI, bUgaFZa, {from: accounts[3]});
		const cO7W38Q8 = await contractjEJns7.safeAdd.call(aMd5GkVI, bdMaAMIf, {from: accounts[4]});
		const cMHheEFA = await contractjEJns7.safeSub.call(abtN58Sc, bLuQGhK2, {from: accounts[0]});
		const cJl5zer = await contractjEJns7.safeMul.call(axF8zQRZ, bgwaanmZ, {from: accounts[5]});
		const cUlMkmq7 = await contractjEJns7.safeDiv.call(afkZzcbK, bRbDznTg, {from: accounts[3]});

		await expect(contractjEJns7.safeSub.call(albMzsI, bUgaFZa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractGjXwTNj = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bqWLwB3l = BigInt("698")
		const aaYvExsD = BigInt("1005")
		const bYtIZXVj = BigInt("1841")
		const azJfKBPz = BigInt("1465")
		const codkPJi8 = await contractGjXwTNj.safeAdd.call(aaYvExsD, bqWLwB3l, {from: accounts[2]});
		const cYWxAt5L = await contractGjXwTNj.safeAdd.call(azJfKBPz, bYtIZXVj, {from: accounts[0]});
	});
})