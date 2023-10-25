const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressQKIuh77 = accounts[2]
		const uintrBWJDv0 = BigInt("644")
		const DatrixoEquityTokenYfbLTGu = await DatrixoEquityToken.new(addressQKIuh77, uintrBWJDv0, {from: accounts[1]});
		const uintBM3kui5 = BigInt("392")
		const addressN36P1Tn = "0x0000000000000000000000000000000000000001"
		const addressw6IYPD7 = accounts[3]
		const addressX39x5x1 = accounts[0]
		const address1arTiH = accounts[0]
		const boolLHuT26r = await DatrixoEquityTokenYfbLTGu.transferFrom.call(addressw6IYPD7, addressN36P1Tn, uintBM3kui5, {from: accounts[0]});
		const boolILka9mB = await DatrixoEquityTokenYfbLTGu.removeShareholder.call(addressX39x5x1, {from: accounts[1]});
		const booljnj4FL = await DatrixoEquityTokenYfbLTGu.removeShareholder.call(address1arTiH, {from: accounts[5]});

		await expect(DatrixoEquityTokenYfbLTGu.transferFrom.call(addressw6IYPD7, addressN36P1Tn, uintBM3kui5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresspXrTYhW = accounts[1]
		const uintveWfd7j = BigInt("2002")
		const DatrixoEquityTokenxSQjyPD = await DatrixoEquityToken.new(addresspXrTYhW, uintveWfd7j, {from: accounts[5]});
		const uintJQ2NOWD = BigInt("1475")
		const addressJznM9Zw = accounts[4]
		const addressIXlr1zB = accounts[1]
		const addressarraywGIoUvM = await DatrixoEquityTokenxSQjyPD.getShareholdersArray.call({from: accounts[1]});
		await DatrixoEquityTokenxSQjyPD.afterStartTime.call({from: accounts[5]});
		await DatrixoEquityTokenxSQjyPD.afterStartTime.call({from: accounts[5]});
		await DatrixoEquityTokenxSQjyPD.afterStartTime.call({from: accounts[0]});
		const boolphNw5BI = await DatrixoEquityTokenxSQjyPD.transferFrom.call(addressIXlr1zB, addressJznM9Zw, uintJQ2NOWD, {from: accounts[4]});

		assert.equal(addressarraywGIoUvM, )
		await expect(DatrixoEquityTokenxSQjyPD.afterStartTime.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressxMojas = accounts[5]
		const uintsZmLDt = BigInt("816")
		const DatrixoEquityTokensCQ9wqF = await DatrixoEquityToken.new(addressxMojas, uintsZmLDt, {from: "0x0000000000000000000000000000000000000001"});
		const addressYTwzIMw = accounts[5]
		const uintjt8nFP = BigInt("2004")
		const addressGWL2xxN = accounts[3]
		const addressPdJ2agX = accounts[4]
		const addressBdhsCDD = accounts[0]
		const booloYXRNrM = await DatrixoEquityTokensCQ9wqF.removeShareholder.call(addressYTwzIMw, {from: accounts[2]});
		const boolyGJpgO4 = await DatrixoEquityTokensCQ9wqF.transferFrom.call(addressPdJ2agX, addressGWL2xxN, uintjt8nFP, {from: accounts[1]});
		await DatrixoEquityTokensCQ9wqF.afterStartTime.call({from: accounts[5]});
		await DatrixoEquityTokensCQ9wqF.afterStartTime.call({from: accounts[1]});
		const boolM8VjD8d = await DatrixoEquityTokensCQ9wqF.removeShareholder.call(addressBdhsCDD, {from: accounts[2]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressqYEQc0I = accounts[1]
		const uintZjZVpD = BigInt("1102")
		const DatrixoEquityTokenF69cXw0 = await DatrixoEquityToken.new(addressqYEQc0I, uintZjZVpD, {from: accounts[3]});
		const addressgRFozly = accounts[0]
		const uinteArYuOR = BigInt("1527")
		const addressOOca9NN = "0x0000000000000000000000000000000000000001"
		const addressYL49dzz = "0x0000000000000000000000000000000000000001"
		const addressarraygvPztJC = await DatrixoEquityTokenF69cXw0.getShareholdersArray.call({from: accounts[4]});
		const boolxH6OAzG = await DatrixoEquityTokenF69cXw0.removeShareholder.call(addressgRFozly, {from: accounts[1]});
		const addressarrayusBiPjS = await DatrixoEquityTokenF69cXw0.getShareholdersArray.call({from: accounts[4]});
		const boolenBXpog = await DatrixoEquityTokenF69cXw0.transferFrom.call(addressYL49dzz, addressOOca9NN, uinteArYuOR, {from: accounts[4]});
		await DatrixoEquityTokenF69cXw0.afterStartTime.call({from: accounts[3]});

		assert.equal(addressarraygvPztJC, )
		await expect(DatrixoEquityTokenF69cXw0.removeShareholder.call(addressgRFozly, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressXw2Ankc = accounts[1]
		const uintu1TvLl3 = BigInt("1102")
		const DatrixoEquityTokenF69cXw0 = await DatrixoEquityToken.new(addressXw2Ankc, uintu1TvLl3, {from: accounts[3]});
		const uintCQsqy4r = BigInt("1712")
		const address07MzUy = accounts[0]
		const uintHHF6Gsc = BigInt("1540")
		const addressN62Rwj8 = accounts[3]
		const addressW8M8iA2 = "0x0000000000000000000000000000000000000001"
		const addressarraygvPztJC = await DatrixoEquityTokenF69cXw0.getShareholdersArray.call({from: accounts[4]});
		const uintpia8K50 = await DatrixoEquityTokenF69cXw0.setStart.call(uintCQsqy4r, {from: accounts[1]});
		const boolxH6OAzG = await DatrixoEquityTokenF69cXw0.removeShareholder.call(address07MzUy, {from: accounts[1]});
		const addressarrayusBiPjS = await DatrixoEquityTokenF69cXw0.getShareholdersArray.call({from: accounts[4]});
		const boolenBXpog = await DatrixoEquityTokenF69cXw0.transferFrom.call(addressW8M8iA2, addressN62Rwj8, uintHHF6Gsc, {from: accounts[4]});

		assert.equal(addressarraygvPztJC, )
		await expect(DatrixoEquityTokenF69cXw0.setStart.call(uintCQsqy4r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressbs783hM = accounts[1]
		const uintEeB8Ly2 = BigInt("1102")
		const DatrixoEquityTokenF69cXw0 = await DatrixoEquityToken.new(addressbs783hM, uintEeB8Ly2, {from: accounts[3]});
		const uintGcMumXC = BigInt("778")
		const addresseEBf461 = accounts[0]
		const uintq5TX7B = BigInt("797")
		const addressgiS4OF6 = accounts[0]
		const uintbQS7BSY = BigInt("1527")
		const addressmuF7LjP = "0x0000000000000000000000000000000000000001"
		const addressPTC4oCH = "0x0000000000000000000000000000000000000001"
		const addressarraygvPztJC = await DatrixoEquityTokenF69cXw0.getShareholdersArray.call({from: accounts[4]});
		const boolsT8L6d0 = await DatrixoEquityTokenF69cXw0.transfer.call(addresseEBf461, uintGcMumXC, {from: accounts[1]});
		const uinteJieVPI = await DatrixoEquityTokenF69cXw0.setStart.call(uintq5TX7B, {from: accounts[2]});
		const boolxH6OAzG = await DatrixoEquityTokenF69cXw0.removeShareholder.call(addressgiS4OF6, {from: accounts[1]});
		const addressarrayusBiPjS = await DatrixoEquityTokenF69cXw0.getShareholdersArray.call({from: accounts[4]});
		const boolenBXpog = await DatrixoEquityTokenF69cXw0.transferFrom.call(addressPTC4oCH, addressmuF7LjP, uintbQS7BSY, {from: accounts[4]});
		await DatrixoEquityTokenF69cXw0.afterStartTime.call({from: accounts[3]});

		assert.equal(addressarraygvPztJC, )
		assert.equal(boolsT8L6d0, true)
		await expect(DatrixoEquityTokenF69cXw0.setStart.call(uintq5TX7B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressVj0DQ1J = accounts[4]
		const uintqxqGp2E = BigInt("542")
		const DatrixoEquityTokenw92JKf2 = await DatrixoEquityToken.new(addressVj0DQ1J, uintqxqGp2E, {from: accounts[0]});
		const uintFa1oqW = BigInt("1195")
		const addressie5Maho = accounts[3]
		const addressuGn0k0D = accounts[2]
		const uintiNaoXud = BigInt("712")
		const addressjH7qcW = accounts[5]
		const addressueL1anS = accounts[1]
		const boolwPM6ekR = await DatrixoEquityTokenw92JKf2.transferFrom.call(addressuGn0k0D, addressie5Maho, uintFa1oqW, {from: accounts[4]});
		const boolHCFW2db = await DatrixoEquityTokenw92JKf2.transferFrom.call(addressueL1anS, addressjH7qcW, uintiNaoXud, {from: accounts[1]});
		await DatrixoEquityTokenw92JKf2.afterStartTime.call({from: accounts[5]});
		const addressarrayedkydVI = await DatrixoEquityTokenw92JKf2.getShareholdersArray.call({from: accounts[2]});

		await expect(DatrixoEquityTokenw92JKf2.transferFrom.call(addressuGn0k0D, addressie5Maho, uintFa1oqW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressSiI12pC = accounts[4]
		const uintB429RtK = BigInt("542")
		const DatrixoEquityTokenw92JKf2 = await DatrixoEquityToken.new(addressSiI12pC, uintB429RtK, {from: accounts[0]});
		const uint5acoQ0 = BigInt("1195")
		const addressCfy32Lg = accounts[3]
		const addressy7ZDBPE = accounts[4]
		const uintbjBBSdg = BigInt("712")
		const addressr4xvaM = accounts[5]
		const addresswTDvcCe = accounts[1]
		const boolwPM6ekR = await DatrixoEquityTokenw92JKf2.transferFrom.call(addressy7ZDBPE, addressCfy32Lg, uint5acoQ0, {from: accounts[4]});
		const boolHCFW2db = await DatrixoEquityTokenw92JKf2.transferFrom.call(addresswTDvcCe, addressr4xvaM, uintbjBBSdg, {from: accounts[1]});
		const addressarrayedkydVI = await DatrixoEquityTokenw92JKf2.getShareholdersArray.call({from: accounts[2]});

		assert.equal(boolwPM6ekR, true)
		await expect(DatrixoEquityTokenw92JKf2.transferFrom.call(addresswTDvcCe, addressr4xvaM, uintbjBBSdg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresssebTIL9 = accounts[4]
		const uintiw4LwNo = BigInt("542")
		const DatrixoEquityTokenw92JKf2 = await DatrixoEquityToken.new(addresssebTIL9, uintiw4LwNo, {from: accounts[0]});
		const uintwkSAlfu = BigInt("1622")
		const addressBw2AQVn = accounts[4]
		const uintrZa0rcw = BigInt("1195")
		const addressQpNkNbV = accounts[3]
		const addressz8wLF0I = accounts[4]
		const uintYaMNV3x = BigInt("894")
		const addressAArPOwp = accounts[2]
		const boolo1J6a43 = await DatrixoEquityTokenw92JKf2.transfer.call(addressBw2AQVn, uintwkSAlfu, {from: accounts[4]});
		const boolwPM6ekR = await DatrixoEquityTokenw92JKf2.transferFrom.call(addressz8wLF0I, addressQpNkNbV, uintrZa0rcw, {from: accounts[4]});
		const addressarraye81YN1A = await DatrixoEquityTokenw92JKf2.getShareholdersArray.call({from: accounts[3]});
		const boolIPzCY64 = await DatrixoEquityTokenw92JKf2.transfer.call(addressAArPOwp, uintYaMNV3x, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokenw92JKf2.transfer.call(addressBw2AQVn, uintwkSAlfu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresst7KyNu0 = "0x0000000000000000000000000000000000000001"
		const uintxfxQtrv = BigInt("2")
		const DatrixoEquityTokenzjAsJp = await DatrixoEquityToken.new(addresst7KyNu0, uintxfxQtrv, {from: accounts[2]});
		const addressebxXtN0 = "0x0000000000000000000000000000000000000000"
		const boolLy5vgjl = await DatrixoEquityTokenzjAsJp.removeShareholder.call(addressebxXtN0, {from: "0x0000000000000000000000000000000000000001"});
		await DatrixoEquityTokenzjAsJp.onlyOwner.call({from: accounts[1]});

		await expect(DatrixoEquityTokenzjAsJp.removeShareholder.call(addressebxXtN0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})