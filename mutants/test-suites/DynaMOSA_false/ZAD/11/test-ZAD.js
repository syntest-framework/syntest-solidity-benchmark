const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADUQig18 = await ZAD.new({from: accounts[3]});
		const uinttZ8ZO1 = BigInt("486")
		const addressaD0Urd = accounts[1]
		const addressGbIW0Wj = accounts[1]
		const addressXLIpMl = accounts[0]
		const uintiUPT8Fu = BigInt("335")
		const addressY7GzsOR = accounts[2]
//		const boolXAs1y0 = await ZADUQig18.transfer.call(addressaD0Urd, uinttZ8ZO1, {from: accounts[4]});
//		const uint256xEALH07 = await ZADUQig18.allowance.call(addressXLIpMl, addressGbIW0Wj, {from: accounts[4]});
//		const boolJkkUmk = await ZADUQig18.decreaseAllowance.call(addressY7GzsOR, uintiUPT8Fu, {from: accounts[3]});

		await expect(ZADUQig18.transfer.call(addressaD0Urd, uinttZ8ZO1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZAD5H6kNS = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintD60XMX = BigInt("208")
		const uintsHydLlV = BigInt("1049")
		const addressmSzDbe4 = accounts[4]
		const uintMHoMVPL = BigInt("46")
		const addressDdRKLFj = accounts[3]
		const uint256q6DTc0c = await ZAD5H6kNS._burn.call(uintD60XMX, {from: accounts[0]});
		const boolVe06VNJ = await ZAD5H6kNS.transfer.call(addressmSzDbe4, uintsHydLlV, {from: accounts[2]});
		const booloCaTqXk = await ZAD5H6kNS.increaseAllowance.call(addressDdRKLFj, uintMHoMVPL, {from: accounts[3]});
		const uint256nZK2aFt = await ZAD5H6kNS.totalSupply.call({from: accounts[0]});
		const uint8nCKCLRW = await ZAD5H6kNS.decimals.call({from: accounts[3]});
	});

	it('test for ZAD', async () => {
		const ZADoHFz7d = await ZAD.new({from: accounts[2]});
		const addressd1z1nA = accounts[3]
		const uintVOBMZ7u = BigInt("1434")
		const addressOBT0Hci = "0x0000000000000000000000000000000000000001"
		const addressFuZtNZD = accounts[3]
		const uintUEZa8RV = BigInt("1640")
		const uintlSat0eN = BigInt("669")
		const addressI84Umr = "0x0000000000000000000000000000000000000001"
		const uint256t2MyliO = await ZADoHFz7d.balanceOf.call(addressd1z1nA, {from: accounts[3]});
//		const boolhJsqJjA = await ZADoHFz7d.transferFrom.call(addressFuZtNZD, addressOBT0Hci, uintVOBMZ7u, {from: accounts[5]});
//		const uint256kRWd99 = await ZADoHFz7d._burn.call(uintUEZa8RV, {from: accounts[1]});
//		const boolhB6C35N = await ZADoHFz7d.increaseAllowance.call(addressI84Umr, uintlSat0eN, {from: accounts[2]});

		assert.equal(uint256t2MyliO, BigInt("0"))
		await expect(ZADoHFz7d.transferFrom.call(addressFuZtNZD, addressOBT0Hci, uintVOBMZ7u, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADWqZ9O5N = await ZAD.new({from: accounts[2]});
		const uintXIrrGEJ = BigInt("600")
		const uintcEZizO9 = BigInt("1070")
		const addressP8iLGHG = accounts[0]
		const uintFTlXCF9 = BigInt("372")
		const addresscAVKAbS = accounts[0]
		const addressZK1kkK = accounts[3]
//		const uint256UEUZQeu = await ZADWqZ9O5N._burn.call(uintXIrrGEJ, {from: accounts[0]});
//		const boolve1E77d = await ZADWqZ9O5N.approve.call(addressP8iLGHG, uintcEZizO9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNwi5iKB = await ZADWqZ9O5N.transferFrom.call(addressZK1kkK, addresscAVKAbS, uintFTlXCF9, {from: accounts[1]});
//		const uint256W0D9Mw = await ZADWqZ9O5N.totalSupply.call({from: accounts[0]});

		await expect(ZADWqZ9O5N._burn.call(uintXIrrGEJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADU8DfeP = await ZAD.new({from: accounts[4]});
		const uintH7tyJW = BigInt("2046")
		const uintEYlyHO8 = BigInt("1166")
		const addressbVX2qu3 = accounts[5]
		const stringEh1s7YB = await ZADU8DfeP.name.call({from: accounts[4]});
//		const uint256uSSyaX = await ZADU8DfeP._burn.call(uintH7tyJW, {from: accounts[2]});
//		const stringo5jfG2X = await ZADU8DfeP.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolgF1iRwp = await ZADU8DfeP.increaseAllowance.call(addressbVX2qu3, uintEYlyHO8, {from: accounts[1]});
//		const uint8wHAwirP = await ZADU8DfeP.decimals.call({from: accounts[4]});

		assert.equal(stringEh1s7YB, "Zadkiel")
		await expect(ZADU8DfeP._burn.call(uintH7tyJW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADlpGQMFq = await ZAD.new({from: accounts[3]});
		const uintb3VrzYT = BigInt("1484")
		const addresswLX3rs = accounts[4]
		const uintgMnn31N = BigInt("810")
		const addressxEuuVWX = accounts[2]
		const uintajxyqFx = BigInt("1148")
		const addressZ51x1qt = accounts[5]
		const uintv2TQNwZ = BigInt("883")
		const addressgC0RGLp = accounts[2]
//		const boolKtjXFY = await ZADlpGQMFq.decreaseAllowance.call(addresswLX3rs, uintb3VrzYT, {from: accounts[0]});
//		const boolMfzHrfT = await ZADlpGQMFq.transfer.call(addressxEuuVWX, uintgMnn31N, {from: accounts[4]});
//		const boolLVIShAn = await ZADlpGQMFq.approve.call(addressZ51x1qt, uintajxyqFx, {from: accounts[0]});
//		const uint8AWjNZFC = await ZADlpGQMFq.decimals.call({from: accounts[0]});
//		const boolazOO4eT = await ZADlpGQMFq.decreaseAllowance.call(addressgC0RGLp, uintv2TQNwZ, {from: accounts[4]});

		await expect(ZADlpGQMFq.decreaseAllowance.call(addresswLX3rs, uintb3VrzYT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADYZn07xd = await ZAD.new({from: accounts[3]});
		const addressF4AviZN = accounts[1]
		const addressZ51jRIL = accounts[3]
		const uint256u0YbLjC = await ZADYZn07xd.allowance.call(addressZ51jRIL, addressF4AviZN, {from: accounts[3]});
		const uint8QCcELO3 = await ZADYZn07xd.decimals.call({from: accounts[1]});
		const stringelk33uE = await ZADYZn07xd.symbol.call({from: accounts[3]});

		assert.equal(stringelk33uE, "ZAD")
		assert.equal(uint256u0YbLjC, BigInt("0"))
		assert.equal(uint8QCcELO3, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZAD5EQgN4 = await ZAD.new({from: accounts[4]});
		const uintVCGutZi = BigInt("769")
		const addressAsK86zG = "0x0000000000000000000000000000000000000001"
		const uintVUz1kS2 = BigInt("1068")
		const addressqCaUQkM = accounts[2]
		const addressvZmO1dK = accounts[0]
		const uintrcQfMIG = BigInt("385")
		const addresscc9LdfB = accounts[3]
		const stringawDQVwj = await ZAD5EQgN4.symbol.call({from: accounts[0]});
		const boolCpeAtMq = await ZAD5EQgN4.approve.call(addressAsK86zG, uintVCGutZi, {from: accounts[4]});
//		const boolC9AoRf5 = await ZAD5EQgN4.decreaseAllowance.call(addressqCaUQkM, uintVUz1kS2, {from: accounts[1]});
//		const uint256FQqIXJ = await ZAD5EQgN4.balanceOf.call(addressvZmO1dK, {from: accounts[5]});
//		const boolfx8QTi = await ZAD5EQgN4.transfer.call(addresscc9LdfB, uintrcQfMIG, {from: accounts[2]});

		assert.equal(boolCpeAtMq, true)
		assert.equal(stringawDQVwj, "ZAD")
		await expect(ZAD5EQgN4.decreaseAllowance.call(addressqCaUQkM, uintVUz1kS2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADYZn07xd = await ZAD.new({from: accounts[3]});
		const addressTIpt8C5 = accounts[1]
		const addressKZtgQ3u = accounts[3]
		const uintGkAm3A4 = BigInt("1293")
		const addresshVCNB3N = accounts[0]
		const uint256u0YbLjC = await ZADYZn07xd.allowance.call(addressKZtgQ3u, addressTIpt8C5, {from: accounts[3]});
		const uint8QCcELO3 = await ZADYZn07xd.decimals.call({from: accounts[1]});
		const boolfdFUUv0 = await ZADYZn07xd.increaseAllowance.call(addresshVCNB3N, uintGkAm3A4, {from: accounts[4]});
		const stringelk33uE = await ZADYZn07xd.symbol.call({from: accounts[3]});

		assert.equal(boolfdFUUv0, true)
		assert.equal(stringelk33uE, "ZAD")
		assert.equal(uint256u0YbLjC, BigInt("0"))
		assert.equal(uint8QCcELO3, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADGQN4MG1 = await ZAD.new({from: accounts[3]});
		const uintGflSEs7 = BigInt("527")
		const addressyeqNkaD = accounts[0]
		const uintPLMocF = BigInt("1576")
		const addressO9amnot = accounts[3]
		const addressrBUO5n4 = accounts[2]
		const addresshLr7Sx4 = accounts[0]
		const addressUUL37Cx = accounts[5]
		const addressvEfocqo = accounts[2]
		const boolbjYIJVX = await ZADGQN4MG1.increaseAllowance.call(addressyeqNkaD, uintGflSEs7, {from: accounts[0]});
		const uint256EcSSSpQ = await ZADGQN4MG1.totalSupply.call({from: accounts[1]});
//		const boolHg8fTX1 = await ZADGQN4MG1.transfer.call(addressO9amnot, uintPLMocF, {from: accounts[4]});
//		const uint256Pae1urs = await ZADGQN4MG1.allowance.call(addresshLr7Sx4, addressrBUO5n4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256DoOeBP4 = await ZADGQN4MG1.allowance.call(addressvEfocqo, addressUUL37Cx, {from: accounts[0]});

		assert.equal(boolbjYIJVX, true)
		assert.equal(uint256EcSSSpQ, BigInt("100000000000000000000000000"))
		await expect(ZADGQN4MG1.transfer.call(addressO9amnot, uintPLMocF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADoHFz7d = await ZAD.new({from: accounts[2]});
		const addressnesy6ux = accounts[3]
		const uintHsogTrN = BigInt("1434")
		const addressPBYXWb2 = "0x0000000000000000000000000000000000000000"
		const addressYzJNiUo = accounts[3]
		const uintEWbv6E = BigInt("669")
		const addressr6SLC1A = "0x0000000000000000000000000000000000000001"
		const uint256t2MyliO = await ZADoHFz7d.balanceOf.call(addressnesy6ux, {from: accounts[3]});
//		const boolhJsqJjA = await ZADoHFz7d.transferFrom.call(addressYzJNiUo, addressPBYXWb2, uintHsogTrN, {from: accounts[5]});
//		const boolhB6C35N = await ZADoHFz7d.increaseAllowance.call(addressr6SLC1A, uintEWbv6E, {from: accounts[2]});

		assert.equal(uint256t2MyliO, BigInt("0"))
		await expect(ZADoHFz7d.transferFrom.call(addressYzJNiUo, addressPBYXWb2, uintHsogTrN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})