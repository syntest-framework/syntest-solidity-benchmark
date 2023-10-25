const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressnjn3Yqb = accounts[2]
		const uinto22292u = BigInt("157")
		const DatrixoEquityTokenVCl1AE9 = await DatrixoEquityToken.new(addressnjn3Yqb, uinto22292u, {from: accounts[2]});
		const uintPh0zXP = BigInt("648")
		const addresshcwqhiH = accounts[5]
		const uintAGHrgM = BigInt("303")
		const addressXCTT90w = accounts[2]
		const addressarrayujPLb9r = await DatrixoEquityTokenVCl1AE9.getShareholdersArray.call({from: accounts[1]});
		const boolP6pAMUi = await DatrixoEquityTokenVCl1AE9.transfer.call(addresshcwqhiH, uintPh0zXP, {from: accounts[3]});
		const boolPlSsvQ = await DatrixoEquityTokenVCl1AE9.transfer.call(addressXCTT90w, uintAGHrgM, {from: accounts[1]});

		assert.equal(addressarrayujPLb9r, )
		await expect(DatrixoEquityTokenVCl1AE9.transfer.call(addresshcwqhiH, uintPh0zXP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresszwOQocR = accounts[5]
		const uintsgO36ey = BigInt("369")
		const DatrixoEquityTokenyRc7Rj = await DatrixoEquityToken.new(addresszwOQocR, uintsgO36ey, {from: accounts[3]});
		const uintw7baMIy = BigInt("1408")
		const addressbPzlO7r = accounts[5]
		const uintvRowp6w = BigInt("293")
		const addressM8K75vS = accounts[5]
		const addressaPvrWYl = accounts[0]
		await DatrixoEquityTokenyRc7Rj.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uintK1eOoyq = await DatrixoEquityTokenyRc7Rj.setStart.call(uintw7baMIy, {from: "0x0000000000000000000000000000000000000001"});
		const boolCiUSLK = await DatrixoEquityTokenyRc7Rj.removeShareholder.call(addressbPzlO7r, {from: accounts[1]});
		await DatrixoEquityTokenyRc7Rj.onlyOwner.call({from: accounts[0]});
		const boolonXmnfM = await DatrixoEquityTokenyRc7Rj.transferFrom.call(addressaPvrWYl, addressM8K75vS, uintvRowp6w, {from: accounts[2]});
		await DatrixoEquityTokenyRc7Rj.afterStartTime.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenyRc7Rj.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresslDpjd3l = accounts[3]
		const uinteKOxBZ = BigInt("1049")
		const DatrixoEquityTokenvUr9r8L = await DatrixoEquityToken.new(addresslDpjd3l, uinteKOxBZ, {from: accounts[4]});
		const uinta1rGtp = BigInt("504")
		const uintOVe1Mmv = await DatrixoEquityTokenvUr9r8L.setStart.call(uinta1rGtp, {from: accounts[3]});
		const addressarrayzT0tjmU = await DatrixoEquityTokenvUr9r8L.getShareholdersArray.call({from: accounts[4]});

		assert.equal(addressarrayzT0tjmU, )
	});

	it('test for DatrixoEquityToken', async () => {
		const addressVbaZiVU = accounts[3]
		const uintzSXY7nG = BigInt("1049")
		const DatrixoEquityTokenvUr9r8L = await DatrixoEquityToken.new(addressVbaZiVU, uintzSXY7nG, {from: accounts[4]});
		const uintyx2CuD = BigInt("1174")
		const uintOVe1Mmv = await DatrixoEquityTokenvUr9r8L.setStart.call(uintyx2CuD, {from: accounts[3]});
		const addressarraysb3beCL = await DatrixoEquityTokenvUr9r8L.getShareholdersArray.call({from: accounts[2]});
		const addressarrayzT0tjmU = await DatrixoEquityTokenvUr9r8L.getShareholdersArray.call({from: accounts[4]});

		await expect(DatrixoEquityTokenvUr9r8L.setStart.call(uintyx2CuD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const address520OUo = accounts[2]
		const uintgFOoxhU = BigInt("1435")
		const DatrixoEquityTokeneUj21M1 = await DatrixoEquityToken.new(address520OUo, uintgFOoxhU, {from: "0x0000000000000000000000000000000000000001"});
		const uintYahVd6R = BigInt("517")
		const uintiumON4R = await DatrixoEquityTokeneUj21M1.setStart.call(uintYahVd6R, {from: accounts[5]});
		await DatrixoEquityTokeneUj21M1.onlyOwner.call({from: accounts[5]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressLkIBkPh = accounts[3]
		const uintw1KVOGi = BigInt("1049")
		const DatrixoEquityTokenvUr9r8L = await DatrixoEquityToken.new(addressLkIBkPh, uintw1KVOGi, {from: accounts[4]});
		const addressanyD36U = accounts[2]
		const addressarrayzT0tjmU = await DatrixoEquityTokenvUr9r8L.getShareholdersArray.call({from: accounts[4]});
		const boolANqAK3 = await DatrixoEquityTokenvUr9r8L.removeShareholder.call(addressanyD36U, {from: accounts[3]});

		assert.equal(addressarrayzT0tjmU, )
		await expect(DatrixoEquityTokenvUr9r8L.removeShareholder.call(addressanyD36U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressVmZDlh9 = accounts[3]
		const uintkU3DIRQ = BigInt("1049")
		const DatrixoEquityTokenvUr9r8L = await DatrixoEquityToken.new(addressVmZDlh9, uintkU3DIRQ, {from: accounts[4]});
		const uintwdiI50h = BigInt("1650")
		const addressU4C4Qw = accounts[1]
		const addresscbGiaF = accounts[3]
		const addressarrayzT0tjmU = await DatrixoEquityTokenvUr9r8L.getShareholdersArray.call({from: accounts[4]});
		const boolcOZmNFt = await DatrixoEquityTokenvUr9r8L.transferFrom.call(addresscbGiaF, addressU4C4Qw, uintwdiI50h, {from: accounts[3]});

		assert.equal(addressarrayzT0tjmU, )
		assert.equal(boolcOZmNFt, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addressRgZdCuL = accounts[2]
		const uintC5WtfpA = BigInt("197")
		const DatrixoEquityTokenq2Kqp0t = await DatrixoEquityToken.new(addressRgZdCuL, uintC5WtfpA, {from: accounts[3]});
		const uintqA5YJT = BigInt("10")
		const addressPRAm5p2 = accounts[0]
		const boolz7x906h = await DatrixoEquityTokenq2Kqp0t.transfer.call(addressPRAm5p2, uintqA5YJT, {from: accounts[2]});
		const addressarrayzhIaAm4 = await DatrixoEquityTokenq2Kqp0t.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayzhIaAm4, )
		assert.equal(boolz7x906h, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addressNZ4qVeG = accounts[3]
		const uintsgasoqd = BigInt("1049")
		const DatrixoEquityTokenvUr9r8L = await DatrixoEquityToken.new(addressNZ4qVeG, uintsgasoqd, {from: accounts[4]});
		const uintTnAk0ab = BigInt("1650")
		const addressDSt7hdv = accounts[1]
		const addressEmoDBDy = accounts[4]
		const boolcOZmNFt = await DatrixoEquityTokenvUr9r8L.transferFrom.call(addressEmoDBDy, addressDSt7hdv, uintTnAk0ab, {from: accounts[3]});
		await DatrixoEquityTokenvUr9r8L.onlyOwner.call({from: accounts[3]});

		await expect(DatrixoEquityTokenvUr9r8L.transferFrom.call(addressEmoDBDy, addressDSt7hdv, uintTnAk0ab, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressxmvavBV = accounts[3]
		const uintFqyF8Mj = BigInt("1049")
		const DatrixoEquityTokenvUr9r8L = await DatrixoEquityToken.new(addressxmvavBV, uintFqyF8Mj, {from: accounts[4]});
		const uintzz4KUQc = BigInt("1918")
		const addressE4CuhSK = accounts[3]
		const addressKRdAlJl = accounts[4]
		const boolLE1rkcZ = await DatrixoEquityTokenvUr9r8L.transfer.call(addressE4CuhSK, uintzz4KUQc, {from: accounts[3]});
		const boolANqAK3 = await DatrixoEquityTokenvUr9r8L.removeShareholder.call(addressKRdAlJl, {from: accounts[3]});

		await expect(DatrixoEquityTokenvUr9r8L.transfer.call(addressE4CuhSK, uintzz4KUQc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})