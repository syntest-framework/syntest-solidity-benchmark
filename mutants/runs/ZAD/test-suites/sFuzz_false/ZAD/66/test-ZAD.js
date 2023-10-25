const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADlBiZkM2 = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvwu15Du = BigInt("1641")
		const addressLrWJ04E = accounts[0]
		const boole2Do9do = await ZADlBiZkM2.decreaseAllowance.call(addressLrWJ04E, uintvwu15Du, {from: accounts[2]});
		const uint8eRJYws = await ZADlBiZkM2.decimals.call({from: accounts[4]});
		const uint8UiXSI9w = await ZADlBiZkM2.decimals.call({from: accounts[0]});
		const stringhAM16D1 = await ZADlBiZkM2.symbol.call({from: accounts[3]});
	});

	it('test for ZAD', async () => {
		const ZADkFMB9uL = await ZAD.new({from: accounts[4]});
		const addressYby8RF = accounts[1]
		const uintPxMusBO = BigInt("677")
		const addressESDEpiB = "0x0000000000000000000000000000000000000001"
		const uintyYMfnl6 = BigInt("1346")
		const addressLAAyZut = accounts[3]
		const uintD1tYRgP = BigInt("559")
		const addressbusgZZE = accounts[0]
		const uint256WFIFK1H = await ZADkFMB9uL.balanceOf.call(addressYby8RF, {from: accounts[4]});
		const boolkkZZF1 = await ZADkFMB9uL.decreaseAllowance.call(addressESDEpiB, uintPxMusBO, {from: accounts[1]});
		const boolyqcW455 = await ZADkFMB9uL.transfer.call(addressLAAyZut, uintyYMfnl6, {from: "0x0000000000000000000000000000000000000001"});
		const boolnZ0i8bW = await ZADkFMB9uL.approve.call(addressbusgZZE, uintD1tYRgP, {from: accounts[2]});

		assert.equal(uint256WFIFK1H, BigInt("0"))
		await expect(ZADkFMB9uL.decreaseAllowance.call(addressESDEpiB, uintPxMusBO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADWfNmbPP = await ZAD.new({from: accounts[2]});
		const uintvnhG90v = BigInt("1495")
		const addressmtImnP0 = accounts[4]
		const uintK833VAo = BigInt("402")
		const addressMOQ5i5 = accounts[0]
		const addressh6UTLeM = accounts[4]
		const addresshkjLI6j = accounts[2]
		const uintzPGvihl = BigInt("929")
		const addressJlhL1CO = accounts[2]
		const booli21TcQ9 = await ZADWfNmbPP.transfer.call(addressmtImnP0, uintvnhG90v, {from: accounts[5]});
		const boolPgNVdlJ = await ZADWfNmbPP.transfer.call(addressMOQ5i5, uintK833VAo, {from: accounts[0]});
		const uint256rfiARSQ = await ZADWfNmbPP.balanceOf.call(addressh6UTLeM, {from: accounts[0]});
		const uint256Uwd198u = await ZADWfNmbPP.balanceOf.call(addresshkjLI6j, {from: accounts[3]});
		const boolC1IPP2v = await ZADWfNmbPP.decreaseAllowance.call(addressJlhL1CO, uintzPGvihl, {from: accounts[3]});

		await expect(ZADWfNmbPP.transfer.call(addressmtImnP0, uintvnhG90v, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADvzrfTgI = await ZAD.new({from: accounts[3]});
		const uinth8jhOEW = BigInt("768")
		const addressS8lB8j9 = accounts[0]
		const address8d0Xvq = accounts[5]
		const uint256CO3WLRK = await ZADvzrfTgI.totalSupply.call({from: accounts[4]});
		const boolGNSZmR = await ZADvzrfTgI.decreaseAllowance.call(addressS8lB8j9, uinth8jhOEW, {from: accounts[2]});
		const uint256cEKytoI = await ZADvzrfTgI.balanceOf.call(address8d0Xvq, {from: accounts[1]});

		assert.equal(uint256CO3WLRK, BigInt("100000000000000000000000000"))
		await expect(ZADvzrfTgI.decreaseAllowance.call(addressS8lB8j9, uinth8jhOEW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADZ6sZ5XL = await ZAD.new({from: accounts[2]});
		const uintYfeBAlH = BigInt("2034")
		const addresso74XssO = accounts[3]
		const addressyiEv3A = accounts[5]
		const addressn796Pvp = accounts[0]
		const addressZoBWekR = accounts[2]
		const addressvcfHKY8 = accounts[1]
		const boolxS6MFWP = await ZADZ6sZ5XL.transferFrom.call(addressyiEv3A, addresso74XssO, uintYfeBAlH, {from: accounts[2]});
		const uint256fbNG0x6 = await ZADZ6sZ5XL.allowance.call(addressZoBWekR, addressn796Pvp, {from: accounts[5]});
		const uint256P8RUiPL = await ZADZ6sZ5XL.totalSupply.call({from: accounts[4]});
		const uint256eVMACn = await ZADZ6sZ5XL.totalSupply.call({from: accounts[3]});
		const uint256ao0ojZ = await ZADZ6sZ5XL.balanceOf.call(addressvcfHKY8, {from: accounts[1]});

		await expect(ZADZ6sZ5XL.transferFrom.call(addressyiEv3A, addresso74XssO, uintYfeBAlH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADikiyUow = await ZAD.new({from: accounts[4]});
		const uintejS7yvc = BigInt("1829")
		const addresshR0rd2A = accounts[1]
		const uintqhsvbyt = BigInt("1114")
		const addressn0GUWKq = accounts[3]
		const boolvlJs7NZ = await ZADikiyUow.increaseAllowance.call(addresshR0rd2A, uintejS7yvc, {from: accounts[1]});
		const stringoixwOA9 = await ZADikiyUow.symbol.call({from: accounts[2]});
		const booleH50kPh = await ZADikiyUow.transfer.call(addressn0GUWKq, uintqhsvbyt, {from: accounts[3]});

		assert.equal(boolvlJs7NZ, true)
		assert.equal(stringoixwOA9, "ZAD")
		await expect(ZADikiyUow.transfer.call(addressn0GUWKq, uintqhsvbyt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADdboBKzG = await ZAD.new({from: accounts[4]});
		const uintKCHCRoZ = BigInt("191")
		const uintES1bTt = BigInt("1095")
		const addressiT0tEk0 = accounts[2]
		const uintTHRbFd = BigInt("316")
		const addressJ9wTtmw = "0x0000000000000000000000000000000000000001"
		const uint256oP2KITa = await ZADdboBKzG._burn.call(uintKCHCRoZ, {from: accounts[4]});
		const boolwwcqI7b = await ZADdboBKzG.increaseAllowance.call(addressiT0tEk0, uintES1bTt, {from: "0x0000000000000000000000000000000000000001"});
		const boolvy7Wjec = await ZADdboBKzG.transfer.call(addressJ9wTtmw, uintTHRbFd, {from: "0x0000000000000000000000000000000000000001"});
		const stringcwWVzr6 = await ZADdboBKzG.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringxZzqe8S = await ZADdboBKzG.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ZADdboBKzG._burn.call(uintKCHCRoZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADvzrfTgI = await ZAD.new({from: accounts[3]});
		const addresssQ9zpX = accounts[4]
		const addressS226IIt = accounts[3]
		const uintvadvkOW = BigInt("768")
		const addressHPxlUyg = accounts[0]
		const addressghtRcj = accounts[6]
		const uint256CO3WLRK = await ZADvzrfTgI.totalSupply.call({from: accounts[4]});
		const uint256x24qTS = await ZADvzrfTgI.allowance.call(addressS226IIt, addresssQ9zpX, {from: accounts[4]});
		const boolGNSZmR = await ZADvzrfTgI.decreaseAllowance.call(addressHPxlUyg, uintvadvkOW, {from: accounts[2]});
		const uint256cEKytoI = await ZADvzrfTgI.balanceOf.call(addressghtRcj, {from: accounts[1]});

		assert.equal(uint256CO3WLRK, BigInt("100000000000000000000000000"))
		assert.equal(uint256x24qTS, BigInt("0"))
		await expect(ZADvzrfTgI.decreaseAllowance.call(addressHPxlUyg, uintvadvkOW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADvzrfTgI = await ZAD.new({from: accounts[3]});
		const uintWoIzkEx = BigInt("1694")
		const addressB942ThH = accounts[1]
		const uintNOxXtP = BigInt("467")
		const addressKxg9bb4 = accounts[0]
		const uintD6haW2S = BigInt("1770")
		const addressBVbVDgU = accounts[4]
		const addresse4U0O9u = accounts[5]
		const uint256CO3WLRK = await ZADvzrfTgI.totalSupply.call({from: accounts[4]});
		const boolC0efvkH = await ZADvzrfTgI.increaseAllowance.call(addressB942ThH, uintWoIzkEx, {from: accounts[0]});
		const boolRRs0UCV = await ZADvzrfTgI.approve.call(addressKxg9bb4, uintNOxXtP, {from: accounts[4]});
		const boolQuCEIBc = await ZADvzrfTgI.approve.call(addressBVbVDgU, uintD6haW2S, {from: accounts[1]});
		const uint256cEKytoI = await ZADvzrfTgI.balanceOf.call(addresse4U0O9u, {from: accounts[1]});

		assert.equal(boolC0efvkH, true)
		assert.equal(boolQuCEIBc, true)
		assert.equal(boolRRs0UCV, true)
		assert.equal(uint256CO3WLRK, BigInt("100000000000000000000000000"))
		assert.equal(uint256cEKytoI, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADM4ALmY = await ZAD.new({from: accounts[0]});
		const uintP660Gme = BigInt("468")
		const addressgCTkhaS = accounts[5]
		const addressxQOBfRJ = accounts[5]
		const uint256iEddsEY = await ZADM4ALmY.totalSupply.call({from: accounts[3]});
		const boolxatDXHU = await ZADM4ALmY.approve.call(addressgCTkhaS, uintP660Gme, {from: accounts[4]});
		const uint8rwTm02l = await ZADM4ALmY.decimals.call({from: accounts[0]});
		const uint256C3t7Kc = await ZADM4ALmY.balanceOf.call(addressxQOBfRJ, {from: accounts[2]});

		assert.equal(boolxatDXHU, true)
		assert.equal(uint256C3t7Kc, BigInt("0"))
		assert.equal(uint256iEddsEY, BigInt("100000000000000000000000000"))
		assert.equal(uint8rwTm02l, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADKNxTyxk = await ZAD.new({from: accounts[1]});
		const uintyRthTA2 = BigInt("498")
		const addressSZq69tX = accounts[0]
		const addressb7HY5lm = accounts[2]
		const addressWFe1FOP = accounts[2]
		const boolT3HcZie = await ZADKNxTyxk.increaseAllowance.call(addressSZq69tX, uintyRthTA2, {from: accounts[4]});
		const uint256zZu4hNQ = await ZADKNxTyxk.allowance.call(addressWFe1FOP, addressb7HY5lm, {from: accounts[0]});
		const uint256hY4sQv4 = await ZADKNxTyxk.totalSupply.call({from: accounts[1]});
		const stringDzjLNhv = await ZADKNxTyxk.name.call({from: accounts[1]});

		assert.equal(boolT3HcZie, true)
		assert.equal(stringDzjLNhv, "Zadkiel")
		assert.equal(uint256hY4sQv4, BigInt("100000000000000000000000000"))
		assert.equal(uint256zZu4hNQ, BigInt("0"))
	});
})