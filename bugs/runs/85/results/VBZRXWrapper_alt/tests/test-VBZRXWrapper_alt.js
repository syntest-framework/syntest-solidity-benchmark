const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractgTo0XtW = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueBzkiZrh = BigInt("425")
		const spendervZXkUec = accounts[2]
		const valueD47b9d8 = BigInt("401")
		const dstTa2RIjU = accounts[4]
		const srcvfJBebC = accounts[2]
		const valuesoNP44H = BigInt("1131")
		const nullWAIpthw = await contractgTo0XtW.approve.call(spendervZXkUec, valueBzkiZrh, {from: "0x0000000000000000000000000000000000000001"});
		const nullvNAu1A4 = await contractgTo0XtW.transferFrom.call(srcvfJBebC, dstTa2RIjU, valueD47b9d8, {from: accounts[4]});
		await contractgTo0XtW.deposit.call(valuesoNP44H, {from: accounts[2]});

		assert.equal(nullWAIpthw, true)
		await expect(contractgTo0XtW.transferFrom.call(srcvfJBebC, dstTa2RIjU, valueD47b9d8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractR5Sd18c = await VBZRXWrapper_alt.new({from: accounts[3]});
		const value8mdzkb = BigInt("1593")
		const valuebypR7on = BigInt("302")
		const spenderRTenffo = accounts[0]
		await contractR5Sd18c.exit.call({from: accounts[2]});
		await contractR5Sd18c.deposit.call(value8mdzkb, {from: accounts[2]});
		const nullDH6h5EU = await contractR5Sd18c.approve.call(spenderRTenffo, valuebypR7on, {from: accounts[5]});
		const null3rDQiG = await contractR5Sd18c.claim.call({from: accounts[3]});

		await expect(contractR5Sd18c.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracto6mNA2k = await VBZRXWrapper_alt.new({from: accounts[0]});
		const toggleGy4GniU = true
		const addrPl8k3Q9 = accounts[2]
		const accountqksMDYX = accounts[5]
		const nulldFht8Yz = await contracto6mNA2k.claim.call({from: accounts[4]});
		await contracto6mNA2k.setBridge.call(addrPl8k3Q9, toggleGy4GniU, {from: accounts[1]});
		const nullyVYH1Z = await contracto6mNA2k.claim.call({from: accounts[1]});
		await contracto6mNA2k.exit.call({from: accounts[3]});
		const nullvDlMkT2 = await contracto6mNA2k.claimable.call(accountqksMDYX, {from: accounts[5]});

		assert.equal(nulldFht8Yz, 0)
		await expect(contracto6mNA2k.setBridge.call(addrPl8k3Q9, toggleGy4GniU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractfgIGaw = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueJnpfIyI = BigInt("1719")
		const spenderjOhvGUw = accounts[2]
		const accountP8oZc0 = accounts[0]
		const nullqmDxv4l = await contractfgIGaw.approve.call(spenderjOhvGUw, valueJnpfIyI, {from: accounts[2]});
		const nullgzTg7ip = await contractfgIGaw.claim.call({from: accounts[5]});
		const nulln2jQTq = await contractfgIGaw.claimable.call(accountP8oZc0, {from: accounts[5]});
		const nullzHDaQpQ = await contractfgIGaw.claim.call({from: accounts[1]});

		assert.equal(nullgzTg7ip, 0)
		assert.equal(nulln2jQTq, 0)
		assert.equal(nullqmDxv4l, true)
		assert.equal(nullzHDaQpQ, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractTi8mXuy = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueyYMgyzM = BigInt("442")
		const valueJzHgtp = BigInt("2032")
		const dstb9XRXZ7 = accounts[2]
		const srcbHVdVzr = accounts[3]
		const valuerARXdrR = BigInt("1329")
		const valuepNOHKNv = BigInt("535")
		const dsthesEZpc = accounts[3]
		const srcv0U8Epx = accounts[3]
		const valueyRhOro = BigInt("1782")
		const dstECi1mG9 = accounts[5]
		const srcIlXv5Xc = accounts[1]
		await contractTi8mXuy.deposit.call(valueyYMgyzM, {from: accounts[1]});
		const nullLlpqek7 = await contractTi8mXuy.transferFrom.call(srcbHVdVzr, dstb9XRXZ7, valueJzHgtp, {from: accounts[1]});
		await contractTi8mXuy.deposit.call(valuerARXdrR, {from: accounts[5]});
		const nullc9i2sV = await contractTi8mXuy.transferFrom.call(srcv0U8Epx, dsthesEZpc, valuepNOHKNv, {from: accounts[3]});
		const nullMVDEL5F = await contractTi8mXuy.transferFrom.call(srcIlXv5Xc, dstECi1mG9, valueyRhOro, {from: accounts[1]});

		await expect(contractTi8mXuy.deposit.call(valueyYMgyzM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractaHg6osY = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuekYcXx5l = BigInt("1327")
		const dstUzbO1I = accounts[2]
		const valuecZNj2e = BigInt("1098")
		const valuepJcn7Ux = BigInt("1089")
		const spenderV1aWaff = "0x0000000000000000000000000000000000000001"
		const nullqZC30fe = await contractaHg6osY.transfer.call(dstUzbO1I, valuekYcXx5l, {from: accounts[1]});
		await contractaHg6osY.withdraw.call(valuecZNj2e, {from: accounts[0]});
		await contractaHg6osY.exit.call({from: accounts[2]});
		const nullpWV9aaF = await contractaHg6osY.approve.call(spenderV1aWaff, valuepJcn7Ux, {from: accounts[3]});

		await expect(contractaHg6osY.transfer.call(dstUzbO1I, valuekYcXx5l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractkZqQNDc = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueRjP1tOX = BigInt("1444")
		const dstoo6G96q = accounts[3]
		const srczLps2Vj = accounts[3]
		const valueksm43i0 = BigInt("1377")
		const nullUCM8MGI = await contractkZqQNDc.transferFrom.call(srczLps2Vj, dstoo6G96q, valueRjP1tOX, {from: accounts[2]});
		await contractkZqQNDc.deposit.call(valueksm43i0, {from: accounts[2]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracttuZDtV = await VBZRXWrapper_alt.new({from: accounts[0]});
		const toggleNapc2a1 = false
		const addrih7BcnK = accounts[1]
		const togglek5rByHq = false
		const addrtsRQat = accounts[0]
		await contracttuZDtV.setBridge.call(addrih7BcnK, toggleNapc2a1, {from: accounts[0]});
		await contracttuZDtV.exit.call({from: accounts[5]});
		await contracttuZDtV.setBridge.call(addrtsRQat, togglek5rByHq, {from: accounts[1]});

		await expect(contracttuZDtV.setBridge.call(addrih7BcnK, toggleNapc2a1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})