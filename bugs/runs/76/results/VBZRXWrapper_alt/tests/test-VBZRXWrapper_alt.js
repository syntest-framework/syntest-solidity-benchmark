const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractoQhWfcm = await VBZRXWrapper_alt.new({from: accounts[2]});
		const togglej9Jhh9 = true
		const addrXZqVeOc = accounts[4]
		const valuejHdt5T = BigInt("1592")
		const valueRsTRIp = BigInt("1864")
		const valuehTQGlQU = BigInt("918")
		const dstQWf8iF = accounts[2]
		const valueTnSzA07 = BigInt("1938")
		const dstteqSmqF = accounts[4]
		await contractoQhWfcm.setBridge.call(addrXZqVeOc, togglej9Jhh9, {from: accounts[0]});
		await contractoQhWfcm.deposit.call(valuejHdt5T, {from: accounts[2]});
		await contractoQhWfcm.deposit.call(valueRsTRIp, {from: accounts[0]});
		const nullTJpWJAF = await contractoQhWfcm.transfer.call(dstQWf8iF, valuehTQGlQU, {from: accounts[1]});
		const nullmHDoDCa = await contractoQhWfcm.transfer.call(dstteqSmqF, valueTnSzA07, {from: accounts[4]});

		await expect(contractoQhWfcm.setBridge.call(addrXZqVeOc, togglej9Jhh9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracteepwInc = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueoA2e6yg = BigInt("1353")
		const valueXK5rwlI = BigInt("1966")
		const valuez7Jqk0R = BigInt("1341")
		const spenderbPQ9yMt = "0x0000000000000000000000000000000000000001"
		await contracteepwInc.exit.call({from: accounts[4]});
		await contracteepwInc.deposit.call(valueoA2e6yg, {from: accounts[1]});
		await contracteepwInc.deposit.call(valueXK5rwlI, {from: accounts[3]});
		const nullI1F91T1 = await contracteepwInc.approve.call(spenderbPQ9yMt, valuez7Jqk0R, {from: accounts[1]});

		await expect(contracteepwInc.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractsmCNzh = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueYqHKAbF = BigInt("2005")
		const toggletKen1BN = false
		const addrCDnNCv = accounts[0]
		const valuexAsGlmz = BigInt("511")
		const dstPmAn5o9 = accounts[0]
		const srcTP51NS = accounts[2]
		const valueKZDm4Aa = BigInt("832")
		const dsttkYr6tO = accounts[0]
		const srcYpnCBQO = accounts[2]
		const nulljxXTfGa = await contractsmCNzh.claim.call({from: accounts[3]});
		const nullekTGPlE = await contractsmCNzh.claim.call({from: accounts[2]});
		await contractsmCNzh.withdraw.call(valueYqHKAbF, {from: accounts[3]});
		await contractsmCNzh.setBridge.call(addrCDnNCv, toggletKen1BN, {from: accounts[3]});
		const nullWoSkTKs = await contractsmCNzh.transferFrom.call(srcTP51NS, dstPmAn5o9, valuexAsGlmz, {from: accounts[1]});
		const nullO9HVZff = await contractsmCNzh.transferFrom.call(srcYpnCBQO, dsttkYr6tO, valueKZDm4Aa, {from: accounts[2]});

		assert.equal(nullekTGPlE, 0)
		assert.equal(nulljxXTfGa, 0)
		await expect(contractsmCNzh.withdraw.call(valueYqHKAbF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractRlXbLz = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueRXVEIMW = BigInt("721")
		const spenderqnxSjBE = accounts[0]
		const valueopbO1SG = BigInt("1352")
		const accountWqgieIK = accounts[2]
		const valuekoiLJf6 = BigInt("972")
		const dstBkANiO1 = accounts[3]
		const srcAD44WqH = accounts[1]
		const nullwAvNkbW = await contractRlXbLz.approve.call(spenderqnxSjBE, valueRXVEIMW, {from: accounts[0]});
		await contractRlXbLz.deposit.call(valueopbO1SG, {from: accounts[3]});
		const nullAGib2sw = await contractRlXbLz.claimable.call(accountWqgieIK, {from: accounts[1]});
		const nullvjGFmge = await contractRlXbLz.transferFrom.call(srcAD44WqH, dstBkANiO1, valuekoiLJf6, {from: accounts[4]});

		assert.equal(nullwAvNkbW, true)
		await expect(contractRlXbLz.deposit.call(valueopbO1SG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractr9jzMnP = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueKlbUWI = BigInt("1481")
		const dstqApK2b6 = accounts[2]
		const srcvQTkWwn = accounts[3]
		const accountnJ1Fm7p = accounts[3]
		const accountZF23uHW = accounts[2]
		const valueVdsHRI = BigInt("1068")
		const dstbZNhm2 = accounts[1]
		const srcUCIiAYu = accounts[2]
		const nullcVkgDZp = await contractr9jzMnP.transferFrom.call(srcvQTkWwn, dstqApK2b6, valueKlbUWI, {from: accounts[4]});
		const nullw5xLXwO = await contractr9jzMnP.claimable.call(accountnJ1Fm7p, {from: accounts[3]});
		const nullWHyQz16 = await contractr9jzMnP.claimable.call(accountZF23uHW, {from: accounts[2]});
		const nullJVG65Pc = await contractr9jzMnP.transferFrom.call(srcUCIiAYu, dstbZNhm2, valueVdsHRI, {from: accounts[4]});
		await contractr9jzMnP.exit.call({from: accounts[3]});

		await expect(contractr9jzMnP.transferFrom.call(srcvQTkWwn, dstqApK2b6, valueKlbUWI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractZkjrLAs = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		await contractZkjrLAs.exit.call({from: accounts[1]});
		await contractZkjrLAs.exit.call({from: accounts[3]});
		await contractZkjrLAs.exit.call({from: accounts[3]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractXIxFsyX = await VBZRXWrapper_alt.new({from: accounts[0]});
		const accountxGYLt78 = "0x0000000000000000000000000000000000000001"
		const valueWCFhybm = BigInt("1282")
		const accountYe2dFR = accounts[3]
		const nullhpFCUc1 = await contractXIxFsyX.claimable.call(accountxGYLt78, {from: accounts[4]});
		await contractXIxFsyX.withdraw.call(valueWCFhybm, {from: accounts[2]});
		const nulll904Wsx = await contractXIxFsyX.claimable.call(accountYe2dFR, {from: accounts[2]});
		const nullTsDBQZX = await contractXIxFsyX.claim.call({from: accounts[1]});

		assert.equal(nullhpFCUc1, 0)
		await expect(contractXIxFsyX.withdraw.call(valueWCFhybm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractzQBpS2o = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuepcDR20C = BigInt("199")
		const dstWDeV9e = accounts[5]
		const valueIyIbVdB = BigInt("801")
		const spenderZiEcruF = accounts[3]
		const valueFfL3eTQ = BigInt("660")
		const spenderfbzV8L6 = accounts[3]
		const valueDnuzmwZ = BigInt("941")
		const valuejn56iN7 = BigInt("1940")
		const spenderl6bOztX = accounts[2]
		const valueLQuP5hC = BigInt("1491")
		const nullcrfLFp6 = await contractzQBpS2o.transfer.call(dstWDeV9e, valuepcDR20C, {from: accounts[0]});
		const nullEyFy3Wz = await contractzQBpS2o.approve.call(spenderZiEcruF, valueIyIbVdB, {from: accounts[4]});
		const nullJo14eu4 = await contractzQBpS2o.approve.call(spenderfbzV8L6, valueFfL3eTQ, {from: accounts[3]});
		await contractzQBpS2o.withdraw.call(valueDnuzmwZ, {from: accounts[3]});
		const nullCcwiY35 = await contractzQBpS2o.approve.call(spenderl6bOztX, valuejn56iN7, {from: accounts[3]});
		await contractzQBpS2o.withdraw.call(valueLQuP5hC, {from: accounts[4]});

		await expect(contractzQBpS2o.transfer.call(dstWDeV9e, valuepcDR20C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractXi8QkoK = await VBZRXWrapper_alt.new({from: accounts[0]});
		const togglel6T3sit = false
		const addrhJdb6x8 = accounts[2]
		const valueCmM7q2 = BigInt("615")
		const accountRWaybn8 = accounts[1]
		await contractXi8QkoK.setBridge.call(addrhJdb6x8, togglel6T3sit, {from: accounts[0]});
		await contractXi8QkoK.deposit.call(valueCmM7q2, {from: accounts[1]});
		const nullrz3SbIQ = await contractXi8QkoK.claimable.call(accountRWaybn8, {from: accounts[1]});

		await expect(contractXi8QkoK.setBridge.call(addrhJdb6x8, togglel6T3sit, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})