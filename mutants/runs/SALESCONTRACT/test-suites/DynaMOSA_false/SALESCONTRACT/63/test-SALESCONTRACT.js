const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTEoGpeGE = await SALESCONTRACT.new({from: accounts[3]});
		const uintafm6Jco = BigInt("1307")
		const addressAdiDYhX = accounts[1]
		const addressXwDo9Rc = accounts[3]
		const addressQgmNS8C = await SALESCONTRACTEoGpeGE._setSalesPool.call(addressAdiDYhX, uintafm6Jco, {from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTEoGpeGE.ff.call({from: "0x0000000000000000000000000000000000000001"});
		await SALESCONTRACTEoGpeGE.clearTokens.call({from: accounts[2]});
		const boolqRt5p9V = await SALESCONTRACTEoGpeGE.tokenSale.call(addressXwDo9Rc, {from: accounts[4]});

		await expect(SALESCONTRACTEoGpeGE._setSalesPool.call(addressAdiDYhX, uintafm6Jco, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTJbNhodI = await SALESCONTRACT.new({from: accounts[5]});
		const addressiunuft8 = "0x0000000000000000000000000000000000000001"
		await SALESCONTRACTJbNhodI.ff.call({from: accounts[0]});
		const addresscIDQpUA = await SALESCONTRACTJbNhodI.setToken.call(addressiunuft8, {from: accounts[4]});
		await SALESCONTRACTJbNhodI.clearETH.call({from: accounts[3]});

		await expect(SALESCONTRACTJbNhodI.ff.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTSBkFzdJ = await SALESCONTRACT.new({from: accounts[1]});
		const uintxTG86ci = BigInt("1338")
		const addressZicLN2R = accounts[0]
		const uint8b3kpN = await SALESCONTRACTSBkFzdJ._setStage.call(uintxTG86ci, {from: accounts[1]});
		const addressOBzEY2P = await SALESCONTRACTSBkFzdJ.setToken.call(addressZicLN2R, {from: accounts[0]});

		await expect(SALESCONTRACTSBkFzdJ.setToken.call(addressZicLN2R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTK5YM7cq = await SALESCONTRACT.new({from: accounts[2]});
		const addressnUyu8QR = accounts[3]
		const addresshE28KaR = accounts[1]
		const uintsXobOzU = BigInt("1362")
		const addressaGk7VCh = accounts[3]
		const boolkAMp19 = await SALESCONTRACTK5YM7cq.tokenSale.call(addressnUyu8QR, {from: accounts[1]});
		const addressaVGO6Lk = await SALESCONTRACTK5YM7cq.setToken.call(addresshE28KaR, {from: accounts[2]});
		const addressEDG0dI = await SALESCONTRACTK5YM7cq._setSalesPool.call(addressaGk7VCh, uintsXobOzU, {from: accounts[2]});

		await expect(SALESCONTRACTK5YM7cq.tokenSale.call(addressnUyu8QR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTSjRrnsq = await SALESCONTRACT.new({from: accounts[4]});
		const addressG4dWm4p = accounts[0]
		const addressrmKkbZx = "0x0000000000000000000000000000000000000001"
		await SALESCONTRACTSjRrnsq.clearTokens.call({from: accounts[4]});
		const addresskOh5tSE = await SALESCONTRACTSjRrnsq.setToken.call(addressG4dWm4p, {from: accounts[0]});
		await SALESCONTRACTSjRrnsq.clearETH.call({from: accounts[4]});
		const boolP4TgINV = await SALESCONTRACTSjRrnsq.tokenSale.call(addressrmKkbZx, {from: accounts[2]});

		await expect(SALESCONTRACTSjRrnsq.clearTokens.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTK5YM7cq = await SALESCONTRACT.new({from: accounts[2]});
		const uintcBEgZYb = BigInt("1954")
		const addressZTDHYKJ = accounts[3]
		const addressEDG0dI = await SALESCONTRACTK5YM7cq._setSalesPool.call(addressZTDHYKJ, uintcBEgZYb, {from: accounts[2]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTK5YM7cq = await SALESCONTRACT.new({from: accounts[2]});
		const addressvtCYAfa = accounts[2]
		const uintoV07kwk = BigInt("1475")
		const uintCndxqve = BigInt("1362")
		const addressdtSmLOP = accounts[3]
		const addressaVGO6Lk = await SALESCONTRACTK5YM7cq.setToken.call(addressvtCYAfa, {from: accounts[2]});
		const uintdXExWJO = await SALESCONTRACTK5YM7cq._setStage.call(uintoV07kwk, {from: accounts[0]});
		const addressEDG0dI = await SALESCONTRACTK5YM7cq._setSalesPool.call(addressdtSmLOP, uintCndxqve, {from: accounts[2]});

		await expect(SALESCONTRACTK5YM7cq._setStage.call(uintoV07kwk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTnwWfaPV = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgj0XOzc = BigInt("1494")
		const addressD3eDOj0 = accounts[0]
		const addressHZsYbmX = accounts[1]
		const addressx8KIoG = "0x0000000000000000000000000000000000000001"
		const uintsVqlcPc = await SALESCONTRACTnwWfaPV._setStage.call(uintgj0XOzc, {from: accounts[5]});
		const addresskBXDoOG = await SALESCONTRACTnwWfaPV.setToken.call(addressD3eDOj0, {from: accounts[4]});
		const addresszDb44bK = await SALESCONTRACTnwWfaPV.setToken.call(addressHZsYbmX, {from: accounts[5]});
		const boolTpG5Fqi = await SALESCONTRACTnwWfaPV.tokenSale.call(addressx8KIoG, {from: accounts[4]});
		await SALESCONTRACTnwWfaPV.clearTokens.call({from: accounts[3]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTJbNhodI = await SALESCONTRACT.new({from: accounts[5]});
		const addressymXjXLS = "0x0000000000000000000000000000000000000001"
		await SALESCONTRACTJbNhodI.clearETH.call({from: accounts[5]});
		await SALESCONTRACTJbNhodI.ff.call({from: accounts[0]});
		const addresscIDQpUA = await SALESCONTRACTJbNhodI.setToken.call(addressymXjXLS, {from: accounts[4]});

		await expect(SALESCONTRACTJbNhodI.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTJbNhodI = await SALESCONTRACT.new({from: accounts[5]});
		const addressjphYpPI = "0x00000000000000000000000000000000000000-1"
		const addressLCKQ0oY = accounts[4]
		const addresscIDQpUA = await SALESCONTRACTJbNhodI.setToken.call(addressjphYpPI, {from: accounts[4]});
		await SALESCONTRACTJbNhodI.clearETH.call({from: accounts[3]});
		const addressi0C2IUC = await SALESCONTRACTJbNhodI.setToken.call(addressLCKQ0oY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTJbNhodI.setToken.call(addressjphYpPI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})