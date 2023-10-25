const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringR5uLbqR = "ecvK2Kln4rj"
		const stringYDij09u = "UUPeMfMqArTf"
		const uinterh7CvV = BigInt("229")
		const AntiBaseProtocolnKfsDo = await AntiBaseProtocol.new(stringR5uLbqR, stringYDij09u, uinterh7CvV, {from: accounts[2]});
		const uintsgMFN0w = BigInt("691")
		const addressqsfTfah = accounts[0]
		const addressISYDMxo = accounts[1]
		const uint256XO5GfN = await AntiBaseProtocolnKfsDo.findBurnFee.call(uintsgMFN0w, {from: accounts[5]});
		const stringJI5nG3i = await AntiBaseProtocolnKfsDo.symbol.call({from: accounts[1]});
		const uint256JFakmGy = await AntiBaseProtocolnKfsDo.allowance.call(addressISYDMxo, addressqsfTfah, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbVAjAdj = await AntiBaseProtocol.new({from: accounts[4]});
		const uintcSlKyQ = BigInt("503")
		const addressyewFzF4 = accounts[0]
		const uintB57hRR0 = BigInt("621")
		const addresspwalZKd = accounts[3]
		const addressKdVbtMO = accounts[0]
		const addressg6L1wgY = accounts[0]
		const uintN3YssZJ = BigInt("1169")
		const addressEJOASCd = accounts[0]
		await AntiBaseProtocolbVAjAdj.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const booldDfPQr = await AntiBaseProtocolbVAjAdj.approve.call(addressyewFzF4, uintcSlKyQ, {from: accounts[0]});
		const boolFuNBEVM = await AntiBaseProtocolbVAjAdj.increaseAllowance.call(addresspwalZKd, uintB57hRR0, {from: accounts[3]});
		const uint256lVSgE2i = await AntiBaseProtocolbVAjAdj.allowance.call(addressg6L1wgY, addressKdVbtMO, {from: accounts[1]});
		const addresst6NG0x1 = await AntiBaseProtocolbVAjAdj._mint.call(addressEJOASCd, uintN3YssZJ, {from: accounts[4]});

		await expect(AntiBaseProtocolbVAjAdj.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintznBIaFp = BigInt("422")
		const uintsI1k68l = BigInt("258")
		const addressQyy49QI = accounts[4]
		const uintncAFsYu = BigInt("918")
		const addressqFttXq = accounts[2]
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uintznBIaFp, {from: accounts[3]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const boolfWxEcjR = await AntiBaseProtocolEUDJEV.transfer.call(addressQyy49QI, uintsI1k68l, {from: accounts[1]});
		const addressziOrGsy = await AntiBaseProtocolEUDJEV._burn.call(addressqFttXq, uintncAFsYu, {from: accounts[1]});

		assert.equal(uint256W7xY5BC, BigInt("31250000000000000000"))
		assert.equal(uint256xt2mZB, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolEUDJEV.transfer.call(addressQyy49QI, uintsI1k68l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolVGmwbE3 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintMGWm6ww = BigInt("1370")
		const addressznHKNl = accounts[0]
		const uintRWjWz5t = BigInt("327")
		const addressrLdQ44L = accounts[2]
		const addressLGMYCTb = "0x0000000000000000000000000000000000000001"
		const uintMla2B5I = BigInt("1083")
		const addresspBKVRTn = accounts[4]
		const boolwl1VDnE = await AntiBaseProtocolVGmwbE3.approve.call(addressznHKNl, uintMGWm6ww, {from: accounts[0]});
		const bool2PJKNY = await AntiBaseProtocolVGmwbE3.decreaseAllowance.call(addressrLdQ44L, uintRWjWz5t, {from: accounts[1]});
		const addressy6mbQba = await AntiBaseProtocolVGmwbE3.transferOwnership.call(addressLGMYCTb, {from: accounts[1]});
		const addresseJGt0fG = await AntiBaseProtocolVGmwbE3._burn.call(addresspBKVRTn, uintMla2B5I, {from: accounts[3]});
		await AntiBaseProtocolVGmwbE3.requestGas.call({from: accounts[4]});

		assert.equal(boolwl1VDnE, true)
		await expect(AntiBaseProtocolVGmwbE3.decreaseAllowance.call(addressrLdQ44L, uintRWjWz5t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolsuiSmV = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPsam2W8 = BigInt("813")
		const addresspLxQcY = accounts[1]
		const addresscFysC9E = accounts[1]
		const bool8hlR6t = await AntiBaseProtocolsuiSmV.transferFrom.call(addresscFysC9E, addresspLxQcY, uintPsam2W8, {from: accounts[5]});
		const uint256nf2cKv7 = await AntiBaseProtocolsuiSmV.totalSupply.call({from: accounts[0]});
		await AntiBaseProtocolsuiSmV.onlyOwner.call({from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintgaJLKlx = BigInt("428")
		const uintiv4SQ2B = BigInt("1551")
		const uintZy5YupM = BigInt("258")
		const addressG5Ll1J = accounts[4]
		const uintwv1Qfk4 = BigInt("918")
		const addressGUeQGtm = accounts[2]
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256kpzYVx = await AntiBaseProtocolEUDJEV.burn.call(uintgaJLKlx, {from: accounts[2]});
		const uint256jUESHgF = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[4]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const uint256xv0HCUt = await AntiBaseProtocolEUDJEV.findRewardFee.call(uintiv4SQ2B, {from: "0x0000000000000000000000000000000000000001"});
		const boolfWxEcjR = await AntiBaseProtocolEUDJEV.transfer.call(addressG5Ll1J, uintZy5YupM, {from: accounts[1]});
		const addressziOrGsy = await AntiBaseProtocolEUDJEV._burn.call(addressGUeQGtm, uintwv1Qfk4, {from: accounts[1]});

		assert.equal(uint256W7xY5BC, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolEUDJEV.burn.call(uintgaJLKlx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintu5icEYM = BigInt("422")
		const uintFh6ctPk = BigInt("1573")
		const uintoI1vSOy = BigInt("258")
		const addressH4w56k2 = accounts[4]
		const uintvJDyxZk = BigInt("918")
		const addressOXO9iV = accounts[2]
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uintu5icEYM, {from: accounts[3]});
		const uint256wqeihK = await AntiBaseProtocolEUDJEV.findRewardFee.call(uintFh6ctPk, {from: accounts[2]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const boolfWxEcjR = await AntiBaseProtocolEUDJEV.transfer.call(addressH4w56k2, uintoI1vSOy, {from: accounts[1]});
		const uint8NmGhapZ = await AntiBaseProtocolEUDJEV.decimals.call({from: accounts[1]});
		const addressziOrGsy = await AntiBaseProtocolEUDJEV._burn.call(addressOXO9iV, uintvJDyxZk, {from: accounts[1]});

		assert.equal(uint256W7xY5BC, BigInt("31250000000000000000"))
		assert.equal(uint256wqeihK, BigInt("80"))
		assert.equal(uint256xt2mZB, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolEUDJEV.transfer.call(addressH4w56k2, uintoI1vSOy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintrkphWC = BigInt("422")
		const addressGTtH04j = accounts[2]
		const uintD5QAFhi = BigInt("258")
		const addressCzHfUSO = accounts[4]
		const uintwVNhmWk = BigInt("918")
		const addresstOK5Z4 = accounts[2]
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uintrkphWC, {from: accounts[3]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const stringlA3uKlM = await AntiBaseProtocolEUDJEV.name.call({from: accounts[4]});
		const addressCaT8LJB = await AntiBaseProtocolEUDJEV.transferOwnership.call(addressGTtH04j, {from: accounts[1]});
		const boolfWxEcjR = await AntiBaseProtocolEUDJEV.transfer.call(addressCzHfUSO, uintD5QAFhi, {from: accounts[1]});
		const addressziOrGsy = await AntiBaseProtocolEUDJEV._burn.call(addresstOK5Z4, uintwVNhmWk, {from: accounts[1]});

		assert.equal(stringlA3uKlM, "https://t.me/antibaseprotocol")
		assert.equal(uint256W7xY5BC, BigInt("31250000000000000000"))
		assert.equal(uint256xt2mZB, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolEUDJEV.transferOwnership.call(addressGTtH04j, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintPkXGVB0 = BigInt("422")
		const uintec566r0 = BigInt("1711")
		const addressagZuXse = accounts[5]
		const addressJ830OLR = accounts[4]
		const uintCjsjmJ = BigInt("258")
		const addressDM3NPqB = accounts[4]
		const uintipGHbwp = BigInt("918")
		const addressFCoEQPS = accounts[2]
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uintPkXGVB0, {from: accounts[3]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const addressKyvg9AN = await AntiBaseProtocolEUDJEV._approve.call(addressJ830OLR, addressagZuXse, uintec566r0, {from: accounts[1]});
		const boolfWxEcjR = await AntiBaseProtocolEUDJEV.transfer.call(addressDM3NPqB, uintCjsjmJ, {from: accounts[1]});
		const addressziOrGsy = await AntiBaseProtocolEUDJEV._burn.call(addressFCoEQPS, uintipGHbwp, {from: accounts[1]});

		assert.equal(uint256W7xY5BC, BigInt("31250000000000000000"))
		assert.equal(uint256xt2mZB, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolEUDJEV._approve.call(addressJ830OLR, addressagZuXse, uintec566r0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbVAjAdj = await AntiBaseProtocol.new({from: accounts[4]});
		const uint1cQRb2 = BigInt("503")
		const addressBK5JFF6 = accounts[0]
		const uintMyNGaNT = BigInt("621")
		const address42yXtm = accounts[3]
		const addresseUDsSTu = accounts[0]
		const addresspm495Xx = accounts[0]
		const uintWNQ9say = BigInt("1169")
		const addressDmaj7L = accounts[0]
		const booldDfPQr = await AntiBaseProtocolbVAjAdj.approve.call(addressBK5JFF6, uint1cQRb2, {from: accounts[0]});
		const boolFuNBEVM = await AntiBaseProtocolbVAjAdj.increaseAllowance.call(address42yXtm, uintMyNGaNT, {from: accounts[3]});
		const uint256lVSgE2i = await AntiBaseProtocolbVAjAdj.allowance.call(addresspm495Xx, addresseUDsSTu, {from: accounts[1]});
		const addresst6NG0x1 = await AntiBaseProtocolbVAjAdj._mint.call(addressDmaj7L, uintWNQ9say, {from: accounts[4]});

		assert.equal(boolFuNBEVM, true)
		assert.equal(booldDfPQr, true)
		assert.equal(uint256lVSgE2i, BigInt("0"))
		await expect(AntiBaseProtocolbVAjAdj._mint.call(addressDmaj7L, uintWNQ9say, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintoktrYBU = BigInt("422")
		const addressRn3TfSq = accounts[2]
		const uinteCRrj1o = BigInt("258")
		const addressurY2G6a = accounts[4]
		const uinthDe9nzS = BigInt("901")
		const addressgAJrLv = accounts[2]
		const uintRRZ3zOp = BigInt("677")
		const addressgg1bUa = accounts[1]
		const addressEN3WpPX = accounts[0]
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uintoktrYBU, {from: accounts[3]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256OxWLGNO = await AntiBaseProtocolEUDJEV.balanceOf.call(addressRn3TfSq, {from: accounts[3]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const boolfWxEcjR = await AntiBaseProtocolEUDJEV.transfer.call(addressurY2G6a, uinteCRrj1o, {from: accounts[1]});
		const boolq4XeYS9 = await AntiBaseProtocolEUDJEV.isOwner.call({from: accounts[0]});
		const addressziOrGsy = await AntiBaseProtocolEUDJEV._burn.call(addressgAJrLv, uinthDe9nzS, {from: accounts[1]});
		const addressZKwXE2U = await AntiBaseProtocolEUDJEV.burnFrom.call(addressgg1bUa, uintRRZ3zOp, {from: accounts[3]});
		const addressjnpTay = await AntiBaseProtocolEUDJEV.transferOwnership.call(addressEN3WpPX, {from: accounts[3]});

		assert.equal(uint256OxWLGNO, BigInt("0"))
		assert.equal(uint256W7xY5BC, BigInt("31250000000000000000"))
		assert.equal(uint256xt2mZB, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolEUDJEV.transfer.call(addressurY2G6a, uinteCRrj1o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintn7ZTVr4 = BigInt("422")
		const uintwDsoh4G = BigInt("1573")
		const addressrng7l57 = accounts[4]
		const addressHiVv3P4 = accounts[0]
		const uintZPjRRc = BigInt("918")
		const addressT8V4Sko = accounts[2]
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uintn7ZTVr4, {from: accounts[3]});
		const uint256wqeihK = await AntiBaseProtocolEUDJEV.findRewardFee.call(uintwDsoh4G, {from: accounts[2]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const uint256sdUWkta = await AntiBaseProtocolEUDJEV.allowance.call(addressHiVv3P4, addressrng7l57, {from: accounts[2]});
		const uint8NmGhapZ = await AntiBaseProtocolEUDJEV.decimals.call({from: accounts[1]});
		const addressLUpt0CM = await AntiBaseProtocolEUDJEV.owner.call({from: accounts[4]});
		const addressziOrGsy = await AntiBaseProtocolEUDJEV._burn.call(addressT8V4Sko, uintZPjRRc, {from: accounts[1]});

		assert.equal(addressLUpt0CM, 0x966A407489770c1D156a2551e0750D45482A72AD)
		assert.equal(uint256W7xY5BC, BigInt("31250000000000000000"))
		assert.equal(uint256sdUWkta, BigInt("0"))
		assert.equal(uint256wqeihK, BigInt("80"))
		assert.equal(uint256xt2mZB, BigInt("31250000000000000000"))
		assert.equal(uint8NmGhapZ, BigInt("18"))
		await expect(AntiBaseProtocolEUDJEV._burn.call(addressT8V4Sko, uintZPjRRc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintJLfD67 = BigInt("422")
		const uintPgH7c65 = BigInt("2025")
		const addressZqhq8QZ = accounts[0]
		const uintpuEBZ9Y = BigInt("258")
		const addressjYbkw18 = accounts[4]
		const uintZDGE28y = BigInt("918")
		const addressj6ycx8E = accounts[2]
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uintJLfD67, {from: accounts[3]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const addressVSn4wB = await AntiBaseProtocolEUDJEV.burnFrom.call(addressZqhq8QZ, uintPgH7c65, {from: accounts[1]});
		const boolfWxEcjR = await AntiBaseProtocolEUDJEV.transfer.call(addressjYbkw18, uintpuEBZ9Y, {from: accounts[1]});
		const boolVEaRLj = await AntiBaseProtocolEUDJEV.isOwner.call({from: accounts[0]});
		const addressziOrGsy = await AntiBaseProtocolEUDJEV._burn.call(addressj6ycx8E, uintZDGE28y, {from: accounts[1]});

		assert.equal(uint256W7xY5BC, BigInt("31250000000000000000"))
		assert.equal(uint256xt2mZB, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolEUDJEV.burnFrom.call(addressZqhq8QZ, uintPgH7c65, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintim9ELx = BigInt("460")
		const uintQg8q5G = BigInt("1570")
		const uinteXDHoix = BigInt("1194")
		const uintsF4jQ7i = BigInt("918")
		const addressQFFaRLz = accounts[2]
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uintim9ELx, {from: accounts[3]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256L8rNgFh = await AntiBaseProtocolEUDJEV.findBurnFee.call(uintQg8q5G, {from: accounts[2]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const uint256JQVvUWk = await AntiBaseProtocolEUDJEV.findRewardFee.call(uinteXDHoix, {from: accounts[3]});
		const addressziOrGsy = await AntiBaseProtocolEUDJEV._burn.call(addressQFFaRLz, uintsF4jQ7i, {from: accounts[1]});

		assert.equal(uint256JQVvUWk, BigInt("60"))
		assert.equal(uint256L8rNgFh, BigInt("240"))
		assert.equal(uint256W7xY5BC, BigInt("31250000000000000000"))
		assert.equal(uint256xt2mZB, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolEUDJEV._burn.call(addressQFFaRLz, uintsF4jQ7i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uint6kkb1d = BigInt("873")
		const addressr9GYLxs = accounts[1]
		const addressKUGKlyn = accounts[3]
		const uinti3nqdRp = BigInt("422")
		const uintXXi76P = BigInt("1573")
		const uintcdGce99 = BigInt("968")
		const addresstFG69nM = "0x0000000000000000000000000000000000000001"
		const uintpkx9eXS = BigInt("258")
		const addressI9IwxEt = accounts[4]
		const boolsZf58dh = await AntiBaseProtocolEUDJEV.transferFrom.call(addressKUGKlyn, addressr9GYLxs, uint6kkb1d, {from: accounts[4]});
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uinti3nqdRp, {from: accounts[3]});
		const uint256wqeihK = await AntiBaseProtocolEUDJEV.findRewardFee.call(uintXXi76P, {from: accounts[2]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const boolzrGmtoJ = await AntiBaseProtocolEUDJEV.approve.call(addresstFG69nM, uintcdGce99, {from: accounts[3]});
		const boolfWxEcjR = await AntiBaseProtocolEUDJEV.transfer.call(addressI9IwxEt, uintpkx9eXS, {from: accounts[1]});
		const uint8NmGhapZ = await AntiBaseProtocolEUDJEV.decimals.call({from: accounts[1]});

		await expect(AntiBaseProtocolEUDJEV.transferFrom.call(addressKUGKlyn, addressr9GYLxs, uint6kkb1d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintAs2bfe7 = BigInt("422")
		const uintLv1pTd9 = BigInt("1573")
		const uintWWSOntI = BigInt("258")
		const addressOXBADvd = accounts[4]
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uintAs2bfe7, {from: accounts[3]});
		const uint256wqeihK = await AntiBaseProtocolEUDJEV.findRewardFee.call(uintLv1pTd9, {from: accounts[2]});
		const stringmTe9WCm = await AntiBaseProtocolEUDJEV.symbol.call({from: accounts[5]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const boolfWxEcjR = await AntiBaseProtocolEUDJEV.transfer.call(addressOXBADvd, uintWWSOntI, {from: accounts[1]});
		const uint8NmGhapZ = await AntiBaseProtocolEUDJEV.decimals.call({from: accounts[1]});

		assert.equal(stringmTe9WCm, "ABASE")
		assert.equal(uint256W7xY5BC, BigInt("31250000000000000000"))
		assert.equal(uint256wqeihK, BigInt("80"))
		assert.equal(uint256xt2mZB, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolEUDJEV.transfer.call(addressOXBADvd, uintWWSOntI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintd4EuYkH = BigInt("1199")
		const addressO0uxyTn = accounts[3]
		const uintI0hFq8 = BigInt("422")
		const uintfRlcHtL = BigInt("1573")
		const uintnCNzcI6 = BigInt("370")
		const uintdUbsD9d = BigInt("117")
		const addressNM8N0JY = accounts[5]
		const uintI35SANI = BigInt("258")
		const addressg0mojEA = accounts[5]
		const uintCqEztzr = BigInt("873")
		const addressHNPDiGS = accounts[1]
		const addressooG5BJC = "0x0000000000000000000000000000000000000001"
		const addressQA6Q5EL = await AntiBaseProtocolEUDJEV.burnFrom.call(addressO0uxyTn, uintd4EuYkH, {from: accounts[3]});
		const uint256oCTeTFL = await AntiBaseProtocolEUDJEV.burn.call(uintI0hFq8, {from: accounts[3]});
		const uint256wqeihK = await AntiBaseProtocolEUDJEV.findRewardFee.call(uintfRlcHtL, {from: accounts[2]});
		const uint256W7xY5BC = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[3]});
		const uint256xt2mZB = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const uint256QnX3PAd = await AntiBaseProtocolEUDJEV.findRewardFee.call(uintnCNzcI6, {from: accounts[2]});
		const uint256ljMOsyL = await AntiBaseProtocolEUDJEV.findBurnFee.call(uintdUbsD9d, {from: accounts[4]});
		const addresshG5UlHf = await AntiBaseProtocolEUDJEV.transferOwnership.call(addressNM8N0JY, {from: accounts[2]});
		const addressxwelUJA = await AntiBaseProtocolEUDJEV.owner.call({from: accounts[0]});
		const boolfWxEcjR = await AntiBaseProtocolEUDJEV.transfer.call(addressg0mojEA, uintI35SANI, {from: accounts[1]});
		const boolZjkXQ0R = await AntiBaseProtocolEUDJEV.transferFrom.call(addressooG5BJC, addressHNPDiGS, uintCqEztzr, {from: accounts[2]});
		const uint256E0L973 = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[0]});
		const uint8NmGhapZ = await AntiBaseProtocolEUDJEV.decimals.call({from: accounts[1]});

		await expect(AntiBaseProtocolEUDJEV.burnFrom.call(addressO0uxyTn, uintd4EuYkH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintgxc8Us2 = BigInt("1287")
		const uintXkPLVZa = BigInt("854")
		const addressX04M2pp = accounts[3]
		const addressTBjUk9k = accounts[3]
		const uint256hBZ7ItE = await AntiBaseProtocolEUDJEV.findRewardFee.call(uintgxc8Us2, {from: accounts[3]});
		await AntiBaseProtocolEUDJEV.renounceOwnership.call({from: accounts[3]});
		const boolsZf58dh = await AntiBaseProtocolEUDJEV.transferFrom.call(addressTBjUk9k, addressX04M2pp, uintXkPLVZa, {from: accounts[4]});

		assert.equal(uint256hBZ7ItE, BigInt("65"))
		await expect(AntiBaseProtocolEUDJEV.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const addressqTq6wQQ = accounts[6]
		const addressHU8SYRp = await AntiBaseProtocolEUDJEV.transferOwnership.call(addressqTq6wQQ, {from: accounts[3]});
		const uint8NmGhapZ = await AntiBaseProtocolEUDJEV.decimals.call({from: accounts[1]});

		assert.equal(uint8NmGhapZ, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolEUDJEV = await AntiBaseProtocol.new({from: accounts[3]});
		const uintXrflPHZ = BigInt("0")
		const addressaTb7Ano = accounts[4]
		const addressmDhgVpQ = accounts[5]
		const uintb2M8mdL = BigInt("94")
		const uintrsLIsDU = BigInt("1955")
		const boolCrZIjt = await AntiBaseProtocolEUDJEV.transferFrom.call(addressmDhgVpQ, addressaTb7Ano, uintXrflPHZ, {from: accounts[1]});
		const uint256ljMOsyL = await AntiBaseProtocolEUDJEV.findBurnFee.call(uintb2M8mdL, {from: accounts[4]});
		const uint256WF3PdVo = await AntiBaseProtocolEUDJEV.totalSupply.call({from: accounts[2]});
		const uint256SRzSHFu = await AntiBaseProtocolEUDJEV.findBurnFee.call(uintrsLIsDU, {from: accounts[5]});

		assert.equal(boolCrZIjt, true)
		assert.equal(uint256SRzSHFu, BigInt("300"))
		assert.equal(uint256WF3PdVo, BigInt("31250000000000000000"))
		assert.equal(uint256ljMOsyL, BigInt("15"))
	});
})