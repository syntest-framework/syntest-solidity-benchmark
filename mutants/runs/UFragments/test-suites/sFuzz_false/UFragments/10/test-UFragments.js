const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsn6DD9p1 = await UFragments.new({from: accounts[3]});
		const intFZenC3g = BigInt("-1256")
		const intLjJ1bcV = BigInt("1594")
		const int256sMDB48L = await UFragmentsn6DD9p1.sub.call(intLjJ1bcV, intFZenC3g, {from: accounts[1]});
		const addressbUCWDAq = await UFragmentsn6DD9p1.owner.call({from: accounts[4]});
		const stringydHjYkV = await UFragmentsn6DD9p1.name.call({from: accounts[0]});

		await expect(UFragmentsn6DD9p1.sub.call(intLjJ1bcV, intFZenC3g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrfoh8cV = await UFragments.new({from: accounts[1]});
		const addressW8iU1iY = accounts[4]
		const intoVZ05qG = BigInt("1534")
		const intadbRie4 = BigInt("-1480")
		const intUDwjrsP = BigInt("-1098")
		const intcvYi6zh = BigInt("1186")
		const addressM8q6mjN = await UFragmentsrfoh8cV.transferOwnership.call(addressW8iU1iY, {from: accounts[1]});
		const int256puYuxtt = await UFragmentsrfoh8cV.sub.call(intadbRie4, intoVZ05qG, {from: accounts[4]});
		await UFragmentsrfoh8cV.renounceOwnership.call({from: accounts[1]});
		const int256cb5E3g4 = await UFragmentsrfoh8cV.add.call(intcvYi6zh, intUDwjrsP, {from: accounts[2]});

		await expect(UFragmentsrfoh8cV.transferOwnership.call(addressW8iU1iY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsFTtjfQ7 = await UFragments.new({from: accounts[2]});
		const boolyLrFBty = await UFragmentsFTtjfQ7.rebaseTimeInfo.call({from: accounts[4]});
		const boolYURbftg = await UFragmentsFTtjfQ7.isOwner.call({from: accounts[3]});
		const boolY39oi4m = await UFragmentsFTtjfQ7.isOwner.call({from: accounts[3]});

		assert.equal(boolY39oi4m, false)
		assert.equal(boolYURbftg, false)
	});

	it('test for UFragments', async () => {
		const UFragmentsA2ALqJs = await UFragments.new({from: accounts[0]});
		const intmnft15O = BigInt("-1543")
		const intYCmJdF6 = BigInt("1358")
		const stringfFf55f = await UFragmentsA2ALqJs.name.call({from: accounts[0]});
		const addressKsEbZTX = await UFragmentsA2ALqJs.owner.call({from: accounts[2]});
		const int256rBKjLLN = await UFragmentsA2ALqJs.mul.call(intYCmJdF6, intmnft15O, {from: "0x0000000000000000000000000000000000000001"});
		const uint256T3OSfu = await UFragmentsA2ALqJs.totalSupply.call({from: accounts[4]});

		assert.equal(addressKsEbZTX, 0x0000000000000000000000000000000000000000)
		assert.equal(stringfFf55f, "")
		await expect(UFragmentsA2ALqJs.mul.call(intYCmJdF6, intmnft15O, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsv3Cw2uq = await UFragments.new({from: accounts[3]});
		const uintGfcayn = BigInt("155")
		const string0qpdvt = "xat42W9A1IgeOdgGbvXcJNRw6iJ02svzDH70WEwxikzeLUnJvkId3yPZA7OytNEA6"
		const stringBQI6ZXj = "aPo3sF1IifugvNZPf3ToAmSURLZw95t65NBblpBEwSwRCQnV6EOC8nPBOThiJyx8q8fik6jGsK6LEddNYFynjo4jAqdC8W"
		const addressUeviJZg = accounts[1]
		const intUUzSLF = BigInt("706")
		const intczWDKcb = BigInt("1761")
		const stringnlxxw6s = await UFragmentsv3Cw2uq.initialize.call(stringBQI6ZXj, string0qpdvt, uintGfcayn, {from: accounts[4]});
		const addressmAEjQAm = await UFragmentsv3Cw2uq.initialize.call(addressUeviJZg, {from: accounts[2]});
		const int256MxMhET8 = await UFragmentsv3Cw2uq.add.call(intczWDKcb, intUUzSLF, {from: accounts[1]});

		await expect(UFragmentsv3Cw2uq.initialize.call(addressUeviJZg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsZaafVXF = await UFragments.new({from: accounts[1]});
		const addresseY4xUPU = accounts[3]
		const addressgu7f7IE = accounts[0]
		const stringlBhO62d = await UFragmentsZaafVXF.name.call({from: accounts[4]});
		const uint256vGUhSLU = await UFragmentsZaafVXF.allowance.call(addressgu7f7IE, addresseY4xUPU, {from: accounts[4]});
		const uint256d6HEQHD = await UFragmentsZaafVXF.calRebase.call({from: accounts[0]});

		assert.equal(stringlBhO62d, "")
		assert.equal(uint256vGUhSLU, BigInt("0"))
		await expect(UFragmentsZaafVXF.calRebase.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsVxkNo70 = await UFragments.new({from: accounts[0]});
		const stringl9g4y2N = await UFragmentsVxkNo70.symbol.call({from: accounts[0]});
		const boolE61pDPM = await UFragmentsVxkNo70.isOwner.call({from: accounts[5]});
		const string9yPttN = await UFragmentsVxkNo70.name.call({from: accounts[4]});

		assert.equal(boolE61pDPM, false)
		assert.equal(string9yPttN, "")
		assert.equal(stringl9g4y2N, "")
	});

	it('test for UFragments', async () => {
		const UFragmentsZaafVXF = await UFragments.new({from: accounts[1]});
		const uintdwCs3iv = BigInt("897")
		const address9t0LxW = accounts[3]
		const addressBxDSB2R = accounts[0]
		const addressfI4v5Y7 = accounts[3]
		const addressHhC15rr = accounts[0]
		const boolCovBRM9 = await UFragmentsZaafVXF.transfer.call(address9t0LxW, uintdwCs3iv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QtU8mKj = await UFragmentsZaafVXF.balanceOf.call(addressBxDSB2R, {from: accounts[4]});
		const stringlBhO62d = await UFragmentsZaafVXF.name.call({from: accounts[4]});
		const uint256vGUhSLU = await UFragmentsZaafVXF.allowance.call(addressHhC15rr, addressfI4v5Y7, {from: accounts[4]});
		const uint256d6HEQHD = await UFragmentsZaafVXF.calRebase.call({from: accounts[0]});

		await expect(UFragmentsZaafVXF.transfer.call(address9t0LxW, uintdwCs3iv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsZaafVXF = await UFragments.new({from: accounts[1]});
		const uintFhmf8j8 = BigInt("1161")
		const addressho1xMAH = accounts[3]
		const addressIPN4wO = accounts[2]
		const addresshTxSF3H = accounts[3]
		const address01XdZB = accounts[0]
		const intPbtNmwY = BigInt("-1493")
		const intFnnTpKz = BigInt("-821")
		const stringlBhO62d = await UFragmentsZaafVXF.name.call({from: accounts[4]});
		const boolAWQXB98 = await UFragmentsZaafVXF.transferFrom.call(addressIPN4wO, addressho1xMAH, uintFhmf8j8, {from: accounts[2]});
		const uint256vGUhSLU = await UFragmentsZaafVXF.allowance.call(address01XdZB, addresshTxSF3H, {from: accounts[4]});
		const int256hnVxQx = await UFragmentsZaafVXF.add.call(intFnnTpKz, intPbtNmwY, {from: accounts[1]});
		const uint256d6HEQHD = await UFragmentsZaafVXF.calRebase.call({from: accounts[0]});

		assert.equal(stringlBhO62d, "")
		await expect(UFragmentsZaafVXF.transferFrom.call(addressIPN4wO, addressho1xMAH, uintFhmf8j8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsP7TDhdI = await UFragments.new({from: accounts[3]});
		const uintfc5Jkzk = BigInt("1163")
		const addressNA1b3m2 = accounts[5]
		const uint8BXLRmJs = await UFragmentsP7TDhdI.decimals.call({from: accounts[3]});
		const uint256edHdwCb = await UFragmentsP7TDhdI.totalSupply.call({from: accounts[2]});
		const boolfCkt27M = await UFragmentsP7TDhdI.transfer.call(addressNA1b3m2, uintfc5Jkzk, {from: accounts[5]});

		assert.equal(uint256edHdwCb, BigInt("0"))
		assert.equal(uint8BXLRmJs, BigInt("0"))
		await expect(UFragmentsP7TDhdI.transfer.call(addressNA1b3m2, uintfc5Jkzk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsZaafVXF = await UFragments.new({from: accounts[1]});
		const uintDx55rq8 = BigInt("1944")
		const addressTtg2rm3 = "0x0000000000000000000000000000000000000001"
		const boolwExcLh = await UFragmentsZaafVXF.approve.call(addressTtg2rm3, uintDx55rq8, {from: "0x0000000000000000000000000000000000000001"});
		const stringHxyUfhj = await UFragmentsZaafVXF.name.call({from: accounts[4]});
		const uint256d6HEQHD = await UFragmentsZaafVXF.calRebase.call({from: accounts[0]});

		assert.equal(boolwExcLh, true)
		assert.equal(stringHxyUfhj, "")
		await expect(UFragmentsZaafVXF.calRebase.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsziT6HGC = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addressOWeKddb = accounts[4]
		const uint8T3d5m2c = await UFragmentsziT6HGC.decimals.call({from: accounts[2]});
		const addressjSIWvMN = await UFragmentsziT6HGC.owner.call({from: accounts[2]});
		const addressL6qWhlP = await UFragmentsziT6HGC.initialize.call(addressOWeKddb, {from: "0x0000000000000000000000000000000000000001"});
		const boolCGXvDnw = await UFragmentsziT6HGC.rebaseTimeInfo.call({from: accounts[4]});
	});
})