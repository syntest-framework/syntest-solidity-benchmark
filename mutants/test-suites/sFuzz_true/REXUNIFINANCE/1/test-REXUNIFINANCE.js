const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEmPzfTPG = await REXUNIFINANCE.new({from: accounts[3]});
		const addressWo6s0Bk = accounts[4]
		const addresshJ1IVY = accounts[1]
		const uintrwpbKqi = BigInt("722")
		const addressdWG9GkR = accounts[4]
		const uintvBVniZo = BigInt("577")
		const addressolfofmL = accounts[1]
		const uintxHouI0I = BigInt("1401")
		const addressvV5vIXb = accounts[0]
		const uint256BXXXYZl = await REXUNIFINANCEmPzfTPG.allowance.call(addresshJ1IVY, addressWo6s0Bk, {from: accounts[2]});
		const boolrED0H8v = await REXUNIFINANCEmPzfTPG.approve.call(addressdWG9GkR, uintrwpbKqi, {from: accounts[1]});
		const boolDQXeWrV = await REXUNIFINANCEmPzfTPG.decreaseApproval.call(addressolfofmL, uintvBVniZo, {from: accounts[2]});
		const boolECUpiB9 = await REXUNIFINANCEmPzfTPG.approve.call(addressvV5vIXb, uintxHouI0I, {from: accounts[3]});

		assert.equal(boolDQXeWrV, true)
		assert.equal(boolECUpiB9, true)
		assert.equal(boolrED0H8v, true)
		assert.equal(uint256BXXXYZl, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEFTAEw4X = await REXUNIFINANCE.new({from: accounts[1]});
		const uintACKo4vn = BigInt("1712")
		const addressmU1EjQq = accounts[4]
		const addressUn1aAQ7 = accounts[1]
		const uintahXU0ZP = BigInt("578")
		const addressVqoz6aa = "0x0000000000000000000000000000000000000001"
		const uintST4QpoQ = BigInt("155")
		const addresshNEZssR = accounts[0]
		const addressFJCnQjv = accounts[1]
//		const booloN9CbY = await REXUNIFINANCEFTAEw4X.transferFrom.call(addressUn1aAQ7, addressmU1EjQq, uintACKo4vn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQIRqqSv = await REXUNIFINANCEFTAEw4X.transfer.call(addressVqoz6aa, uintahXU0ZP, {from: accounts[4]});
//		const boolVIXzbsR = await REXUNIFINANCEFTAEw4X.transfer.call(addresshNEZssR, uintST4QpoQ, {from: accounts[4]});
//		const uint256aBuSlbT = await REXUNIFINANCEFTAEw4X.balanceOf.call(addressFJCnQjv, {from: accounts[1]});

		await expect(REXUNIFINANCEFTAEw4X.transferFrom.call(addressUn1aAQ7, addressmU1EjQq, uintACKo4vn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEs2w6QWA = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHqG2ziH = BigInt("1400")
		const addressWHntx8Z = accounts[0]
		const addressvBajDVd = accounts[2]
		const addressA94l3Qq = accounts[1]
		const addressCKm0y3 = accounts[2]
		const uintHoW2oZX = BigInt("1459")
		const addressTsuqMDK = accounts[2]
		const addresshoolzJv = accounts[1]
		const boolipy5eyw = await REXUNIFINANCEs2w6QWA.transferFrom.call(addressvBajDVd, addressWHntx8Z, uintHqG2ziH, {from: accounts[3]});
		const uint256OyLPgAw = await REXUNIFINANCEs2w6QWA.transferableTokens.call(addressA94l3Qq, {from: accounts[5]});
		const addressOD8XFm = await REXUNIFINANCEs2w6QWA.transferOwnership.call(addressCKm0y3, {from: accounts[2]});
		const boolfKUk0re = await REXUNIFINANCEs2w6QWA.decreaseApproval.call(addressTsuqMDK, uintHoW2oZX, {from: accounts[2]});
		const uint256XdWcjje = await REXUNIFINANCEs2w6QWA.balanceOf.call(addresshoolzJv, {from: accounts[3]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEWZHzeJg = await REXUNIFINANCE.new({from: accounts[0]});
		const uint7OyfWo = BigInt("849")
		const addressSiexFQ0 = accounts[4]
		const uintDVntpP = BigInt("1363")
		const addressALeIYz = "0x0000000000000000000000000000000000000001"
		const addressBJI4L19 = accounts[1]
		const boolpVoVUy6 = await REXUNIFINANCEWZHzeJg.approve.call(addressSiexFQ0, uint7OyfWo, {from: accounts[2]});
		const boolc2jYBb9 = await REXUNIFINANCEWZHzeJg.increaseApproval.call(addressALeIYz, uintDVntpP, {from: accounts[1]});
		const uint256l7eaaO2 = await REXUNIFINANCEWZHzeJg.balanceOf.call(addressBJI4L19, {from: accounts[5]});

		assert.equal(boolc2jYBb9, true)
		assert.equal(boolpVoVUy6, true)
		assert.equal(uint256l7eaaO2, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEvqxO8i = await REXUNIFINANCE.new({from: accounts[1]});
		const uintaow2uNA = BigInt("29")
		const addressbaESbpN = "0x0000000000000000000000000000000000000001"
		const uintuEi2roK = BigInt("558")
		const addressuEeTbK2 = accounts[1]
		const uintt74m2tH = BigInt("1059")
		const addressRhrDsnE = accounts[0]
		const boolM1biX9 = await REXUNIFINANCEvqxO8i.approve.call(addressbaESbpN, uintaow2uNA, {from: accounts[4]});
//		const boolPXjd2LR = await REXUNIFINANCEvqxO8i.transfer.call(addressuEeTbK2, uintuEi2roK, {from: accounts[4]});
//		const boolUsFJAAf = await REXUNIFINANCEvqxO8i.transfer.call(addressRhrDsnE, uintt74m2tH, {from: accounts[1]});

		assert.equal(boolM1biX9, true)
		await expect(REXUNIFINANCEvqxO8i.transfer.call(addressuEeTbK2, uintuEi2roK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEfFhA08G = await REXUNIFINANCE.new({from: accounts[5]});
		const address6j8SEY = accounts[4]
		const uintvHHIdb = BigInt("647")
		const addressF1SIpXS = accounts[4]
		const addressLW0dU4F = accounts[1]
//		const addressvvPqsz = await REXUNIFINANCEfFhA08G.transferOwnership.call(address6j8SEY, {from: accounts[4]});
//		const boolypLSrU = await REXUNIFINANCEfFhA08G.transferFrom.call(addressLW0dU4F, addressF1SIpXS, uintvHHIdb, {from: accounts[2]});

		await expect(REXUNIFINANCEfFhA08G.transferOwnership.call(address6j8SEY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEeUhQR7O = await REXUNIFINANCE.new({from: accounts[1]});
		const addressjO4Tiso = accounts[2]
		const addresscVJgXPk = accounts[2]
		const addressIo5UovS = accounts[1]
		const uintG7N003Y = BigInt("1296")
		const addressPO5QTNf = accounts[0]
		const addressVbYjXt6 = await REXUNIFINANCEeUhQR7O.transferOwnership.call(addressjO4Tiso, {from: accounts[1]});
		const uint256q0Diw4o = await REXUNIFINANCEeUhQR7O.allowance.call(addressIo5UovS, addresscVJgXPk, {from: accounts[0]});
		const boolTv6YLE3 = await REXUNIFINANCEeUhQR7O.approve.call(addressPO5QTNf, uintG7N003Y, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTv6YLE3, true)
		assert.equal(uint256q0Diw4o, BigInt("0"))
	});
})