const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOsK9Kjj2 = await FrogDAO.new({from: accounts[3]});
		const addressIOU13Ro = accounts[1]
		const addressy8gU4Yt = accounts[1]
		const uintWEdP2iO = BigInt("395")
		const addressle6yow = accounts[1]
		const uintbBlli4 = BigInt("1962")
		const uintbYZTp3Y = BigInt("352")
		const uintjaWAGJf = BigInt("1382")
		const addressf7RmVe = accounts[1]
		const uintX9ZyZV = await FrogDAOsK9Kjj2.totalSupply.call({from: accounts[4]});
		const uintAXW9KCu = await FrogDAOsK9Kjj2.allowance.call(addressy8gU4Yt, addressIOU13Ro, {from: accounts[1]});
		const boolXpYjBX = await FrogDAOsK9Kjj2.approve.call(addressle6yow, uintWEdP2iO, {from: accounts[4]});
//		const uintwAhOvea = await FrogDAOsK9Kjj2.safeSub.call(uintbYZTp3Y, uintbBlli4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmwNBC5 = await FrogDAOsK9Kjj2.transfer.call(addressf7RmVe, uintjaWAGJf, {from: accounts[1]});

		assert.equal(boolXpYjBX, true)
		assert.equal(uintAXW9KCu, BigInt("0"))
		assert.equal(uintX9ZyZV, BigInt("1000000000000000000000000"))
		await expect(FrogDAOsK9Kjj2.safeSub.call(uintbYZTp3Y, uintbBlli4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOIX7Ghv5 = await FrogDAO.new({from: accounts[1]});
		const uintWlSAgUA = BigInt("1933")
		const uintnS6bitQ = BigInt("95")
		const uintZ4lN1IT = BigInt("957")
		const uintnhwF1KU = BigInt("634")
		const uintgLz6tbK = BigInt("1127")
		const uintBPz8lhq = BigInt("281")
		const uint9I30fY = BigInt("350")
		const addressaRvxQm0 = accounts[5]
		const uintc6B52Bc = await FrogDAOIX7Ghv5.safeAdd.call(uintnS6bitQ, uintWlSAgUA, {from: accounts[3]});
//		const uintAnJCV1l = await FrogDAOIX7Ghv5.safeSub.call(uintnhwF1KU, uintZ4lN1IT, {from: accounts[0]});
//		const uintEwSKwG8 = await FrogDAOIX7Ghv5.safeDiv.call(uintBPz8lhq, uintgLz6tbK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDcoReFP = await FrogDAOIX7Ghv5.approve.call(addressaRvxQm0, uint9I30fY, {from: accounts[4]});
//		const uintDd1NikK = await FrogDAOIX7Ghv5.totalSupply.call({from: accounts[1]});

		assert.equal(uintc6B52Bc, BigInt("2028"))
		await expect(FrogDAOIX7Ghv5.safeSub.call(uintnhwF1KU, uintZ4lN1IT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOZ3bNsSp = await FrogDAO.new({from: accounts[0]});
		const addressYnHvcaA = accounts[4]
		const uintgdU4zFU = BigInt("1940")
		const uintuYTaPE = BigInt("1629")
		const uintHtDq64Q = BigInt("66")
		const uintq8X6ph1 = BigInt("643")
		const uintsy4A6XF = await FrogDAOZ3bNsSp.balanceOf.call(addressYnHvcaA, {from: accounts[3]});
		const uintYt2atCl = await FrogDAOZ3bNsSp.safeDiv.call(uintuYTaPE, uintgdU4zFU, {from: accounts[1]});
		const uintcUVZOiS = await FrogDAOZ3bNsSp.safeMul.call(uintq8X6ph1, uintHtDq64Q, {from: accounts[3]});

		assert.equal(uintYt2atCl, BigInt("0"))
		assert.equal(uintcUVZOiS, BigInt("42438"))
		assert.equal(uintsy4A6XF, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOejw3Ums = await FrogDAO.new({from: accounts[2]});
		const uintNlfdJ5B = BigInt("598")
		const addresswQrc8SO = "0x0000000000000000000000000000000000000001"
		const addresshrLH9u2 = accounts[1]
		const addressh77C3Gx = "0x0000000000000000000000000000000000000001"
		const addressP9x5Rpa = accounts[2]
//		const boolM2Hqcyd = await FrogDAOejw3Ums.transferFrom.call(addresshrLH9u2, addresswQrc8SO, uintNlfdJ5B, {from: accounts[5]});
//		const uintujQjmAG = await FrogDAOejw3Ums.allowance.call(addressP9x5Rpa, addressh77C3Gx, {from: accounts[2]});

		await expect(FrogDAOejw3Ums.transferFrom.call(addresshrLH9u2, addresswQrc8SO, uintNlfdJ5B, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOVXa5XIU = await FrogDAO.new({from: accounts[3]});
		const uintZTeb5xz = BigInt("1728")
		const addressg6GjxI = accounts[1]
		const uintarX5bFj = BigInt("1547")
		const addressFcK0zJJ = accounts[4]
		const addresss2jCVXX = accounts[2]
		const uintXYn3NNp = BigInt("599")
		const uintVedhy7j = BigInt("319")
//		const boolfDwVf12 = await FrogDAOVXa5XIU.transfer.call(addressg6GjxI, uintZTeb5xz, {from: accounts[4]});
//		const boolvZQwbE = await FrogDAOVXa5XIU.transferFrom.call(addresss2jCVXX, addressFcK0zJJ, uintarX5bFj, {from: accounts[2]});
//		const uintEbCFdQs = await FrogDAOVXa5XIU.totalSupply.call({from: accounts[3]});
//		const uintWXZas1D = await FrogDAOVXa5XIU.safeAdd.call(uintVedhy7j, uintXYn3NNp, {from: accounts[3]});

		await expect(FrogDAOVXa5XIU.transfer.call(addressg6GjxI, uintZTeb5xz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAONibQaGE = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uinteo36DEf = BigInt("1460")
		const uintRAQD8iO = BigInt("900")
		const addresswBGxkfV = accounts[0]
		const addressY3CdNfu = accounts[1]
		const uintmXEu91G = await FrogDAONibQaGE.safeDiv.call(uintRAQD8iO, uinteo36DEf, {from: accounts[3]});
		const uintUo1lyJi = await FrogDAONibQaGE.totalSupply.call({from: accounts[1]});
		const uintzg2kDLF = await FrogDAONibQaGE.allowance.call(addressY3CdNfu, addresswBGxkfV, {from: accounts[5]});
	});
})