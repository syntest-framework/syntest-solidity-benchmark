const Baz = artifacts.require("Baz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Baz', (accounts) => {
	it('test for Baz', async () => {
		const Baz8WPFEj = await Baz.new({from: accounts[4]});
		const intRFXktwP = BigInt("-539")
		const intkgi2Un6 = BigInt("1385")
		const intNd5TYh5 = BigInt("2045")
		const intsvhMDw = BigInt("-1904")
		const intfNLLjA2 = BigInt("-1477")
		const intp0f3xoZ = BigInt("-1111")
		const intRz2ASb = BigInt("1318")
		const intIwrMS98 = BigInt("-1070")
		const intI8vytEd = BigInt("-1694")
		const intoktYi3I = BigInt("1441")
		const intABhzZG8 = BigInt("-1201")
		const intBoq6C9X = BigInt("1109")
		const int256zzCbKO = await Baz8WPFEj.baz.call(intNd5TYh5, intkgi2Un6, intRFXktwP, {from: accounts[5]});
		const int256JzTPW2T = await Baz8WPFEj.baz.call(intp0f3xoZ, intfNLLjA2, intsvhMDw, {from: accounts[1]});
		const int256Wve8M3l = await Baz8WPFEj.baz.call(intI8vytEd, intIwrMS98, intRz2ASb, {from: accounts[2]});
		const booloD8NzTL = await Baz8WPFEj.echidna_all_states.call({from: accounts[5]});
		const int256AH40gzn = await Baz8WPFEj.baz.call(intBoq6C9X, intABhzZG8, intoktYi3I, {from: "0x0000000000000000000000000000000000000001"});
		const boolyzi6yJ = await Baz8WPFEj.echidna_all_states.call({from: accounts[2]});

		assert.equal(booloD8NzTL, true)
		assert.equal(boolyzi6yJ, true)
		assert.equal(int256AH40gzn, BigInt("5"))
		assert.equal(int256JzTPW2T, BigInt("1"))
		assert.equal(int256Wve8M3l, BigInt("5"))
		assert.equal(int256zzCbKO, BigInt("4"))
	});

	it('test for Baz', async () => {
		const BazPmo7B8S = await Baz.new({from: "0x0000000000000000000000000000000000000001"});
		const intwIZD2UR = BigInt("1669")
		const intNJa3N6G = BigInt("-67")
		const intvsXae2A = BigInt("1955")
		const inteY80wJM = BigInt("-1368")
		const intgRoKY6M = BigInt("-856")
		const intCj9ibWB = BigInt("1099")
		const intvC99x4f = BigInt("216")
		const intOs5nBq = BigInt("-840")
		const intQJsdZbs = BigInt("259")
		const boolLeQtAzX = await BazPmo7B8S.echidna_all_states.call({from: accounts[0]});
		const boolcfMVcmn = await BazPmo7B8S.echidna_all_states.call({from: accounts[4]});
		const int256mz2b0qB = await BazPmo7B8S.baz.call(intvsXae2A, intNJa3N6G, intwIZD2UR, {from: accounts[2]});
		const int256ZMgCB5K = await BazPmo7B8S.baz.call(intCj9ibWB, intgRoKY6M, inteY80wJM, {from: accounts[0]});
		const int256RfZ3j3a = await BazPmo7B8S.baz.call(intQJsdZbs, intOs5nBq, intvC99x4f, {from: accounts[4]});
		const boolP0cD1fv = await BazPmo7B8S.echidna_all_states.call({from: accounts[0]});
	});

	it('test for Baz', async () => {
		const BazjyfoGID = await Baz.new({from: accounts[5]});
		const inti8ZFqLL = BigInt("1557")
		const intJumPhSp = BigInt("-840")
		const intN3DkWO = BigInt("-2018")
		const intO2tlPC = BigInt("-2017")
		const intUzBNgpC = BigInt("670")
		const intnJcBI8i = BigInt("-352")
		const boolFSZKeQJ = await BazjyfoGID.echidna_all_states.call({from: accounts[3]});
		const int256tRR2Hyo = await BazjyfoGID.baz.call(intN3DkWO, intJumPhSp, inti8ZFqLL, {from: accounts[1]});
		const int256DLURxI = await BazjyfoGID.baz.call(intnJcBI8i, intUzBNgpC, intO2tlPC, {from: accounts[4]});

		assert.equal(boolFSZKeQJ, true)
		assert.equal(int256DLURxI, BigInt("3"))
		assert.equal(int256tRR2Hyo, BigInt("5"))
	});

	it('test for Baz', async () => {
		const Bazx4LBwa0 = await Baz.new({from: accounts[3]});
		const intY7zQSMk = BigInt("-761")
		const intQPIMU84 = BigInt("613")
		const intnT4rYCC = BigInt("42")
		const int256lWIds4t = await Bazx4LBwa0.baz.call(intnT4rYCC, intQPIMU84, intY7zQSMk, {from: accounts[2]});

		assert.equal(int256lWIds4t, BigInt("2"))
	});
})