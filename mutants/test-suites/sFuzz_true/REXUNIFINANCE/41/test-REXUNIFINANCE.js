const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEDqveOZV = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressREBPKE = accounts[0]
		const addressk4jCxVA = accounts[2]
		const uint256uMDzCh = await REXUNIFINANCEDqveOZV.balanceOf.call(addressREBPKE, {from: accounts[5]});
		const uint256KSBbbE = await REXUNIFINANCEDqveOZV.balanceOf.call(addressk4jCxVA, {from: accounts[3]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEpPHkWbu = await REXUNIFINANCE.new({from: accounts[4]});
		const uintM0SGE1t = BigInt("570")
		const addressup0jk9b = accounts[1]
		const addressfFzOcA = accounts[3]
		const addressn5G6RTM = accounts[1]
		const addresse9JcNdW = accounts[2]
//		const boolPQnSxOi = await REXUNIFINANCEpPHkWbu.transferFrom.call(addressfFzOcA, addressup0jk9b, uintM0SGE1t, {from: accounts[3]});
//		const addressRO87Vp6 = await REXUNIFINANCEpPHkWbu.transferOwnership.call(addressn5G6RTM, {from: accounts[4]});
//		const uint256sSHPBBU = await REXUNIFINANCEpPHkWbu.transferableTokens.call(addresse9JcNdW, {from: accounts[2]});

		await expect(REXUNIFINANCEpPHkWbu.transferFrom.call(addressfFzOcA, addressup0jk9b, uintM0SGE1t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEt9jhozA = await REXUNIFINANCE.new({from: accounts[3]});
		const uintYZPPHi = BigInt("267")
		const addresszlYydna = accounts[3]
		const uintlFGLKGa = BigInt("453")
		const addressKCKLX94 = accounts[4]
		const uintbp3iahg = BigInt("1440")
		const addressso45k6H = "0x0000000000000000000000000000000000000001"
		const boolR42IiVV = await REXUNIFINANCEt9jhozA.approve.call(addresszlYydna, uintYZPPHi, {from: accounts[1]});
//		const boolYHVR8RJ = await REXUNIFINANCEt9jhozA.increaseApproval.call(addressKCKLX94, uintlFGLKGa, {from: accounts[4]});
//		const boolJjhdrrf = await REXUNIFINANCEt9jhozA.increaseApproval.call(addressso45k6H, uintbp3iahg, {from: accounts[0]});

		assert.equal(boolR42IiVV, true)
		await expect(REXUNIFINANCEt9jhozA.increaseApproval.call(addressKCKLX94, uintlFGLKGa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEvtGMe5E = await REXUNIFINANCE.new({from: accounts[1]});
		const uintWs1t0a5 = BigInt("887")
		const addressjg7wVq = accounts[4]
		const addressJDwpskZ = accounts[4]
		const uintW0OvFD8 = BigInt("1676")
		const addresshZ4NHax = accounts[5]
		const uintUP26yXs = BigInt("1250")
		const addresscQGo3Wc = accounts[1]
		const uintUF9KIF1 = BigInt("1774")
		const addressnddwrc2 = accounts[0]
		const boolr0DGb54 = await REXUNIFINANCEvtGMe5E.approve.call(addressjg7wVq, uintWs1t0a5, {from: accounts[0]});
		const uint256rztyDTD = await REXUNIFINANCEvtGMe5E.balanceOf.call(addressJDwpskZ, {from: accounts[1]});
		const boolZ8z70vk = await REXUNIFINANCEvtGMe5E.decreaseApproval.call(addresshZ4NHax, uintW0OvFD8, {from: accounts[3]});
//		const boolOYtngK = await REXUNIFINANCEvtGMe5E.transfer.call(addresscQGo3Wc, uintUP26yXs, {from: accounts[2]});
//		const booljW0hJaA = await REXUNIFINANCEvtGMe5E.decreaseApproval.call(addressnddwrc2, uintUF9KIF1, {from: accounts[4]});

		assert.equal(boolZ8z70vk, true)
		assert.equal(boolr0DGb54, true)
		assert.equal(uint256rztyDTD, BigInt("0"))
		await expect(REXUNIFINANCEvtGMe5E.transfer.call(addresscQGo3Wc, uintUP26yXs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEYnUXFMt = await REXUNIFINANCE.new({from: accounts[3]});
		const uintzlotTJs = BigInt("387")
		const address1SndEc = accounts[1]
		const addressVa8QMnE = accounts[2]
		const addressXcNthkd = accounts[0]
		const uintAejbrdO = BigInt("1049")
		const addressdaSImqr = accounts[3]
		const uint2yvVAg = BigInt("69")
		const addressPare0OJ = accounts[0]
		const boolP1HJ7J = await REXUNIFINANCEYnUXFMt.approve.call(address1SndEc, uintzlotTJs, {from: accounts[0]});
//		const addressgX3DvCF = await REXUNIFINANCEYnUXFMt.transferOwnership.call(addressVa8QMnE, {from: accounts[2]});
//		const addressgml9h2 = await REXUNIFINANCEYnUXFMt.transferOwnership.call(addressXcNthkd, {from: accounts[1]});
//		const boolJW7Frfj = await REXUNIFINANCEYnUXFMt.increaseApproval.call(addressdaSImqr, uintAejbrdO, {from: accounts[2]});
//		const boolt6A4Lhu = await REXUNIFINANCEYnUXFMt.transfer.call(addressPare0OJ, uint2yvVAg, {from: accounts[5]});

		assert.equal(boolP1HJ7J, true)
		await expect(REXUNIFINANCEYnUXFMt.transferOwnership.call(addressVa8QMnE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEAYSAXwJ = await REXUNIFINANCE.new({from: accounts[0]});
		const addressEdGn8QP = accounts[3]
		const uintRzYFWHF = BigInt("1620")
		const addressmOrQdZW = "0x0000000000000000000000000000000000000001"
		const uintw6wYXom = BigInt("383")
		const addressdcEwE0 = accounts[2]
		const uintMXRfrak = BigInt("1589")
		const addressMcgnSWh = accounts[4]
		const uint256bPsCQ8 = await REXUNIFINANCEAYSAXwJ.transferableTokens.call(addressEdGn8QP, {from: accounts[5]});
		const boolF1aSAD = await REXUNIFINANCEAYSAXwJ.increaseApproval.call(addressmOrQdZW, uintRzYFWHF, {from: accounts[5]});
		const boolXaOYAT = await REXUNIFINANCEAYSAXwJ.approve.call(addressdcEwE0, uintw6wYXom, {from: accounts[1]});
		const booltISYxJy = await REXUNIFINANCEAYSAXwJ.increaseApproval.call(addressMcgnSWh, uintMXRfrak, {from: accounts[2]});

		assert.equal(boolF1aSAD, true)
		assert.equal(boolXaOYAT, true)
		assert.equal(booltISYxJy, true)
		assert.equal(uint256bPsCQ8, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEpPHkWbu = await REXUNIFINANCE.new({from: accounts[4]});
		const addressiHjFjJ9 = accounts[3]
		const addressAYMDYAH = accounts[0]
		const uintNr84cuH = BigInt("570")
		const addressZlBjrEZ = accounts[1]
		const addressYTqbWHC = accounts[3]
		const addressxVxZob = accounts[3]
		const uint256FpbAv1O = await REXUNIFINANCEpPHkWbu.allowance.call(addressAYMDYAH, addressiHjFjJ9, {from: accounts[4]});
//		const boolPQnSxOi = await REXUNIFINANCEpPHkWbu.transferFrom.call(addressYTqbWHC, addressZlBjrEZ, uintNr84cuH, {from: accounts[3]});
//		const uint256sSHPBBU = await REXUNIFINANCEpPHkWbu.transferableTokens.call(addressxVxZob, {from: accounts[2]});

		assert.equal(uint256FpbAv1O, BigInt("0"))
		await expect(REXUNIFINANCEpPHkWbu.transferFrom.call(addressYTqbWHC, addressZlBjrEZ, uintNr84cuH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEXvM6Yyj = await REXUNIFINANCE.new({from: accounts[1]});
		const addressJCZPH3v = accounts[1]
		const addressV31yLHk = accounts[4]
		const addresshNkBrV = accounts[4]
		const addressdV4Jfmc = accounts[4]
		const addresszvx64fl = accounts[2]
		const addressJEV51uv = accounts[2]
//		const addressKbVJV1h = await REXUNIFINANCEXvM6Yyj.transferOwnership.call(addressJCZPH3v, {from: accounts[1]});
//		const uint256kg5Lp7k = await REXUNIFINANCEXvM6Yyj.balanceOf.call(addressV31yLHk, {from: accounts[1]});
//		const addressj6mohJ3 = await REXUNIFINANCEXvM6Yyj.transferOwnership.call(addresshNkBrV, {from: accounts[4]});
//		const uint256KS6mbBY = await REXUNIFINANCEXvM6Yyj.balanceOf.call(addressdV4Jfmc, {from: accounts[3]});
//		const uint256yyOIhVA = await REXUNIFINANCEXvM6Yyj.allowance.call(addressJEV51uv, addresszvx64fl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(REXUNIFINANCEXvM6Yyj.transferOwnership.call(addressJCZPH3v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEEGv6XgG = await REXUNIFINANCE.new({from: accounts[1]});
		const uinto9pulEp = BigInt("656")
		const addressBk5bHg = "0x0000000000000000000000000000000000000001"
		const address7PVdQu = accounts[3]
		const uinte5YyQRv = BigInt("976")
		const addressgYnzV6z = accounts[2]
		const addressRH5vC2j = "0x0000000000000000000000000000000000000001"
		const boolJIpjFhC = await REXUNIFINANCEEGv6XgG.decreaseApproval.call(addressBk5bHg, uinto9pulEp, {from: accounts[3]});
		const addresscJUDowh = await REXUNIFINANCEEGv6XgG.transferOwnership.call(address7PVdQu, {from: accounts[1]});
//		const boolwlrhsyW = await REXUNIFINANCEEGv6XgG.transfer.call(addressgYnzV6z, uinte5YyQRv, {from: accounts[0]});
//		const uint256KXZGLgE = await REXUNIFINANCEEGv6XgG.balanceOf.call(addressRH5vC2j, {from: accounts[2]});

		assert.equal(boolJIpjFhC, true)
		await expect(REXUNIFINANCEEGv6XgG.transfer.call(addressgYnzV6z, uinte5YyQRv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})