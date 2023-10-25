const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractxR99uOX = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueQF1Kin3 = BigInt("872")
		const dstB8Ws47x = "0x0000000000000000000000000000000000000001"
		const srceG9nZiP = accounts[3]
		const valuevlvOoyI = BigInt("856")
		const nullPrX1spd = await contractxR99uOX.claim.call({from: accounts[1]});
		await contractxR99uOX.exit.call({from: accounts[1]});
		const nulli8CrZ1i = await contractxR99uOX.transferFrom.call(srceG9nZiP, dstB8Ws47x, valueQF1Kin3, {from: accounts[1]});
		await contractxR99uOX.deposit.call(valuevlvOoyI, {from: accounts[2]});

		assert.equal(nullPrX1spd, 0)
		await expect(contractxR99uOX.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractUoTR76h = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueBqwSCqU = BigInt("1157")
		const dstnVYRXpi = accounts[0]
		const srcQs7Qje0 = accounts[1]
		const valueyMsureX = BigInt("714")
		const valueWEkaLKF = BigInt("1011")
		const nulljrhe010 = await contractUoTR76h.transferFrom.call(srcQs7Qje0, dstnVYRXpi, valueBqwSCqU, {from: accounts[4]});
		await contractUoTR76h.withdraw.call(valueyMsureX, {from: accounts[0]});
		await contractUoTR76h.deposit.call(valueWEkaLKF, {from: accounts[1]});

		await expect(contractUoTR76h.transferFrom.call(srcQs7Qje0, dstnVYRXpi, valueBqwSCqU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractG3c1Wmf = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueh9tb9pu = BigInt("783")
		const dstBWcH5t = "0x0000000000000000000000000000000000000001"
		const srcni0Z63V = accounts[4]
		const valueRzbkMb0 = BigInt("263")
		const dstEurxnn = accounts[3]
		const accountYdIm07 = accounts[5]
		const valuefmAXS8E = BigInt("1318")
		const spenderwywrRg6 = accounts[4]
		const nullDnMTt5Y = await contractG3c1Wmf.transferFrom.call(srcni0Z63V, dstBWcH5t, valueh9tb9pu, {from: accounts[5]});
		const nullYu3G72h = await contractG3c1Wmf.transfer.call(dstEurxnn, valueRzbkMb0, {from: accounts[3]});
		const nullwgVrVvl = await contractG3c1Wmf.claimable.call(accountYdIm07, {from: accounts[3]});
		const nullDH0g1rD = await contractG3c1Wmf.approve.call(spenderwywrRg6, valuefmAXS8E, {from: accounts[4]});
		await contractG3c1Wmf.exit.call({from: accounts[2]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractHTdIwgH = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuedxRKmM0 = BigInt("1492")
		const spenderMT8BC22 = accounts[2]
		const valuekThMhI = BigInt("800")
		const spenderg9T7Ir = accounts[1]
		const nullgDSQvh = await contractHTdIwgH.claim.call({from: accounts[4]});
		const nullmkCOBzy = await contractHTdIwgH.claim.call({from: accounts[0]});
		const nullUyqVHcb = await contractHTdIwgH.approve.call(spenderMT8BC22, valuedxRKmM0, {from: accounts[4]});
		const nullfXxEdCZ = await contractHTdIwgH.approve.call(spenderg9T7Ir, valuekThMhI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullUyqVHcb, true)
		assert.equal(nullfXxEdCZ, true)
		assert.equal(nullgDSQvh, 0)
		assert.equal(nullmkCOBzy, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractI0wlNb3 = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueP5v3nxk = BigInt("1200")
		const valueqYpyPAi = BigInt("396")
		const spenderHt6trwk = "0x0000000000000000000000000000000000000001"
		const valueiHEhwv = BigInt("1705")
		const value8Fsv5G = BigInt("248")
		await contractI0wlNb3.deposit.call(valueP5v3nxk, {from: accounts[4]});
		await contractI0wlNb3.exit.call({from: accounts[5]});
		const nullE7rTxC = await contractI0wlNb3.approve.call(spenderHt6trwk, valueqYpyPAi, {from: accounts[1]});
		await contractI0wlNb3.withdraw.call(valueiHEhwv, {from: accounts[2]});
		await contractI0wlNb3.withdraw.call(value8Fsv5G, {from: accounts[5]});
		const nullQQa2iif = await contractI0wlNb3.claim.call({from: accounts[3]});

		await expect(contractI0wlNb3.deposit.call(valueP5v3nxk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract8zJl7q = await VBZRXWrapper_alt.new({from: accounts[4]});
		const toggleSHF4G4N = true
		const addrfzZv6R4 = accounts[0]
		const valuelR3ZobD = BigInt("1782")
		const spenderlIIvNAb = accounts[0]
		const valueHmRIS7l = BigInt("1970")
		await contract8zJl7q.setBridge.call(addrfzZv6R4, toggleSHF4G4N, {from: accounts[5]});
		const nullbBfuuTw = await contract8zJl7q.approve.call(spenderlIIvNAb, valuelR3ZobD, {from: accounts[4]});
		await contract8zJl7q.withdraw.call(valueHmRIS7l, {from: accounts[2]});

		await expect(contract8zJl7q.setBridge.call(addrfzZv6R4, toggleSHF4G4N, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractNzXUJu0 = await VBZRXWrapper_alt.new({from: accounts[5]});
		const accountAIsOZpp = accounts[2]
		const valuefOCX8yB = BigInt("785")
		const dstW81BYNE = "0x0000000000000000000000000000000000000001"
		const srcPvGMFY = accounts[2]
		const valueaokfYnY = BigInt("1201")
		const valueY3O8EpY = BigInt("1520")
		const spenderKFWjWL = accounts[3]
		const valuebImrtFH = BigInt("1053")
		const dstVnQhkr8 = accounts[1]
		const valueqTBVKu = BigInt("1504")
		const dstWXeHBMq = accounts[1]
		const srcEefQWPq = accounts[4]
		const valuezBRuvff = BigInt("62")
		const dstsY9EzUI = accounts[3]
		const srcqmpKUiR = accounts[1]
		const nullN1vXrRS = await contractNzXUJu0.claimable.call(accountAIsOZpp, {from: accounts[4]});
		const null6PIEA6 = await contractNzXUJu0.transferFrom.call(srcPvGMFY, dstW81BYNE, valuefOCX8yB, {from: accounts[2]});
		await contractNzXUJu0.deposit.call(valueaokfYnY, {from: accounts[4]});
		const nullh2bBPqF = await contractNzXUJu0.approve.call(spenderKFWjWL, valueY3O8EpY, {from: accounts[2]});
		const nulleLFUm1b = await contractNzXUJu0.transfer.call(dstVnQhkr8, valuebImrtFH, {from: "0x0000000000000000000000000000000000000001"});
		const nulljTMCM5a = await contractNzXUJu0.transferFrom.call(srcEefQWPq, dstWXeHBMq, valueqTBVKu, {from: accounts[1]});
		const nullAud2Jew = await contractNzXUJu0.transferFrom.call(srcqmpKUiR, dstsY9EzUI, valuezBRuvff, {from: accounts[2]});

		assert.equal(nullN1vXrRS, 0)
		await expect(contractNzXUJu0.transferFrom.call(srcPvGMFY, dstW81BYNE, valuefOCX8yB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractifNRN9o = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountTAgvgf = accounts[1]
		const accountVn3FtPx = accounts[4]
		const valueO1ZOBW = BigInt("1935")
		const dstcfYa25a = accounts[4]
		const valuexmt5zbm = BigInt("625")
		const dstfSi03mY = accounts[5]
		const srchsLQWtm = accounts[0]
		const nullZNSefFL = await contractifNRN9o.claimable.call(accountTAgvgf, {from: accounts[0]});
		const nullIQgyrZV = await contractifNRN9o.claimable.call(accountVn3FtPx, {from: accounts[4]});
		const nullfSjRYI3 = await contractifNRN9o.claim.call({from: accounts[4]});
		const nullVzAYHEo = await contractifNRN9o.transfer.call(dstcfYa25a, valueO1ZOBW, {from: accounts[1]});
		const nullapgyQv = await contractifNRN9o.claim.call({from: accounts[4]});
		const nulljSRBuL8 = await contractifNRN9o.transferFrom.call(srchsLQWtm, dstfSi03mY, valuexmt5zbm, {from: accounts[0]});

		assert.equal(nullIQgyrZV, 0)
		assert.equal(nullZNSefFL, 0)
		assert.equal(nullfSjRYI3, 0)
		await expect(contractifNRN9o.transfer.call(dstcfYa25a, valueO1ZOBW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractZfxjOQF = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountYbJJMsj = accounts[3]
		const toggleZUNWMFo = true
		const addrZS2kian = accounts[0]
		const accounti26Zk72 = accounts[2]
		const nullR5cqj7A = await contractZfxjOQF.claimable.call(accountYbJJMsj, {from: accounts[4]});
		await contractZfxjOQF.setBridge.call(addrZS2kian, toggleZUNWMFo, {from: accounts[4]});
		const nullfwY84F = await contractZfxjOQF.claimable.call(accounti26Zk72, {from: accounts[0]});

		assert.equal(nullR5cqj7A, 0)
		assert.equal(nullfwY84F, 0)
	});
})