const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOtFJhrbG = await FrogDAO.new({from: accounts[2]});
		const uint7o6OwU = BigInt("681")
		const addressXcNR9P = accounts[5]
		const uintB0hlxU = BigInt("184")
		const uintKn76aT4 = BigInt("1876")
		const boolRF0hI2y = await FrogDAOtFJhrbG.approve.call(addressXcNR9P, uint7o6OwU, {from: accounts[4]});
		const uintBbEzkSX = await FrogDAOtFJhrbG.safeDiv.call(uintKn76aT4, uintB0hlxU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRF0hI2y, true)
		assert.equal(uintBbEzkSX, BigInt("10"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOUYFyHs5 = await FrogDAO.new({from: accounts[3]});
		const uintiowU05T = BigInt("1454")
		const uintRBct2pA = BigInt("1155")
		const uintMi67Ncd = BigInt("243")
		const addressdr6AlcT = accounts[4]
		const uintdOL7ZUy = BigInt("673")
		const uintE5sXML3 = BigInt("2047")
		const uintMidoevl = BigInt("674")
		const uintFnEroGV = BigInt("1568")
		const addressPCeKzwu = accounts[0]
		const addressKfPykWO = accounts[1]
		const uintcoFQpYv = await FrogDAOUYFyHs5.safeSub.call(uintRBct2pA, uintiowU05T, {from: accounts[1]});
		const booli9t9Rk9 = await FrogDAOUYFyHs5.approve.call(addressdr6AlcT, uintMi67Ncd, {from: accounts[3]});
		const uinteKoCYxu = await FrogDAOUYFyHs5.safeSub.call(uintE5sXML3, uintdOL7ZUy, {from: accounts[4]});
		const uinthfDvbO = await FrogDAOUYFyHs5.safeMul.call(uintFnEroGV, uintMidoevl, {from: accounts[0]});
		const uintzDRf8B3 = await FrogDAOUYFyHs5.allowance.call(addressKfPykWO, addressPCeKzwu, {from: accounts[2]});

		await expect(FrogDAOUYFyHs5.safeSub.call(uintRBct2pA, uintiowU05T, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAObymhMx2 = await FrogDAO.new({from: accounts[2]});
		const uintmWxlCP9 = BigInt("274")
		const addresscESLXAx = accounts[4]
		const addressoDe42ZL = accounts[2]
		const addressFhWezj2 = accounts[5]
		const addressvCC9N81 = accounts[3]
		const boolK1swSst = await FrogDAObymhMx2.transfer.call(addresscESLXAx, uintmWxlCP9, {from: accounts[5]});
		const uintutuN1DZ = await FrogDAObymhMx2.balanceOf.call(addressoDe42ZL, {from: accounts[2]});
		const uintp38HMNv = await FrogDAObymhMx2.allowance.call(addressvCC9N81, addressFhWezj2, {from: accounts[0]});
		const uintx0aZJNy = await FrogDAObymhMx2.totalSupply.call({from: accounts[1]});

		await expect(FrogDAObymhMx2.transfer.call(addresscESLXAx, uintmWxlCP9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOrUtx6Ao = await FrogDAO.new({from: accounts[1]});
		const uintB8ELqN0 = BigInt("838")
		const addresstLWpAUr = accounts[1]
		const addressHuZJhsn = accounts[4]
		const addressncQG6fo = accounts[2]
		const addresspo3Kq9e = accounts[1]
		const boolJNtNJOP = await FrogDAOrUtx6Ao.transfer.call(addresstLWpAUr, uintB8ELqN0, {from: accounts[1]});
		const uintKKBqDi = await FrogDAOrUtx6Ao.balanceOf.call(addressHuZJhsn, {from: "0x0000000000000000000000000000000000000001"});
		const uintkY4bYd9 = await FrogDAOrUtx6Ao.totalSupply.call({from: accounts[4]});
		const uintZSzmG67 = await FrogDAOrUtx6Ao.allowance.call(addresspo3Kq9e, addressncQG6fo, {from: accounts[1]});

		assert.equal(boolJNtNJOP, true)
		assert.equal(uintKKBqDi, BigInt("0"))
		assert.equal(uintZSzmG67, BigInt("0"))
		assert.equal(uintkY4bYd9, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOtFJhrbG = await FrogDAO.new({from: accounts[2]});
		const uintAz7EfJv = BigInt("691")
		const addressj4FriQV = accounts[5]
		const uintk14TMDR = BigInt("184")
		const uintSFKTg5w = BigInt("1876")
		const uintblZaD0R = BigInt("134")
		const addressYZK38rJ = accounts[3]
		const addressNVFBSO0 = accounts[3]
		const uintZMf7bfD = BigInt("1939")
		const addressU8jZRz2 = accounts[2]
		const boolRF0hI2y = await FrogDAOtFJhrbG.approve.call(addressj4FriQV, uintAz7EfJv, {from: accounts[4]});
		const uintBbEzkSX = await FrogDAOtFJhrbG.safeDiv.call(uintSFKTg5w, uintk14TMDR, {from: "0x0000000000000000000000000000000000000001"});
		const boolddqe8G6 = await FrogDAOtFJhrbG.transferFrom.call(addressNVFBSO0, addressYZK38rJ, uintblZaD0R, {from: accounts[1]});
		const boolmuLN7Me = await FrogDAOtFJhrbG.transfer.call(addressU8jZRz2, uintZMf7bfD, {from: accounts[2]});

		assert.equal(boolRF0hI2y, true)
		assert.equal(uintBbEzkSX, BigInt("10"))
		await expect(FrogDAOtFJhrbG.transferFrom.call(addressNVFBSO0, addressYZK38rJ, uintblZaD0R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOG7OMzK = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVEWtwVf = BigInt("146")
		const addressIRrr6jG = accounts[5]
		const addressMJ8iBIp = accounts[2]
		const uintArz3Ec = BigInt("398")
		const uintb5Pggx = BigInt("900")
		const boolivXB2T = await FrogDAOG7OMzK.transferFrom.call(addressMJ8iBIp, addressIRrr6jG, uintVEWtwVf, {from: accounts[3]});
		const uintZz3vo5v = await FrogDAOG7OMzK.safeMul.call(uintb5Pggx, uintArz3Ec, {from: accounts[0]});
		const uintEHOYaMP = await FrogDAOG7OMzK.totalSupply.call({from: accounts[4]});
	});
})