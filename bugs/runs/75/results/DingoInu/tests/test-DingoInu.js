const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractMdT5nlw = await DingoInu.new({from: accounts[4]});
		const tokensgUQMgz = BigInt("1596")
		const toSBBWuxj = accounts[2]
		const tokensyyiZJKR = BigInt("106")
		const toSA0ppQ = accounts[4]
		const fromur0Rgzm = accounts[1]
		const tokensQgtbju = BigInt("1202")
		const spenderJ2EJhr = accounts[0]
		const successT4tjXnw = await contractMdT5nlw.transfer.call(toSBBWuxj, tokensgUQMgz, {from: accounts[4]});
		const successkTE2awU = await contractMdT5nlw.transferFrom.call(fromur0Rgzm, toSA0ppQ, tokensyyiZJKR, {from: accounts[5]});
		const successC1nKvGx = await contractMdT5nlw.approve.call(spenderJ2EJhr, tokensQgtbju, {from: accounts[1]});

		assert.equal(successT4tjXnw, true)
		await expect(contractMdT5nlw.transferFrom.call(fromur0Rgzm, toSA0ppQ, tokensyyiZJKR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractWFXf9GI = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const spenderbWE5xh = accounts[3]
		const tokenOwnerEbwnU8i = accounts[3]
		const tokensKxWAqwl = BigInt("1872")
		const toeuDH4oR = "0x0000000000000000000000000000000000000001"
		const tokensbWjStm7 = BigInt("1044")
		const spenderphNpF5 = accounts[2]
		const tokensagt8WTK = BigInt("51")
		const tofFZpOZc = accounts[0]
		const tokensYKzJ7Db = BigInt("1148")
		const toteOYaQU = accounts[4]
		const remainingM2ZXCfz = await contractWFXf9GI.allowance.call(tokenOwnerEbwnU8i, spenderbWE5xh, {from: accounts[1]});
		const successqZjgVY = await contractWFXf9GI.transfer.call(toeuDH4oR, tokensKxWAqwl, {from: accounts[5]});
		const successLqwo81D = await contractWFXf9GI.approve.call(spenderphNpF5, tokensbWjStm7, {from: accounts[1]});
		const successFGCXzFm = await contractWFXf9GI.transfer.call(tofFZpOZc, tokensagt8WTK, {from: accounts[0]});
		const successJ92Sax = await contractWFXf9GI.transfer.call(toteOYaQU, tokensYKzJ7Db, {from: accounts[0]});
	});

	it('test for DingoInu', async () => {
		const contractkxpy7Q1 = await DingoInu.new({from: accounts[2]});
		const tokenOwnerg21quqo = accounts[2]
		const tokenOwnerWiHZxi = accounts[1]
		const tokensk6cjBpV = BigInt("638")
		const spenderPGLDFBc = accounts[0]
		const tokenOwnerF1MJfL6 = accounts[2]
		const balancen5yL3kD = await contractkxpy7Q1.balanceOf.call(tokenOwnerg21quqo, {from: accounts[0]});
		const nullXeihLvs = await contractkxpy7Q1.totalSupply.call({from: accounts[4]});
		const balancekppSa7M = await contractkxpy7Q1.balanceOf.call(tokenOwnerWiHZxi, {from: accounts[3]});
		const successRNxVF5h = await contractkxpy7Q1.approve.call(spenderPGLDFBc, tokensk6cjBpV, {from: accounts[0]});
		const balanceKYS62uk = await contractkxpy7Q1.balanceOf.call(tokenOwnerF1MJfL6, {from: accounts[0]});

		assert.equal(balanceKYS62uk, 1000000000000000000000000000000)
		assert.equal(balancekppSa7M, 0)
		assert.equal(balancen5yL3kD, 1000000000000000000000000000000)
		assert.equal(nullXeihLvs, 1000000000000000000000000000000)
		assert.equal(successRNxVF5h, true)
	});

	it('test for DingoInu', async () => {
		const contractcFr6xPh = await DingoInu.new({from: accounts[4]});
		const tokensuFmyTx = BigInt("1596")
		const toxe5umO9 = accounts[2]
		const tokensu9lQTtb = BigInt("584")
		const spenderALAHX49 = "0x0000000000000000000000000000000000000001"
		const spendergroqCgK = accounts[1]
		const tokenOwnerCjlcL7g = accounts[3]
		const tokensvxG3hg = BigInt("106")
		const to93OnvI = accounts[5]
		const fromUkzomYq = accounts[1]
		const tokensJ394ME9 = BigInt("1202")
		const spenderzQ7TTpO = accounts[0]
		const successBGAli7d = await contractcFr6xPh.transfer.call(toxe5umO9, tokensuFmyTx, {from: accounts[4]});
		const successPAnTSKn = await contractcFr6xPh.approve.call(spenderALAHX49, tokensu9lQTtb, {from: "0x0000000000000000000000000000000000000001"});
		const remainingEGbSrk = await contractcFr6xPh.allowance.call(tokenOwnerCjlcL7g, spendergroqCgK, {from: accounts[4]});
		const successGUTTATs = await contractcFr6xPh.transferFrom.call(fromUkzomYq, to93OnvI, tokensvxG3hg, {from: accounts[5]});
		const successd7KCA4A = await contractcFr6xPh.approve.call(spenderzQ7TTpO, tokensJ394ME9, {from: accounts[1]});

		assert.equal(remainingEGbSrk, 0)
		assert.equal(successBGAli7d, true)
		assert.equal(successPAnTSKn, true)
		await expect(contractcFr6xPh.transferFrom.call(fromUkzomYq, to93OnvI, tokensvxG3hg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})