const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADs5uH3Az = await ZAD.new({from: accounts[3]});
		const uintlmjcp8J = BigInt("134")
		const addressdCsGs0 = accounts[5]
		const addresso3nlSL = accounts[1]
		const addressnXe8Ou2 = accounts[3]
		const uint8DPAXcDD = await ZADs5uH3Az.decimals.call({from: accounts[1]});
		const boolIRnyMf = await ZADs5uH3Az.increaseAllowance.call(addressdCsGs0, uintlmjcp8J, {from: accounts[2]});
		const uint256s1kpzcV = await ZADs5uH3Az.allowance.call(addressnXe8Ou2, addresso3nlSL, {from: accounts[0]});

		assert.equal(boolIRnyMf, true)
		assert.equal(uint256s1kpzcV, BigInt("0"))
		assert.equal(uint8DPAXcDD, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADnLSPRhB = await ZAD.new({from: accounts[2]});
		const uintNsGn8I0 = BigInt("221")
		const addresspVqCdCM = accounts[4]
		const uintQgLk713 = BigInt("912")
		const addressXoO9tOq = "0x0000000000000000000000000000000000000001"
		const boolJ6mF6qi = await ZADnLSPRhB.decreaseAllowance.call(addresspVqCdCM, uintNsGn8I0, {from: accounts[2]});
		const boolLL9N5V4 = await ZADnLSPRhB.approve.call(addressXoO9tOq, uintQgLk713, {from: "0x0000000000000000000000000000000000000001"});
		const uint8det6h46 = await ZADnLSPRhB.decimals.call({from: accounts[5]});
		const uint8gqlBjJI = await ZADnLSPRhB.decimals.call({from: accounts[4]});

		await expect(ZADnLSPRhB.decreaseAllowance.call(addresspVqCdCM, uintNsGn8I0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADUiMbOKu = await ZAD.new({from: accounts[4]});
		const uintmGIUfM4 = BigInt("1774")
		const addressvdGBlQ = accounts[1]
		const uintCFSGSmP = BigInt("469")
		const addressgpggT9o = accounts[0]
		const boolXE10rcY = await ZADUiMbOKu.transfer.call(addressvdGBlQ, uintmGIUfM4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jQB4jEH = await ZADUiMbOKu.totalSupply.call({from: accounts[3]});
		const boolwup8nXe = await ZADUiMbOKu.decreaseAllowance.call(addressgpggT9o, uintCFSGSmP, {from: accounts[4]});

		await expect(ZADUiMbOKu.transfer.call(addressvdGBlQ, uintmGIUfM4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADVYBlY2V = await ZAD.new({from: accounts[4]});
		const uintSdf6IVT = BigInt("1033")
		const uintdDycGyE = BigInt("1003")
		const addressZJ0Z4aJ = accounts[0]
		const uint256y8S8yGn = await ZADVYBlY2V._burn.call(uintSdf6IVT, {from: accounts[2]});
		const stringCr8IKTL = await ZADVYBlY2V.symbol.call({from: accounts[1]});
		const boolpiHwHlr = await ZADVYBlY2V.increaseAllowance.call(addressZJ0Z4aJ, uintdDycGyE, {from: accounts[1]});

		await expect(ZADVYBlY2V._burn.call(uintSdf6IVT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADRKSSsLB = await ZAD.new({from: accounts[3]});
		const uintetumPW = BigInt("605")
		const addressN9bxYb = accounts[3]
		const addressca96aT = accounts[2]
		const uintyjBNJuJ = BigInt("288")
		const addresspWlH3pn = accounts[4]
		const uintR235lm3 = BigInt("1285")
		const addresspDsTX4U = "0x0000000000000000000000000000000000000001"
		const addressHro1kvM = accounts[1]
		const uintIAQnjfo = BigInt("476")
		const addressbkwbVB7 = accounts[2]
		const boolJAJsN06 = await ZADRKSSsLB.transferFrom.call(addressca96aT, addressN9bxYb, uintetumPW, {from: accounts[3]});
		const boolChQF4ZN = await ZADRKSSsLB.approve.call(addresspWlH3pn, uintyjBNJuJ, {from: accounts[1]});
		const uint256C4hqyb = await ZADRKSSsLB._burn.call(uintR235lm3, {from: accounts[2]});
		const uint256mvn9NHy = await ZADRKSSsLB.allowance.call(addressHro1kvM, addresspDsTX4U, {from: accounts[5]});
		const boolIVCMcuo = await ZADRKSSsLB.approve.call(addressbkwbVB7, uintIAQnjfo, {from: accounts[1]});

		await expect(ZADRKSSsLB.transferFrom.call(addressca96aT, addressN9bxYb, uintetumPW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADFa5aaR = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDC9yOni = BigInt("2008")
		const addressmSNaTg = "0x0000000000000000000000000000000000000001"
		const addressyHkZhio = accounts[3]
		const stringdJNoFaP = await ZADFa5aaR.symbol.call({from: accounts[4]});
		const boolypMGWEF = await ZADFa5aaR.transferFrom.call(addressyHkZhio, addressmSNaTg, uintDC9yOni, {from: accounts[4]});
		const stringLFuadrg = await ZADFa5aaR.symbol.call({from: accounts[3]});
		const uint8GHWdBXo = await ZADFa5aaR.decimals.call({from: accounts[0]});
	});

	it('test for ZAD', async () => {
		const ZADBGZJpCx = await ZAD.new({from: accounts[5]});
		const addressjXny2QW = accounts[2]
		const addressIOYPWjQ = accounts[3]
		const uint256xXmaXm9 = await ZADBGZJpCx.totalSupply.call({from: accounts[0]});
		const stringRPWt5Zo = await ZADBGZJpCx.symbol.call({from: accounts[0]});
		const uint256s975ZCY = await ZADBGZJpCx.allowance.call(addressIOYPWjQ, addressjXny2QW, {from: accounts[2]});

		assert.equal(stringRPWt5Zo, "ZAD")
		assert.equal(uint256s975ZCY, BigInt("0"))
		assert.equal(uint256xXmaXm9, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADVsgK5ZK = await ZAD.new({from: accounts[3]});
		const uintjVvgOjg = BigInt("161")
		const addressOcWtE4b = accounts[3]
		const addressrxRuNhZ = accounts[0]
		const addressEvkfmrT = accounts[0]
		const uintPbYO0ly = BigInt("1644")
		const addressa10bGHO = accounts[5]
		const uintVC77dSA = BigInt("1417")
		const addressH1IUt12 = accounts[3]
		const addressdbMv3Q = accounts[2]
		const boolqqwFXu = await ZADVsgK5ZK.increaseAllowance.call(addressOcWtE4b, uintjVvgOjg, {from: accounts[1]});
		const uint256lfN2vOl = await ZADVsgK5ZK.allowance.call(addressEvkfmrT, addressrxRuNhZ, {from: accounts[2]});
		const boolhj4vUB = await ZADVsgK5ZK.approve.call(addressa10bGHO, uintPbYO0ly, {from: accounts[0]});
		const boolMRmXUi8 = await ZADVsgK5ZK.transferFrom.call(addressdbMv3Q, addressH1IUt12, uintVC77dSA, {from: accounts[1]});

		assert.equal(boolhj4vUB, true)
		assert.equal(boolqqwFXu, true)
		assert.equal(uint256lfN2vOl, BigInt("0"))
		await expect(ZADVsgK5ZK.transferFrom.call(addressdbMv3Q, addressH1IUt12, uintVC77dSA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADVYBlY2V = await ZAD.new({from: accounts[4]});
		const uintlyxHOxp = BigInt("1033")
		const uintnIidWUk = BigInt("362")
		const addresspT76qa3 = "0x0000000000000000000000000000000000000001"
		const stringYxXQsnV = await ZADVYBlY2V.name.call({from: accounts[3]});
		const uint256y8S8yGn = await ZADVYBlY2V._burn.call(uintlyxHOxp, {from: accounts[2]});
		const boolLshUCE2 = await ZADVYBlY2V.increaseAllowance.call(addresspT76qa3, uintnIidWUk, {from: accounts[4]});

		assert.equal(stringYxXQsnV, "Zadkiel")
		await expect(ZADVYBlY2V._burn.call(uintlyxHOxp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADVYBlY2V = await ZAD.new({from: accounts[4]});
		const addressR6jsAnx = accounts[0]
		const uint256cQUffwP = await ZADVYBlY2V.balanceOf.call(addressR6jsAnx, {from: accounts[4]});

		assert.equal(uint256cQUffwP, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADQnKJCAb = await ZAD.new({from: accounts[5]});
		const uintrEtZZVG = BigInt("1613")
		const addressMQy4NO4 = accounts[2]
		const uintSW2HhcQ = BigInt("1570")
		const addressS2lBjYx = "0x0000000000000000000000000000000000000000"
		const addressWQT8Odx = accounts[3]
		const uinteRmIK32 = BigInt("1577")
		const addressSjzuNI1 = accounts[5]
		const addressVQPMc3 = accounts[4]
		const boolUPUcepJ = await ZADQnKJCAb.increaseAllowance.call(addressMQy4NO4, uintrEtZZVG, {from: accounts[4]});
		const stringTpFTwk = await ZADQnKJCAb.name.call({from: accounts[3]});
		const uint256R6Esa6b = await ZADQnKJCAb.totalSupply.call({from: accounts[1]});
		const boolZxctmd0 = await ZADQnKJCAb.transferFrom.call(addressWQT8Odx, addressS2lBjYx, uintSW2HhcQ, {from: accounts[0]});
		const booleJL5VSq = await ZADQnKJCAb.transfer.call(addressSjzuNI1, uinteRmIK32, {from: accounts[4]});
		const uint256UydD9Ts = await ZADQnKJCAb.balanceOf.call(addressVQPMc3, {from: accounts[3]});

		assert.equal(boolUPUcepJ, true)
		assert.equal(stringTpFTwk, "Zadkiel")
		assert.equal(uint256R6Esa6b, BigInt("100000000000000000000000000"))
		await expect(ZADQnKJCAb.transferFrom.call(addressWQT8Odx, addressS2lBjYx, uintSW2HhcQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})