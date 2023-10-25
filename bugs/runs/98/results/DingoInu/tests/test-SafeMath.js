const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractsHLhPI = await SafeMath.new({from: accounts[2]});
		const bxck0qMh = BigInt("1932")
		const ayfUwhEq = BigInt("1827")
		const bwS9bmeA = BigInt("1600")
		const aZqME14X = BigInt("1333")
		const bduDvihQ = BigInt("1384")
		const amS97Ia3 = BigInt("1743")
		const bE8jnMy = BigInt("1479")
		const arAbkdv = BigInt("1787")
		const cGSiseU6 = await contractsHLhPI.safeAdd.call(ayfUwhEq, bxck0qMh, {from: accounts[1]});
		const cEpGgS7p = await contractsHLhPI.safeSub.call(aZqME14X, bwS9bmeA, {from: accounts[1]});
		const ckhKLenJ = await contractsHLhPI.safeDiv.call(amS97Ia3, bduDvihQ, {from: accounts[1]});
		const cPmzbnwi = await contractsHLhPI.safeSub.call(arAbkdv, bE8jnMy, {from: accounts[3]});

		assert.equal(cGSiseU6, 3759)
		await expect(contractsHLhPI.safeSub.call(aZqME14X, bwS9bmeA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractdyADaTI = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const byZSTBws = BigInt("1252")
		const aPAAeFl = BigInt("1889")
		const bVjfBAaJ = BigInt("825")
		const aSMPfLfj = BigInt("432")
		const bjczF6eQ = BigInt("1161")
		const aLQMr6OO = BigInt("1365")
		const bEss1PrC = BigInt("78")
		const apKsGq4t = BigInt("696")
		const bku6hdJu = BigInt("1535")
		const aYwhrSUH = BigInt("249")
		const cKFd4f9l = await contractdyADaTI.safeDiv.call(aPAAeFl, byZSTBws, {from: accounts[5]});
		const cKW3kJg2 = await contractdyADaTI.safeSub.call(aSMPfLfj, bVjfBAaJ, {from: accounts[1]});
		const c2DmWCc = await contractdyADaTI.safeSub.call(aLQMr6OO, bjczF6eQ, {from: "0x0000000000000000000000000000000000000001"});
		const cU5Iblrk = await contractdyADaTI.safeMul.call(apKsGq4t, bEss1PrC, {from: accounts[0]});
		const cgGDyFIN = await contractdyADaTI.safeMul.call(aYwhrSUH, bku6hdJu, {from: accounts[2]});
	});
})