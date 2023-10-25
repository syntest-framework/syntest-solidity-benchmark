const DingoInu = artifacts.require("DingoInu");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DingoInu', (accounts) => {
	it('test for DingoInu', async () => {
		const contractjH1Nryq = await DingoInu.new({from: accounts[3]});
		const tokensw3GtlOl = BigInt("1393")
		const spenderEU9qJpl = accounts[3]
		const tokens0w0aN1 = BigInt("1947")
		const tosdw2jK = accounts[2]
		const tokenOwnernQGX259 = accounts[1]
		const tokenOwnerYnzPPAx = accounts[4]
		const successvkMFwfg = await contractjH1Nryq.approve.call(spenderEU9qJpl, tokensw3GtlOl, {from: accounts[2]});
		const successxfkIBEv = await contractjH1Nryq.transfer.call(tosdw2jK, tokens0w0aN1, {from: accounts[5]});
		const balanceE4kto1w = await contractjH1Nryq.balanceOf.call(tokenOwnernQGX259, {from: accounts[0]});
		const balanceab9EnRr = await contractjH1Nryq.balanceOf.call(tokenOwnerYnzPPAx, {from: accounts[1]});

		assert.equal(successvkMFwfg, true)
		await expect(contractjH1Nryq.transfer.call(tosdw2jK, tokens0w0aN1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractFaeVCRu = await DingoInu.new({from: accounts[3]});
		const tokensNoLEqcb = BigInt("1594")
		const spenderPqMgjj = accounts[3]
		const tokensfs9Xp8 = BigInt("537")
		const toSPe4Bdg = accounts[5]
		const fromsITxXW = accounts[0]
		const tokenOwneriP3C1Aj = accounts[1]
		const tokenszFH6vFS = BigInt("1431")
		const spenderWgTaiuV = accounts[1]
		const tokensYZTEGfU = BigInt("1616")
		const toqDW3Jlx = accounts[1]
		const successbaL55Gh = await contractFaeVCRu.approve.call(spenderPqMgjj, tokensNoLEqcb, {from: accounts[3]});
		const successbHtV77O = await contractFaeVCRu.transferFrom.call(fromsITxXW, toSPe4Bdg, tokensfs9Xp8, {from: "0x0000000000000000000000000000000000000001"});
		const balanceMLSHpDf = await contractFaeVCRu.balanceOf.call(tokenOwneriP3C1Aj, {from: accounts[2]});
		const successmUQOVmV = await contractFaeVCRu.approve.call(spenderWgTaiuV, tokenszFH6vFS, {from: accounts[1]});
		const successNTWpgqX = await contractFaeVCRu.transfer.call(toqDW3Jlx, tokensYZTEGfU, {from: accounts[0]});

		assert.equal(successbaL55Gh, true)
		await expect(contractFaeVCRu.transferFrom.call(fromsITxXW, toSPe4Bdg, tokensfs9Xp8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractLqh7rD = await DingoInu.new({from: accounts[1]});
		const tokensiKSJmPa = BigInt("160")
		const toOQ6I0oy = accounts[0]
		const tokenOwnerf7XlQz7 = accounts[0]
		const spenderb4SbdOR = accounts[0]
		const tokenOwnerjhojmju = accounts[3]
		const tokens01ABBN = BigInt("884")
		const toEYB9pAt = accounts[4]
		const fromy1PivsM = accounts[5]
		const successefZqn5r = await contractLqh7rD.transfer.call(toOQ6I0oy, tokensiKSJmPa, {from: accounts[1]});
		const balancebQyJ12S = await contractLqh7rD.balanceOf.call(tokenOwnerf7XlQz7, {from: accounts[2]});
		const remainingjK9Dc9b = await contractLqh7rD.allowance.call(tokenOwnerjhojmju, spenderb4SbdOR, {from: "0x0000000000000000000000000000000000000001"});
		const nullk4V8eEY = await contractLqh7rD.totalSupply.call({from: accounts[2]});
		const successDOtEZRk = await contractLqh7rD.transferFrom.call(fromy1PivsM, toEYB9pAt, tokens01ABBN, {from: accounts[0]});

		assert.equal(balancebQyJ12S, 0)
		assert.equal(nullk4V8eEY, 1000000000000000000000000000000)
		assert.equal(remainingjK9Dc9b, 0)
		assert.equal(successefZqn5r, true)
		await expect(contractLqh7rD.transferFrom.call(fromy1PivsM, toEYB9pAt, tokens01ABBN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DingoInu', async () => {
		const contractgs2tnqY = await DingoInu.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensDH4S2Ds = BigInt("85")
		const toQgyJ2gK = accounts[4]
		const tokensszt8jdT = BigInt("1899")
		const tow7ytJdj = accounts[0]
		const fromd59zukg = accounts[3]
		const tokenOwnerImVRxjn = accounts[4]
		const tokensTmo8Ukr = BigInt("1275")
		const tojP4Eoct = "0x0000000000000000000000000000000000000001"
		const fromSBkHAya = accounts[5]
		const nullWtKaBwE = await contractgs2tnqY.totalSupply.call({from: accounts[0]});
		const successTPcm1h1 = await contractgs2tnqY.transfer.call(toQgyJ2gK, tokensDH4S2Ds, {from: accounts[5]});
		const successUQBMi6Z = await contractgs2tnqY.transferFrom.call(fromd59zukg, tow7ytJdj, tokensszt8jdT, {from: "0x0000000000000000000000000000000000000001"});
		const balanceA1bmtU = await contractgs2tnqY.balanceOf.call(tokenOwnerImVRxjn, {from: accounts[0]});
		const successlVdZUlu = await contractgs2tnqY.transferFrom.call(fromSBkHAya, tojP4Eoct, tokensTmo8Ukr, {from: accounts[3]});
	});
})