const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractH2IioqL = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueUg2SY0p = BigInt("1177")
		const dsteX2m3nT = accounts[2]
		const srcBoZkND = accounts[4]
		const valueQMef1hf = BigInt("677")
		const dstNH5kbMu = accounts[5]
		const valueFBde8Oz = BigInt("275")
		const dstInDk6kQ = accounts[3]
		const nullZ8Lw5g7 = await contractH2IioqL.claim.call({from: accounts[4]});
		const nullElUulGb = await contractH2IioqL.transferFrom.call(srcBoZkND, dsteX2m3nT, valueUg2SY0p, {from: accounts[2]});
		const nulluDYWCmA = await contractH2IioqL.transfer.call(dstNH5kbMu, valueQMef1hf, {from: accounts[4]});
		const nullax37vh8 = await contractH2IioqL.transfer.call(dstInDk6kQ, valueFBde8Oz, {from: accounts[1]});

		assert.equal(nullZ8Lw5g7, 0)
		await expect(contractH2IioqL.transferFrom.call(srcBoZkND, dsteX2m3nT, valueUg2SY0p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractZNlLgWx = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueXhLhhWd = BigInt("118")
		const valueC6yVYLC = BigInt("1874")
		const spenderSm6oh6V = accounts[4]
		const toggleYyLmK2u = true
		const addrwaB3ix1 = accounts[4]
		await contractZNlLgWx.deposit.call(valueXhLhhWd, {from: accounts[5]});
		const nullNzVg7aK = await contractZNlLgWx.approve.call(spenderSm6oh6V, valueC6yVYLC, {from: accounts[4]});
		const nullyQigpMk = await contractZNlLgWx.claim.call({from: accounts[1]});
		await contractZNlLgWx.exit.call({from: accounts[2]});
		await contractZNlLgWx.setBridge.call(addrwaB3ix1, toggleYyLmK2u, {from: accounts[4]});

		await expect(contractZNlLgWx.deposit.call(valueXhLhhWd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractSoFWyMf = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountyOhX0TX = accounts[4]
		const valuew5YwwbD = BigInt("176")
		const dstwwl30KG = accounts[2]
		const srcJrI6B11 = accounts[4]
		const value3xK5C8 = BigInt("1034")
		const dstYBVcJI = accounts[2]
		const srcANGClNF = accounts[1]
		await contractSoFWyMf.exit.call({from: accounts[5]});
		const nullaesRc5S = await contractSoFWyMf.claimable.call(accountyOhX0TX, {from: accounts[5]});
		const nullsbOdxE = await contractSoFWyMf.transferFrom.call(srcJrI6B11, dstwwl30KG, valuew5YwwbD, {from: accounts[4]});
		const nullHTdEFJT = await contractSoFWyMf.transferFrom.call(srcANGClNF, dstYBVcJI, value3xK5C8, {from: accounts[0]});

		await expect(contractSoFWyMf.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractha6m7B = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountaHKtgOf = accounts[2]
		const valueHsZ0g6f = BigInt("1208")
		const valueh1zn5b1 = BigInt("1543")
		const dstjsPhOgK = accounts[3]
		const srcQwa06rq = accounts[3]
		const nullEumQCsN = await contractha6m7B.claim.call({from: accounts[2]});
		const nullzozATaB = await contractha6m7B.claimable.call(accountaHKtgOf, {from: accounts[2]});
		await contractha6m7B.withdraw.call(valueHsZ0g6f, {from: accounts[2]});
		const nullC4ob9xU = await contractha6m7B.transferFrom.call(srcQwa06rq, dstjsPhOgK, valueh1zn5b1, {from: accounts[2]});

		assert.equal(nullEumQCsN, 0)
		assert.equal(nullzozATaB, 0)
		await expect(contractha6m7B.withdraw.call(valueHsZ0g6f, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractgwfl7Cn = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueLznVd3Z = BigInt("916")
		const spenderywrP5K = accounts[3]
		const valueoVfTVkB = BigInt("262")
		const valueznvZhJ = BigInt("139")
		const valuea4Uag6t = BigInt("1285")
		const accountgzf1Gza = accounts[1]
		const nullwL3WIrq = await contractgwfl7Cn.approve.call(spenderywrP5K, valueLznVd3Z, {from: accounts[1]});
		await contractgwfl7Cn.deposit.call(valueoVfTVkB, {from: accounts[3]});
		await contractgwfl7Cn.deposit.call(valueznvZhJ, {from: accounts[4]});
		await contractgwfl7Cn.deposit.call(valuea4Uag6t, {from: accounts[4]});
		const nullmHwQPP = await contractgwfl7Cn.claimable.call(accountgzf1Gza, {from: accounts[3]});

		assert.equal(nullwL3WIrq, true)
		await expect(contractgwfl7Cn.deposit.call(valueoVfTVkB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractgDXd35 = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valuePRWCDbp = BigInt("547")
		const dstBtr9k6z = accounts[3]
		const valuej99GnbD = BigInt("185")
		const accounty69Hlmy = accounts[3]
		const value8bLmAK = BigInt("750")
		const spenderTCUJhRM = accounts[1]
		const nullB99bMk = await contractgDXd35.transfer.call(dstBtr9k6z, valuePRWCDbp, {from: accounts[0]});
		await contractgDXd35.deposit.call(valuej99GnbD, {from: accounts[2]});
		await contractgDXd35.exit.call({from: accounts[1]});
		const nullOqTh2lq = await contractgDXd35.claimable.call(accounty69Hlmy, {from: accounts[4]});
		const nullp10ibrF = await contractgDXd35.approve.call(spenderTCUJhRM, value8bLmAK, {from: accounts[4]});

		await expect(contractgDXd35.transfer.call(dstBtr9k6z, valuePRWCDbp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracteWi3xBO = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountxt0nzN = accounts[4]
		const toggleYikLKrY = true
		const addrgFz5U24 = accounts[2]
		const toggleQ2uCahk = false
		const addruZefINV = accounts[4]
		const nullMwBRUZt = await contracteWi3xBO.claimable.call(accountxt0nzN, {from: accounts[5]});
		await contracteWi3xBO.setBridge.call(addrgFz5U24, toggleYikLKrY, {from: accounts[5]});
		await contracteWi3xBO.setBridge.call(addruZefINV, toggleQ2uCahk, {from: accounts[4]});
		await contracteWi3xBO.exit.call({from: accounts[3]});

		assert.equal(nullMwBRUZt, 0)
		await expect(contracteWi3xBO.setBridge.call(addrgFz5U24, toggleYikLKrY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractw5hP7pC = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const nullWp9PKgS = await contractw5hP7pC.claim.call({from: accounts[0]});
		const nullmeWNLpN = await contractw5hP7pC.claim.call({from: accounts[4]});
		const nullKQJeeDR = await contractw5hP7pC.claim.call({from: accounts[2]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractDV0dOCm = await VBZRXWrapper_alt.new({from: accounts[0]});
		const toggleky5NfZA = true
		const addrAs6aBMD = accounts[0]
		const accountqP0JyS = accounts[7]
		const accountkcZ6bjP = accounts[5]
		const valuewJ63XS7 = BigInt("2021")
		await contractDV0dOCm.setBridge.call(addrAs6aBMD, toggleky5NfZA, {from: accounts[0]});
		const nullYgJXm8X = await contractDV0dOCm.claimable.call(accountqP0JyS, {from: accounts[2]});
		const nullT9HFxCb = await contractDV0dOCm.claimable.call(accountkcZ6bjP, {from: accounts[2]});
		await contractDV0dOCm.withdraw.call(valuewJ63XS7, {from: accounts[2]});

		assert.equal(nullT9HFxCb, 0)
		assert.equal(nullYgJXm8X, 0)
		await expect(contractDV0dOCm.claimable.call(accountkcZ6bjP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})