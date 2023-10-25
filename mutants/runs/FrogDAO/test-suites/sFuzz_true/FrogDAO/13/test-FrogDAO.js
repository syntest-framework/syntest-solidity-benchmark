const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOeM9xBaJ = await FrogDAO.new({from: accounts[2]});
		const addressOfMmcD = "0x0000000000000000000000000000000000000001"
		const addressYKVPUzh = accounts[2]
		const addressqlIT74v = accounts[2]
		const uintqX68CC = BigInt("409")
		const addresslRdjMks = accounts[1]
		const addressVn4Gb0 = accounts[2]
		const uintRETbzt1 = BigInt("239")
		const uintBLlD0R = BigInt("1663")
		const uintaUOT0Gz = await FrogDAOeM9xBaJ.allowance.call(addressYKVPUzh, addressOfMmcD, {from: accounts[5]});
		const uintCyeaBgw = await FrogDAOeM9xBaJ.balanceOf.call(addressqlIT74v, {from: accounts[4]});
		const boolOifqsGN = await FrogDAOeM9xBaJ.transferFrom.call(addressVn4Gb0, addresslRdjMks, uintqX68CC, {from: accounts[3]});
		const uintoisaaWS = await FrogDAOeM9xBaJ.safeAdd.call(uintBLlD0R, uintRETbzt1, {from: accounts[0]});

		assert.equal(uintCyeaBgw, BigInt("1000000000000000000000000"))
		assert.equal(uintaUOT0Gz, BigInt("0"))
		await expect(FrogDAOeM9xBaJ.transferFrom.call(addressVn4Gb0, addresslRdjMks, uintqX68CC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOdRFHYXK = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnotjK9s = BigInt("460")
		const uintWAEainK = BigInt("863")
		const addressbOCMlwi = accounts[1]
		const uintKEbuEIP = BigInt("415")
		const uint0IuiaC = BigInt("1667")
		const uintBuDXvzg = BigInt("876")
		const addressZxyvAaM = accounts[3]
		const addressW0JJpfx = "0x0000000000000000000000000000000000000001"
		const addressdk0srUF = accounts[2]
		const uintJtslJJc = await FrogDAOdRFHYXK.safeDiv.call(uintWAEainK, uintnotjK9s, {from: accounts[4]});
		const uintfnLwZ1L = await FrogDAOdRFHYXK.balanceOf.call(addressbOCMlwi, {from: accounts[3]});
		const uintmzUuLh = await FrogDAOdRFHYXK.safeAdd.call(uint0IuiaC, uintKEbuEIP, {from: accounts[3]});
		const booluFOKTl = await FrogDAOdRFHYXK.transferFrom.call(addressW0JJpfx, addressZxyvAaM, uintBuDXvzg, {from: accounts[1]});
		const uintq9uaQlu = await FrogDAOdRFHYXK.balanceOf.call(addressdk0srUF, {from: accounts[0]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOY0Iyevt = await FrogDAO.new({from: accounts[2]});
		const uintVJpJbrV = BigInt("159")
		const uintmRdt6c = BigInt("264")
		const addresssWSKX4N = accounts[0]
		const uintCsqpX43 = BigInt("1330")
		const uintdfnOKmb = BigInt("1971")
		const uintjqAEFr5 = await FrogDAOY0Iyevt.safeSub.call(uintmRdt6c, uintVJpJbrV, {from: accounts[5]});
		const uintxZKcbU = await FrogDAOY0Iyevt.balanceOf.call(addresssWSKX4N, {from: accounts[1]});
		const uintiW1imlT = await FrogDAOY0Iyevt.safeDiv.call(uintdfnOKmb, uintCsqpX43, {from: accounts[2]});
		const uintC4DRVOs = await FrogDAOY0Iyevt.totalSupply.call({from: accounts[4]});
		const uinthY8X43F = await FrogDAOY0Iyevt.totalSupply.call({from: accounts[2]});

		assert.equal(uintC4DRVOs, BigInt("1000000000000000000000000"))
		assert.equal(uinthY8X43F, BigInt("1000000000000000000000000"))
		assert.equal(uintiW1imlT, BigInt("1"))
		assert.equal(uintjqAEFr5, BigInt("105"))
		assert.equal(uintxZKcbU, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOcFdYghx = await FrogDAO.new({from: accounts[0]});
		const uintcbK3qhQ = BigInt("1836")
		const uintjXnDy3 = BigInt("183")
		const uintJqkf35l = BigInt("1529")
		const uintgh0lrcn = BigInt("1943")
		const addressk0p1TlL = accounts[2]
		const uintY1A9RSb = BigInt("443")
		const uintsfq1faO = BigInt("778")
		const uintmOsVKwt = await FrogDAOcFdYghx.safeMul.call(uintjXnDy3, uintcbK3qhQ, {from: accounts[4]});
		const uintLWqrdan = await FrogDAOcFdYghx.safeAdd.call(uintgh0lrcn, uintJqkf35l, {from: accounts[3]});
		const uintfGrQXzH = await FrogDAOcFdYghx.balanceOf.call(addressk0p1TlL, {from: accounts[4]});
		const uintavYnz8r = await FrogDAOcFdYghx.safeAdd.call(uintsfq1faO, uintY1A9RSb, {from: accounts[1]});

		assert.equal(uintLWqrdan, BigInt("3472"))
		assert.equal(uintavYnz8r, BigInt("1221"))
		assert.equal(uintfGrQXzH, BigInt("0"))
		assert.equal(uintmOsVKwt, BigInt("335988"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOjEy879H = await FrogDAO.new({from: accounts[1]});
		const uintR8NGWHn = BigInt("791")
		const addressOcwDTyy = accounts[2]
		const uintnzvUPQo = BigInt("635")
		const uintxioCkGZ = BigInt("1885")
		const uintc6ivjBo = BigInt("1877")
		const addressITZYj3c = accounts[4]
		const addressoEPCUG = accounts[0]
		const addresscRhX0CL = accounts[0]
		const boolMOUeQiV = await FrogDAOjEy879H.approve.call(addressOcwDTyy, uintR8NGWHn, {from: accounts[4]});
		const uintuQbz8h = await FrogDAOjEy879H.safeDiv.call(uintxioCkGZ, uintnzvUPQo, {from: accounts[2]});
		const boolmFls06q = await FrogDAOjEy879H.approve.call(addressITZYj3c, uintc6ivjBo, {from: accounts[2]});
		const uintvb1YQD7 = await FrogDAOjEy879H.allowance.call(addresscRhX0CL, addressoEPCUG, {from: accounts[4]});

		assert.equal(boolMOUeQiV, true)
		assert.equal(boolmFls06q, true)
		assert.equal(uintuQbz8h, BigInt("2"))
		assert.equal(uintvb1YQD7, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOpIcnOog = await FrogDAO.new({from: accounts[2]});
		const uintB5vhPc = BigInt("1655")
		const addressmKLmrxk = accounts[4]
		const uintUzic6h = BigInt("343")
		const uintJTgUgbn = BigInt("179")
		const addressXic4tRV = accounts[3]
		const boolhcBrr9 = await FrogDAOpIcnOog.transfer.call(addressmKLmrxk, uintB5vhPc, {from: accounts[3]});
		const uintmAdhBYw = await FrogDAOpIcnOog.safeDiv.call(uintJTgUgbn, uintUzic6h, {from: accounts[3]});
		const uintpZ4Za7H = await FrogDAOpIcnOog.balanceOf.call(addressXic4tRV, {from: accounts[2]});

		await expect(FrogDAOpIcnOog.transfer.call(addressmKLmrxk, uintB5vhPc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})