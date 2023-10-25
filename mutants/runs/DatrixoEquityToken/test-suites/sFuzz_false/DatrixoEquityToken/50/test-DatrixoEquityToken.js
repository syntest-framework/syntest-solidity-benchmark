const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressiFkiuMb = accounts[4]
		const uintWxDs9n = BigInt("346")
		const DatrixoEquityTokenaV3oy7Q = await DatrixoEquityToken.new(addressiFkiuMb, uintWxDs9n, {from: accounts[2]});
		const uintDrxQ2u3 = BigInt("1386")
		const addresssrO5NP8 = accounts[4]
		const addressd7E6xPn = accounts[2]
		const uintBCQNGn6 = BigInt("1095")
		const addressIF76Ri3 = accounts[1]
		const addressaQ9jFO = accounts[1]
		const addressL2ykzT = accounts[2]
		const boolbNLrXSh = await DatrixoEquityTokenaV3oy7Q.transferFrom.call(addressd7E6xPn, addresssrO5NP8, uintDrxQ2u3, {from: accounts[4]});
		await DatrixoEquityTokenaV3oy7Q.afterStartTime.call({from: accounts[4]});
		const addressarrayDd38kQi = await DatrixoEquityTokenaV3oy7Q.getShareholdersArray.call({from: accounts[4]});
		const boolghb01Hx = await DatrixoEquityTokenaV3oy7Q.transferFrom.call(addressaQ9jFO, addressIF76Ri3, uintBCQNGn6, {from: accounts[0]});
		const boolYg0EbAu = await DatrixoEquityTokenaV3oy7Q.removeShareholder.call(addressL2ykzT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenaV3oy7Q.transferFrom.call(addressd7E6xPn, addresssrO5NP8, uintDrxQ2u3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressVrtvjt4 = accounts[0]
		const uintCe64yYx = BigInt("1562")
		const DatrixoEquityTokenZRMtAN = await DatrixoEquityToken.new(addressVrtvjt4, uintCe64yYx, {from: "0x0000000000000000000000000000000000000001"});
		const uintKiwv9er = BigInt("1742")
		const addressQr8RPh = accounts[3]
		const addressYl2IKwY = accounts[2]
		const boolTeCRHLw = await DatrixoEquityTokenZRMtAN.transfer.call(addressQr8RPh, uintKiwv9er, {from: accounts[1]});
		const boolgX15x7 = await DatrixoEquityTokenZRMtAN.removeShareholder.call(addressYl2IKwY, {from: accounts[4]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addresslwP5NJF = accounts[0]
		const uintz98z6iW = BigInt("1884")
		const DatrixoEquityTokenPsrfqiH = await DatrixoEquityToken.new(addresslwP5NJF, uintz98z6iW, {from: accounts[5]});
		const uintXs7PKS = BigInt("1344")
		const uintZllXCZ0 = BigInt("57")
		const addressJUM0kC = accounts[2]
		const addressF4Resh = accounts[2]
		const uintFX4fAUb = BigInt("912")
		const addressEAJJxxE = accounts[5]
		await DatrixoEquityTokenPsrfqiH.onlyOwner.call({from: accounts[5]});
		const uintHvXqUHe = await DatrixoEquityTokenPsrfqiH.setStart.call(uintXs7PKS, {from: accounts[4]});
		const booll7zrBxv = await DatrixoEquityTokenPsrfqiH.transferFrom.call(addressF4Resh, addressJUM0kC, uintZllXCZ0, {from: accounts[2]});
		const boolTehDAgN = await DatrixoEquityTokenPsrfqiH.transfer.call(addressEAJJxxE, uintFX4fAUb, {from: accounts[5]});
		const addressarraydAlMe0B = await DatrixoEquityTokenPsrfqiH.getShareholdersArray.call({from: accounts[3]});

		await expect(DatrixoEquityTokenPsrfqiH.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressY5mRmdC = accounts[5]
		const uintcXjvfid = BigInt("1775")
		const DatrixoEquityTokeneqYFKaB = await DatrixoEquityToken.new(addressY5mRmdC, uintcXjvfid, {from: accounts[3]});
		const uintOZNEjWi = BigInt("1193")
		const addressAYF1tk3 = accounts[4]
		const addressFBk19xa = accounts[0]
		const boolZ2qslvO = await DatrixoEquityTokeneqYFKaB.transferFrom.call(addressFBk19xa, addressAYF1tk3, uintOZNEjWi, {from: accounts[1]});
		const addressarrayFuEXsAu = await DatrixoEquityTokeneqYFKaB.getShareholdersArray.call({from: accounts[3]});
		await DatrixoEquityTokeneqYFKaB.afterStartTime.call({from: accounts[3]});
		const addressarrayP1wu5qY = await DatrixoEquityTokeneqYFKaB.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokeneqYFKaB.afterStartTime.call({from: accounts[3]});
		await DatrixoEquityTokeneqYFKaB.afterStartTime.call({from: accounts[2]});

		await expect(DatrixoEquityTokeneqYFKaB.transferFrom.call(addressFBk19xa, addressAYF1tk3, uintOZNEjWi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresswnqjcTK = accounts[3]
		const uintepfTnf7 = BigInt("1053")
		const DatrixoEquityTokenkZab7Sq = await DatrixoEquityToken.new(addresswnqjcTK, uintepfTnf7, {from: accounts[0]});
		const uintwynqa3 = BigInt("134")
		const addressYsqN2Fk = accounts[2]
		const addressarrayraEzkX9 = await DatrixoEquityTokenkZab7Sq.getShareholdersArray.call({from: accounts[2]});
		const boolcrfbj43 = await DatrixoEquityTokenkZab7Sq.transfer.call(addressYsqN2Fk, uintwynqa3, {from: accounts[3]});
		const addressarrayGUcN9XA = await DatrixoEquityTokenkZab7Sq.getShareholdersArray.call({from: accounts[1]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[3]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[3]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[0]});

		assert.equal(addressarrayGUcN9XA, )
		assert.equal(addressarrayraEzkX9, )
		assert.equal(boolcrfbj43, true)
		await expect(DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressOcUkeCt = accounts[3]
		const uintAhA2rGQ = BigInt("1053")
		const DatrixoEquityTokenkZab7Sq = await DatrixoEquityToken.new(addressOcUkeCt, uintAhA2rGQ, {from: accounts[0]});
		const uintswdMOsx = BigInt("134")
		const addressLU3bPj = accounts[3]
		const uintE4sKuUm = BigInt("876")
		const addressyYopol6 = accounts[1]
		const addressarrayraEzkX9 = await DatrixoEquityTokenkZab7Sq.getShareholdersArray.call({from: accounts[2]});
		const addressarraydXB0oNr = await DatrixoEquityTokenkZab7Sq.getShareholdersArray.call({from: accounts[0]});
		const boolcrfbj43 = await DatrixoEquityTokenkZab7Sq.transfer.call(addressLU3bPj, uintswdMOsx, {from: accounts[3]});
		const addressarrayGUcN9XA = await DatrixoEquityTokenkZab7Sq.getShareholdersArray.call({from: accounts[1]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[3]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[3]});
		const boolD01ixp7 = await DatrixoEquityTokenkZab7Sq.transfer.call(addressyYopol6, uintE4sKuUm, {from: accounts[4]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[0]});

		assert.equal(addressarraydXB0oNr, )
		assert.equal(addressarrayraEzkX9, )
		await expect(DatrixoEquityTokenkZab7Sq.transfer.call(addressLU3bPj, uintswdMOsx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresspwBHJT7 = accounts[3]
		const uintfqtlEvv = BigInt("1053")
		const DatrixoEquityTokenkZab7Sq = await DatrixoEquityToken.new(addresspwBHJT7, uintfqtlEvv, {from: accounts[0]});
		const addressT5mGix = accounts[4]
		const uintMv1pLjF = BigInt("134")
		const addresspHRLcCU = accounts[0]
		const boolGtyXFWo = await DatrixoEquityTokenkZab7Sq.removeShareholder.call(addressT5mGix, {from: accounts[3]});
		const addressarrayraEzkX9 = await DatrixoEquityTokenkZab7Sq.getShareholdersArray.call({from: accounts[2]});
		const boolcrfbj43 = await DatrixoEquityTokenkZab7Sq.transfer.call(addresspHRLcCU, uintMv1pLjF, {from: accounts[3]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[3]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[3]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[0]});

		await expect(DatrixoEquityTokenkZab7Sq.removeShareholder.call(addressT5mGix, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresszeuieoi = accounts[3]
		const uintcTf0dlh = BigInt("1053")
		const DatrixoEquityTokenkZab7Sq = await DatrixoEquityToken.new(addresszeuieoi, uintcTf0dlh, {from: accounts[0]});
		const uints5IPCQb = BigInt("599")
		const uintlLxJ1oA = BigInt("117")
		const addressU5TYXs3 = accounts[1]
		const addresspKs0fd6 = accounts[1]
		const uintRWyE9zK = await DatrixoEquityTokenkZab7Sq.setStart.call(uints5IPCQb, {from: accounts[3]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[0]});
		const boolcrfbj43 = await DatrixoEquityTokenkZab7Sq.transfer.call(addressU5TYXs3, uintlLxJ1oA, {from: accounts[3]});
		const boolm78rQo = await DatrixoEquityTokenkZab7Sq.removeShareholder.call(addresspKs0fd6, {from: accounts[3]});
		await DatrixoEquityTokenkZab7Sq.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressDTNw2vg = accounts[3]
		const uintafOd52Z = BigInt("1053")
		const DatrixoEquityTokenkZab7Sq = await DatrixoEquityToken.new(addressDTNw2vg, uintafOd52Z, {from: accounts[0]});
		const uintwAWeWIz = BigInt("986")
		const addressYiM6jd7 = accounts[5]
		const addressDib6u1l = accounts[3]
		const uintueXQPcr = BigInt("134")
		const addressm2mDy76 = accounts[1]
		const bools1Y5IQW = await DatrixoEquityTokenkZab7Sq.transferFrom.call(addressDib6u1l, addressYiM6jd7, uintwAWeWIz, {from: accounts[3]});
		await DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[3]});
		const boolcrfbj43 = await DatrixoEquityTokenkZab7Sq.transfer.call(addressm2mDy76, uintueXQPcr, {from: accounts[3]});

		assert.equal(bools1Y5IQW, true)
		await expect(DatrixoEquityTokenkZab7Sq.afterStartTime.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressNNPggpc = accounts[3]
		const uintN3K7SMZ = BigInt("1053")
		const DatrixoEquityTokenkZab7Sq = await DatrixoEquityToken.new(addressNNPggpc, uintN3K7SMZ, {from: accounts[0]});
		const uintSGc9Vmh = BigInt("1969")
		const uintX8Y13fU = BigInt("986")
		const addressDlKeup1 = accounts[5]
		const addressopxkDEP = accounts[3]
		const addressarrayHotUMqj = await DatrixoEquityTokenkZab7Sq.getShareholdersArray.call({from: accounts[3]});
		const uintKOhYizq = await DatrixoEquityTokenkZab7Sq.setStart.call(uintSGc9Vmh, {from: accounts[3]});
		const bools1Y5IQW = await DatrixoEquityTokenkZab7Sq.transferFrom.call(addressopxkDEP, addressDlKeup1, uintX8Y13fU, {from: accounts[3]});

		assert.equal(addressarrayHotUMqj, )
		await expect(DatrixoEquityTokenkZab7Sq.setStart.call(uintSGc9Vmh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})